import React from "react";
import renderer from "react-test-renderer";
import RandomIdeaButton from "../../src/components/Button";

test("Button renders as expected", () => {
  const button = renderer.create(<RandomIdeaButton />).toJSON();

  expect(button).toMatchSnapshot();
});
