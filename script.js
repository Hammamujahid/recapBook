const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const pageFlipSound = document.querySelector("#page-flip-sound");

const cover1 = document.querySelector("#c1");
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");
const paper10 = document.querySelector("#p10");
const paper11 = document.querySelector("#p11");
const paper12 = document.querySelector("#p12");
const paper13 = document.querySelector("#p13");
const paper14 = document.querySelector("#p14");
const paper15 = document.querySelector("#p15");
const paper16 = document.querySelector("#p16");
const paper17 = document.querySelector("#p17");
const paper18 = document.querySelector("#p18");
const paper19 = document.querySelector("#p19");
const paper20 = document.querySelector("#p20");
const cover2 = document.querySelector("#c2");
const pages = [
  cover1,
  paper1,
  paper2,
  paper3,
  paper4,
  paper5,
  paper6,
  paper7,
  paper8,
  paper9,
  paper10,
  paper11,
  paper12,
  paper13,
  paper14,
  paper15,
  paper16,
  paper17,
  paper18,
  paper19,
  paper20,
  cover2,
];

let currentState = 1;
let numOfPapers = 22;
let maxState = numOfPapers + 1;
let isAnimating = false;

pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

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

function updateZIndex() {
  let flippedCount = 0;

  pages.forEach((page, index) => {
    if (page.classList.contains("flipped")) {
      // Beri z-index rendah untuk halaman flipped
      page.style.zIndex = flippedCount + 1;
      flippedCount++;
    } else {
      // Beri z-index tinggi untuk halaman non-flipped
      page.style.zIndex = pages.length - index + flippedCount;
    }
  });
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
    currentPage.style.transformStyle = "preserve-3d";

    if (currentState === 1) {
      openBook();
    }

    currentPage.classList.add("flipped");

    setTimeout(() => {
      updateZIndex();
      isAnimating = false;
    }, 500);

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
    currentPage.style.transformStyle = "preserve-3d";
    currentPage.classList.remove("flipped");
    updateZIndex();
    setTimeout(() => {
      currentPage.style.transformStyle = "";
      isAnimating = false;
    }, 500);
    if (currentState === 1) {
      closeBook(true);
    }
  }
}

snowFall.snow(document.querySelector("body"), {
  round: true,
  minSize: 1,
  maxSize: 5,
  shadow: true,
  flakeCount: 70,
  flakeColor: "#c7dfea",
});
