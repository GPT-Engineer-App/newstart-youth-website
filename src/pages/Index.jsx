import { Container, Text, VStack, Heading, Box, Button, IconButton, Image, HStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Newstart SDA Church
        </Heading>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1485115905815-74a5c9fda2f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBsb2dvfGVufDB8fHx8MTcxNTc0MDEyM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Church Logo" />
        <Text fontSize="lg" textAlign="center">
          Welcome to Newstart SDA Church, where youth and community come together to worship and grow in faith.
        </Text>
        <Box>
          <Heading as="h2" size="lg" textAlign="center">
            Join Us
          </Heading>
          <Text fontSize="md" textAlign="center">
            Every Saturday at 10:00 AM
          </Text>
          <Text fontSize="md" textAlign="center">
            123 Church Street, Your City
          </Text>
        </Box>
        <Button colorScheme="teal" size="lg">
          Get Involved
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
