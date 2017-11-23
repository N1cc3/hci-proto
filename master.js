function clearTabSelections() {
  for (let tab of document.querySelectorAll('*[id^="tab"]')) {
    tab.removeAttribute('selected');
  }
}

function addMealTabClicked(e) {
  clearTabSelections();
  e.setAttribute('selected', '');
  document.getElementById('tab-content-add-meal').setAttribute('selected', '');
}

function createMealTabClicked(e) {
  clearTabSelections();
  e.setAttribute('selected', '');
  document.getElementById('tab-content-create-meal').setAttribute('selected', '');
}

function statsTabClicked(e) {
  clearTabSelections();
  e.setAttribute('selected', '');
  document.getElementById('tab-content-stats').setAttribute('selected', '');
}
