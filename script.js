function calculateArea(event) {
  event.preventDefault();

  var baseInput = document.getElementById('base');
  var heightInput = document.getElementById('height');
  var resultDiv = document.getElementById('result');

  var base = Number(baseInput.value);
  var height = Number(heightInput.value);

  if (isNaN(base) || isNaN(height)) {
    resultDiv.textContent = 'Please enter valid numbers for the base and height.';
  } else {
    var area = (base * height) / 2;
    resultDiv.textContent = 'The area of the triangle is: ' + area;
  }
}