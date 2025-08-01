const Slider = document.getElementById("product-slider");
const Btnleft = document.querySelector(".slide-btn.left");
const BtnRight = document.querySelector(".slide-btn.right");
const videos = document.querySelectorAll(".video-item");

const products = [
  {
    img: "./img/air.png",
    title: "Nike Air Force 1",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "24% OFF",
  },
  {
    img: "./img/blazer.png",
    title: "Nike Blazer",
    newprice: "Rs. 1,499",
    oldprice: "Rs. 2,299",
    discount: "20% OFF",
  },
  {
    img: "./img/crater.png",
    title: "Nike Space Hippie",
    newprice: "Rs. 4,499",
    oldprice: "Rs. 5,299",
    discount: "30% OFF",
  },
  {
    img: "./img/hippie.png",
    title: "Nike Jordan 1",
    newprice: "Rs. 2,599",
    oldprice: "Rs. 3,599",
    discount: "35% OFF",
  },
  {
    img: "./img/jordan.png",
    title: "Nike Blazer 2",
    newprice: "Rs. 3,499",
    oldprice: "Rs. 5,299",
    discount: "10% OFF",
  },
  {
    img: "./img/air2.png",
    title: "Nike Air Force 2",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 5,299",
    discount: "26% OFF",
  },
  {
    img: "./img/hippie2.png",
    title: "Nike Air Force 1",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "24% OFF",
  },
  {
    img: "./img/jordan2.png",
    title: "Nike Jordan 1",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "24% OFF",
  },
];

const bestSellers = [
  {
    img: "./img/new1.png",
    title: "Casual Ease Slip Ons : Taupe",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "NEW",
  },
  {
    img: "./img/new2.png",
    title: "Chunky Lace Ups for Women : Ivory",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "NEW",
  },
  {
    img: "./img/new3.png",
    title: "Begin Walk Drift : Olive",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "NEW",
  },
  {
    img: "./img/new4.png",
    title: "Begin Walk Trek : Black",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "NEW",
  },
  {
    img: "./img/new5.png",
    title: "Knit Grace Loafers For Women : Black",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "NEW",
  },
  {
    img: "./img/new6.png",
    title: "Basic Cozies Slip Ons : Grey",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "NEW",
  },
  {
    img: "./img/new7.png",
    title: "Luxe Flips : Beige",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "NEW",
  },
  {
    img: "./img/new8.png",
    title: "Pointed Ease For Women : Beige",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "NEW",
  },
  {
    img: "./img/new18.png",
    title: "The Dependables : Black-Blue",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "NEW",
  },
  {
    img: "./img/new19.png",
    title: "Dapper Loafers : Black",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "NEW",
  },
  {
    img: "./img/new20.png",
    title: "All-Purpose Loafers : Black",
    newprice: "Rs. 2,499",
    oldprice: "Rs. 3,299",
    discount: "NEW",
  },
];

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
