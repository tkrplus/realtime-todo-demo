import Tickets from '../Tickets'

describe('Tickets', () => {
  test('fromJson', () => {
    const json = [
      {
        id: '4E6791E5278842D9A5DCFD7F3F6443C0',
        summary: 'summary message',
        createdAt: 1543647750,
        status: '0'
      },
      {
        id: '4E6791E5278842D9A5DCFD7F3F6443C1',
        summary: 'summary message',
        createdAt: 1543647751,
        status: '2'
      }
    ]
    const tickets = Tickets.fromJson(json)
    expect(tickets.tickets[0].id).toBe('4E6791E5278842D9A5DCFD7F3F6443C0')
    expect(tickets.tickets[1].id).toBe('4E6791E5278842D9A5DCFD7F3F6443C1')
  })
})
