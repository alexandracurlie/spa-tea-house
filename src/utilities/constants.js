import React from "react";
import {Mail, Phone} from "../images/svg";

export const dataFooter = [
  { id: "1", title: "phone", content: "+7 965 015-9-015", href: "tel:+79650159015", img: <Phone /> },
  { id: "2", title: "email", content: "alexa.curlie@gmail.com", href: "mailto: alexa.curlie@gmail.com", img: <Mail /> }
]

export const filters = ["All", "Green", "Black"];
export const sort = ["popular", "cheap", "expensive"];


export const CartTitle = {
  empty: "oh, no! the cart is empty!",
  full: "what an awesome choice!",
};
