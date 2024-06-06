import { Box, Container, Flex, Text, VStack, HStack, Spacer, IconButton, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem" alignItems="center">
        <HStack spacing="24px">
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" color="white" />
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </HStack>
        <Spacer />
        <HStack spacing="24px" display={{ base: "none", md: "flex" }}>
          <IconButton aria-label="About" icon={<FaInfoCircle />} size="lg" variant="ghost" color="white" />
          <IconButton aria-label="Contact" icon={<FaPhone />} size="lg" variant="ghost" color="white" />
        </HStack>
      </Flex>
      <Container centerContent maxW="container.md" height="calc(100vh - 80px)" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>Start building your amazing application.</Text>
          <Box width="100%" maxW="400px" p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
            <FormControl id="email" mb={4}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" mb={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button colorScheme="blue" width="full">Login</Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;