

$(document).ready(function(){


  console.log('Yo');

  var $startButton = $('.start-button');
  var $nextButton = $('.next-button');
  var $backButton = $('.back-button');

  var counter = 0;
  var next = 0;
  var back = 0;
  var $q = $('.question');

  function questionOne() {
    counter = 1;
    $q.html('Q1: Please state the exact number plate with the correct spacing?');
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
    }
  }


});
