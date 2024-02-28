const startVideo = "./video/КОГДА У NPC ПЕРЕРЫВ.mp4";
const playListData = {
  trec_1: "./video/атестат.mp4",
  trec_2: "./video/запахло весной.mp4",
  trec_3: "./video/3 сентября.mp4",
  trec_4:
    "https://drive.google.com/file/d/1iYbgfLzSIR1-PFahx01a-6Qlvj9GS8CJ/view?usp=drive_link",
};

const start = document.getElementById("start");
const div_start = document.querySelector(".start");
const div_winPlayList = document.querySelector(".win-playlist");
const div_video = document.querySelector(".div-video");
const div_playlist = document.querySelector(".playlist");

start.addEventListener("click", () => {
  console.log("start");
  const videoPath = startVideo;
  playWind(videoPath);
});

function playWind(videoPath) {
  console.log("play");
  div_video.classList.remove("hide");
  const videoPlayer = document.getElementById("video-player");
  videoPlayer.src = videoPath;

  videoPlayer.addEventListener("ended", () => {
    console.log("Видео закончилось");
    div_video.classList.add("hide");
    div_start.classList.add("hide");
    div_winPlayList.classList.remove("hide");
  });

  videoPlayer.play();
}

// добавляем на страницу
for (let key in playListData) {
  console.log(key);
  let trecTitlt = document.createElement("p");
  trecTitlt.textContent = playListData[key];
  trecTitlt.addEventListener("click", () => {
    console.log(playListData[key]);
    playWind(playListData[key]);
  });
  div_playlist.appendChild(trecTitlt);
}
