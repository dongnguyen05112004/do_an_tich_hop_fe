<template>
    <div>
        <div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="col-lg-12">
                        <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                            <div class="card-body">
                                <ul class="list-group" style="border-radius: 20px;">
                                    <li class="list-group-item">
                                        <h5>Ngân Sách Hiện Tại</h5>
                                    </li>
                                    <li class="list-group-item">
                                        <p><i class="me-1"></i> Thu Nhập <span class="float-end"></span></p>
                                        <div class="progress" style="height: 5px;">
                                            <div class="progress-bar bg-gradient-moonlit" role="progressbar"
                                                style="width: 50%"></div>
                                        </div>
                                        <p>+10,000,000 VNĐ</p>
                                    </li>
                                    <li class="list-group-item">
                                        <p class="mt-3"><i class="me-1"></i> Chi Tiêu <span class="float-end"></span>
                                        </p>
                                        <div class="progress" style="height: 5px;">
                                            <div class="progress-bar bg-gradient-ibiza" role="progressbar"
                                                style="width: 65%"></div>
                                        </div>
                                        <p>+5,000,000 VNĐ</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                        <div class="card-body">
                            <template v-for="(item, index) in ngan_sach" :key="index">

                                <div class="card mt-3 " style="border-radius: 20px;">
                                    <div class="card-body">
                                        <div class="col-lg-11 d-flex align-items-center ">
                                            <div class="col-lg-4">
                                                <p class="mb-0">{{ item.ten_danh_muc }}: {{ item.han_muc }} VNĐ</p>
                                            </div>
                                            <div class="col-lg-4">Đã Chi: 500,000 VNĐ</div>
                                            <div class="col-lg-4">Còn Lại: 1,500,000 VNĐ</div>
                                            <div class="col-lg-0">
                                                <div class="dropdown ms-auto me-3">
                                                    <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                                        data-bs-toggle="dropdown"> <i
                                                            class="bx bx-dots-horizontal-rounded font-22"></i>
                                                    </div>
                                                    <ul class="dropdown-menu">
                                                        <li>
                                                            <button class="btn ms-2"
                                                                style="background-color: #DDE8F5; border-radius: 15px; width: 90%;"
                                                                @click="openSua(item)" data-bs-toggle="modal"
                                                                data-bs-target="#sua">Sửa ngân
                                                                sách
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button class="btn ms-2 mt-2"
                                                                v-on:click="openXoa(item)"
                                                                data-bs-toggle="modal" data-bs-target="#xoa"
                                                                style="background-color: #DDE8F5; border-radius: 15px; width: 90%;">Xóa
                                                                ngân sách</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" id="w-chart1"></div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6">
                    <div class="card form-control" style="background-color: #DDE8F5; border-radius: 20px;">
                        <h5 class="mt-3">Thêm Ngân Sách</h5>
                        <p class="mt-3">Danh Mục</p>
                        <div class="input-group">
                            <select v-model="them_ngan_sach.ma_danh_muc" class="form-select" id="inputGroupSelect04"
                                aria-label="Example select with button addon">
                                <option v-for="dm in danh_muc_list" :key="dm.id" :value="dm.id">
                                    {{ dm.ten_danh_muc }}
                                </option>
                            </select>
                        </div>
                        <p class="mt-3">Số Tiền </p>
                        <div class="input-group flex-nowrap">
                            <input v-model="them_ngan_sach.han_muc" type="text" class="form-control" placeholder=""
                                aria-label="Username" aria-describedby="addon-wrapping">
                        </div>
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-5"></div>
                                <div class="col-lg-7">
                                    <div class="d-flex gap-3 mt-3">
                                        <a href="#" class="btn btn-primary " data-bs-toggle="modal"
                                            data-bs-target="#them">Thêm</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <div class="modal fade" id="them" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Ngân Sách</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc chắn muốn thêm ngân sách này không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        v-on:click="themNganSach()">Thêm</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="sua" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sửa Ngân Sách</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="mt-3">Danh Mục</p>
                    <div class="input-group">
                        <select v-model="update_ngan_sach.ma_danh_muc" class="form-select">
                            <option v-for="dm in danh_muc_list" :key="dm.id" :value="dm.id">
                                {{ dm.ten_danh_muc }}
                            </option>
                        </select>
                    </div>
                    <p class="mt-3">Số Tiền </p>
                    <div class="input-group flex-nowrap">
                        <input v-model="update_ngan_sach.han_muc" type="text" class="form-control">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        v-on:click="updateNganSach()">Cập
                        Nhật</button>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Ngân Sách</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-primary">
                        Bạn Có Chắc Muốn Xóa Ngân Sách Này Không?
                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn  mx-2 " style="background: #BBD2F4;" v-on:click="xoaNganSach()" data-bs-dismiss="modal">Xóa</button>
                    <button type="button" class="btn  mx-2" style="background: #BBD2F4;"
                        data-bs-dismiss="modal">Hủy</button>
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
            ngan_sach: [],
            them_ngan_sach: {},
            update_ngan_sach: {},
            danh_muc_list: []
        }
    },
    mounted() {
        this.getNganSach();
        this.getDanhMuc();
    },
    methods: {
        getNganSach() {
            axios.get('http://127.0.0.1:8000/api/canhan/ngansach/data', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                },
            })
                .then((res) => {
                    this.ngan_sach = res.data.data;
                })
                .catch(res => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                });
        },
        openSua(item) {
            this.update_ngan_sach = { ...item }; // item có cả id
        },
        getDanhMuc() {
            axios.get('http://127.0.0.1:8000/api/canhan/danhmuc/data', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                },
            })
                .then((res) => {
                    this.danh_muc_list = res.data.data;
                });
        },
        openSua(item) {
            this.update_ngan_sach = {
                id: item.id,
                ma_danh_muc: item.ma_danh_muc,
                han_muc: item.han_muc
            };
        },
        themNganSach() {
            axios
                .post('http://127.0.0.1:8000/api/canhan/ngansach/them', this.them_ngan_sach, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                    },
                })
                .then((res) => {
                    if (res.data.status) {
                        this.getNganSach();
                        this.$toast.success(res.data.message || "Thêm tiết kiệm thành công!");
                        this.them_ngan_sach = { ma_danh_muc: '', han_muc: '' };
                    } else {
                        this.$toast.error(res.data.message || "Thêm tiết kiệm thất bại!");
                    }
                })
                .catch((err) => {
                    const list = Object.values(err.response.data.errors || {});
                    list.forEach((v) => {
                        this.$toast.error(v[0]);
                    });
                });
        },
        updateNganSach() {
            axios.post('http://127.0.0.1:8000/api/canhan/ngansach/sua', this.update_ngan_sach, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                },
            })
                .then((res) => {
                    if (res.data.status) {
                        this.getNganSach();
                        this.$toast.success(res.data.message || "Cập nhật thành công!");
                    } else {
                        this.$toast.error(res.data.message || "Cập nhật thất bại!");
                    }
                })
                .catch((err) => {
                    const list = Object.values(err.response?.data?.errors || {});
                    list.forEach((v) => this.$toast.error(v[0]));
                });
        },
        openXoa(item) {
            this.xoa_ngan_sach = { id: item.id };
        },
        xoaNganSach() {
            axios.post('http://127.0.0.1:8000/api/canhan/ngansach/xoa', this.xoa_ngan_sach, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                },
            })
                .then((res) => {
                    if (res.data.status) {
                        this.getNganSach();
                        this.$toast.success(res.data.message || "Xóa thành công!");
                    } else {
                        this.$toast.error(res.data.message || "Xóa thất bại!");
                    }
                })
                .catch((err) => {
                    const list = Object.values(err.response?.data?.errors || {});
                    list.forEach((v) => this.$toast.error(v[0]));
                });
        }

    },
}


</script>
<style></style>