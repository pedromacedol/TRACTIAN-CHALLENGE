import { Flex, Text } from "@chakra-ui/react";
import { ColumnGraph } from "../../components/Graphs/ColumnGraph";
import { Carousel } from "../../components/Carrosel";

export function Home() {
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"quaternary"}
    >
      <Flex
        flexDirection={"row"}
        justifyContent={"flex-start"}
        pl={10}
        h={"5%"}
        w={"80%"}
        bg={"primary"}
        mb={"15px"}
        borderRadius={"10px"}
        alignItems={"center"}
      >
        <Text color={"white"} fontWeight={"bold"} fontSize={"xl"}>
          Graphics Analitics
        </Text>
      </Flex>
      <Carousel />
    </Flex>
  );
}
