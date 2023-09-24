import { Badge, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
const resultCard = {
  border:"1px",
  borderColor:"linear-gradient(99.77deg, rgba(205, 203, 203, 0.2) 5.23%, rgba(188, 172, 172, 0.152) 86.91%)",
  flexDirection:"column",
  margin:"15px",
  borderRadius:"20px",
  overflow:"hidden",
  boxShadow:"8px 4px 4px #00000040",
  width:"250px"
}
const cardDesc = {
  padding:"15px",
  fontSize:"15px",
  color:"#000000",
  background:"linear-gradient(82.6deg, rgba(207, 196, 196, 0.36) 35.92%, rgba(207, 196, 196, 0) 84.81%, rgba(207, 196, 196, 0) 84.81%)",
  flexDirection:"column",
  alignItems:"flex-start",
}
const cardTitleText = {
  fontSize:"23px",
  color:"#FFFFFF",
  fontWeight:"800",
  padding:"5px",
  width:"100%",
  overflow:"hidden",
  background:"linear-gradient(357.53deg, #0C0C0C 8.78%, rgba(19, 1, 1, 0) 91.55%)",
  textTransform:"uppercase",
  fontFamily:"Raleway"
}
const cardTitle = {
  width:"100%",
  height:"300px",
  backgroundSize:"cover",
  alignItems:"end",
  backgroundPosition:"center",
}
const Card = ({student}) => {
  return (
    <Box style={resultCard}>
      <Flex style={cardTitle} bgImg={student.image.url}><Text style={cardTitleText}>{student.name}</Text></Flex>

      <Flex style={cardDesc} gap={2}>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            Overall Score : {student.overall}
          </Badge>
        </Box>

        <Flex justify={"space-between"} w={"90%"} color={"#ffffff"} fontSize={"18px"}>
          <Text><b>L : </b> {student.listening} </Text>
          <Text><b>R : </b> {student.reading} </Text>
          <Text><b>S : </b> {student.speaking} </Text>
          <Text><b>W : </b> {student.writing} </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Card