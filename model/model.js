export class productService {
    static async fetchData(url) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    static async addData(data) {
        try {
            await axios.post('http://localhost:3000/products', data);
            console.log(`Sản phẩm đã đc thêm`);
        } catch (error) {
            console.log(error);
        }
    }

    static async updateData(id,data) {
        try {
            await axios.put(`http://localhost:3000/products/${id}`, data);
            console.log(`Sản phẩm có id số: ${id} đã được cập nhật`);
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteData(id) {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            console.log(`Sản phẩm có id số: ${id} đã được xóa bỏ`);
        } catch (error) {
            console.log(error);
        }
    }

    static async getDataById(id) {
        try {
            const response = await axios.get(`http://localhost:3000/products/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async getLastId() {
        try {
            const response = await axios.get('http://localhost:3000/products');
            return response.data[response.data.length - 1].id;            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}