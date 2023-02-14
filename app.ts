let myLibrary:Book[]=[];
class Book{
    title:string;
    author:string;
    pages:number;
    status:boolean;
    id:number;
constructor (title:string,author:string,pages:number,status:boolean,id:number) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.status=status;
    this.id=id;
}
}
const showcase = document.querySelector(".showcase")!;


function createBookCard(a:Book) {
    const card = document.createElement("div");
    card.classList.add("card");
    const info_title = document.createElement("p");
    info_title.textContent = a.title;
    const info_author = document.createElement("p");
    info_author.textContent = a.author;
    const info_pages = document.createElement("p");
    info_pages.textContent = a.pages.toString();
    const info_id=document.createElement("p");
    info_id.textContent=a.id.toString();
    const button=document.createElement("button");
    button.textContent="delete";
    button.classList.add("delete-button");
    button.setAttribute("data-id",a.id.toString());
    showcase.appendChild(card);
    card.appendChild(info_title);
    card.appendChild(info_author);
    card.appendChild(info_pages);
    card.appendChild(info_id);
    card.appendChild(button);
}
;

function arrayLoop(array:Book[]){
array.forEach(function (Book){
createBookCard(Book);
})
};

function clearAll(){
    showcase.innerHTML="";
}

let counter:number;
const button=document.querySelector(".add-button")!;
button.addEventListener("click",()=>{
    clearAll();
    let domtitle = (document.querySelector("#textInput") as HTMLInputElement).value;
    let domauthor = (document.querySelector("#authorInput") as HTMLInputElement).value;
    let dompages = (document.querySelector("#numberInput") as HTMLInputElement).value;
    counter=myLibrary.length;
    let newBook=new Book(domtitle,domauthor,+dompages,true,counter);
    myLibrary.push(newBook);
    arrayLoop(myLibrary);
    const deleteButton=document.querySelectorAll(".delete-button");
    console.log(deleteButton);
    deleteButton.forEach((item)=>{ 
    item.addEventListener("click",()=>{
        console.log(myLibrary);
      let x = item.getAttribute("data-id")!;
      console.log(x);
      let removeditem=myLibrary.splice(+x,1);
      console.log(myLibrary);
      item.parentElement?.remove();
    });   
});
});
let searchstring="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae consequatur itaque facilis? Officia repudiandae natus eaque, distinctio tempora alias eos omnis! Aliquid iste earum expedita.";
let word="thanais";
let exp=new RegExp(`${word}`,"i");
if (searchstring.search(exp)== -1){
    console.log("not found");
} else console.log("found");
