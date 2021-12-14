import React from "react";
import { render, screen, } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../src/pages/index";
import { Provider } from "react-redux";
import store from "../../src/store/store";

describe("Component UI testing", () => {

  test("Should render content correctly", () => {

    render(
        <Provider store={store}>
          <Home />
        </Provider>
      );

    const inputs = screen.getAllByTestId("input");
    const buttons = screen.getAllByTestId("button");
    const outputs = screen.getAllByTestId("output");

    // Check the element rendered in the page
    inputs.forEach((input, index) => {
        expect(input).toBeTruthy();
        expect(input).toBeInTheDocument();
    });

    buttons.forEach((button, index) => {
          expect(button).toBeTruthy();
          expect(button).toBeInTheDocument();
    });

    outputs.forEach((output, index) => {
        expect(output).toBeTruthy();
        expect(output).toBeInTheDocument();
  });
  });

});
