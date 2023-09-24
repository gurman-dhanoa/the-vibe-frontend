import React from "react";
import { Flex, Heading, Box, Text, IconButton, Avatar, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../redux/Student/studentAction";
import { deleteStudent } from "../../redux/Student/studentAction";
import { DeleteIcon } from '@chakra-ui/icons'

const AdminStudent = () => {
  const {students} = useSelector((state) => state.students);
  const {success,errors} = useSelector((state) => state.student);
  const toast = useToast();
  const dispatch = useDispatch();
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

  }, [dispatch, errors, success, toast]);
  const deleteStudentHandler = (id) => {
    dispatch(deleteStudent(id));
  };
  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);
  // console.log(student.students);
  return (
    <Flex width={"100%"} flexDir={"column"} gap={4}>
      {students.map((student) => {
        return (
          <>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name={student.name} src={student.image.url} />

              <Box>
                <Heading size='sm'>{student.name}</Heading>
                <Text>L:{student.listening} R:{student.reading} W:{student.writing} S:{student.speaking}</Text>
              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='Delete Student'
              onClick={() =>
                deleteStudentHandler(student._id)
              }
              icon={<DeleteIcon />}
            />
          </Flex>
          </>
        );
      })}
    </Flex>
  );
};

export default AdminStudent;
