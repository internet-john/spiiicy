import React from "react";
import renderer from "react-test-renderer";
import IdeaList from "../../src/components/IdeaList";

test("IdeaList renders as expected", () => {
  const ideaList = renderer.create(<IdeaList />).toJSON();

  expect(ideaList).toMatchSnapshot();
});
