import { useMutation } from "@tanstack/react-query";
import { client } from "./client";
import { AxiosError } from "axios";

export function useAddReportedUrl() {
  return useMutation((data: any) => client.post("/pages", data), {
    onError: (error: AxiosError<any>) => {
      // showError(error);
      console.log(error);
    },

    onSuccess: (response: any) => {},
  });
}
