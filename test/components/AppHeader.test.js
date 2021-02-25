import React from "react";
import renderer from "react-test-renderer";
import AppHeader from "../../src/components/AppHeader";

test("AppHeader renders as expected", () => {
  const header = renderer.create(<AppHeader />).toJSON();

  expect(header).toMatchSnapshot();
});
