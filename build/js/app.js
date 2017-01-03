(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) { // function to pass in a skin for the calulator
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) { //ping pong being called on the calculator object
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

// all the functionality on this page is being packed into "Calculator" and then exported to "calculatorModule" for a global use.
exports.calculatorModule = Calculator; // exports provided by node to export things from one file and brings them into another.
// think of exports as a global object we are creating a new property called calulatorModule

},{}],2:[function(require,module,exports){
//connects the backend logic to this front end
var Calculator1 = require('./../js/pingpong.js').calculatorModule; // grabing the global calculator module from the backend and assigning it to calculator here.


$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator1("hot pink"); //creating a new object with the structure of calulator from the backend through the require.
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/pingpong.js":1}]},{},[2]);
