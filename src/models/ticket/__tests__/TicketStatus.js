import TicketStatus from '../TicketStatus'

describe('TicketStatus', () => {
  test('OPEN', () => {
    expect(TicketStatus.OPEN.code).toBe('0')
  })

  test('IN_PROGRESS', () => {
    expect(TicketStatus.IN_PROGRESS.code).toBe('1')
  })

  test('CLOSE', () => {
    expect(TicketStatus.CLOSE.code).toBe('2')
  })

  test('codeOf', () => {
    expect(TicketStatus.codeOf('0').equals(TicketStatus.OPEN)).toBe(true)
    expect(TicketStatus.codeOf('1').equals(TicketStatus.IN_PROGRESS)).toBe(true)
    expect(TicketStatus.codeOf('2').equals(TicketStatus.CLOSE)).toBe(true)
  })

  test('codeOf/ Illefal Arguments', () => {
    expect(() => TicketStatus.codeOf('3')).toThrow()
  })

  test('equals', () => {
    expect(TicketStatus.OPEN.equals(TicketStatus.OPEN)).toBe(true)
    expect(TicketStatus.OPEN.equals(TicketStatus.CLOSE)).toBe(false)
  })
})
