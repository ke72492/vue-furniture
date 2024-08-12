<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      
    };
  },
  methods: {
    // nextStep(){
    //   this.$router.push('/step-1');
    // }
  },
};
</script>

<template>
    <!-- <div class="container my-container bg-primary"> -->
  <div class="row my-row">
    <!-- 左 -->
    <div class="col-6 my-picture">

      <div class="row d-flex">
        <div class="text">選擇您的家具</div>

        
      </div>

    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex my-set-icon">
      <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-facebook"></i></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-twitter"></i></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-instagram"></i></a></li>
    </ul>
    
    <!-- 右 -->
    <div class="col-6 my-set-color my-col">
      <!-- 右上 -->
      <div class="row d-flex justify-content-center my-move p-5">
        <div class="my-form p-5">
          <div class="d-flex">
            <div class="my-img"></div>
            <h1 class="title p-2">家具商城</h1>
          </div>
          <div class="box-area d-flex p-2">
            <div class="box">f</div>
            <div class="box">G+</div>
            <div class="box">in</div>
          </div>
          <div>或使用電子郵件傳送您的帳戶</div>

          <form action="http://localhost:5173/vue-furniture/step-1" class="w-100">

            <div class="input-group mb-3 my-input-email">

              <input type="email" class="form-control" placeholder="電子郵件" aria-label="Username"
                aria-describedby="basic-addon1" required>
            </div>
            <div class="input-group mb-3">

              <input type="password" class="form-control  my-input-password" placeholder="密碼" aria-label="Username"
                aria-describedby="basic-addon1" required>
            </div>
            <a href="" class="right">忘記密碼了嗎?</a>
            <input class="btn bg-primary m-1" type="submit" value="提交">
           
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

body {
    background-color: darkblue;
    margin: 0;
    padding: 0;
}

.my-row {
    width: 100%;
    height: 100vh;
    position: relative;
}

.my-form {
    width: 500px;
    height: 600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.my-move {
    align-items: center;
}

.title {
    text-align: center;
}

.box {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box-area {
    column-gap: 10px;
}

.btn {
    width: 100%;
    height: 20%;
    border-radius: 30px;
    color: white;
}

.my-img {
    background-image: url(@/assets/Img/lovepik-shop-png-image_400233775_wh1200.png);
    width: 50px;
    height: 50px;
    background-size: cover;
}

.right {
    justify-content: end;
}

.my-picture {
    background-image: url(@/assets/Img/8905.jpg_wh860.jpg);
    background-size: cover;
    /* opacity: 0.5; */
    position: relative;
}



.my-set-color {
    background-color: darkblue;
}

@media (max-width:623px) {
    .my-picture {
        display: none;
    }

    .my-col {
        width: 100%;
    }

    .my-set-color {
        background-color: transparent;
    }

    body {
        background-image: url(@/assets/Img/8905.jpg_wh860.jpg);
        background-size: cover;
    }
}

.my-set-icon {
    position: absolute;
    bottom: 10px;
    left: 0;
}

.text {
    position: absolute;
    left: 30%;
    top: 50%;
    font-size: 24px;
}
</style>
