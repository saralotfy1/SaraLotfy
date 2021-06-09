var getUsername = prompt("whats your name");

console.log(getUsername);

document.getElementById("saralotfy").innerText= getUsername;

//tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })