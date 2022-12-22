import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({text, onDeleteItem, id}) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 5,
    backgroundColor: '#3E78C9',
    fontWeight: 'bold',
    borderRadius: 10,
  },
  goalText: {
    color: 'white',
  },
});
