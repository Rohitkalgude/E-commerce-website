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

const searchInput = document.querySelector(".searchInput");
const noResults = document.querySelector(".no-results");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const Searchvalue = searchInput.value.toLowerCase().trim();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
      const title = card
        .querySelector(".product-title")
        .textContent.toLowerCase();

      if (title.includes(Searchvalue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    noResults.style.display = found ? "none" : "block";
  });
}
