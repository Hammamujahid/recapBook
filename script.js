const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const pageFlipSound = document.querySelector("#page-flip-sound");

const cover1 = document.querySelector("#c1");
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const cover2 = document.querySelector("#c2");
const pages = [cover1, paper1, paper2, paper3, paper4, cover2];

let currentState = 1;
let numOfPapers = 6;
let maxState = numOfPapers + 1;
let isAnimating = false;

prevBtn.addEventListener("click", () => {
  if (!isAnimating) goPrevPage();
});
nextBtn.addEventListener("click", () => {
  if (!isAnimating) goNextPage();
});

function playSound() {
  pageFlipSound.currentTime = 0;
  pageFlipSound.play();
}

function openBook() {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-19vw)";
  nextBtn.style.transform = "translateX(19vw)";
}

function closeBook(isFirstPage) {
  if (isFirstPage) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }
  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  if (currentState < maxState) {
    isAnimating = true;
    playSound();
    const currentPage = pages[currentState - 1];
    if (currentState === 1) {
      openBook();
    }
    currentPage.classList.add("flipped");
    currentPage.style.zIndex = currentState;
    isAnimating = false;
    currentState++;

    if (currentState === maxState) {
      closeBook(false);
    }
  }
}

function goPrevPage() {
  if (currentState > 1) {
    isAnimating = true;
    playSound();
    if (currentState === maxState) {
      openBook();
    }
    currentState--;
    const currentPage = pages[currentState - 1];
    currentPage.classList.remove("flipped");
    currentPage.style.zIndex = maxState - currentState;
    isAnimating = false;
    if (currentState === 1) {
      closeBook(true);
    }
  }
}

snowFall.snow(document.querySelector("body"),{
    round: true,
    minSize: 1,
    maxSize: 5,
    shadow: true,
    flakeCount: 70,
    flakeColor: "#c7dfea"
})
