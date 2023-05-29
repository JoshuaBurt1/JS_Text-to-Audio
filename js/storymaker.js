// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const story = document.querySelector("#story");

// Variables for pre-defined arrays
var randomize;
var insertNoun1 = [
  "The turkey",
  "Mom",
  "Dad",
  "The dog",
  "My teacher",
  "The elephant",
  "The cat",
];
var insertVerb = [
  "sat on",
  "ate",
  "danced with",
  "saw",
  "doesn't like",
  "kissed",
];
var insertAdjective = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimy",
  "a barking",
  "a fat",
];
var insertNoun2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var insertSetting = [
  "on the moon.",
  "on the chair.",
  "in my spaghetti.",
  "in my soup.",
  "on the grass.",
  "in my shoes.",
];

// Variables for count to grab array elements
var countNoun1 = 0;
var countVerb = 0;
var countAdjective = 0;
var countNoun2 = 0;
var countSetting = 0;

//Variable for audio
var audioNoun1;
var audioVerb;
var audioAdjective;
var audioNoun2;
var audioSetting;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
  // variable to get array element and displaying it
  // if-else to change count setting

  //if random story was pressed before
  var noun1Index = insertNoun1.indexOf(choosenNoun1.textContent);
  if (noun1Index >= 0) {
    countNoun1 = noun1Index + 1;
  }
  //goes to next element in array (for user control)
  if (countNoun1 > 6) {
    countNoun1 = 0;
  }
  //gets audio file associated with count value and plays audio
  audioNoun1 = document.createElement("audio");
  audioNoun1.src = "audio/Noun1" + countNoun1 + ".mp3";
  audioNoun1.play();

  //get array element ready for concatenation in function playback_on_click
  choosenNoun1.textContent = insertNoun1[countNoun1];

  //highlight animation
  document
    .getElementById("choosenNoun1")
    .animate([{ transform: "scale(1)" }, { transform: "scale(1.3)" }], {
      duration: 1000,
      iterations: 1,
      direction: "normal",
    });

  countNoun1++;
  //resets story paragraph to blank on click
  story.textContent = "";
}

function verb_on_click() {
  //if random story was pressed before
  var verbIndex = insertVerb.indexOf(choosenVerb.textContent);
  if (verbIndex >= 0) {
    countVerb = verbIndex + 1;
  }
  //goes to next element in array (for user control)
  if (countVerb > 5) {
    countVerb = 0;
  }
  //gets audio file associated with count value and plays audio
  audioVerb = document.createElement("audio");
  audioVerb.src = "audio/Verb" + countVerb + ".mp3";
  audioVerb.play();

  //get array element ready for concatenation in function playback_on_click
  choosenVerb.textContent = insertVerb[countVerb];

  //highlight animation
  document
    .getElementById("choosenVerb")
    .animate([{ transform: "scale(1)" }, { transform: "scale(1.3)" }], {
      duration: 1000,
      iterations: 1,
      direction: "normal",
    });

  countVerb++;
  //resets story paragraph to blank on click
  story.textContent = "";
}

function adjective_on_click() {
  //if random story was pressed before
  var adjectiveIndex = insertAdjective.indexOf(choosenAdjective.textContent);
  if (adjectiveIndex >= 0) {
    countAdjective = adjectiveIndex + 1;
  }
  //goes to next element in array (for user control)
  if (countAdjective > 5) {
    countAdjective = 0;
  }
  //gets audio file associated with count value and plays audio
  audioAdjective = document.createElement("audio");
  audioAdjective.src = "audio/Adjective" + countAdjective + ".mp3";
  audioAdjective.play();

  //get array element ready for concatenation in function playback_on_click
  choosenAdjective.textContent = insertAdjective[countAdjective];

  //highlight animation
  document
    .getElementById("choosenAdjective")
    .animate([{ transform: "scale(1)" }, { transform: "scale(1.3)" }], {
      duration: 1000,
      iterations: 1,
      direction: "normal",
    });

  countAdjective++;
  //resets story paragraph to blank on click
  story.textContent = "";
}

function noun2_on_click() {
  //if random story was pressed before
  var noun2Index = insertNoun2.indexOf(choosenNoun2.textContent);
  if (noun2Index >= 0) {
    countNoun2 = noun2Index + 1;
  }
  //goes to next element in array (for user control)
  if (countNoun2 > 6) {
    countNoun2 = 0;
  }
  //gets audio file associated with count value and plays audio
  audioNoun2 = document.createElement("audio");
  audioNoun2.src = "audio/Noun2" + countNoun2 + ".mp3";
  audioNoun2.play();

  //get array element ready for concatenation in function playback_on_click
  choosenNoun2.textContent = insertNoun2[countNoun2];

  //highlight animation
  document
    .getElementById("choosenNoun2")
    .animate([{ transform: "scale(1)" }, { transform: "scale(1.3)" }], {
      duration: 1000,
      iterations: 1,
      direction: "normal",
    });

  countNoun2++;
  //resets story paragraph to blank on click
  story.textContent = "";
}

function setting_on_click() {
  //if random story was pressed before
  var settingIndex = insertSetting.indexOf(choosenSetting.textContent);
  if (settingIndex >= 0) {
    countSetting = settingIndex + 1;
  }
  //goes to next element in array (for user control)
  if (countSetting > 5) {
    countSetting = 0;
  }
  //gets audio file associated with count value and plays audio
  audioSetting = document.createElement("audio");
  audioSetting.src = "audio/Setting" + countSetting + ".mp3";
  audioSetting.play();

  //get array element ready for concatenation in function playback_on_click
  choosenSetting.textContent = insertSetting[countSetting];

  //highlight animation
  document
    .getElementById("choosenSetting")
    .animate([{ transform: "scale(1)" }, { transform: "scale(1.3)" }], {
      duration: 1000,
      iterations: 1,
      direction: "normal",
    });

  countSetting++;
  //resets story paragraph to blank on click
  story.textContent = "";
}

// concatenate the user story, display text, read audio
function playback_on_click() {
  story.textContent =
    choosenNoun1.textContent +
    " " +
    choosenVerb.textContent +
    " " +
    choosenAdjective.textContent +
    " " +
    choosenNoun2.textContent +
    " " +
    choosenSetting.textContent;

  if ("speechSynthesis" in window) {
    // Method 1: if speech synthesis is supported: Web Speech API
    var speech = new SpeechSynthesisUtterance();
    speech.text = story.textContent;
    window.speechSynthesis.speak(speech);
  } else {
    // Method 2: recorded speech within audio folder
    audioNoun1.play(); //plays audioNoun
    var duration1 = audioNoun1.duration * 1000; //gets duration of audioNoun

    setTimeout(() => {
      audioVerb.play(); //plays audioVerb, after audioNoun1 duration
      var duration2 = audioVerb.duration * 1000; //gets duration of audioVerb

      setTimeout(() => {
        audioAdjective.play(); //plays audioAdjective, after audioVerb duration
        var duration3 = audioAdjective.duration * 1000; //gets duration of audioAdjective

        setTimeout(() => {
          audioNoun2.play(); //plays audioNoun2, after audioAdjective duration
          var duration4 = audioNoun2.duration * 1000; //gets duration of audioNoun2

          setTimeout(() => {
            audioSetting.play(); //plays audioSetting, after audioNoun2 duration
          }, duration4);
        }, duration3);
      }, duration2);
    }, duration1);
  }
}

//random function for random_on_click button, input array, returns element content
function randomArrayValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
  choosenNoun1.textContent = randomArrayValue(insertNoun1);
  noun1Index = insertNoun1.indexOf(choosenNoun1.textContent);
  audioNoun1 = document.createElement("audio");
  audioNoun1.src = "audio/Noun1" + noun1Index + ".mp3"; //sets audioNoun1 value to be played on show story / playback button

  choosenVerb.textContent = randomArrayValue(insertVerb);
  var verbIndex = insertVerb.indexOf(choosenVerb.textContent);
  audioVerb = document.createElement("audio");
  audioVerb.src = "audio/Verb" + verbIndex + ".mp3"; //sets audioVerb value to be played on show story / playback button

  choosenAdjective.textContent = randomArrayValue(insertAdjective);
  var adjectiveIndex = insertAdjective.indexOf(choosenAdjective.textContent);
  audioAdjective = document.createElement("audio");
  audioAdjective.src = "audio/Adjective" + adjectiveIndex + ".mp3"; //sets audioAdjective value to be played on show story / playback button

  choosenNoun2.textContent = randomArrayValue(insertNoun2);
  var noun2Index = insertNoun2.indexOf(choosenNoun2.textContent);
  audioNoun2 = document.createElement("audio");
  audioNoun2.src = "audio/Noun2" + noun2Index + ".mp3"; //sets audioNoun2 value to be played on show story / playback button

  choosenSetting.textContent = randomArrayValue(insertSetting);
  var settingIndex = insertSetting.indexOf(choosenSetting.textContent);
  audioSetting = document.createElement("audio");
  audioSetting.src = "audio/Setting" + settingIndex + ".mp3"; //sets audioSetting value to be played on show story / playback button

  //resets story paragraph to blank on click
  story.textContent = "";
}

/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);
playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
