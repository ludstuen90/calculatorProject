console.log("In clientApp.js");
var x ;

var y;
var z;



var processResponse= function(response){
  console.log("In processResponse " + response);
};




$(document).ready(function(){
  console.log("Bling confirmed");

  $("#calculateBtn").click(function(){
        console.log("Clicked!");

        var input1 = $('#Number1').val();
        var input2 = $('#Number2').val();
        var input3 = $('#calcType').val();

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
};

    });
