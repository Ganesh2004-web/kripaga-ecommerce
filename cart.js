
// GET CART


let cart = JSON.parse(
    localStorage.getItem("kripagaCart")
) || [];



// SHOW CART


function showCart() {

    let cartProducts =
        document.getElementById("cartProducts");


    let cartBottom =
        document.getElementById("cartBottom");


    cartProducts.innerHTML = "";

    cartBottom.innerHTML = "";


    // EMPTY CART

    if (cart.length === 0) {

        cartProducts.innerHTML = `

            <div class="empty-cart">

                <h2>
                    Your Cart is Empty 🛒
                </h2>

                <p>
                    Add some products to your cart.
                </p>

                <button onclick="goHome()">
                    Continue Shopping
                </button>

            </div>

        `;

        return;

    }


    let total = 0;


    // SHOW PRODUCTS

    cart.forEach(function(product, index) {

        let productBox =
            document.createElement("div");


        productBox.className =
            "cart-item";


        productBox.innerHTML = `

            <div class="cart-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="cart-info">

                <h2>
                    ${product.name}
                </h2>


                <p class="cart-price">
                    ${product.price}
                </p>


                <p class="cart-discount">
                    ${product.discount}
                </p>


                <p>
                    Quantity: 1
                </p>


                <div class="cart-buttons">

                    <button
                        onclick="buyProduct(${index})">

                        BUY NOW

                    </button>


                    <button
                        onclick="removeProduct(${index})">

                        REMOVE

                    </button>

                </div>

            </div>

        `;


        cartProducts.appendChild(productBox);


        // TOTAL

        let price =
            parseInt(
                product.price.replace(/[^0-9]/g, "")
            );


        if (!isNaN(price)) {

            total = total + price;

        }

    });


    // CART TOTAL

    cartBottom.innerHTML = `

        <div class="cart-total-box">

            <h2>
                Total: ₹${total}
            </h2>


            <button onclick="goHome()">
                CONTINUE SHOPPING
            </button>

        </div>

    `;

}



// REMOVE


function removeProduct(index) {

    cart.splice(index, 1);


    localStorage.setItem(
        "kripagaCart",
        JSON.stringify(cart)
    );


    showCart();

}



// BUY


function buyProduct(index) {

    let product = cart[index];


    localStorage.setItem(
        "kripagaBuyProduct",
        JSON.stringify(product)
    );


    window.location.href = "buy.html";

}



// HOME


function goHome() {

    window.location.href = "index.html";

}



// START


showCart();