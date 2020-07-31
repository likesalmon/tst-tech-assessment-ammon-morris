/**
 *
 *
 * <App />
 *
 *
 */
import React, { FunctionComponent } from "react";
import Container from "@material-ui/core/Container";
import Signup from "./Signup";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <Container>
      <Signup />
    </Container>
  );
};

export default App;
