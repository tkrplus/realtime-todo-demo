import React from 'React'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import TextField from '@material-ui/core/TextField'

import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
  addButton: {
    margin: theme.spacing.unit
  },
  SearchField: {
    margin: theme.spacing.unit
  },
  CategoryForm: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  }
})

const Tools = (props) => {
  const {
    classes
  } = props

  const categories = [
    'work',
    'home',
    'school'
  ]
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={10}>
          <TextField
            label='Search'
            className={classes.SearchField}
          />
          <FormControl
            className={classes.CategoryForm}
          >
            <InputLabel htmlFor="select-multiple-chip">
          Categories
            </InputLabel>
            <Select
              multiple
              displayEmpty
              value={[]}
            >
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  <Checkbox checked={categories.indexOf(category) > -1} />
                  <ListItemText primary={category} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="fab"
            color="secondary"
            aria-label="Add"
            className={classes.addButton} >
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;

`

export default withStyles(styles)(Tools)
