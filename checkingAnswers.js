var correctAnswer = [
  ["question1", "lettuces"],
  ["question2", "1,000 kg"],
  ["question3", "food consumption", "consumption"],
  ["question4", "pesticides"],
  ["question5", "journeys"],
  ["question6", "producers"],
  ["question7", " flavour", " flavor"],
  ["question8", "true"],
  ["question9", "not given"],
  ["question10", "false"],
  ["question11", "true"],
  ["question12", "false"],
  ["question13", "not given"],
  ["question14", "b"],
  ["question15", "a"],
  ["question16", "c"],
  ["question17", "e"],
  ["question18", "b"],
  ["question19", "b"],
  ["question20", "c"],
  ["question21", "c"],
  ["question22", "fire"],
  ["question23", "nutrients"],
  ["question24", "cavities"],
  ["question25", "hawthorn"],
  ["question26", "rare"],
  ["question27", "c"],
  ["question28", "f"],
  ["question29", "a"],
  ["question30", "e"],
  ["question31", "b"],
  ["question32", "sustainability"],
  ["question33", "fuel"],
  ["question34", "explosions"],
  ["question35", "bankrupt"],
  ["question36", "c"],
  ["question37", "d"],
  ["question38", "b"],
  ["question39", "d"],
  ["question40", "a"],
];
let userAnswer = {};
let trueAnswerCounter = 0;
for (var i = 0; i < 13; i++) {
  userAnswer[i] = document.getElementById(`answer${i + 1}`).value.toLowerCase();
}

function check() {
  for (var i = 0; i < 13; i++) {
    if (
      userAnswer[i] === correctAnswer[i][1] ||
      userAnswer[i] === correctAnswer[i][2]
    ) {
      trueAnswerCounter++;
    }
  }
  return trueAnswerCounter;
}

// //submit key
// document.querySelector(".submit").addEventListener("click", function () {
//   return window.location.assign("/result.html");
// });

//result page for reading academic
let ueserScore = 0;
check2();
if (trueAnswerCounter >= 39) {
  userScore = 9;
} else if (trueAnswerCounter >= 37) {
  userScore = 8.5;
} else if (trueAnswerCounter >= 35) {
  userScore = 8;
} else if (trueAnswerCounter >= 33) {
  userScore = 7.5;
} else if (trueAnswerCounter >= 30) {
  userScore = 7;
} else if (trueAnswerCounter >= 27) {
  userScore = 6.5;
} else if (trueAnswerCounter >= 23) {
  userScore = 6;
} else if (trueAnswerCounter >= 19) {
  userScore = 5.5;
} else if (trueAnswerCounter >= 15) {
  userScore = 5;
} else if (trueAnswerCounter >= 13) {
  userScore = 4.5;
} else if (trueAnswerCounter >= 10) {
  userScore = 4;
} else if (trueAnswerCounter >= 8) {
  userScore = 3.5;
} else if (trueAnswerCounter >= 6) {
  userScore = 3;
} else if (trueAnswerCounter >= 4) {
  userScore = 2.5;
} else if (trueAnswerCounter >= 2) {
  userScore = 2;
} else if (trueAnswerCounter === 1) {
  userScore = 1.5;
} else if (trueAnswerCounter === 0) {
  userScore = 0;
}
//html code:
let chapUserScore = `You have ${trueAnswerCounter} correct answers. Your reading score is ${userScore}.`;

// Get the placeholder element by its ID
let resultElement = document.getElementById("resultValue");

// Update the content of the element with the value from the variable
resultElement.textContent = chapUserScore;

//Answer Table
// Get the reference for the body
let body = document.getElementsByTagName("body")[0];

// Create a table element
let table = document.createElement("table");

// Create rows and cells for each element in the arrays
for (let i = 0; i < 40; i++) {
  let row = table.insertRow();

  let cell1 = row.insertCell();
  cell1.textContent = correctAnswer[i][0];

  let cell2 = row.insertCell();
  cell2.textContent = correctAnswer[i][1];

  let cell3 = row.insertCell();
  cell3.textContent = userAnswer[i];

  if (
    userAnswer[i] === correctAnswer[i][1] ||
    userAnswer[i] === correctAnswer[i][2]
  ) {
    cell3.style.color = "green";
  } else {
    cell3.style.color = "red";
  }
  //no answer
}
// Append the table to the body
body.appendChild(table);

innerhtml;
innertext;
displaygrid(omnifood);
