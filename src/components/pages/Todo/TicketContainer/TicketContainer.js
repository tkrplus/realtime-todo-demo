import React from 'React'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import TicketList from './TicketList'

const TicketContainer = (props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar
          position='relative'
          color='default'>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Open" />
            <Tab label="In Progress" />
            <Tab label="Close" />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={4}>
        <TicketList />
      </Grid>
      <Grid item xs={4}>
        <TicketList />
      </Grid>
      <Grid item xs={4}>
        <TicketList />
      </Grid>

    </Grid>
  )
}

export default TicketContainer