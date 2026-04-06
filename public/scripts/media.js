const NUM_ROWS = 1;

function createBookTable(jsonData) {
    const books = jsonData.books; // get JSON array of books
    const $t = $("#books").empty(); // clear existing content
    $t.append(`<div class="book-header" id="A">A</div>`); // Add header for A
    books.forEach(book => {
        const slug = encodeURIComponent(book);  // e.g. "The%20Life%20Impossible%20(2024)"
        $t.append(`<div class="book-entry"><a href="media_view.html?file=${slug}">${book}</a></div>`);
    });
    $t.append(`<div class="book-header" id="Z">Z</div>`) // Add header for Z
    randomizeAttributes();
}

// Fetch the JSON data and create the book table
function render_books() {
    $.ajax({
        url: "scripts/books.json",
        success: function (result) { createBookTable(result); }
    });
    console.log("Books rendered.");
}

// Randomizes the background color and height of each book entry.
function randomizeAttributes() {
    const entries = document.querySelectorAll(".book-entry");
    const colors = ["#f866b9", "#f8a88f", "#e1f198", "#6dfcaa", "#37d6f6", "#ba95fc"]; //varied colors
    const heights= ["28vh", "29vh", "30vh"]; //varied heights
    entries.forEach(entry => {
        entry.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        entry.style.height = heights[Math.floor(Math.random() * heights.length)];
    });
}