"use strict";

const icons = document.getElementById("icons");
const share = document.getElementById("share");
const close = document.getElementById("close");
const pad = document.getElementById("change");

function switcher1() {
  if (icons.className == "hide") {
    icons.removeAttribute("class", "hide");
    icons.setAttribute("class", "show");
    close.removeAttribute("class", "hide");
    close.setAttribute("class", "show");
    share.removeAttribute("class", "show");
    share.setAttribute("class", "hide");
    change.removeAttribute("class", "share");
    change.setAttribute("class", "col");
  }
}

function switcher2() {
  if (icons.className == "show") {
    icons.removeAttribute("class", "show");
    icons.setAttribute("class", "hide");
    close.removeAttribute("class", "show");
    close.setAttribute("class", "hide");
    share.removeAttribute("class", "hide");
    share.setAttribute("class", "show");
    change.removeAttribute("class", "col");
    change.setAttribute("class", "share");
  }
}

share.addEventListener("click", switcher1);
close.addEventListener("click", switcher2);
