import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Items from '../pages/Items/index'
import Home from '../pages/Home/index'
import Share from '../pages/Share/index'
import Profile from '../pages/Profile/index'
// import ViewerContext from '../context/ViewerProvider'
export default props => (
  // <ViewerContext.Consumer>
  // {({ data, loading }) => {
  // if (loading || !data) {
  // return (
  //     <Switch>
  //       <Route path='/welcome' component={Home} />
  //       <Redirect from='/*' to='/welcome' />
  //     </Switch>
  // //   )
  // } else {
  //   return (
  <>
    <Switch>
      <Route path='/welcome' component={Home} />
      <Route path='/items' component={Items} />
      <Route path='/profile' component={Profile} />
      <Route path='/share' component={Share} />
    </Switch>
  </>
  //       )
  //     }
  //   }}
  // </ViewerContext.Consumer>
)
