// ==UserScript==
// @author        Balázs Orbán (info@balazsorban.com)
// @name          Google Calendar Web Material
// @description   Google Calendar Web Material event flairs
// @match         https://calendar.google.com/*
// @version       2.1
// @require       https://raw.githubusercontent.com/balazsorban44/google-calendar-web-material/master/app/languages/events-EN.js
// @namespace     https://greasyfork.org/users/39251
// ==/UserScript==

const grid = document.querySelector('#gridcontainer');
const eventFlairBaseUrl = "url(https://raw.githubusercontent.com/balazsorban44/google-calendar-web-material/master/app/images/event-flairs/";
const eventFlairs = eventsEnglish.concat(eventsHungarian);

function changeBg() {
  let monthText = document.querySelectorAll(".wk-dayname span")[0].innerHTML;
  let month;
  if (monthText.slice(monthText.indexOf("/")-2) == " ") {
    month = monthText.slice(monthText.indexOf("/")-1,monthText.indexOf("/"))-1;
  }
  else {
    month = monthText.slice(monthText.indexOf("/")-2,monthText.indexOf("/"))-1;
  }
  document.getElementById("vr-nav").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0, 0.4) 6%, transparent 20%), url(https://raw.githubusercontent.com/balazsorban44/google-calendar-web-material/master/app/images/months/" + month + ".jpg)";
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        changeBg();
        let events = document.querySelectorAll('.cbrd');
        events.forEach((eventsItem) => {
          compareFunction = (element) => eventsItem.innerText.toLowerCase().indexOf(element) !== -1;
          eventFlairs.forEach((eventFlairsItem) => {
              if (eventFlairsItem.filter(compareFunction).length) {
                  eventsItem.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, .4), transparent 40%)," + eventFlairBaseUrl + eventFlairsItem[0] + ".png)";
              }
          });
        });
    });
});

grid.addEventListener('click', () => {
    setTimeout(() => {
        let bubbleEvent = document.querySelector(".bubblemain");
        let eventTitle = bubbleEvent.innerText.split("\n")[0];
        eventFlairs.forEach((eventFlairsItem) => {
            compareFunction = (element) => eventTitle.toLowerCase().indexOf(element) !== -1;
            if(eventFlairsItem.filter(compareFunction).length){
               bubbleEvent.style.backgroundImage = "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))," + eventFlairBaseUrl + eventFlairsItem[0] + ".png)";
            }
    });
    },1);

});


const config = {
    attributes: true,
    childList: true,
    characterData: true
};
observer.observe(grid, config);
