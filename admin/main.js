import { productService } from "../model/model.js";

//ĐÓNG MỞ MODAL
const btnThemSP = document.querySelector('.btn__themsp');
const btnClose = document.querySelector('#btn--close');

const modal = document.querySelector('.modal');

btnThemSP.addEventListener('click', () => {
   modal.classList.add('modal--open');
})

btnClose.addEventListener('click', () =>{
    modal.classList.remove('modal--open');
})

//

const tbody = document.querySelector('tbody')
//hàm show sản phẩm
const showPro = () => {
    productService.fetchData('http://localhost:3000/products').then(data => {
        data.forEach(item => {
            tbody.innerHTML += ` <tr>
                                    <td>${item.id}</td>
                                    <td>${item.name}</td>
                                    <td><img src="../site/image/productSale/${item.image}" alt="" width="100px"></td>
                                    <td>${item.sale}VNĐ</td>
                                    <td>${item.price}VND</td>
                                    <td>${item.category}</td>
                                    <td>
                                        <button style="margin-bottom: 10px;" class="btn openEditPage" data-id="${item.id}">Sửa</button>
                                        <button class="btn btn-deletepro" data-id="${item.id}">Xóa</button>
                                    </td>
                                </tr>`;
        });
    })
}
showPro();

//hàm show categories 
const showCate = () => {
    const showcate = document.getElementById('product-category');
    productService.fetchData('http://localhost:3000/categories').then(data => {
        data.forEach(item => {
            showcate.innerHTML += `<option value="${item.name}">${item.name}</option>`;
        });
    })
}
showCate();

//hàm thêm sản phẩm
const addPro = () => {
    //Lấy giá trị của user nhập vào và gắn vào các biến tương ứng
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const sale = document.getElementById('product-sale').value;
    const cate = document.getElementById('product-category').value;
    const address = document.getElementById('product-address').value;
    const hotdeal = document.getElementById('product-hotdeal').checked;
    const description = document.getElementById('product-description').value;
    //Sự lý hình ảnh
    const fileInput = document.getElementById('product-image');
    const img = fileInput.files[0] ? fileInput.files[0].name : "No file chosen";
    productService.getLastId().then((id) => {
        const newProduct = {
            id: (Number(id) + 1).toString(),
            name: name,
            category: cate,
            price: price,
            sale: sale,
            image: img,
            hotdeal: hotdeal == true ? 1 : 0,
            star: 5,
            bestseller: 50,
            address: address,
            description: description,
        };
        productService.addData(newProduct);
    });
    showPro();
    alert('Thêm sp thành công');
};
//bắt sự kiện btn thêm sp
document.getElementById('addPro').addEventListener('click',addPro);

//viết tính năng sửa sản phẩm
var editModal = document.querySelector('.modalupdate');

document.querySelector("tbody").addEventListener("click", function (e) {
if (e.target.classList.contains("openEditPage")) {
    const id = e.target.dataset.id;
    productService.getDataById(id).then((pro) => {
        console.log(pro);
        editModal.style.display = "block";
        editModal.innerHTML = `<div class="modal-content">
                                    <span class="close-btn">&times;</span>
                                    <h4>Update Product</h4>
                                    <form id="updateProductForm">
                                        <div class="form-group">
                                            <input value="${pro.name}" type="text" id="name" name="name" placeholder="Nhập tên sản phẩm">
                                        </div>
                                        <div class="form-group">
                                            <input value="${pro.price}" type="text" id="price" name="price" placeholder="Nhập giá sản phẩm (Giá gốc)">
                                        </div>
                                        <div class="form-group">
                                            <input value="${pro.sale}" type="text" id="sale" name="sale" placeholder="Nhập giá sản phẩm (Giá sale)">
                                        </div>
                                        <div class="form-group">
                                            <label for="category">Danh mục:</label>
                                            <select id="category" name="category">
                                                <option ${pro.category == "Tổ Yến" ? "selected" : ""} value="Tổ yến">Tổ yến</option>
                                                <option ${pro.category == "Yến Tươi" ? "selected" : ""} value="Yến tươi">Yến tươi</option>
                                                <option ${pro.category == "Đông trùng hạ thảo" ? "selected" : ""} value="Đông trùng hạ thảo">Đông trùng hạ thảo</option>
                                                <option ${pro.category == "Soup Yến" ? "selected" : ""} value="Soup yến">Soup yến</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input value="${pro.address}" type="text" id="address" name="address" placeholder="Nhập địa chỉ sản phẩm">
                                        </div>
                                        <div class="form-group">
                                            <label for="price">Sản phẩm hot:</label>
                                            <input ${pro.hotdeal == 1 ? "checked" : ""} type="checkbox" id="hotdeal" name="hotdeal">
                                        </div>
                                        <div class="form-group">
                                            <label for="description">Mô tả sản phẩm:</label>
                                            <textarea id="description" name="description" rows="3" placeholder="Nhập mô tả sản phẩm">${pro.description}</textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="image">Hình ảnh sản phẩm:</label>
                                            <input value="${pro.image}" type="file" id="image" name="image">
                                        </div>
                                    </form>
                                    <div class="modal-footer">
                                        <button id="btn-save" class="editPro" data-id="${id}">Cập nhật</button>
                                        <button class="btn-close btn-close--update">Đóng</button>
                                    </div>
                                </div>`;
    });
    };    
});


editModal.addEventListener("click", function (e) {
    if (e.target.classList.contains("editPro")) {
        //lấy id
        const id = e.target.dataset.id;
        //Lấy giá trị của user nhập vào và gắn vào các biến tương ứng
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const sale = document.getElementById('sale').value;
        const cate = document.getElementById('category').value;
        const address = document.getElementById('address').value;
        const hotdeal = document.getElementById('hotdeal').checked;
        const description = document.getElementById('description').value;
        //Sự lý hình ảnh
        const fileInput = document.getElementById('image');
        const img = fileInput.files[0] ? fileInput.files[0].name : oldImage;

        //chuẩn bị cấu trúc JSON để sửa sản phẩm
        const editPro = {
            name: name,
            category: cate,
            price: price,
            sale: sale,
            image: img,
            hotdeal: hotdeal == true ? 1 : 0,
            star: 5,
            bestseller: 50,
            address: address,
            description: description,
        };
        productService.updateData(id, editPro);

        // sau khi sửa thành công tiến hành show dữ liệu mới
        showPro();
        alert('Cập nhật thành công');
        // ẩn modal sửa sản phẩm
        editModal.style.display = "none";
    }
})

// xóa sp
const deletePro = id => {
    productService.deleteData(id);
}

// viết chức năng xóa sản phẩm
document.querySelector("tbody").addEventListener("click", e => {
    if (e.target.classList.contains("btn-deletepro")) {
        const id = e.target.dataset.id;
        console.log(id);
        let result = confirm("bạn có muốn xóa sản phẩm này không");
        if(result){
            deletePro(id);
            showPro();
        }
    }
})

