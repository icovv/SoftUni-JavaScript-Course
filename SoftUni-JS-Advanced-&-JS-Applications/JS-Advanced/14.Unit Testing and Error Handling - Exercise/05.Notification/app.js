function notify(message) {
  let notif = document.querySelector("#notification");
  notif.textContent = message;
  notif.style.display = `block`

  notif.addEventListener(`click`,hideFN);

  function hideFN(){
    notif.style.display = `none`
  }

}