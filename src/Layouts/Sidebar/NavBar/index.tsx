import * as React from "react";
import { Button } from "@chakra-ui/react";

type NavItemProps = {
  icon: any;
  onclick: () => void;
  background: string;
  text: string;
  color: string;
};

export const NavItem = ({
  icon,
  onclick,
  color,
  background,
  text,
}: NavItemProps) => {
  return (
    <Button
      leftIcon={icon}
      fontWeight={"normal"}
      fontSize={{ xs: "14px", lg: "16px" }}
      onClick={onclick}
      border="1px"
      borderColor="transparent"
      p={{ xs: "0", lg: "4%" }}
      color={color}
      bg={background}
      w={{
        xs: "0",
        md: "150px",
        lg: "175px",
        xl: "200px",
      }}
      justifyContent="flex-start"
      borderEndRadius={"10px"}
      transition="all 0.4s"
      _hover={{ borderColor: "tertiary", color: "gray.500" }}
    >
      {text}
    </Button>
  );
};
