import { StatusBar } from 'expo-status-bar';
import { View ,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './src/components/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form';
import styles from './src/styles/main';
import uuid from 'react-uuid';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

export default function App() {
  const [tasks, setTasks] = useState([
  {
    id: uuid(),
    description: "Clean the Kitchen",
    done: false
  },
  {
    id: uuid(),
    description: "Cook breakfast",
    done: false
  },
  {
    id: uuid(),
    description: "Buy Groceries",
    done: true
  }]);

  const addTask = (descr, taskDone) => {
    setTasks([...tasks, {
      id: uuid(),
      description: descr,
      done: taskDone
    }]);
  }

  const changeStatus = (id) => {
    const changedTasks = tasks.map((t)=> {
      if(t.id === id) {
        t.done = !t.done
      }
      return t
    })
    setTasks(changedTasks)
  }

  const taskRemove = (id) => {
    const changedTask = tasks.filter((t) => 
      t.id !== id
    )
    setTasks(changedTask)
  }

  return (
    <NavigationContainer style={styles.container}>
      {/* <View style={styles.container}> */}
        <StatusBar style="auto" />
        <Header />

        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="List">
           
            {props => <Tasks {...props} tasks={tasks} changeStatus={changeStatus} onRemove={taskRemove}/>}
          </Tab.Screen>
          
          <Tab.Screen name="Add">
            {props => <Form {...props} onAddTask={addTask}/>}
          </Tab.Screen>    
        </Tab.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
}