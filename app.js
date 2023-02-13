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
const dadaBook = new Book("War and peace", "Tolstoi", 222, true);
console.log(dummyBook);
const showcase = document.querySelector(".showcase");
createBookCard(dummyBook);
createBookCard(dadaBook);
myLibrary.push(dummyBook);
myLibrary.push(dadaBook);
console.log(myLibrary);
function createBookCard(a) {
    let cardtitle = a.title;
    let cardauthor = a.author;
    let cardpages = a.pages;
    const card = document.createElement("div");
    card.classList.add("card");
    showcase.appendChild(card);
    const info_title = document.createElement("p");
    info_title.textContent = cardtitle;
    const info_author = document.createElement("p");
    info_author.textContent = cardauthor;
    const info_pages = document.createElement("p");
    info_pages.textContent = cardpages.toString();
    card.appendChild(info_title);
    card.appendChild(info_author);
    card.appendChild(info_pages);
}
;
function arrayLoop(array) {
    array.forEach(function (Book) {
        console.log(Book);
    });
}
;
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let domtitle = document.querySelector("#textInput").value;
    let domauthor = document.querySelector("#authorInput").value;
    let dompages = document.querySelector("#numberInput").value;
    let newBook = new Book(domtitle, domauthor, +dompages, true);
    createBookCard(newBook);
    myLibrary.push(newBook);
    arrayLoop(myLibrary);
});
