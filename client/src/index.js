import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Router from './routes'
import './index.css'
import ItemPreviewProvider from './context/ItemPreviewProvider'
import { ViewerProvider } from './context/ViewerProvider'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import client from './apollo'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ViewerProvider>
          <ItemPreviewProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ItemPreviewProvider>
        </ViewerProvider>
      </MuiThemeProvider>
    </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
