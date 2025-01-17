import { productService } from "../model/model.js";

const tbodyCte = document.querySelector('tbody');
console.log(tbodyCte);

// function ShowCatePro() {
    // tbodyCte.innerHTML = "";
    productService.fetchData('http://localhost:3000/categories').then(data => {
        data.forEach(item => {
            tbodyCte.innerHTML += `<tr>
                                    <td>${item.id}</td>
                                    <td>${item.name}</td>
                                    <td><img src="../site/image/category/${item.image}" alt="" width="100px"></td>
                                    <td>
                                        <button class="btn">Sửa</button>
                                        <button class="btn">Xóa</button>
                                    </td>
                                </tr>`;
        });
    })

// }
// ShowCatePro();
