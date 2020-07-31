/**
 *
 *
 * <App />
 *
 *
 */
import React, { FunctionComponent } from "react";
import Signup from "./Signup";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default App;
