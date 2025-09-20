<template>
    <div class="container">
        <div class="row justify-content-center align-items-center min-vh-100">
            <div class="col-md-6 col-lg-4">
                <div class="card border-0 shadow">
                    <div class="card-body p-4">
                        <div class="text-center mb-4">
                            <h3 class="fw-bold">Đăng ký</h3>
                        </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Tên người dùng</label>
                                <input v-model="them_taikhoan.ten_nguoi_dung"  type="text" class="form-control" >
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Tên tài khoản</label>
                                <input v-model="them_taikhoan.ten_tai_khoan" type="text" class="form-control" >
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input v-model="them_taikhoan.email" type="email" class="form-control" >
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Mật khẩu</label>
                                <input v-model="them_taikhoan.mat_khau" type="password" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Xác nhận mật khẩu</label>
                                <input v-model="them_taikhoan.re_mat_khau" type="password" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Số điện thoại</label>
                                <input v-model="them_taikhoan.sdt" class="form-control" type="text" >
                            </div>
                        

                            <button v-on:click="dangKyTaiKhoan()"  class="btn btn-primary w-100 mb-3">
                                Đăng ký
                            </button>
                            <div class="text-center">
                                <a class="text-decoration-none small me-2">Đăng ký bằng google và facebook</a>
                                <a href="#" class="text-decoration-none small me-2"><i class="fa-brands fa-google"></i></a>
                                <span class="text-muted">|</span>
                                <a href="#" class="text-decoration-none small me-2"><i class="fa-brands fa-facebook"></i></a>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import axios from 'axios';
export default {
    data() {
        return {
            them_taikhoan: {
                ten_nguoi_dung: '',
                ten_tai_khoan: '',
                email: '',
                mat_khau: '',
                sdt: '',
                re_mat_khau: ''
            },
        }
    },
    methods: {
            dangKyTaiKhoan() {
            axios
                .post("http://127.0.0.1:8000/api/dang-ky", this.them_taikhoan)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.them_taikhoan = {ten_nguoi_dung: '',
                                            ten_tai_khoan: '',
                                            email: '',
                                            mat_khau: '',
                                            sdt: '',
                                            re_mat_khau: ''}
                        this.$router.push('/home');
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        }
    }
}


</script>
<style>
</style>