import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dimensions, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

import { randomSelectIdea } from "../../actions/actionCreators";

const RandomIdeaButton = () => {
  const dispatch = useDispatch();
  const { isEditMode, ideaList } = useSelector((state) => state);

  const handlePressRandomIdea = () => dispatch(randomSelectIdea());

  return ideaList.length >= 2 && !isEditMode ? (
    <View>
      <Button
        buttonStyle={styles.randomIdeaButton}
        containerStyle={styles.randomIdeaButtonContainer}
        titleStyle={styles.randomButtonTitle}
        title="Select random idea"
        onPress={handlePressRandomIdea}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  randomIdeaButtonContainer: {
    marginTop: -10,
    marginBottom: 12.5,
    borderColor: "#ECEEF1",
    borderWidth: 0.8,
    borderRadius: 2.5,
    marginLeft: 10,
    marginRight: 10,
  },
  randomIdeaButton: {
    backgroundColor: "#000",
    width: Dimensions.get("window").width * 0.95,
  },
  randomButtonTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
});

export default RandomIdeaButton;
