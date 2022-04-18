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
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati labore eius. Ducimus, excepturi deleniti!`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ullam provident facere.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem?`,
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. At soluta nobis ea explicabo unde.`,
];

populateProjects();

function populateProjects() {
  const numberOfCards = Math.floor(Math.random() * 8) + 1;

  // Create cards based on random numberOfCards
  for (i = 0; i < numberOfCards; i++) {
    // Set up icons
    const iconContainer = document.createElement("div");
    iconContainer.classList.add("icons");
    const shareIcon = document.createElement("i");
    shareIcon.classList.add("fa-solid", "fa-share-nodes");
    const bookmarkIcon = document.createElement("i");
    bookmarkIcon.classList.add("fa-solid", "fa-bookmark");
    const downloadIcon = document.createElement("i");
    downloadIcon.classList.add("fa-solid", "fa-download");
    iconContainer.appendChild(shareIcon);
    iconContainer.appendChild(bookmarkIcon);
    iconContainer.appendChild(downloadIcon);

    //create card

    let card = document.createElement("div");
    card.classList.add("card");
    card.innerText = randomText(placeholderTitles);

    //create description and append desc + icons

    let cardDescription = document.createElement("div");
    cardDescription.classList.add("card-description");
    cardDescription.innerText = randomText(placeholderTexts);
    card.appendChild(cardDescription);
    card.appendChild(iconContainer);

    projectsView.appendChild(card);
  }
}

function randomText(arrayOfWords) {
  let randomInt = Math.floor(Math.random() * arrayOfWords.length);
  return arrayOfWords[randomInt];
}
