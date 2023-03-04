// quick link active
const mySidebar = document.querySelector(".sidebar");
const navLinks = document.querySelectorAll(".link");
navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active-quicklink");
  }
  console.log(link.href === window.location.href);
});

// sidebar showing
const sidebar = document.querySelector(".sidebar");
const hamburgerButton = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close");

const showSidebar = () => {
  sidebar.classList.add("showSidebar");
  if (window.innerWidth < 991) {
    hamburgerButton.style.display = "none";
    closeButton.style.display = "flex";
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
// show buying button
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
const buyWithDaiButton = document.querySelector("#buyWithDai");

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
buyWithUsdtButton.addEventListener("click", () => {
  showAndCloseModal(buyWithEthModal);
});
buyWithUsdcButton.addEventListener("click", () => {
  showAndCloseModal(buyWithEthModal);
});
buyWithDaiButton.addEventListener("click", () => {
  showAndCloseModal(buyWithEthModal);
});

buyWithEthModalClose.addEventListener("click", () => {
  buyWithEthModal.style.display = "none";
  overlay.style.display = "none";
});
ethApproveButton.addEventListener("click", () => {
  buyWithEthModal.style.display = "none";

  purchaseWithEthModal.style.display = "block";
});
purchaseWithEthModalClose.addEventListener("click", () => {
  purchaseWithEthModal.style.display = "none";
  overlay.style.display = "none";
});
