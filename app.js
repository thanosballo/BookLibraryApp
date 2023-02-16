"use strict";
let myLibrary = [];
class Book {
    constructor(title, author, pages, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = id;
    }
}
const showcase = document.querySelector(".showcase");
function createBookCard(a) {
    const card = document.createElement("div");
    card.classList.add("card");
    const info_title = document.createElement("p");
    info_title.textContent = a.title;
    const info_author = document.createElement("p");
    info_author.textContent = a.author;
    const info_pages = document.createElement("p");
    info_pages.textContent = a.pages.toString();
    const info_id = document.createElement("p");
    info_id.textContent = a.id.toString();
    const button = document.createElement("button");
    button.textContent = "delete";
    button.classList.add("delete-button");
    button.setAttribute("data-id", a.id.toString());
    const label = document.createElement("label");
    label.classList.add("switch");
    const input = document.createElement("input");
    input.type = "checkbox";
    const span = document.createElement("span");
    span.classList.add("slider");
    label.appendChild(input);
    label.appendChild(span);
    showcase.appendChild(card);
    card.appendChild(info_title);
    card.appendChild(info_author);
    card.appendChild(info_pages);
    card.appendChild(info_id);
    card.appendChild(label);
    card.appendChild(button);
}
;
function arrayLoop(array) {
    array.forEach(function (Book) {
        createBookCard(Book);
    });
}
;
function clearAll() {
    showcase.innerHTML = "";
}
let counter;
const button = document.querySelector(".add-button");
button.addEventListener("click", () => {
    clearAll();
    let domtitle = document.querySelector("#textInput").value;
    let domauthor = document.querySelector("#authorInput").value;
    let dompages = document.querySelector("#numberInput").value;
    counter = myLibrary.length;
    let newBook = new Book(domtitle, domauthor, +dompages, counter);
    myLibrary.push(newBook);
    arrayLoop(myLibrary);
    const deleteButton = document.querySelectorAll(".delete-button");
    deleteButton.forEach((item) => {
        item.addEventListener("click", () => {
            var _a;
            let x = item.getAttribute("data-id");
            let index = myLibrary.findIndex(Book => Book.id === (+x));
            myLibrary.splice(index, 1);
            (_a = item.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        });
    });
});
