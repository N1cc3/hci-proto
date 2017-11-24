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

function addIngredientClicked(e) {
  let newIngredientElement = document.createElement('div');
  newIngredientElement.className += ' ingredient';
  let inputIngredientName = document.createElement('input');
  inputIngredientName.className = 'ingredientName';
  inputIngredientName.placeholder = "Ingredient name";
  let inputIngredientAmount = document.createElement('input');
  inputIngredientAmount.className = 'ingredientAmount';
  inputIngredientAmount.placeholder = "Amount";
  newIngredientElement.appendChild(inputIngredientName);
  newIngredientElement.appendChild(inputIngredientAmount);
  let createMealTab = document.getElementById('ingredients');
  createMealTab.insertBefore(newIngredientElement, e);
}

function addTemplateClicked(e) {

}

function eatenClicked(e) {

}
