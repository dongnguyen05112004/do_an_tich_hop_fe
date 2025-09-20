<template>
    <div class="container py-4">
        <div class="row">
            <!-- Bên trái -->
            <div class="col-md-6" style="height: 100%;">
                <h5><strong>Thu nhập gia đình</strong></h5>
                <div class="card-custom" style="background-color: #DDE8F5;">
                    <p><strong>Tổng thu nhập:</strong> 19.9350.000đ</p>
                    <p class="highlight">Thu nhập cao hơn tháng trước 1.850.000đ</p>
                </div>
                <div class="card card-responsive"  style="padding: 32px;  background-color: #DDE8F5; height: 430px; overflow-y: auto;">
                    <template v-for="(v, index) in l_thu" :key="index">
                        <div class="card">
                            <div class="card-body">
                                <div>
                                    <strong>{{ v.ten_thu_nhap }}:</strong> {{ v.so_tien }}<br>
                                    <span class="text-small">Ngày: {{ v.ngay }}</span><br>
                                    <span class="highlight">Nhiều hơn 2.000.000đ so với tháng trước</span>
                                </div>
                                <div class="dropdown float-end">
                                    <button class="btn btn-light btn-sm" type="button" data-bs-toggle="dropdown">
                                        ...
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-custom">
                                        <button v-on:click="Object.assign(sua_thu, v)" data-bs-toggle="modal"
                                            data-bs-target="#updateModal">Chỉnh sửa thu thu nhập</button>
                                        <button v-on:click="Object.assign(xoa_thu, v)" data-bs-toggle="modal"
                                            data-bs-target="#delModal">Xóa thu nhập</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <!-- Khoản thu nhập -->


            <!-- Bên phải -->
            <div class="col-md-6" style="height: 100%;">
                <h5><strong>Thêm thu nhập</strong></h5>

                <div class="card-custom mt-2 background-color">
                    <div class="mb-2">
                        <label for="soTien" class="form-label">Mã thu nhập</label>
                        <input v-model="them_thu.ma_thu" type="text" class="form-control" id="soTien"
                            placeholder="Value" />
                    </div>

                    <div class="mb-2">
                        <label for="soTien" class="form-label">Tên thu nhập</label>
                        <input v-model="them_thu.ten_thu_nhap" type="text" class="form-control" id="soTien"
                            placeholder="Value" />
                    </div>

                    <div class="mb-2">
                        <label for="soTien" class="form-label">Số tiền</label>
                        <input v-model="them_thu.so_tien" type="number" class="form-control" id="soTien"
                            placeholder="Value" />
                    </div>

                    <div class="mb-2">
                        <label for="danhMuc" class="form-label">Danh Mục</label>
                        <select v-model="them_thu.danh_muc" class="form-select" id="danhMuc">
                            <option>Lương</option>
                            <option>Chứng khoán</option>
                            <option>Trợ cấp</option>
                        </select>
                    </div>

                    <div class="mb-2">
                        <label for="ngay" class="form-label">Ngày thu nhập</label>
                        <input v-model="them_thu.ngay" type="date" class="form-control" id="ngay" />
                    </div>

                    <div class="mb-2">
                        <label for="moTa" class="form-label">Mô tả</label>
                        <textarea v-model="them_thu.mo_ta" class="form-control" id="moTa" rows="2"
                            placeholder="Value"></textarea>
                    </div>

                    <button v-on:click="themThu()" type="submit" class="btn btn-primary w-100 mt-2">Thêm</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Xóa khoản thu {{ xoa_thu.ten_thu_nhap }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Bạn có chắc muốn xóa khoản thu này không?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button v-on:click="xoaThu()" type="button" data-bs-dismiss="modal" class="btn btn-danger">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Sửa khoản thu nhập {{ sua_thu.ten_thu_nhap }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label for="soTien" class="form-label">Mã thu nhập</label>
                        <input v-model="sua_thu.ma_thu" type="text" class="form-control" id="soTien"
                            placeholder="Value" />
                    </div>

                    <div class="mb-2">
                        <label for="soTien" class="form-label">Tên thu nhập</label>
                        <input v-model="sua_thu.ten_thu_nhap" type="text" class="form-control" id="soTien"
                            placeholder="Value" />
                    </div>

                    <div class="mb-2">
                        <label for="soTien" class="form-label">Số tiền</label>
                        <input v-model="sua_thu.so_tien" type="number" class="form-control" id="soTien"
                            placeholder="Value" />
                    </div>

                    <div class="mb-2">
                        <label for="danhMuc" class="form-label">Danh Mục</label>
                        <select v-model="sua_thu.danh_muc" class="form-select" id="danhMuc">
                            <option>Lương</option>
                            <option>Chứng khoán</option>
                            <option>Trợ cấp</option>
                        </select>
                    </div>

                    <div class="mb-2">
                        <label for="ngay" class="form-label">Ngày thu nhập</label>
                        <input v-model="sua_thu.ngay" type="date" class="form-control" id="ngay" />
                    </div>

                    <div class="mb-2">
                        <label for="moTa" class="form-label">Mô tả</label>
                        <textarea v-model="sua_thu.mo_ta" class="form-control" id="moTa" rows="2"
                            placeholder="Value"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button v-on:click="suaThu()" type="button" data-bs-dismiss="modal" class="btn btn-danger">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            l_thu: [],
            them_thu: { ma_thu: '', ten_thu_nhap: '', danh_muc: '', so_tien: '', ngay: '', mo_ta: '' },
            xoa_thu: { ma_thu: '', ten_thu_nhap: '', danh_muc: '', so_tien: '', ngay: '', mo_ta: '' },
            sua_thu: { ma_thu: '', ten_thu_nhap: '', danh_muc: '', so_tien: '', ngay: '', mo_ta: '' }
        }
    },
    methods: {
        getThu() {
            axios.get('http://127.0.0.1:8000/api/canhan/thunhap/data')
                .then(response => {
                    this.l_thu = response.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        themThu() {
            axios
                .post('http://127.0.0.1:8000/api/canhan/thunhap/them', this.them_thu)
                .then(response => {
                    if (response.data.status == true) {
                        this.getThu();
                        this.$toast.success(response.data.message);
                    } else {
                        this.$toast.error('Them moi that bai');
                    }
                })
                .catch(error => {
                    var obj = error.response.data.errors;
                    var result = Object.keys(obj).map((key) => [key, obj[key]]);
                    console.log(result);
                    result.forEach((v_1, key_1) => {
                        var xxx = v_1[1];
                        xxx.forEach((v, key) => {
                            this.$toast.error(v);
                        });
                    });
                });
        },

        xoaThu() {
            axios
                .post('http://127.0.0.1:8000/api/canhan/thunhap/xoa', this.xoa_thu)
                .then(response => {
                    if (response.data.status == true) {
                        this.getThu();
                        this.$toast.success(response.data.message);
                    } else {
                        this.$toast.error('Xoa that bai');
                    }
                })
                .catch(error => {
                    var obj = error.response.data.errors;
                    var result = Object.keys(obj).map((key) => [key, obj[key]]);
                    console.log(result);
                    result.forEach((v_1, key_1) => {
                        var xxx = v_1[1];
                        xxx.forEach((v, key) => {
                            this.$toast.error(v);
                        });
                    });
                });
        },

        suaThu() {
            axios
                .post('http://127.0.0.1:8000/api/canhan/thunhap/sua', this.sua_thu)
                .then(response => {
                    // console.log(response.data.status);
                    // console.log(response.data.message);
                    if (response.data.status == true) {
                        this.getThu();
                        this.$toast.success(response.data.message);
                    } else {
                        this.$toast.error('Sua moi that bai');
                    }
                })
                .catch(error => {
                    var obj = error.response.data.errors;
                    var result = Object.keys(obj).map((key) => [key, obj[key]]);
                    console.log(result);
                    result.forEach((v_1, key_1) => {
                        var xxx = v_1[1];
                        xxx.forEach((v, key) => {
                            this.$toast.error(v);
                        });
                    });
                });
        },
    },

    mounted() {
        this.getThu();
    }
}
</script>
<style>
body {
    background-color: #f2f7ff;
}

.card-custom {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
}

.background-color {
    background-color: #dde8f5;
}

.text-small {
    font-size: 0.9rem;
}

.highlight {
    font-style: italic;
    color: #357edd;
}

.dropdown-menu-custom {
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px 1px #7FB3FF;
    border-radius: 10px;
    min-width: 180px;
    padding: 8px;
}

.dropdown-menu-custom button {
    display: block;
    width: 100%;
    background: #BBD2F4;
    border: thune;
    text-align: left;
    padding: 0.25rem 0;
    margin-bottom: 8px;
    padding: 6px;
    border-radius: 10px;
}
</style>