<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-lg-5">
                <h2>Chào mừng ..... </h2>
                <span>Với giao diện thân thiện, dễ sử dụng, hệ thống cho phép bạn:
                    Ghi lại thu nhập và chi tiêu hằng ngày
                    Phân loại chi tiêu theo danh mục như ăn uống, giải trí, giáo dục, tiết kiệm...
                    Đặt ngân sách cho từng mục và nhận nhắc nhở khi sắp vượt giới hạn
                    Theo dõi tài chính qua biểu đồ trực quan và báo cáo chi tiết
                </span>
                <br>
                <br>
                <br>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://i.pinimg.com/736x/cf/14/09/cf140964e94c60c9bffa1314dfa8bc73.jpg"
                                class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/736x/de/d2/96/ded29651a74854788672e1d7f2b9a583.jpg"
                                class="d-block w-100" alt="..." style="height: 700px;">
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/736x/f0/93/10/f093108fd2975f9c0a0ebdce10c408bb.jpg"
                                class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-lg-7" style="height: 100%;">
                <div class="card" style="padding: 32px; box-shadow: none; background-color: #DDE8F5; border-radius: 20px; height: 100%; overflow-y: auto;">
                    
                    <div class="card-custom position-relative">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Tiền lương:</strong> 17.000.000đ<br>
                                <span class="text-small">Ngày: 5/2/2025</span><br>
                                <span class="highlight">Nhiều hơn 2.000.000đ so với tháng trước</span>
                            </div>
                            
                        </div>
                    </div>

                    <div class="card-custom position-relative">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Lợi nhuận chứng khoán:</strong> 350.000đ<br>
                                <span class="text-small">Ngày: 5/2/2025</span><br>
                                <span class="highlight">Ít hơn 150.000đ so với tháng trước</span>
                            </div>
                            
                        </div>
                    </div>

                    <div class="card-custom position-relative">
                        <div class="d-flex justify-content-between">
                            <div>
                                <strong>Tiền trợ cấp:</strong> 2.000.000đ<br>
                                <span class="text-small">Ngày: 5/2/2025</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <br>
                <div class="card"
                    style="background-color: #DDE8F5; border-radius: 20px; box-shadow: none; padding: 32px;">
                    <div class="card_body text-center">
                        <div class="row">
                            <div class="col-6"><button class="btn" @click="goToThuChicanhan" style="background-color: #fff; border-radius: 20px;">
                                    Quản lý thu chi cá nhân</button></div>
                            <div class="col-6"><button class="btn" @click="goToThuChigiadinh" style="background-color: #fff; border-radius: 20px;">
                                    Quản lý thu chi gia đình</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
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
body {
    background-color: #f2f7ff;
}

.card-custom {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
}

.text-small {
    font-size: 0.9rem;
}

.highlight {
    font-style: italic;
    color: #357edd;
}

.dropdown-menu-custom {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 180px;
    padding: 8px;
}

.dropdown-menu-custom button {
    display: block;
    width: 100%;
    background: #BBD2F4;
    border: none;
    text-align: left;
    padding: 0.25rem 0;
    margin-bottom: 8px;
    padding: 6px;
    border-radius: 10px;
}
</style>