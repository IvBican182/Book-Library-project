const myLibrary = []; //empty array, we will store our books here

function Book(title, author, pages, read) {  //factory function for our Book object
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
}

function removeBook(index) {  //will remove our book object from our array
    myLibrary.splice(index, 1);
    render();

}

//adding our new book, passing input values from users input (form)
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    //new book creation
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myLibrary.push(newBook); //pushing our new book to our books array
    console.log(myLibrary);  
    render(); //calling the render function
}

let newBookBtn = document.querySelector("#new-book-btn");

newBookBtn.addEventListener("click", function () { //displaying our book form
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
    
    
})

document.querySelector("#new-book-form").addEventListener("submit", function () { //adding the book to our library
    event.preventDefault();
    addBookToLibrary();
    

})

//render function , will show our book info on our page
function render () {
    let bookLibrary = document.querySelector("#library");
    bookLibrary.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let elBook = document.createElement("div");
        elBook.innerHTML = `
        <div class="card-header">
          <h3 class="title">${book.title}</h3>
          <h5 class="author">${book.author}</h5>
        </div>
        <div class="card-body">
          <p>${book.pages} pages</p>
          <p class="read-status">${book.read ? "read" : "Not read yet"}</p>
          <button class="remove button" onclick="removeBook(${i})">Remove</button>
          </div>`;
        bookLibrary.appendChild(elBook);
    }
}
