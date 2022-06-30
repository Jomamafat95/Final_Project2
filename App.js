import React from 'react';
import {useState} from "react";
import { ActivityIndicator, 
         Button, 
         DrawerLayoutAndroid,
         FlatList, 
         Image, 
         ImageBackground, 
         InputAccessoryView,
         KeyboardAvoidingView, 
         Modal,
         RefreshControl,
         SafeAreaView,
         ScrollView,
         SectionList,
         StatusBar,
         StyleSheet,
         Text,
         TextInput,
         View,
         VirtualizedList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) =>[
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return ( 
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color="#000080"
        onPress={startAddGoalHandler}
      />
      <GoalInput 
        visible= {modalIsVisible} 
        onAddGoal={addGoalHandler} 
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return (
              <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
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
    padding: 50,
    paddingHorizontal: 16,
  },

   goalsContainer: {
    flex: 6,
    flexDirection: 'Column',
    alignItems: 'center',
    justifyContent: 'Flex-start',
    padding: 15,
    marginBottom: 10,
  } 
});