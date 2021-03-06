import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
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

  render() {
    const { classes, login, signup } = this.props
    return (
      <Form
        onSubmit={values => {
          const userMutation = {
            variables: {
              user: values
            }
          }
          this.state.formToggle ? login(userMutation) : signup(userMutation)
        }}
        validate={values => validate(values)}
        render={({ handleSubmit, invalid, pristine, values }) => (
          <form onSubmit={handleSubmit} className={classes.accountForm}>
            {!this.state.formToggle && (
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor='fullName'>Username</InputLabel>
                <Field
                  name='fullName'
                  render={({ input, meta }) => (
                    <Input
                      id='fullName'
                      type='text'
                      error={meta.touched && !!meta.error}
                      inputProps={{
                        ...input,
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
                    error={meta.touched && !!meta.error}
                    inputProps={{
                      ...input,
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
                type='password'
                render={({ input, meta }) => (
                  <Input
                    id='password'
                    error={meta.touched && !!meta.error}
                    inputProps={{
                      ...input,
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
                  disabled={pristine || invalid}
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
            <Typography className={classes.errorMessage}></Typography>
          </form>
        )}
      />
    )
  }
}

const refetchQueries = [
  {
    query: VIEWER_QUERY
  }
]

export default compose(
  graphql(SIGNUP_MUTATION, {
    options: {
      refetchQueries
    },
    name: 'signup'
  }),
  graphql(LOGIN_MUTATION, {
    options: {
      refetchQueries
    },
    name: 'login'
  }),
  withStyles(styles)
)(AccountForm)
