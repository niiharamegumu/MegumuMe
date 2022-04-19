import { NextApiResponse, NextApiRequest } from "next";

import { isContact } from "../../utils/typeChecker";

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const X_MICROCMS_API_KEY = process.env.X_MICROCMS_API_KEY;
  const SERVICE_DOMAIN = process.env.CONTACT_SERVICE_DOMAIN;

  if (!isContact(req.body) || typeof X_MICROCMS_API_KEY === "undefined") {
    res.status(404).end();
    return;
  }

  const isSuccess = await fetch(
    `https://${SERVICE_DOMAIN}.microcms.io/api/v1/contact/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-MICROCMS-API-KEY": X_MICROCMS_API_KEY,
      },
      body: JSON.stringify(req.body),
    }
  )
    .then(() => true)
    .catch(() => null);

  if (isSuccess === null) return res.status(404).end();
  if (isSuccess) return res.status(200).end();
};

export default contact;
