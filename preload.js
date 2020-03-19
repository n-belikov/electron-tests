// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text
  };

  console.log(document.getElementById("leanback"));
  console.log(document.getElementsByName("body"));
  const leanback = document.getElementById("leanback");
  if (leanback) {
    leanback.innerHTML += "<button style='position: fixed; top: 0; left: 0; width: 200px; height: 200px;'></button>";
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }

});
