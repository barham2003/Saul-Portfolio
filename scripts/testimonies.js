const videoEmbed = document.querySelector("#embeded");
const testimonySpan = document.querySelector("#testimony");

function changeVideo(url, name) {
  videoEmbed.setAttribute("src", `http://www.youtube.com/v/${url}`);
  testimonySpan.textContent = name;
}
