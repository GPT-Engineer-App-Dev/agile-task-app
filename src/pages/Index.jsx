import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, Checkbox, IconButton, Flex, Link, Spacer } from "@chakra-ui/react";
import { FaTrash, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t));
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Text fontSize="3xl" fontWeight="bold">Todo App</Text>
        <HStack w="100%">
          <Input
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="red">Add Task</Button>
        </HStack>
        <VStack w="100%" spacing={3} mt={5}>
          {tasks.map((t, index) => (
            <HStack key={index} w="100%" p={2} borderWidth={1} borderRadius="md" justifyContent="space-between">
              <Checkbox isChecked={t.completed} onChange={() => toggleTaskCompletion(index)}>
                <Text as={t.completed ? "s" : ""}>{t.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => deleteTask(index)}
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
      <Footer />
    </Container>
  );
};

const Footer = () => (
  <Box as="footer" py={4} bg="gray.800" color="white" mt={10}>
    <Container maxW="container.md">
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
        <Text fontSize="lg" mb={{ base: 4, md: 0 }}>Todo App - Organize your tasks efficiently</Text>
        <HStack spacing={4}>
          <Link href="/" color="white">Home</Link>
          <Link href="/about" color="white">About</Link>
          <Link href="/contact" color="white">Contact</Link>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <Link href="https://facebook.com" isExternal>
            <FaFacebook size="24px" />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="24px" />
          </Link>
        </HStack>
      </Flex>
      <Text textAlign="center" mt={4} fontSize="sm">© {new Date().getFullYear()} Todo App. All rights reserved.</Text>
    </Container>
  </Box>
);

export default Index;