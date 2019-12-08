import React from 'react'
import Profile from './Profile'
// import FullScreenLoader from '../../components/FullScreenLoader';
// import { Query } from 'react-apollo';
// import {  } from '../../apollo/queries';
import Navbar from '../../components/Navbar/index'

const ProfileContainer = () => {
  return (
    <>
      <Navbar />
      <Profile />
    </>
  )
}

export default ProfileContainer
