<template>
    <div class="row">
        <h5 class="fw-bold">Thông tin chung</h5>
        <div style="border-radius: 20px; background-color: #DDE8F5">
            <div class="p-3 rounded d-flex justify-content-between align-items-center">
                <span class="fw-semibold">Tổng nợ hiện tại: 450.000.000 vnđ</span>
                <span class="fw-semibold">Đã trả: 100.000.000 vnđ</span>
                <span class="text-primary fst-italic">Ngày trả nợ xong (dự kiến): 15/11/2025</span>
            </div>
        </div>

    </div>
    <div class="row">
        <div class="col-6 mt-3">
            <div class="d-flex justify-content-between align-items-center mt-3">
                <h6 class="fw-bold">Danh sách khoản nợ</h6>
                <button class=" btn btn-sm mb-3" style="padding: 10px; border-radius: 20px;  background-color: #DDE8F5;"
                    data-bs-toggle="modal" data-bs-target="#them"><b>Thêm nợ cá nhân</b></button>
            </div>
            <div class="card card-responsive"
                style="padding: 32px; border-radius: 20px;  background-color: #DDE8F5; height: 600px; overflow-y: auto;">
                <div class="card-body">
                    <template v-for="(v, index) in l_no" :key="index">
                        <div class="card" style="border-radius: 20px;">
                            <div class="card-body">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <td><b>Vay tiền mua nhà</b> </td>
                                            <td>{{ v.so_tien }}</td>

                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>
                                            <td><b>Lãi xuất:</b> {{ v.lai_suat }}</td>
                                            <td><b>Kỳ hạn:</b> 6 tháng</td>
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>
                                            <td><b>Ngày vay :</b> 15/5/2025</td>
                                            <td></td>
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
        <div class="col-6 mt-3">
            <div class="class mt-3">
                <h5>Tiền nợ tới hạn</h5>
            </div>

            <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                <div class="card-body">
                    <div class="card" style="border-radius: 20px;">
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <td><b>Vay tiền mua nhà</b> </td>
                                        <td>Còn 3 ngày...</td>

                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <td><b> Phải trả</b> </td>
                                        <td>ngày trả</td>
                                    </tr>
                                </thead>


                            </table>
                        </div>
                        <div class="card-footer text-center">
                            <button style="padding: 8px; border-radius: 20px;  background-color: #DDE8F5;" type="button"
                                class="btn"><b>Đã trả nợ</b></button>
                        </div>

                    </div>


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
                    <div class="alert alert-primary">
                        <p>Bạn có chắc muốn xóa khoản nợ này không?</p>
                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn  mx-2 " style="background: #BBD2F4;">Xóa</button>
                    <button type="button" class="btn  mx-2" style="background: #BBD2F4;"
                        data-bs-dismiss="modal">Hủy</button>
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
                        <label for="maNo" class="form-label">Tên nợ</label>
                        <input v-model="sua_no.ma_no" type="text" class="form-control" id="maNo"
                            placeholder="Nhập mã nợ">
                    </div>
                    <div class="mb-3">
                        <label for="noId" class="form-label">Số tiền vay</label>
                        <input v-model="sua_no.ten_no" type="text" class="form-control" id="noId"
                            placeholder="Nhập tên nợ">
                    </div>
                    <div class="mb-3">
                        <label for="noName" class="form-label">Hình thức vay</label>
                        <select class="form-select" id="inputGroupSelect0"
                            aria-label="Example select with button addon">
                            <option selected></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="startDate" class="form-label">Lãi suất</label>
                        <select class="form-select" id="inputGroupSelect4"
                            aria-label="Example select with button addon">
                            <option selected></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="endDate" class="form-label">Kỳ hạn</label>
                        <select class="form-select" id="inputGroupSelect04"
                            aria-label="Example select with button addon">
                            <option selected></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div class="mb-3">
                            <label for="interestRate" class="form-label">Ghi chú</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button v-on:click="suaNo()" type="button" data-bs-dismiss="modal" class="btn btn-danger">Xác
                            nhận</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="them" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Thêm khoản nợ </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="mb-3">
                        <label for="maNo" class="form-label">Tên nợ</label>
                        <input v-model="sua_no.ma_no" type="text" class="form-control" id="maNo"
                            placeholder="Nhập mã nợ">
                    </div>
                    <div class="mb-3">
                        <label for="noId" class="form-label">Số tiền vay</label>
                        <input v-model="sua_no.ten_no" type="text" class="form-control" id="noId"
                            placeholder="Nhập tên nợ">
                    </div>
                    <div class="mb-3">
                        <label for="noName" class="form-label">Hình thức vay</label>
                        <select class="form-select" id="inputGroupSelect0"
                            aria-label="Example select with button addon">
                            <option selected></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="startDate" class="form-label">Lãi suất</label>
                        <select class="form-select" id="inputGroupSelect4"
                            aria-label="Example select with button addon">
                            <option selected></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="endDate" class="form-label">Kỳ hạn</label>
                        <select class="form-select" id="inputGroupSelect04"
                            aria-label="Example select with button addon">
                            <option selected></option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div class="mb-3">
                            <label for="interestRate" class="form-label">Ghi chú</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" data-bs-dismiss="modal" class="btn btn-primary ">Thêm</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card" style="background: #DDE8F5;">

        <div class="row mt-2">
            <div class="col text-center">
                <button type="button" class="btn btn-primary">Báo cáo nợ</button>
            </div>
        </div>
        <div class="row mt-3">

            <Bar v-if="isloading == true" id="my-chart-id" :options="chartOptions" :data="chartData" />

        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="mb-3 mr-5">
                    <div class="card">
                        <div class="card-body " style="background-color: #DDE9F9">
                            <div class="card mt-3">
                                <div class="card-body">
                                    <Label>Tóm Tắt</Label>
                                    <label for="">Tiền tiết kiệm tháng trước : ... VNĐ</label>
                                    <label for="">Tiền tiết kiệm cần hoàn thành : ... VNĐ</label>
                                    <label for="">Tổng tiền tiết kiệm hiện tại : ... VNĐ</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [{
                    backgroundColor: '#FFDE59',
                    data: []
                }]
            },
            chartOptions: {
                responsive: true
            },
            isloading: false,
            tong_tien: '',
            tong_tien_thu: {},
            tong_tien_chi: {},
            chenh_lech: '',
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
        getdatachart() {

            axios.get('http://127.0.0.1:8000/api/canhan/baocao')
                .then((res) => {
                    // clone object để reactive
                    this.chartData = {
                        labels: res.data.danh_muc_thu_chi,
                        datasets: [
                            {
                                backgroundColor: "#FFDE59",
                                data: res.data.list_tien_thu_chi,
                            },
                        ],
                    };
                    this.isloading = true;
                    this.chenh_lech = res.data.chenh_lech;
                })
                .catch((err) => console.log(err));
        },
    },

    mounted() {
        this.getNo();
        this.getdatachart();
    }
}
</script>
<style></style>