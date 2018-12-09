import Ticket from '~/src/models/ticket/Ticket'
import Tickets from '~/src/models/ticket/Tickets'

const OPEN_TICKET_CREATE_DIALOG = 'Ticket/OPEN_TICKET_CREATE_DIALOG'
const CLOSE_TICKET_CREATE_DIALOG = 'Ticket/CLOSE_TICKET_CREATE_DIALOG'
const EDIT_CREATE_TICKET = 'Ticket/EDIT_CREATE_TICKET'
const CREATE_TICKET = 'Ticket/CREATE_TICKET'
const CHANGE_TO_NEXT_STATUS = 'Ticket/CHANGE_TO_NEXT_STATUS'

export const openTicketCreateDialog = () => ({
  type: OPEN_TICKET_CREATE_DIALOG
})

export const closeTicketCreateDialog = () => ({
  type: CLOSE_TICKET_CREATE_DIALOG
})

export const editCreateTicket = (summary, category, deadline) => ({
  type: EDIT_CREATE_TICKET,
  summary,
  category,
  deadline
})

export const createTicket = () => ({
  type: CREATE_TICKET
})

export const changeToNextStatus = (id) => ({
  type: CHANGE_TO_NEXT_STATUS,
  id
})

const initialState = {
  create: null,
  tickets: new Tickets()
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_TICKET_CREATE_DIALOG:
      return {
        ...state,
        create: Ticket.createTicket(null, null, null)
      }
    case CLOSE_TICKET_CREATE_DIALOG:
      return {
        ...state,
        create: null
      }
    case EDIT_CREATE_TICKET:
      return {
        ...state,
        create: Ticket.createTicket(
          action.summary,
          action.category,
          action.deadline
        )
      }
    case CREATE_TICKET:
      return {
        ...state,
        tickets: state.tickets.addTicket(state.create),
        create: null
      }
    case CHANGE_TO_NEXT_STATUS:
      return {
        ...state,
        tickets: state.tickets.changeTicketToNextStatus(action.id)
      }
    default:
      return state
  }
}
