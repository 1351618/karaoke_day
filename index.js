const start = document.getElementById("start");
const div_video = document.querySelector(".div-video");

start.addEventListener("click", () => {
  console.log("start");
  playWind();
});

function playWind() {
  console.log("play");
  div_video.classList.remove("hide");
  const videoPlayer = document.getElementById("video-player");
  videoPlayer.addEventListener("ended", handleVideoEnded);
  videoPlayer.play();
}

function handleVideoEnded() {
  console.log("Видео окончено");
  div_video.classList.add("hide");
}
