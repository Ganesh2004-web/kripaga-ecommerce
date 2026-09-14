
// ADD TO CART


function addToCart(button) {

    let product = button.closest(".product-card");

    let name = product.querySelector("h3").innerText.trim();

    let image = product.querySelector("img").getAttribute("src");

    // Keep only image file name
    image = image.split("/").pop();

    let price = product.querySelector(".price").innerText.trim();

    let discount = product.querySelector(".discount").innerText.trim();


    let productDetails = {
        name: name,
        image: image,
        price: price,
        discount: discount
    };


    let cart = JSON.parse(
        localStorage.getItem("kripagaCart")
    ) || [];


    cart.push(productDetails);


    localStorage.setItem(
        "kripagaCart",
        JSON.stringify(cart)
    );


    updateCartCount();


    alert("Product added to cart!");
}



// CART COUNT


function updateCartCount() {

    let cart = JSON.parse(
        localStorage.getItem("kripagaCart")
    ) || [];


    let cartCount =
        document.getElementById("cartCount");


    if (cartCount) {

        cartCount.innerText = cart.length;

    }
}



// OPEN CART


function openCart() {

    window.location.href = "cart.html";

}



// BUY PRODUCT


function buyProduct(button) {

    let product = button.closest(".product-card");


    let name =
        product.querySelector("h3").innerText.trim();


    let image =
        product.querySelector("img").getAttribute("src");


    image = image.split("/").pop();


    let price =
        product.querySelector(".price").innerText.trim();


    let discount =
        product.querySelector(".discount").innerText.trim();


    let productDetails = {

        name: name,

        image: image,

        price: price,

        discount: discount

    };


    localStorage.setItem(
        "kripagaBuyProduct",
        JSON.stringify(productDetails)
    );


    window.location.href = "buy.html";

}



// PAGE NAVIGATION


function showPage(pageName, clickedButton) {

    let pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.style.display = "none";

    });


    let selectedPage =
        document.getElementById(pageName);


    if (selectedPage) {

        selectedPage.style.display = "block";

    }


    let buttons =
        document.querySelectorAll(".category");


    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    if (clickedButton) {

        clickedButton.classList.add("active");

    }


    window.scrollTo(0, 0);

}



// FASHION


function openFashion() {

    showPage("fashion");

}



// MOBILES


function openMobiles() {

    showPage("mobiles");

}


// SLIDER


let slideIndex = 0;


function showSlide(index) {

    let slides =
        document.querySelectorAll(".slide");


    let dots =
        document.querySelectorAll(".dot");


    if (slides.length === 0) {

        return;

    }


    slides.forEach(function(slide) {

        slide.style.display = "none";

    });


    dots.forEach(function(dot) {

        dot.classList.remove("active-dot");

    });


    slides[index].style.display = "flex";


    if (dots[index]) {

        dots[index].classList.add("active-dot");

    }

}


function nextSlide() {

    let slides =
        document.querySelectorAll(".slide");


    if (slides.length === 0) {

        return;

    }


    slideIndex++;


    if (slideIndex >= slides.length) {

        slideIndex = 0;

    }


    showSlide(slideIndex);

}


setInterval(nextSlide, 3500);



// SEARCH


function searchProducts() {

    let searchBox =
        document.getElementById("searchInput");


    if (!searchBox) {

        return;

    }


    let searchText =
        searchBox.value.toLowerCase();


    let products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        let productText =
            product.innerText.toLowerCase();


        if (productText.includes(searchText)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


// Connect search box
let searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchProducts
    );

}



// START


document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateCartCount();

        showSlide(0);

    }
);

function showMore() {

    let menu = document.getElementById("moreMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

}