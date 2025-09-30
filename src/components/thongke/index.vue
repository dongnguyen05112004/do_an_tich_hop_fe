<template>
    <div class="container">

        <div class="row">
            <h3>Thống Kê</h3>
        </div>
        <div class="row">
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-6">

                        <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                            <div class="card-body">
                                <p>Ngày Bắt đầu</p>
                                <input type="date" class="form-control mt-2 mb-2" v-model="day_begin">
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-6">
                        <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                            <div class="card-body">
                                <p>Ngày Kết Thúc</p>
                                <input type="date" class="form-control mt-2 mb-2" v-model="day_end">
                            </div>
                        </div>
                    </div>

                </div>
                <button type="button" class="btn btn-primary px-5" v-on:click="getdatachart()">Thống kê</button>
            </div>
            <div class="col-lg-4">
                <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                    <div class="card-body">
                        <p class="mt-3">Ngân Sách: {{ tong_tien }} VNĐ</p>
                        <p>Tổng thu nhập: {{ tong_tien_thu }} VNĐ</p>
                        <p>Tổng chi tiêu: {{ tong_tien_chi }} VNĐ</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-lg-12">
                <Bar v-if="isloading == true" id="my-chart-id" :options="chartOptions" :data="chartData" />
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="d-flex justify-content-between">

            <button type="button" class="btn btn-primary px-5" v-on:click="hienThichitiet()">Báo Cáo Chi Tiết</button>

            <button type="button" class="btn btn-danger px-5" v-on:click="goBaoCaoThuNhap">Báo Cáo Thu Nhập</button>

            <button type="button" class="btn btn-success px-5" v-on:click="goBaoCaoChiTieu">Báo Cáo Chi Tiêu</button>

            <button type="button" class="btn btn-success px-5" v-on:click="goBaoCaoTietKiem">Báo Cáo Tiết Kiệm</button>

            <button type="button" class="btn btn-success px-5" v-on:click="goBaoCaoNo">Báo Cáo Nợ</button>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-lg-12">
            <div class="mb-3 mr-5">
                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="chi_tiet"></textarea>
            </div>
        </div>
    </div>





</template>
<script>
import axios from 'axios'
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
            chi_tiet: '',
            tong_tien: '',
            tong_tien_thu: {},
            tong_tien_chi: {},
            chenh_lech: '',
            day_begin: '',
            day_end: ''
        }


    },


    mounted() {
        this.getdatachart();
    },
    methods: {

        getdatachart() {
            if (!this.day_begin || !this.day_end) {
                alert("Vui lòng chọn ngày bắt đầu và ngày kết thúc!");
                return;
            }
            axios.get('http://127.0.0.1:8000/api/canhan/baocao')
                .then((res) => {
                    // Dữ liệu chart
                    this.chartData.labels = res.data.danh_muc
                    this.chartData.datasets[0].data = res.data.so_tien
                    this.isloading = true

                    // Dữ liệu tổng hợp
                    this.tong_tien_thu = res.data.tong_tien_thu
                    this.tong_tien_chi = res.data.tong_tien_chi
                    this.chenh_lech = res.data.chenh_lech
                    this.tong_tien = res.data.chenh_lech  // Ngân sách = chênh lệch
                })
        },
        hienThichitiet() {
            axios.get('http://127.0.0.1:8000/api/canhan/baocao')
                .then((res) => {
                    this.chi_tiet =
                        "Tổng thu nhập: " + res.data.tong_tien_thu + " VNĐ\n" +
                        "Tổng chi tiêu: " + res.data.tong_tien_chi + " VNĐ\n" +
                        "Chênh lệch: " + res.data.chenh_lech + " VNĐ";
                })
        },
        goBaoCaoThuNhap() {
            // Nếu bạn dùng Vue Router
            this.$router.push('/thunhap')
        },
        goBaoCaoChiTieu() {
            // Nếu bạn dùng Vue Router
            this.$router.push('/chitieu')
        }, goBaoCaoTietKiem() {
            // Nếu bạn dùng Vue Router
            this.$router.push('/tietkiem')
        }, goBaoCaoNo() {
            // Nếu bạn dùng Vue Router
            this.$router.push('/no')
        },
    }
}
</script>
<style></style>