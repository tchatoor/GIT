
// Challenge 1
for (var i = 0; i < 8; i++) {
    var str =''
    str += "#".repeat(i)
    console.log(str)
  }

  /*
  initiate an empty string
  every time it loops add a hash multplied by the index number to the string (repeat function allows  you to multiply a string https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
  console log prints the string at the end of every loop
  */
  
  // Challenge 2
  
  function isEven(number) {
      if (number%2 == 0){
          console.log("the number is even")
      }
      else
      console.log("the number is odd")
  }

  /*
  takes in a number if the remainder is 0 then its even else its odd
  */