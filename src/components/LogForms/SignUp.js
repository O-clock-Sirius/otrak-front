import React from 'react';
import PropTypes from 'prop-types';

import {
  LogFormModalPaper,
  LogFormModalButton,
  LogFormModalSubtitle,
} from 'src/styles/materialUi/materialUiStyles/LogForms';

import {
  Link,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';

import './LogForms.scss';

import Field from './Field';

const SignUp = ({
  handleOpen,
  authInputValue,
  handleAuthInput,
  handleAuthInputSubmit,
  // eslint-disable-next-line react/prop-types
  userAuthInfos,
}) => (
  <LogFormModalPaper id="SignUp">
    <Container component="main" maxWidth="xs">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <img src="src/styles/assets/images/logos/logo-owl.png" alt="O'Track Logo" id="LogFormModalLogo" />
        </Grid>
        <Grid item>
          <Typography component="h1" variant="h5" color="primary">
            Sign up
          </Typography>
        </Grid>
        <Grid item>
          <LogFormModalSubtitle component="h2" variant="subtitle1" color="secondary">
            Don't be affraid, it's free !
          </LogFormModalSubtitle>
        </Grid>

        <form onSubmit={(event) => handleAuthInputSubmit(event, authInputValue)}>

          <Grid item>
            {/* eslint-disable-next-line react/prop-types */}
            {userAuthInfos.map((field) => (
              <Field
                key={field.name}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...field}
                handleAuthInput={handleAuthInput}
                value={userAuthInfos[field.index][`${field.name}`]}
              />
            ))}
          </Grid>
          <Grid item>
            <LogFormModalButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Create your account
            </LogFormModalButton>
          </Grid>

          <Grid container direction="row" spacing={3}>
            <Grid item xs>
              <Link onClick={(event) => handleOpen(event)} variant="body2" color="secondary">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={(event) => handleOpen(event)} variant="body2" color="secondary">
                Already registred ? Sign in
              </Link>
            </Grid>
          </Grid>

        </form>

      </Grid>
    </Container>
  </LogFormModalPaper>
);

SignUp.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  authInputValue: PropTypes.string.isRequired,
  handleAuthInput: PropTypes.func.isRequired,
  handleAuthInputSubmit: PropTypes.func.isRequired,
};

export default SignUp;
