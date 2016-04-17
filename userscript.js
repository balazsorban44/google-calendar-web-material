// ==UserScript==
// @name          Google Calendar Web Material
// @description   Google Calendar Web Material event flairs
// @match         https://calendar.google.com/*
// @version       1.0
// ==/UserScript==

var bg= document.getElementsByClassName("bubblemain")[0];
var title= document.getElementsByClassName("ui-sch-schmedit")[0].innerHTML;
if( title.indexOf('gig') != -1|| title.indexOf('concert') != -1 ){
    bg.style.backgroundImage = "url('https://raw.githubusercontent.com/balazsorban44/google-calendar-web-material/master/images/event_flairs/gig.png')";
} else if(  title.indexOf('Work') != -1|| title.indexOf('Workout') != -1 ){
    bg.style.backgroundImage = "url('https://raw.githubusercontent.com/balazsorban44/google-calendar-web-material/master/images/event_flairs/gym.png')";
}
