import { IconButton } from '@chakra-ui/button'
import React from 'react'
import { FaPen } from 'react-icons/fa'

interface IEditButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const EditButton: React.FC<IEditButton> = (props) => {
  return (
    <IconButton
      aria-label="edit" 
      icon={ <FaPen /> } 
      isRound={true} 
      onClick={props.onClick} 
      bgColor="transparent"
      _hover={{ bg: "gray.100", color:"red.400" }}
      disabled={props.disabled}
    /> 
  )
}

export default EditButton
