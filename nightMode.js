
function turnON(e) {
  chrome.tabs.executeScript(null,
      {code:"document.documentElement.style.webkitFilter = 'invert(100%)'"});
  window.close();
}

function turnOFF(e) {
  chrome.tabs.executeScript(null,
      {code:"document.documentElement.style.webkitFilter = 'invert(0%)'"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divOn = document.getElementById('On');
  var divOff = document.getElementById('Off');
  divOn.addEventListener('click', turnON);
  divOff.addEventListener('click', turnOFF);
});