<script>
import { mapStores } from 'pinia';
import { RouterLink } from 'vue-router';
import { useShoppingCartStore } from '@/stores/Shopping-Cart';

export default {
    setup() {
        const shoppingCartStore = useShoppingCartStore();
        return { shoppingCartStore };
    },
    data() {
        return {
            data: {
                furniture1: 0,
                furniture2: 0,
                furniture3: 0,
                furniture1Price: 0,
                furniture2Price: 0,
                furniture3Price: 0,
            },
        };
    },

    // computed:{
    //     ...mapStores(useShoppingCartStore),
    // },
    mounted: {

    },

    methods: {
        plus1() {
            this.data.furniture1++;
            this.countPrice();
        },
        minus1() {
            if (this.data.furniture1 > 0) {
                this.data.furniture1--;
            }
            this.countPrice();
        },
        plus2() {
            this.data.furniture2++;
            this.countPrice();
        },
        minus2() {
            if (this.data.furniture2 > 0) {
                this.data.furniture2--;
            }
            this.countPrice();
        },
        plus3() {
            this.data.furniture3++;
            this.countPrice();
        },
        minus3() {
            if (this.data.furniture3 > 0) {
                this.data.furniture3--;
            }
            this.countPrice();
        },
        countPrice() {
            this.data.furniture1Price = (10.5 * this.data.furniture1).toFixed(2);
            this.data.furniture2Price = (30.5 * this.data.furniture2).toFixed(2);
            this.data.furniture3Price = (15.5 * this.data.furniture3).toFixed(2);
        },

        Next() {
            this.$router.push('/step-2');
            sessionStorage.setItem('object', JSON.stringify(this.data));
        }
    }
};
</script>

<template>
    <main>
        <div class="my-container">
            <div class="px-3 py-3 my-container-normal">

                <h2 class="d-flex align-items-start">購物車</h2>

                <div class="d-flex w-100 ms-sm-5">
                    <div class="col-3 px-1 py-5 d-flex flex-column justify-content-center align-items-left">
                        <div class="position-relative w-100 ps-2">
                            <div class="my-circle my-circle-1 rounded-circle bg-success">
                                1

                            </div>
                            <div class="my-progress progress">
                                <div class="progress-bar w-25 bg-success"></div>
                            </div>
                        </div>
                        <h5 class="">確認購物車</h5>
                    </div>

                    <div class="col-3 px-1 py-5 d-flex flex-column justify-content-center align-items-left">
                        <div class="position-relative w-100 ps-2">
                            <div class="my-circle my-circle-2 rounded-circle bg-white">
                                2

                            </div>
                            <div class="my-progress progress">
                                <!-- <div class="progress-bar w-25 bg-success"></div> -->
                            </div>
                        </div>
                        <h5 class="">付款與運送方式</h5>
                    </div>

                    <div class="col-3 px-1 py-5 d-flex flex-column justify-content-center align-items-left">
                        <div class="position-relative w-100 ps-2">
                            <div class="my-circle my-circle-2 rounded-circle bg-white">
                                3

                            </div>
                            <div class="my-progress progress">
                                <!-- <div class="progress-bar w-25 bg-success"></div> -->
                            </div>
                        </div>
                        <h5 class="">填寫資料</h5>
                    </div>

                    <div class="col-3 px-1 py-5 d-flex flex-column justify-content-center align-items-left">
                        <div class="position-relative w-100 ps-2">
                            <div class="my-circle my-circle-2 rounded-circle bg-white">
                                4

                            </div>
                            <div class="my-progress my-color progress">
                                <!-- <div class="progress-bar w-25 bg-success"></div> -->
                            </div>
                        </div>
                        <h5 class="">完成訂購</h5>
                    </div>

                </div>



                <hr class="mt-0">
                <section class="my-paragraph" py-5>
                    <h2>訂單明細
                    </h2>
                    <div class="col-12 px-3 py-4 d-flex align-items-center justify-content-between">
                        <div class="d-flex w-100">
                            <div class="my-big-circle circle-1 rounded-circle "></div>
                            <div>
                                <div class="">沙發</div>
                                <div class="">#41551</div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <button class="px-2" id="my-click-1" @click="plus1">+</button>
                            <div class="my-count px-2" id="my-count-1">{{ data.furniture1 }}</div>
                            <button class="px-2" id="my-click-2" @click="minus1">-</button>
                            <div class="px-5" id="result1">${{ data.furniture1Price }}</div>
                        </div>
                    </div>
                    <hr class="my-0">
                    <div class="col-12 px-3 py-4 d-flex align-items-center justify-content-between">
                        <div class="d-flex w-100">
                            <div class="my-big-circle circle-2 rounded-circle bg-secondary"></div>
                            <div>
                                <div class="">櫃子</div>
                                <div class="">#66999</div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <button class="px-2" id="my-click-3" @click="plus2">+</button>
                            <div class="my-count px-2" id="my-count-2">{{ data.furniture2 }}</div>
                            <button class="px-2" id="my-click-4" @click="minus2">-</button>
                            <div class="px-5" id="result2">${{ data.furniture2Price }}</div>
                        </div>

                    </div>
                    <hr class="my-0">
                    <div class="col-12 px-3 py-4 d-flex  align-items-center justify-content-between">
                        <div class="d-flex w-100">
                            <div class="my-big-circle circle-3 rounded-circle bg-secondary"></div>
                            <div>
                                <div class="">椅子</div>
                                <div class="">#86577
                                </div>
                            </div>
                        </div>

                        <div class="d-flex">
                            <button class="px-2" id="my-click-5" @click="plus3">+</button>
                            <div class="my-count px-2" id="my-count-3">{{ data.furniture3 }}</div>
                            <button class="px-2" id="my-click-6" @click="minus3">-</button>
                            <div class="px-5" id="result3">${{ data.furniture3Price }}</div>
                        </div>

                    </div>
                    <hr class="mt-0">

                    <div class="d-flex px-4">
                        <ul class="my-margin justify-content-end my-result">
                            <li class="list-group-item d-flex">數量:
                                <div class="my-move" id="number">{{ Number(data.furniture1) + Number(data.furniture2) +
                                    Number(data.furniture3) }}</div>
                            </li>
                            <li class="list-group-item d-flex">小計:
                                <div class="my-move" id="small-count">${{
                                    (Number(data.furniture1Price) + Number(data.furniture2Price) +
                                        Number(data.furniture3Price)).toFixed(2) }}</div>
                            </li>
                            <li class="list-group-item d-flex">運費:
                                <div class="my-move">$20.90</div>
                            </li>
                            <li class="list-group-item d-flex">總計:
                                <div class="my-move" id="total">${{ (Number(data.furniture1Price) +
                                    Number(data.furniture2Price) +
                                    Number(data.furniture3Price) + 20.90).toFixed(2) }}</div>
                            </li>
                        </ul>

                    </div>
                    <hr class="mt-0">

                    <div class="d-flex justify-content-between px-5">
                        <button class="my-back" @click="$router.push('/')">←返回購物</button>
                        <button class="my-button" id="btn" @click="Next">下一步</button>
                    </div>

                </section>
            </div>




        </div>
        <!-- </div> -->


    </main>
</template>

<style>
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
