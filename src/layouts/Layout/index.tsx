import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../Sidebar";

import { Outlet } from "react-router-dom";
import { MobileBar } from "../MobileBar";

export const Layout = () => {
  return (
    <Flex
      flexDirection={{ xs: "column", lg: "row" }}
      h={{ xs: "100%", lg: "100vh" }}
      w={"100%"}
    >
      <MobileBar />
      <Sidebar />
      <Outlet />
    </Flex>
  );
};
