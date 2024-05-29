function calculateTriangleArea() {
  const triangleBaseValue = getInputById("triangle-base");
  const triangleHeightValue = getInputById("triangle-height");
  if (isNaN(triangleBaseValue) || isNaN(triangleHeightValue)) {
    alert("Please Enter Appropriate Measurements");
    return;
  }
  const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue;
  setData("triangle-update-area", triangleArea);
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
  setData("rectangle-update-area", rectangleArea);
}

function calculateParallelogramArea() {
  const ParallelogramBaseValue = getInputById("Parallelogram-base");
  const ParallelogramHeightValue = getInputById("Parallelogram-height");
  if (isNaN(ParallelogramBaseValue) || isNaN(ParallelogramHeightValue)) {
    alert("Please Enter Appropriate Measurements");
    return;
  }
  const ParallelogramArea = ParallelogramBaseValue * ParallelogramHeightValue;
  setData("Parallelogram-update-area", ParallelogramArea);
}
