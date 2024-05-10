const headerContainerDiv = document.querySelector(".header-container");
const scrollWatcherDiv = document.createElement("div");

scrollWatcherDiv.setAttribute("data-scroll-watcher", "");
headerContainerDiv.before(scrollWatcherDiv);

const navObserver = new IntersectionObserver((enteries) => {
  console.log(enteries);
  headerContainerDiv.classList.toggle("sticking", !enteries[0].isIntersecting);
});

navObserver.observe(scrollWatcherDiv);
