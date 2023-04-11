import { UseQueryResult, useQuery } from "react-query";

export const useTractianData = <T>(
  key: string | any[],
  fn: Promise<T>
): UseQueryResult<T> => {
  return useQuery(key, async () => fn, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
