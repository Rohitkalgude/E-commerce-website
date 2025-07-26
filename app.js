const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },

  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },

  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },

  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },

  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];
const ProductImg = document.querySelector(".productImg");
const ProductTitle = document.querySelector(".productTitle");
const ProductPrice = document.querySelector(".productPrice");
const Colors = document.querySelectorAll(".color");
const Sizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //chanage current slider
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //chanage the choose  product
    choosenProduct = products[index];

    //change texts of currentProducts
    ProductTitle.textContent = choosenProduct.title;
    ProductPrice.textContent = "$" + choosenProduct.price;
    ProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    Colors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

Colors.forEach((color, index) => {
  color.addEventListener("click", () => {
    ProductImg.src = choosenProduct.colors[index].img;
  });
});
