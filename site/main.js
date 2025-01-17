import { productService } from "../model/model.js";

const cateProduct = document.querySelector('.cate__product');
const saleProduct = document.querySelector('.product__sale--js');
const toyenProduct = document.querySelector('.toyen__product--js');
const samProduct = document.querySelector('.product__sam--js');

//SHOW CATEGORIES 
productService
.fetchData('http://localhost:3000/categories')
.then(data => {
    //console.log(data);
    data.forEach(item => {
        cateProduct.innerHTML += `<div class="grid__colum-4">
                                        <a href="" class="cate_product">
                                            <div class="product__img">
                                                <img src="./image/category/${item.image}" alt="" class="product__img-avatar" width="100%">
                                                <div class="cate__box-info">
                                                    <h1 class="cate__box-name">${item.name}</h1>
                                                    <h3 class="cate__box-price">giá chỉ từ 449k</h3>
                                                    <a href="" class="cate__box-btn">Xem ngay<i class="fa-solid fa-angles-right"></i></a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>`;
    });
});

//SHOW PRODUCT HOTDEAL
productService
.fetchData('http://localhost:3000/products?hotdeal=1&_limit=4')
.then(data => {
    //console.log(data);
    data.forEach(item => {
        saleProduct.innerHTML += ` <div class="grid__colum-4" data-id="${item.id}">
                                        <a href="./detail.html?id=${item.id}" class="product">
                                            <div class="product__image">
                                                <img src="./image/productSale/${item.image}" alt="" class="product__img-pro" width="100%">
                                                <div class="product__img-favoutite"><span>Sale 30%</span></div>
                                            </div>
                                            <div class="product__info">
                                                <h5 class="product__info-name">${item.name}
                                                </h5>
                                                <div class="product__info-price">${item.sale} <span class="product__info-sale">${item.price}</span></div>
                                                <span class="product__info-star">
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <span class="product__info-sold">Đã bán ${item.bestseller}</span>
                                                </span>
                                                <div class="product__info-address">${item.address}</div>
                                            </div>
                                        </a>
                                    </div>`;
    });
});
//SHOW PRODUCT tổ yến
productService
.fetchData('http://localhost:3000/products?category=Tổ Yến&_limit=4')
.then(data => {
    //console.log(data);
    data.forEach(item => {
        toyenProduct.innerHTML += ` <div class="grid__colum-4">
                                        <a href="./detail.html?id=${item.id}" class="product">
                                            <div class="product__image">
                                                <img src="./image/productSale/${item.image}" alt="" class="product__img-pro" width="100%">
                                                <div class="product__img-favoutite"><span>Sale 30%</span></div>
                                            </div>
                                            <div class="product__info">
                                                <h5 class="product__info-name">${item.name}
                                                </h5>
                                                <div class="product__info-price">${item.sale} <span class="product__info-sale">${item.price}</span></div>
                                                <span class="product__info-star">
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <span class="product__info-sold">Đã bán ${item.bestseller}</span>
                                                </span>
                                                <div class="product__info-address">${item.address}</div>
                                            </div>
                                        </a>
                                    </div>`;
    });
});
//SHOW PRODUCT Đông trùng hạ thảo
productService
.fetchData('http://localhost:3000/products?category=%C4%90%C3%B4ng%20trung%20h%E1%BA%A1%20th%E1%BA%A3o&_limit=4')
.then(data => {
    //console.log(data);
    data.forEach(item => {
        samProduct.innerHTML += ` <div class="grid__colum-4">
                                        <a href="./detail.html?id=${item.id}" class="product">
                                            <div class="product__image">
                                                <img src="./image/productSale/${item.image}" alt="" class="product__img-pro" width="100%">
                                                <div class="product__img-favoutite"><span>Sale 30%</span></div>
                                            </div>
                                            <div class="product__info">
                                                <h5 class="product__info-name">${item.name}
                                                </h5>
                                                <div class="product__info-price">${item.sale} <span class="product__info-sale">${item.price}</span></div>
                                                <span class="product__info-star">
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <i class="product__info-star-icon product__info-star-icon--avaluated fa-regular fa-star"></i>
                                                    <span class="product__info-sold">Đã bán ${item.bestseller}</span>
                                                </span>
                                                <div class="product__info-address">${item.address}</div>
                                            </div>
                                        </a>
                                    </div>`;
    });
});


