import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";

import { Flex, Card, CardHeader, Heading, Center } from "@chakra-ui/react";
import { useTractianData } from "../../../hooks/useTractianData";
import { getData } from "../../../utils/requests";
import IAssets from "../../../interfaces/actives";
import { useEffect, useState } from "react";

HighchartsExporting(Highcharts);

const getOptions = (
  type: string,
  name: Array<string>,
  dataHealthScore: Array<number>
) => ({
  chart: {
    animation: 0,
    type,
  },

  title: {
    text: "",
  },

  xAxis: {
    categories: name,
  },

  yAxis: {
    title: {
      text: "%",
    },
  },
  plotOptions: {
    column: {
      pointPadding: 0.1,
      borderWidth: 1,
    },
    series: {
      borderRadius: 20,
      borderRadiusBottom: 0,
    },
  },
  series: [
    {
      name: "Machine",
      data: dataHealthScore,
      shadow: { opacity: 0 },
      color: "#122765",

      animation: {
        duration: 1000,
      },
    },
  ],
});

export const ColumnGraph = () => {
  const [healthScore, setHealthScore] = useState([]);
  const [nameAsset, setNameAsset] = useState([]);
  const { data: assets, isFetched } = useTractianData(
    "assets",
    getData("assets")
  );

  useEffect(() => {
    if (isFetched) {
      setHealthScore(assets.map((asset: IAssets) => asset.healthscore));
      setNameAsset(assets.map((asset: IAssets) => asset.name));
    }
  }, [assets, isFetched]);

  return (
    <Flex
      h={"100%"}
      w={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Card w={"100%"} h={"100%"} alignItems={"center"} borderRadius="30px">
        <CardHeader>
          <Heading size="md">Machines Health Score</Heading>
        </CardHeader>

        <HighchartsReact
          containerProps={{
            style: {
              width: "100%",
              height: "100%",
              borderRadius: "30px",
            },
          }}
          highcharts={Highcharts}
          options={getOptions("column", nameAsset, healthScore)}
        />
        <Center></Center>
      </Card>
    </Flex>
  );
};
