import Contact from "../types/contact";

const isContact = (item: unknown): item is Contact => {
  const target = item as Contact;

  return (
    "name" in target &&
    typeof target.name === "string" &&
    !!target.name &&
    "mail" in target &&
    typeof target.mail === "string" &&
    !!target.mail &&
    "body" in target &&
    typeof target.body === "string" &&
    !!target.body
  );
};

export { isContact };
