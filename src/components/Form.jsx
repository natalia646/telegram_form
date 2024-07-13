import React, { useState } from "react";
import sendMessage from "./Telegram";

export default function Form() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");

  const handleSubmit = async () => {
    console.log(name, email);
    try {
      const message = `
        Name: ${name}
        Email: ${email}
      `;
      await sendMessage(message);
    } catch (e) {
      return e;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input type="submit" value="Send"></input>
    </form>
  );
}
