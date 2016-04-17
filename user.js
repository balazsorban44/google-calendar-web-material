  // ==UserScript==
  // @author        info@balazsorban.com
  // @name          Google Calendar Web Material
  // @description   Google Calendar Web Material event flairs
  // @match         https://calendar.google.com/*
  // @version       1.0
  // @grant GM_addStyle
  // ==/UserScript==


var select=document.querySelectorAll('.chip dd');
  for (i = 0; i < select.length; i++) {
    var dinner = ["dinner", "Dinner"];
    var gym = ["Gym", "Work", "Work out"];
    var code = ["code", "coding", "programming"];
    var photo = ["Photography", "Photo", "photos", "image"];
    var clean = ["vacuum clean", "Clean"];
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
  }
