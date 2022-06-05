import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [goalName, setGoalName] = useState("");

  const goalInputHandler = (goalText) => setGoalName(goalText);
  const addGoalHandler = () => {
    onAddGoal(goalName);
    setGoalName("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={goalName}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});