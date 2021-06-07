import React, {useState} from 'react';
import { db } from "../firebase";
import {Button, HStack, Input} from "@chakra-ui/react";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const newTask = (e: React.MouseEvent<HTMLButtonElement>)=>{
    db.collection("tasks").add({title: input});
    setInput('');
  };
  return (
      <HStack>
        <Input 
          variant="filled" 
          placeholder="New task?"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        />
        <Button px="8" type="submit" onClick={newTask}>Add Todo</Button>
      </HStack>
  )
}

export default AddTodo;
