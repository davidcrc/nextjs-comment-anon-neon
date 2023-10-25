// "use client";

import React, { useEffect } from "react";
// import { db } from "../db/db";

export default function Home() {
  // const callme = async () => {
  //   console.log("callmeee");

  //   const response = await db
  //     .selectFrom("Comment")
  //     .selectAll()
  //     // .where("StockHistory.stock", "=", "AAPL")
  //     .execute();

  //   console.log("response", response);
  // };

  // useEffect(() => {
  //   callme();
  // }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to our website!</h1>
      <p className="text-lg text-gray-600">
        We are a creative agency specializing in web development.
      </p>
    </div>
  );
}
