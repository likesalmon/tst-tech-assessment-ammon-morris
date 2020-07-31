/**
 *
 *
 * Tests for <StyledForm ?>
 *
 *
 */
import React from "react";
import { render } from "@testing-library/react";
import StyledForm from "./StyledForm";

describe("<StyledForm />", () => {
  it("should not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<StyledForm />);
    expect(spy).not.toHaveBeenCalled();
  });
});
