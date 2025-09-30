<template>
    <div>
        <div class="container my-4">
            <div class="row">
                <!-- Danh mục hiện tại -->
                <div class="col-md-6">
                    <div class="p-3 bg-light rounded shadow-sm">
                        <h5 class="fw-bold mb-3">Danh mục hiện tại</h5>

                        <!-- Header -->
                        <div class="row align-items-center py-2 border-bottom">

                            <div class="col-lg-4">
                                <p>Tên danh mục</p>
                            </div>
                            <div class="col-lg-4">
                                <p class="text-center">Thu/Chi</p>
                            </div>
                            <div class="col-lg-4"></div>



                        </div>

                        <!-- Danh mục list -->
                        <div class="mt-3">
                            <div
                            class="row align-items-center py-2 border-bottom"
                            v-for="item in data"
                            :key="item.id"
                            >
                            <!-- Cột 1: Tên danh mục -->
                            <div class="col-lg-4">
                                <p class="mb-0">{{ item.ten_danh_muc }}</p>
                            </div>

                            <!-- Cột 2: Ký hiệu -->
                            <div class="col-lg-4 text-center">
                                <span
                                v-if="item.ten_loai_gd === 'Thu Nhập'"
                                class="badge bg-success fs-6"
                                >+</span
                                >
                                <span
                                v-else-if="item.ten_loai_gd === 'Chi Tiêu'"
                                class="badge bg-danger fs-6"
                                >-</span
                                >
                            </div>

                                <!-- Cột 3: Dropdown menu -->
                                <div class="col-lg-4 text-end">
                                    <div class="dropdown">
                                        <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                            data-bs-toggle="dropdown">
                                            <i class="bx bx-dots-horizontal-rounded font-22"></i>
                                        </div>

                                        <ul class="dropdown-menu">
                                            <li>
                                                <button class="btn ms-2"
                                                    style="background-color: #dde8f5; border-radius: 15px; width: 90%;"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#updateModal">
                                                    Sửa danh mục
                                                </button>
                                            </li>
                                            <li>
                                                <button class="btn ms-2 mt-2" 
                                                    data-bs-toggle="modal" data-bs-target="#delModal"
                                                    style="background-color: #dde8f5; border-radius: 15px; width: 90%;">
                                                    Xóa danh mục
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Thêm danh mục -->
                <div class="col-md-6">
                    <div class="p-3 bg-light rounded shadow-sm">
                        <h5 class="fw-bold mb-3">Thêm danh mục</h5>

                        <div class="mb-3">
                            <label class="form-label">Tên danh mục</label>
                            <select class="form-select">
                                <option>Chọn danh mục...</option>
                                <option>Ăn uống</option>
                                <option>Học tập</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Loại danh mục</label>
                            <input type="text" class="form-control" placeholder="Nhập loại..." />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Mô tả</label>
                            <textarea rows="3" class="form-control" placeholder="Nhập mô tả..."></textarea>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Số tiền</label>
                            <input type="number" class="form-control" placeholder="Nhập số tiền..." />
                        </div>

                        <button class="btn btn-primary w-100" v-on:click="addDanhMuc()">Thêm</button>
                    </div>
                </div>
            </div>




            <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Xóa danh mục </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-primary">
                        <p>Bạn có chắc muốn xóa danh mục này không?</p>
                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn  mx-2 " style="background: #BBD2F4;" v-on:click="deleteDanhMuc()">Xóa</button>
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
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Sửa danh mục </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                            <label class="form-label">Tên danh mục</label>
                            <select class="form-select">
                                <option>Chọn danh mục...</option>
                                <option>Ăn uống</option>
                                <option>Học tập</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Loại danh mục</label>
                            <input type="text" class="form-control" placeholder="Nhập loại..." />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Mô tả</label>
                            <textarea rows="3" class="form-control" placeholder="Nhập mô tả..."></textarea>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Số tiền</label>
                            <input type="number" class="form-control" placeholder="Nhập số tiền..." />
                        </div>


                </div>
                <div class="modal-footer justify-content-center">
                    <button  type="button" data-bs-dismiss="modal" class="btn btn-danger" v-on:click="updateDanhMuc()">Xác
                        nhận</button>
                </div>
            </div>
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
            data: [],
            taodanhmuc:{ma_tai_khoan:"",
                ten_danh_muc: "",
      ma_loai_GD: "",
      mo_ta: "",
      so_tien: 0
            },
            suadanhmuc:{ma_tai_khoan:"",
                ten_danh_muc: "",
      ma_loai_GD: "",
      mo_ta: "",
      so_tien: 0
            },
            xoadanhmuc:{},
        }


    },
    mounted() {
        this.getdata();
    },
    methods: {
        getdata() {
            axios.get('http://127.0.0.1:8000/api/danhmuc', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                },
            })
                .then((res) => {
                    this.data = res.data.danhmuc ;
                })
        },
        // thêm
    addDanhMuc() {
      axios.post("http://127.0.0.1:8000/api/themdanhmuc", this.taodanhmuc,{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                },
            })
      .then((res) => {
            if (res.data.status) {
                        this.getdata();
                        this.$toast.success(res.data.message);
                    }
      })
      .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
    },
    
    
    updateDanhMuc() {
      axios.post("http://127.0.0.1:8000/api/suadanhmuc", this.suadanhmuc,{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                },
            })
      .then(res => {
                    this.getdata();
                    this.$toast.success(res.data.message);
      })
      .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
    },
    // xóa
    
    deleteDanhMuc() {
      axios.post("http://127.0.0.1:8000/api/xoadanhmuc",this.xoadanhmuc ,{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("tai_khoan_login"),
                },
            })
      .then((res) => {
                    if (res.data.status) {
                        this.getdata();
                        this.$toast.success(res.data.message);
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
<style></style>