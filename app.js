document.addEventListener("DOMContentLoaded", () => {
  const Slider = document.getElementById("product-slider");
  const BtnLeft = document.querySelector(".slide-btn.left");
  const BtnRight = document.querySelector(".slide-btn.right");
  const videos = document.querySelectorAll(".video-item");

  const searchInput = document.querySelector(".searchInput");
  const searchResults = document.getElementById("searchResults");
  const searchSection = document.getElementById("searchSection");
  const searchTitle = document.getElementById("searchTitle");
  const noResults = document.querySelector(".no-results");
  const mainProductContainer = document.getElementById("productContainer");

  const Products = [
    {
      img: "./img/air.png",
      title: "Nike Air Force 1",
      newprice: "Rs. 2,499",
      oldprice: "Rs. 3,299",
      discount: "24%",
    },
    {
      img: "./img/blazer.png",
      title: "Nike Blazer",
      newprice: "Rs. 1,499",
      oldprice: "Rs. 2,299",
      discount: "20%",
    },
    {
      img: "./img/crater.png",
      title: "Nike Space Hippie",
      newprice: "Rs. 4,499",
      oldprice: "Rs. 5,299",
      discount: "30%",
    },
    {
      img: "./img/hippie.png",
      title: "Nike Jordan 1",
      newprice: "Rs. 2,599",
      oldprice: "Rs. 3,599",
      discount: "35%",
    },
    {
      img: "./img/jordan.png",
      title: "Nike Blazer 2",
      newprice: "Rs. 3,499",
      oldprice: "Rs. 5,299",
      discount: "10%",
    },
    {
      img: "./img/air2.png",
      title: "Nike Air Force 2",
      newprice: "Rs. 2,499",
      oldprice: "Rs. 5,299",
      discount: "26%",
    },
    {
      img: "./img/hippie2.png",
      title: "Nike Air Force 1",
      newprice: "Rs. 2,499",
      oldprice: "Rs. 3,299",
      discount: "24%",
    },
    {
      img: "./img/jordan2.png",
      title: "Nike Jordan 1",
      newprice: "Rs. 2,499",
      oldprice: "Rs. 3,299",
      discount: "24%",
    },
  ];

  const BestSellers = [
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

  function createProductCard(product) {
    return `
      <div class="product-card">
        <span class="discount">${product.discount}</span>
        <img src="${product.img}" alt="${product.title}" />
        <h3 class="product-title">${product.title}</h3>
        <div class="price-section">
          <span class="new-price">${product.newprice}</span>
          <span class="old-price">${product.oldprice}</span>
        </div>
        <button class="add-to-cart"><span class="cart-icon">🛒</span> Add to Cart</button>
      </div>
    `;
  }

  function renderInitialProducts() {
    mainProductContainer.innerHTML = Products.map(createProductCard).join("");
  }

  function renderBestSellers() {
    Slider.innerHTML = BestSellers.map(
      (product) => `
      <div class="product-cards">
        <img src="${product.img}" alt="${product.title}" />
        <h4 class="product-title">${product.title}</h4>
        <div class="price-section">
          <span class="new-price">${product.newprice}</span>
          <span class="old-price">${product.oldprice}</span>
          <span class="discount">${product.discount}</span>
        </div>
        <button class="add-to-cart"><i class="fa fa-shopping-cart cart-icon"></i> ADD TO CART</button>
      </div>
    `
    ).join("");
  }

  function handleSearch(query) {
    const allProducts = [...Products, ...BestSellers];
    const results = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    searchResults.innerHTML = results.map(createProductCard).join("");

    if (results.length > 0) {
      searchSection.style.display = "block";
      searchTitle.textContent = `Search Results for "${query}"`;
      noResults.style.display = "none";
    } else {
      searchSection.style.display = "none";
      noResults.style.display = "block";
    }
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    if (query.length === 0) {
      searchSection.style.display = "none";
      noResults.style.display = "none";
      return;
    }
    handleSearch(query);
  });

  let count = localStorage.getItem("cartCount")
    ? parseInt(localStorage.getItem("cartCount"))
    : 0;

  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = count;

  function setupCartButtons() {
    const cartButton = document.querySelectorAll(".add-to-cart");

    cartButton.forEach((btn) => {
      btn.addEventListener("click", () => {
        count++;
        cartCount.textContent = count;
        localStorage.setItem("cartCount", count);
      });
    });
  }

  BtnLeft.addEventListener("click", () => {
    Slider.scrollBy({ left: -300, behavior: "smooth" });
  });

  BtnRight.addEventListener("click", () => {
    Slider.scrollBy({ left: 300, behavior: "smooth" });
  });

  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => video.pause());
  });

  renderInitialProducts();
  renderBestSellers();
  setupCartButtons();
});
