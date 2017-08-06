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
  var $options = $('.options');

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
        q3Value = 0;
        q3Input = $('.UserInput').val();
        q3Input = q3Input.toUpperCase();
        console.log(q3Input);

        if (q3Input === "MORE" || q3Input === "M" || q3Input === "LESS" || q3Input === "L") {
          q3Value += -1000;
        } else if (q3Input === "EXACT" || q3Input === "E") {
          q3Value += 5000;
        };

        $('.Q3PlateCharacters').html("Q3 - Characters: " + q3Input + " >> £" + q3Value);

        valuationResult += q3Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);

        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 4:
        q4Value = 0;
        q4Input = $('.UserInput').val();
        q4Input = q4Input.toUpperCase();
        console.log(q4Input);

        if (q4Input === "Y" || q4Input === "YES") {
          q4Value += -1000;
        } else if (q4Input === "N" || q4Input == "NO") {
          q4Value += 3000;
        }

        $('.Q4DuplicateChars').html("Q4 - Duplicate characters: " + q4Input + " >> £" + q4Value);

        valuationResult += q4Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);

        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 5:
        q5Value = 0;
        q5Input = $('.UserInput').val();
        q5Input = q5Input.toUpperCase();
        console.log(q5Input);

        if (q5Input === "YES" || q5Input === "Y") {
          q5Value += 5000;
        } else if (q5Input === "NO" || q5Input === "N") {
          q5Value += -4000;
        } else if (q5Input === "MAYBE" || q5Input === "M") {
          q5Value += -1000;
        }

        $('.Q5GoodMatch').html("Q5 - Good match: " + q5Input + " >> £" + q5Value);

        valuationResult += q5Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);

        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 6:
        q6Value = 0;
        q6Input = $('.UserInput').val();
        q6Input = q6Input.toUpperCase();
        console.log(q6Input);

        if (q6Input <= 3) {
          q6Value += 25000;
        } else if (q6Input > 3 && q6Input <= 5) {
          q6Value += 5000;
        } else if (q6Input > 6) {
          q6Value += 1000;
        }

        $('.Q6TotChars').html("Q6 - Total characters: " + q6Input + " >> £" + q6Value);

        valuationResult +=  q6Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);

        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 7:
        q7Value = 0;
        q7Input = $('.UserInput').val();
        q7Input = q7Input.toUpperCase();
        console.log(q7Input);

        if (q7Input == 1) {
          q7Value += 25000;
        } else if (q7Input == 2) {
          q7Value += 10000;
        } else if (q7Input == 3) {
          q7Value += 1000;
        } else {
          q7Value += -1000;
        }

        $('.Q7Digits').html("Q7 - Total digits: " + q7Input + " >> £" + q7Value);

        valuationResult +=  q7Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);

        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 8:
        q8Value = 0;
        q8Input = $('.UserInput').val();
        q8Input = q8Input.toUpperCase();
        console.log(q8Input);

        if (q8Input == 1) {
          q8Value += 25000;
        } else if (q8Input == 2) {
          q8Value += 15000;
        } else if (q8Input == 3) {
          q8Value += 10000;
        } else if (q8Input == 4 ){
          q8Value += 5000;
        } else {
          q8Value += -2000;
        }

        $('.Q8Letters').html("Q8 - Total letters: " + q8Input + " >> £" + q8Value);

        valuationResult +=  q8Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);

        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 9:
        q9Value = 0;
        q9Input = $('.UserInput').val();
        q9Input = q9Input.toUpperCase();
        console.log(q9Input);

        if (q9Input == "CURRENT" || q9Input == "C") {
          q9Value += 1000;
        } else if (q9Input == "PREFIX" || q9Input == "P") {
          q9Value += 3000;
        } else if (q9Input == "SUFFIX" || q9Input == "S") {
          q9Value += 5000;
        } else if (q9Input == "DATELESS" || q9Input == "D" ){
          q9Value += 8000;
        }

        $('.Q9Type').html("Q9 - Type: " + q9Input + " >> £" + q9Value);

        valuationResult +=  q9Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);

        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 10:
        q10Value = 0;
        q10Input = $('.UserInput').val();
        q10Input = q10Input.toUpperCase();
        console.log(q10Input);

        q10Value = q10Input * 100;

        $('.Q10Age').html("Q10 - Plate age: " + q10Input + " >> £" + q10Value);

        valuationResult +=  q10Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);

        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 11:
        q11Value = 0;
        q11Input = $('.UserInput').val();
        q11Input = q11Input.toUpperCase();
        console.log(q11Input);

        if (q11Input === 1) {
          q11Value += 1000;
        } else if (q11Input <= 2) {
          q11Value += 0;
        } else {
          q11Value += -2000;
        }

        $('.Q11Spaces').html("Q11 - Plate spaces: " + q11Input + " >> £" + q11Value);

        valuationResult +=  q11Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);

        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 12:
        q12Value = 0;
        q12Input = $('.UserInput').val();
        q12Input = q12Input.toUpperCase();
        console.log(q12Input);

        if (q12Input === "YES" || q12Input === "Y") {
          q12Value += -3000;
        } else if (q12Input === "NO" || q12Input === "N") {
          q12Value += 2000;
        }

        $('.Q12LetterModify').html("Q12 - Letter modifications: " + q12Input + " >> £" + q12Value);

        valuationResult +=  q12Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);

        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
      case 13:
        q13Value = 0;
        q13Input = $('.UserInput').val();
        q13Input = q13Input.toUpperCase();
        console.log(q13Input);

        if (q13Input === "YES" || q13Input === "Y") {
          q13Value += -2000;
        } else if (q13Input == "NO" || q13Input === "N") {
          q13Value += 1000;
        }

        $('.Q13DigitModify').html("Q13 - Digit modifications: " + q13Input + " >> £" + q13Value);

        valuationResult +=  q13Value;
        $('.ValuationResult').html("Current Valuation is: £" + valuationResult);

        $('.UserInput').val('');
        console.log(counter);
        counter = counter + 1;
        backOrNext();
        break;
    }
  });

  function questionOne() {
    counter = 1;

    $q.html('<h5>Q1: Please state the exact number plate with the correct spacing?</h5>');
    // $qexample.html('Example of spacing for most plates: [1A], [A1], [1 AB], [AB 1], [1 ABC], [ABC 1], [ABC 123D], [A123 BCD] or [AB51 CDE]');
    $qexample.html('<h6>Example: For the purpose of continuity I will use 6 UVS has an example</h6>');
    $options.html('Your options could be 6 UVS (dateless), GUV 5S (suffix), G11VSS (prefix) or MR16 UVS (current)')
  }

  function questionTwo() {
    counter = 2;
    $q.html('Q2: Please state the plate in ENGLISH or PUNJABI words with spaces?')
    $qexample.html('Example: GUVS');

  }

  function questionThree() {
    counter = 3;
    $q.html('Q3: Does the reg have the EXACT, MORE or LESS characters than the actual word that it represents?')
    $qexample.html('for GUVS its MORE (G1JVS has 5 characters and GUVS has 4 characters)');
    $options.html('Your options are EXACT, MORE or LESS')
  }

  function questionFour() {
    counter = 4;
    $q.html('Q4: Does the registration have duplicate sequential letters or numbers? (yes or no)?')
    $qexample.html('for GUVS its NO');
    $options.html('Your options are YES or NO')
  }

  function questionFive() {
    counter = 5;
    $q.html('Q5: Please state if the plate is a good match to the words above?')
    $qexample.html('for G1JVS i would say NO because a letter needs modifying');
    $options.html('Your options are YES or NO')
  }

  function questionSix() {
    counter = 6;
    $q.html('Q6: What are the total amount of characters in the plate?')
    $qexample.html('for G1JVS its 5 letters');
    $options.html('Please enter a number')
  }

  function questionSeven() {
    counter = 7;
    $q.html('Q7: How many digits?')
    $qexample.html('for G1JVS its 1 digit');
    $options.html('Please enter a number')
  }

  function questionEight() {
    counter = 8;
    $q.html('Q8: How many letters?')
    $qexample.html('for G1JVS its 4 digit');
    $options.html('Please enter a number')
  }

  function questionNine() {
    counter = 9;
    $q.html('Q9: What is the plate type eg CURRENT, PREFIX, SUFFIX or DATELESS?')
    $qexample.html('for G1JVS its PREFIX');
    $options.html('Please enter CURRENT, PREFIX, SUFFIX or DATELESS')
  }

  function questionTen() {
    counter = 10;
    $q.html('Q10: What is the age of the plate?')
    $qexample.html('for G1JVS the G reg came out in 1989');
    $options.html('2017 - 1989 = 28 - please enter a number')
  }

  function questionElleven() {
    counter = 11;
    $q.html('Q11: How many spaces between words or numbers? (1,2,3 etc or None)')
    $qexample.html('for G1JVS its NONE because its displayed as one word');
    $options.html('Please enter a number or NONE')
  }

  function questionTwelve() {
    counter = 12;
    $q.html('Q12: Do any of the (CHARACTERS) letters need to be modified?')
    $qexample.html('for G1JVS its YES, the J needs modifying and moved closer to the 1 to make it look like a U');
    $options.html('Please enter YES or NO')
  }

  function questionThirteen() {
    counter = 13;
    $q.html('Q13: Do any of the (INTEGER) numbers need to be modified?')
    $qexample.html('for G1JVS its NO');
    $options.html('Please enter YES or NO')
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
