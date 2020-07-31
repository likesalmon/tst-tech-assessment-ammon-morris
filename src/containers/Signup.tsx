/*
 *
 * Signup
 *
 */
import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

import StyledForm from "../components/StyledForm";

/**
 * ############################################################################
 *
 * State
 *
 * ############################################################################
 */
export interface State {
  readonly count: number;
}
export const initialState: State = {
  count: 0,
};

/**
 * ############################################################################
 *
 * Actions
 *
 * ############################################################################
 */
export enum ActionTypes {
  INCREMENT,
  DECREMENT,
}

interface IncrementAction {
  type: ActionTypes.INCREMENT;
}
export const incrementAction = (): IncrementAction => ({
  type: ActionTypes.INCREMENT,
});

interface DecrementAction {
  type: ActionTypes.DECREMENT;
}
export const decrementAction = (): DecrementAction => ({
  type: ActionTypes.DECREMENT,
});

// Add exhaustiveness checking to the reducer
type Action = IncrementAction | DecrementAction;

/**
 * ############################################################################
 *
 * Reducer
 *
 * ############################################################################
 */
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    // No default
  }
};

/**
 * ############################################################################
 *
 * Components
 *
 * ############################################################################
 */
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface SignupProps {}

const Signup: FunctionComponent<SignupProps> = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const submit = () => console.log("submit");
  const passwordsMatch = password === confirmPassword;

  return (
    <Container>
      <StyledForm noValidate onSubmit={submit}>
        <TextField id="username" label="Username" />
        <TextField
          id="password"
          type="password"
          label="Password"
          error={password.length > 0 && password === confirmPassword}
          onChange={(e: ChangeEvent): void =>
            setPassword(e.currentTarget.value)
          }
        />
        <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
        <TextField
          id="confirm-password"
          type="password"
          label="Confirm Password"
          error={confirmPassword.length > 0 && password === confirmPassword}
          onChange={(e: ChangeEvent): void =>
            setConfirmPassword(e.currentTarget.value)
          }
        />
        <Button
          type="submit"
          disabled={
            password.length < 1 &&
            confirmPassword.length < 1 &&
            password === confirmPassword
          }
          color="primary"
          variant="contained"
          size="large"
        >
          Submit
        </Button>
      </StyledForm>
    </Container>
  );
};

export default Signup;
