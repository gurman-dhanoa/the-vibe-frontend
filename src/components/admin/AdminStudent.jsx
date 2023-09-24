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

  }, [dispatch, errors, success]);
  const deleteStudentHandler = (id) => {
    dispatch(deleteStudent(id));
  };
  useEffect(() => {
    dispatch(fetchStudents());
  }, []);
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
          {/* <Box direction="column" align="center" p={10} key={student._id}>
            <Flex direction="column" align="center">
              <Image
                boxSize="100px"
                objectFit="cover"
                src={student.image.url}
                alt="The Vibe"
              />
              <Heading as="h2" size="xl" fontStyle="cursive">
                {student.name}
              </Heading>
              <Box display="Flex" gap={6}>
                <Box display="flex" flexDirection="column">
                  <Text as="i">Reading : {student.reading}</Text>
                  <Text as="i">Writing : {student.writing}</Text>
                </Box>
                <Box display="flex" flexDirection="column">
                  <Text as="i">Listening : {student.listening}</Text>
                  <Text as="i">Speaking : {student.speaking}</Text>
                </Box>
              </Box>
              <Text as="b">Overall : {student.overall}</Text>
              <Button onClick={() =>
                deleteStudentHandler(student._id)
              }>
                Delete Student
              </Button>
            </Flex>
          </Box> */}
          </>
        );
      })}
    </Flex>
  );
};

export default AdminStudent;
