<template>
    <div class="container mt-4">
        <div class="row mb-4">
            <div class="col-4">
                <div class="card text-center py-3" style="background: #f4f8ff;">
                <i class="bx bx-user" style="font-size: 40px;"></i>
                <h3 class="mt-2 mb-0">4</h3>
                <div>Số thành viên gia đình</div>
                </div>
            </div>
            <div class="col-4">
                <div class="card text-center py-3" style="background: #f4f8ff; cursor:pointer;" @click="goToPhanQuyen">
                    <i class="bx bx-key" style="font-size: 40px;"></i>
                    <div class="mt-2 mb-0">Phân Quyền</div>
                </div>
            </div>
            <div class="col-4">
                <div class="card text-center py-3" style="background: #f4f8ff; cursor:pointer;" @click="showModal = true">
                    <i class="bx bx-plus" style="font-size: 40px;"></i>
                    <div class="mt-2 mb-0">Thêm thành viên</div>
                </div>
            </div>
        </div>
        <div class="card" style="background: #e6f0ff;">
            <div class="card-body p-0">
                <table class="table mb-0">
                <thead style="background: #b3d1ff;">
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Thu nhập</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>Nguyễn Hữu Đông</td>
                        <td>Dong@mail.com</td>
                        <td>0.000VNĐ</td>
                        <td>
                            <button class="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target="#Del" title="Delete">
                            <i class="bx bx-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr >
                        <td>Lê Hữu Trọng</td>
                        <td>Trong@mail.com</td>
                        <td>0.000VNĐ</td>
                        <td>
                            <button class="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target="#Del" title="Delete">
                            <i class="bx bx-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr >
                        <td>Trần Minh Quang</td>
                        <td>Quang@mail.com</td>
                        <td>0.000VNĐ</td>
                        <td>
                            <button class="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target="#Del" title="Delete">
                            <i class="bx bx-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr >
                        <td>Nguyễn Thi Thùy Trang</td>
                        <td>Trang@mail.com</td>
                        <td>0.000VNĐ</td>
                        <td>
                            <button class="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target="#Del" title="Delete">
                            <i class="bx bx-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr >
                        <td colspan="4" class="text-center"></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        <!-- Modal Thêm thành viên -->
        <div class="modal fade" :class="{ show: showModal }" tabindex="-1" style="display: block;" v-if="showModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-info text-white w-100 justify-content-center">
                        <h5 class="modal-title text-center w-100 ">Thêm thành viên</h5>
                        <button type="button" class="btn-close" @click="showModal = false"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input  type="email" class="form-control" />
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-info " @click="addMember">Thêm</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Xóa thành viên -->
        <div class="modal fade" id="Del" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Xóa thành viên</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-primary" role="alert">
                            Bạn có chắc muốn xóa thành viên này. <br>
                            Lưu ý: Hành động này không thể hoàn tác!
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn  mx-2 " style="background: #BBD2F4;" >Xóa</button>
                        <button type="button" class="btn  mx-2" style="background: #BBD2F4;" data-bs-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import axios from "axios";
export default {

  data() {
    return {
        showModal: false,
        
    };
  },
  methods: {
        goToPhanQuyen() {
            this.$router.push('/phanquyen');
        }
  }
}
</script>