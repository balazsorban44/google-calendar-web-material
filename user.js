// ==UserScript==
// @author        Balázs Orbán (info@balazsorban.com)
// @name          Google Calendar Web Material
// @description   Google Calendar Web Material event flairs
// @match         https://calendar.google.com/*
// @version       1.0.1
// ==/UserScript==
var url_dic = "url(https://raw.githubusercontent.com/balazsorban44/google-calendar-web-material/master/images/event_flairs/";
var event_flair = [
  [ "xmasmeal", "christmas dinner", "christmas lunch", "christmas brunch", "christmas luncheon", "xmas dinner", "xmas lunch", "xmas brunch", "xmas luncheon", "x-mas dinner", "x-mas lunch", "x-mas brunch", "x-mas luncheon", "christmas eve dinner", "christmas eve lunch", "christmas eve brunch", "christmas eve luncheon", "xmas eve dinner", "xmas eve lunch", "xmas eve brunch", "xmas eve luncheon", "x-mas eve dinner", "x-mas eve lunch", "x-mas eve brunch", "x-mas eve luncheon", url_dic + "xmasfood.png)" ],
  [ "xmasparty", "christmas party", "xmas party", "x-mas party", "christmas eve party", "xmas eve party", "x-mas eve party", url_dic + "xmasparty.png)" ],
  [ "xmas", "christmas", "x-mas", url_dic + "xmas.png)" ],
  [ "newyear", "new year", "new year's", "new years", url_dic + "newyear.png)" ],
  [ "chinesenewyear", "chinese new year", "chinese new years", "chinese new year's", url_dic + "chinesenewyear.png)" ],
  [ "coffee", "coffees", url_dic + "coffee.png)" ],
  [ "beer", "beers", "Oktoberfest", "October Fest", "Octoberfest", url_dic + "beer.png)" ],
  [ "drinks", "cocktail", "cocktails", url_dic + "drinks.png)" ],
  [ "concert", "gig", "concerts", "gigs", url_dic + "gig.png)" ],
  [ "cinema", "movie", "movies", url_dic + "cinema.png)" ],
  [ "dentist", "dentistry", "dental", url_dic + "dentist.png)" ],
  [ "haircut", "hairdresser", "hair", url_dic + "haircut.png)" ],
  [ "manicure", "pedicure", "manicures", "pedicures", url_dic + "manicure.png)" ],
  [ "gym", "workout", "workouts", url_dic + "gym.png)" ],
  [ "swimming", "swim", "swims", url_dic + "swim.png)" ],
  [ "running", "jog", "jogging", "jogs", "runs", url_dic + "runs.png)" ],
  [ "dancing", "dance", "dances", url_dic + "dance.png)" ],
  [ "cycling", "bicycle", "bike", "bicycles", "bikes", "Biking", url_dic + "bike.png)" ],
  [ "tennis", url_dic + "tennis.png)" ],
  [ "skiing", "ski", "skis", "Snowboarding", "snowshoeing", "snow shoe", url_dic + "ski.png)" ],
  [ "snow boarding", url_dic + "snowboarding.png)" ],
  [ "yoga", url_dic + "yoga.png)" ],
  [ "violin", "violins", url_dic + "violin.png)" ],
  [ "hiking", "hike", "hikes", url_dic + "hiking.png)" ],
  [ "pride", "dyke march", "christopher street day", "gay parade", "gay pride", "gayglers", "gaygler", "lesbian march", "lesbian parade", "lesbian pride", "euro pride", "europride", "world pride", "worldpride", url_dic + "pride.png)" ],
  [ "badminton", "billiard", url_dic + "badminton.png)" ],
  [ "bookclub", "book club", "reading", url_dic + "reading.png)" ],
  [ "bowling", url_dic + "bowling.png)" ],
  [ "golf", url_dic + "golf.png)" ],
  [ "graduation", url_dic + "graduation.png)" ],
  [ "halloween", "helloween", "hallowe'en", "Allhalloween", "All Hallows' Eve", "All Saints' Eve", url_dic + "halloween.png)" ],
  [ "massage", "back rub", "backrub", "massages", url_dic + "massage.png)" ],
  [ "oilchange", "oil change", "car service", url_dic + "oilchange.png)" ],
  [ "pingpong", "ping pong", "table tennis", "ping-pong", url_dic + "pingpong.png)" ],
  [ "repair", "fridge repair", "handyman", "electrician", "plumber", "DIY", url_dic + "repair.png)" ],
  [ "thanksgiving", url_dic + "thanksgiving.png)" ],
  [ "wedding", "wedding eve", "wedding-eve party", "weddings", url_dic + "wedding.png)" ],
  [ "santa", "Santa Claus", "Father Christmas", url_dic + "santa.png)" ],
  [ "baseball,", url_dic + "baseball.png)" ],
  [ "basketball", url_dic + "basketball.png)" ],
  [ "bbq", "barbecue", "barbeque", url_dic + "bbq.png)" ],
  [ "camping", url_dic + "camping.png)" ],
  [ "kayaking", url_dic + "kayaking.png)" ],
  [ "sailing", "sail", "boat cruise", "sailboat", url_dic + "sail.png)" ],
  [ "soccer", url_dic + "football.png)" ],
  [ "Photography", "photography", "Photography", url_dic + "photography.png)" ],
  [ "lunch", "lunches", "luncheon", url_dic + "lunch.png)" ],
  [ "dinner", "dinners", "restaurant", "restaurants", "Family meal", url_dic + "dinner.png)" ],
  [ "breakfast", "breakfasts", "brunch", "brunches", url_dic + "breakfast.png)" ],
  [ "art", "painting", "art workshop", "art workshops", "sketching workshop", "drawing workshop", url_dic + "art.png)" ],
  [ "learninstrument", "piano", "singing", "music Class", "choir practice", "flute", "orchestra", "oboe", "clarinet", "saxophone", "cornett", "trumpet", "contrabass", "cello", "trombone", "tuba", "music ensemble", "string quartett", "guitar lesson", "classical music", "choir", url_dic + "instrument.png)" ],
  [ "clean", "cleaning", "clean the house", "clean the apartment", "clean house", "tidy up", "vacuum clean", "vacuum cleaning", url_dic + "clean.png)" ],
  [ "code", "learn to code", "coding time", "hackathon", "Rails Girls", "Railsgirls", "Hour of Code", "Codecademy", "Computer Science", "Programming in Python", "Web Programming", "Programming in Java", "Web Development", url_dic + "code.png)" ],
  [ "French Course", "German Course", "English Course", "Italian Course", "Chinese Course", "Japanese Course", "Korean Course", "Polish Course", "Spanish Course", "Arabic Course", "Hebrew Course", "Portuguese Course", "Thai Course", "Russian Course", "Turkish Course", "Dutch Course", "Bulgarian Course", "Greek Course", "Hindi Course", "Indonesian Course", "Vietnamese Course", "Norwegian Course", "Swedish Course", "Slovenian Course", "Ukranian Course", "Slovak Course", "Lithuanian Course", "Latvian Course", "Hungarian Course", "Finnish Course", "Filipino Course", "Farsi Course", "Danish Course", "Czech Course", "Croatian Course", "Catalan Course", "French Class", "German Class", "English Class", "Italian Class", "Chinese Class", "Japanese Class", "Korean Class", "Polish Class", "Spanish Class", "Arabic Class", "Hebrew Class", "Portuguese Class", "Thai Class", "Russian Class", "Turkish Class", "Dutch Class", "Bulgarian Class", "Greek Class", "Hindi Class", "Indonesian Class", "Vietnamese Class", "Norwegian Class", "Swedish Class", "Slovenian Class", "Ukranian Class", "Slovak Class", "Lithuanian Class", "Latvian Class", "Hungarian Class", "Finnish Class", "Filipino Class", "Farsi Class", "Danish Class", "Czech Class", "Croatian Class", "Catalan Class", "Practice French", "Practice German", "Practice English", "Practice Italian", "Practice Chinese", "Practice Japanese", "Practice Korean", "Practice Polish", "Practice Spanish", "Practice Arabic", "Practice Hebrew", "Practice Portuguese", "Practice Thai", "Practice Russian", "Practice Turkish", "Practice Dutch", "Practice Bulgarian", "Practice Greek", "Practice Hindi", "Practice Indonesian", "Practice Vietnamese", "Practice Norwegian", "Practice Swedish", "Practice Slovenian", "Practice Ukranian", "Practice Slovak", "Practice Lithuanian", "Practice Latvian", "Practice Hungarian", "Practice Finnish", "Practice Filipino", "Practice Farsi", "Practice Danish", "Practice Czech", "Practice Croatian", "Practice Catalan", url_dic + "learn.png)" ],
  [ "planmyday", "plan week", "plan quarter", "plan day", "plan vacation", "week planning", "vacation planning", url_dic + "plan.png)" ],
  [ "reachout", "reach out to", "write letter", "send invitations", url_dic + "write.png)" ],
  [ "read", "reading", "newspaper", "ebook", url_dic + "read.png)" ],
  [ "walk", "going for a walk", "walking", url_dic + "walk.png)" ]
];

var target = document.querySelector('#gridcontainer');
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
      console.log("changed");
      var select = document.querySelectorAll('.chip dd, .cbrdcc');
      for (i = 0; i < select.length; i++) {
          compareFunction = function(e) {
              return select[i].innerText.indexOf(e) !== -1;
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
