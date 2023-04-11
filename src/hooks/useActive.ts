import { useEffect } from "react";
import { getDataItem } from "../utils/requests";
import { useTractianData } from "./useTractianData";

export const useActive = (assetId: number) => {
  const { data: company, isLoading } = useTractianData(
    "company",
    getDataItem("assets", assetId)
  );

  useEffect(() => {
    console.log(company);
  }, [company]);

  return { company };
};
