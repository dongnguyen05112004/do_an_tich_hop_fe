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
                        <div class="input-group">
                            <select class="form-select" id="inputGroupSelect04"
                                aria-label="Example select with button addon">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-lg-6">
                <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                    <div class="card-body">
                        <p>Ngày Kết Thúc</p>
                        <div class="input-group">
                            <select class="form-select" id="inputGroupSelect04"
                                aria-label="Example select with button addon">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="row">
             <div class="col-lg-6">
                <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                    <div class="card-body">
                        <p>Thành viên</p>
                        <div class="input-group">
                            <select class="form-select" id="inputGroupSelect04"
                                aria-label="Example select with button addon">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 mt-5 text-end" ><button type="button" class="btn btn-primary px-5">Thống kê</button></div>
             
        </div>
        
            </div>
            <div class="col-lg-4">
                <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                    <div class="card-body">
                        <p class="mt-3">Ngân Sách: {{ chenh_lech }} VNĐ</p>
                        <p>Tổng thu nhập: 1234131 VNĐ</p>
                        <p>Tổng chi tiêu: 1111111 VNĐ</p>
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
            
                <button type="button" class="btn btn-primary px-5" v-on:click="hienThiTongThu()">Báo Cáo Chi Tiết</button>
            
                <button type="button" class="btn btn-danger px-5" v-on:click="hienThiTongChi()">Báo Cáo Thu Nhập</button>
            
                <button type="button" class="btn btn-success px-5" >Báo Cáo Chi Tiêu</button>
            
                <button type="button" class="btn btn-success px-5" >Báo Cáo Tiết Kiệm</button>
            
                <button type="button" class="btn btn-success px-5" >Báo Cáo Nợ</button>
        </div>
    </div>
   
<div class="row mt-3">
        <div class="col-lg-12">
            <div class="mb-3 mr-5">
                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="tong_tien"></textarea>
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
            tong_tien: '',
            tong_tien_thu: {},
            tong_tien_chi: {},
            chenh_lech: '',

        }


    },


    mounted() {
        this.getdatachart();
    },
    methods: {

        getdatachart() {

            axios.get('http://127.0.0.1:8000/api/canhan/baocao')
                .then((res) => {
                    this.chartData.labels = res.data.danh_muc_thu_chi;
                    this.chartData.datasets[0].data = res.data.list_tien_thu_chi;
                    this.isloading = true;
                    this.chenh_lech = res.data.chenh_lech;
                })
        },
        hienThiTongThu() {
            axios.get('http://127.0.0.1:8000/api/canhan/baocao')
                .then((res) => {
                    this.tong_tien = res.data.tong_tien_thu;


                })

        },
        hienThiTongChi() {
            axios.get('http://127.0.0.1:8000/api/canhan/baocao')
                .then((res) => {
                    this.tong_tien = res.data.tong_tien_chi;
                })

        },
        chenhlech() {
            axios.get('http://127.0.0.1:8000/api/canhan/baocao')
                .then((res) => {
                    this.tong_tien = res.data.chenh_lech;
                })
        }
    },
}
</script>
<style></style>