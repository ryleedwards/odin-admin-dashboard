const projectsView = document.querySelector(".projects");
const announcementsView = document.querySelector(".announcements");
const trendingView = document.querySelector(".trending");

const placeholderTitles = [
  "Super Cool Project",
  "Less Cool Project",
  "Impossible App",
  "Easy Peasy App",
  "Ad Blocker",
  "Money Maker",
];

const placeholderTexts = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Laboriosam obcaecati labore eius. Ducimus, excepturi deleniti!`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Voluptatum ullam provident facere.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
  Voluptatem?`,
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
  soluta nobis ea explicabo unde.`,
];

populateProjects();

function populateProjects() {
  const numberOfCards = Math.floor(Math.random() * 8) + 1;
  const shareIcon = `<i class="fa-solid fa-share-nodes"></i>`;
  const bookmarkIcon = `<i class="fa-solid fa-bookmark"></i>`;
  const downloadIcon = `<i class="fa-solid fa-download"></i>`;
  const iconsDiv = `<div>${shareIcon}${bookmarkIcon}${downloadIcon}</div>`;
  // Create cards based on random numberOfCards
  for (i = 0; i < numberOfCards; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerText = randomText(placeholderTitles);
    let cardDescription = document.createElement("div");
    cardDescription.classList.add("card-description");
    cardDescription.innerText = randomText(placeholderTexts);
  }
}

function randomText(arrayOfWords) {
  let randomInt = Math.floor(Math.random() * arrayOfWords.length);
  return arrayOfWords[randomInt];
}
