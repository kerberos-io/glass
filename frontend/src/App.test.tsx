import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

test("renders learn react link", () => {
  const history = createMemoryHistory();
  const store = createStore(rootReducer(history));

  render(
    <Provider store={store}>
      <Router history={history}>
        <App>Kerberos.io is awesome</App>
      </Router>
    </Provider>
  );
  const linkElement = screen.getByText(/Kerberos.io is awesome/i);
  expect(linkElement).toBeInTheDocument();
});
