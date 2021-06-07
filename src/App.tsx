import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import { db } from "./firebase";
import TaskItem from './component/TaskItem';
import { Heading } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react"
import AddTodo from './component/AddTodo';



const App: React.FC = () => {
  const [tasks, setTasks] = useState([{id: "", title: ""}]);
  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot)=> {
      setTasks(
        snapshot.docs.map((doc) => ({id: doc.id, title: doc.data().title}))
      );
    })
    return () => unSub();
  }, [])
  return (
    <div className={styles.app__root}>
      <VStack>
      <Heading mt="8" mb="3">ToDo App by React/firebase</Heading>
      <br />
      <AddTodo />
      <br />
      {tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.title}/>
        ))}
    </VStack>
    </div>
  );
};

export default App;
