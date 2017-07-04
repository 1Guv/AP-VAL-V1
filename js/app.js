

$(document).ready(function(){


  console.log('Yo');

  var $startButton = $('.start-button');
  var $nextButton = $('.next-button');
  var $backButton = $('.back-button');

  var counter = 0;
  var next = 0;
  var back = 0;

  var $q = $('.question');
  var $qexample = $('.example');

  function questionOne() {
    counter = 1;
    $q.html('Q1: Please state the exact number plate with the correct spacing?');
    $qexample.html('Example of spacing for most plates: [1A], [A1], [1 AB], [AB 1], [1 ABC], [ABC 1], [ABC 123D], [A123 BCD] or [AB51 CDE]');
    
    // generate plate for viewing

  }

  function questionTwo() {
    counter = 2;
    $q.html('Q2: Please state the plate in ENGLISH or PUNJABI words with spaces?')
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
    $q.html('Q12: Do any of the (INTEGER) letters need to be modified?')
  }

  function questionThirteen() {
    counter = 13;
    $q.html('Q13: Do any of the 1 numbers need to be modified?')
  }

  function questionFourteen() {
    counter = 14;
    $q.html('Q14: Do any of the 1 numbers need to be modified?')
  }

  function questionFifteen() {
    counter = 15;
    $q.html('Q15: Do any of the (INTEGER) numbers need to be modified?')
  }


  $startButton.click(function() {
    questionOne();
    $startButton.html('START AGAIN');

    $startButton.click(function() {
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
      case 14:
        questionFourteen();
        break;
      case 15:
        questionFifteen();
        break;
    }
  }


});
