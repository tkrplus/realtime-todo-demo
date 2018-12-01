import { Record, List } from 'immutable'
import Ticket from './Ticket'

const TicketsRecord = Record({
  tickets: List()
})

class Tickets extends TicketsRecord {
  static fromJson(json) {
    const tickets = new Tickets()
    const list = json.map(ticket => Ticket.fromJson(ticket))
    return tickets.set('tickets', list)
  }
}

export default Tickets
