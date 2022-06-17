var modalAddUser = document.getElementById("modalAddUser");

var addUserBtn = document.getElementById("addUserBtn");

var modalClose = document.getElementsByClassName("modal-close")[0];

addUserBtn.onclick = function () {
  modalAddUser.style.display = "block";
};

modalClose.onclick = function () {
  modalAddUser.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalAddUser) {
    modalAddUser.style.display = "none";
  }
};
