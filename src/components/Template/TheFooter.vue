<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-6 py-1 my-5 border-top">
            <div class="col mb-3">
                <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                    <svg class="bi me-2" width="40" height="32">
                        <use xlink:href="#bootstrap" />
                    </svg>
                </a>
                <a class="navbar-brand" href="#">
                    <img src="./Img/lovepik-shop-png-image_400233775_wh1200.png" alt="Bootstrap" width="80" height="50">
                </a>
                <p class="text-body-secondary">我們致力於提供高品質的家具選擇，滿足您的居家裝飾需求。馬上探索我們的產品，發現您理想的家居風格！</p>
            </div>

            <div class="col mb-3">

            </div>

            <div class="col mb-3">
                <h5>關於網站</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">公司背景</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">團隊成員</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">聯絡方式</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">常見問題</a></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>服務和支持</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">送貨策略</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">退貨流程</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">隱私條款</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">客戶服務</a></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>商品訊息</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">產品種類</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">材料和工藝</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">尺寸和顏色</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">評論和評價</a></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>追蹤我們</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">社交媒體</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">最新消息</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">促銷活動</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">客戶反饋</a></li>
                </ul>
            </div>
        </footer>
    </div>

    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-2 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <svg class="bi" width="30" height="24">
                        <use xlink:href="#bootstrap" />
                    </svg>
                </a>
                <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2020 Tailblocks—@knyttneve</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-facebook"></i></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-twitter"></i></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-instagram"></i></a></li>
            </ul>
        </footer>
    </div>
</template>

<style>
*{
    box-sizing: border-box;
}
.my-px {
    padding: 0px 150px;
}

.my-container {
    width: 100%;
    height: 1000px;
    position: relative;
    background-color: #d1d4db;
    /* margin: auto; */
}

@media (max-width:1040px) {
    .my-container {

        height: 1200px;

    }
}

.my-container-normal {
    width: 80%;
    height: 90%;
    background-color: #f3f4f6;
    position: absolute;
    left: 10%;
    top: 5%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items:center; */

}

@media (max-width:500px) {
    .my-container-normal{
        left: 2%;
        top: 2%;
        width: 96%;
        height: 95%;
    }
}

.my-circle {
    width: 40px;
    height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 10px;
}

.my-circle-1 {

    color: white;

}

.my-circle-2 {

    color: black;

}

#my-margin {
    left: -160px;
}

.my-progress {
    position: absolute;
    left: 60px;
    top: 25%;
    width: 80%;
}

.my-color {
    background-color: transparent;
}

.my-big-circle {
    width: 50px;
    height: 50px;
    margin-right: 5%;
}

.my-paragraph {
    width: 100%;
    height: 500px;
}

.my-result {
    margin-left: -5px;
}



.circle-1 {
    background-image: url(@/assets/Img/E1169960698116.png);
    background-size: cover;
    background-color: white;
}

.circle-2 {
    background-image: url(@/assets/Img/E1682831893191.jpg);
    background-size: cover;
}

.circle-3 {
    background-image: url(@/assets/Img/Q1712905524591.jpg);
    background-size: cover;
}

.my-count {
    width: 40px;
    height: 30px;
    border: 1px solid #e5e6e9;
    border-radius: 5px;
    text-align: center;
}

.my-margin {
    margin-left: auto;
    margin-top: 2%;
    margin-bottom: 2%;
    width: 20%;
}

@media (max-width:1000px) {
    .my-margin {
        margin-left: 70%;
    }
}


.my-move {
    margin-left: 50%;
}

.my-back {
    font-size: 30px;
    border: 0;
    background-color: transparent;
}

.my-button {
    background-color: rgb(0, 122, 255);
    border: 0;
    color: white;
    width: 150px;
    height: 50px;
    font-size: 18px;
    border-radius: 8px;
}

#my-click-1 {
    cursor: pointer;
    border: 0;
    background-color: transparent;
}

#my-click-2 {
    cursor: pointer;
    border: 0;
    background-color: transparent;
}

#my-click-3 {
    cursor: pointer;
    border: 0;
    background-color: transparent;
}

#my-click-4 {
    cursor: pointer;
    border: 0;
    background-color: transparent;
}

#my-click-5 {
    cursor: pointer;
    border: 0;
    background-color: transparent;
}

#my-click-6 {
    cursor: pointer;
    border: 0;
    background-color: transparent;
}
</style>
