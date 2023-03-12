import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Login Component", () => {
  it("should render the login Form", () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
  });

})