<template>
    <div>
        <div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="col-lg-12">
                        <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                            <div class="card-body">
                                <ul class="list-group" style="border-radius: 20px;">
                                    <li class="list-group-item">
                                        <h5>Ngân Sách Hiện Tại</h5>
                                    </li>
                                    <li class="list-group-item">
                                        <p><i class="me-1"></i> Thu Nhập <span class="float-end"></span></p>
                                        <div class="progress" style="height: 5px;">
                                            <div class="progress-bar bg-gradient-moonlit" role="progressbar"
                                                style="width: 50%"></div>
                                        </div>
                                        <p>+10,000,000 VNĐ</p>
                                    </li>
                                    <li class="list-group-item">
                                        <p class="mt-3"><i class="me-1"></i> Chi Tiêu <span class="float-end"></span>
                                        </p>
                                        <div class="progress" style="height: 5px;">
                                            <div class="progress-bar bg-gradient-ibiza" role="progressbar"
                                                style="width: 65%"></div>
                                        </div>
                                        <p>+5,000,000 VNĐ</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card" style="background-color: #DDE8F5; border-radius: 20px;">
                        <div class="card-body">
                            <div class="card mt-3 " style="border-radius: 20px;">
                                <div class="card-body">
                                    <div class="col-lg-11 d-flex align-items-center ">
                                        <div class="col-lg-4">
                                            <p class="mb-0">Ăn Uống: 500,000 VNĐ</p>
                                        </div>
                                        <div class="col-lg-4">Đã Chi: 500,000 VNĐ</div>
                                        <div class="col-lg-4">Còn Lại: 1,500,000 VNĐ</div>
                                        <div class="col-lg-0">
                                            <div class="dropdown ms-auto me-3">
                                                <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                                    data-bs-toggle="dropdown"> <i
                                                        class="bx bx-dots-horizontal-rounded font-22"></i>
                                                </div>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <button class="btn ms-2"
                                                            style="background-color: #DDE8F5; border-radius: 15px; width: 90%;"
                                                            v-on:click="Object.assign(sua_no, v)" data-bs-toggle="modal"
                                                            data-bs-target="#sua">Sửa ngân sách
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button class="btn ms-2 mt-2"
                                                            v-on:click="Object.assign(xoa_no, v)" data-bs-toggle="modal"
                                                            data-bs-target="#xoa"
                                                            style="background-color: #DDE8F5; border-radius: 15px; width: 90%;">Xóa
                                                            ngân sách</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" id="w-chart1"></div>
                                </div>
                            </div>
                            <div class="card mt-3 " style="border-radius: 20px;">
                                <div class="card-body">
                                    <div class="col-lg-11 d-flex align-items-center ">
                                        <div class="col-lg-4">
                                            <p class="mb-0">Du lịch: 50,000 VNĐ</p>
                                        </div>
                                        <div class="col-lg-4">Đã Chi: 500,000 VNĐ</div>
                                        <div class="col-lg-4">Còn Lại: 1,500,000 VNĐ</div>
                                        <div class="col-lg-0">
                                            <div class="dropdown ms-auto me-3">
                                                <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                                    data-bs-toggle="dropdown"> <i
                                                        class="bx bx-dots-horizontal-rounded font-22"></i>
                                                </div>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <button class="btn ms-2"
                                                            style="background-color: #DDE8F5; border-radius: 15px; width: 90%;"
                                                            v-on:click="Object.assign(sua_no, v)" data-bs-toggle="modal"
                                                            data-bs-target="#sua">Sửa ngân sách
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button class="btn ms-2 mt-2"
                                                            v-on:click="Object.assign(xoa_no, v)" data-bs-toggle="modal"
                                                            data-bs-target="#xoa"
                                                            style="background-color: #DDE8F5; border-radius: 15px; width: 90%;">Xóa
                                                            ngân sách</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" id="w-chart1"></div>
                                </div>
                            </div>
                            <div class="card mt-3 " style="border-radius: 20px;">
                                <div class="card-body">
                                    <div class="col-lg-11 d-flex align-items-center ">
                                        <div class="col-lg-4">
                                            <p class="mb-0">Chữa Bệnh: 150,000 VNĐ</p>
                                        </div>
                                        <div class="col-lg-4">Đã Chi: 500,000 VNĐ</div>
                                        <div class="col-lg-4">Còn Lại: 1,500,000 VNĐ</div>
                                        <div class="col-lg-0">
                                            <div class="dropdown ms-auto me-3">
                                                <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer"
                                                    data-bs-toggle="dropdown"> <i
                                                        class="bx bx-dots-horizontal-rounded font-22"></i>
                                                </div>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <button class="btn ms-2"
                                                            style="background-color: #DDE8F5; border-radius: 15px; width: 90%;"
                                                            v-on:click="Object.assign(sua_no, v)" data-bs-toggle="modal"
                                                            data-bs-target="#sua">Sửa ngân sách
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button class="btn ms-2 mt-2"
                                                            v-on:click="Object.assign(xoa_no, v)" data-bs-toggle="modal"
                                                            data-bs-target="#xoa"
                                                            style="background-color: #DDE8F5; border-radius: 15px; width: 90%;">Xóa
                                                            ngân sách</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="" id="w-chart1"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="col-lg-6">
                    <div class="card form-control" style="background-color: #DDE8F5; border-radius: 20px;">
                        <h5 class="mt-3">Thêm Ngân Sách</h5>
                        <p class="mt-3">Tên Ngân Sách</p>
                        <div class="input-group flex-nowrap">
                            <input type="text" class="form-control" placeholder="" aria-label="Username"
                                aria-describedby="addon-wrapping">
                        </div>
                        <p class="mt-3">Danh Mục</p>
                        <div class="input-group">
                            <select class="form-select" id="inputGroupSelect04"
                                aria-label="Example select with button addon">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <p class="mt-3">Mô Tả</p>
                        <div class="mb-3 mr-5">
                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <p class="mt-3">Số Tiền </p>
                        <div class="input-group flex-nowrap">
                            <input type="text" class="form-control" placeholder="" aria-label="Username"
                                aria-describedby="addon-wrapping">
                        </div>
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-5"></div>
                                <div class="col-lg-7">
                                    <div class="d-flex gap-3 mt-3">
                                        <a href="#" class="btn btn-primary " data-bs-toggle="modal"
                                            data-bs-target="#them">Thêm</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <div class="modal fade" id="them" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Ngân Sách</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc chắn muốn thêm ngân sách này không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Thêm</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="sua" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sửa Ngân Sách</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="mt-3">Tên Ngân Sách</p>
                        <div class="input-group flex-nowrap">
                            <input type="text" class="form-control" placeholder="" aria-label="Username"
                                aria-describedby="addon-wrapping">
                        </div>
                        <p class="mt-3">Danh Mục</p>
                        <div class="input-group">
                            <select class="form-select" id="inputGroupSelect04"
                                aria-label="Example select with button addon">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <p class="mt-3">Mô Tả</p>
                        <div class="mb-3 mr-5">
                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <p class="mt-3">Số Tiền </p>
                        <div class="input-group flex-nowrap">
                            <input type="text" class="form-control" placeholder="" aria-label="Username"
                                aria-describedby="addon-wrapping">
                        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Ngân Sách</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" >
                    <div class="alert alert-primary">
                        Bạn Có Chắc Muốn Xóa Ngân Sách Này Không?
                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                        <button type="button" class="btn  mx-2 " style="background: #BBD2F4;" >Xóa</button>
                        <button type="button" class="btn  mx-2" style="background: #BBD2F4;" data-bs-dismiss="modal">Hủy</button>
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