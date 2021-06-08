import React, { useState } from 'react';
import firebase from "firebase/app";
import { db } from "../firebase";
import { VStack, IconButton, HStack, Text, StackDivider, Spacer, Input } from "@chakra-ui/react";
import { FaTrash, FaCheck } from "react-icons/fa"


interface PROPS {
  id: string;
  title: string;
}

const TaskItem: React.FC<PROPS> = (props) => {
  const [title, setTitle] = useState(props.title);

  const editTask = () => {
    db.collection("tasks").doc(props.id).set({title: title}, {merge: true});
    setTitle("");
  };
  const deleteTask = () => {
    db.collection("tasks").doc(props.id).delete();
  };

  return (
    <VStack
      divider={<StackDivider />}
      borderWidth="2px"
      p="4"
      borderColor="red.100"
      borderRadius="lg"
      mb="2"
      width="100%"
      maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
      alignItems="stretch"
    >
      <HStack>
        <Text bgColor="gray.600" bgClip="text" fontWeight="bold">{props.title}</Text>
        <Spacer />
        <Input 
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)} 
          variant="flushed" 
          placeholder="Edit task"
          width="40%"
          focusBorderColor="red.100"
          />
        <IconButton 
          aria-label="edit" 
          icon={ <FaCheck /> } 
          isRound={true} 
          onClick={editTask} 
          bgColor="transparent"
          _hover={{ bg: "gray.100", color:"red.400" }}
        /> 
        <IconButton 
          aria-label="delete" 
          icon={ <FaTrash /> } 
          isRound={true} 
          onClick={deleteTask} 
          ml="4" 
          bgColor="transparent"
          _hover={{ bg: "gray.100", color:"red.400" }}
        /> 
      </HStack>
    </VStack>
    
  )
}

export default TaskItem
