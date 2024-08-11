import axios, { AxiosResponse } from "axios";
import { sleep } from "./sleep";

const fetcher = async <TOutput>(
   url: string
): Promise<TOutput> => {
   const controller = new AbortController();
   const signal = controller.signal;

   fetcher.controller = controller;

   try {
      await sleep(5000);
      const response: AxiosResponse<TOutput> = await axios.get(url, { signal });
      return response.data;
   } catch (error: any) {
      if (axios.isCancel(error)) {
         console.error("Request aborted!");
      }

      throw new Error(error?.message || "Something went wrong!");
   }
};

fetcher.controller = {} as AbortController;

const cancelFetcher = () => {
   if (fetcher.controller) {
      fetcher.controller.abort();
   }
}

export { fetcher, cancelFetcher };