function getInputById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputValue;
}
function getElementById(ElementId) {
  const elementTag = document.getElementById(ElementId);
  const elementValue = parseFloat(elementTag.innerText);
  return elementValue;
}
function setData(targetId, value) {
  const targetElementTag = document.getElementById(targetId);
  targetElementTag.innerText = value;
}
