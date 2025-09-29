<template>
    <div class="container py-4 mt-3">
        <div class="row">
            <!-- Danh sách nhóm -->
            <div class="col-md-6">
                <h5><b>Danh sách nhóm</b></h5>
                <div class="card p-3 mb-3 shadow-sm">
                    <div class="d-flex justify-content-between">
                        <div>
                            <b>Tên nhóm</b>
                            <p> 5 Thành viên</p>
                            <a href="#">Xem chi tiết</a>
                        </div>
                        <div class="text-end">
                            <p>Chủ Nhóm: </p>
                            <button class="btn btn-sm btn-outline-danger">
                                Rời Nhóm
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tạo nhóm mới & Tham gia nhóm -->
            <div class="col-md-6">
                <!-- Tạo nhóm -->
                <div class="card p-3 mb-3 bg-light">
                    <h5><b>Tạo nhóm mới</b></h5>
                    <div class="mb-2">
                        <label>Tên nhóm</label>
                        <input type="text" class="form-control" placeholder="Nhập tên nhóm" />
                    </div>
                    <div class="mb-2">
                        <label>Mô tả nhóm</label>
                        <input type="text" class="form-control"
                            placeholder="Nhập mô tả" />
                    </div>
                    <button class="btn btn-primary">
                        Tạo nhóm
                    </button>
                </div>

                <!-- Tham gia nhóm -->
                <div class="card p-3 bg-light">
                    <h5><b>Tham gia nhóm</b></h5>
                    <div class="mb-2">
                        <label>Mã nhóm</label>
                        <input type="text" class="form-control" placeholder="Nhập mã nhóm" />
                    </div>
                    <button class="btn btn-success">Tham gia</button>
                </div>
            </div>
        </div>

        <!-- Bảng chi tiết nhóm -->
        <div class="mt-4">
            <h5><b>Chi tiết nhóm</b></h5>
            <table class="table table-bordered table-striped">
                <thead class="table-primary">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Thu nhập</th>
                        <th>Vai trò</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>