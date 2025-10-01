<template>
    <div class="container py-4">
        <div class="row">
            <!-- Bên trái -->
            <div class="col-md-6" style="height: 100%;">
                <h5><strong>Thu nhập cá nhân</strong></h5>
                <div class="card-custom" style="background-color: #DDE8F5;">
                    <p><strong>Tổng thu nhập:</strong> {{ tongThu.toLocaleString('vi-VN') }}đ</p>
                    <p class="highlight">Thu nhập cao hơn tháng trước 1.850.000đ</p>
                </div>
                <div class="card card-responsive"  style="padding: 32px;  background-color: #DDE8F5; height: 430px; overflow-y: auto;">
                    <template v-for="(v, index) in l_thu" :key="index">
                        <div class="card">
                            <div class="card-body">
                                <div>
                                    <div class="row">
                                        <div class="col-lg-5"><strong>{{ v.ten_thu_nhap }}:</strong> {{ v.so_tien }}</div>
                                        <div class="col-lg-5"><span class="text-small"> <b>Ngày:</b> {{ v.ngay }}</span></div>
                                        <div class="col-lg-2 text-end">
                                            <button class="btn btn-light btn-sm" type="button"
                                                data-bs-toggle="dropdown">
                                                ...
                                            </button>
                                            <div class="dropdown-menu dropdown-menu-custom">
                                                <button v-on:click="Object.assign(sua_thu, v)" data-bs-toggle="modal"
                                                    data-bs-target="#updateModal">Chỉnh sửa thu nhập</button>
                                                <button v-on:click="Object.assign(xoa_thu, v)" data-bs-toggle="modal"
                                                    data-bs-target="#delModal">Xóa thu nhập</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <!-- Khoản thu nhập -->


            <!-- Bên phải -->
            <div class="col-md-6" style="height: 100%;">
                <h5><strong>Thêm thu nhập</strong></h5>

                <div class="card-custom mt-2 background-color">
                    

                    <div class="mb-2">
                        <label for="soTien" class="form-label">Tên thu nhập</label>
                        <input v-model="them_thu.ten_thu_nhap" type="text" class="form-control" id="soTien"
                            placeholder="Value" />
                    </div>

                    <div class="mb-2">
                        <label for="soTien" class="form-label">Số tiền</label>
                        <input v-model="them_thu.so_tien" type="number" class="form-control" id="soTien"
                            placeholder="Value" />
                    </div>

                    <div class="mb-2">
                        <label for="danhMuc" class="form-label">Danh Mục</label>
                        <select v-model="them_thu.danh_muc" class="form-select" id="danhMuc">
                            <option>Lương</option>
                            <option>Chứng khoán</option>
                            <option>Trợ cấp</option>
                        </select>
                    </div>

                    <div class="mb-2">
                        <label for="ngay" class="form-label">Ngày thu nhập</label>
                        <input v-model="them_thu.ngay" type="date" class="form-control" id="ngay" />
                    </div>

                    <div class="mb-2">
                        <label for="moTa" class="form-label">Mô tả</label>
                        <textarea v-model="them_thu.mo_ta" class="form-control" id="moTa" rows="2"
                            placeholder="Value"></textarea>
                    </div>

                    <button v-on:click="themThu()" type="submit" class="btn btn-primary w-100 mt-2">Thêm</button>
                </div>
            </div>
        </div>
        <div class="card-custom mt-2 background-color">
            <div class="row">
                <div class="col-lg-5">
                    <div class="mb-2">
                        <label for="soTien" class="form-label">Ngày bắt đầu</label>
                        <input type="date" class="form-control" id="soTien" placeholder="Value" />
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="mb-2">
                        <label for="soTien" class="form-label">Ngày kết thúc</label>
                        <input type="date" class="form-control" id="soTien" placeholder="Value" />
                    </div>
                </div>
                <div class="col-lg-2">
                    <button style="background-color: #BBD2F4; border-radius: 16px; width: 100%;" v-on:click="themThu()"
                        type="button" data-bs-dismiss="modal" class="btn mt-4"><b>Báo cáo</b></button>
                </div>
            </div>
            <div class="card mt-2">
                <div class="card-body">
                    <div id="chart1" style="min-height: 375px;">
                        <div id="apexchartsrar4pzr" class="apexcharts-canvas apexchartsrar4pzr apexcharts-theme-light"
                            style="width: 941px; height: 360px;"><svg id="SvgjsSvg5258" width="941" height="360"
                                xmlns="http://www.w3.org/2000/svg" version="1.1"
                                xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"
                                class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)"
                                style="background: transparent;">
                                <g id="SvgjsG5260" class="apexcharts-inner apexcharts-graphical"
                                    transform="translate(47.23750019073486, 57.39999961853027)">
                                    <defs id="SvgjsDefs5259">
                                        <clipPath id="gridRectMaskrar4pzr">
                                            <rect id="SvgjsRect5283" width="892.7624998092651"
                                                height="276.27999992370604" x="-4.5" y="-2.5" rx="0" ry="0" opacity="1"
                                                stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                        </clipPath>
                                        <clipPath id="gridRectMarkerMaskrar4pzr">
                                            <rect id="SvgjsRect5284" width="903.7624998092651"
                                                height="291.27999992370604" x="-10" y="-10" rx="0" ry="0" opacity="1"
                                                stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                        </clipPath>
                                        <linearGradient id="SvgjsLinearGradient5313" x1="0" y1="1" x2="1" y2="1">
                                            <stop id="SvgjsStop5314" stop-opacity="1" stop-color="rgba(244,17,39,1)"
                                                offset="0">
                                            </stop>
                                            <stop id="SvgjsStop5315" stop-opacity="1" stop-color="rgba(244,17,39,1)"
                                                offset="1">
                                            </stop>
                                            <stop id="SvgjsStop5316" stop-opacity="1" stop-color="rgba(244,17,39,1)"
                                                offset="1">
                                            </stop>
                                            <stop id="SvgjsStop5317" stop-opacity="1" stop-color="rgba(244,17,39,1)"
                                                offset="1">
                                            </stop>
                                        </linearGradient>
                                        <filter id="SvgjsFilter5319" filterUnits="userSpaceOnUse" width="200%"
                                            height="200%" x="-50%" y="-50%">
                                            <feFlood id="SvgjsFeFlood5320" flood-color="#000000" flood-opacity="0.1"
                                                result="SvgjsFeFlood5320Out" in="SourceGraphic"></feFlood>
                                            <feComposite id="SvgjsFeComposite5321" in="SvgjsFeFlood5320Out"
                                                in2="SourceAlpha" operator="in" result="SvgjsFeComposite5321Out">
                                            </feComposite>
                                            <feOffset id="SvgjsFeOffset5322" dx="14" dy="3"
                                                result="SvgjsFeOffset5322Out" in="SvgjsFeComposite5321Out">
                                            </feOffset>
                                            <feGaussianBlur id="SvgjsFeGaussianBlur5323" stdDeviation="4 "
                                                result="SvgjsFeGaussianBlur5323Out" in="SvgjsFeOffset5322Out">
                                            </feGaussianBlur>
                                            <feMerge id="SvgjsFeMerge5324" result="SvgjsFeMerge5324Out"
                                                in="SourceGraphic">
                                                <feMergeNode id="SvgjsFeMergeNode5325" in="SvgjsFeGaussianBlur5323Out">
                                                </feMergeNode>
                                                <feMergeNode id="SvgjsFeMergeNode5326" in="[object Arguments]">
                                                </feMergeNode>
                                            </feMerge>
                                            <feBlend id="SvgjsFeBlend5327" in="SourceGraphic" in2="SvgjsFeMerge5324Out"
                                                mode="normal" result="SvgjsFeBlend5327Out"></feBlend>
                                        </filter>
                                    </defs>
                                    <line id="SvgjsLine5268" x1="0" y1="0" x2="0" y2="271.27999992370604"
                                        stroke="#b6b6b6" stroke-dasharray="3" class="apexcharts-xcrosshairs" x="0" y="0"
                                        width="1" height="271.27999992370604" fill="#b1b9c4" filter="none"
                                        fill-opacity="0.9" stroke-width="1">
                                    </line>
                                    <g id="SvgjsG5328" class="apexcharts-xaxis" transform="translate(0, 0)">
                                        <g id="SvgjsG5329" class="apexcharts-xaxis-texts-g"
                                            transform="translate(0, -4)">
                                            <text id="SvgjsText5331" font-family="Helvetica, Arial, sans-serif"
                                                x="58.03813431583234" y="300.27999992370604" text-anchor="middle"
                                                dominant-baseline="auto" font-size="12px" font-weight="400"
                                                fill="#9ba7b2" class="apexcharts-text apexcharts-xaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan5332">Feb '00</tspan>
                                                <title>Feb '00</title>
                                            </text><text id="SvgjsText5334" font-family="Helvetica, Arial, sans-serif"
                                                x="134.5429477321568" y="300.27999992370604" text-anchor="middle"
                                                dominant-baseline="auto" font-size="12px" font-weight="400"
                                                fill="#9ba7b2" class="apexcharts-text apexcharts-xaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan5335">Mar '00</tspan>
                                                <title>Mar '00</title>
                                            </text><text id="SvgjsText5337" font-family="Helvetica, Arial, sans-serif"
                                                x="216.32395517719326" y="300.27999992370604" text-anchor="middle"
                                                dominant-baseline="auto" font-size="12px" font-weight="400"
                                                fill="#9ba7b2" class="apexcharts-text apexcharts-xaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan5338">Apr '00</tspan>
                                                <title>Apr '00</title>
                                            </text><text id="SvgjsText5340" font-family="Helvetica, Arial, sans-serif"
                                                x="295.46686560787373" y="300.27999992370604" text-anchor="middle"
                                                dominant-baseline="auto" font-size="12px" font-weight="400"
                                                fill="#9ba7b2" class="apexcharts-text apexcharts-xaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan5341">May '00</tspan>
                                                <title>May '00</title>
                                            </text><text id="SvgjsText5343" font-family="Helvetica, Arial, sans-serif"
                                                x="377.2478730529102" y="300.27999992370604" text-anchor="middle"
                                                dominant-baseline="auto" font-size="12px" font-weight="400"
                                                fill="#9ba7b2" class="apexcharts-text apexcharts-xaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan5344">Jun '00</tspan>
                                                <title>Jun '00</title>
                                            </text><text id="SvgjsText5346" font-family="Helvetica, Arial, sans-serif"
                                                x="456.39078348359067" y="300.27999992370604" text-anchor="middle"
                                                dominant-baseline="auto" font-size="12px" font-weight="400"
                                                fill="#9ba7b2" class="apexcharts-text apexcharts-xaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan5347">Jul '00</tspan>
                                                <title>Jul '00</title>
                                            </text><text id="SvgjsText5349" font-family="Helvetica, Arial, sans-serif"
                                                x="538.1717909286272" y="300.27999992370604" text-anchor="middle"
                                                dominant-baseline="auto" font-size="12px" font-weight="400"
                                                fill="#9ba7b2" class="apexcharts-text apexcharts-xaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan5350">Aug '00</tspan>
                                                <title>Aug '00</title>
                                            </text><text id="SvgjsText5352" font-family="Helvetica, Arial, sans-serif"
                                                x="619.9527983736637" y="300.27999992370604" text-anchor="middle"
                                                dominant-baseline="auto" font-size="12px" font-weight="400"
                                                fill="#9ba7b2" class="apexcharts-text apexcharts-xaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan5353">Sep '00</tspan>
                                                <title>Sep '00</title>
                                            </text><text id="SvgjsText5355" font-family="Helvetica, Arial, sans-serif"
                                                x="699.0957088043441" y="300.27999992370604" text-anchor="middle"
                                                dominant-baseline="auto" font-size="12px" font-weight="400"
                                                fill="#9ba7b2" class="apexcharts-text apexcharts-xaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan5356">Oct '00</tspan>
                                                <title>Oct '00</title>
                                            </text><text id="SvgjsText5358" font-family="Helvetica, Arial, sans-serif"
                                                x="780.8767162493806" y="300.27999992370604" text-anchor="middle"
                                                dominant-baseline="auto" font-size="12px" font-weight="400"
                                                fill="#9ba7b2" class="apexcharts-text apexcharts-xaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan5359">Nov '00</tspan>
                                                <title>Nov '00</title>
                                            </text><text id="SvgjsText5361" font-family="Helvetica, Arial, sans-serif"
                                                x="860.019626680061" y="300.27999992370604" text-anchor="middle"
                                                dominant-baseline="auto" font-size="12px" font-weight="400"
                                                fill="#9ba7b2" class="apexcharts-text apexcharts-xaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan5362">Dec '00</tspan>
                                                <title>Dec '00</title>
                                            </text><text id="SvgjsText5364" font-family="Helvetica, Arial, sans-serif"
                                                x="941.8006341250975" y="300.27999992370604" text-anchor="middle"
                                                dominant-baseline="auto" font-size="12px" font-weight="600"
                                                fill="#9ba7b2" class="apexcharts-text apexcharts-xaxis-label "
                                                style="font-family: Helvetica, Arial, sans-serif;">
                                                <tspan id="SvgjsTspan5365"></tspan>
                                                <title></title>
                                            </text>
                                        </g>
                                        <line id="SvgjsLine5366" x1="0" y1="272.27999992370604" x2="883.7624998092651"
                                            y2="272.27999992370604" stroke="#e0e0e0" stroke-dasharray="0"
                                            stroke-width="1">
                                        </line>
                                    </g>
                                    <g id="SvgjsG5383" class="apexcharts-grid">
                                        <g id="SvgjsG5384" class="apexcharts-gridlines-horizontal">
                                            <line id="SvgjsLine5397" x1="0" y1="0" x2="883.7624998092651" y2="0"
                                                stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline">
                                            </line>
                                            <line id="SvgjsLine5398" x1="0" y1="54.25599998474121"
                                                x2="883.7624998092651" y2="54.25599998474121" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-gridline"></line>
                                            <line id="SvgjsLine5399" x1="0" y1="108.51199996948242"
                                                x2="883.7624998092651" y2="108.51199996948242" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-gridline"></line>
                                            <line id="SvgjsLine5400" x1="0" y1="162.76799995422363"
                                                x2="883.7624998092651" y2="162.76799995422363" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-gridline"></line>
                                            <line id="SvgjsLine5401" x1="0" y1="217.02399993896483"
                                                x2="883.7624998092651" y2="217.02399993896483" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-gridline"></line>
                                            <line id="SvgjsLine5402" x1="0" y1="271.27999992370604"
                                                x2="883.7624998092651" y2="271.27999992370604" stroke="#e0e0e0"
                                                stroke-dasharray="0" class="apexcharts-gridline"></line>
                                        </g>
                                        <g id="SvgjsG5385" class="apexcharts-gridlines-vertical"></g>
                                        <line id="SvgjsLine5386" x1="58.03813431583234" y1="272.27999992370604"
                                            x2="58.03813431583234" y2="278.27999992370604" stroke="#e0e0e0"
                                            stroke-dasharray="0" class="apexcharts-xaxis-tick">
                                        </line>
                                        <line id="SvgjsLine5387" x1="134.5429477321568" y1="272.27999992370604"
                                            x2="134.5429477321568" y2="278.27999992370604" stroke="#e0e0e0"
                                            stroke-dasharray="0" class="apexcharts-xaxis-tick">
                                        </line>
                                        <line id="SvgjsLine5388" x1="216.32395517719326" y1="272.27999992370604"
                                            x2="216.32395517719326" y2="278.27999992370604" stroke="#e0e0e0"
                                            stroke-dasharray="0" class="apexcharts-xaxis-tick">
                                        </line>
                                        <line id="SvgjsLine5389" x1="295.46686560787373" y1="272.27999992370604"
                                            x2="295.46686560787373" y2="278.27999992370604" stroke="#e0e0e0"
                                            stroke-dasharray="0" class="apexcharts-xaxis-tick">
                                        </line>
                                        <line id="SvgjsLine5390" x1="377.2478730529102" y1="272.27999992370604"
                                            x2="377.2478730529102" y2="278.27999992370604" stroke="#e0e0e0"
                                            stroke-dasharray="0" class="apexcharts-xaxis-tick">
                                        </line>
                                        <line id="SvgjsLine5391" x1="456.39078348359067" y1="272.27999992370604"
                                            x2="456.39078348359067" y2="278.27999992370604" stroke="#e0e0e0"
                                            stroke-dasharray="0" class="apexcharts-xaxis-tick">
                                        </line>
                                        <line id="SvgjsLine5392" x1="538.1717909286272" y1="272.27999992370604"
                                            x2="538.1717909286272" y2="278.27999992370604" stroke="#e0e0e0"
                                            stroke-dasharray="0" class="apexcharts-xaxis-tick">
                                        </line>
                                        <line id="SvgjsLine5393" x1="619.9527983736637" y1="272.27999992370604"
                                            x2="619.9527983736637" y2="278.27999992370604" stroke="#e0e0e0"
                                            stroke-dasharray="0" class="apexcharts-xaxis-tick">
                                        </line>
                                        <line id="SvgjsLine5394" x1="699.0957088043441" y1="272.27999992370604"
                                            x2="699.0957088043441" y2="278.27999992370604" stroke="#e0e0e0"
                                            stroke-dasharray="0" class="apexcharts-xaxis-tick">
                                        </line>
                                        <line id="SvgjsLine5395" x1="780.8767162493806" y1="272.27999992370604"
                                            x2="780.8767162493806" y2="278.27999992370604" stroke="#e0e0e0"
                                            stroke-dasharray="0" class="apexcharts-xaxis-tick">
                                        </line>
                                        <line id="SvgjsLine5396" x1="860.019626680061" y1="272.27999992370604"
                                            x2="860.019626680061" y2="278.27999992370604" stroke="#e0e0e0"
                                            stroke-dasharray="0" class="apexcharts-xaxis-tick">
                                        </line>
                                        <line id="SvgjsLine5404" x1="0" y1="271.27999992370604" x2="883.7624998092651"
                                            y2="271.27999992370604" stroke="transparent" stroke-dasharray="0"></line>
                                        <line id="SvgjsLine5403" x1="0" y1="1" x2="0" y2="271.27999992370604"
                                            stroke="transparent" stroke-dasharray="0"></line>
                                    </g>
                                    <g id="SvgjsG5286" class="apexcharts-line-series apexcharts-plot-series">
                                        <g id="SvgjsG5287" class="apexcharts-series" seriesName="Likes"
                                            data:longestSeries="true" rel="1" data:realIndex="0">
                                            <path id="SvgjsPath5318"
                                                d="M 0 162.76799995422363C 28.623352605762765 162.76799995422363 53.15765483927372 248.0274285016741 81.78100744503648 248.0274285016741C 108.55769214075004 248.0274285016741 131.50913616564736 193.7714285169329 158.28582086136092 193.7714285169329C 186.90917346712368 193.7714285169329 211.44347570063465 201.5222856576102 240.0668283063974 201.5222856576102C 267.76684695713556 201.5222856576102 291.5097200863397 46.505142844063926 319.2097387370779 46.505142844063926C 347.83309134284065 46.505142844063926 372.36739357635156 124.01371425083707 400.9907461821143 124.01371425083707C 428.6907648328525 124.01371425083707 452.43363796205665 100.7611428288051 480.1336566127948 100.7611428288051C 508.7570092185576 100.7611428288051 533.2913114520685 201.5222856576102 561.9146640578313 201.5222856576102C 590.538016663594 201.5222856576102 615.072318897105 178.26971423557825 643.6956715028678 178.26971423557825C 671.3956901536059 178.26971423557825 695.1385632828101 217.02399993896483 722.8385819335482 217.02399993896483C 751.461934539311 217.02399993896483 775.9962367728219 124.01371425083707 804.6195893785847 124.01371425083707C 832.3196080293228 124.01371425083707 856.062481158527 232.52571422031946 883.7624998092651 232.52571422031946"
                                                fill="none" fill-opacity="1" stroke="url(#SvgjsLinearGradient5313)"
                                                stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                                stroke-dasharray="0" class="apexcharts-line" index="0"
                                                clip-path="url(#gridRectMaskrar4pzr)" filter="url(#SvgjsFilter5319)"
                                                pathTo="M 0 162.76799995422363C 28.623352605762765 162.76799995422363 53.15765483927372 248.0274285016741 81.78100744503648 248.0274285016741C 108.55769214075004 248.0274285016741 131.50913616564736 193.7714285169329 158.28582086136092 193.7714285169329C 186.90917346712368 193.7714285169329 211.44347570063465 201.5222856576102 240.0668283063974 201.5222856576102C 267.76684695713556 201.5222856576102 291.5097200863397 46.505142844063926 319.2097387370779 46.505142844063926C 347.83309134284065 46.505142844063926 372.36739357635156 124.01371425083707 400.9907461821143 124.01371425083707C 428.6907648328525 124.01371425083707 452.43363796205665 100.7611428288051 480.1336566127948 100.7611428288051C 508.7570092185576 100.7611428288051 533.2913114520685 201.5222856576102 561.9146640578313 201.5222856576102C 590.538016663594 201.5222856576102 615.072318897105 178.26971423557825 643.6956715028678 178.26971423557825C 671.3956901536059 178.26971423557825 695.1385632828101 217.02399993896483 722.8385819335482 217.02399993896483C 751.461934539311 217.02399993896483 775.9962367728219 124.01371425083707 804.6195893785847 124.01371425083707C 832.3196080293228 124.01371425083707 856.062481158527 232.52571422031946 883.7624998092651 232.52571422031946"
                                                pathFrom="M -1 271.27999992370604L -1 271.27999992370604L 81.78100744503648 271.27999992370604L 158.28582086136092 271.27999992370604L 240.0668283063974 271.27999992370604L 319.2097387370779 271.27999992370604L 400.9907461821143 271.27999992370604L 480.1336566127948 271.27999992370604L 561.9146640578313 271.27999992370604L 643.6956715028678 271.27999992370604L 722.8385819335482 271.27999992370604L 804.6195893785847 271.27999992370604L 883.7624998092651 271.27999992370604">
                                            </path>
                                            <g id="SvgjsG5288" class="apexcharts-series-markers-wrap"
                                                data:realIndex="0">
                                                <g id="SvgjsG5290" class="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMaskrar4pzr)">
                                                    <circle id="SvgjsCircle5291" r="4" cx="0" cy="162.76799995422363"
                                                        class="apexcharts-marker no-pointer-events wd7an6x7g"
                                                        stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="0" j="0" index="0"
                                                        default-marker-size="4"></circle>
                                                    <circle id="SvgjsCircle5292" r="4" cx="81.78100744503648"
                                                        cy="248.0274285016741"
                                                        class="apexcharts-marker no-pointer-events wtrm0hjv4"
                                                        stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="1" j="1" index="0"
                                                        default-marker-size="4"></circle>
                                                </g>
                                                <g id="SvgjsG5293" class="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMaskrar4pzr)">
                                                    <circle id="SvgjsCircle5294" r="4" cx="158.28582086136092"
                                                        cy="193.7714285169329"
                                                        class="apexcharts-marker no-pointer-events w9vmmuplk"
                                                        stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="2" j="2" index="0"
                                                        default-marker-size="4">
                                                    </circle>
                                                </g>
                                                <g id="SvgjsG5295" class="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMaskrar4pzr)">
                                                    <circle id="SvgjsCircle5296" r="4" cx="240.0668283063974"
                                                        cy="201.5222856576102"
                                                        class="apexcharts-marker no-pointer-events w9w4ccai4"
                                                        stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="3" j="3" index="0"
                                                        default-marker-size="4"></circle>
                                                </g>
                                                <g id="SvgjsG5297" class="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMaskrar4pzr)">
                                                    <circle id="SvgjsCircle5298" r="4" cx="319.2097387370779"
                                                        cy="46.505142844063926"
                                                        class="apexcharts-marker no-pointer-events wai384krm"
                                                        stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="4" j="4" index="0"
                                                        default-marker-size="4"></circle>
                                                </g>
                                                <g id="SvgjsG5299" class="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMaskrar4pzr)">
                                                    <circle id="SvgjsCircle5300" r="4" cx="400.9907461821143"
                                                        cy="124.01371425083707"
                                                        class="apexcharts-marker no-pointer-events wq31vj9gn"
                                                        stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="5" j="5" index="0"
                                                        default-marker-size="4"></circle>
                                                </g>
                                                <g id="SvgjsG5301" class="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMaskrar4pzr)">
                                                    <circle id="SvgjsCircle5302" r="4" cx="480.1336566127948"
                                                        cy="100.7611428288051"
                                                        class="apexcharts-marker no-pointer-events wgx0wuxru"
                                                        stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="6" j="6" index="0"
                                                        default-marker-size="4"></circle>
                                                </g>
                                                <g id="SvgjsG5303" class="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMaskrar4pzr)">
                                                    <circle id="SvgjsCircle5304" r="4" cx="561.9146640578313"
                                                        cy="201.5222856576102"
                                                        class="apexcharts-marker no-pointer-events wj9xm9vyl"
                                                        stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="7" j="7" index="0"
                                                        default-marker-size="4"></circle>
                                                </g>
                                                <g id="SvgjsG5305" class="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMaskrar4pzr)">
                                                    <circle id="SvgjsCircle5306" r="4" cx="643.6956715028678"
                                                        cy="178.26971423557825"
                                                        class="apexcharts-marker no-pointer-events w4ouvka8s"
                                                        stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="8" j="8" index="0"
                                                        default-marker-size="4"></circle>
                                                </g>
                                                <g id="SvgjsG5307" class="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMaskrar4pzr)">
                                                    <circle id="SvgjsCircle5308" r="4" cx="722.8385819335482"
                                                        cy="217.02399993896483"
                                                        class="apexcharts-marker no-pointer-events w4rtbscmy"
                                                        stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="9" j="9" index="0"
                                                        default-marker-size="4"></circle>
                                                </g>
                                                <g id="SvgjsG5309" class="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMaskrar4pzr)">
                                                    <circle id="SvgjsCircle5310" r="4" cx="804.6195893785847"
                                                        cy="124.01371425083707"
                                                        class="apexcharts-marker no-pointer-events wgcrayr9n"
                                                        stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="10" j="10" index="0"
                                                        default-marker-size="4"></circle>
                                                </g>
                                                <g id="SvgjsG5311" class="apexcharts-series-markers"
                                                    clip-path="url(#gridRectMarkerMaskrar4pzr)">
                                                    <circle id="SvgjsCircle5312" r="4" cx="883.7624998092651"
                                                        cy="232.52571422031946"
                                                        class="apexcharts-marker no-pointer-events woiwugw3c"
                                                        stroke="#ffffff" fill="#f41127" fill-opacity="1"
                                                        stroke-width="2" stroke-opacity="0.9" rel="11" j="11" index="0"
                                                        default-marker-size="4"></circle>
                                                </g>
                                            </g>
                                        </g>
                                        <g id="SvgjsG5289" class="apexcharts-datalabels" data:realIndex="0"></g>
                                    </g>
                                    <line id="SvgjsLine5405" x1="0" y1="0" x2="883.7624998092651" y2="0"
                                        stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1"
                                        class="apexcharts-ycrosshairs"></line>
                                    <line id="SvgjsLine5406" x1="0" y1="0" x2="883.7624998092651" y2="0"
                                        stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden">
                                    </line>
                                    <g id="SvgjsG5407" class="apexcharts-yaxis-annotations"></g>
                                    <g id="SvgjsG5408" class="apexcharts-xaxis-annotations"></g>
                                    <g id="SvgjsG5409" class="apexcharts-point-annotations"></g>
                                </g><text id="SvgjsText5262" font-family="Helvetica, Arial, sans-serif" x="10" y="18.5"
                                    text-anchor="start" dominant-baseline="auto" font-size="16px" font-weight="900"
                                    fill="#666666" class="apexcharts-title-text"
                                    style="font-family: Helvetica, Arial, sans-serif; opacity: 1;">Line
                                    Chart</text>
                                <rect id="SvgjsRect5267" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1"
                                    stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
                                <g id="SvgjsG5367" class="apexcharts-yaxis" rel="0"
                                    transform="translate(17.237500190734863, 0)">
                                    <g id="SvgjsG5368" class="apexcharts-yaxis-texts-g"><text id="SvgjsText5369"
                                            font-family="Helvetica, Arial, sans-serif" x="20" y="58.89999961853027"
                                            text-anchor="end" dominant-baseline="auto" font-size="11px"
                                            font-weight="400" fill="#9ba7b2"
                                            class="apexcharts-text apexcharts-yaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;">
                                            <tspan id="SvgjsTspan5370">35</tspan>
                                        </text><text id="SvgjsText5371" font-family="Helvetica, Arial, sans-serif"
                                            x="20" y="113.15599960327148" text-anchor="end" dominant-baseline="auto"
                                            font-size="11px" font-weight="400" fill="#9ba7b2"
                                            class="apexcharts-text apexcharts-yaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;">
                                            <tspan id="SvgjsTspan5372">28</tspan>
                                        </text><text id="SvgjsText5373" font-family="Helvetica, Arial, sans-serif"
                                            x="20" y="167.4119995880127" text-anchor="end" dominant-baseline="auto"
                                            font-size="11px" font-weight="400" fill="#9ba7b2"
                                            class="apexcharts-text apexcharts-yaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;">
                                            <tspan id="SvgjsTspan5374">21</tspan>
                                        </text><text id="SvgjsText5375" font-family="Helvetica, Arial, sans-serif"
                                            x="20" y="221.6679995727539" text-anchor="end" dominant-baseline="auto"
                                            font-size="11px" font-weight="400" fill="#9ba7b2"
                                            class="apexcharts-text apexcharts-yaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;">
                                            <tspan id="SvgjsTspan5376">14</tspan>
                                        </text><text id="SvgjsText5377" font-family="Helvetica, Arial, sans-serif"
                                            x="20" y="275.9239995574951" text-anchor="end" dominant-baseline="auto"
                                            font-size="11px" font-weight="400" fill="#9ba7b2"
                                            class="apexcharts-text apexcharts-yaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;">
                                            <tspan id="SvgjsTspan5378">7</tspan>
                                        </text><text id="SvgjsText5379" font-family="Helvetica, Arial, sans-serif"
                                            x="20" y="330.1799995422363" text-anchor="end" dominant-baseline="auto"
                                            font-size="11px" font-weight="400" fill="#9ba7b2"
                                            class="apexcharts-text apexcharts-yaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;">
                                            <tspan id="SvgjsTspan5380">0</tspan>
                                        </text></g>
                                    <g id="SvgjsG5381" class="apexcharts-yaxis-title"><text id="SvgjsText5382"
                                            font-family="Helvetica, Arial, sans-serif" x="32.052245140075684"
                                            y="193.0399995803833" text-anchor="end" dominant-baseline="auto"
                                            font-size="11px" font-weight="900" fill="#9ba7b2"
                                            class="apexcharts-text apexcharts-yaxis-title-text "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-90 -8.0205078125 188.63999319076538)">Engagement</text>
                                    </g>
                                </g>
                                <g id="SvgjsG5261" class="apexcharts-annotations"></g>
                            </svg>
                            <div class="apexcharts-legend"></div>
                            <div class="apexcharts-tooltip apexcharts-theme-light">
                                <div class="apexcharts-tooltip-title"
                                    style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                                <div class="apexcharts-tooltip-series-group"><span class="apexcharts-tooltip-marker"
                                        style="background-color: rgb(244, 17, 39);"></span>
                                    <div class="apexcharts-tooltip-text"
                                        style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                        <div class="apexcharts-tooltip-y-group"><span
                                                class="apexcharts-tooltip-text-label"></span><span
                                                class="apexcharts-tooltip-text-value"></span></div>
                                        <div class="apexcharts-tooltip-z-group"><span
                                                class="apexcharts-tooltip-text-z-label"></span><span
                                                class="apexcharts-tooltip-text-z-value"></span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                <div class="apexcharts-xaxistooltip-text"
                                    style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                            </div>
                            <div
                                class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                <div class="apexcharts-yaxistooltip-text"></div>
                            </div>
                            <div class="apexcharts-toolbar" style="top: 0px; right: 3px;">
                                <div class="apexcharts-menu-icon" title="Menu"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                    </svg></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <strong> Ghi chú </strong><br>
                    <b>- Thu nhập cao nhất : <span v-if="thuCaoNhat"> {{ thuCaoNhat.ten_thu_nhap }} ({{
                        thuCaoNhat.so_tien.toLocaleString('vi-VN') }}đ)</span></b>
                    <br>
                    <b>- Thu nhập ít nhất : <span v-if="thuThapNhat"> {{ thuThapNhat.ten_thu_nhap }} ({{
                        thuThapNhat.so_tien.toLocaleString('vi-VN') }} đ)</span></b>
                    <br>
                </div>
            </div>

        </div>
    </div>

    <div class="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="background-color: #DDE8F5; border-radius: 16px;">
                 <!-- Header -->
                <div class="modal-header border-0">
                    <h5 class="modal-title fw-bold" id="delModalLabel">Xóa khoản thu {{ xoa_thu.ten_thu_nhap }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- Body -->
                <div class="modal-body ms-4 me-4"
                    style="background-color: #BBD2F4; border-radius: 16px; padding: 15px;">
                    <p class="mb-0 fw-semibold">
                        Bạn có muốn xóa khoản thu này <br>
                        <span class="text-danger">Lưu ý: Điều này không thể hoàn tác !!!</span>
                    </p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn" 
                        style="background-color: #BBD2F4; border-radius: 16px;" data-bs-dismiss="modal">Hủy</button>
                    <button v-on:click="xoaThu()" type="button" 
                        style="background-color: #BBD2F4; border-radius: 16px;" data-bs-dismiss="modal" class="btn ">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="background-color: #DDE8F5; border-radius: 16px;">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"> Sửa khoản thu nhập {{ sua_thu.ten_thu_nhap }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    

                    <div class="mb-2">
                        <label for="soTien" class="form-label">Tên thu nhập</label>
                        <input v-model="sua_thu.ten_thu_nhap" type="text" class="form-control" id="soTien"
                            placeholder="Value" />
                    </div>

                    <div class="mb-2">
                        <label for="soTien" class="form-label">Số tiền</label>
                        <input v-model="sua_thu.so_tien" type="number" class="form-control" id="soTien"
                            placeholder="Value" />
                    </div>

                    <div class="mb-2">
                        <label for="danhMuc" class="form-label">Danh Mục</label>
                        <select v-model="sua_thu.danh_muc" class="form-select" id="danhMuc">
                            <option>Lương</option>
                            <option>Chứng khoán</option>
                            <option>Trợ cấp</option>
                        </select>
                    </div>

                    <div class="mb-2">
                        <label for="ngay" class="form-label">Ngày thu nhập</label>
                        <input v-model="sua_thu.ngay" type="date" class="form-control" id="ngay" />
                    </div>

                    <div class="mb-2">
                        <label for="moTa" class="form-label">Mô tả</label>
                        <textarea v-model="sua_thu.mo_ta" class="form-control" id="moTa" rows="2"
                            placeholder="Value"></textarea>
                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn  " 
                        style="background-color: #BBD2F4; border-radius: 16px;" data-bs-dismiss="modal">Hủy</button>
                    <button v-on:click="suaThu()"
                        style="background-color: #BBD2F4; border-radius: 16px;" type="button" data-bs-dismiss="modal" class="btn">Xác nhận</button>
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
            l_thu: [],
            them_thu: { ma_thu: '', ten_thu_nhap: '', danh_muc: '', so_tien: '', ngay: '', mo_ta: '' },
            xoa_thu: { ma_thu: '', ten_thu_nhap: '', danh_muc: '', so_tien: '', ngay: '', mo_ta: '' },
            sua_thu: { ma_thu: '', ten_thu_nhap: '', danh_muc: '', so_tien: '', ngay: '', mo_ta: '' }
        }
    },

    computed: {
        tongThu() {
            if (!this.l_thu || this.l_thu.length === 0) return 0;
            return this.l_thu.reduce((sum, item) => {
                return sum + Number(item.so_tien || 0);
            }, 0);
        },
        thuCaoNhat() {
            if (!this.l_thu || this.l_thu.length === 0) return null;
            return this.l_thu.reduce((max, item) =>
                Number(item.so_tien) > Number(max.so_tien) ? item : max
            );
        },
        thuThapNhat() {
            if (!this.l_thu || this.l_thu.length === 0) return null;
            return this.l_thu.reduce((min, item) =>
                Number(item.so_tien) < Number(min.so_tien) ? item : min
            );
        },
        chenhLech() {
            // giả sử backend có API trả về thu nhập tháng trước
            // ví dụ this.thuThangTruoc = 20000000
            if (!this.thuThangTruoc) return 0;
            return this.tongThu - this.thuThangTruoc;
        }
    },
    methods: {
        getThu() {
            axios.get('http://127.0.0.1:8000/api/canhan/thunhap/data',{
                headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token_tai_khoan')
                    }
            })
                .then(response => {
                    this.l_thu = response.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        themThu() {
            axios
                .post('http://127.0.0.1:8000/api/canhan/thunhap/them', this.them_thu,{
                headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token_tai_khoan')
                    }
            })
                .then(response => {
                    if (response.data.status == true) {
                        this.getThu();
                        this.$toast.success(response.data.message);
                    } else {
                        this.$toast.error('Them moi that bai');
                    }
                })
                .catch(error => {
                    var obj = error.response.data.errors;
                    var result = Object.keys(obj).map((key) => [key, obj[key]]);
                    console.log(result);
                    result.forEach((v_1, key_1) => {
                        var xxx = v_1[1];
                        xxx.forEach((v, key) => {
                            this.$toast.error(v);
                        });
                    });
                });
        },

        xoaThu() {
            axios
                .post('http://127.0.0.1:8000/api/canhan/thunhap/xoa', this.xoa_thu,{
                headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token_tai_khoan')
                    }
            })
                .then(response => {
                    if (response.data.status == true) {
                        this.getThu();
                        this.$toast.success(response.data.message);
                    } else {
                        this.$toast.error('Xoa that bai');
                    }
                })
                .catch(error => {
                    var obj = error.response.data.errors;
                    var result = Object.keys(obj).map((key) => [key, obj[key]]);
                    console.log(result);
                    result.forEach((v_1, key_1) => {
                        var xxx = v_1[1];
                        xxx.forEach((v, key) => {
                            this.$toast.error(v);
                        });
                    });
                });
        },

        suaThu() {
            axios
                .post('http://127.0.0.1:8000/api/canhan/thunhap/sua', this.sua_thu,{
                headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token_tai_khoan')
                    }
            })
                .then(response => {
                    // console.log(response.data.status);
                    // console.log(response.data.message);
                    if (response.data.status == true) {
                        this.getThu();
                        this.$toast.success(response.data.message);
                    } else {
                        this.$toast.error('Sua moi that bai');
                    }
                })
                .catch(error => {
                    var obj = error.response.data.errors;
                    var result = Object.keys(obj).map((key) => [key, obj[key]]);
                    console.log(result);
                    result.forEach((v_1, key_1) => {
                        var xxx = v_1[1];
                        xxx.forEach((v, key) => {
                            this.$toast.error(v);
                        });
                    });
                });
        },
    },

    mounted() {
        this.getThu();
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

.background-color {
    background-color: #dde8f5;
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
    box-shadow: 0 0 5px 1px #7FB3FF;
    border-radius: 10px;
    min-width: 180px;
    padding: 8px;
}

.dropdown-menu-custom button {
    display: block;
    width: 100%;
    background: #BBD2F4;
    border: thune;
    text-align: left;
    padding: 0.25rem 0;
    margin-bottom: 8px;
    padding: 6px;
    border-radius: 10px;
}
</style>