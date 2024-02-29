const startVideo = "Заставка";
const playListData = {
  trec_1: "Аттестат",
  trec_2: "Запахло весной",
  trec_3: "3 сентября",
  trec_4: "дым сигарет с ментолом",
  trec_5: "максим знаеш ли ты",
  trec_6: "Седая ночь",
  trec_7: "modern talking sheri sheri",
  trec_8: "sweet dreams",
  trec_9: "What is Love haddeaway rus",
};

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const div_start = document.querySelector(".start");
const div_winPlayList = document.querySelector(".win-playlist");
const div_video = document.querySelector(".div-video");
const div_playlist = document.querySelector(".playlist");
const videoPlayer = document.getElementById("video-player");

start.addEventListener("click", () => {
  // console.log("start");
  const videoPath = startVideo;
  playWind(videoPath);
});

function playWind(videoPath) {
  // console.log("play");
  div_video.classList.remove("hide");
  videoPlayer.src = `./video/${videoPath}.mp4`;

  videoPlayer.addEventListener("ended", () => {
    // console.log("Видео закончилось");
    div_video.classList.add("hide");
    div_start.classList.add("hide");
    div_winPlayList.classList.remove("hide");
  });

  videoPlayer.play();
}

// добавляем на страницу
for (let key in playListData) {
  // console.log(key);
  let trecTitlt = document.createElement("p");
  trecTitlt.textContent = `- ${playListData[key]}`;
  trecTitlt.addEventListener("click", () => {
    // console.log(playListData[key]);
    playWind(playListData[key]);
  });
  div_playlist.appendChild(trecTitlt);
}

stop.addEventListener("click", () => {
  // console.log("stop");
  videoPlayer.pause();
  div_video.classList.add("hide");
  div_start.classList.add("hide");
  div_winPlayList.classList.remove("hide");
});
