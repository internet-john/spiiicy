import React from "react";
import renderer from "react-test-renderer";
import Idea from "../../src/components/Idea";

test("Idea renders as expected", () => {
  const idea = renderer.create(<Idea />).toJSON();

  expect(idea).toMatchSnapshot();
});
