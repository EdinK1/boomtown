import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Items from '../pages/Items/index'
import Home from '../pages/Home/index'
import Share from '../pages/Share/index'
import Profile from '../pages/Profile/index'
import ViewerContext from '../context/ViewerProvider'
import Navbar from '../components/Navbar'
export default props => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      if (loading || !viewer) {
        return (
          <>
            <Switch>
              <Route path='/welcome' component={Home} />
              <Redirect from='*' to='/welcome' />>
            </Switch>
          </>
        )
      } else {
        return (
          <>
            <Switch>
              <Route path='/items' component={Items} />
              <Route exact path='/profile' component={Profile} />
              <Route path='/share' component={Share} />
              <Route path='/profile/:userid' component={Profile} />
              <Redirect from='*' to='/items' />
            </Switch>
          </>
        )
      }
    }}
  </ViewerContext.Consumer>
)
