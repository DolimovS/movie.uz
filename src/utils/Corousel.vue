<template>
  <Carousel
    ref="carousel"
    :items-to-show="4"
    :wrap-around="true"
    :breakpoints="breakpoints"
  >
  <Slide v-for="item in categories" :key="item.id">
    <router-link  to="catogoriyamovie" >
    <div class="card">
        <div class="img_container">
          <img :src="item.image" alt="imgage" />
        </div>
        <div class="overlay">
          <h3>{{item.name }}</h3>
          <Icon name="next"/>
        </div>
      </div>
    </router-link>
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel,  Slide } from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"
import Icon from "../components/Template/Icon.vue"
export default {
  props: {
    categories: {
      type: Array,
      required: true
    },
    command: {
      type: Number,
      required: true
    }
  },
  components: {
    Carousel,
    Slide,
    Icon,
  },
  data() {
    return {
      breakpoints: {
        1550: {
          itemsToShow: 5,
        },
        1024: {
          itemsToShow: 4,
        },
        720: {
          itemsToShow: 3,
        },
        510: {
          itemsToShow: 2,
        },
         310: {
          itemsToShow: 2,
        }
      }
    }
  },
  watch: {
    command(newVal, oldVal) {
      if (newVal > oldVal) {
        this.$refs.carousel.next()
      } else {
        this.$refs.carousel.prev()
      }
    }
  }
}
</script>

<style>
.card {
  position: relative;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  padding: 30px;
  background-color: #262626;
}

.img_container {
  position: relative;
  width: 237px;
  height: 252px;
  overflow: hidden;
}

.img_container img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img_container::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.55) 60%,
    rgba(0, 0, 0, 0.9) 100%
  );
  pointer-events: none;
  z-index: 1;
}

.overlay {
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Manrope;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0%;
}

@media (max-width: 1550px) {
  .card {
    padding: 20px;
  }

  .img_container {
    width: 207px;
    height: 222px;
  }
}

@media (max-width: 1440px) {
  .img_container {
    width: 191px;
    height: 210px;
  }

  .overlay {
    font-size: 16px;
  }
}

@media (max-width: 720px) {
  .img_container {
    width: 161px;
    height: 180px;
  }

  .overlay {
    font-size: 16px;
  }
}

@media (max-width: 634px) {
  .img_container {
    width: 207px;
    height: 222px;
  }
}

@media (max-width: 510px) {
  .img_container {
    width: 161px;
    height: 180px;
  }
}

@media (max-width: 450px) {
    .card {
    padding: 10px;
  }
  .img_container {
    width: 118px;
    height: 120px;
    /* padding: 10px; */
    /* border: 1px solid red;// */
  }
  .overlay {
    font-size: 14px;
  }
}
</style>
