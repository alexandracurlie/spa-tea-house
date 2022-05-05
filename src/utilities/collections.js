import React from "react";
import {Mail, Phone} from "../images/svg";
import {BASE_URL, CATALOG_URL, CONTACTS_URL} from "./constants";

export const dataFooter = [
  { id: "1", title: "phone", content: "+7 965 015-9-015", href: "tel:+79650159015", img: <Phone /> },
  { id: "2", title: "email", content: "alexa.curlie@gmail.com", href: "mailto: alexa.curlie@gmail.com", img: <Mail /> }
]

export const headerData = [
  {id: "header-home", name: "Home", path: BASE_URL},
  {id: "header-catalog", name: "Catalog", path: CATALOG_URL, },
  {id: "header-contacts", name: "Contacts", path: CONTACTS_URL, },
]

export const filters = ["All", "Green", "Black"];
export const sort = ["popular", "cheap", "expensive"];


export const CartTitle = {
  empty: "oh, no! the cart is empty!",
  full: "what an awesome choice!",
};

export const infoDelivery = [
  {
    id: "1",
    title: "Step 1",
    description: "add items to the cart, fill the form, choose date and time\n",
    img: "https://alexandracurlie.github.io/spa-tea-house/icons/logo-cart.png",
  },
  {
    id: "2",
    title: "Step 2",
    description: "wait for a while, delivery takes 2-3 days depends of your location",
    img: "https://alexandracurlie.github.io/spa-tea-house/icons/logo-truck.png",
  },
  {
    id: "3",
    title: "Step 3",
    description: "now you can enjoy the most incredible tea in your life",
    img: "https://alexandracurlie.github.io/spa-tea-house/icons/logo-cup.png",
  },
]

export const aboutUsDescription = {
  description: "Tea-obsessed since 2017, Madame Pappertinio exists purely for tea perfection. We’re on the ground worldwide in search of well-crafted, single-origin loose leaf teas to share with our community. We’re pushing limits in new tea frontiers with our blends. We want to it to be as easy as possible to discover, explore and feel better through tea.",
}

export const matchaTimeDescription = {
  title: "Matcha Time",
  description: "A tea that everyone and their mother’s are familiar with here! What’s uniquely special about this tea, is that even though it is available everywhere, the quality is exquisite. Only the utmost, highest quality Tea Leaves are used for matcha. Having asked the locals about Matcha, they have all told me the same thing:” Matcha is inexpensive, and healthy for you. It is a soothing drink whether hot or cold."
}
