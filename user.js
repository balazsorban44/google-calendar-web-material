  // ==UserScript==
  // @author        Balázs Orbán (info@balazsorban.com)
  // @name          Google Calendar Web Material
  // @description   Google Calendar Web Material event flairs
  // @match         https://calendar.google.com/*
  // @version       1.0
  // ==/UserScript==

  var event_flair =[
    ["Work out", "Work", "url(https://goo.gl/6uktJo)"],
    ["Matematikk","Fysikk","url(https://goo.gl/PW8YmH)"],
    ["code","programming","url(https://goo.gl/uIiBCo)"],
    ["Run","jog","url(https://goo.gl/H7KTYU)"],
    ["Clean","wash","url(https://goo.gl/2A76Xn)"],
    ["Spanish","German","url(https://goo.gl/z1fy1s)"],
    ["Photography","photo","url(https://goo.gl/7LjvkO)"]

];
var select=document.querySelectorAll('.chip dd, .cbrdcc');
   for (i = 0; i < select.length; i++)
   {
     compareFunction = function(e) { return select[i].innerText.indexOf(e) !== -1; };
     for (j = 0; j < event_flair.length; j++){
     if (event_flair[j].filter(compareFunction).length)
     {
       select[i].style.backgroundImage = event_flair[j][event_flair[j].length-1];
       //TESTING//console.log(event_flair[j][0] + " " + event_flair[j][event_flair[j].length-1]);
     }
   }
   };
