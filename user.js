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
      if (select[i].innerHTML.indexOf('Work') != -1){
        select[i].style.backgroundImage = "url('https://raw.githubusercontent.com/balazsorban44/google-calendar-web-material/master/images/event_flairs/gym.png')";
      }
  }
