import React from 'react'
import ReactDOM from 'react-dom'
import Todo from '~/src/components/pages/Todo'
import {
  MuiThemeProvider
} from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import GlobalStyle from '~/src/const/GlobalStyle'
import * as serviceWorker from './serviceWorker'
import theme from '~/src/const/Theme'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <Todo />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'))

serviceWorker.unregister()
