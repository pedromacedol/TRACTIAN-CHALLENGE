import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineFrown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Error404 = () => {
  const navigate = useNavigate();
  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      color={"secundary"}
      flexDirection={"column"}
    >
      <Flex direction="column" align="center" justify="center">
        <AiOutlineFrown size={80} />
        <Heading size="2xl" my={6}>
          404 - Page Not Found
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Sorry, but the page you requested was not found.
        </Text>
      </Flex>
      <Button
        bg={"secundary"}
        color={"white"}
        margin={"30px"}
        onClick={() => {
          navigate("/home");
        }}
      >
        Go to homepage
      </Button>
    </Flex>
  );
};
