console.log("In clientApp.js");


$(document).ready(function(){
  console.log("Bling confirmed");

  $("#calculateBtn").click(function(){
    $.post("calculator.js", function(data, status){
      
    });
    console.log("Clicked!");
  });
});
