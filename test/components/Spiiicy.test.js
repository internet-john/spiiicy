import React from "react";
import renderer from "react-test-renderer";
import Spiiicy from "../../src/components/Spiiicy";

test("Spiiicy renders as expected", () => {
  const spiiicy = renderer.create(<Spiiicy />).toJSON();

  expect(spiiicy).toMatchSnapshot();
});
