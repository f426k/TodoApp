import { Heading } from '@chakra-ui/layout'
import React from 'react'

interface IHeadText {
  title: string
}

const HeadText: React.FC<IHeadText> = (props) => {
  return (
    <Heading mt="8" mb="3" bgColor="gray.600" bgClip="text">
      {props.title}
    </Heading>
  )
}

export default HeadText
