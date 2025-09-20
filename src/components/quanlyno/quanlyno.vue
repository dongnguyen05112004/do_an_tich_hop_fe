<template>
    <div class="row">
        <div class="col-6">
            <h5>Nợ cá nhân</h5>
            <div class="card card-responsive"  style="padding: 32px; border-radius: 20px;  background-color: #DDE8F5; height: 600px; overflow-y: auto;">
                <div class="card-body">
                    <template v-for="(v, index) in l_no" :key="index">
                        <div class="card" style="border-radius: 20px;">
                            <div class="card-body">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <td><b>{{ v.ten_no }}</b>: {{ v.so_tien }}</td>
                                            <td><b>Ngày bắt đầu:</b> {{ v.ngay_bat_dau }}</td>
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>
                                            <td><b>Lãi xuất:</b> {{ v.lai_suat }}</td>
                                            <td><b>Ngày kết thúc:</b> {{ v.ngay_ket_thuc }}</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div class="dropdown ms-auto me-3">
                                <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                    data-bs-toggle="dropdown"> <i class="bx bx-dots-horizontal-rounded font-22"></i>
                                </div>
                                <ul class="dropdown-menu">
                                    <li>
                                        <button class="btn ms-2"
                                            style="background-color: #DDE8F5; border-radius: 15px; width: 90%;"
                                            v-on:click="Object.assign(sua_no, v)" data-bs-toggle="modal"
                                            data-bs-target="#updateModal">Sửa khoản
                                            nợ</button>
                                    </li>
                                    <li>
                                        <button class="btn ms-2 mt-2" v-on:click="Object.assign(xoa_no, v)"
                                            data-bs-toggle="modal" data-bs-target="#delModal"
                                            style="background-color: #DDE8F5; border-radius: 15px; width: 90%;">Xóa
                                            khoản nợ</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="col-6">
            <h5>Thêm nợ cá nhân</h5>
            <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="maNo" class="form-label">Mã nợ</label>
                        <input v-model="them_no.ma_no" type="text" class="form-control" id="maNo"
                            placeholder="Nhập mã nợ">
                    </div>
                    <div class="mb-3">
                        <label for="noId" class="form-label">Tên nợ</label>
                        <input v-model="them_no.ten_no" type="text" class="form-control" id="noId"
                            placeholder="Nhập tên nợ">
                    </div>
                    <div class="mb-3">
                        <label for="noName" class="form-label">Số tiền</label>
                        <input v-model="them_no.so_tien" type="number" class="form-control" id="noName" placeholder="">
                    </div>
                    <div class="mb-3">
                        <label for="startDate" class="form-label">Ngày bắt đầu</label>
                        <input v-model="them_no.ngay_bat_dau" type="date" class="form-control" id="startDate">
                    </div>
                    <div class="mb-3">
                        <label for="endDate" class="form-label">Ngày kết thúc</label>
                        <input v-model="them_no.ngay_ket_thuc" type="date" class="form-control" id="endDate">
                    </div>
                    <div class="mb-3">
                        <label for="interestRate" class="form-label">Lãi suất (%)</label>
                        <input v-model="them_no.lai_suat" type="number" class="form-control" id="interestRate"
                            placeholder="Nhập lãi suất">
                    </div>
                    <div class="text-end"><button class="btn btn-primary" v-on:click="themNo()">Thêm</button></div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Xóa khoản nợ {{ xoa_no.ten_no }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Bạn có chắc muốn xóa khoản nợ này không?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="xoaNo()" type="button" data-bs-dismiss="modal" class="btn btn-danger">Xac
                        nhan</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Sửa khoản nợ {{ sua_no.ten_no }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="mb-3">
                        <label for="maNo" class="form-label">Mã nợ</label>
                        <input v-model="sua_no.ma_no" type="text" class="form-control" id="maNo"
                            placeholder="Nhập mã nợ">
                    </div>
                    <div class="mb-3">
                        <label for="noId" class="form-label">Tên nợ</label>
                        <input v-model="sua_no.ten_no" type="text" class="form-control" id="noId"
                            placeholder="Nhập tên nợ">
                    </div>
                    <div class="mb-3">
                        <label for="noName" class="form-label">Số tiền</label>
                        <input v-model="sua_no.so_tien" type="number" class="form-control" id="noName" placeholder="">
                    </div>
                    <div class="mb-3">
                        <label for="startDate" class="form-label">Ngày bắt đầu</label>
                        <input v-model="sua_no.ngay_bat_dau" type="date" class="form-control" id="startDate">
                    </div>
                    <div class="mb-3">
                        <label for="endDate" class="form-label">Ngày kết thúc</label>
                        <input v-model="sua_no.ngay_ket_thuc" type="date" class="form-control" id="endDate">
                    </div>
                    <div class="mb-3">
                        <label for="interestRate" class="form-label">Lãi suất (%)</label>
                        <input v-model="sua_no.lai_suat" type="number" class="form-control" id="interestRate"
                            placeholder="Nhập lãi suất">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="suaNo()" type="button" data-bs-dismiss="modal" class="btn btn-danger">Xac
                        nhan</button>
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
            l_no: [],
            them_no: { ma_no: '', ten_no: '', ngay_bat_dau: '', ngay_ket_thuc: '', so_tien: '', lai_suat: '' },
            xoa_no: { ma_no: '', ten_no: '', ngay_bat_dau: '', ngay_ket_thuc: '', so_tien: '', lai_suat: '' },
            sua_no: { ma_no: '', ten_no: '', ngay_bat_dau: '', ngay_ket_thuc: '', so_tien: '', lai_suat: '' }
        }
    },
    methods: {
        getNo() {
            axios.get('http://127.0.0.1:8000/api/canhan/no/data')
                .then(response => {
                    this.l_no = response.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        themNo() {
            axios
                .post('http://127.0.0.1:8000/api/canhan/no/them', this.them_no)
                .then(response => {
                    if (response.data.status == true) {
                        this.getNo();
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

        xoaNo() {
            axios
                .post('http://127.0.0.1:8000/api/canhan/no/xoa', this.xoa_no)
                .then(response => {
                    if (response.data.status == true) {
                        this.getNo();
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

        suaNo() {
            axios
                .post('http://127.0.0.1:8000/api/canhan/no/sua', this.sua_no)
                .then(response => {
                    // console.log(response.data.status);
                    // console.log(response.data.message);
                    if (response.data.status == true) {
                        this.getNo();
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
        this.getNo();
    }
}
</script>
<style></style>