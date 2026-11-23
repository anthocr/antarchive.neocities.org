
/*
This script is used to populate the header and navigation bar on each page. This way, if I want to make a change to the header or navigation, I only have to do it in one place instead of on every page.
*/
window.addEventListener('DOMContentLoaded', () => {
    // Populates header
    const header = document.querySelector("header");
    if (header != null) {
        header.innerHTML = `
        <img id="site-header" src="images/site-header.png" alt="ant archive logo">`;
    }

    // Populates navigation bar
    const nav = document.querySelector("nav");
    if (nav != null) {
        nav.innerHTML = `
        <a href="index.html">Home</a>
        <a href="guestbook.html">Guestbook</a>
        <a href="media.html">Media</a>
        <a href="shrines.html">Shrines</a>
        <a href="gallery.html">Gallery</a>
        <a href="writing.html">Writings</a>
        <a href="resources.html">Resources</a>
        `;

        // Adds 'visiting' class to the link matching the current page
        nav.querySelectorAll("a").forEach(link => {
            if (getEndofPath(removeExtension(new URL(link.href).pathname)) === getEndofPath(removeExtension(new URL(window.location.href).pathname))) {
                link.classList.add("visiting");
                link.insertAdjacentHTML('afterbegin', '<img src="images/little_star.gif" style="margin-right: 0.2em;">');
            }
            // for the case where we are at the home directory
            else if ((window.location.pathname === '/') && (getEndofPath(link.href) == 'index.html')) {
                link.classList.add("visiting");
                link.insertAdjacentHTML('afterbegin', '<img src="images/little_star.gif" style="margin-right: 0.2em;">');
            }
        });
    }
});

/*
This function takes a path and removes the extension.
E.g. "/pages/gallery.html" would return "/pages/gallery"
*/
function removeExtension(path) {
    const lastDotIndex = path.lastIndexOf(".");
    if (lastDotIndex === -1) return path;
    return path.substring(0, lastDotIndex);
}

/*
This function takes a path and returns the last section.
E.g. "/pages/gallery.html" would return "gallery.html"
*/
function getEndofPath(path) {
    const parts = path.split("/").filter(part => part);
    return parts.pop();
}