export const formInput = [
  {
    type: "text",
    name: "name",
    class: "form-control",
    dataset: "form",
    id: "name",
    placeholder: "name",
    required: true,
  },
  {
    type: "tel",
    name: "phone",
    class: "form-control",
    dataset: "form",
    id: "phone",
    placeholder: "phone",
    required: true,
  },
  {
    type: "email",
    name: "email",
    class: "form-control",
    dataset: "form",
    id: "email",
    placeholder: "abc@mail.com",
    required: true,
  },
  {
    type: "text",
    name: "address",
    class: "form-control",
    dataset: "form",
    id: "address",
    placeholder: "City, street, bld, app",
    required: true,
  },
  {
    type: "date",
    name: "date",
    class: "form-control",
    dataset: "form",
    id: "date",
    required: true,
  },
];

export const formTextarea = [
  {
    name: "comment",
    class: "form-control",
    dataset: "form",
    id: "comment",
    placeholder: "let us know if you need something else",
  },
];

export const formSelect = [
  {
    name: "time",
    class: "form-control",
    dataset: "form",
    id: "time",
    default: "",
    options: [
      { name: "none", value: "", text: "--:--" },
      { name: "first", value: "9am to 3pm", text: "9am to 3pm" },
      { name: "second", value: "3pm to 9pm", text: "3pm to 9pm" },
    ],
  },
];

export const slides = [
  {
    id: 1,
    className: "first",
    img: "https://alexandracurlie.github.io/spa-tea-house/pics/002.jpeg",
    text: "We have come far in our journey, and tea has been our passion from the very beginning. Throughout the years, we have studied and experienced sophisticated tea cultures and have accumulated a vast knowledge of tea.",
  },
  {
    id: 2,
    className: "second",
    img: "https://alexandracurlie.github.io/spa-tea-house/pics/003.jpeg",
    text: "Gradually through trust, respect and a mutual passion for tea, we have developed warm friendships and strong relationships with the tea farmers and their families. These farmers are utterly dedicated to growing and producing the finest harvests from their tea gardens. Harvests that are a treasure and gift of nature.",
  },
  {
    id: 3,
    className: "third",
    img: "https://alexandracurlie.github.io/spa-tea-house/pics/004.jpeg",
    text: "In 2009, we realized our dream of opening a shop so that we could bring to others the tea that we personally source from various tea gardens in India, China, Taiwan and Japan. And also to share with others the many tea cultures we’ve experienced throughout Asia.",
  },
];

export const filters = ["All", "Green", "Black"];

export const sort = ["popular", "cheap", "expensive"];
