/*
 *
 * Signup
 *
 */
import React, { FunctionComponent, useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import StyledForm from "../components/StyledForm";

/**
 * Curried function that accepts a dispatch method
 * and an input event, then triggers the dispatch with
 * the event value.
 */
const handleChange = (dispatch: React.Dispatch<string>) => (
  event: React.ChangeEvent<HTMLInputElement>
) => dispatch(event.currentTarget.value);
/**
 * Returns true if the string is empty.
 */
const isEmpty = (str: string): boolean => !Boolean(str.length);

/**
 * ############################################################################
 *
 * Components
 *
 * ############################################################################
 */
const Signup: FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Show an error if Confirm Password has a value that
  // doesn't match Password
  const showError: boolean =
    !isEmpty(confirmPassword) && password !== confirmPassword;
  // Disable submit if any fields are empty or passwords don't match
  const disableSubmit: boolean =
    isEmpty(username) ||
    isEmpty(password) ||
    isEmpty(confirmPassword) ||
    showError;

  return (
    <Container disableGutters>
      <Box margin={4}>
        <Typography component="h1" variant="h3" align="center">
          Sign Up
        </Typography>
      </Box>
      <Box
        borderRadius="borderRadius"
        boxShadow={3}
        padding={4}
        width={300}
        margin="0 auto"
      >
        <StyledForm noValidate>
          <TextField
            id="username"
            label="Username"
            required
            fullWidth
            value={username}
            onChange={handleChange(setUsername)}
            autoFocus
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            required
            fullWidth
            error={showError}
            onChange={handleChange(setPassword)}
          />
          <TextField
            id="confirm-password"
            type="password"
            label="Confirm Password"
            required
            fullWidth
            error={showError}
            onChange={handleChange(setConfirmPassword)}
            helperText={showError ? "Passwords must match." : null}
          />
          <Button
            type="submit"
            disabled={disableSubmit}
            color="primary"
            variant="contained"
            size="large"
            data-testid="submit"
          >
            Submit
          </Button>
        </StyledForm>
      </Box>
    </Container>
  );
};

export default Signup;
