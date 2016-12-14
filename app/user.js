// ==UserScript==
// @author        Balázs Orbán (info@balazsorban.com)
// @name          Google Calendar Web Material
// @description   Google Calendar Web Material event flairs
// @match         https://calendar.google.com/*
// @version       2.0
// @namespace https://greasyfork.org/users/39251
// ==/UserScript==

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
document.getElementById("vr-nav").style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 20%), url(https://raw.githubusercontent.com/balazsorban44/google-calendar-web-material/master/images/months/" + new Date().getMonth() + ".jpg)";

const eventFlairBaseUrl = "url(https://raw.githubusercontent.com/balazsorban44/google-calendar-web-material/master/images/event-flairs/";
const eventFlairs = [
    ["xmasmeal", "christmas dinner", "christmas lunch", "christmas brunch", "christmas luncheon", "xmas dinner", "xmas lunch", "xmas brunch", "xmas luncheon", "x-mas dinner", "x-mas lunch", "x-mas brunch", "x-mas luncheon", "christmas eve dinner", "christmas eve lunch", "christmas eve brunch", "christmas eve luncheon", "xmas eve dinner", "xmas eve lunch", "xmas eve brunch", "xmas eve luncheon", "x-mas eve dinner", "x-mas eve lunch", "x-mas eve brunch", "x-mas eve luncheon", "xmasfood"],
    ["christmas party", "xmas party", "x-mas party", "christmas eve party", "xmas eve party", "x-mas eve party", "xmasparty"],
    ["christmas", "x-mas", "xmas"],
    ["new year", "new year's", "new years", "newyear"],
    ["chinese new year", "chinese new years", "chinese new year's", "chinesenewyear"],
    ["coffees", "coffee"],
    ["beers", "Oktoberfest", "October Fest", "Octoberfest", "beer"],
    ["cocktail", "cocktails", "drinks"],
    ["concert", "concerts", "gigs", "gig"],
    ["movie", "movies", "cinema"],
    ["dentistry", "dental", "dentist"],
    ["hairdresser", "hair", "haircut"],
    ["manicure", "manicures", "pedicures", "pedicure"],
    ["workout", "work out", "workouts", "gym"],
    ["swimming", "swims", "swim"],
    ["running", "jog", "jogging", "jogs", "runs", "run"],
    ["dancing","dances", "dance"],
    ["cycling", "bicycle", "bicycles", "bikes", "Biking", "bike"],
    ["tennis"],
    ["skiing", "skis", "Snowboarding", "snowshoeing", "snow shoe", "ski"],
    ["snow boarding", "snowboarding"],
    ["yoga"],
    ["violins", "violin"],
    ["hiking", "hikes", "hike"],
    ["dyke march", "christopher street day", "gay parade", "gay pride", "gayglers", "gaygler", "lesbian march", "lesbian parade", "lesbian pride", "euro pride", "europride", "world pride", "worldpride", "pride"],
    ["billiard", "badminton"],
    ["bookclub", "book club", "reading"],
    ["bowling"],
    ["golf"],
    ["final exam", "graduate", "graduation"],
    ["helloween", "hallowe'en", "Allhalloween", "All Hallows' Eve", "All Saints' Eve", "halloween"],
    ["back rub", "backrub", "massages", "massage"],
    ["oil change", "car service", "oilchange"],
    ["ping pong", "table tennis", "ping-pong", "pingpong"],
    ["fix", "fridge repair", "handyman", "electrician", "plumber", "DIY", "repair"],
    ["thanksgiving"],
    ["wedding eve", "wedding-eve party", "weddings", "wedding"],
    ["Santa Claus", "Father Christmas", "santa"],
    ["baseball"],
    ["basketball"],
    ["barbecue", "barbeque", "bbq"],
    ["camping"],
    ["kayaking"],
    ["sailing", "sail", "boat cruise", "sailboat", "sail"],
    ["soccer", "football"],
    ["photography"],
    ["lunches", "luncheon", "lunch"],
    ["dinners", "restaurant", "restaurants", "Family meal", "dinner"],
    ["breakfasts", "brunch", "brunches", "breakfast"],
    ["painting", "art workshop", "art workshops", "sketching workshop", "drawing workshop", "art"],
    ["learninstrument", "piano", "singing", "music Class", "choir practice", "flute", "orchestra", "oboe", "clarinet", "saxophone", "cornett", "trumpet", "contrabass", "cello", "trombone", "tuba", "music ensemble", "string quartett", "guitar lesson", "classical music", "choir", "instrument"],
    ["cleaning", "clean the house", "clean the apartment", "clean house", "tidy up", "vacuum clean", "vacuum cleaning", "clean"],
    ["French Course", "German Course", "English Course", "Italian Course", "Chinese Course", "Japanese Course", "Korean Course", "Polish Course", "Spanish Course", "Arabic Course", "Hebrew Course", "Portuguese Course", "Thai Course", "Russian Course", "Turkish Course", "Dutch Course", "Bulgarian Course", "Greek Course", "Hindi Course", "Indonesian Course", "Vietnamese Course", "Norwegian Course", "Swedish Course", "Slovenian Course", "Ukranian Course", "Slovak Course", "Lithuanian Course", "Latvian Course", "Hungarian Course", "Finnish Course", "Filipino Course", "Farsi Course", "Danish Course", "Czech Course", "Croatian Course", "Catalan Course", "French Class", "German Class", "English Class", "Italian Class", "Chinese Class", "Japanese Class", "Korean Class", "Polish Class", "Spanish Class", "Arabic Class", "Hebrew Class", "Portuguese Class", "Thai Class", "Russian Class", "Turkish Class", "Dutch Class", "Bulgarian Class", "Greek Class", "Hindi Class", "Indonesian Class", "Vietnamese Class", "Norwegian Class", "Swedish Class", "Slovenian Class", "Ukranian Class", "Slovak Class", "Lithuanian Class", "Latvian Class", "Hungarian Class", "Finnish Class", "Filipino Class", "Farsi Class", "Danish Class", "Czech Class", "Croatian Class", "Catalan Class", "Practice French", "Practice German", "Practice English", "Practice Italian", "Practice Chinese", "Practice Japanese", "Practice Korean", "Practice Polish", "Practice Spanish", "Practice Arabic", "Practice Hebrew", "Practice Portuguese", "Practice Thai", "Practice Russian", "Practice Turkish", "Practice Dutch", "Practice Bulgarian", "Practice Greek", "Practice Hindi", "Practice Indonesian", "Practice Vietnamese", "Practice Norwegian", "Practice Swedish", "Practice Slovenian", "Practice Ukranian", "Practice Slovak", "Practice Lithuanian", "Practice Latvian", "Practice Hungarian", "Practice Finnish", "Practice Filipino", "Practice Farsi", "Practice Danish", "Practice Czech", "Practice Croatian", "Practice Catalan", "learn"],
    ["learn to code", "coding time", "hackathon", "Rails Girls", "Railsgirls", "Hour of Code", "Codecademy", "Computer Science", "Programming in Python", "Web Programming", "Programming in Java", "Web Development", "code"],
    ["planmyday", "plan week", "plan quarter", "plan day", "plan vacation", "week planning", "vacation planning", "plan"],
    ["reachout", "reach out to", "write letter", "send invitations", "write"],
    ["reading", "newspaper", "ebook", "read"],
    ["deal", "agreement", "meeting", "appointment", "meet", "meet_v4"],
    ["kitchen", "soup", "cooking", "cook"],
    ["walking", "walk"]
];

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        var events = document.querySelectorAll('.chip dd, .cbrd dd, .cbrdcc');
        events.forEach((eventsItem) => {
          compareFunction = (element) => eventsItem.innerText.toLowerCase().indexOf(element) !== -1;
          eventFlairs.forEach((eventFlairsItem) => {
              if (eventFlairsItem.filter(compareFunction).length) {
                  eventsItem.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3))," + eventFlairBaseUrl + eventFlairsItem[eventFlairsItem.length - 1] + ".png)";
              }
          });
        });
    });
});

const config = {
    attributes: true,
    childList: true,
    characterData: true
};
observer.observe(document.querySelector('#gridcontainer'), config);
