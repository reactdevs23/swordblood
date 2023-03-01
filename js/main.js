// language change dropdwon

// Get the dropdown button and content
var dropdown = document.querySelector(".languageChangingDropdown");
var iconAndCountry = dropdown.querySelector(".iconAndCountry");
var content = dropdown.querySelector(".dropdown-content");

// Add a click event listener to the content links
content.addEventListener("click", function (event) {
  // Prevent the default link behavior
  event.preventDefault();
  // Get the selected language
  var language = event.target.closest(".content").innerHTML;
  // Change the button text to the selected language
  iconAndCountry.innerHTML = language;
});

// sidebar showing
const sidebar = document.querySelector(".sidebar");
const hamburgerButton = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close");

const showSidebar = () => {
  sidebar.classList.add("showSidebar");
  if (window.innerWidth < 991) {
    hamburgerButton.style.display = "none";
    closeButton.style.display = "block";
  }
};
const hideSidebar = () => {
  sidebar.classList.remove("showSidebar");
  hamburgerButton.style.display = "block";
  closeButton.style.display = "none";
};
hamburgerButton.addEventListener("click", showSidebar);

closeButton.addEventListener("click", hideSidebar);

// progress bar
const progress = document.querySelector(".progress-done");
progress.style.width = progress.getAttribute("data-done") + "%";
progress.style.opacity = 1;

// connect wallet modal

// modal close open function
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const showAndCloseModal = (myModal) => {
  myModal.style.display = "block";
  overlay.style.display = "block";
};

const connectWallet = document.querySelector("#connectWallet");
const connectWalletModal = document.querySelector("#connectWalletModal");
const modalClose = document.querySelector("#closeModal");
const metamaskConnect = document.querySelector("#metamaskConnect");
const walletConnect = document.querySelector("#walletConnect");
const buyingMethod = document.querySelector(".buyingMethod");

const closeConnectWalletModal = () => {
  modal.style.display = "none";
  overlay.style.display = "none";
};
modalClose.addEventListener("click", closeConnectWalletModal);

const showBuyingButton = () => {
  showAndCloseModal(connectWalletModal);
  buyingMethod.style.display = "grid";
  connectWallet.style.display = "none";
  modal.style.display = "none";
  overlay.style.display = "none";
};
connectWallet.addEventListener("click", () => {
  showAndCloseModal(connectWalletModal);
});
metamaskConnect.addEventListener("click", showBuyingButton);
walletConnect.addEventListener("click", showBuyingButton);

//buywithbutton

const buyWithUsdtButton = document.querySelector("#buyWithUsdt");
const buyWithUsdcButton = document.querySelector("#buyWithUsdc");
const buyingButtonButton = document.querySelector("#buyWithDai");

// buy with eth
const buyWithEthButton = document.querySelector("#buyWithEth");
const buyWithEthModal = document.querySelector("#buyWithEthModal");
const ethValue = document.querySelector("#ethValue");
const ethApproveButton = document.querySelector("#ethApproveButton");
const buyWithEthModalClose = document.querySelector("#buyWithEthModalClose");
const purchaseWithEthModal = document.querySelector("#purchaseWithEthModal");
const purchaseWithEthModalClose = document.querySelector(
  "#purchaseWithEthModalClose"
);

buyWithEthButton.addEventListener("click", () => {
  showAndCloseModal(buyWithEthModal);
});
buyWithEthModalClose.addEventListener("click", () => {
  buyWithEthModal.style.display = "none";
});
ethApproveButton.addEventListener("click", () => {
  buyWithEthModal.style.display = "none";

  purchaseWithEthModal.style.display = "block";
});
purchaseWithEthModalClose.addEventListener("click", () => {
  purchaseWithEthModal.style.display = "none";
  overlay.style.display = "none";
});

// slider

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector("img");
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());
  // disable image dragging
  slide.addEventListener("touchstart", touchStart(index));
  slide.addEventListener("touchend", touchEnd);
  slide.addEventListener("touchmove", touchMove);
  slide.addEventListener("mousedown", touchStart(index));
  slide.addEventListener("mouseup", touchEnd);
  slide.addEventListener("mousemove", touchMove);
  slide.addEventListener("mouseleave", touchEnd);
});

function touchStart(index) {
  return function (event) {
    isDragging = true;
    startPos = getPositionX(event);
    animationID = requestAnimationFrame(animation);
    slider.classList.add("grabbing");
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && index < slides.length - 1) {
    index++;
  }
  if (movedBy > 100 && index > 0) {
    index--;
  }
  setPositionByIndex();
  slider.classList.remove("grabbing");
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = index * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}
