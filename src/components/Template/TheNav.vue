<script>
import { RouterLink } from 'vue-router';

export default {
    methods: {
        
    },
};
</script>

<template>
    <nav class="my-px navbar navbar-expand-lg bg-body-tertiary">
        <!-- <nav class="navbar navbar-expand-sm bg-dark border-bottom border-body" data-bs-theme="dark">   -->
        <div class="container-fluid animate__animated animate__bounceInRight animate__slower 3s">
            <div>
                <RouterLink class="navbar-brand" to="/">
                    <img src="@/assets/Img/lovepik-shop-png-image_400233775_wh1200.png" alt="Bootstrap" width="80" height="50">
                </RouterLink>

            </div>
            <!-- 漢堡按鈕 -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link" href="#my-feedback-table">Contact</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <RouterLink class="nav-link my-car-icon" to="/step-1"><i class="bi bi-cart-fill me-3"></i></RouterLink>

                    <div class="dropdown">
                        <!-- <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button> -->
                        <a class="nav-link" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i
                                class="bi bi-person-circle"></i></a>
                        <ul id="my-margin" class="dropdown-menu">
                            <li><button class="dropdown-item my-dropdown-item"  @click="$router.push('/Login')">Login</button></li>

                        </ul>
                    </div>
                    <!-- <button type="button" class="btn btn-outline-primary btn-sm" disabled>Primary</button> -->
                </form>
            </div>
        </div>

    </nav>
</template>

<style scoped>
* {
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
    .my-container-normal {
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
