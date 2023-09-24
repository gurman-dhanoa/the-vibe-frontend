import { Button, HStack, VStack, useToast } from '@chakra-ui/react'
import Adminlogin from './AdminLogin'
import AdminStudent from './AdminStudent'
import CreateStudent from './CreateStudent'
import { logout } from '../../redux/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux';
import AdminRegister from './AdminRegister'
import { useState } from 'react'

const Admin = () => {
  const toast = useToast()
  const [state,setState] = useState(1);
  const {adminToken} = useSelector((state) => state.adminAuth);
  
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    toast({
      title: 'Success',
      description: "Logout Successfully",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <VStack align={"flex-start"} w={"90%"}>
        <HStack justifyContent={"center"} wrap={"wrap"} gap={5}>
            {!adminToken &&
              <>
                <Button onClick={()=>{setState(1)}}>Login</Button>
                <Button onClick={()=>{setState(2)}}>Register</Button>
              </>
            }
            {adminToken &&
              <>
                <Button onClick={()=>{setState(1)}}>Students</Button>
                <Button onClick={()=>{setState(2)}}>Add Student</Button>
                <Button onClick={()=>logoutHandler()}>Logout</Button>
              </>
            }
        </HStack>
        {!adminToken && state===1 && <Adminlogin/>}
        {!adminToken && state===2 && <AdminRegister/>}
        {adminToken && state===1 && <AdminStudent/>}
        {adminToken && state===2 && <CreateStudent/>}
    </VStack>
  )
}
export default Admin