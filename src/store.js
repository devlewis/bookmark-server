const uuid = require("uuid/v4");

const bookmarks = [
  {
    id: uuid(),
    title: "Google!",
    url: "https://www.google.com",
    description: "Searchy search",
    rating: 3
  },
  {
    id: uuid(),
    title: "Google Translate",
    url: "https://translate.google.com",
    description: "Hola!",
    rating: 4
  }
];

module.exports = { bookmarks };
