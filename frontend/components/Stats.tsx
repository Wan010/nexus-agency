"use client";

import { useEffect, useState } from "react";

export default function Stats() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/stats")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading stats...</p>;

  return (
    <div className="mt-10 grid grid-cols-2 gap-6">
      {Object.entries(data).map(([k, v]) => (
        <div key={k}>
          <h3 className="text-3xl">{v}</h3>
          <p>{k}</p>
        </div>
      ))}
    </div>
  );
}
