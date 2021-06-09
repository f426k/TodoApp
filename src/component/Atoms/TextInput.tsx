import { Input } from '@chakra-ui/input'
import React from 'react'

interface IInput {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  variant: "outline" | (string & {}) | "filled" | "flushed" | "unstyled" | undefined;
  placeholder: string;
  width: string;
  focusBorderColor: string;
  value: string | number | readonly string[] | undefined;
}

const TextInput: React.FC<IInput> = (props) => {
  return (
    <Input
      onChange={props.onChange}
      variant={props.variant}
      placeholder={props.placeholder}
      width={props.width}
      focusBorderColor={props.focusBorderColor}
      value={props.value}
      marginTop="0px"
    />
  )
}

export default TextInput
