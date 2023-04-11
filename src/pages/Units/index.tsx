import { Box, Flex, Text } from "@chakra-ui/react";
import { useTractianData } from "../../hooks/useTractianData";
import { getData } from "../../utils/requests";

import { Loading } from "../../components/Loading";
import IUnits from "../../interfaces/units";

export const Units = () => {
  const { data: units, isLoading } = useTractianData("unit", getData("units"));

  if (isLoading) {
    return <Loading />;
  }

  const renderUnit = (unit: IUnits) => {
    return (
      <Box
        key={unit.id}
        w={"200px"}
        h={"200px"}
        mx="auto"
        mt={4}
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        bg={"white"}
      >
        <Text> {unit.id}</Text>
        <Text>{unit.name}</Text>
      </Box>
    );
  };

  return (
    <Flex
      bg={"quaternary"}
      h={"100vh"}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={{ xs: "column", lg: "row" }}
    >
      {units.map(renderUnit)}
    </Flex>
  );
};
