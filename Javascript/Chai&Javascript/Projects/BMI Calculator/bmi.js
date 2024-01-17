function calculateBMI() {
  let weight1 = document.getElementById("weight").value;
  let height2 = document.getElementById("height").value;

  let weight = parseFloat(weight1);
  let height = parseFloat(height2);

  let bmi = weight / (((height / 100) * height) / 100);
  console.log(bmi.toFixed(2));

  let res = "";

  if (bmi <= 18.6) {
    res = "Underweight";
  } else if (bmi > 18.6 && bmi <= 24.9) {
    res = "Normal";
  } else if (bmi > 24.9) {
    res = "Overweight";
  }

  document.getElementById("result").innerText =
    "Your BMI is: " + bmi.toFixed(2) + "\nYou are " + res;
}
