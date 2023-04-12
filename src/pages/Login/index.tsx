import { Button, Flex, FormControl, Image, Input } from "@chakra-ui/react";
import Product from "../../assets/Images/product.png";
import Logo from "../../assets/Images/Logo.png";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { handleLogin, handleChange, isLogged } = useAuth();

  return (
    <Flex
      w={"100wh"}
      h={"100vh"}
      backgroundImage={Product}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Image src={Logo} w={"300px"} h={"40px"} marginBottom={"30px"} />

      <FormControl
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {isLogged === undefined || isLogged === "false" ? (
          <Input
            bg={"white"}
            type={"email"}
            w={{ xs: "290px", md: "400px" }}
            h={"45px"}
            placeholder="Enter your email adress"
            borderRadius={"10px"}
            marginBottom={"10px"}
            onChange={handleChange}
          />
        ) : (
          <></>
        )}

        <Button
          type="submit"
          bg={"secundary"}
          color={"white"}
          w={{ xs: "290px", md: "400px" }}
          h={"40px"}
          onSubmit={handleLogin}
          borderRadius={"10px"}
        >
          Login
        </Button>
      </FormControl>
    </Flex>
  );
}
