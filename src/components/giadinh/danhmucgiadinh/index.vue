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
                            <div class="row align-items-center py-2 border-bottom">
                                <!-- Cột 1: Tên danh mục -->
                                <div class="col-lg-4">
                                    <p class="mb-0">Ăn uống</p>
                                </div>

                                <!-- Cột 2: Ký hiệu (+ / -) -->
                                <div class="col-lg-4 text-center">
                                    <span class="badge bg-success fs-6">+</span>
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
                                                    v-on:click="Object.assign(sua_no, v)" data-bs-toggle="modal"
                                                    data-bs-target="#updateModal">
                                                    Sửa danh mục
                                                </button>
                                            </li>
                                            <li>
                                                <button class="btn ms-2 mt-2" v-on:click="Object.assign(xoa_no, v)"
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

                        <button class="btn btn-primary w-100">Thêm</button>
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
                    <button v-on:click="suaNo()" type="button" data-bs-dismiss="modal" class="btn btn-danger">Xác
                        nhận</button>
                </div>
            </div>
        </div>
    </div>

        </div>
    </div>



    

</template>
<script>
export default {

}
</script>
<style></style>