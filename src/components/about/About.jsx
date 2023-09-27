import { Flex, Image, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import logo from './../../images/logoAbout.svg'
import React from 'react'
import './About.css'
const About = () => {
  return (
    <Flex id='about' className='aboutContainer'>
        <Image className='aboutImage' src={logo} alt="The Vibe" h="250px"/>
        <VStack className='aboutRight'>
            <Text className="aboutHeading">Why To Join THE VIBE ?</Text>
            <UnorderedList p={"15px"} fontSize={"20px"} fontWeight={400}>
                <ListItem>We are serving most affordable and genuine education.</ListItem>
                <ListItem>All the staff are IDP Certified.</ListItem>
                <ListItem>We are focused on the basic concept of IELTS and PTE</ListItem>
                <ListItem>We start from Zero and hit the advanced topics of each modules.</ListItem>
                <ListItem>Around 300+ offline and 200 + online success stories with in a year .</ListItem>
            </UnorderedList>
        </VStack>
    </Flex>
  )
}

export default About