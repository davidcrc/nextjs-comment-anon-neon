"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useMutation } from "react-query";

export default function Home() {
  const router = useRouter();

  const { mutate: mutationPage, isLoading } = useMutation({
    mutationFn: (handle: string) => {
      return fetch("/api/pages", {
        method: "POST",
        body: JSON.stringify({ handle }),
      });
    },
    onSuccess: async (res) => {
      // console.log("SS", res);
      if (res.ok) {
        const body = await res.json();
        const handle = body.handle;

        router.push(`/${handle}`);
      } else {
        console.log("err", res);
      }
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);

    const handle = data.get("handle") as string;

    if (!handle) return;

    mutationPage(handle);
  }

  return (
    <main className="text-center p-4">
      <h1 className="mb-4 text-4xl font-extrabold dark:text-white">
        Ask anonymously
      </h1>

      {isLoading && <p>Your page is being created...</p>}

      {!isLoading && (
        <div className="w-full flex justify-center">
          <form className="w-full max-w-xs" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="handle"
              >
                Handle
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                id="handle"
                name="handle"
                type="text"
                placeholder="@user"
                required
              />
            </div>

            <div>
              <button
                className="bg-blue-500 rounded shadow text-white py-2 px-4"
                type="submit"
              >
                Create page
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
