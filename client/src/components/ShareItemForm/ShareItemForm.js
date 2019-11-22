import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { Select, Checkbox } from '@material-ui/core'

import { Form, Field } from 'react-final-form'
import styles from './styles'
import { ItemPreviewContext } from '../../context/ItemPreviewProvider'

class ShareForm extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit() {
    console.log('test')
  }

  render() {
    const { classes } = this.props
    console.log(classes)

    return (
      <ItemPreviewContext.Consumer>
        {({ state, updatePreview, resetPreview }) => (
          <Form
            onSubmit={this.onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className={classes.form}>
                <FormControl fullWidth className={classes.formControl}>
                  <Typography className={classes.formTitle} component='h1'>
                    Share. Borrow. Prosper
                  </Typography>
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor='itemImg'>Add image url</InputLabel>
                  <Field
                    name='itemImg'
                    render={({ input, meta }) => (
                      <Input
                        id='itemImg'
                        type='text'
                        error={meta.touched && !!meta.error}
                        inputProps={{
                          ...input,
                          autoComplete: 'off'
                        }}
                      />
                    )}
                  />
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor='itemName'>Name your item</InputLabel>
                  <Field
                    name='itemName'
                    render={({ input, meta }) => (
                      <Input
                        id='itemName'
                        type='text'
                        error={meta.touched && !!meta.error}
                        inputProps={{
                          ...input,
                          autoComplete: 'off'
                        }}
                      />
                    )}
                  />
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                  <TextField
                    id='itemDesc'
                    label='Describe your item'
                    multiline
                    rows='4'
                  />
                </FormControl>

                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor='tags'>Add some tags</InputLabel>
                  <Field
                    name='tags'
                    render={({ input }) => (
                      <Select id='tags'>
                        <option value=''></option>
                        <option value='Household Items'>
                          <Checkbox checked='false' />
                          Household Items
                        </option>
                        <option value='Tools'>
                          <Checkbox checked='false' />
                          Tools
                        </option>
                        <option value='Electronics'>
                          <Checkbox checked='false' />
                          Electronics
                        </option>
                      </Select>
                    )}
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Button
                    type='submit'
                    className={classes.formButton}
                    variant='contained'
                    size='large'
                    color='secondary'
                    disabled={true}
                  >
                    Share
                  </Button>
                </FormControl>
              </form>
            )}
          />
        )}
      </ItemPreviewContext.Consumer>
    )
  }
}

export default withStyles(styles)(ShareForm)
