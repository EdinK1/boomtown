import React from 'react'
import { Route, Switch } from 'react-router'
import Items from '../pages/Items/index'
import Home from '../pages/Home/index'
import Share from '../pages/Share/index'
import Profile from '../pages/Profile/index'


export default () => (
  <>
    <Switch>
        <div>
          <Route exact path='/items' component={Items} />
          <Route path='/welcome' component={Home} />
          <Route path='/share' component={Share} />
          <Route path='/profile' component={Profile} />
          <Route exact path='/' component={Items} />
        </div>
    </Switch>
  </>
)
