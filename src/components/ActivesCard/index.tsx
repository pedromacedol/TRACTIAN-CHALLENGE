import {
  Card,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import IActives from "../../interfaces/actives";
import { ProgressBar } from "../ProgressBar";
import { useFormattedDate } from "../../hooks/useFormattedDate";
import { getDataItem } from "../../utils/requests";
import { useTractianData } from "../../hooks/useTractianData";

export const ActivesCard = ({
  healthscore,
  id,
  image,
  metrics,
  name,
  sensors,
  specifications,
  status,
}: IActives) => {
  const { data: item, isLoading } = useTractianData(
    "company",
    getDataItem("assets", id)
  );

  console.log(item?.name);

  return (
    <Center m={"5px"}>
      <Card
        bg={"white"}
        direction={{ xs: "column", xl: "row" }}
        overflow="hidden"
        marginBottom={"10px"}
        width={{ xs: "500px", xl: "80%" }}
        h={{ xs: "100%", xl: "300px" }}
        maxW={{ xs: "100%", xl: "100%" }}
        variant="elevated"
      >
        <Image
          objectFit="cover"
          width={"100%"}
          maxW={{ xs: "100%", xl: "300px" }}
          src={image}
          alt="Img Asset"
          p={"15px"}
          borderRadius={"20px"}
        />

        <HStack w={"100%"}>
          <VStack
            w={"50%"}
            p={{ xs: "20px", lg: "30px" }}
            alignItems={"flex-start"}
            spacing={4}
          >
            <Heading size="md" textTransform="uppercase">
              {name}
            </Heading>
            <Tag> {status} </Tag>
            <Text>
              <b>Sensors: </b> {sensors}
            </Text>
            <Text>
              <b>Max Temp:</b> {specifications.maxTemp + "°C"}
            </Text>

            {specifications.rpm !== null ? (
              <Text>
                <b>RPM: </b> {specifications.rpm}
              </Text>
            ) : (
              <></>
            )}

            {specifications.power !== null ? (
              <Text>
                <b>Power: </b> {specifications.power}
              </Text>
            ) : (
              <></>
            )}
          </VStack>
          <Divider orientation="vertical" h={"80%"} />

          <VStack w={"50%"} alignItems={"flex-start"}>
            <Text>
              <b>Healthscore: </b>
            </Text>

            <Flex w={"80%"} h={"10%"}>
              <ProgressBar healthscores={healthscore} />
            </Flex>

            <Text>
              <b> Last Uptime at: </b>
              {useFormattedDate(metrics.lastUptimeAt)}
            </Text>
            <Text>
              <b> Total Uptime: </b>
              {metrics.totalUptime.toFixed() + "h"}
            </Text>
            <Text>
              <b> Total Collect Uptime: </b>
              {metrics.totalCollectsUptime}
            </Text>
          </VStack>
        </HStack>
      </Card>
    </Center>
  );
};
