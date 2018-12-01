import Ticket from '../Ticket'
import TicketStatus from '../TicketStatus'

describe('Ticket', () => {
  test('fromJson', () => {
    const json = {
      id: '4E6791E5278842D9A5DCFD7F3F6443C0',
      summary: 'summary message',
      createdAt: 1543647750,
      status: '2'
    }
    const ticket = Ticket.fromJson(json)
    expect(ticket.id).toBe('4E6791E5278842D9A5DCFD7F3F6443C0')
    expect(ticket.summary).toBe('summary message')
    expect(ticket.createdAt.unix()).toBe(1543647750)
    expect(ticket.status.equals(TicketStatus.CLOSE)).toBe(true)
  })

  test('createTicket', () => {
    const ticket = Ticket.createTicket('summary message')
    expect(/[0-9A-F]{32}/.test(ticket.id)).toBe(true)
    expect(ticket.summary).toBe('summary message')
    expect(ticket.createdAt !== undefined).toBe(true)
    expect(ticket.status.equals(TicketStatus.OPEN)).toBe(true)
  })
})
