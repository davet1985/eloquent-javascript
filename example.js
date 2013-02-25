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

/** CHAPTER 4 */
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

function showCurrentDate() {
  var today = new Date();
  alert(today);
}

function extractDate(pParagraph) {
  var date = pParagraph.slice(5, 15).split('/');
  var date2 = new Date(date[2], date[1]-1, date[0]);
  alert(date2);
}

function between(pString, pBeginning, pEnd) {
  var start = pString.indexOf(pBeginning) + pBeginning.length;
  var end = pString.indexOf(pEnd, start);
  alert(pString.slice(start, end));
}

function range(start, end) {
  var new_array = [];
  if (arguments.length < 2) {
    end = start;
    start = 0;
  }
  for (var i=start; i<=end; i++) {
    new_array.push(i);
  }
  alert(new_array);
  return new_array;
}

function sum(numArray) {
  var total=0;
  for (var i=0; i<numArray.length; i++) {
    total+=numArray[i];
  }
  alert(total);
}

/** CHAPTER 5 */
//abstracted for each loop, pass anon function as action to do something to each element in the array
function forEach(array, action) {
  for (var i=0; i<array.length; i++) {
    action(array[i]);
  }
}

function sumUsingAbstractForEach(numArray) {
  var total = 0;
  forEach(numArray, function(number) {
    total+=number;
  });
  
  alert(total);
}