import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import theme from './theme'
import AppRoutes from './routes'
import './index.css'
import ItemPreviewProvider from './context/ItemPreviewProvider'
import { ViewerProvider } from './context/ViewerProvider'
import { ApolloProvider } from 'react-apollo'
import client from './apollo'
const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <ViewerProvider>
          <ItemPreviewProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </ItemPreviewProvider>
        </ViewerProvider>
      </ApolloProvider>
    </MuiThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
