import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import instructor1 from './../../images/instructor/instructor1.jpg'
import instructor2 from './../../images/instructor/instructor2.jpg'
import './Instructors.css'

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
  justifyContent:"center",
  backgroundPosition:"center",
}
const Instructors = () => {
     
  return (
    <Flex id="instructors" className="instructorContainer">
      <Text className="instructorHeadingStyle">MEET OUR INSTRUCTORS </Text>
      <Flex className="services">
        <Box style={resultCard}>
          <Flex style={cardTitle} bgImg={instructor1}><Text style={cardTitleText}>Navdeep Singh</Text></Flex>
        </Box>
        <Box style={resultCard}>
          <Flex style={cardTitle} bgImg={instructor2}><Text style={cardTitleText}>Harkirat Virk</Text></Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
      
export default Instructors;