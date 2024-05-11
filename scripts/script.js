const headerContainerDiv = document.querySelector(".header-container");

// Creating and putting the watcher element
const scrollWatcherDiv = document.createElement("div");
scrollWatcherDiv.setAttribute("data-scroll-watcher", "");
headerContainerDiv.before(scrollWatcherDiv);

// Making Observation happen
const navObserver = new IntersectionObserver((enteries) => {
  headerContainerDiv.classList.toggle("sticking", !enteries[0].isIntersecting);
});
// Observe scroll watcher div
navObserver.observe(scrollWatcherDiv);
