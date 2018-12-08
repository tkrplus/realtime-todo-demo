
const OPEN_TICKET_CREATE_DIALOG = 'Ticket/OPEN_TICKET_CREATE_DIALOG'

export const openTicketCreateDialog = () => ({
  type: OPEN_TICKET_CREATE_DIALOG
})

const initialState = {
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
