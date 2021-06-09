import { Button } from '@chakra-ui/button'
import React from 'react'

interface IRedButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  text: string
}
const RedButton: React.FC<IRedButton> = (props) => {
  return (
    <Button
      px="8" 
      type="button" 
      onClick={props.onClick} 
      bgColor="red.400" 
      color="white"
      _hover={{ bg: "red.500" }}
      disabled={props.disabled}
    >
      {props.text}
    </Button>
  )
}

export default RedButton
