import Tools from './Tools'
import { connect } from 'react-redux'
import {
  openTicketCreateDialog
} from '~/src/modules/Ticket'

const mapStateToProps = (state) => {
  return ''
}

const mapDispatchToPros = (dispatch) => {
  return {
    openTicketCreateDialog: () => {
      dispatch(openTicketCreateDialog())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Tools)
