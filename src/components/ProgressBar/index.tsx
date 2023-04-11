import { Flex, Text } from "@chakra-ui/react";

export const ProgressBar = ({ healthscores }: number | any) => {
  function statusColor(): string {
    if (healthscores <= 70) {
      return "red";
    } else if (healthscores <= 85) {
      return "yellow.300";
    } else {
      return "green";
    }
  }

  return (
    <Flex
      w={"100%"}
      h={"20px"}
      bg={"gray.300"}
      borderRadius={"10px"}
      overflow={"hidden"}
    >
      <Flex
        bg={statusColor()}
        w={healthscores + "%"}
        h={"100%"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        borderRadius={"10px"}
      >
        <Text mr={"10px"} fontSize={"14px"} color={"white"} fontWeight={"bold"}>
          {healthscores}%
        </Text>
      </Flex>
    </Flex>
  );
};
