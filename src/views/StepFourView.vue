<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      objectData: {},
      deliver: {},
      deliverData: {}
    };
  },
  mounted() {
    this.objectData = this.getStorage();
    this.deliver = this.getDeliver();
    this.deliverData = this.getDeliverData();
    console.log(this.objectData);
    console.log(this.deliver);
    console.log(this.deliverData);
  },
  methods: {
    getStorage() {
      return JSON.parse(sessionStorage.getItem('object')) || [];
    },
    getDeliver() {
      return JSON.parse(sessionStorage.getItem('deliver')) || [];
    },
    getDeliverData() {
      return JSON.parse(sessionStorage.getItem('deliverData')) || [];
    }
  },
};
</script>

<template>
  <main>
    <div class="my-container">
      <div class="px-3 py-3 my-container-normal">
        <h2>購物車</h2>
        <div class="d-flex ms-sm-5">
          <div class="col-3 px-1 py-5 d-flex flex-column justify-content-center align-items-left">
            <div class="position-relative w-100 ps-2">
              <div class="my-circle my-circle-1 rounded-circle bg-success">
                1

              </div>
              <div class="my-progress progress">
                <div class="progress-bar w-100 bg-success"></div>
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
                <div class="progress-bar w-100 bg-success"></div>
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
                <div class="progress-bar w-100 bg-success"></div>
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
          <h2 class="my-title">訂單成立
          </h2>
          <h4>訂單明細
          </h4>
          <div class="col-12 px-3 py-4 d-flex align-items-center justify-content-between">
            <div class="d-flex w-100">
              <div class="my-big-circle circle-1 rounded-circle "></div>
              <div>
                <div class="">沙發</div>
                <div class="">#41551</div>
              </div>
            </div>
            <div class="d-flex">
              <div class="px-2">x{{ objectData.furniture1 }}</div>

              <div class="px-5">$10.50</div>
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
              <div class="px-2">x{{ objectData.furniture2 }}</div>
              <div class="px-5">$30.50</div>
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
              <div class="px-2">x{{ objectData.furniture3 }}</div>
              <div class="px-5">$15.50</div>
            </div>

          </div>
          <div >
            <h4 class="my-2">寄送資料</h4>
            <h5 class="my-3">姓名 {{ deliverData.name }}</h5>
            <h5 class="my-3">電話 {{ deliverData.phone }}</h5>
            <h5 class="my-3">{{ deliverData.email }}</h5>
            <h5 class="my-3">地址 {{ deliverData.addressCity }}{{ deliverData.addressLocation }}{{
              deliverData.addressNumber }}</h5>
          </div>
          <hr class="mt-5">
          <div class="d-flex">
            <ul class="my-margin justify-content-end my-result">
              <li class="list-group-item d-flex">數量:
                <div class="my-move">{{ Number(objectData.furniture1) + Number(objectData.furniture2) +
                  Number(objectData.furniture3) }}</div>
              </li>
              <li class="list-group-item d-flex">小計:
                <div class="my-move">$${{
                  (Number(objectData.furniture1Price) + Number(objectData.furniture2Price) +
                    Number(objectData.furniture3Price)).toFixed(2) }}</div>
              </li>
              <li class="list-group-item d-flex">運費:
                <div class="my-move">$20.90</div>
              </li>
              <li class="list-group-item d-flex">總計:
                <div class="my-move">${{ (Number(objectData.furniture1Price) + Number(objectData.furniture2Price) +
                  Number(objectData.furniture3Price) + 20.90).toFixed(2) }}</div>
              </li>
            </ul>

          </div>
          <hr class="mt-0">

          <div class="d-flex justify-content-end px-5">
            <!-- <button class="my-back">上一步</button> -->
            <button class="my-button" @click="$router.push('/')">返回首頁</button>
          </div>

        </section>
      </div>




    </div>
    <!-- </div> -->


  </main>
</template>

<style scoped>
.my-px {
  padding: 0px 150px;
}

.my-container {
  width: 100%;
  height: 1250px;
  position: relative;
  background-color: #d1d4db;
  /* margin: auto; */
}

@media (max-width:820px) {
  .my-container {

    height: 1400px;

  }
}

.my-container-normal {
  width: 80%;
  height: 90%;
  background-color: #f3f4f6;
  position: absolute;
  left: 10%;
  top: 5%;

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

.my-input {
  margin-right: 10px;
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

.my-back {
  font-size: 18px;
  width: 150px;
  height: 50px;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid rgb(0, 122, 255);
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

.my-radio {
  margin-top: 2%;
}

.my-title {
  text-align: center;
}

@media (max-width:500px) {
  .my-container-normal {
    left: 2%;
    top: 2%;
    width: 96%;
    height: 97%;
  }
}
</style>
