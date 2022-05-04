import React from "react";
import ContactsHeader from "../../components/ContactsComponents/Header";
import ListOfContacts from "../../components/ContactsComponents/ListOfContacts";

export default function Contacts() {
  const gg = () => {};
  return (
    <div>
      <ContactsHeader />
      <ListOfContacts />
    </div>
  );
}
