import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'

test("renders learn react link", () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App>
          Kerberos.io is awesome
      </App>
    </Router>);
  const linkElement = screen.getByText(/Kerberos.io is awesome/i);
  expect(linkElement).toBeInTheDocument();
});
