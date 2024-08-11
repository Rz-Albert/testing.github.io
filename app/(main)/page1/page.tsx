"use client";

import useSWR from "swr";

import { fetcher } from "@/lib/fetcher";
import { useRequest } from "@/hooks/use-request";

const Page1 = () => {
  const {
    data,
    error,
    isLoading,
    isValidating,
  } = useRequest("/api/data1");

  console.log(error);

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white rounded-md p-3 space-y-3 text-black">
        <p> The data!</p>
        {isLoading && ("Loading...")}
        {data && (
          <ul className="space-y-2">
            <li><b>Message: </b>{data.message}</li>
            <li><b>Timestamp: </b>{data.timestamp}</li>
          </ul>
        )}
      </div>

      <div className="bg-white rounded-md p-3 space-y-3 text-black">
        <p>States</p>

        <ul className="space-y-2">
          <li><b>Is loading: </b>{JSON.stringify(isLoading)}</li>
          <li><b>Is validating: </b>{JSON.stringify(isValidating)}</li>
        </ul>
      </div>
    </div>
  );
}

export default Page1;