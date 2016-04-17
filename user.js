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
      var gym = ["gym", "Work", "Work out"],
    compareFunction = function(e) { return select[i].innerHTML.indexOf(e) !== -1; };   
if (gym.filter(compareFunction).length)
     {
        select[i].style.backgroundImage = "url('https://goo.gl/6uktJo')";
      }
  }
