import {
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Heading,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { getDataItem } from "../../utils/requests";
import { useTractianData } from "../../hooks/useTractianData";
import { IWorkorders, ChecklistItem } from "../../interfaces/workorders";
import { AvatarName } from "../AvatarName";

function colorStatus(status: string) {
  switch (status) {
    case "to do": {
      return "red";
    }
    case "in progress": {
      return "#d6ca1ddc";
    }
    case "completed": {
      return "green";
    }
  }
}

export const WorkOrderCard = ({
  assetId,
  assignedUserIds,
  checklist,
  description,
  id,
  priority,
  status,
  title,
}: IWorkorders) => {
  const { data: asset, isLoading } = useTractianData(
    ["asset", assetId],
    getDataItem("assets", assetId)
  );
  if (isLoading) {
    return <> </>;
  }

  return (
    <Card
      width={{ xs: "100%", lg: "30%" }}
      borderRadius={"20px"}
      m={"5px"}
      justifyContent={"center"}
    >
      <CardBody>
        <Stack mt="6" spacing="3">
          <HStack justifyContent={"space-between"}>
            <HStack>
              <Heading size="md">
                #{id} {title}
              </Heading>
              <Tag size={"sm"} bg={colorStatus(status)} color={"white"}>
                {status}
              </Tag>
            </HStack>
          </HStack>

          <Text>{description}</Text>

          {checklist?.map((toDo: ChecklistItem) => {
            return (
              <>
                <Divider />
                {toDo.completed ? (
                  <Checkbox isChecked={toDo.completed}>
                    <Text as="s">{toDo.task} </Text>
                  </Checkbox>
                ) : (
                  <Checkbox>{toDo.task}</Checkbox>
                )}
              </>
            );
          })}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent={"space-around"}>
        <Text> Machine: {asset.name} </Text>
        <Flex>
          {assignedUserIds?.map((userId: number) => {
            return <AvatarName id={userId} size={"sm"} />;
          })}
        </Flex>
      </CardFooter>
    </Card>
  );
};
