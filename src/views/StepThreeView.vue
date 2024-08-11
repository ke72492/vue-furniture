<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      data: {},
      deliverData:{
        name:'',
        phone:'',
        email:'',
        addressCity:'',
        addressNumber:'',
        addressLocation:'',
      },
    };
  },

  mounted() {
    this.data = this.getStorage();
  },
  methods: {
    getStorage() {
      const jsonStorage = sessionStorage.getItem('object');
      if (!JSON.parse(jsonStorage)) {
        return [];
      }
      return JSON.parse(jsonStorage);
    },
    Next(){
      this.$router.push('/step-4');
      sessionStorage.setItem('deliverData', JSON.stringify(this.deliverData));
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
                <div class="progress-bar w-25 bg-success"></div>
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
          <h2>寄送資料
          </h2>
          <h5>姓名
          </h5>
          <div class="input-group mb-3">
            <input v-model="deliverData.name" type="text" class="form-control" placeholder="王小明" aria-label="Username"
              aria-describedby="basic-addon1">
          </div>
          <h5>電話
          </h5>
          <div class="input-group mb-3">
            <input v-model="deliverData.phone" type="number" class="form-control" placeholder="0912345678" aria-label="Username"
              aria-describedby="basic-addon1">
          </div>
          <h5>Email
          </h5>
          <div class="input-group mb-3">
            <input v-model="deliverData.email" type="email" class="form-control" placeholder="abc123@gmail.com" aria-label="Username"
              aria-describedby="basic-addon1">
          </div>
          <h5>地址
          </h5>
          <div class="input-group mb-3">
            <input v-model="deliverData.addressCity" type="text" class="form-control my-input" placeholder="城市" aria-label="Username"
              aria-describedby="basic-addon1">
            <input v-model="deliverData.addressNumber" type="text" class="form-control" placeholder="郵遞區號" aria-label="Username"
              aria-describedby="basic-addon1">
          </div>
          <div>
            <input v-model="deliverData.addressLocation" type="text" class="form-control" placeholder="地址" aria-label="Username"
              aria-describedby="basic-addon1">
          </div>
          <div class="my-5"></div>
          <hr>

          <div class="d-flex">
            <ul class="my-margin justify-content-end my-result">
              <li class="list-group-item d-flex">數量:
                <div class="my-move">{{ Number(data.furniture1) + Number(data.furniture2) +
                  Number(data.furniture3) }}</div>
              </li>
              <li class="list-group-item d-flex">小計:
                <div class="my-move">${{
                  (Number(data.furniture1Price) + Number(data.furniture2Price) +
                    Number(data.furniture3Price)).toFixed(2) }}</div>
              </li>
              <li class="list-group-item d-flex">運費:
                <div class="my-move">$20.90</div>
              </li>
              <li class="list-group-item d-flex">總計:
                <div class="my-move">${{ (Number(data.furniture1Price) + Number(data.furniture2Price) +
                  Number(data.furniture3Price) + 20.90).toFixed(2) }}</div>
              </li>
            </ul>

          </div>
          <hr class="mt-0">

          <div class="d-flex justify-content-between px-5">
            <button class="my-back" id="back-btn" @click="$router.push('/step-2')">上一步</button>
            <button class="my-button" id="next-btn" @click="Next">前往付款</button>
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
    height: 1100px;
    position: relative;
    background-color: #d1d4db;
    /* margin: auto; */
}

@media (max-width:820px) {
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
    background-image: url(@/assets/Img/images.jpg);
    background-size: cover;
}

.circle-2 {
    background-image: url(@/assets/Img/istockphoto-506472311-612x612.jpg);
    background-size: cover;
}

.circle-3 {
    background-image: url(@/assets/Img/shutterstock_1269582256.jpg);
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

@media (max-width:500px) {
    .my-container-normal{
        left: 2%;
        top: 2%;
        width: 96%;
        height: 97%;
    }
}
</style>
