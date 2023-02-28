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

const connectWallet = document.querySelector("#connectWallet");
const connectWalletModal = document.querySelector("#connectWalletModal");
const overlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".modalClose");

const metamaskConnect = document.querySelector(".metamaskConnect");
const walletConnect = document.querySelector(".walletConnect");

const showConnectWalletModal = () => {
  connectWalletModal.style.display = "block";
  overlay.style.display = "block";
};
const hideConnectWalletModal = () => {
  connectWalletModal.style.display = "none";
  overlay.style.display = "none";
};
connectWallet.addEventListener("click", showConnectWalletModal);
modalClose.addEventListener("click", hideConnectWalletModal);
