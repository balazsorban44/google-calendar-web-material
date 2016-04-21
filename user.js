// ==UserScript==
// @author        Balázs Orbán (info@balazsorban.com)
// @name          Google Calendar Web Material
// @description   Google Calendar Web Material event flairs
// @match         https://calendar.google.com/*
// @version       1.2
// ==/UserScript==
var month_dic = "url(https://raw.githubusercontent.com/balazsorban44/google-calendar-web-material/master/images/top_bg/";
var month = new Array();
month[0] = month_dic + "jan.jpg";
month[1] = month_dic + "feb.jpg";
month[2] = month_dic + "mar.jpg";
month[3] = month_dic + "apr.jpg";
month[4] = month_dic + "may.jpg";
month[5] = month_dic + "jun.jpg";
month[6] = month_dic + "jul.jpg";
month[7] = month_dic + "aug.jpg";
month[8] = month_dic + "sep.jpg";
month[9] = month_dic + "okt.jpg";
month[10] = month_dic + "nov.jpg";
month[11] = month_dic + "dec.jpg";

var date = new Date();
var monthbg = month[date.getMonth()];
document.getElementById("vr-nav").style.backgroundImage = monthbg + ")";




var flair_dic = "url(https://raw.githubusercontent.com/balazsorban44/google-calendar-web-material/master/images/event_flairs/";
var event_flair = [
  [ "xmasmeal", "christmas dinner", "christmas lunch", "christmas brunch", "christmas luncheon", "xmas dinner", "xmas lunch", "xmas brunch", "xmas luncheon", "x-mas dinner", "x-mas lunch", "x-mas brunch", "x-mas luncheon", "christmas eve dinner", "christmas eve lunch", "christmas eve brunch", "christmas eve luncheon", "xmas eve dinner", "xmas eve lunch", "xmas eve brunch", "xmas eve luncheon", "x-mas eve dinner", "x-mas eve lunch", "x-mas eve brunch", "x-mas eve luncheon", flair_dic + "xmasfood.png)" ],
  [ "xmasparty", "christmas party", "xmas party", "x-mas party", "christmas eve party", "xmas eve party", "x-mas eve party", flair_dic + "xmasparty.png)" ],
  [ "xmas", "christmas", "x-mas", flair_dic + "xmas.png)" ],
  [ "newyear", "new year", "new year's", "new years", flair_dic + "newyear.png)" ],
  [ "chinesenewyear", "chinese new year", "chinese new years", "chinese new year's", flair_dic + "chinesenewyear.png)" ],
  [ "coffee", "coffees", flair_dic + "coffee.png)" ],
  [ "beer", "beers", "Oktoberfest", "October Fest", "Octoberfest", flair_dic + "beer.png)" ],
  [ "drinks", "cocktail", "cocktails", flair_dic + "drinks.png)" ],
  [ "concert", "gig", "concerts", "gigs", flair_dic + "gig.png)" ],
  [ "cinema", "movie", "movies", flair_dic + "cinema.png)" ],
  [ "dentist", "dentistry", "dental", flair_dic + "dentist.png)" ],
  [ "haircut", "hairdresser", "hair", flair_dic + "haircut.png)" ],
  [ "manicure", "pedicure", "manicures", "pedicures", flair_dic + "pedicure.png)" ],
  [ "gym", "workout", "work out", "workouts", flair_dic + "gym.png)" ],
  [ "swimming", "swim", "swims", flair_dic + "swim.png)" ],
  [ "running", "jog", "jogging", "jogs", "runs", "run", flair_dic + "run.png)" ],
  [ "dancing", "dance", "dances", flair_dic + "dance.png)" ],
  [ "cycling", "bicycle", "bike", "bicycles", "bikes", "Biking", flair_dic + "bike.png)" ],
  [ "tennis", flair_dic + "tennis.png)" ],
  [ "skiing", "ski", "skis", "Snowboarding", "snowshoeing", "snow shoe", flair_dic + "ski.png)" ],
  [ "snow boarding", flair_dic + "snowboarding.png)" ],
  [ "yoga", flair_dic + "yoga.png)" ],
  [ "violin", "violins", flair_dic + "violin.png)" ],
  [ "hiking", "hike", "hikes", flair_dic + "hike.png)" ],
  [ "pride", "dyke march", "christopher street day", "gay parade", "gay pride", "gayglers", "gaygler", "lesbian march", "lesbian parade", "lesbian pride", "euro pride", "europride", "world pride", "worldpride", flair_dic + "pride.png)" ],
  [ "badminton", "billiard", flair_dic + "badminton.png)" ],
  [ "bookclub", "book club", "reading", flair_dic + "reading.png)" ],
  [ "bowling", flair_dic + "bowling.png)" ],
  [ "golf", flair_dic + "golf.png)" ],
  [ "final exam", "graduate", "graduation", flair_dic + "graduation.png)" ],
  [ "halloween", "helloween", "hallowe'en", "Allhalloween", "All Hallows' Eve", "All Saints' Eve", flair_dic + "halloween.png)" ],
  [ "massage", "back rub", "backrub", "massages", flair_dic + "massage.png)" ],
  [ "oilchange", "oil change", "car service", flair_dic + "oilchange.png)" ],
  [ "pingpong", "ping pong", "table tennis", "ping-pong", flair_dic + "pingpong.png)" ],
  [ "fix", "repair", "fridge repair", "handyman", "electrician", "plumber", "DIY", flair_dic + "repair.png)" ],
  [ "thanksgiving", flair_dic + "thanksgiving.png)" ],
  [ "wedding", "wedding eve", "wedding-eve party", "weddings", flair_dic + "wedding.png)" ],
  [ "santa", "Santa Claus", "Father Christmas", flair_dic + "santa.png)" ],
  [ "baseball,", flair_dic + "baseball.png)" ],
  [ "basketball", flair_dic + "basketball.png)" ],
  [ "bbq", "barbecue", "barbeque", flair_dic + "bbq.png)" ],
  [ "camping", flair_dic + "camping.png)" ],
  [ "kayaking", flair_dic + "kayaking.png)" ],
  [ "sailing", "sail", "boat cruise", "sailboat", flair_dic + "sail.png)" ],
  [ "soccer", flair_dic + "football.png)" ],
  [ "Photography", "photography", "Photography", flair_dic + "photography.png)" ],
  [ "lunch", "lunches", "luncheon", flair_dic + "lunch.png)" ],
  [ "dinner", "dinners", "restaurant", "restaurants", "Family meal", flair_dic + "dinner.png)" ],
  [ "breakfast", "breakfasts", "brunch", "brunches", flair_dic + "breakfast.png)" ],
  [ "art", "painting", "art workshop", "art workshops", "sketching workshop", "drawing workshop", flair_dic + "art.png)" ],
  [ "learninstrument", "piano", "singing", "music Class", "choir practice", "flute", "orchestra", "oboe", "clarinet", "saxophone", "cornett", "trumpet", "contrabass", "cello", "trombone", "tuba", "music ensemble", "string quartett", "guitar lesson", "classical music", "choir", flair_dic + "instrument.png)" ],
  [ "clean", "cleaning", "clean the house", "clean the apartment", "clean house", "tidy up", "vacuum clean", "vacuum cleaning", flair_dic + "clean.png)" ],
  [ "code", "learn to code", "coding time", "hackathon", "Rails Girls", "Railsgirls", "Hour of Code", "Codecademy", "Computer Science", "Programming in Python", "Web Programming", "Programming in Java", "Web Development", flair_dic + "code.png)" ],
  [ "French Course", "German Course", "English Course", "Italian Course", "Chinese Course", "Japanese Course", "Korean Course", "Polish Course", "Spanish Course", "Arabic Course", "Hebrew Course", "Portuguese Course", "Thai Course", "Russian Course", "Turkish Course", "Dutch Course", "Bulgarian Course", "Greek Course", "Hindi Course", "Indonesian Course", "Vietnamese Course", "Norwegian Course", "Swedish Course", "Slovenian Course", "Ukranian Course", "Slovak Course", "Lithuanian Course", "Latvian Course", "Hungarian Course", "Finnish Course", "Filipino Course", "Farsi Course", "Danish Course", "Czech Course", "Croatian Course", "Catalan Course", "French Class", "German Class", "English Class", "Italian Class", "Chinese Class", "Japanese Class", "Korean Class", "Polish Class", "Spanish Class", "Arabic Class", "Hebrew Class", "Portuguese Class", "Thai Class", "Russian Class", "Turkish Class", "Dutch Class", "Bulgarian Class", "Greek Class", "Hindi Class", "Indonesian Class", "Vietnamese Class", "Norwegian Class", "Swedish Class", "Slovenian Class", "Ukranian Class", "Slovak Class", "Lithuanian Class", "Latvian Class", "Hungarian Class", "Finnish Class", "Filipino Class", "Farsi Class", "Danish Class", "Czech Class", "Croatian Class", "Catalan Class", "Practice French", "Practice German", "Practice English", "Practice Italian", "Practice Chinese", "Practice Japanese", "Practice Korean", "Practice Polish", "Practice Spanish", "Practice Arabic", "Practice Hebrew", "Practice Portuguese", "Practice Thai", "Practice Russian", "Practice Turkish", "Practice Dutch", "Practice Bulgarian", "Practice Greek", "Practice Hindi", "Practice Indonesian", "Practice Vietnamese", "Practice Norwegian", "Practice Swedish", "Practice Slovenian", "Practice Ukranian", "Practice Slovak", "Practice Lithuanian", "Practice Latvian", "Practice Hungarian", "Practice Finnish", "Practice Filipino", "Practice Farsi", "Practice Danish", "Practice Czech", "Practice Croatian", "Practice Catalan", flair_dic + "learn.png)" ],
  [ "meet", "planmyday", "plan week", "plan quarter", "plan day", "plan vacation", "week planning", "vacation planning", flair_dic + "plan.png)" ],
  [ "reachout", "reach out to", "write letter", "send invitations", flair_dic + "write.png)" ],
  [ "read", "reading", "newspaper", "ebook", flair_dic + "read.png)" ],
  [ "deal", "agreement", "meeting", "appointment", "meet", flair_dic + "meet_v4.png)" ],
  [ "walk", "going for a walk", "walking", flair_dic + "walk.png)" ]
];



var target = document.querySelector('#gridcontainer');
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
      // Change the Bubble Event background
window.onclick = function(whatclassandid) {
   console.log(whatclassandid.srcElement.style.backgroundImage);
};
      var select = document.querySelectorAll('.chip dd, .cbrd dd, .cbrdcc');
      for (i = 0; i < select.length; i++) {
          compareFunction = function(e) {
              return select[i].innerText.toLowerCase().indexOf(e) !== -1;
          };
          for (j = 0; j < event_flair.length; j++) {
              if (event_flair[j].filter(compareFunction).length) {
                  select[i].style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3))," + event_flair[j][event_flair[j].length - 1];
                  //TESTING//console.log(event_flair[j][0] + " " + event_flair[j][event_flair[j].length-1]);
              }
          }
      }
  });
});
var config = {
  attributes: true,
  childList: true,
  characterData: true
};
observer.observe(target, config);
