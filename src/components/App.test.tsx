import { mount } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";
import configureStore, { AppState } from "../store";
import App from "./App";

describe("<App />", () => {
  let store: any = null;
  beforeAll(() => {
    store = configureStore();
  });
  it("renders whole app correctly", () => {
    const appComponent = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const githubButton = appComponent
      .find('[data-test="github-button"]')
      .first();
    expect(githubButton.text()).toEqual("Visit Github Repository");
  });
});
