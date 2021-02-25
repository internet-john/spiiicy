import React from "react";
import renderer from "react-test-renderer";
import IdeaInput from "../../src/components/Input";

test("IdeaInput renders as expected", () => {
  const ideaInput = renderer.create(<IdeaInput />).toJSON();

  expect(ideaInput).toMatchSnapshot();
});
