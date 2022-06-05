import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDeleteItem(id)}
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    backgroundColor: "#210644",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
