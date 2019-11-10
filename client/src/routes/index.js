import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

export default () => (
  <>
    <Switch>
      <Router>
        <div>
          <Route exact path='/items' component={Items} />
          <Route path='/welcome' component={ContactContainer} />
          <Route path='/share' component={ShareContainer} />
          <Route path='/profile' component={ProfileContainer} />
          <Route path='/' component={Items} />
        </div>
      </Router>
    </Switch>
  </>
)
