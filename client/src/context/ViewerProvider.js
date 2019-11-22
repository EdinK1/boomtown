import { Query } from 'react-apollo'
import React from 'react'
import { VIEWER_QUERY } from '../apollo/queries'

const ViewerContext = React.createContext()

const ViewerProvider = ({ children }) => {
  return (
    <Query query={VIEWER_QUERY}>
      {({ data, loading }) => {
        console.log(data)
        return (
          <ViewerContext.Provider value={loading}>
            {children}
          </ViewerContext.Provider>
        )
      }}
    </Query>
  )
}

export { ViewerProvider }
export default ViewerContext
