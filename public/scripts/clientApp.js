console.log("In clientApp.js");
var x;
var y;
var z;
var phase =0;

var currentOperation = "none yet";

$(document).on("click", "#clear", function(){
  //clear math method, and update DOM
currentOperation = "none yet";
document.getElementById('operation').innerHTML='';
var newParagraph = document.createElement('p');
newParagraph.textContent = "No method selected";
document.getElementById('operation').appendChild(newParagraph);
console.log("and current op is now : " +currentOperation);
  //clear answer/field
  var newParagraph2 = document.createElement('p');
  newParagraph2.textContent = "The answer will appear here";
  document.getElementById('answer').innerHTML='';
  document.getElementById('answer').appendChild(newParagraph2);
  $("#Number1").val('');
  $("#Number2").val('');
  phase = 0;
  $("#answer").removeClass('highlighted');


});

$(document).on("click", ".buttonOp", function(){
    phase = 1;
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


//adds keypad functionality

$(document).on('click', '#1', function(){
  console.log("clicked!");
  keyPressed(1);
});

$(document).on('click', '#2', function(){
  console.log("clicked!");
  keyPressed(2);
});

$(document).on('click', '#3', function(){
  console.log("clicked!");
  keyPressed(3);
});


$(document).on('click', '#4', function(){
  console.log("clicked!");
  keyPressed(4);
});

$(document).on('click', '#5', function(){
  console.log("clicked!");
  keyPressed(5);
});

$(document).on('click', '#6', function(){
  console.log("clicked!");
  keyPressed(6);
});

$(document).on('click', '#7', function(){
  console.log("clicked!");
  keyPressed(7);
});

$(document).on('click', '#8', function(){
  console.log("clicked!");
  keyPressed(8);
});

$(document).on('click', '#9', function(){
  console.log("clicked!");
  keyPressed(9);
});

$(document).on('click', '#0', function(){
  console.log("clicked!");
  keyPressed(0);
});




var keyPressed = function(x){

if (phase ===0){
  var thisNumber = "#Number1";
  currentBox = $(thisNumber);
  string = currentBox.val();
string += x;
currentBox = string;
$(thisNumber).val(string);
console.log(currentBox);
}

else if (phase ===1){
  var thisNumber1 = "#Number2";
  currentBox = $(thisNumber1);
  string = currentBox.val();
string += x;
currentBox = string;
$(thisNumber1).val(string);
console.log(currentBox);

}};



var processResponse= function(response){
  console.log("In processResponse " + response);
var newParagraph = document.createElement('p');
newParagraph.textContent = response;
document.getElementById('answer').innerHTML='';
document.getElementById('answer').appendChild(newParagraph);
$("#answer").addClass('highlighted');
$("#answer").fadeIn(100).fadeOut(100).fadeIn(100);


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
