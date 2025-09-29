import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default function (to, from, next) {
  var token = localStorage.getItem("tai_khoan_login");
  axios
    .get("http://127.0.0.1:8000/api/tietkiem/check-login", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      if (res.data.status) {
        localStorage.setItem("ten_tai_khoan", res.data.ten_tai_khoan);
        localStorage.setItem("avatar", res.data.avatar);
        next();
      } else {
        next("/khach-hang/dang-nhap");
        toaster.error(res.data.message);
      }
    });
}