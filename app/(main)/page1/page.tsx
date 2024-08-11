"use client";

import { usePost } from "@/hooks/use-post";

const Page1 = () => {
  const {
    data,
    error,
    isLoading,
    isValidating,
  } = usePost("1");

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white rounded-md p-3 space-y-3 text-black">
        <p> The data!</p>
        {isLoading && ("Loading...")}
        {data && (
          <ul className="space-y-2">
            <li><b>ID: </b>{data.id}</li>
            <li><b>Title: </b>{data.title}</li>
            <li><b>Body: </b>{data.body}</li>
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