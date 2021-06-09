import { IconButton } from '@chakra-ui/button'
import React from 'react'
import { FaTrash } from 'react-icons/fa'

interface IDeleteButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const DeleteButton: React.FC<IDeleteButton> = (props) => {
  return (
      <IconButton
          aria-label="delete" 
          icon={ <FaTrash /> } 
          isRound={true} 
          onClick={props.onClick} 
          ml="4" 
          bgColor="transparent"
          _hover={{ bg: "gray.100", color:"red.400" }}
        /> 
  )
};

export default DeleteButton