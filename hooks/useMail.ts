import { useState } from "react";

export const useMail = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const send = async () => {
    await fetch("/api/mail", {
      method: "POST",
      body: `
名前
${firstName}${lastName}様からのお問い合わせ

お問い合わせ内容
${message}
`,
    });
  };

  return {
    setFirstName,
    setLastName,
    setMessage,
    send,
  };
};
