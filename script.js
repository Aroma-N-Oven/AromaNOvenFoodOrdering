/***********************
 CONFIG
***********************/
const WHATSAPP_NUMBER = "918179527558"; // ← replace with your number

/***********************
 MENU DATA
 prefs: true = ask preferences
***********************/
const menuData = [
  {
    category: "Main Course",
    items: [
      {
        id: 1,
        name: "Broasted Chicken Strips",
        price: 250,
        image: "images/fried.jpg",
        prefs: false
      },
      {
        id: 2,
        name: "Chicken Chilli",
        price: 250,
        image: "images/chilli.jpg",
        prefs: false
      },
      {
        id: 3,
        name: "Chicken 65",
        price: 250,
        image: "images/65.jpg",
        prefs: false
      },
      {
        id: 4,
        name: "Chicken Marag",
        price: 280,
        image: "images/marag.jpg",
        prefs: false
      },
      {
        id: 5,
        name: "Chicken Manchurian",
        price: 250,
        image: "images/manch.jpg",
        prefs: false
      },
      {
        id: 6,
        name: "Butter Chicken",
        price: 250,
        image: "images/butter.jpg",
        prefs: false
      },
    ],
    subcategories: [
      {
        title: "Rotis & Naans",
        items: [
          {
            id: 7,
            name: "Homemade Wheat Paratha",
            price: 20,
            image: "images/roti.jpg",
            prefs: false
          },
          {
            id: 8,
            name: "Butter Naan",
            price: 35,
            image: "images/bnaan.jpg",
            prefs: false
          },
          {
            id: 9,
            name: "Turkish Naan",
            price: 35,
            image: "images/tnaan.jpg",
            prefs: false
          },
          {
            id: 10,
            name: "Plain Naan",
            price: 25,
            image: "images/pnaan.png",
            prefs: false
          },
        ]
      },
      {
        title: "Rice",
        items: [
          {
            id: 11,
            name: "Plain White Rice",
            price: 125,
            image: "images/rice.jpg",
            prefs: false
          },
          {
            id: 12,
            name: "Jeera Rice",
            price: 150,
            image: "images/jeera.jpg",
            prefs: false
          },
          {
            id: 13,
            name: "Chicken Biryani (1/2 kg)",
            price: 350,
            image: "images/biryani.jpg",
            prefs: false
          },
          {
            id: 14,
            name: "Chicken Mandi (1/2 kg)",
            price: 370,
            image: "images/mandi.jpg",
            prefs: false
          },
          {
            id: 15,
            name: "Chicken Khabsa (1/2 kg)",
            price: 370,
            image: "images/khabsa.jpg",
            prefs: false
          },
        ]
      },
      {
        title: "Vegetarian Food",
        items: [
          {
            id: 16,
            name: "Tadka Dal",
            price: 150,
            image: "images/tadka.jpg",
            prefs: false
          },
          {
            id: 17,
            name: "Dal Makhani",
            price: 180,
            image: "images/makh.jpg",
            prefs: false
          },
          {
            id: 18,
            name: "Butter Paneer Masala",
            price: 200,
            image: "images/paneer.jpg",
            prefs: false
          },
          {
            id: 19,
            name: "Palak Paneer",
            price: 200,
            image: "images/ppaneer.jpg",
            prefs: false
          },
          {
            id: 20,
            name: "Vegetable Biryani (1/2 kg)",
            price: 300,
            image: "images/veg.jpg",
            prefs: false
          },
          {
            id: 21,
            name: "Soya Chunks Biryani (1/2 kg)",
            price: 300,
            image: "images/soya.jpg",
            prefs: false
          },
        ]
      }
    ]
  },
  {
    category: "Bakery",
    items: [
      {
        id: 22,
        name: "Chocolate Chips Cookies (6 pcs.)",
        price: 250,
        image: "images/chocolatechips cookies.jpg",
        prefs: false
      },
      {
        id: 23,
        name: "Chocolate Brownies (6 pcs.)",
        price: 250,
        image: "images/brownies.jpg",
        prefs: false
      },
      {
        id: 24,
        name: "Cream Puffs (6 pcs.)",
        price: 500,
        image: "images/cream puff.jpg",
        prefs: false
      },
      {
        id: 25,
        name: "Garlic Mozzarella Cheese Bread",
        price: 120,
        image: "images/garlic bread.jpg",
        prefs: false
      },
      {
        id: 26,
        name: "Chicken Pasta",
        price: 200,
        image: "images/pasta.jpg",
        prefs: false
      },
      {
        id: 27,
        name: "Vanilla Chocolate Eclair (6 pcs.)",
        price: 500,
        image: "images/eclair.jpg",
        prefs: false
      },
      {
        id: 28,
        name: "Japanese Souffle Cheesecake (6-inch cake)",
        price: 600,
        image: "images/cheesecake.jpg",
        prefs: false
      },
      {
        id: 29,
        name: "Castella Cake",
        price: 600,
        image: "images/castella.png",
        prefs: false
      },
      {
        id: 30,
        name: "Chocolate Castella Cake",
        price: 650,
        image: "images/choco castella.jpeg",
        prefs: false
      },
      {
        id: 31,
        name: "Fudgy Chocolate Cake (7-inch cake)",
        price: 700,
        image: "images/choco cake fudgy.jpg",
        prefs: false
      },
      {
        id: 32,
        name: "Fluffy Vanilla Sponge Cake (8-inch cake)",
        price: 400,
        image: "images/sponge cake.jpg",
        prefs: false
      },
      {
        id: 33,
        name: "Fluffy Yogurt Cake (6-inch cake)",
        price: 600,
        image: "images/yogurt cake.jpg",
        prefs: false
      },
      {
        id: 34,
        name: "Yogurt Souffle Cupcakes (6 pcs.)",
        price: 300,
        image: "images/cupcake.jpg",
        prefs: false
      },
      {
        id: 35,
        name: "Vanilla Custard Cream Donuts (6 pcs.)",
        price: 400,
        image: "images/donuts vanilla.jpg",
        prefs: false
      },
      {
        id: 36,
        name: "Chocolate Custard Cream Donuts (6 pcs.)",
        price: 400,
        image: "images/donuts choco.jpg",
        prefs: false
      },
      {
        id: 37,
        name: "Vanilla Swiss Cake Roll (6 pcs.)",
        price: 500,
        image: "images/vanilla swiss.png",
        prefs: false
      },
      {
        id: 38,
        name: "Chocolate Swiss Cake Roll (6 pcs.)",
        price: 500,
        image: "images/choco swiss.jpg",
        prefs: false
      },
    ]
  }
];

/***********************
 BANNERS
***********************/
const bannerImages = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png"
];

let currentBannerIndex = 0;

function openBannerViewer(index) {
  currentBannerIndex = index;
  updateBannerViewer();
  document.getElementById("bannerOverlay").style.display = "flex";
}

function closeBannerViewer() {
  document.getElementById("bannerOverlay").style.display = "none";
}

function updateBannerViewer() {
  document.getElementById("bannerViewerImg").src =
    bannerImages[currentBannerIndex];
}

function nextBanner() {
  currentBannerIndex =
    (currentBannerIndex + 1) % bannerImages.length;
  updateBannerViewer();
}

function prevBanner() {
  currentBannerIndex =
    (currentBannerIndex - 1 + bannerImages.length) % bannerImages.length;
  updateBannerViewer();
}

function overlayClickClose(event) {
  // Only close if user clicked the background, not the image or buttons
  if (event.target.id === "bannerOverlay") {
    closeBannerViewer();
  }
}


/***********************
 STATE
***********************/
let cart = [];
let pendingItem = null;

/***********************
 INIT
***********************/
const menuEl = document.getElementById("menu");
renderMenu();
updateCartBar();

/***********************
 MENU RENDER
***********************/
function renderMenu() {
  menuEl.innerHTML = "";

  menuData.forEach(category => {
    // CATEGORY TITLE
    menuEl.innerHTML += `
      <div class="menu-heading">${category.category}</div>
    `;

    // CATEGORY ITEMS
    if (category.items) {
      category.items.forEach(item => {
        menuEl.appendChild(createMenuCard(item));
      });
    }

    // SUBCATEGORIES
    if (category.subcategories) {
      category.subcategories.forEach(sub => {
        menuEl.innerHTML += `
          <div class="menu-subheading">${sub.title}</div>
        `;

        sub.items.forEach(item => {
          menuEl.appendChild(createMenuCard(item));
        });
      });
    }
  });
}

/***********************
 CART HELPERS
***********************/
function getItemQty(id) {
  const cartItem = cart.find(i => i.id === id);
  return cartItem ? cartItem.qty : 0;
}

function findItemById(id) {
  for (const category of menuData) {
    if (category.items) {
      for (const item of category.items) {
        if (item.id === id) return item;
      }
    }

    if (category.subcategories) {
      for (const sub of category.subcategories) {
        for (const item of sub.items) {
          if (item.id === id) return item;
        }
      }
    }
  }
  return null;
}

function changeQty(id, delta) {
  const cartItem = cart.find(i => i.id === id);
  if (!cartItem) return;

  cartItem.qty += delta;

  if (cartItem.qty <= 0) {
    // remove item from cart
    const index = cart.findIndex(i => i.id === id);
    if (index > -1) cart.splice(index, 1);
  }

  renderMenu();
  updateCartBar();
}

function createMenuCard(item) {
  const qty = getItemQty(item.id);

  const div = document.createElement("div");
  div.className = "menu-item";

  div.innerHTML = `
    ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
    <div class="menu-info">
      <h4>${item.name}</h4>
      <p>₹${item.price}</p>

      <div class="add-row">
        ${
          qty === 0
            ? `<button class="add-btn" onclick="addItem(${item.id})">Add</button>`
            : `
              <div class="qty-controls">
                <button onclick="changeQty(${item.id}, -1)">−</button>
                <span>${qty}</span>
                <button onclick="changeQty(${item.id}, 1)">+</button>
              </div>
            `
        }
      </div>
    </div>
  `;

  return div;
}

/***********************
 ADD ITEM
***********************/
function addItem(id) {
  const item = findItemById(id);
  if (!item) return;

  if (item.prefs) {
    pendingItem = item;
    openPrefs();
  } else {
    // check if item already in cart
    const cartItem = cart.find(
      i => i.id === id && i.preferences.length === 0
    );
    if (cartItem) {
      cartItem.qty += 1;
    } else {
      cart.push({ ...item, preferences: [], qty: 1 });
    }
    renderMenu();
    updateCartBar();
  }
}

/***********************
 PREFERENCES
***********************/
function openPrefs() {
  document.getElementById("prefOverlay").style.display = "flex";
}

function cancelPreferences() {
  pendingItem = null;
  closePrefs();
}

function confirmPreferences() {
  const checked = Array.from(
    document.querySelectorAll("#prefOverlay input:checked")
  ).map(i => i.value);

  cart.push({
    ...pendingItem,
    preferences: checked
  });

  pendingItem = null;
  document.querySelectorAll("#prefOverlay input").forEach(i => (i.checked = false));
  closePrefs();
  renderMenu();
  updateCartBar();
}

function closePrefs() {
  document.getElementById("prefOverlay").style.display = "none";
}

/***********************
 CART BAR
***********************/
function updateCartBar() {
  const countEl = document.getElementById("cartCount");
  const totalEl = document.getElementById("cartTotal");

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  countEl.textContent = `${cart.length} items`;
  totalEl.textContent = `₹${total}`;
}

/***********************
 CART MODAL
***********************/
function openCart() {
  renderCart();
  document.getElementById("cartOverlay").style.display = "flex";
}

function closeCart() {
  document.getElementById("cartOverlay").style.display = "none";
}

function renderCart() {
  const cartItemsEl = document.getElementById("cartItems");
  const checkoutTotal = document.getElementById("checkoutTotal");

  cartItemsEl.innerHTML = "";

  cart.forEach(item => {
    cartItemsEl.innerHTML += `
      <div class="cart-item">
        <span>
          ${item.name} x${item.qty}
          ${item.preferences.length ? `<br><small>${item.preferences.join(", ")}</small>` : ""}
        </span>
        <span>₹${item.price * item.qty}</span>
      </div>
    `;
  });

  checkoutTotal.textContent =
    "₹" + cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

/***********************
 CHECKOUT
***********************/
function openCheckout() {
  closeCart();
  document.getElementById("checkoutOverlay").style.display = "flex";
}

function closeCheckout() {
  document.getElementById("checkoutOverlay").style.display = "none";
}

/***********************
 PLACE ORDER
***********************/
function placeOrder() {
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();

  if (!name || !phone || cart.length === 0) {
    alert("Please fill details and add items.");
    return;
  }

  let message = `*New Food Order*%0A%0A`;
  message += `Name: ${name}%0A`;
  message += `Phone: ${phone}%0A`;
  message += `Address: ${address}%0A%0A`;
  message += `*Items:*%0A`;

  cart.forEach(item => {
    message += `- ${item.name} (₹${item.price})`;
    if (item.preferences.length) {
      message += ` [%0A  ${item.preferences.join(", ")}%0A]`;
    }
    message += `%0A`;
  });

  message += `%0A*Total: ₹${cart.reduce((s, i) => s + i.price, 0)}*`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
    "_blank"
  );

  cart = [];
  renderMenu();
  updateCartBar();
  closeCheckout();
  showThankYou();
}

/***********************
 THANK YOU
***********************/
function showThankYou() {
  document.getElementById("thankyouOverlay").style.display = "flex";
}

function closeThankYou() {
  document.getElementById("thankyouOverlay").style.display = "none";
}
