import moment from 'moment-timezone'

moment.tz.setDefault('Asia/Tokyo')

export const now = () => {
  return moment()
}

export const fromUnix = (time) => {
  return moment.unix(time)
}

export const toUnix = (time) => {
  return time.unix()
}

export default {
  now,
  fromUnix,
  toUnix
}
