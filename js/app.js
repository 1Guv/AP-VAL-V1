

$(document).ready(function(){


  console.log('Yo');

  var $startButton = $('.start-button');
  var $nextButton = $('.next-button');
  var $backButton = $('.back-button');

  var $q = $('.question');

  function questionOne() {
    $q.html('Please state the exact number plate with the correct spacing?');
  }

  function questionTwo() {
    $q.html('Please state the plate in ENGLISH or PUNJABI words with spaces?')
  }

  function questionThree() {
    $q.html('Please state the plate in ENGLISH or PUNJABI words with spaces?')
  }

  $startButton.click(function() {
    questionOne();
    $startButton.html('START AGAIN');

    $startButton.click(function() {
      questionOne();
    });

  $nextButton.click(function(){
    questionTwo();
  });

  $backButton.click(function(){
    questionOne();
  });

  });




});
