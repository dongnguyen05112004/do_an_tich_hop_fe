import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    
   {
    path: "/home",
    component: () => import("../components/admin/trangchu.vue"),
    meta : { layout: "family" },
   },
   {
    path: "/profile",
    component: () => import("../components/Khach_Hang/profile.vue"),
   },
    {
        path: "/canhan",
        component: () => import("../layout/wrapper/index.vue"),
        meta: { layout: "index" },
        children: [
            { path: "", redirect: "thunhap" }, // mặc định
            {
            path: "/thunhap",
            component: () => import("../components/thunhap/thunhap.vue"),
            },
            {
            path: "/chitieu",
            component: () => import("../components/chitieu/chitieu.vue"),
            },
            {
            path: "/tietkiem",
            component: () => import("../components/tietkiem/tietkiem.vue"),
            },
            {
            path: "/ngansach",
            component: () => import("../components/ngan_sach/ngan_sach.vue"),
            },
            {
            path: "/no",
            component: () => import("../components/quanlyno/quanlyno.vue"),
            },
            {
            path: "/thongke",
            component: () => import("../components/thongke/index.vue"),
            },
        ]
    },
   {
    path: "/dang-nhap",
    component: () => import("../components/Khach_Hang/dang_nhap.vue"),
    meta : { layout: "blank" },
   },
   {
    path: "/dang-ky",
    component: () => import("../components/Khach_Hang/dang_ky.vue"),
    meta : { layout: "blank" },
   },
    
   {
        path: "/giadinh",
        component: () => import("../layout/wrapper/family.vue"),
        meta: { layout: "family" },
        children: [
            { path: "", redirect: "thunhapgiadinh" }, // mặc định
            {
                path: "/thunhapgiadinh",
                component: () => import("../components/giadinh/thunhapgiadinh/thunhapgiadinh.vue"),
            },
            {
                path: "/nogiadinh",
                component: () => import("../components/giadinh/nogiadinh/nogiadinh.vue"),
            },
            {
                path: "/chitieugiadinh",
                component: () => import("../components/giadinh/chitieugiadinh/chitieugiadinh.vue"),
            },
            {
                path: "/tietkiemgiadinh",
                component: () => import("../components/giadinh/tietkiemgiadinh/tietkiemgiadinh.vue"),
            },
            {
                path: "/ngansachgiadinh",
                component: () => import("../components/giadinh/ngansachgiadinh/ngansachgiadinh.vue"),
            },
            {
                path: "/thongkegiadinh",
                component: () => import("../components/giadinh/thongke/thongkegiadinh.vue"),
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router