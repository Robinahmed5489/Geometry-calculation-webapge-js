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
function setEntryDataUnit(targetId) {
  const targetElementTag = document.getElementById(targetId);
  targetElementTag.innerText = "m";
}

function areaCalculationEntry(ShapeName, ShapeArea) {
  const keepEntries = document.getElementById("entries");
  const p = document.createElement("p");
  p.classList.add("my-2");
  const count = keepEntries.childElementCount;

  p.innerHTML = `${
    count + 1
  }.${ShapeName}=  <span id="value">${ShapeArea}</span> <span id="unit">cm</span><sup>2</sup> 
  <button onclick=Convert(this) 
  class="text-sm bg-green-600 text-white py-1 px-2 rounded-sm">
  Convert</button>`;
  keepEntries.appendChild(p);
}
