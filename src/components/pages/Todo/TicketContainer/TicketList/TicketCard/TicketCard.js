import React from 'React'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import TIME from '~/src/utils/TIME'

const styles = theme => ({
  card: {
    margin: '12px 8px'
  }
})

const TicketCard = (props) => {
  const {
    classes,
    ticket
  } = props
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="h2">
            { ticket.summary }
          </Typography>
          <Typography color="textSecondary">
            { ticket.category }
          </Typography>
          <Typography color="textSecondary">
            { TIME.display(ticket.deadline) }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default withStyles(styles)(TicketCard)
