

$(document).ready(function(){


  console.log('Yo');

  var $startButton = $('.start-button');
  var $nextButton = $('.next-button');
  var $backButton = $('.back-button');

  var counter = 0;
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
    $q.html('Q3: Please state the plate in ENGLISH or PUNJABI words with spaces?')
  }

  function questionFour() {
    counter = 4;
    $q.html('Q4: Does the reg have the EXACT, MORE or LESS characters than the actual word that it represents?')
  }

  function questionFive() {
    counter = 5;
    $q.html('Q5: Does the registration have duplicate sequential letters or numbers? (yes or no)?')
  }

  function questionSix() {
    counter = 6;
    $q.html('Q6: Please state if the plate is a good match to the words above?')
  }

  $startButton.click(function() {
    questionOne();
    $startButton.html('START AGAIN');

    $startButton.click(function() {
      questionOne();
    });

  $nextButton.click(function(){
    console.log(counter);
    // questionTwo();
    counter = counter + 1;
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
  });

  $backButton.click(function(){
    console.log(counter);
    // questionOne();
    counter = counter - 1;
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
  });

});




});
