<template>
    <div class="wrapper">
        <!--start header wrapper-->
        <div class="header-wrapper">
            <!--start header -->
            <header>
                <div class="topbar d-flex align-items-center" style="background-color: #DDE8F5;">
                    <nav class="navbar navbar-expand">
                        <div class="top-menu ms-auto">
                            <nav class="navbar navbar-expand-xl w-100">
                                <!-- Nút logo/trang chính sang trái -->
                                <div class="brand ms-2">
                                    <button class="btn" @click="goToThuChicanhan"
                                        style="background-color: #fff; border-radius: 20px;">
                                        Quản lý thu chi cá nhân
                                    </button>
                                </div>
                                <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                                    <li class="nav-item mt-3">
                                        <a class="nav-link" href="/home">
                                            <div class="menu-title">
                                                <h6>Trang Chủ</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-3">
                                        <a class="nav-link" href="/thunhapgiadinh">
                                            <div class="menu-title">
                                                <h6>Thu nhập </h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-3">
                                        <a class="nav-link" href="/chitieugiadinh">
                                            <div class="menu-title">
                                                <h6>Chi tiêu </h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-3">
                                        <a class="nav-link" href="/quanlynhomgiadinh">
                                            <div class="menu-title">
                                                <h6>Quản lý nhóm gia đình</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-3">
                                        <a class="nav-link" href="/thongkegiadinh">
                                            <div class="menu-title">
                                                <h6>Thống kê</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-3">
                                        <a class="nav-link" href="/ngansachgiadinh">
                                            <div class="menu-title">
                                                <h6>Ngân sách</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-3">
                                        <a class="nav-link" href="/nogiadinh">
                                            <div class="menu-title">
                                                <h6>Vay nợ</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item mt-3">
                                        <a class="nav-link" href="/tietkiemgiadinh">
                                            <div class="menu-title">
                                                <h6>Tiết kiệm</h6>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item dropdown mt-3">
                                        <a style="margin-top: -8.95px;" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <h6 style="display: inline-block;">Tùy chọn</h6>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Quản lý Danh mục</a></li>
                                            <li><a class="dropdown-item" href="#">Quản lý Ngân Sách</a></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="/thanhviengiadinh">Thành viên gia đình</a></li>
                                        </ul>
                                    </li>
                                    <div class="user-box dropdown">
                                        <div class="d-flex align-items-center">
                                            <img v-bind:src="user.avatar" class="rounded-circle"
                                                width="50" alt="">
                                            <div class="ms-2">
                                                <li class="nav-item ">
                                                    <a class="nav-link" href="/profile">
                                                        <h6 class="mb-0">{{ user.ten_tai_khoan }}</h6>
                                                    </a>
                                                </li>
                                                <small class="ms-2">Đăng xuất</small>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </nav>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
        <!--end header wrapper-->
        <!--start page wrapper -->
        <div class="page-wrapper" style="background-color: #fff; min-height: 100vh; margin-top: 60px;">

            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
        <!--end page wrapper -->
        <!--start overlay-->
        <div class="overlay toggle-icon"></div>
        <!--end overlay-->
        <!--Start Back To Top Button--> <a href="javaScript:;" class="back-to-top"><i
                class='bx bxs-up-arrow-alt'></i></a>
        <!--End Back To Top Button-->
        <footer class="page-footer">
            <p class="mb-0">Đông - Quang - Trọng - Đức - Trang</p>
        </footer>
    </div>

</template>
<script>
import axios from "axios";
import "../../assets/js/bootstrap.bundle.min.js";
import "../../assets/js/jquery.min.js";
import "../../assets/plugins/metismenu/js/metisMenu.min.js";
import "../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
import "../../assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js";
import "../../assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js";
import "../../assets/plugins/chartjs/js/Chart.min.js";
import "../../assets/plugins/chartjs/js/Chart.extension.js";
import "../../assets/js/index.js";
import "../../assets/js/app.js";
import "../../assets/js/pace.min.js";
export default {
    data() {
        return {
            user : {},
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
                        console.log(res.data.data);

                        this.user = res.data.data;
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        },
        goToThuChicanhan() {
            this.$router.push('/canhan'); // thay bằng path bạn cấu hình trong router
        },
        goToThuChigiadinh() {
            this.$router.push('/giadinh'); // thay bằng path bạn cấu hình trong router
        }
    }
}
</script>
<style>
@import "../../assets/plugins/simplebar/css/simplebar.css";
@import "../../assets/plugins/vectormap/jquery-jvectormap-2.0.2.css";
@import "../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../assets/plugins/metismenu/css/metisMenu.min.css";
@import "../../assets/css/pace.min.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/bootstrap-extended.css";
@import "../../assets/css/app.css";
@import "../../assets/css/icons.css";
@import "../../assets/css/dark-theme.css";
@import "../../assets/css/semi-dark.css";
@import "../../assets/css/header-colors.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css");

.navbar>.d-flex {
    display: flex;
    justify-content: space-between;
    /* Trái - Giữa - Phải */
    align-items: center;
    width: 100%;
}

.brand {
    flex: 0 0 auto;
}

.navbar-nav {
    flex: 1;
}

.user-box {
    flex: 0 0 auto;
}
</style>