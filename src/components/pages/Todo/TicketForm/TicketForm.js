import React from 'React'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => ({
  field: {
    width: '95%',
    margin: theme.spacing.unit
  }
})

const TicketForm = (props) => {
  const {
    classes
  } = props
  const categories = [
    'work',
    'home',
    'school'
  ]

  return (
    <Dialog
      open={false}
    >
      <DialogTitle>
        Create New Ticket
      </DialogTitle>
      <DialogContent>
        <DialogContentText>

        </DialogContentText>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label='Summary'
              className={classes.field}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl
              className={classes.field}
            >
              <InputLabel >
              Category
              </InputLabel>
              <Select
                name='Category'
                displayEmpty
              >
                {
                  categories.map(category => (
                    <MenuItem key={category} value={category}>
                      { category }
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="date"
              label="Deadline"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              className={classes.field}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button>
          Cancel
        </Button>
        <Button color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default withStyles(styles)(TicketForm)
