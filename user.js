  // ==UserScript==
  // @author        info@balazsorban.com
  // @name          Google Calendar Web Material
  // @description   Google Calendar Web Material event flairs
  // @match         https://calendar.google.com/*
  // @version       1.0
  // @grant GM_addStyle
  // ==/UserScript==

var event_flair = [
      ["Dinner", "dinner", ["url('https://goo.gl/O14CLC')"]],
      ["Work", "gym", ["url('https://goo.gl/6uktJo')"]],
    ];
var select=document.querySelectorAll('.chip dd');
  for (i = 0; i < select.length; i++) {
      if(select[i].innerHTML.indexOf("Fysikk"));{
      
    //   compareFunction = function(e) { return select[i].innerHTML.indexOf(e) !== -1; };   
//if (event_flair[0].filter(compareFunction).length)
  //   {
         
    //    select[i].style.backgroundImage = event_flair[i][1];
      }}
      
      
    var dinner = ["dinner", "Dinner"];
    var gym = ["Gym", "Work", "Work out"];
    var code = ["code", "Fysikk", "programming"];
    var photo = ["Photography", "Photo", "photos", "image"];
    var clean = ["vacuum clean", "Clean"];
    var math = ["Matematikk"];
    compareFunction = function(e) { return select[i].innerHTML.indexOf(e) !== -1; };   
if (gym.filter(compareFunction).length)
     {
        select[i].style.backgroundImage = "url('https://goo.gl/6uktJo')";
      }
else if (dinner.filter(compareFunction).length)
     {
        select[i].style.backgroundImage = "url('https://goo.gl/O14CLC')";
      }
else if (code.filter(compareFunction).length)
     {
        select[i].style.backgroundImage = "url('https://goo.gl/uIiBCo')";
      }
else if (photo.filter(compareFunction).length)
     {
        select[i].style.backgroundImage = "url('https://goo.gl/7LjvkO')";
      }
else if (clean.filter(compareFunction).length)
     {
        select[i].style.backgroundImage = "url('https://goo.gl/2A76Xn')";
      }
      else if (math.filter(compareFunction).length)
     {
        select[i].style.backgroundImage = "url('https://goo.gl/PW8YmH')";
      }
  }
