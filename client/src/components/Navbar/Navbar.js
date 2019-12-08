import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../../images/boomtown.svg'
import MoreIcon from '@material-ui/icons/MoreVert'
import Fingerprint from '@material-ui/icons/Fingerprint'
import LogOut from '@material-ui/icons/PowerSettingsNew'
import { Link } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import Button from '@material-ui/core/Button'
import { LOGOUT_MUTATION } from '../../apollo/queries'
import client from '../../apollo'
import Icon from '@material-ui/core/Icon'
import { loadCSS } from 'fg-loadcss'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  nav: {
    justifyContent: 'space-between'
  },
  navMenuList: {
    padding: '0.75rem 1.85rem 0.75rem 1rem'
  },
  navMenuListIcon: {
    marginRight: '1.9rem'
  },
  logo: {
    width: '40px',
    height: 'auto'
  },
  navRight: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  navShareBtn: {
    fontSize: '0.8rem',
    borderRadius: '25px',
    paddingRight: '1.5rem'
  },
  navShareBtnIcon: {
    fontSize: '1.15rem',
    marginRight: '0.7rem'
  }
}))

const MenuAppBar = ({ logout, ...props }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const history = useHistory()

  useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css')
    )
  }, [])

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const logOutFunc = () => {
    logout()
    client.resetStore()
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.nav}>
          <Link to='/items'>
            <img alt='boomtown logo' src={logo} className={classes.logo} />
          </Link>
          <section className={classes.navRight}>
            {history.location.pathname !== '/share' && (
              <Button
                className={classes.navShareBtn}
                onClick={() => history.push('/share')}
              >
                <Icon
                  className={`${classes.navShareBtnIcon} fa fa-plus-circle`}
                />
                Share something
              </Button>
            )}
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <MoreIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <Link to='/profile'>
                  <MenuItem
                    className={classes.navMenuList}
                    onClick={() => setAnchorEl(null)}
                  >
                    <Fingerprint className={classes.navMenuListIcon} />
                    Your Profile
                  </MenuItem>
                </Link>
                <MenuItem className={classes.navMenuList} onClick={logOutFunc}>
                  <LogOut className={classes.navMenuListIcon} />
                  Sign Out
                </MenuItem>
              </Menu>
            </div>
          </section>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default compose(
  graphql(LOGOUT_MUTATION, {
    name: 'logout'
  })
)(MenuAppBar)
