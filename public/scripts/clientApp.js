console.log("In clientApp.js");
var x ;
var y;
var z;

var currentOperation = "none yet";

$(document).on("click", ".buttonOp", function(){
  console.log("clicked!");
   currentOperation = this.id;
  console.log("current operation is now " + currentOperation);


  document.getElementById('operation').innerHTML='';
  var newParagraph = document.createElement('p');

//Capitalizes the first letter of the operation selected
  var capitalizer = function(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };

var upperCase = capitalizer(currentOperation);
console.log("upper case is now + " + upperCase);
  newParagraph.textContent = upperCase;
  document.getElementById('operation').appendChild(newParagraph);

});



var processResponse= function(response){
  console.log("In processResponse " + response);
var newParagraph = document.createElement('p');
newParagraph.textContent = response;
document.getElementById('answer').innerHTML='';
document.getElementById('answer').appendChild(newParagraph);

};




$(document).ready(function(){
  console.log("Bling confirmed");

  $("#calculateBtn").click(function(){
        console.log("Clicked!");

        var input1 = $('#Number1').val();
        var input2 = $('#Number2').val();
        var input3 = currentOperation.toString();
console.log("input 3 is now " + input3);
        x = input1;
        y = input2;
        z = input3;

        runCalc(input1, input2, input3);

});
var runCalc = function(x, y, z) {
  console.log("inside runCalc");

  var inputObject= {
    "x": x,
    "y":y,
    "type": z
  };


console.log("Input was " );
console.log(inputObject);

if (currentOperation == "add"){
  $.ajax({
    url:"/calculate",
    type: "POST",
    data: inputObject,
    cache: false,
    timeout:5000,
    complete: function() {
      console.log("Ajax call complete!");
    },

    success: function(data){
      console.log("A this point, variable data is: ");
      console.log(data);
      processResponse(data);
      console.log("Ajax was a success!");
    },
    error: function() {
      console.log("Process error! Holy smokes!");
    },
  });
}

else if (currentOperation == "subtract"){
  $.ajax({
    url:"/calculateSub",
    type: "POST",
    data: inputObject,
    cache: false,
    timeout:5000,
    complete: function() {
      console.log("Ajax call complete!");
    },

    success: function(data){
      console.log("A this point, variable data is: ");
      console.log(data);
      processResponse(data);
      console.log("Ajax was a success!");
    },
    error: function() {
      console.log("Process error! Holy smokes!");
    },
  });

}
else if (currentOperation == 'multiply') {
  $.ajax({
    url:"/calculateMul",
    type: "POST",
    data: inputObject,
    cache: false,
    timeout:5000,
    complete: function() {
      console.log("Ajax call complete!");
    },

    success: function(data){
      console.log("A this point, variable data is: ");
      console.log(data);
      processResponse(data);
      console.log("Ajax was a success!");
    },
    error: function() {
      console.log("Process error! Holy smokes!");
    },
  });
}

else if (currentOperation == "divide") {
  $.ajax({
    url:"/calculateDiv",
    type: "POST",
    data: inputObject,
    cache: false,
    timeout:5000,
    complete: function() {
      console.log("Ajax call complete!");
    },

    success: function(data){
      console.log("A this point, variable data is: ");
      console.log(data);
      processResponse(data);
      console.log("Ajax was a success!");
    },
    error: function() {
      console.log("Process error! Holy smokes!");
    },
  });

}


else {
  alert("Sorry, but you need to add a method first.");
}
};



    });
