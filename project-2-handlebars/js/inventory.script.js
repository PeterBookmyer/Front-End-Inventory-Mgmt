// Get the modal
var modalAddInv = document.getElementById("modalAddInv");

// Get the button that opens the modal
var addInvBtn = document.getElementById("addInvBtn");

// Get the element that closes the modal
var modalClose = document.getElementsByClassName("modal-close")[0];

// When the user clicks on the button, open the modal
addInvBtn.onclick = function () {
  modalAddInv.style.display = "block";
};

// When the user clicks on btn, close the modal
modalClose.onclick = function () {
  modalAddInv.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalAddInv) {
    modalAddInv.style.display = "none";
  }
};


