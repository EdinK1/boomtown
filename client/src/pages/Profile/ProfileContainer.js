import React, { Component } from 'react'
import Profile from './Profile'
// import FullScreenLoader from '../../components/FullScreenLoader';
// import { Query } from 'react-apollo';
// import {  } from '../../apollo/queries';
import Navbar from '../../components/Navbar/index'

class ProfileContainer extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Profile />
      </>
    )
  }
}

export default ProfileContainer
