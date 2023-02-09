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
const div = document.createElement("div");
div.textContent = "blahblah";
div.classList.add("card");
showcase === null || showcase === void 0 ? void 0 : showcase.appendChild(div);
