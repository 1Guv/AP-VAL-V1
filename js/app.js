$(document).ready(function(){


  console.log('Yo');

  var $startButton = $('.start-button');
  var $nextButton = $('.next-button');
  var $backButton = $('.back-button');
  var $submitButton = $('.submit-button');

  var counter = 0;
  var next = 0;
  var back = 0;

  var $q = $('.question');
  var $qexample = $('.example');

  var q1Value = 0;
  var valuationResult = 0;

  // for each question the submit button is clicked
  $submitButton.click(function() {

    switch (counter) {
      case 1:
        q1Value = 2000;
        q1Input = $('.UserInput').val();
        q1Input = q1Input.toUpperCase();
        console.log(q1Input);
        $('.Q1UserPlate').html("Q1 - Plate: " + q1Input + " >> £" + q1Value);
        valuationResult += q1Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 2:
        q2Value = 1000;
        q2Input = $('.UserInput').val();
        q2Input = q2Input.toUpperCase();
        console.log(q2Input);
        $('.Q2UserPlateActual').html("Q2 - Meaning: " + q2Input + " >> £" + q2Value);
        valuationResult += q2Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 3:
        q3Input = $('.UserInput').val();
        q3Input = q3Input.toUpperCase();
        console.log(q3Input);
        $('.Q3PlateCharacters').html("Q3 - Characters: " + q3Input);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 4:
        q4Input = $('.UserInput').val();
        q4Input = q4Input.toUpperCase();
        console.log(q4Input);
        $('.Q4DuplicateChars').html("Q4 - Duplicate characters: " + q4Input);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 5:
        q5Input = $('.UserInput').val();
        q5Input = q5Input.toUpperCase();
        console.log(q5Input);
        $('.Q5GoodMatch').html("Q5 - Good match: " + q5Input);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 6:
        q6Input = $('.UserInput').val();
        q6Input = q6Input.toUpperCase();
        console.log(q6Input);
        $('.Q6TotChars').html("Q6 - Total characters: " + q6Input);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 7:
        q7Input = $('.UserInput').val();
        q7Input = q7Input.toUpperCase();
        console.log(q7Input);
        $('.Q7Digits').html("Q7 - Total digits: " + q7Input);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 8:
        q8Input = $('.UserInput').val();
        q8Input = q8Input.toUpperCase();
        console.log(q8Input);
        $('.Q8Letters').html("Q8 - Total letters: " + q8Input);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 9:
        q9Input = $('.UserInput').val();
        q9Input = q9Input.toUpperCase();
        console.log(q9Input);
        $('.Q9Type').html("Q9 - Type: " + q9Input);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 10:
        q10Input = $('.UserInput').val();
        q10Input = q10Input.toUpperCase();
        console.log(q10Input);
        $('.Q10Age').html("Q10 - Plate age: " + q10Input);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 11:
        q11Input = $('.UserInput').val();
        q11Input = q11Input.toUpperCase();
        console.log(q11Input);
        $('.Q11Spaces').html("Q11 - Plate spaces: " + q11Input);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 12:
        q12Input = $('.UserInput').val();
        q12Input = q12Input.toUpperCase();
        console.log(q12Input);
        $('.Q12LetterModify').html("Q12 - Letter modifications: " + q12Input);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 13:
        q13Input = $('.UserInput').val();
        q13Input = q13Input.toUpperCase();
        console.log(q13Input);
        $('.Q13DigitModify').html("Q13 - Digit modifications: " + q13Input);
        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
    }
  });

  function questionOne() {
    counter = 1;

    $q.html('Q1: Please state the exact number plate with the correct spacing?');
    // $qexample.html('Example of spacing for most plates: [1A], [A1], [1 AB], [AB 1], [1 ABC], [ABC 1], [ABC 123D], [A123 BCD] or [AB51 CDE]');
    $qexample.html('Example: For the purpose of continuity I will use G1 JVS has an example');

  }

  function questionTwo() {
    counter = 2;
    $q.html('Q2: Please state the plate in ENGLISH or PUNJABI words with spaces?')
    $qexample.html('Example: GUVS');

  }

  function questionThree() {
    counter = 3;
    $q.html('Q3: Does the reg have the EXACT, MORE or LESS characters than the actual word that it represents?')
  }

  function questionFour() {
    counter = 4;
    $q.html('Q4: Does the registration have duplicate sequential letters or numbers? (yes or no)?')
  }

  function questionFive() {
    counter = 5;
    $q.html('Q5: Please state if the plate is a good match to the words above?')
  }

  function questionSix() {
    counter = 6;
    $q.html('Q6: What are the total amount of characters in the plate?')
  }

  function questionSeven() {
    counter = 7;
    $q.html('Q7: How many digits?')
  }

  function questionEight() {
    counter = 8;
    $q.html('Q8: How many letters?')
  }

  function questionNine() {
    counter = 9;
    $q.html('Q9: What is the plate type eg CURRENT, PREFIX, SUFFIX or DATELESS?')
  }

  function questionTen() {
    counter = 10;
    $q.html('Q10: What is the age of the plate?')
  }

  function questionElleven() {
    counter = 11;
    $q.html('Q11: How many spaces between words or numbers? (1,2,3 etc or none)')
  }

  function questionTwelve() {
    counter = 12;
    $q.html('Q12: Do any of the (CHARACTERS) letters need to be modified?')
  }

  function questionThirteen() {
    counter = 13;
    $q.html('Q13: Do any of the (INTEGER) numbers need to be modified?')
  }


  $startButton.click(function() {
    questionOne();
    $startButton.html('START AGAIN');

    $startButton.click(function() {
      counter = 0;
      questionOne();
    });
  });


  $nextButton.click(function(){
    console.log(counter);
    // questionTwo();
    next = 1;
    backOrNext();
  });

  $backButton.click(function(){
    console.log(counter);
    // questionOne();
    back = 1;
    backOrNext();
  });

  function backOrNext() {

    if (next == 1) {
      counter = counter + 1;
      next = 0;
    } else if (back == 1) {
      counter = counter - 1;
      back = 0;
    }

    switch (counter) {
      case 1:
        questionOne();
        break;
      case 2:
        questionTwo();
        break;
      case 3:
        questionThree();
        break;
      case 4:
        questionFour();
        break;
      case 5:
        questionFive();
        break;
      case 6:
        questionSix();
        break;
      case 7:
        questionSeven();
        break;
      case 8:
        questionEight();
        break;
      case 9:
        questionNine();
        break;
      case 10:
        questionTen();
        break;
      case 11:
        questionElleven();
        break;
      case 12:
        questionTwelve();
        break;
      case 13:
        questionThirteen();
        break;
    }
  }


});
