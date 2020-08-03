/**
 *
 *
 * <App />
 *
 *
 */
import React, { FunctionComponent } from "react";
import SignUp from "./SignUp";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default App;
