class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.time = time;
    this.uploader = uploader;
  }
  watch() {
    return `${uploader} parameter watched all ${time} parameter of ${title} parameter!`;
  }
}

const video1 = new Video("video1", "vanya", 100);
console.log(video1.watch());

const video2 = new Video("video2", "sasha", 200);
console.log(video2.watch());


vData.forEach((data) => {
  const new_video = new Video(data.title, data.uploader, data.time);
  console.log(new_video.watch());
});
