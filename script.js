"use strict";

$(document).ready(function () {
  $(".button").click(function () {
    $.ajax.get("https://reqres.in/api/unknown", function (data, status) {
      for (let i = 0; i < data.data.length; i++) {
        console.log("Data: " + data.data[i].name + "\nStatus: " + status);
      }
    });
  });
});
