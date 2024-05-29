function calculateTriangleArea() {
  const triangleBaseValue = getInputById("triangle-base");
  const triangleHeightValue = getInputById("triangle-height");
  if (isNaN(triangleBaseValue) || isNaN(triangleHeightValue)) {
    alert("Please Enter Appropriate Measurements");
    return;
  }
  const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue;
  const triangleAreaThreeDecimal = triangleArea.toFixed(3);
  setData("triangle-update-area", triangleAreaThreeDecimal);
}
// rectabgle

function calculateRectangleArea() {
  const RectangleWidthValue = getInputById("rectangle-width");
  const RectangleHeightValue = getInputById("rectangle-length");
  if (isNaN(RectangleWidthValue) || isNaN(RectangleHeightValue)) {
    alert("Please Enter Appropriate Measurements");
    return;
  }
  const rectangleArea = RectangleWidthValue * RectangleHeightValue;
  const RectangleAreaThreeDecimal = rectangleArea.toFixed(3);
  setData("rectangle-update-area", RectangleAreaThreeDecimal);
}
// Parallelogram
function calculateParallelogramArea() {
  const ParallelogramBaseValue = getInputById("Parallelogram-base");
  const ParallelogramHeightValue = getInputById("Parallelogram-height");
  if (isNaN(ParallelogramBaseValue) || isNaN(ParallelogramHeightValue)) {
    alert("Please Enter Appropriate Measurements");
    return;
  }
  const ParallelogramArea = ParallelogramBaseValue * ParallelogramHeightValue;
  const ParallelogramAreaThreeDecimal = ParallelogramArea.toFixed(3);
  setData("Parallelogram-update-area", ParallelogramAreaThreeDecimal);
}
// Rhombus

function calculateRhombusArea() {
  const RhombusD1Value = getInputById("Rhombus-d1");
  const RhombusD2Value = getInputById("Rhombus-d2");
  if (isNaN(RhombusD1Value) || isNaN(RhombusD2Value)) {
    alert("Please Enter Appropriate Measurements");
    return;
  }
  const RhombusArea = 0.5 * RhombusD1Value * RhombusD2Value;
  const RhombusAreaThreeDecimal = RhombusArea.toFixed(3);
  setData("Rhombus-update-area", RhombusAreaThreeDecimal);
}

// Pentagon
function calculatePentagonArea() {
  const PentagonPValue = getInputById("Pentagon-p");
  const PentagonBValue = getInputById("Pentagon-b");
  if (isNaN(PentagonPValue) || isNaN(PentagonBValue)) {
    alert("Please Enter Appropriate Measurements");
    return;
  }
  const PentagonArea = 0.5 * PentagonPValue * PentagonBValue;
  const PentagonAreaThreeDecimal = PentagonArea.toFixed(3);
  setData("Pentagon-update-area", PentagonAreaThreeDecimal);
  areaCalculationEntry("Pentagon", PentagonAreaThreeDecimal);
}
// Ellipse
function calculateEllipseArea() {
  const EllipseAValue = getInputById("Ellipse-a-radius");
  const EllipseBValue = getInputById("Ellipse-b-radius");
  if (isNaN(EllipseAValue) || isNaN(EllipseBValue)) {
    alert("Please Enter Appropriate Measurements");
    return;
  }
  const EllipseArea = 3.14 * EllipseAValue * EllipseBValue;
  const EllipseAreaThreeDecimal = EllipseArea.toFixed(3);
  setData("Ellipse-update-area", EllipseAreaThreeDecimal);
  areaCalculationEntry("Ellipse", EllipseAreaThreeDecimal);
}
function Convert() {
  const previousValue = getElementById("value");
  const newValue = previousValue / (100 * 100);
  const newValueTwoDecimal = newValue.toFixed(4);
  setData("value", newValueTwoDecimal);
  setEntryDataUnit("unit");
}
