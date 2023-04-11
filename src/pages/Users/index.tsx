import { UsersCard } from "../../components/UsersCard";
import { getData } from "../../utils/requests";
import IUsers from "../../interfaces/users";
import { Flex, Input, Button } from "@chakra-ui/react";
import { useTractianData } from "../../hooks/useTractianData";
import { Loading } from "../../components/Loading";
import { useState } from "react";

export const Users = () => {
  const { data: users, isLoading } = useTractianData("user", getData("users"));
  const [filter, setFilter] = useState("");
  const [filterActive, setFilterActive] = useState(false);

  const filteredUsers = filterActive
    ? users?.filter((user: IUsers) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      )
    : users;

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleFilterToggle = () => {
    setFilterActive(!filterActive);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      bg={"quaternary"}
      justifyContent={{ xs: "flex-start", xl: "center" }}
      alignItems={{ xs: "flex-start", lg: "center" }}
      overflowY={"auto"}
      flexDirection={"column"}
    >
      <Flex w={"100%"} mb={4} justifyContent={"center"} alignContent={"center"}>
        <Input
          w={"60%"}
          h={"50px"}
          placeholder="Filter by name"
          value={filter}
          onChange={handleFilterChange}
          bg={"white"}
          mr={2}
        />
        <Button
          onClick={handleFilterToggle}
          bg={"primary"}
          w={{ xs: "20%", md: "10%" }}
          h={"50px"}
          color={"white"}
        >
          {filterActive && filter !== "" ? "Clear" : "Search"}
        </Button>
      </Flex>
      <Flex
        flexWrap={"wrap"}
        w={{ xs: "100%", lg: "80%" }}
        justifyContent={{ xs: "space-around", lg: "center" }}
      >
        {filteredUsers?.map((user: IUsers) => {
          return (
            <UsersCard
              key={user.id}
              name={user.name}
              id={user.id}
              email={user.email}
              companyId={user.companyId}
              unitId={user.unitId}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
