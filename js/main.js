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
