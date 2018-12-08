import TicketList from './TicketList'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const {
    Ticket
  } = state
  const {
    status
  } = ownProps
  const tickets = Ticket.tickets.filterByStatus(status)
  return {
    tickets
  }
}

const mapDispatchToPros = (dispatch, ownProps) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(TicketList)
