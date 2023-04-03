import { useQuery } from "@tanstack/react-query";
import { client } from "./client";
import { AxiosError } from "axios";

  const getPageByUrl = async (url:string) => {
    const { data } = await client.get(`/pages/getUrl/${url}`, {
      timeout: 3000, // since it can be heavy too
    });
    return data;
  };
  
  export function usePageByUrl(url:string) {
    return useQuery<any>(["pages_by_url",url],()=> getPageByUrl(url), {
      retry: true,
      keepPreviousData: true,
      enabled:!!url,
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
