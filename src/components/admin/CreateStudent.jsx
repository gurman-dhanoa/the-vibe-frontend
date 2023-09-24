import React, {useState,useEffect} from "react";
import { Center, Input, Button, useToast } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import {createNewStudent} from "../../redux/Student/studentAction";
import { useForm } from "react-hook-form";
import { fetchStudents } from "../../redux/Student/studentAction";
import { useDispatch,useSelector} from 'react-redux';

const CreateStudent = () => {
  const {success,errors} = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const toast = useToast();

  const { register, handleSubmit } = useForm();
  const [avatar, setAvatar] = useState("/Profile.png");
  
  const onChange = (e) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
  };
  
  const submitForm = (data) => {
    data.image = avatar;
    dispatch(createNewStudent(data));
  };

  useEffect(() => {
    if (errors) {
      toast({
        title: 'Error',
        description: errors,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

    if (success) {
      dispatch(fetchStudents());
    }
  }, [dispatch, errors ,success]);

  return (
    <Center>
      <form style={{width:"100%"}} onSubmit={handleSubmit(submitForm)}>
        <FormControl m={4} isRequired>
          <FormLabel>Full name</FormLabel>
          <Input placeholder="Full name"  {...register("name")}/>
        </FormControl>
        <FormControl m={4} isRequired>
          <FormLabel>Image</FormLabel>
          <Input type="file" accept="image/png, image/jpeg"  {...register("avatar")} onChange={onChange}/>
        </FormControl>
        <FormControl m={4} isRequired>
          <FormLabel>Reading</FormLabel>
          <Input  {...register("reading")}/> 
        </FormControl>
        <FormControl m={4} isRequired>
          <FormLabel>Writing</FormLabel>
          <Input  {...register("writing")}/> 
        </FormControl>
        <FormControl m={4} isRequired>
          <FormLabel>Listening</FormLabel>
          <Input  {...register("listening")}/> 
        </FormControl>
        <FormControl m={4} isRequired>
          <FormLabel>Speaking</FormLabel>
          <Input  {...register("speaking")}/> 
        </FormControl>
        <FormControl m={4} isRequired>
          <FormLabel>Over All</FormLabel>
          <Input  {...register("overall")}/> 
        </FormControl>
        
        <Button  m={4}
          colorScheme="teal"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Center>
  );
};

export default CreateStudent;
