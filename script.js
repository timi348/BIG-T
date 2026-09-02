const products = [

    {
        id: 1,
        name: "Fresh Tomatoes",
        price: 5000,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337"
    },

    {
        id: 2,
        name: "Fresh Plantain",
        price: 7000,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224"
    },

    {
        id: 3,
        name: "Maize",
        price: 8000,
        category: "grains",
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076"
    },

    {
        id: 4,
        name: "Yam",
        price: 12000,
        category: "tubers",
        image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780"
    }

];

let cart = [];

function displayProducts(list = products) {

    const container =
        document.getElementById("products");

    container.innerHTML = "";

    list.forEach(product => {

        container.innerHTML += `

            <div class="product">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ₦${product.price.toLocaleString()}
                </p>

                <button
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>

        `;

    });

}
displayProducts();

function addToCart(id) {

    const product =
        products.find(product => product.id === id);

    cart.push(product);

    updateCart();

}

function updateCart() {

    const items =
        document.getElementById("cart-items");

    items.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        items.innerHTML += `

            <div class="cart-item">

                <span>
                    ${product.name}
                </span>

                <span>
                    ₦${product.price.toLocaleString()}
                </span>

                <button
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            </div>

        `;

    });


    document.getElementById("cart-total")
        .textContent = total.toLocaleString();


    document.getElementById("cart-count")
        .textContent = cart.length;

}

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}

function openCart() {

    document.getElementById("cart")
        .style.display = "block";

}
function closeCart() {

    document.getElementById("cart")
        .style.display = "none";

}

function filterProducts(category) {

    if (category === "all") {

        displayProducts(products);

        return;
    }

    const filtered =
        products.filter(product =>
            product.category === category
        );

    displayProducts(filtered);

}
