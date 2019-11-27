import React from 'react'
import ViewerContext from '../../context/ViewerProvider'

const Loader = () => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      if (loading) {
        return (
          <>
            <p>spinner...</p>
            <p>“For it is in giving that we receive.”</p>
          </>
        )
      }
    }}
  </ViewerContext.Consumer>
)

export default Loader
