// Harry Potter Key:
//Scott.kutler@gmail.com
// $2a$10$2PGvzZtaIOQopUvoB2BIeOYR/PZjTNS0QL7GmjXSICBXNPN5qBxyS
//URL: https://www.potterapi.com/v1/

let responseObject = null;
let potterPhoto = document.querySelector("#photo");
let tabs = document.querySelectorAll(".tab");
let tab1 = tabs[0];
let tab2 = tabs[1];
let tab3 = tabs[2];
let tab4 = tabs[3];
let characterNameBox = document.querySelector("#name");
let characterBioDiv = document.querySelector(".characterBio");
let nickname = document.querySelector("#nickname");
let wand = document.querySelector("#wand");
let patronus = document.querySelector("#patronus");
let blood = document.querySelector("#blood");

function connectAPI() {
  characterBioDiv.style.display = "none";
  potterPhoto.style.display = "block";
  fetch(baseUrl)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      responseObject = res;
    })
    .catch(err => console.log("oops something went wrong", err));
}

const baseUrl =
  "https://www.potterapi.com/v1/characters?key=$2a$10$2PGvzZtaIOQopUvoB2BIeOYR/PZjTNS0QL7GmjXSICBXNPN5qBxyS";

connectAPI();

function harry() {
  x = 109;
  potterPhoto.src = "harry.png";
  characterNameBox.textContent = responseObject[x].name;
  nickname.textContent = responseObject[x].alias;
  wand.textContent = responseObject[x].wand;
  patronus.textContent = responseObject[x].patronus;
  blood.textContent = responseObject[x].bloodStatus;
  characterBioDiv.style.display = "block";
  potterPhoto.style.display = "block";
  tab1.style.backgroundColor = "white";
  tab2.style.backgroundColor = "lightslategray";
  tab3.style.backgroundColor = "lightslategray";
  tab4.style.backgroundColor = "lightslategray";
}

function hermione() {
  x = 62;
  potterPhoto.src = "harry.png";
  characterNameBox.textContent = responseObject[x].name;
  nickname.textContent = "Hermy";
  wand.textContent = responseObject[x].wand;
  patronus.textContent = responseObject[x].patronus;
  blood.textContent = responseObject[x].bloodStatus;
  characterBioDiv.style.display = "block";
  potterPhoto.style.display = "block";
  potterPhoto.src = "hermione.png";
  characterBioDiv.style.display = "block";
  potterPhoto.style.display = "block";
  tab2.style.backgroundColor = "white";
  tab1.style.backgroundColor = "lightslategray";
  tab3.style.backgroundColor = "lightslategray";
  tab4.style.backgroundColor = "lightslategray";
}

function ron() {
  x = 156;
  potterPhoto.src = "ron.png";
  characterNameBox.textContent = responseObject[x].name;
  nickname.textContent = responseObject[x].alias;
  wand.textContent = responseObject[x].wand;
  patronus.textContent = responseObject[x].patronus;
  blood.textContent = responseObject[x].bloodStatus;
  characterBioDiv.style.display = "block";
  potterPhoto.style.display = "block";
  tab1.style.backgroundColor = "lightslategray";
  tab2.style.backgroundColor = "lightslategray";
  tab3.style.backgroundColor = "white";
  tab4.style.backgroundColor = "lightslategray";
}

function randomizer() {
  tab1.style.backgroundColor = "lightslategray";
  tab2.style.backgroundColor = "lightslategray";
  tab3.style.backgroundColor = "lightslategray";
  tab4.style.backgroundColor = "white";
  x = Math.floor(Math.random(100) * responseObject.length);
  console.log(x);
  if (responseObject[x].wand == null && responseObject[x].patronus == null) {
    randomizer();
  } else if (x == 109) {
    randomizer();
  } else if (x == 62) {
    randomizer();
  } else if (x == 156) {
  } else {
    characterNameBox.textContent = responseObject[x].name;
    if (responseObject[x].alias == null) {
      nickname.textContent = "Unknown";
    } else {
      nickname.textContent = responseObject[x].alias;
    }
    if (responseObject[x].wand == null) {
      wand.textContent = "Unknown";
    } else {
      wand.textContent = responseObject[x].wand;
    }
    if (responseObject[x].patronus == null) {
      patronus.textContent = "Unknown";
    } else {
      patronus.textContent = responseObject[x].patronus;
    }
    if (responseObject[x].bloodStatus == null) {
      blood.textContent = "Unknown";
    } else {
      blood.textContent = responseObject[x].bloodStatus;
    }
  }
  potterPhoto.src = "poster.png";
  characterBioDiv.style.display = "block";
  potterPhoto.style.display = "block";
}

tab1.addEventListener("click", harry);
tab2.addEventListener("click", hermione);
tab3.addEventListener("click", ron);
tab4.addEventListener("click", randomizer);
