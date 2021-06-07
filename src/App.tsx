import React, {useState, useEffect} from 'react';
import { db } from "./firebase";
import { Heading } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react"
import AddTodo from './component/AddTodo';
import TaskItem from './component/TaskItem';



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
      <VStack>
      <Heading mt="8" mb="3">ToDo App by React/firebase</Heading>
      <br />
      <AddTodo />
      <br />
      {tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.title}/>
        ))}
    </VStack>
  );
};

export default App;
