//console.log
function logArgs(args) {
  var args = 1
  console.log(args)  
}
var functionString = logArgs.toString()
var consoleLogExample = $("#console-log-example")
var formattedExample = $("<pre>")
formattedExample.text(functionString)
consoleLogExample.html(formattedExample)

//function
function myfunction(a, b) {
  return a * b;
}
myfunction(4, 3);
var call = "12"
var functionString = myfunction.toString() + call
var functionExample = $("#function-example")
var formattedExample = $("<pre>")
formattedExample.text(functionString)
functionExample.html(formattedExample)


//firebaseexample

//var input = $("#firebase-input")
//
//input.keydown(function(e) {	
//  if (e.keyCode == "13") {
//    var valueToSave = input.val();
//    addListItem("LIST", valueToSave);
//  }
//})
//
//onNewListItem("LIST", function(value) {
//  $("#firebase-display").append("<div>" + value + "</div>")
//}) 



