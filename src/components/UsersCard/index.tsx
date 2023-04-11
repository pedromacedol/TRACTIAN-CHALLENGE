<Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link" />;
import {
  Avatar,
  Button,
  Card,
  Container,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import IUsers from "../../interfaces/users";
import { delItem, getDataItem } from "../../utils/requests";
import ICompanies from "../../interfaces/companies";
import IUnits from "../../interfaces/units";
import { useTractianData } from "../../hooks/useTractianData";
import { useMutation, useQuery } from "react-query";

export const UsersCard = ({ name, id, email, companyId, unitId }: IUsers) => {
  const { data: company } = useTractianData<ICompanies>(
    "company",
    getDataItem("companies", companyId)
  );

  const { data: unit } = useTractianData<IUnits>(
    "unit",
    getDataItem("units", unitId)
  );

  const { refetch } = useQuery("users", () => delItem("users", id));

  const removeItem = useMutation(
    (id: number) => delItem("users", id),

    {
      onSuccess: () => {
        console.log("Item removed successfully");
        refetch();
      },
    }
  );
  const handleRemoveItem = (itemId: number) => {
    removeItem.mutate(itemId);
  };
  return (
    <Card
      borderRadius="20px"
      bg={"white"}
      p="10px"
      h="350px"
      w={{ xs: "80%", xl: "225px" }}
      m={"5px"}
      alignItems="center"
      direction="column"
      variant="elevated"
    >
      <Container
        bg={"linear-gradient(120deg,  #1E3A8A 20%, #2563EB 95%)"}
        height={"116px"}
        maxW="100%"
        borderRadius="20px"
      />
      <Flex flexDirection="column" mb="10px">
        <Avatar
          name={name}
          src="https://bit.ly/broken-link"
          border="5px solid white"
          bg={"primary"}
          color={"tertiary"}
          mx="auto"
          borderColor={"white"}
          width="80px"
          height="80px"
          mt="-40px"
          borderRadius="50%"
        />

        <Text fontWeight="600" color={"black"} textAlign="center" fontSize="xl">
          {name}
        </Text>
        <Text color={"black"} textAlign="center" fontSize="sm" fontWeight="500">
          {email}
        </Text>
      </Flex>

      <VStack spacing={"0.5"} alignItems={"flex-start"}>
        <Text color={"black"} fontSize={"15px"}>
          <b>Company</b>: {company?.name}
        </Text>
        <Text color={"black"} fontSize={"15px"}>
          <b>Unit</b>: {unit?.name}
        </Text>
        <Text color={"black"} fontSize={"15px"}>
          <b>User ID</b>: {id}
        </Text>
      </VStack>

      <Flex
        h={"20%"}
        w={"100%"}
        marginTop={"30px"}
        justifyContent={"space-evenly"}
      >
        <Button
          h={"80%"}
          borderRadius={"10px"}
          fontSize={"14px"}
          w={"90%"}
          border={"1px"}
          borderColor={"red"}
          bg={"transparent"}
          color={"red"}
          onClick={() => handleRemoveItem(id)}
        >
          Remove
        </Button>
      </Flex>
    </Card>
  );
};
