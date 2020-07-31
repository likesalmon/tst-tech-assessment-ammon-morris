/**
 *
 *
 * Tests for Signup
 *
 *
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Signup, {
  State,
  incrementAction,
  decrementAction,
  reducer,
  Total
} from "./Signup";

describe("reducer", () => {
  let state: State;

  beforeEach(() => {
    state = {
      count: 0,
    };
  });

  it("should increment count", () => {
    expect(reducer(state, incrementAction())).toEqual({
      count: 1,
    });
  });

  it("should decrement count", () => {
    expect(reducer(state, decrementAction())).toEqual({
      count: -1,
    });
  });
});

describe("<Signup />", () => {
  it("should not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<Signup title="Signup" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it("should display the title", () => {
    const { getByRole } = render(<Signup title="Signup" />);
    expect(getByRole("banner")).toHaveTextContent(/Signup/);
  });

  it("should increment the count", () => {
    const { getByLabelText } = render(<Signup title="Signup" />);
    const increment = getByLabelText("increment");
    fireEvent.click(increment);
    fireEvent.click(increment);
    expect(getByLabelText("total")).toHaveTextContent("2");
  });

  it("should decrement the count", () => {
    const { getByLabelText } = render(<Signup title="Signup" />);
    const decrement = getByLabelText("decrement");
    fireEvent.click(decrement);
    fireEvent.click(decrement);
    expect(getByLabelText("total")).toHaveTextContent("-2");
  });
});

describe('<Total />', () => {
  it("should not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<Total />);
    expect(spy).not.toHaveBeenCalled();
  });
});