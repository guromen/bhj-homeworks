const book = document.getElementById("book");
const fontSize = document.querySelectorAll(".font-size");
  
fontSize.forEach((set) => {
    set.addEventListener("click", (event) => {
    event.preventDefault()
  
    fontSize.forEach((item) => item.classList.remove("font-size_active"));
  
    set.classList.add("font-size_active")
 
    book.classList.remove("book_fs-small", "book_fs-big");
  
    const size = set.dataset.size;
    if (size === "small") {
        book.classList.add("book_fs-small");
    } else if (size === "big") {
        book.classList.add("book_fs-big");
    }
    });
})