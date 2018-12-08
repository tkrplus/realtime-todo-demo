import { Record } from 'immutable'

const TicketStatusRecord = Record({
  code: undefined,
  name: undefined
})

class TicketStatus extends TicketStatusRecord {
  constructor(code, name) {
    super({
      code: code,
      name: name
    })
  }

  static get OPEN() {
    return new TicketStatus('0', 'open')
  }

  static get IN_PROGRESS() {
    return new TicketStatus('1', 'in progress')
  }

  static get CLOSE() {
    return new TicketStatus('2', 'close')
  }

  static codeOf(code) {
    let status
    switch (code) {
      case this.OPEN.code:
        status = this.OPEN
        break
      case this.IN_PROGRESS.code:
        status = this.IN_PROGRESS
        break
      case this.CLOSE.code:
        status = this.CLOSE
        break
    }
    if (!status) {
      throw new Error('Illegal Arguments')
    }
    return status
  }

  static getNextStatus(status) {
    switch (status.code) {
      case this.OPEN.code:
        return this.IN_PROGRESS
      case this.IN_PROGRESS.code:
        return this.CLOSE
      case this.CLOSE.code:
        return null
    }
  }

  equals(status) {
    return this.code === status.code
  }
}

export default TicketStatus
