$(document).ready(function(){

  //Stores user input to be calculated
  var inputs = [" "];

  //String to store current input
  var totalString;

  //Operators array - exluding .
  var operators1 = ["+", "-", "/", "*"];

  //Operators array, only .
  var operators2 = ["."];

  //Numbers array
  var nums = [0,1,2,3,4,5,6,7,8,9];

  //Adds value to the inputs array
  function getValue(input){
    //Displays error message if you try and use two decimals (.) in a row
    if(operators2.includes(inputs[inputs.length-1]===true && input===".")){
      console.log("Duplicate '.'");
    }
    //To make sure you can't input an operator from operators1 array before a number
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
    //Adds an operator to the output only if last character input was not an operator
    else if(operators1.includes(inputs[inputs.length-1])===false){
      inputs.push(input);
    }
    //So you can add multiple numbers to the output
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    updateValue();

  }

  function updateValue(){
    totalString = inputs.join("");
    $("#output").html(totalString);

  }

  function getTotal(){
    totalString = inputs.join("");
    $("#output").html(eval(totalString));

  }

  $("button").on("click", function(){
    // If CLEAR button is clicked, updates value in inputs array to its default (nothing)
    if (this.id==="clear"){
      inputs=[""];
      updateValue();
    }
    // If ='s button is clicked, activates getTotal function
    else if (this.id==="total"){
      getTotal();
    }
    else {
      //If last input in array does not contain index of operators, get the value
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*", ".")===-1){
        getValue(this.id);
      }
      else{
        getValue(this.id);

      }
    }


  });
});
