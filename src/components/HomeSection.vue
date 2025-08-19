<template>
  <div>
    <div class="HomeSection">
      <div class="home_img">
        <div class="abstractDesingImg">
          <img :src="abstractDesing" alt="">
        </div>
        <ul class="img_card">
          <li v-for="(img, index) in images.concat(images)" :key="index">
            <img :src="img" alt="">
          </li>
        </ul>
        <ul class="img_card ">
          <li v-for="(img, index) in images.concat(images)" :key="index">
            <img :src="img" alt="">
          </li>
        </ul>
        <ul class="img_card">
          <li v-for="(img, index) in images.concat(images)" :key="index">
            <img :src="img" alt="">
          </li>
        </ul>
        <ul class="img_card ">
          <li v-for="(img, index) in images.concat(images)" :key="index">
            <img :src="img" alt="">
          </li>
        </ul>
      </div>

      <div class="home_texts">
        <div class="home_text">
          <h1>The Best Streaming Experience</h1>
          <p>
            StreamVibe is the best streaming experience for watching your favorite movies and shows
            on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content,
            including the latest blockbusters, classic movies, popular TV shows, and more. You can also
            create your own watchlists, so you can easily find the content you want to watch.
          </p>
        </div>
        <button class="start_btn">
          <Icon name="play" /> Start watching now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import img_1 from "../assets/img1.png"
import img_2 from "../assets/img2.png"
import img_3 from "../assets/img3.png"
import img_4 from "../assets/img4.png"
import img_5 from "../assets/img5.png"
import img_6 from "../assets/img6.png"
import img_7 from "../assets/img7.png"
import img_8 from "../assets/img8.png"
import img_9 from "../assets/img9.png"
import abstractDesing from "../assets/abstractDesing.png"
import Icon from "./Template/Icon.vue"

export default {
  name: "HomeSection",
  components: {
    Icon,
  },
  data() {
    return {
      abstractDesing,
      images: [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9]
    }
  }
}
</script>

<style scoped>
.HomeSection {
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  position: relative;
}

.home_img {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border: 1px solid red; */
  height: 860px;
}

.home_img::before,
.home_img::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 150px;
  pointer-events: none;
  z-index: 2;
}

.home_img::before {
  top: 0;
  background: linear-gradient(180deg, #141414 0%, transparent 100%);
}

.home_img::after {
  bottom: 0;
  background: linear-gradient(0deg, #141414 0%, transparent 100%);
}

.img_card {
  display: flex;
  gap: 20px;
  animation: scrollLeft 40s linear infinite;
  width: max-content;
}

.img_card li img {
  width: 195px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
}

@keyframes scrollLeft {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}


.abstractDesingImg {

  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.abstractDesingImg img {
  width: 470px;
  height: 470px;
  opacity: 0.8;
}


/* /////// */
.home_texts {
  margin: 0 auto;
  transform: translateY(-18px);
  max-width: 1096px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  z-index: 100;
}

.home_text {
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
}

.home_text h1 {
  font-family: Manrope;
  font-weight: 700;
  font-style: Bold;
  font-size: 58px;
  leading-trim: NONE;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
}

.home_text p {
  text-align: center;
  font-family: Manrope;
  font-weight: 400;
  font-style: Regular;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
}

.start_btn {
  display: flex;
  /* align-items: center; */
  justify-content: center;
  gap: 4px;
  padding: 18.5px 24px;
  border-radius: 8px;
  background-color: #E50000;
  border: none;
  font-family: Manrope;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 150%;
  letter-spacing: 0%;
}


@media (max-width: 1440px) {
  .home_img {
    gap: 10px;
    height: 670px;
  }

  .img_card {
    gap: 10px;
  }

  .img_card li img {
    width: 151px;
    height: 200px;
  }

  .abstractDesingImg img {
    width: 300px;
    height: 300px;
  }

  .home_texts {
    max-width: 1140px;
    gap: 10px;
    padding: 0 20px;
  }

  .home_text h1 {
    font-size: 48px;
  }

  .home_text p {
    font-size: 14px;
  }

  .start_btn {
    gap: 4px;
    padding: 15.5px 24px;
    font-size: 14px;
    align-items: center;
  }
}

@media (max-width: 600px) {
  .home_img {
    height: 470px;
  }

  .img_card li img {
    width: 134px;
    height: 143px;
    opacity: 1;
  }

  .abstractDesingImg img {
    width: 250px;
    height: 250px;
  }

  .home_texts {
    max-width: 1140px;
    gap: 10px;
    padding: 0 20px;
  }

  .home_text h1 {
    padding-top: 10px;
    transform: translateY(0px);
    font-size: 38px;
  }

  .home_text p {
    font-size: 14px;
  }

  .start_btn {
    gap: 4px;
    padding: 15.5px 24px;
    font-size: 14px;
    align-items: center;
  }
}

@media (max-width: 400px) {
  .home_img {
    gap: 10px;
    height: 490px;
  }

  .img_card {
    gap: 10px;
  }

  .img_card li img {
    width: 151px;
    height: 200px;
  }

  .abstractDesingImg img {
    width: 200px;
    height: 200px;
  }

  .home_texts {
    transform: translateY(-100px);
    max-width: 390px;
    z-index: 999;
    position: relative;
    gap: 10px;
    padding: 0 20px;
    /* border: 1px solid red; */
  }

  .home_text h1 {
    font-size: 28px;
  }

  .home_text p {
    font-size: 14px;
  }
}
</style>
