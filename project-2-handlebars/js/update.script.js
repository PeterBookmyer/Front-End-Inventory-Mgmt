var modalUpdateInv = document.getElementById("modalUpdateInv");

var updateInvBtn = document.getElementById("updateInvBtn");

var modalClose = document.getElementsByClassName("modal-close")[0];

updateInvBtn.onclick = function () {
  modalUpdateInv.style.display = "block";
};

modalClose.onclick = function () {
  modalUpdateInv.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalUpdateInv) {
    modalUpdateInv.style.display = "none";
  }
};
