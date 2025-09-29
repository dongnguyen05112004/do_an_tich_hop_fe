<template>
    <div class="container mt-4">
        <div class="row">
            <!-- Thành viên -->
            <div class="col-4">
                <div class="card p-3" style="background: #dde8f5; border-radius: 16px;">
                    <div class="card-head text-center" style="background: #b3d1ff; border-radius: 8px; width: 100%">
                        <label class="fw-bold " for="">Thành viên</label>
                    </div>
                    <table class="table ">
                        <tbody>
                            <tr>
                                <th>
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-check-label ms-3">Nguyễn Hữu Đông</label>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Quyền cá nhân -->
            <div class="col-4">
                <div class="card p-3" style="background: #dde8f5; border-radius: 16px;">
                    <div class="card-head text-center" style="background: #b3d1ff; border-radius: 8px; width: 100%">
                        <label class="fw-bold " for="">Quyền </label>
                    </div>
                    <table class="table ">
                        <tbody>
                            <tr>
                                <th>
                                    <input type="checkbox" v-model="groups.thuNhap.parent"
                                        @change="toggleChildren('thuNhap')" />
                                    <label class="form-check-label ms-2">Quản lý Thu Nhập</label>
                                    <div class="ms-4">
                                        <input type="checkbox" v-model="groups.thuNhap.children.them"
                                            @change="syncParent('thuNhap')" />
                                        <label class="form-check-label ms-2">Thêm Thu nhập</label>
                                    </div>
                                    <div class="ms-4">
                                        <input type="checkbox" v-model="groups.thuNhap.children.xoa"
                                            @change="syncParent('thuNhap')" />
                                        <label class="form-check-label ms-2">Xóa Thu nhập</label>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Nhóm quyền -->
            <div class="col-4">
                <div class="card p-3" style="background: #dde8f5; border-radius: 16px;">
                    <div class="card p-3" style="background: #dde8f5; border-radius: 16px;">
                        <div class="card-head d-flex justify-content-between align-items-center "
                            style="background: #b3d1ff; border-radius: 8px; width: 100%">
                            <label class="fw-bold " for="">Nhóm quyền </label>
                            <button class="btn btn-sm btn-outline-primary justify-content-end"><i class="bx bx-plus "
                                    data-bs-toggle="modal" data-bs-target="#Them" title="Delete"></i></button>
                        </div>
                        <table class="table ">
                            <tbody>
                                <tr>
                                    <th>
                                        <input type="checkbox" v-model="groups.tietKiem.parent"
                                            @change="toggleChildren('tietKiem')" />
                                        <label class="form-check-label ms-2">Quản lý Tiết kiệm</label>
                                        <div class="ms-4">
                                            <input type="checkbox" v-model="groups.tietKiem.children.them"
                                                @change="syncParent('tietKiem')" />
                                            <label class="form-check-label ms-2">Thêm Tiết kiệm</label>
                                        </div>
                                        <div class="ms-4">
                                            <input type="checkbox" v-model="groups.tietKiem.children.xoa"
                                                @change="syncParent('tietKiem')" />
                                            <label class="form-check-label ms-2">Xóa Tiết kiệm</label>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal thêm nhóm quyền -->
        <div class="modal fade" id="Them" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center w-100">Tạo nhóm quyền</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="checkbox" v-model="groups.tietKiem.parent" @change="toggleChildren('tietKiem')" />
                        <label class="form-check-label fw-bold ms-3">Quản lý tiết kiệm</label>
                        <div class="form-check mt-2 mb-2 ms-4">
                            <input class="form-check-input child" type="checkbox"
                                v-model="groups.tietKiem.children.them" @change="syncParent('tietKiem')" />
                            <label class="form-check-label">Thêm tiết kiệm</label>
                        </div>
                        <div class="form-check mb-2 ms-4 d-inline-block">
                            <input class="form-check-input child" type="checkbox" v-model="groups.tietKiem.children.xoa"
                                @change="syncParent('tietKiem')" />
                            <label class="form-check-label">Xóa tiết kiệm</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Lưu</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Nút lưu/hủy -->
        <div class="row mt-4">
            <div class="col-12 d-flex justify-content-end">
                <button class="btn btn-success me-3 px-4">Lưu</button>
                <button class="btn btn-danger px-4">Hủy</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            groups: {
                thuNhap: {
                    parent: false,
                    children: {
                        them: false,
                        xoa: false
                    }
                },
                tietKiem: {
                    parent: false,
                    children: {
                        them: false,
                        xoa: false
                    }
                }
            }
        };
    },
    methods: {
        toggleChildren(groupKey) {
            // Khi tick cha -> tất cả con theo
            const g = this.groups[groupKey];
            Object.keys(g.children).forEach(key => {
                g.children[key] = g.parent;
            });
        },
        syncParent(groupKey) {
            const g = this.groups[groupKey];
            g.parent = Object.values(g.children).every(val => val);
        }
    }
};

</script>