
/*
This script is used to populate the header and navigation bar on each page. This way, if I want to make a change to the header or navigation, I only have to do it in one place instead of on every page.
*/
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    header.innerHTML = `
    <h1 class="multicolor-text"> Ant's Archive</h1>
    <div id = "right-overlap" >
        <img src="../images/5ptstar.gif" alt="star gif" style="bottom: 1.7em;">
    </div>
    <div id="left-overlap">
        <img src="../images/star.gif" alt="gold and silver star gif" style="bottom: -0.4em;">
    </div>`;
    nav.innerHTML = `
    <a href="../index.html">Home</a>
    <a href="guestbook.html">Guestbook</a>
    <a href="media.html">Media</a>
    <a href="gallery.html">Gallery</a>
    `;
    nav.querySelectorAll("a").forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("visiting");
        }
    });
});
