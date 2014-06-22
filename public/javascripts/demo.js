"use strict";

var marked = require("marked");

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

$.ajax({
  type: "GET",
  url: "/javascripts/demo.js", 
  dataType: "text",
  success: function(result) {
    var output = marked("```js\n" + result + "\n```");
    $("#code-snippet").html(output);
  }
});

function hello() {
  return "world";
}
