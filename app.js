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

  const cartCount = document.getElementById("cartCount");
  const itemShow = document.getElementById("itemShow");
  const cartToggle = document.getElementById("cartToggle");
  const cartPanel = document.getElementById("cartPanel");

  let count = parseInt(localStorage.getItem("cartCount")) || 0;

  let cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  cartItems = cartItems.map((item) => {
    return {
      ...item,
      qty: typeof item.qty === "number" && item.qty > 0 ? item.qty : 1,
    };
  });

  cartCount.textContent = count;

  const Products = [
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
        <button 
          class="add-to-cart" 
          data-name="${product.title}"
          data-price="${product.newprice}"
          data-img="${product.img}"
          data-oldprice="${product.oldprice}"
          <span class="cart-icon">🛒</span> Add to Cart
        </button>
      </div>
    `;
  }

  function renderInitialProducts() {
    mainProductContainer.innerHTML = Products.map(createProductCard).join("");
    setupCartButtons();
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
        <button 
          class="add-to-cart"
          data-name="${product.title}"
          data-price="${product.newprice}"
          data-img="${product.img}"
          data-oldprice="${product.oldprice}"
          <i class="fa fa-shopping-cart cart-icon"></i> ADD TO CART
        </button>
      </div>
    `
    ).join("");
    setupCartButtons();
  }

  function handleSearch(query) {
    const allProducts = [...Products, ...BestSellers];
    const results = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    searchResults.innerHTML = results.map(createProductCard).join("");
    setupCartButtons();

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
    if (!query) {
      searchSection.style.display = "none";
      noResults.style.display = "none";
      return;
    }
    handleSearch(query);
  });

  function displayCartItems() {
    itemShow.innerHTML = "";
    let totalPrice = 0;

    if (cartItems.length === 0) {
      itemShow.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }

    cartItems.forEach((product, index) => {
      const div = document.createElement("div");
      div.className = "cart-item";

      let price = parseFloat(
        product.newprice.toString().replace(/[^\d.]/g, "")
      );
      
      totalPrice += price * product.qty;

      div.innerHTML = `
      <img src="${product.img}" alt="${product.title}" />
      <div class="cart-details">
        <h4>${product.title}</h4>
        <p><strong>₹${price.toFixed(2)}</strong></p>
        <div class="quantity-controls">
          <button class="qty-btn decrease" data-index="${index}">-</button>
          <span class="qty-display">${product.qty}</span>
          <button class="qty-btn increase" data-index="${index}">+</button>
        </div>
      </div>
    `;

      itemShow.appendChild(div);
    });

    const processDiv = document.createElement("div");
    processDiv.className = "process";
    processDiv.innerHTML = `
    <div class="cart-total">
      <h4>Total: ₹${totalPrice.toFixed(2)}</h4>
    </div>
    <button class="checkout-btn">PROCEED TO CHECKOUT</button>
  `;

    itemShow.appendChild(processDiv);

    setupQuantityButtons(); 
  }

  function setupQuantityButtons() {
    document.querySelectorAll(".qty-btn.decrease").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = btn.dataset.index;
        if (cartItems[index].qty > 1) {
          cartItems[index].qty--;
          count--;
        } else {
          count -= cartItems[index].qty;
          cartItems.splice(index, 1);
        }
        updateCart();
      });
    });

    document.querySelectorAll(".qty-btn.increase").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = btn.dataset.index;
        cartItems[index].qty++;
        count++;
        updateCart();
      });
    });
  }

  function updateCart() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartCount", count);
    cartCount.textContent = count;
    displayCartItems();
  }

  function setupCartButtons() {
    document.querySelectorAll(".add-to-cart").forEach((btn) => {
      btn.removeEventListener("click", handleAddToCart);
      btn.addEventListener("click", handleAddToCart);
    });
  }

  function handleAddToCart(e) {
    const btn = e.currentTarget;

    const name = btn.dataset.name;
    const price = btn.dataset.price;
    const img = btn.dataset.img;
    const oldprice = btn.dataset.oldprice;
    const discount = btn.dataset.discount;

    let existingIndex = cartItems.findIndex((item) => item.title === name);

    if (existingIndex !== -1) {
      cartItems[existingIndex].qty += 1;
    } else {
      cartItems.push({
        title: name,
        newprice: price,
        oldprice: oldprice,
        discount: discount,
        img: img,
        qty: 1,
      });
    }

    count++;
    updateCart();
  }

  cartPanel.addEventListener("click", (e) => e.stopPropagation());

  cartToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    cartPanel.classList.toggle("active");
  });

  closeCartPanel.addEventListener("click", (e) => {
    e.stopPropagation();
    cartPanel.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (!cartToggle.contains(e.target) && !cartPanel.contains(e.target)) {
      cartPanel.classList.remove("active");
    }
  });

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
  displayCartItems();
});
