import { useQuery } from "@tanstack/react-query";
import { client } from "./client";

const getPages = async () => {
  const { data } = await client.get("/pages", {
    timeout: 3000, // since it can be heavy too
  });
  return data;
};

export function useReportedPages() {
  return useQuery<any>(["pages_content"], getPages, {
    retry: true,
    keepPreviousData: true,
    onError: (error: any) => {
      // showError(error);
    },
    onSuccess(data) {
      // if (data.code !== 200) {
      //   throw new Error("Error getting carriers");
      // }
    },
  });
}
