  // ==UserScript==
  // @author        info@balazsorban.com
  // @name          Google Calendar Web Material
  // @description   Google Calendar Web Material event flairs
  // @match         https://calendar.google.com/*
  // @version       1.0
  // ==/UserScript==

  window.onload=function event_flairs(){
  for (i = 0; i < document.querySelectorAll('.chip dd').length; i++) {
      if (document.querySelectorAll(".chip dd")[i].innerHTML.indexOf('Work') != -1){
        document.querySelectorAll(".chip dd")[i].style.backgroundImage = "url('https://raw.githubusercontent.com/balazsorban44/google-calendar-web-material/master/images/event_flairs/gym.png')";
      }
  }
  }
