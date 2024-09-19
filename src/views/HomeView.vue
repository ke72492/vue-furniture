<script>
export default {
  mounted() {
    this.initAos();
    this.initSwiper();

    window.onload = function () {
      lax.init()

      // Add a driver that we use to control our animations
      lax.addDriver('scrollY', function () {

        return window.scrollY
      })

      // Add animation bindings to elements
      lax.addElements('.my-lax-box', {
        // 垂直卷軸在動的時候

        scrollY: {
          translateX: [
            //   垂直進入畫面,垂直到達中央畫面,垂直出去畫面之外=>Y軸座標  
            ["elInY", "elCenterY", "elOutY"],
            // X軸位置0,中央,螢幕右邊
            [-1000, 'screenWidth/2-100', 'screenWidth'],
          ],

          scale: [
            //   垂直進入畫面,垂直到達中央畫面,垂直出去畫面之外=>Y軸座標  
            ["elInY", "elCenterY", "elOutY"],
            // 倍數
            [1, 1, 1],
          ],
          rotate: [
            //   垂直進入畫面,垂直到達中央畫面,垂直出去畫面之外=>Y軸座標  
            ["elInY", "elCenterY", "elOutY"],
            [0, 500, 1000],
            // 角度
            [0, 36000, 144000],
          ],
          opacity: [
            //   垂直進入畫面,垂直到達中央畫面,垂直出去畫面之外=>Y軸座標  
            ["elInY", "elCenterY", "elOutY"],
            // 角度
            [1, 0.5, 0],
          ]
        }
      })

    }
  },
  methods: {
    // AOS
    initAos() {
      AOS.init();
    },

    initSwiper() {
      new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
};
</script>

<template>
  <main>
    <picture>
      <div class="big-picture"></div>
    </picture>
    <div class="my-lax-box"></div>
    <div class="middle-container">
      <section class="m-5">
        <h3 class="m-3">家具商城</h3>
        <div class="m-3">選擇適合您的家具，選擇高品質的生活</div>
      </section>

      <section class="row" py-5>
        <div class="col-12 col-lg-4 px-3 py-5 d-flex flex-column justify-content-center align-items-center "
          data-aos="flip-right">
          <div class="my-circle rounded-circle my-bg-img1"></div>
          <h3 class="mt-5">沙發</h3>
          <h5 class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam, esse tempora
            dolorum aut possimus maxime sequi facilis, facere rem velit!</h5>
          <a href="" class="m-3">查看更多</a>

        </div>

        <div class="col-12 col-lg-4 px-3 py-5 d-flex flex-column justify-content-center align-items-center "
          data-aos="flip-left">
          <div class="my-circle rounded-circle my-bg-img2"></div>
          <h3 class="mt-5">櫃子</h3>
          <h5 class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam, esse tempora
            dolorum aut possimus maxime sequi facilis, facere rem velit!</h5>
          <a href="" class="m-3">查看更多</a>

        </div>

        <div class="col-12 col-lg-4 px-3 py-5 d-flex flex-column justify-content-center align-items-center "
          data-aos="flip-up">
          <div class="my-circle rounded-circle my-bg-img3"></div>
          <h3 class="mt-5">椅子</h3>
          <h5 class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam, esse tempora
            dolorum aut possimus maxime sequi facilis, facere rem velit!


          </h5>
          <a href="" class="m-3">查看更多</a>

        </div>

      </section>

      <button type="button" class="btn btn-primary w-25 mb-5" data-aos="zoom-in">訂購</button>

      <div class="d-flex m-5">
        <h3 class="mx-5">選擇適合您的尺寸</h3>
        <div class="mt-1">以下為尺寸範例</div>
      </div>

      <div class="container mb-5">
        <div class="row">
          <!-- 左 -->
          <div class="col-6">
            <!-- 左上 -->
            <div class="row">
              <div class="col-6 p-1" data-aos="zoom-in-up">
                <div class="my-size-img1"></div>
              </div>
              <div class="col-6 p-1" data-aos="zoom-in-down">
                <div class="my-size-img2"></div>
              </div>

            </div>
            <!-- 左下 -->
            <div class="row">
              <div class="col-12 p-1" data-aos="zoom-in-left">
                <div class="my-size-img3"></div>
              </div>

            </div>

          </div>
          <!-- 右 -->
          <div class="col-6">
            <!-- 右上 -->
            <div class="row">
              <div class="col-12 p-1" data-aos="zoom-in-right">
                <div class="my-size-img4"></div>
              </div>

            </div>
            <!-- 右下 -->
            <div class="row">
              <div class="col-6 p-1" data-aos="zoom-out">
                <div class="my-size-img5"></div>
              </div>
              <div class="col-6 p-1" data-aos="zoom-out-up">
                <div class="my-size-img6"></div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <section>
        <div class="m-3 mb-5">
          <h3 class="mx-3 mt-5">價格</h3>
          <div>以下為部分商品價格對照表</div>
        </div>
      </section>

      <table class="table" data-aos="zoom-out-right">
        <thead>
          <tr class="table-secondary">
            <th scope="col">商品</th>
            <th scope="col">產地</th>
            <th scope="col">存貨</th>
            <th scope="col">價格</th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">沙發</th>
            <td>臺灣</td>
            <td>5</td>
            <td>$10.5</td>
            <td scope="col">
              <div class="form-check">
                <label>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">

                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">櫃子</th>
            <td>臺灣</td>
            <td>8</td>
            <td>$30.5</td>
            <td scope="col">
              <div class="form-check">
                <label>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">

                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">椅子</th>
            <td>臺灣</td>
            <td>10</td>
            <td>15.5</td>
            <td scope="col">
              <div class="form-check">
                <label>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">

                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-between w-100 my-5">
        <a href="" class="">查看更多</a>
        <button type="button" class="btn btn-primary w-25">訂購</button>
      </div>

      <div class="d-flex justify-content-between w-100 my-5">
        <h3>選擇尺寸樣式</h3>
        <div>以下為部分商品的尺寸樣式</div>
      </div>

      <div class="d-flex w-100 justify-content-evenly my-card-wrap" data-aos="zoom-out-left">
        <div class="p-4 my-card-color m-1 my-card-width">
          <div class="my-card-color">
            <div class="my-card-img1"></div>
            <div class="card-body">
              <a href="#" class="">訂閱</a>
              <h5 class="card-title my-3">沙發</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>
          </div>
        </div>
        <div class="p-4 my-card-color m-1 my-card-width" data-aos="fade-up" data-aos-duration="3000">
          <div class="my-card-color">
            <div class="my-card-img2"></div>
            <div class="card-body">
              <a href="#" class="">訂閱</a>
              <h5 class="card-title my-3">櫃子</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>
          </div>
        </div>
        <div class="p-4 my-card-color m-1 my-card-width" data-aos="fade-down" data-aos-easing="linear"
          data-aos-duration="1500">
          <div class="my-card-color">
            <div class="my-card-img3"></div>
            <div class="card-body">
              <a href="#" class="">訂閱</a>
              <h5 class="card-title my-3">桌子</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>
          </div>
        </div>
        <div class="p-4 my-card-color m-1 my-card-width" data-aos="fade-left" data-aos-anchor="#example-anchor"
          data-aos-offset="500" data-aos-duration="500">
          <div class="my-card-color">
            <div class="my-card-img4"></div>
            <div class="card-body">
              <a href="#" class="">訂閱</a>
              <h5 class="card-title my-3">椅子</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>
          </div>
        </div>
      </div>

      <section class="row px-5 my-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300"
        data-aos-offset="0">
        <div class="col-md-5 d-flex justify-content-center">
          <div class="my-circle rounded-circle my-bg-img1"></div>
        </div>
        <div class="col-md-7 d-flex flex-wrap flex-column justify-content-center mb-3 mb-md-0">
          <h2 class="1h-1">沙發</h2>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam, esse tempora dolorum
            aut possimus maxime sequi facilis, facere rem velit! Quidem facilis perspiciatis corporis
            quibusdam reprehenderit! Sunt, minus velit!</div>
        </div>
        <a href="" class="">查看更多</a>
      </section>
      <hr>
      <section class="row px-5 my-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">

        <div class="col-md-7 d-flex flex-wrap flex-column justify-content-center mb-3 mb-md-0">
          <h2 class="1h-1">櫃子</h2>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam, esse tempora dolorum
            aut possimus maxime sequi facilis, facere rem velit! Quidem facilis perspiciatis corporis
            quibusdam reprehenderit! Sunt, minus velit!</div>
        </div>
        <div class="col-md-5 d-flex justify-content-center">
          <div class="my-circle rounded-circle my-bg-img2"></div>
        </div>
        <a href="" class="">查看更多</a>
      </section>
      <hr>
      <section class="row px-5 my-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div class="col-md-5 d-flex justify-content-center">
          <div class="my-circle rounded-circle my-bg-img3"></div>
        </div>
        <div class="col-md-7 d-flex flex-wrap flex-column justify-content-center mb-3 mb-md-0">
          <h2 class="1h-1">椅子</h2>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam, esse tempora dolorum
            aut possimus maxime sequi facilis, facere rem velit! Quidem facilis perspiciatis corporis
            quibusdam reprehenderit! Sunt, minus velit!</div>
        </div>
        <a href="" class="">查看更多</a>
      </section>

      <button type="button" class="btn btn-primary w-25 my-5">訂購</button>

      <section class="row py-5" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div class="col-md-5">
          <img class="w-100" src="@/assets/Img/桌椅.png" alt="">
        </div>
        <div class="col-md-7 d-flex flex-wrap flex-column justify-content-center mb-3 mb-md-0">
          <div class="">家具商城</div>
          <h2 class="1h-1 my-1">桌椅</h2>
          <div class="d-flex my-1">
            <i class="bi bi-star-fill my-icon-color mx-1"></i>
            <i class="bi bi-star-fill my-icon-color mx-1"></i>
            <i class="bi bi-star-fill my-icon-color mx-1"></i>
            <i class="bi bi-star-fill my-icon-color mx-1"></i>
            <i class="bi bi-star my-icon-color mx-1"></i>
            <div class="mx-3">4 review</div>
            <div class=""> | </div>
            <ul class="nav justify-content-end list-unstyled d-flex my-set-icon">
              <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-facebook"></i></a>
              </li>
              <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-twitter"></i></a>
              </li>
              <li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-instagram"></i></a>
              </li>
            </ul>
          </div>


          <div class="my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam, esse
            tempora dolorum aut possimus maxime sequi facilis, facere rem velit! Quidem facilis perspiciatis
            corporis quibusdam reprehenderit! Sunt, minus velit!</div>

          <div class="d-flex mt-5">
            <div class="m-1 mx-1">color</div>
            <div class="d-flex mt-1 mx-1">
              <div class="my-color-circle m-1 bg-white"></div>
              <div class="my-color-circle m-1 bg-black"></div>
              <div class="my-color-circle m-1 bg-primary"></div>
            </div>
            <div class="m-1 mx-3">size</div>
            <div class="form-floating mt-1">
              <select class="" id="floatingSelect">
                <option value="1">SM</option>
                <option value="2">L</option>
                <option value="3">XL</option>
              </select>
            </div>
          </div>
          <hr>
          <div class="d-flex justify-content-between w-100">
            <h2>$58</h2>
            <div>
              <button type="button" class="btn btn-primary">訂購</button>
              <i class="bi bi-heart-fill p-3"></i>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-evenly mt-5 my-card-flex" data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">
          <div class="card my-card-width">
            <div class="my-card-picture1"></div>
            <div class="card-body">
              <div>種類</div>
              <h5 class="card-title my-3">沙發</h5>
              <p class="card-text">$50.00</p>

            </div>
          </div>

          <div class="card my-card-width" data-aos="fade-up" data-aos-anchor-placement="top-center">
            <div class="my-card-picture2"></div>
            <div class="card-body">
              <div>種類</div>
              <h5 class="card-title my-3">長椅</h5>
              <p class="card-text">$30.00</p>

            </div>
          </div>

          <div class="card my-card-width" data-aos="fade-up" data-aos-anchor-placement="center-center">
            <div class="my-card-picture3"></div>
            <div class="card-body">
              <div>種類</div>
              <h5 class="card-title">書桌</h5>
              <p class="card-text">$35.00</p>

            </div>
          </div>

          <div class="card my-card-width" data-aos="fade-up" data-aos-anchor-placement="bottom-center">
            <div class="my-card-picture4"></div>
            <div class="card-body">
              <div>種類</div>
              <h5 class="card-title">小型櫃子</h5>
              <p class="card-text">$15.00</p>

            </div>
          </div>
        </div>

        <div class="d-flex justify-content-evenly mt-3 my-card-flex" data-aos="fade-up"
          data-aos-anchor-placement="bottom-center">
          <div class="card my-card-width">
            <div class="my-card-picture5"></div>
            <div class="card-body">
              <div>種類</div>
              <h5 class="card-title">沙發組合</h5>
              <p class="card-text">$40.00</p>

            </div>
          </div>

          <div class="card my-card-width" data-aos="fade-up" data-aos-anchor-placement="bottom-center">
            <div class="my-card-picture6"></div>
            <div class="card-body">
              <div>種類</div>
              <h5 class="card-title">桌椅組合</h5>
              <p class="card-text">$45.00</p>

            </div>
          </div>

          <div class="card my-card-width" data-aos="fade-up" data-aos-anchor-placement="bottom-center">
            <div class="my-card-picture7"></div>
            <div class="card-body">
              <div>種類</div>
              <h5 class="card-title">客廳組合</h5>
              <p class="card-text">$25.00</p>

            </div>
          </div>

          <div class="card my-card-width" data-aos="fade-up" data-aos-anchor-placement="bottom-center">
            <div class="my-card-picture8"></div>
            <div class="card-body">
              <div>種類</div>
              <h5 class="card-title">長型沙發</h5>
              <p class="card-text">$10.00</p>

            </div>
          </div>
        </div>


      </section>
    </div>

    <div class="my-3 my-feedback-style">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.1622848986663!2d120.68254185902933!3d23.95789153938741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346931fa13476609%3A0xff49d973a4d51c49!2z5Lit6IiI5aSn5a245Y2X5oqV5qCh5Y2A77yI57ac5ZCI5aSn5qiT77yJ!5e0!3m2!1szh-TW!2stw!4v1721230605386!5m2!1szh-TW!2stw"
        width="600" height="700" style="border:0;filter: grayscale(1) contrast(1.2) opacity(0.7);" allowfullscreen=""
        loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-100"></iframe>

      <div class="bg-white my-feedback-form p-4" id="my-feedback-table">
        <h3 class="m-3">
          回饋
        </h3>
        <div class="m-3">
          寫一些留言在這裡
        </div>
        <div>
          Email
        </div>
        <div class="form-floating mb-3 w-100">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email 地址</label>
        </div>
        <div>
          留言
        </div>
        <div class="form-floating w-100">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
            style="height: 100px"></textarea>
          <label for="floatingTextarea2">文字</label>
        </div>
        <button type="button" class="btn btn-primary my-3 w-100">送出</button>
        <div>
          給您頂級的服務
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

body {
    font-family: Century Gothic, sans-serif;
    font-weight: 400;
    font-style: normal;
    overflow-x: hidden;
    position: relative;
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

.my-card-color {
    background-color: antiquewhite;

}

.my-card-width {
    width: 23%;
}



.my-card-wrap {
    flex-wrap: wrap;
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

.big-picture {
    /* background-color: aquamarine; */
    background-image: url(@/assets/Img/a75ff40f8a1d9ffe86a4b426aa9a3a93_t.jpeg);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 500px;
}

.middle-container {
    /* background-color: bisque; */
    width: 65%;
    /* height: 3000px; */
    margin: auto;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
    
}



.my-max-h-75 {
    max-height: 75vh;
}

.my-circle {
    width: 140px;
    height: 140px;
}

.my-card-img1 {
    /* background-color: blueviolet; */
    background-image: url(@/assets/Img/沙發.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 100px;
}

.my-card-img2 {
    /* background-color: blueviolet; */
    background-image: url(@/assets/Img/櫃子.jpeg);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 100px;
}

.my-card-img3 {
    /* background-color: blueviolet; */
    background-image: url(@/assets/Img/桌子.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 100px;
}

.my-card-img4 {
    /* background-color: blueviolet; */
    background-image: url(@/assets/Img/椅子.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 100px;
}

.my-icon-color {
    color: blue;

}

.my-color-circle {
    width: 12px;
    height: 12px;
    border-radius: 50px;
    border: 3px solid black;
    cursor: pointer;
}

.my-bg-img1 {
    background-image: url(@/assets/Img/E1169960698116.png);
    background-size: cover;
    background-color: white;
}

.my-bg-img2 {
    background-image: url(@/assets/Img/E1682831893191.jpg);
    background-size: cover;
}

.my-bg-img3 {
    background-image: url(@/assets/Img/Q1712905524591.jpg);
    background-size: cover;
}

.my-feedback-style {
    position: relative;
}

.my-feedback-form {
    position: absolute;
    right: 5%;
    top: 10%;
    width: 400px;
    height: 80%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (max-width:450px) {
    .my-feedback-form{
        width: 300px;
    }
}

@media (max-width:1400px) {
    .my-card-flex {
        flex-direction: column;
    }

    .my-card-width {
        width: 100%;

    }

    .my-card-img1 {
        height: 400px;
    }

    .my-card-img2 {
        height: 400px;
    }

    .my-card-img3 {
        height: 400px;
    }

    .my-card-img4 {
        height: 400px;
    }
}

.my-card-picture1 {
    background-image: url(@/assets/Img/1.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 100px;
}

.my-card-picture2 {
    background-image: url(@/assets/Img/2.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 100px;
}

.my-card-picture3 {
    background-image: url(@/assets/Img/3.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 100px;
}

.my-card-picture4 {
    background-image: url(@/assets/Img/4.webp);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 100px;
}

.my-card-picture5 {
    background-image: url(@/assets/Img/5.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 100px;
}

.my-card-picture6 {
    background-image: url(@/assets/Img/6.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 100px;
}

.my-card-picture7 {
    background-image: url(@/assets/Img/7.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 100px;
}

.my-card-picture8 {
    background-image: url(@/assets/Img/8.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 100px;
}

.card {
    border: 0;
}

.my-size-img1 {
    background-image: url(@/assets/Img/A.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 300px;
}

.my-size-img2 {
    background-image: url(@/assets/Img/B.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 300px;
}

.my-size-img3 {
    background-image: url(@/assets/Img/C.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 300px;
}

.my-size-img4 {
    background-image: url(@/assets/Img/D.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 300px;
}

.my-size-img5 {
    background-image: url(@/assets/Img/E.avif);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 300px;
}

.my-size-img6 {
    background-image: url(@/assets/Img/F.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
    width: 100%;
    height: 300px;
}

.my-lax-box {
    background-image: url(@/assets/Img/images.jpg);
    background-size: cover;
    /* background-position: center; */
    width: 100px;
    height: 100px;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    overflow: hidden;
    position: absolute;
    z-index: 9;
}
</style>
