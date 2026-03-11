import React, { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://susvibebackend.vercel.app/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.text(); // because your backend sends text
      })
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="p-10">
      <div className="r">
        <h1 className="text-3xl font-bold mb-4">Backend Status</h1>

        {error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <p className="text-lg text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
}