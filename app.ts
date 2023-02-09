let myLibrary=[];
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
const dummyBook = new Book("Lord of the rings","Tolkin",690,true);

console.log(dummyBook);


const showcase=document.querySelector(".showcase");
const div=document.createElement("div");
div.textContent="blahblah";
div.classList.add("card");
showcase?.appendChild(div);

