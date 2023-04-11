import { Flex } from "@chakra-ui/react";
import { WorkOrderCard } from "../../components/WorkOrderCard";
import { useTractianData } from "../../hooks/useTractianData";
import { getData } from "../../utils/requests";
import { IWorkorders } from "../../interfaces/workorders";
import { Loading } from "../../components/Loading";

export const Workorders = () => {
  const { data: workorders, isLoading } = useTractianData(
    ["workordes"],
    getData("workorders")
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Flex
      w={"100%"}
      h={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={{ xs: "column" }}
      flexWrap={"wrap"}
      bg={"quaternary"}
    >
      <Flex
        mt="20px"
        flexWrap={"wrap"}
        w={{ xs: "90%", lg: "95%" }}
        h={"50%"}
        justifyContent={"center"}
      >
        {workorders?.map((workorder: IWorkorders) => {
          return (
            <WorkOrderCard
              assetId={workorder.assetId}
              assignedUserIds={workorder.assignedUserIds}
              checklist={workorder.checklist}
              description={workorder.description}
              id={workorder.id}
              priority={workorder.priority}
              status={workorder.status}
              title={workorder.title}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
