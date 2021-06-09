import { FormLabel } from '@chakra-ui/form-control'
import React from 'react'

interface IFormlabel {
  name: string;
}

const Formlabel: React.FC<IFormlabel> = (props) => {
  return (
    <FormLabel
            color="gray.600"
            fontSize="sm"
            margin="0px"
            alignSelf="flex-start"
          >
            {props.name}
          </FormLabel>
  )
}

export default Formlabel
