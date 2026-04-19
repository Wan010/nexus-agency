"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/stats")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <main style={{ padding: "40px" }}>
      <h1>NEXUS Web3 Agency</h1>

      {!data && <p>Loading...</p>}

      {data && (
        <div>
          <p>Audits: {data.audits}</p>
          <p>TVL: {data.tvl}</p>
          <p>Protocols: {data.protocols}</p>
          <p>Years: {data.years}</p>
        </div>
      )}
    </main>
  );
}
