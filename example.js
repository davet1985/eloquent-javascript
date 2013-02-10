/** CHAPTER 2 */
function powerUp(pNum, pPowerBy) {
  var count = 0, total = 1;
  //could be rewritten using a for loop
  while (count < pPowerBy) {
    total *= pNum;
    count += 1;
  }
  alert(total);
}

function hashTriangle(pNumLines) {
  var result = "";
  for (var i=0; i<pNumLines; i++) {
    for (var j=0; j<=i; j++) {
      result += "#";
    }
    result += "\n";
  }
  alert(result);
}

function prompt2Add2() {
  var answer;
  answer = prompt("What is 2+2?");
  if (answer == 4) {
    alert("Yes, 2, well done!");
  } else if (answer == 3 || answer == 5) {
    alert("Oh, so close!");
  } else {
    alert(answer+", what are you thinking?!");
  }
  return answer;
}

function prompt2Add2v2() {
  while (true) {
    if(prompt2Add2() == 4) {
      break;
    }
  }
}

/** CHAPTER 3 */
function absolute(pNum) {
  //alert(Math.abs(pNum));
  if  (pNum < 0) {
    alert(-pNum);
  } else {
    alert(pNum);
  }
}

function greaterThan(pNum) {
  return function(pTest) {
    return pTest > pNum;
  };
}

function makeGreaterThanTen(pTest) {
  var greaterThanTen = greaterThan(10);
  alert(greaterThanTen(pTest));
}

function range(pNum) {
  var new_array = [];
  for (var i=0; i<pNum; i++) {
    new_array[i] = i;
  }
  alert(new_array.length);
  //return new_array;
}

function startsWith(pString, pTest) {
  //note, this is a case sensitive check
  alert(pString.slice(0, pTest.length) == pTest);
}

function catsName(pParagraph) {
  var names = pParagraph.slice(pParagraph.indexOf(":")+2).split(", ");
  alert(names);
}