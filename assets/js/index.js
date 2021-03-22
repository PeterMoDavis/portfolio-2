let button = $("#dark-mode");
let body = $("body");
let nav = $("nav");
let h4 = $("h4");
let p = $("p");
let h7 = $("h7");
let repo = $(".repo");
let contacts = $(".contacts");

button.on("click", () => {
  if (body.css("background-color") === "rgb(255, 255, 255)") {
    body.css("background-color", "black");
    nav.attr("class", "navbar navbar-expand-lg navbar-dark border-bottom ");
    h4.css("color", "gold");
    p.css("color", "white");
    h7.css("color", "gold");
    button.css("color", "black");
    button.css("background-color", "gold");
    button.text("LIGHT MODE");
    $("#moss").attr("src", "./assets/images/night-moss.jpg");
    repo.css("color", " rgb(20, 172, 20)");
    contacts.css("color", "white");
  } else {
    body.css("background-color", "white");
    nav.attr("class", "navbar navbar-expand-lg navbar-light border-bottom ");
    h4.css("color", "black");
    p.css("color", "black");
    h7.css("color", "black");
    button.css("color", "white");
    button.css("background-color", "#343a40");
    button.text("DARK MODE");
    $("#moss").attr("src", "./assets/images/moss.jpg");
    repo.css("color", "orange");
    contacts.css("color", "black");
  }
});
