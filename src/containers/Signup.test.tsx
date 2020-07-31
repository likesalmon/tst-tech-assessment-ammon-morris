/**
 *
 *
 * Tests for Signup
 *
 *
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Signup from "./Signup";

describe("<Signup />", () => {
  it("should not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<Signup />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.todo("should persist username");
  it.todo("should persist password");
  it.todo("should persist confirm-password");
  it.todo("should focus on username on load");
  it.todo("should disable the submit button if the form is empty");
  it.todo("should disable the submit button if a username is missing");
  it.todo("should disable the submit button if a password is missing");
  it.todo("should disable the submit button if a confirm password is missing");
  it.todo(
    "should disable the submit button and show an error if password fields don't match"
  );
  it.todo(
    "should not show an error if password has a value but confirm password is empty"
  );
});
