import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";

import { Flex, Card, CardHeader, Heading, Center } from "@chakra-ui/react";

HighchartsExporting(Highcharts);

function setData(n: any) {
  var arr = [],
    i,
    x;
  for (
    i = 0, x = Date.UTC(new Date().getUTCFullYear(), 0, 1) - n * 36e5;
    i < n;
    i = i + 1, x = x + 36e5
  ) {
    arr.push([x, Math.random() * 100]);
  }
  return arr;
}

const options = {
  chart: {
    type: "line",
    zoomType: "x",
  },

  title: {
    text: "",
  },

  tooltip: {
    valueDecimals: 2,
    valueSuffix: "°C",
  },

  xAxis: {
    type: "datetime",
  },

  yAxis: {
    title: {
      text: "Temperature (°C)",
    },
  },

  series: [
    {
      data: setData(100),
      lineWidth: 1,
      name: "Machine Temperature",
    },
  ],
};

export const LineGraph = () => {
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
          <Heading size="md">Temperature Variation of Machines</Heading>
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
          options={options}
        />
        <Center></Center>
      </Card>
    </Flex>
  );
};
