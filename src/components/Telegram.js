import axios from "axios";

//!get bot ID
// const token = process.env.REACT_APP_TOKEN;
// const getChatId = async () => {
//   const resp = await axios.get(
//     `https://api.telegram.org/bot${token}/getUpdates`
//   );
//   console.log(resp.data.result[0].message.chat.id);
// };
// getChatId();

export default async function sendMessage(message) {
   await axios.post(
    `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendMessage`,
    {
      chat_id: process.env.REACT_APP_ID,
      text: message,
    }
  );

}
