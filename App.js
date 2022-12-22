import { useState } from 'react';
import { StyleSheet, View, FlatList, Modal, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    closeModalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  const openModalHandler = () => {
    setModalIsVisible(true);
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#3E78C9" onPress={openModalHandler} />
      <GoalInput
        visible={modalIsVisible}
        animationType="slide"
        onAddGoal={addGoalHandler}
        onCloseModal={closeModalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  goalsContainer: {
    flex: 5,
  },
});
