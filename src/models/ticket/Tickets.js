import { Record, List } from 'immutable'
import Ticket from './Ticket'

const TicketsRecord = Record({
  tickets: List()
})

class Tickets extends TicketsRecord {
  constructor() {
    super()
    return this.set('tickets', new List())
  }

  static fromJson(json) {
    const tickets = new Tickets()
    const list = json.map(ticket => Ticket.fromJson(ticket))
    return tickets.set('tickets', list)
  }

  addTicket(ticket) {
    return this.set('tickets', this.tickets.push(ticket))
  }

  changeTicketToNextStatus(id) {
    return this.set(
      'tickets',
      this.tickets
        .map(ticket =>
          ticket.id === id
            ? ticket.toNextStatus()
            : ticket)
        .filter(ticket => !!ticket)
    )
  }

  filterByStatus(status) {
    const filtered = this.tickets
      .filter(ticket => status.equals(ticket.status))
    return filtered
  }
}

export default Tickets
