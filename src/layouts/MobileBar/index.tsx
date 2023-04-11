import {
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  IconButton,
  Image,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AiOutlineTeam,
  AiOutlineLogin,
  AiOutlineShop,
  AiOutlineFund,
  AiOutlineSetting,
  AiOutlineReconciliation,
  AiOutlineMenu,
} from "react-icons/ai";
import Logo from "../../assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { NavItem } from "../../components/NavItem";
import { useRef } from "react";

export const MobileBar = () => {
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const drawerSize = useBreakpointValue({ base: "full", lg: "full" });

  return (
    <Flex
      w={{ xs: "100%", lg: "20%" }}
      h={{ xs: "70px" }}
      bg={"primary"}
      flexDirection={"row"}
      justifyContent={"flex-start"}
      display={{ xs: "flex", lg: "none" }}
      alignItems={"center"}
    >
      <IconButton
        ml={"20px"}
        color={"white"}
        ref={btnRef}
        aria-label="Open sidebar"
        icon={<AiOutlineMenu />}
        onClick={onOpen}
        display={{ lg: "none" }}
        variant="ghost"
        h={"10px"}
      />

      <Image
        alignItems={"center"}
        src={Logo}
        boxSize={{
          xs: "110px",
        }}
        objectFit="contain"
        display={"flex"}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        initialFocusRef={btnRef}
        size={drawerSize}
      >
        <DrawerContent bg={"primary"} h={"100%"} w={"100%"}>
          <DrawerCloseButton bg={"white"} display={{ lg: "none" }} />
          <DrawerHeader> </DrawerHeader>

          <DrawerBody h={"80%"} w={"100%"} p={5}>
            <Center>
              <Image
                src={Logo}
                boxSize={{
                  xs: "200px",
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
                text={"Visão geral"}
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
                text={"Ordens de serviço"}
                background={routeSelected(["bg", "/workorders"])}
                color={routeSelected(["color", "/workorders"])}
                onclick={() => {
                  navigate("/workorders");
                }}
              />

              <NavItem
                icon={
                  <AiOutlineSetting
                    size={"24px"}
                    style={{ marginRight: "5%" }}
                  />
                }
                background={routeSelected(["bg", "/actives"])}
                color={routeSelected(["color", "/actives"])}
                onclick={() => {
                  navigate("/actives");
                }}
                text={"Ativos"}
              />

              <NavItem
                icon={
                  <AiOutlineTeam size={"24px"} style={{ marginRight: "5%" }} />
                }
                background={routeSelected(["bg", "/users"])}
                color={routeSelected(["color", "/users"])}
                onclick={() => {
                  navigate("/users");
                }}
                text={"Usuários"}
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
