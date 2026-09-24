// Get the modal, thumbnail, and close button
const modal = document.getElementById("modal");
const thumbnail = document.getElementById("thumbnail");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");


const thumbnails = document.querySelectorAll(".modal-img img");
thumbnails.forEach(thumb => {
  thumb.onclick = function() {
    modal.style.display = "block";
    modalImage.src = this.src;
  };
});

// When the close button is clicked, close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks outside the modal image, close the modal
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};