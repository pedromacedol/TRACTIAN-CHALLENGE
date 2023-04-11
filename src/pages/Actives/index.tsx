import { Button, Flex, Input } from "@chakra-ui/react";
import { ActivesCard } from "../../components/ActivesCard";
import { useTractianData } from "../../hooks/useTractianData";
import IActives from "../../interfaces/actives";
import { getData } from "../../utils/requests";
import { Loading } from "../../components/Loading";
import { useState } from "react";

export const Actives = () => {
  const { data: actives, isLoading } = useTractianData(
    "assets",
    getData("assets")
  );

  const [filter, setFilter] = useState("");
  const [filterState, setFilterState] = useState(false);

  const filteredActives = filterState
    ? actives?.filter((active: IActives) =>
        active.name.toLowerCase().includes(filter.toLowerCase())
      )
    : actives;

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleFilterToggle = () => {
    setFilterState(!filterState);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Flex flexDirection={"column"} w={"100%"} bg={"quaternary"}>
      <Flex
        w={"100%"}
        mb={4}
        justifyContent={"center"}
        alignContent={"center"}
        mt={"50px"}
      >
        <Input
          w={"70%"}
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
          w={"7%"}
          h={"50px"}
          color={"white"}
        >
          {filterState && filter !== "" ? "Clear" : "Search"}
        </Button>
      </Flex>

      <Flex flexDirection={"column"} overflowY={"auto"} w={"100%"}>
        {filteredActives?.map((active: IActives) => {
          return (
            <ActivesCard
              assignedUserIds={active.assignedUserIds}
              companyId={active.companyId}
              healthHistory={active.healthHistory}
              healthscore={active.healthscore}
              id={active.id}
              image={active.image}
              metrics={active.metrics}
              model={active.model}
              name={active.name}
              sensors={active.sensors}
              specifications={active.specifications}
              status={active.status}
              unitID={active.unitID}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
