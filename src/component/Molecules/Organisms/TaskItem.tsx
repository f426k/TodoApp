import React, { useState } from 'react';
import { db } from "../../../firebase";
import { VStack, HStack, Text, StackDivider, Spacer } from "@chakra-ui/react";
import DeleteButton from '../../Atoms/DeleteButton';
import EditButton from '../../Atoms/EditButton';
import TextInput from '../../Atoms/TextInput';
import Formlabel from '../../Atoms/Formlabel';


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
        <Text bgColor="gray.600" bgClip="text" fontWeight="bold">
          {props.title}
          </Text>
        <Spacer />
        <VStack>
          <Formlabel name="Edit task" />
          <TextInput
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)} 
            variant="flushed" 
            placeholder="Edit task"
            width="100%"
            focusBorderColor="red.100"
            value={title}
            />
        </VStack>
        <EditButton onClick={editTask} disabled={!title}/>
        <DeleteButton onClick={deleteTask}/>
      </HStack>
    </VStack>
    
  )
}

export default TaskItem
