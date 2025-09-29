<template>
    <div class="row">
        <!-- Danh sách tiết kiệm -->
        <div class="col-6 me-5">
            <h5>Tiết kiệm cá nhân</h5>
            <div class="card" style="background-color: #DDE8F5; border-radius: 20px; height: 560px; overflow-y: auto;">
                <div class="card-body">
                    <template v-for="(v, index) in l_tietkiem" :key="index">
                        <div class="card mb-3" style="border-radius: 20px;">
                            <div class="card-body">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <td><b>Tên tiết kiệm:</b> {{ v.ten_tiet_kiem }}</td>
                                            <td><b>Ngày bắt đầu:</b> {{ v.ngay_bat_dau }}</td>
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>
                                            <td><b>Lãi suất:</b> {{ v.lai_suat }}</td>
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
                                            v-on:click="Object.assign(sua_tietkiem, v)" data-bs-toggle="modal"
                                            data-bs-target="#updateModal">Sửa khoản tiết kiệm</button>
                                    </li>
                                    <li>
                                        <button class="btn ms-2 mt-2" v-on:click="Object.assign(xoa_tietkiem, v)"
                                            data-bs-toggle="modal" data-bs-target="#delModal"
                                            style="background-color: #DDE8F5; border-radius: 15px; width: 90%;">Xóa
                                            khoản tiết kiệm</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <!-- Thêm tiết kiệm -->
        <div class="col-4 ms-5">
            <h5>Thêm tiết kiệm cá nhân</h5>
            <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="maTietKiem" class="form-label">Tên Tiết kiệm</label>
                        <input v-model="them_tietkiem.ten_tiet_kiem" type="text" class="form-control" id="maTietKiem"
                            placeholder="Nhập mã tiết kiệm">
                    </div>
                    <div class="mb-3">
                        <label for="startDate" class="form-label">Ngày bắt đầu</label>
                        <input v-model="them_tietkiem.ngay_bat_dau" type="date" class="form-control" id="startDate">
                    </div>
                    <div class="mb-3">
                        <label for="endDate" class="form-label">Ngày kết thúc</label>
                        <input v-model="them_tietkiem.ngay_ket_thuc" type="date" class="form-control" id="endDate">
                    </div>
                    <div class="mb-3">
                        <label for="interestRate" class="form-label">Lãi suất (%)</label>
                        <input v-model="them_tietkiem.lai_suat" type="number" class="form-control" id="interestRate"
                            placeholder="Nhập lãi suất">
                    </div>
                    <div class="mb-3">
                        <label for="maTaiKhoan" class="form-label">Ghi chú</label>
                        <textarea v-model="them_tietkiem.ghi_chu" type="text" class="form-control" id="maTaiKhoan"
                            placeholder="Nhập mã tài khoản">
                </textarea>
                    </div>
                    <div class="text-end"><button class="btn btn-primary" v-on:click="themTietkiem()">Thêm</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="background: #DDE8F5;">
            <div>
                <div class="row">
                    <div class="col-lg-4 mt-3">

                        <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                            <div class="card-body">
                                <p>Ngày Bắt đầu</p>
                                <input type="date" class="form-control" id="startDate">
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-4 mt-3 ">
                        <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                            <div class="card-body">
                                <p>Ngày Kết Thúc</p>
                                <input type="date" class="form-control" id="endDate">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-3 ">
                        <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                            <div class="card-body">
                                <h5>Ngân Sách</h5>
                                <p class="mt-3"> VNĐ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-lg-12">
                        <Bar v-if="isloading == true" id="my-chart-id" :options="chartOptions" :data="chartData" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-5">
                        <div class="mb-3 mr-5">
                            <div class="card">
                                <div class="card-body " style="background-color: #DDE9F9">
                                    <div class="card mt-3">
                                        <div class="card-body">
                                            <label>Tóm Tắt</label> <br>
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
                <div class="row">
                    <div class="row row-cols-auto g-3">
                        <div class="col-lg-4 mb-3">
                            <button type="button" class="btn btn-primary px-5" v-on:click="hienThiTongThu()">Tổng
                                Thu</button>
                        </div>
                        <div class="col-lg-4 mb-3">
                            <button type="button" class="btn btn-danger px-5" v-on:click="hienThiTongChi()">Tổng
                                Chi</button>
                        </div>
                        <div class="col-lg-4 mb-3">
                            <button type="button" class="btn btn-success px-5">Chênh Lệch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Biểu đồ -->
        <div class="card mt-4" style="background: #DDE8F5;">
            <div class="row">
                <div class="col-lg-12">
                    <Bar v-if="isloading == true" :data="chartData" :options="chartOptions" />
                </div>
            </div>
        </div>

        <!-- Modal Xóa -->
        <div class="modal fade" id="delModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5"> Xóa khoản tiết kiệm </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <p>Bạn có chắc muốn xóa khoản tiết kiệm này không?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button v-on:click="xoaTietkiem()" type="button" data-bs-dismiss="modal"
                            class="btn btn-danger">Xác
                            nhận</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Sửa -->
        <div class="modal fade" id="updateModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5"> Sửa khoản tiết kiệm </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Mã tiết kiệm</label>
                            <input v-model="sua_tietkiem.ma_tiet_kiem" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Mã tài khoản</label>
                            <input v-model="sua_tietkiem.ma_tai_khoan" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Ngày bắt đầu</label>
                            <input v-model="sua_tietkiem.ngay_bat_dau" type="date" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Ngày kết thúc</label>
                            <input v-model="sua_tietkiem.ngay_ket_thuc" type="date" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Lãi suất (%)</label>
                            <input v-model="sua_tietkiem.lai_suat" type="number" class="form-control">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button v-on:click="suaTietkiem()" type="button" data-bs-dismiss="modal"
                            class="btn btn-danger">Xác
                            nhận</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    components: { Bar },
    data() {
        return {
            isloading: false,
            l_tietkiem: [],
            them_tietkiem: { ten_tiet_kiem: '', ngay_bat_dau: '', ngay_ket_thuc: '', lai_suat: '', ghi_chu: '' },
            xoa_tietkiem: { ma_tiet_kiem: '', ten_tiet_kiem: '', ngay_bat_dau: '', ngay_ket_thuc: '', lai_suat: '', ghi_chu: '' },
            sua_tietkiem: { ma_tiet_kiem: '', ten_tiet_kiem: '', ngay_bat_dau: '', ngay_ket_thuc: '', lai_suat: '', ghi_chu: '' },
            chartOptions: {
                responsive: true,
                plugins: {
                    legend: { display: true },
                    title: { display: true, text: 'Biểu đồ tiết kiệm' }
                }
            },
            chartData: {
                labels: ['Tháng 1', 'Tháng 2', 'Tháng 3'],
                datasets: [
                    {
                        label: 'Tiết kiệm',
                        backgroundColor: '#42A5F5',
                        data: [100, 200, 150]
                    }
                ]
            }
        }
    },
    methods: {
        getTietkiem() {
            axios.get('http://127.0.0.1:8000/api/canhan/tietkiem/data', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                },
            })
                .then((res) => {
                    this.l_tietkiem = res.data.data;
                })
                .catch(res => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                });
        },
        themTietkiem() {
            axios
                .post('http://127.0.0.1:8000/api/canhan/tietkiem/them', this.them_tietkiem, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                    },
                })
                .then((res) => {
                    if (res.data.status) {
                        this.getTietkiem();
                        this.$toast.success(res.data.message || "Thêm tiết kiệm thành công!");
                        this.them_tietkiem = { ten_tiet_kiem: '', ngay_bat_dau: '', ngay_ket_thuc: '', lai_suat: '', ghi_chu: '' };
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
        suaTietkiem() {
            axios.post('http://127.0.0.1:8000/api/canhan/tietkiem/sua', this.sua_tietkiem)
                .then(res => { if (res.data.status) this.getTietkiem() })
        },
        xoaTietkiem() {
            axios.post('http://127.0.0.1:8000/api/canhan/tietkiem/xoa', this.xoa_tietkiem)
                .then(res => { if (res.data.status) this.getTietkiem() })
        },
    },
    mounted() {
        this.getTietkiem();
    }
}
</script>
