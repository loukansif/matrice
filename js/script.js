const arrayReviews = [
  {
    comment: "il est archi sympa le resto !!",
    author: "Thomas Moro",
  },
  {
    comment: "@",
    author: "Alain Paskyet",
  },
  {
    comment:
      "j'ai pas compris comment on mange dans un resto sans couvert, m'enfin bref",
    author: "Dada",
  },
  {
    comment: "Top, j'adore les dinosaures",
    author: "Ronan le Renard UwU",
  },
];

let currentIndex = 0;

/********* HTML ELEMENTS **********/

const currentReview = document.querySelector("#review-text");
const currentReviewAuthor = document.querySelector("#review-author");

const bullets = document.querySelectorAll(".bullets li");

const zButton = document.querySelector("#z-button");
const zInput = document.querySelector("#z-input");
const zResponse = document.querySelector("#z-response");

const ipButton = document.querySelector("#ip-button");
const ipInput = document.querySelector("#ip-input");
const ipResponse = document.querySelector("#ip-response");

const bigButton = document.querySelector("#big-button");
const bigInput = document.querySelector("#big-input");
const bigResponse = document.querySelector("#big-response");

const previousButton = document.querySelector(".arrow-prev");
const nextButton = document.querySelector(".arrow-next");

/*********** FUNCTIONS ************/

const previous = () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = arrayReviews.length - 1;
  }
  displayReview(currentIndex);
};

const next = () => {
  currentIndex++;
  if (currentIndex >= arrayReviews.length) {
    currentIndex = 0;
  }
  displayReview(currentIndex);
};

function myAlert() {
    alert("Hello");
  }

function displayReview(index = 0) {
  currentReview.innerHTML = '"' + arrayReviews[index].comment + '"';
  currentReviewAuthor.innerHTML = arrayReviews[index].author;
  bullets.forEach((b) => b.classList.remove("active"));
  bullets[index].classList.add("active");
}

/********** LISTENER *************/

zButton.addEventListener("click", () => {
    zResponse.innerHTML = search_z(zInput.value);
  });
  
  ipButton.addEventListener("click", () => {
    ipResponse.innerHTML = ip_validator(ipInput.value);
  });
  
  bigButton.addEventListener("click", () => {
    bigResponse.innerHTML = bigram(bigInput.value);
  });
  
  previousButton.addEventListener("click", previous);
  
  nextButton.addEventListener("click", next);

/******* TO CALL AT START ******/

displayReview();