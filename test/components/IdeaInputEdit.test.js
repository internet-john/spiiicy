import React from "react";
import renderer from "react-test-renderer";
import IdeaInputEdit from "../../src/components/Input";

test("IdeaInputEdit renders as expected", () => {
  const ideaInputEdit = renderer.create(<IdeaInputEdit />).toJSON();

  expect(ideaInputEdit).toMatchSnapshot();
});
