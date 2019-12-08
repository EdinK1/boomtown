const styles = theme => ({
  profilePaper: {
    padding: '0.5rem',
    marginTop: '4rem'
  },
  profileWrapper: {
    padding: '2.5rem'
  },
  profileUserTitle: {
    fontSize: '2.2rem',
    textTransform: 'capitalize'
  },
  profileUserInfo: {
    paddingTop: '0.35rem',
    fontSize: '1.3rem'
  },
  profileUserBio: {
    paddingTop: '0.75rem'
  },
  sharedItemsWrapper: {
    marginTop: '3rem',
    width: '100%'
  },
  sharedItemsTitle: {
    color: '#f9a825',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  sharedItems: {
    padding: 0,
    listStyleType: 'none',
    display: 'grid',
    gridGap: '25px',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto'
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'auto'
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'auto'
    }
  },
  sharedItem: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto'
    }
  }
})

export default styles
