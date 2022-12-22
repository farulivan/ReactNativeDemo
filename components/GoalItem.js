import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        //for android styling
        android_ripple={{ color: '#284C80' }}
        //for ios styling
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
    marginVertical: 5,
    backgroundColor: '#3E78C9',
    fontWeight: 'bold',
    borderRadius: 10,
  },
  pressedItem: {
    backgroundColor: '#284C80',
  },
  goalText: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white',
  },
});
