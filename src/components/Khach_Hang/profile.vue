<template>
    <div>
        <div class="alert alert-primary" role="alert">
            <div class="row">
                <div class="col-lg-3">
                    <div class="card ">
                        <div class="card-body text-center">
                            <img v-bind:src="user.avatar" style="border-radius: 50%; width:100px ; height: 100px;"
                                alt="user avatar">
                            <h5 class="mt-3">{{ user.ten_tai_khoan }}</h5>
                            <span class="text-start">
                                <p>Email : {{ user.email }}</p>
                                <p>Password:
                                    <span v-if="showPassword">{{ user.mat_khau }}</span>
                                    <span v-else>••••••••</span>
                                    <i :class="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash' "
                                        style="cursor:pointer" @click="showPassword = !showPassword" class="ms-2"></i>
                                </p>
                                <p>SĐT:{{ user.sdt }}</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-9">
                    <div class="card">
                        <div class="card-body p-4">
                            <ul class="nav nav-tabs nav-fill mb-4">
                                <li class="nav-item">
                                    <a class="nav-link active" data-bs-toggle="tab" href="#profile">
                                        <i class="fa-solid fa-user me-2"></i>Thông tin cá nhân
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" href="#password">
                                        <i class="fa-solid fa-lock me-2"></i>Đổi mật khẩu
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="profile">
                                    <div class="row g-4">
                                        <div class="col-lg-12">
                                            <div class="card border-0 shadow-sm h-100">
                                                <div class="card-body p-4">
                                                    <h3 class="card-title mb-4">Thông tin cá nhân</h3>
                                                    <form>
                                                        <div class="row g-3">
                                                            <div class="col-md-6">
                                                                <label class="form-label">Họ và tên</label>
                                                                <input v-model="formUser.ten_tai_khoan" type="text"
                                                                    class="form-control" placeholder="Nhập họ và tên">
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label class="form-label">Email</label>
                                                                <input v-model="formUser.email" disabled type="email"
                                                                    class="form-control"
                                                                    placeholder="example@email.com">
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label class="form-label">Số điện thoại</label>
                                                                <input v-model="formUser.sdt" type="tel"
                                                                    class="form-control" placeholder="0123 456 789">
                                                            </div>
                                                            <div class="col-6">
                                                                <label class="form-label">Ảnh đại diện</label>
                                                                <input v-model="formUser.avatar" type="text"
                                                                    class="form-control" placeholder="">
                                                            </div>
                                                        </div>
                                                        <div class="text-end mt-4">
                                                            <button type="button"
                                                                class="btn btn-light me-2">Huỷ</button>
                                                            <button v-on:click="updateProfile()" type="button"
                                                                class="btn btn-primary px-4">Lưu thay
                                                                đổi</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="password">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            <div class="card border-0 shadow-sm">
                                                <div class="card-body p-4">
                                                    <h5 class="card-title mb-4">Đổi mật khẩu</h5>

                                                    <div class="mb-3">
                                                        <label class="form-label fw-semibold">Mật khẩu hiện tại</label>
                                                        <input v-model="doipassword.old_mat_khau" type="password"
                                                            class="form-control" placeholder="Nhập mật khẩu hiện tại">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label fw-semibold">Mật khẩu mới</label>
                                                        <input v-model="doipassword.mat_khau" type="password"
                                                            class="form-control" placeholder="Nhập mật khẩu mới">
                                                    </div>
                                                    <div class="mb-4">
                                                        <label class="form-label fw-semibold">Xác nhận mật khẩu
                                                            mới</label>
                                                        <input v-model="doipassword.re_mat_khau" type="password"
                                                            class="form-control" placeholder="Nhập lại mật khẩu mới">
                                                    </div>
                                                    <button v-on:click="updatePassword()" type="submit"
                                                        class="btn btn-primary px-4">Cập nhật mật
                                                        khẩu</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
import axios from 'axios'
export default {
    data() {
        return {
            user: {},
            formUser: {},
            showPassword: false,
            doipassword: {
                old_mat_khau: '',
                mat_khau: '',
                re_mat_khau: ''
            }
        };
    },
    mounted() {
        this.layThongTin();
    },
    methods: {
        layThongTin() {
            var token = localStorage.getItem("tai_khoan_login");
            axios
                .get("http://127.0.0.1:8000/api/khach-hang/get-data", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
                .then((res) => {
                    if (res.data.status) {
                        this.user = res.data.data;
                        this.formUser = {...res.data.data};
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        },
        updateProfile() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/sua-profile', this.formUser, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                    },
                })
                .then((res) => {
                    if (res.data.status) {
                        
                        this.user = {...this.formUser};
                        this.$toast.success(res.data.message);
                    }
                    else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },
        updatePassword() {
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/doi-password", this.doipassword, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                    },
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.doipassword = {
                            old_mat_khau: '',
                            mat_khau: '',
                            re_mat_khau: ''
                        }
                        this.layThongTin();
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },
    },
}
</script>
<style>
.nav-item .nav-link {
    color: #666;
}

.nav-item .nav-link:hover {
    background-color: #b6d4fe;
    transition: background-color 0.3s ease;
}

.nav-item .nav-link.active {
    background-color: #0d6efd;
    color: white;
}
</style>