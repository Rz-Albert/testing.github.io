import useSWR from "swr"
import { useEffect } from "react";

import { fetcher, cancelFetcher } from "@/lib/fetcher";

type Response = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export const usePost = (postId: string) => {
  const response = useSWR<Response>(`https://jsonplaceholder.typicode.com/posts/${postId}`, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  useEffect(() => {
    return () => {
      cancelFetcher();
    }
  }, []);

  return response;
}