<template>
  <Carousel ref="carouselRef" :items-to-show="2" wrap-around :breakpoints="breakpoints" snap-align="start">

    <Slide v-for="cat in categories" :key="cat.id">
      <div class="card" @click="goToCategory(cat.slug)">
        <div class="img_container">
          <img :src="cat.image" :alt="cat.name" />
        </div>
        <div class="overlay">
          <h3>{{ cat.name }}</h3>
          <Icon name="next" />
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import Icon from '../components/Template/Icon.vue'

export default {
  name: "MyCarousel",

  components: { Carousel, Slide, Icon },

  props: {
    categories: {
      type: Array,
      required: true
    },
    command: {
      type: String,
      default: ''
    }
  },


  data() {
    return {
 currentIndex: 0,
      breakpoints: {
        1200: {
          itemsToShow: 5,
        },
        992: {
          itemsToShow: 4,
        },
        638: {
          itemsToShow: 3,
        },
        480: {
          itemsToShow: 2,
        }
      },
    }
  },

  watch: {
    command(val) {
      if (!this.$refs.carouselRef) return
      if (val === 'next') this.$refs.carouselRef.next()
      if (val === 'prev') this.$refs.carouselRef.prev()
    }
  },

  methods: {
    goToCategory(slug) {
      this.$router.push(`/category/${slug}`)
    }
  }
}
</script>

<style scoped>
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
  background: linear-gradient(180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.55) 60%,
      rgba(0, 0, 0, 0.9) 100%);
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
 .img_container {
      width: 138px;
      height: 140px;
    }
    .overlay {
  font-size: 14px;
}
}
}

</style>
