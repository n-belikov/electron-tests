const electron = require("electron");

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener("keypress", (keyCode) => {
    const key = keyCode.key.toLowerCase();
    electron.remote.getCurrentWindow().loadFile("index.html");
  });
});
