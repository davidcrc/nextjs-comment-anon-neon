"use client";
import { PutBlobResult } from "@vercel/blob";
import React from "react";
import { useQuery } from "react-query";

const LisptBlobsPage = () => {
  const { data, refetch } = useQuery({
    queryFn: () =>
      fetch(`/api/get-blobs`).then((res) =>
        res.json()
      ) as unknown as PutBlobResult[],
  });

  return (
    <div className="flex flex-col items-center justify-center p-10">
      List blobs
      {data?.map((blob, index) => {
        return (
          <div key={index}>
            {blob.url} - {blob.pathname}
          </div>
        );
      })}
    </div>
  );
};

export default LisptBlobsPage;
