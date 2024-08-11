import useSWR from "swr";
import axios, { CancelTokenSource } from "axios";
import { useEffect, useRef } from "react";

export const useRequest = (url: string) => {
  const controllerRef = useRef<AbortController>();

  const source = useRef<CancelTokenSource>();

  const fetcher = async (url: string) => {
    // controllerRef.current = new AbortController();
    source.current = axios.CancelToken.source();

    try {
      const response = await axios.get(url, {
        // signal: controllerRef.current.signal,
        cancelToken: source.current.token,
      });
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
        console.log(error)
      } else {
        throw error;
      }
    }
  };

  const swr = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });


  useEffect(() => {
    return () => {
      // if (controllerRef.current) {
      //   controllerRef.current.abort();
      // }

      if (source.current) {
        source.current.cancel();
      }
    };
  }, []);

  return swr;
}