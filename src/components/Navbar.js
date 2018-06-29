import React from "react";
import { Menu } from "semantic-ui-react";

const items = [
  { href: "#o-que", key: "o-que", name: "O que" },
  { href: "#para-quem", key: "para-quem", name: "Para quem" },
  { href: "#como", key: "como", name: "Como" },
  { href: "#onde", key: "onde", name: "Onde" },
  { href: "#quando", key: "quando", name: "Quando" },
  { href: "#mas-e", key: "mas-e", name: "Mas e..." },
  { href: "#inscricoes", key: "inscricoes", name: "Inscrições" }
];

const Navbar = () => <Menu inverted items={items} stackable/>;

export default Navbar;
