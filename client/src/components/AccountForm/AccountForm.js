import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
/**
 * @TODO: Uncomment the following lines when authentication is added to the form
 *
 *
 */

import { Form, Field } from 'react-final-form'
import { graphql, compose } from 'react-apollo'
import {
  LOGIN_MUTATION,
  SIGNUP_MUTATION,
  VIEWER_QUERY
} from '../../apollo/queries'
import validate from './helpers/validation'

import styles from './styles'

class AccountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formToggle: true
    }
  }

  onSubmit() {
    console.log(this.state)
  }

  render() {
    const { classes } = this.props

    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={classes.accountForm}>
            {!this.state.formToggle && (
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor='fullname'>Username</InputLabel>
                <Field
                  name='fullname'
                  render={({ input, meta }) => (
                    <Input
                      id='fullname'
                      type='text'
                      {...input}
                      inputProps={{
                        autoComplete: 'off'
                      }}
                      value={input.value}
                    />
                  )}
                />
              </FormControl>
            )}
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor='email'>Email</InputLabel>
              <Field
                name='email'
                render={({ input, meta }) => (
                  <Input
                    id='email'
                    type='email'
                    {...input}
                    inputProps={{
                      autoComplete: 'off'
                    }}
                    value={input.value}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <Field
                name='password'
                render={({ input, meta }) => (
                  <Input
                    id='password'
                    type='password'
                    {...input}
                    inputProps={{
                      autoComplete: 'off'
                    }}
                    value={input.value}
                  />
                )}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <Grid
                container
                direction='row'
                justify='space-between'
                alignItems='center'
              >
                <Button
                  type='submit'
                  className={classes.formButton}
                  variant='contained'
                  size='large'
                  color='secondary'
                  disabled={false}
                >
                  {this.state.formToggle ? 'Enter' : 'Create Account'}
                </Button>
                <Typography>
                  <button
                    className={classes.formToggle}
                    type='button'
                    onClick={() => {
                      this.setState({
                        formToggle: !this.state.formToggle
                      })
                    }}
                  >
                    {this.state.formToggle
                      ? 'Create an account.'
                      : 'Login to existing account.'}
                  </button>
                </Typography>
              </Grid>
            </FormControl>
            <Typography className={classes.errorMessage}>
              {/* @TODO: Display sign-up and login errors */}
            </Typography>
          </form>
        )}
      />
    )
  }
}

// @TODO: Use compose to add the login and signup mutations to this components props.
// @TODO: Refetch the VIEWER_QUERY to reload the app and access authenticated routes.
export default compose(
  graphql(SIGNUP_MUTATION, {
    options: {
      query: {
        VIEWER_QUERY
      },
      name: 'signup'
    }
  }),
  graphql(LOGIN_MUTATION, {
    options: {
      query: {
        VIEWER_QUERY
      },
      name: 'login'
    }
  }),
  withStyles(styles)
)(AccountForm)
