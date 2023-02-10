"use strict";
let myLibrary = [];
class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}
const dummyBook = new Book("Lord of the rings", "Tolkin", 690, true);
console.log(dummyBook);
const showcase = document.querySelector(".showcase");
const card = document.createElement("div");
card.classList.add("card");
showcase.appendChild(card);
const info_title = document.createElement("p");
info_title.textContent = dummyBook.title;
const info_author = document.createElement("p");
info_author.textContent = dummyBook.author;
const info_pages = document.createElement("p");
info_pages.textContent = dummyBook.pages.toString();
card.appendChild(info_title);
card.appendChild(info_author);
card.appendChild(info_pages);
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let domtitle = document.querySelector("#textInput").value;
    let domauthor = document.querySelector("#authorInput").value;
    let dompages = document.querySelector("#numberInput").value;
    console.log(domtitle, domauthor, dompages);
});
