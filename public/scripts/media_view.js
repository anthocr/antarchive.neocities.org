document.addEventListener('DOMContentLoaded', (event) => {
    const content = document.querySelector("main");
    if (content) {
        const params = new URLSearchParams(window.location.search);
        const file = params.get('file'); // get the 'file' parameter from the URL

        const safeName = encodeURIComponent(file);
        fetch(`books/${safeName}.md`)
            .then(response => response.text())
            .then(text => {
                const html = marked.parse(text);
                content.innerHTML = html;
                floatImage();
            })
            .catch(error => console.error('Error fetching markdown file:', error));
    }
});

function floatImage() {
    const img = document.querySelector("main img");
    if (img != null) {
        img.classList.add("cover");
    }
}