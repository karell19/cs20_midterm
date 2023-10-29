const CATEGORIES = ["Boards & Boats", "Wetsuits", "Accessories"]

$(document).ready(() => {
    createShop()
})

function createShop() {
    $.get("products.json", (data) => {
        CATEGORIES.map(category => {
            $(".shopContainer").append(`<div class='categoryContainer'><div class='category'>${category}</div><div class='products ${category.replaceAll(" ", "").replaceAll("&", "")}'></div></div></div>`)
        })
        data.products.map(product => {
            $(`.${product.category.replaceAll(" ", "").replaceAll("&", "")}`).append(`<a class='product' href='product.html?product=${encodeURIComponent(product.name)}'><img class='productImage' src='images/${product.photoUrl}' alt='${product.name}'></img><div class='productInfo'><div class='name'>${product.name}</div><div class='price'>$${product.price.toFixed(2)}</div></div></a>`)
        })
    })
}