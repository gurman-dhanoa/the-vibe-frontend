import { Flex, Image, Link, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import logo from "./../../images/logo.png";

import './header.css'
import Admin from "../admin/Admin";
const linkStyle = {
  color:"#ffffff",
  fontSize:"20px",
  fontFamily:"Inter, san-serif",
  alignItems:"center",
  gap:"50px"
}
const btnStyle = {
  background:"rgba(112, 52, 54, 1)",
  borderRadius:"10px",
  color:"#ffffff",
}
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {adminToken} = useSelector((state) => state.adminAuth);
  return (
    <Flex className="header" gap={3}>
        <Image src={logo} height={"80px"} alt="The Vibe" shadow={"2px 2px linear-gradient(45deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1))"}/>
        <Flex style={linkStyle}>
            
            <Link href='/#home'>Home</Link>
            <Link href='/#instructors'>Instructors</Link>
            <Link href='/#about'>About</Link>
        </Flex>
        <Button style={btnStyle} onClick={onOpen}>{!adminToken?"Login":"Details"}</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Admin Portal</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Admin/>
              </ModalBody>
            </ModalContent>
          </Modal>
    </Flex>
      )
}

export default Header