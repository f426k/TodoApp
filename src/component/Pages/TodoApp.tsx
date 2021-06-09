import React, {useState, useEffect} from 'react'
import { db } from "../../firebase";
import TodoApptemplate from '../Templates/TodoApptemplate'

const TodoApp = () => {
  const [tasks, setTasks] = useState([{id: "", title: ""}]);
  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot)=> {
      setTasks(
        snapshot.docs.map((doc) => ({id: doc.id, title: doc.data().title}))
      );
    });
    return () => unSub();
  }, []);
  return (
    <TodoApptemplate />
  )
};

export default TodoApp
