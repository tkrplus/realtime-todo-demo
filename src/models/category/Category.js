import { Record } from 'immutable'

const CategoryRecord = Record({
  code: undefined,
  name: undefined
})

class Category extends CategoryRecord {
  constructor(code, name) {
    super({
      code: code,
      name: name
    })
  }

  static get WORK() {
    return new Category('0', 'work')
  }

  static get PERSONAL() {
    return new Category('1', 'personal')
  }

  static get HOME() {
    return new Category('2', 'home')
  }

  static get TRAVEL() {
    return new Category('3', 'travel')
  }

  static get CATEGORY_LIST() {
    return [
      this.WORK,
      this.PERSONAL,
      this.HOME,
      this.TRAVEL
    ]
  }

  static codeOf(code, nullable = false) {
    let status
    switch (code) {
      case this.WORK.code:
        status = this.WORK
        break
      case this.PERSONAL.code:
        status = this.PERSONAL
        break
      case this.HOME.code:
        status = this.HOME
        break
      case this.TRAVEL.code:
        status = this.TRAVEL
        break
    }
    if (!nullable && !status) {
      throw new Error('Illegal Arguments')
    }
    return status
  }

  equals(status) {
    return this.code === status.code
  }
}

export default Category
