import { useState } from "react";

export const useMail = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/mail`, {
      method: "POST",
      body: `
名前
${firstName}${lastName}様からのお問い合わせ

メールアドレス
${email}

お問い合わせ内容
${message}
`,
    });
  };

  return {
    setFirstName,
    setLastName,
    setEmail,
    setMessage,
    send,
  };
};
