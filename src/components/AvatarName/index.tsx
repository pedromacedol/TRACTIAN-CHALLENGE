import { Avatar } from "@chakra-ui/react";
import { useTractianData } from "../../hooks/useTractianData";
import { getData, getDataItem } from "../../utils/requests";
import { useNavigate } from "react-router-dom";

export const AvatarName = ({ id, size }: { id: number; size: string }) => {
  const navigate = useNavigate();
  const { data: user } = useTractianData(
    ["user", id],
    getDataItem("users", id)
  );
  return (
    <Avatar
      name={user?.name}
      size={size}
      bg={"primary"}
      color={"tertiary"}
      borderColor={"white"}
      borderRadius="50%"
      onClick={() => {
        navigate("/users");
      }}
    />
  );
};
