import { VStack } from '@chakra-ui/layout'
import React, {useState, useEffect} from 'react'
import { db } from "../../firebase";
import HeadText from '../Atoms/HeadText'
import AddTodo from '../Molecules/Organisms/AddTodo'
import TaskItem from '../Molecules/Organisms/TaskItem'

const TodoApptemplate = () => {
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
      <HeadText title="Todo App"/>
      <br />
      <AddTodo />
      <br />
      {tasks.map((task) => (
        <TaskItem 
          key={task.id}
          id={task.id}
          title={task.title}
        />
      ))}
    </VStack>
  )
}

export default TodoApptemplate
