import React from 'react'
import ReactDOM from 'react-dom'
import Todo from '~/src/components/pages/Todo'
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'
import GlobalStyle from '~/src/const/GlobalStyle'
import * as serviceWorker from './serviceWorker'
import orange from '@material-ui/core/colors/orange'
import amber from '@material-ui/core/colors/amber'

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: amber
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <GlobalStyle />
    <Todo />
  </MuiThemeProvider>
  , document.getElementById('root'))

serviceWorker.unregister()
