let personImage = document.getElementById("dataImage");
let personName = document.getElementById("dataName");
let jobTitle = document.getElementById("dataJob");
let reviewText = document.getElementById("dataText");
// let reviewText = document.getElementById("dataText");

const person = [
  {
    imgFile: "01.jpg",
    isim: "Susan Smith",
    job: "web developer",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },

  {
    imgFile: "02.jpg",
    isim: "Benjamin Matthews",
    job: "designer",
    text: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris",
  },
  {
    imgFile: "03.jpg",
    isim: "Martha Griffin",
    job: "software engineer",
    text: "Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. malesuada magna mollis elit. malesuada magna mollis elit. malesuada",
  },
  {
    imgFile: "04.jpg",
    isim: "Alice Mendoza",
    job: "finance",
    text: "Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis ",
  },
];

// console.log(person);
// console.log(person[1].name);

for (i = 0; i <= person.length; i++) {
  person[i];
}

function getText() {
  personName.innerHTML = person[i].isim;
  jobTitle.innerHTML = person[i].job;
  reviewText.innerHTML = person[i].text;
  personImage.setAttribute("src", "images/" + person[i].imgFile);
  console.log(person[i].isim);
}

function getRight() {
  if (i >= person.length - 1) i = -1;
  i++;
  getText();
}

function getLeft() {
  if (i <= 0) i = person.length;
  i--;
  getText();
}

// random random random------

var random;

function randomNumber() {
  random = Math.floor(Math.random() * person.length);
}

function surpriseMe() {
  randomNumber();
  personName.innerHTML = person[random].isim;
  jobTitle.innerHTML = person[random].job;
  reviewText.innerHTML = person[random].text;
  personImage.setAttribute("src", "images/" + person[random].imgFile);
}
