import React from "react";
import axios from "axios";

export default function Form() {
  const token = process.env.REACT_APP_TOKEN;

  const getChatId = async () => {
    const resp = await axios.get(
      `https://api.telegram.org/bot${token}/getUpdates`
    );
    console.log(resp.data.result[0].message.chat.id);
  };
  
  getChatId();

  const resp = axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
    chat_id: 893081271,
    text: "Hello World",
  });

  return (
    <form>
      <input type="name" placeholder="Name"></input>
      <input type="email" placeholder="Email"></input>
      <input type="submit" value="Send"></input>
    </form>
  );
}
