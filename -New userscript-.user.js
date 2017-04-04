alert("CardBlox 1.02 has loaded Created By JR0DGamerz Updated By LogicFail");
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function main() {
  var key = ((nums[Math.floor(Math.random() * nums.length)].toString()) + (Math.floor((Math.random() * 10)).toString()) + (Math.floor((Math.random() * 10)).toString()));
  var key2 = ((Math.floor((Math.random() * 10)).toString()) + (Math.floor((Math.random() * 10)).toString()) + (Math.floor((Math.random() * 10)).toString()));
  var key3 = ((Math.floor((Math.random() * 10)).toString()) + (Math.floor((Math.random() * 10)).toString()) + (Math.floor((Math.random() * 10)).toString()) + (Math.floor((Math.random() * 10)).toString()));
  var code = (key + " " + key2 + " " + key3)
  document.getElementById("pin").value = code;
  Roblox.GameCard.redeemCode();
}

setInterval(function() {
  main();
}, 2);﻿