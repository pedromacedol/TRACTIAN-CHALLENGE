import { Box, Center, Flex, Image, VStack } from "@chakra-ui/react";
import {
  AiOutlineTeam,
  AiOutlineLogin,
  AiOutlineFund,
  AiOutlineSetting,
  AiOutlineReconciliation,
} from "react-icons/ai";
import Logo from "../../assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { NavItem } from "../../components/NavItem";

export const Sidebar = () => {
  const routeName = location.pathname;

  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  function routeSelected([type, route]: [string, string]): any {
    if (type === "bg") {
      return routeName === route ? "white" : "transparent";
    }
    if (type === "color") {
      return routeName === route ? "primary" : "white";
    }
  }

  return (
    <Flex
      flexDirection={"column"}
      bg={"primary"}
      h={"100%"}
      w={"320px"}
      display={{ xs: "none", lg: "flex" }}
      justifyContent={"center"}
    >
      <Box height={"32px"} />
      <Flex flexDirection={"column"} p={"20px"} h={"100%"}>
        <Center>
          <Image
            src={Logo}
            boxSize={{
              xs: "125px",
              md: "150px",
              lg: "200px",
            }}
            objectFit="contain"
            display={"flex"}
          />
        </Center>

        <VStack
          w={"100%"}
          spacing={6}
          direction={"column"}
          alignItems={"center"}
        >
          <NavItem
            icon={<AiOutlineFund size={"24px"} />}
            text={"Dashboard"}
            color={routeSelected(["color", "/home"])}
            background={routeSelected(["bg", "/home"])}
            onclick={() => {
              navigate("/home");
            }}
          />

          <NavItem
            icon={
              <AiOutlineReconciliation
                size={"24px"}
                style={{ marginRight: "5%" }}
              />
            }
            text={"Workorders"}
            background={routeSelected(["bg", "/workorders"])}
            color={routeSelected(["color", "/workorders"])}
            onclick={() => {
              navigate("/workorders");
            }}
          />

          <NavItem
            icon={
              <AiOutlineSetting size={"24px"} style={{ marginRight: "5%" }} />
            }
            background={routeSelected(["bg", "/actives"])}
            color={routeSelected(["color", "/actives"])}
            onclick={() => {
              navigate("/actives");
            }}
            text={"Actives"}
          />

          <NavItem
            icon={<AiOutlineTeam size={"24px"} style={{ marginRight: "5%" }} />}
            background={routeSelected(["bg", "/users"])}
            color={routeSelected(["color", "/users"])}
            onclick={() => {
              navigate("/users");
            }}
            text={"Users"}
          />
        </VStack>

        <VStack h={"20%"} w={"100%"} justifyContent={"center"}>
          <NavItem
            text={"Logout"}
            icon={
              <AiOutlineLogin size={"24px"} style={{ marginRight: "5%" }} />
            }
            color={"#ffffff"}
            background={routeSelected(["bg", "/"])}
            onclick={() => {
              handleLogout();
              navigate("/");
            }}
          />
        </VStack>
      </Flex>
    </Flex>
  );
};
