import { Center, CircularProgress, Flex } from "@chakra-ui/react";
import { AnimatedSensor } from "../AnimatedProduct";

export const Loading = () => {
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <AnimatedSensor />
    </Flex>
  );
};
