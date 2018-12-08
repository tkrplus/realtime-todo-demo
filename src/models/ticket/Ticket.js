import { Record } from 'immutable'
import UUID from '~/src/utils/UUID'
import TIME from '~/src/utils/TIME'
import Category from '~/src/models/category/Category'
import TicketStatus from './TicketStatus'

const TicketRecord = Record({
  id: undefined,
  summary: undefined,
  category: undefined,
  deadline: undefined,
  status: undefined,
  createdAt: undefined
})

export default class Ticket extends TicketRecord {
  static fromJson(json) {
    const ticket = new Ticket()
    return ticket
      .set('id', json.id)
      .set('summary', json.summary)
      .set('category', Category.codeOf(json.category, true))
      .set('deadline', TIME.fromUnix(json.category))
      .set('createdAt', TIME.fromUnix(json.createdAt))
      .set('status', TicketStatus.codeOf(json.status))
  }

  static createTicket(summary, category, deadline) {
    const ticket = new Ticket()
    return ticket
      .set('id', UUID.generate())
      .set('summary', summary)
      .set('category', category)
      .set('deadline', deadline)
      .set('createdAt', TIME.now())
      .set('status', TicketStatus.OPEN)
  }

  validate() {
    let summaryError = !this.summary
    if (!summaryError) summaryError = this.summary.length > 60
    const deadlineError = TIME.validate(this.deadline)
    if (summaryError || deadlineError) {
      return {
        summary: summaryError,
        deadline: deadlineError
      }
    }
    return null
  }

  toNextStatus() {
    const nextStatus = TicketStatus.getNextStatus(this.status)
    if (!nextStatus) {
      return null
    }
    return this
      .set('status', nextStatus)
  }
}
