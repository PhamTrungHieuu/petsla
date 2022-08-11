var cartElement = document.querySelector('.header-cart')
cartElement.onclick = function(){
    cartlistElement.style.display = 'block'
}
var cartlistElement = document.querySelector('.cart')

var appElement = document.querySelector('.app')

var cartexitElement = document.querySelector('.cart-exit')
cartexitElement.onclick = function(){
    cartlistElement.style.display = 'none'
}



function start (){
    callApi(renderHTML);
}

start()

function callApi(callback) {
fetch('http://petsla-api.herokuapp.com/products/')
    .then(function (res) {
    return res.json();
    })
    .then(callback)
}
function converToVND(value) {
var test1 = value.toString();
var x = test1.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
return x;
}

function renderHTML(products) {
var stringProducts = products.map(function (value) {
    var priceVND = converToVND(value.price);
    return `
    <div class="clum-4">
        <div class="cuahang__item-anh">
                <img src=" http://petsla-api.herokuapp.com${value.images} " alt="" class="cuahang__item-anh-img">
            </div>
            <div class="cuahang__item-mota">
                <div class="cuahang__item-thongtin-">
                    <span class="cuahang__item-thongtin">
                        ${value.product_name}
                    </span>
                </div>    
                <div class="cuahang__item-gia-">
                    <span class="cuahang__item-gia">
                        ${priceVND}
                    </span>
                </div>
                <div class="cuahang__item-trangthai">
                    <div class="cuahang__item-mua">
                        <span class="cuahang__item-mua-text">
                            Buy now
                        </span>
                    </div>
                    <div class="cuahang__item-them">
                        <span class="cuahang__item-them-text">
                            Add to cart
                        </span>
                    </div>
                </div>
            </div>
        </div>`
    ;
})
var displayProductElement = document.querySelector('.cuahang__item');
displayProductElement.innerHTML = stringProducts.join('');
}