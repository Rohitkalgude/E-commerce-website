const Slider = document.getElementById("product-slider");
const Btnleft = document.querySelector(".slide-btn.left");
const BtnRight = document.querySelector(".slide-btn.right");
const videos = document.querySelectorAll(".video-item");

Btnleft.addEventListener("click", () => {
  Slider.scrollBy({ left: -300, behavior: "smooth" });
});

BtnRight.addEventListener("click", () => {
  Slider.scrollBy({ left: 300, behavior: "smooth" });
});

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());
});
