import { productService } from "../model/model.js";


// viết tính năng show chi tiết sản phẩm
const detailPro = document.querySelector('.productDetail--js');
// lấy id của sản phẩm
const id = window.location.toString().split("=")[1];


productService.getDataById(id).then((product) => {

console.log(product);

    detailPro.innerHTML += `<div class="detailproduct">
                                <div class="grid__row">
                                    <div class="grid__columdetail-4">
                                        <img src="./image/productSale/${product.image}" alt="" class="product__img-avatar" width="100%">
                                    </div>
                                    <div class="grid__columdetail-8">
                                        <div class="detail__name">${product.name}</div>
                                        <div class="detail__price">
                                            <div class="detail__price-sale">${product.sale}<span class="detail__price-original">${product.price}</span></div>
                                        </div>
                                        <div class="quantity-container">
                                            <div class="quantity">Số lượng:</div>
                                            <div class="quantity-selector">
                                                <button type="button" class="minus-btn">-</button>
                                                <input type="number" id="quantity" name="quantity" value="1" min="1">
                                                <button type="button" class="plus-btn">+</button>
                                            </div>
                                        </div>
                                        <div class="detail__quantity-total">100 sản phẩm hiện có</div>
                                        <div class="detail__buy">
                                            <a href="" class="btn detail__buy-btn"><i class="detail__buy-icon fa-solid fa-cart-shopping"></i></i>thêm vào giỏ hàng</button>
                                            <a href="" class="btn">mua ngay</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid__row">
                                    <div class="grid__colum-12">
                                        <div class="description__title">Mô Tả</div>
                                        <div class="detail__description">
                                        ${product.description}
                                        </div>
                                    </div>
                                </div>
                            </div>`;
});