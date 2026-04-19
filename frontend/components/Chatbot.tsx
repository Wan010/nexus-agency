"use client";

import { useState } from "react";

export default function Chatbot() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  async function send() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: msg })
    });

    const data = await res.json();
    setReply(data.reply);
  }

  return (
    <div className="mt-10">
      <input
        value={msg}
        onChange={e => setMsg(e.target.value)}
        className="p-2 text-black"
      />
      <button onClick={send} className="ml-2 bg-green-500 px-4 py-2">
        Send
      </button>

      {reply && <p className="mt-4">{reply}</p>}
    </div>
  );
}
