const NUM_ROWS = 1;

function createBookTable(jsonData) {
    const books = jsonData.books; // get JSON array of books
    const $t = $("#books").empty(); // clear existing content
    $t.append(`<div class="book-header">A</div>`); // Add header for A
    books.forEach(book => {
        const slug = encodeURIComponent(book);  // e.g. "The%20Life%20Impossible%20(2024)"
        $t.append(`<div class="book-entry"><a href="media_view.html?file=${slug}">${book}</a></div>`);
    });
    $t.append(`<div class="book-header">Z</div>`) // Add header for Z
    randomizeColors();
}

// Fetch the JSON data and create the book table
function render_books() {
    $.ajax({
        url: "scripts/books.json",
        success: function (result) { createBookTable(result); }
    });
    console.log("Books rendered.");
}

// Randomizes the background color of each book entry to a color from the colors array.
function randomizeColors() {
    const entries = document.querySelectorAll(".book-entry");
    const colors = ["#f866b9", "#f8a88f", "#e1f198", "#6dfcaa", "#37d6f6", "#ba95fc"];
    entries.forEach(entry => {
        entry.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
}