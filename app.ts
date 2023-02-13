let myLibrary:Book[]=[];
class Book{
    title:string;
    author:string;
    pages:number;
    status:boolean;
constructor (title:string,author:string,pages:number,status:boolean) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.status=status;
}
}

const dummyBook = new Book("Lord of the rings", "Tolkin", 690, true);
const dadaBook = new Book("War and peace","Tolstoi",222,true);
console.log(dummyBook);
const showcase = document.querySelector(".showcase")!;
createBookCard(dummyBook);
createBookCard(dadaBook);
myLibrary.push(dummyBook);
myLibrary.push(dadaBook);
console.log(myLibrary);
function createBookCard(a:Book) {
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

function arrayLoop(array:Book[]){
array.forEach(function (Book){
console.log(Book);
})
};


const button=document.querySelector("button")!;
button.addEventListener("click",()=>{
    let domtitle = (document.querySelector("#textInput") as HTMLInputElement).value;
    let domauthor = (document.querySelector("#authorInput") as HTMLInputElement).value;
    let dompages = (document.querySelector("#numberInput") as HTMLInputElement).value;
    let newBook=new Book(domtitle,domauthor,+dompages,true);
    createBookCard(newBook);
    myLibrary.push(newBook);
    arrayLoop(myLibrary);
})