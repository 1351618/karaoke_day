const startVideo = "КОГДА У NPC ПЕРЕРЫВ";
const playListData = {
  trec_1: "КОГДА У NPC ПЕРЕРЫВ",
  trec_2: "КОГДА ДУМАЕШЬ ЧТО ТВОЙ АЙТИШНИК ТЕЛЕПАТ (1)",
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
  videoPlayer.src = `./video/${videoPath}.mp4`;

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
