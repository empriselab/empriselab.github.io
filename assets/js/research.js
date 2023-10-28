// Set up the modal to be ready to be clicked and toggled.
function activateModal(triggerId, modalId, closeId) {
  // Get the modal and elements
  let modal = document.getElementById(modalId);
  let trigger = document.getElementById(triggerId);
  let closeButton = document.getElementById(closeId);

  // When the user clicks on the trigger, open the modal
  trigger.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on (x), close the modal
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}

// Get the total number of projects on the page
const numProjects = document.querySelectorAll('.project-title').length;
for (let i = 1; i <= numProjects; i++) {
  activateModal(`modal-trigger-project-${i}`, `modal-project-${i}`, `close-project-${i}`);
}

// When the user clicks anywhere outside of ANY modals, close it
let modals = Array.from(document.getElementsByClassName("image-modal"));
window.onclick = function (event) {
  if (modals.includes(event.target)) {
    event.target.style.display = "none";
  }
};