// Set up the modal to be ready to be clicked and toggled.
function activateModal(element) {
  // Get the modal
  const elementId = parseInt(element.id);
  let modal = document.getElementById(`modal-${elementId}`);

  // When the user clicks on the element, open the modal
  element.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on (x), close the modal
  // Liquid (Jekyll) is one-indexed, so the first element is 1
  let closeButton = document.getElementsByClassName("close")[elementId - 1];
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}

// Get the total number of members on the page
const numPeople = parseInt(document.getElementById("modal-control").innerText);
for (let i = 1; i <= numPeople; i++) {
  let modalTrigger = document.getElementById(`${i}`);
  activateModal(modalTrigger);
}

// When the user clicks anywhere outside of ANY modals, close it
let modals = Array.from(document.getElementsByClassName("image-modal"));
window.onclick = function (event) {
  if (modals.includes(event.target)) {
    event.target.style.display = "none";
  }
};
