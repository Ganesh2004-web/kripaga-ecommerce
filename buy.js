
// GET PRODUCT


let product = JSON.parse(
    localStorage.getItem("kripagaBuyProduct")
);



// SHOW PRODUCT


function showProduct() {

    let box =
        document.getElementById("buyProduct");


    if (!product) {

        box.innerHTML = `

            <div class="empty-cart">

                <h2>
                    No Product Selected
                </h2>

                <button onclick="goHome()">
                    Go Shopping
                </button>

            </div>

        `;

        return;

    }


    box.innerHTML = `

        <div class="buy-product">


            <div class="buy-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="buy-info">

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

            </div>


        </div>

    `;

}



// PLACE ORDER


function placeOrder() {

    alert(
        "Order placed successfully! 🎉"
    );


    localStorage.removeItem(
        "kripagaBuyProduct"
    );


    window.location.href = "index.html";

}



// HOME


function goHome() {

    window.location.href = "kokoko00.html";

}



// START


showProduct();