import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import logo from '../../images/boomtown.svg'
import MoreIcon from '@material-ui/icons/MoreVert'
import Fingerprint from '@material-ui/icons/Fingerprint'
import LogOut from '@material-ui/icons/PowerSettingsNew'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

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
  shareBtn: {
    fontSize: '0.8rem',
    borderRadius: '25px',
    paddingRight: '1.5rem'
  }
}))

export default function MenuAppBar() {
  const classes = useStyles()
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const history = useHistory()
  console.log(history)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar className={classes.nav}>
          <Link to='/items'>
            <img src={logo} className={classes.logo} />
          </Link>

          {auth && (
            <section className={classes.navRight}>
              {history.location.pathname !== '/share' && (
                <Button
                  className={classes.shareBtn}
                  onClick={() => history.push('/share')}
                >
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
                  onClose={handleClose}
                >
                  <MenuItem
                    className={classes.navMenuList}
                    onClick={handleClose}
                  >
                    <Fingerprint className={classes.navMenuListIcon} />
                    <Link to='/profile'>Your Profile</Link>
                  </MenuItem>
                  <MenuItem
                    className={classes.navMenuList}
                    onClick={handleClose}
                  >
                    <LogOut className={classes.navMenuListIcon} />
                    Sign Out
                  </MenuItem>
                </Menu>
              </div>
            </section>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
