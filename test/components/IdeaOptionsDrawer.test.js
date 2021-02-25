import React from "react";
import renderer from "react-test-renderer";
import IdeaOptionsDrawer from "../../src/components/IdeaOptionsDrawer";

test("IdeaOptionsDrawer renders as expected", () => {
  const ideaOptionsDrawer = renderer.create(<IdeaOptionsDrawer />).toJSON();

  expect(ideaOptionsDrawer).toMatchSnapshot();
});
