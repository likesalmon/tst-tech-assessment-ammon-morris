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

  it("should persist username", () => {
    const { getByLabelText } = render(<Signup />);
    const input = getByLabelText(/username/i);
    const value = "foo";
    fireEvent.change(input, { target: { value } });
    expect(input).toHaveValue(value);
  });

  it("should persist password", () => {
    const { getByLabelText } = render(<Signup />);
    const input = getByLabelText(/^password/i);
    const value = "foo";
    fireEvent.change(input, { target: { value } });
    expect(input).toHaveValue(value);
  });

  it("should persist confirm-password", () => {
    const { getByLabelText } = render(<Signup />);
    const input = getByLabelText(/^confirm password/i);
    const value = "foo";
    fireEvent.change(input, { target: { value } });
    expect(input).toHaveValue(value);
  });

  it("should focus on username initially", () => {
    const { getByLabelText } = render(<Signup />);
    expect(getByLabelText(/^username/i)).toHaveFocus();
  });

  it("should disable the submit button if the form is empty", () => {
    const { getByTestId } = render(<Signup />);
    expect(getByTestId("submit")).toBeDisabled();
  });

  it("should disable the submit button if username is empty", () => {
    const { getByLabelText, getByTestId } = render(<Signup />);
    const pass = "secret";
    fireEvent.change(getByLabelText(/^password/i), { target: { value: pass } });
    fireEvent.change(getByLabelText(/^confirm password/i), {
      target: { value: pass },
    });
    expect(getByTestId("submit")).toBeDisabled();
  });

  it("should disable the submit button if password is empty", () => {
    const { getByLabelText, getByTestId } = render(<Signup />);
    fireEvent.change(getByLabelText(/^username/i), {
      target: { value: "some user" },
    });
    fireEvent.change(getByLabelText(/^confirm password/i), {
      target: { value: "secret" },
    });
    expect(getByTestId("submit")).toBeDisabled();
  });

  it("should disable the submit button if confirm password is empty", () => {
    const { getByLabelText, getByTestId } = render(<Signup />);
    fireEvent.change(getByLabelText(/^username/i), {
      target: { value: "some user" },
    });
    fireEvent.change(getByLabelText(/^password/i), {
      target: { value: "secret" },
    });
    expect(getByTestId("submit")).toBeDisabled();
  });

  it("should disable the submit button and show an error if password fields don't match", () => {
    const { getByLabelText, getByTestId, getByText } = render(<Signup />);
    fireEvent.change(getByLabelText(/^username/i), {
      target: { value: "some user" },
    });
    fireEvent.change(getByLabelText(/^password/i), {
      target: { value: "secret" },
    });
    fireEvent.change(getByLabelText(/^confirm password/i), {
      target: { value: "foo" },
    });
    expect(getByTestId("submit")).toBeDisabled();
    expect(getByText(/passwords must match/i)).toBeInTheDocument();
  });

  it("should not show an error if password has a value but confirm password is empty", () => {
    const { getByLabelText, queryByText } = render(<Signup />);
    fireEvent.change(getByLabelText(/^username/i), {
      target: { value: "some user" },
    });
    fireEvent.change(getByLabelText(/^password/i), {
      target: { value: "secret" },
    });
    expect(queryByText(/passwords must match/i)).toBeNull();
  });
});
