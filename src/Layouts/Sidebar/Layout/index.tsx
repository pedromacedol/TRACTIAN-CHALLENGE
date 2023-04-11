import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../../layouts/Sidebar";

export const Layout = () => {
  return (
    <Flex flexDirection={{ xs: "column", lg: "row" }} h={"100vh"} w={"100vw"}>
      <Flex w={{ xs: "100%", lg: "15%" }} h={{ xs: "10%", lg: "100%" }}>
        <Sidebar />
      </Flex>
      <Flex
        w={{ xs: "100%", lg: "85%" }}
        h={{ xs: "90%", lg: "100%" }}
        flexDirection={"column"}
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};
