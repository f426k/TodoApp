import React, {useState} from 'react';
import { db } from "../firebase";
import {Button, HStack, Input} from "@chakra-ui/react";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const newTask = (e: React.MouseEvent<HTMLButtonElement>)=>{
    db.collection("tasks").add({title: input});
    setInput("");
  };
  return (
      <HStack>
        <Input 
          variant="outline" 
          placeholder="New task?"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          focusBorderColor="red.200"
        />
        <Button
          px="8" 
          type="submit" 
          onClick={newTask} 
          bgColor="red.400" 
          color="white"
          _hover={{ bg: "red.500" }}
          disabled={!input}
        >
          Add Todo
        </Button>
      </HStack>
  )
}

export default AddTodo;
