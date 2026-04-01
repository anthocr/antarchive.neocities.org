const NUM_ROWS = 1;

function createBookTable(jsonData) {
    const books = jsonData.books;
    const $t = $("#books").empty();
    for (let i = 0; i < NUM_ROWS; i++) {
        const $r = $("<tr>");
        books.forEach(book => {
            const slug = encodeURIComponent(book);  // "The%20Life%20Impossible%20(2024)"
            $r.append(`<td><a href="media_view.html?file=${slug}">${book}</a></td>`);
        });
        $r.append("</tr>");
        $t.append($r);
    }

}

function render_books() {
    $.ajax({
        url: "scripts/books.json",
        success: function (result) { createBookTable(result); }
    });
    console.log("Books rendered.");
}