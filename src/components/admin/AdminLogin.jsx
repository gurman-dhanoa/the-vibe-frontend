import React, {useEffect} from "react";
import { Input, InputGroup, InputRightElement, Button, useToast } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { loginAdmin } from '../../redux/Auth/authAction';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';

const Adminlogin = () => {
  
  // pasword hide button
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast()
  
  // form object
  const { register, handleSubmit } = useForm();
  
  const dispatch = useDispatch();
  const submitForm = (data) => {
    dispatch(loginAdmin(data))
  };
  const {error, success} = useSelector((state) => state.adminAuth)
    useEffect(() => {
      if (error) {
        toast({
          title: 'Error',
          description: error,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      };
      if (success){
        toast({
          title: 'Success',
          description: "Welcome to The Vibe",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      };
    }, [dispatch, error, success,toast]);

    return (
      <form style={{width:"100%"}} onSubmit={handleSubmit(submitForm)}>
        <FormControl m={4} isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" {...register("email")}/>
            
        </FormControl>
        <FormControl m={4} isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              w="70vw"
              {...register("password")}
            />
            <InputRightElement width="4.5rem" mr={8}>
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button  m={4}
          colorScheme="teal"
          type="submit"
        >
          Submit
        </Button>
      </form>
  );
};

export default Adminlogin;
