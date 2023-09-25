import { Flex, Box,Button, Text, useDisclosure,} from "@chakra-ui/react";
import ilets from "./../../images/services/Rectangle 6.png"
import pteBg from "./../../images/services/PTE-bg.png"
import visaBg from "./../../images/services/visa-bg.png"
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import './navigation.css'
import Ilets from "./Ilets";
import Pte from "./Pte";
import Visa from "./Visa";
const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [view, setView] = useState("")
  const viewHandler =  (view) => {
    setView(view);
    onOpen()
  }
  return (
    <>
    <Flex className="serviceContainer">
      <Text className="headingStyle">OUR SERVICES</Text>
      <Flex className="services">
        <Box onClick={()=>viewHandler("ilets")}>
          <Flex className="serviceCard">
            <Flex className="cardTitle" bgImage={ilets}><Text className="cardTitleText">ILETS</Text></Flex>
            <Text className="cardDesc">The IELTS, or International English Language Testing System, is a standardized test designed to assess the language proficiency of individuals who want to study, work, or live in an English-speaking environment. It is recognized and accepted by universities, employers, and immigration authorities in many countries around the world.</Text>
          </Flex>
        </Box>
        <Box onClick={()=>viewHandler("pte")}>
          <Flex className="serviceCard">
            <Flex className="cardTitle" bgImage={pteBg}><Text className="cardTitleText">PTE</Text></Flex>
            <Text className="cardDesc">The PTE (Pearson Test of English), is a computer-based English language proficiency test developed by Pearson Education. It is designed to assess and measure the English language skills of people who are looking to study, work, or migrate in an English-speaking environment. It is accepted by universities, colleges, and employers around the world.</Text></Flex>
        </Box>
        <Box onClick={()=>viewHandler("visa")}>
          <Flex className="serviceCard">
            <Flex className="cardTitle" bgImage={visaBg}><Text className="cardTitleText">VISA & IMMIGRATION</Text></Flex>
            <Text className="cardDesc">IELTS is accepted as proof of English language ability for study, work and migration in Australia, Canada, New Zealand and the UK.Each country sets its own IELTS score requirements which we have listed below. Scores requirements will also vary depending on the requirements of your visa, and where you plan to study or work.</Text>
          </Flex>
        </Box>
      </Flex>
      <Modal onClose={onClose} size="30rem" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent maxW="70vw">
          <ModalCloseButton />
          <ModalBody p={"20px"} fontFamily={"Raleway, sans-serif"}>
            {view === "ilets" && <Ilets/>}
            {view === "pte" && <Pte/>}
            {view === "visa" && <Visa/>}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
    </>
  );
};

export default Navigation;
