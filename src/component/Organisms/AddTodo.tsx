import React, {useState} from 'react';
import { db } from "../../firebase";
import {HStack} from "@chakra-ui/react";
import RedButton from '../Atoms/RedButton';
import TextInput from '../Atoms/TextInput';

const AddTodo: React.FC = () => {
  const [input, setInput] = useState("");
  const newTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    db.collection("tasks").add({title: input});
    setInput("")
  };
  return (
      <HStack>
        <TextInput
          variant="outline" 
          focusBorderColor="red.200"
          width="100%"        
          placeholder="New task ?"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          value={input}
        />
        <RedButton
          onClick={newTask} 
          disabled={!input}
          text="Add Todo"
        />
      </HStack>
  )
}

export default AddTodo;
