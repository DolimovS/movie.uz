<template>
  <div class="wrapper_home ">
    <div class="sarlavha">
      <Sarlavha :title="pagename.name" :description="pagename.discription" />
      <NextBtn v-if="btn_hiddden" class="next_btn_1" @goPrev="goPrev" @goNext="goNext" />
    </div>

    <div class="corusel_container">
      <Corousel :categories="categories" :command="command" />
      <NextBtn v-if="!btn_hiddden" class="next_btn_2" @goPrev="goPrev" @goNext="goNext" />
    </div>
  </div>
</template>

<script>
import Corousel from "../utils/Corousel.vue"
import Sarlavha from "./Sarlavha.vue"
import NextBtn from "./NextBtn.vue"
import {categoriesData} from "../Data/CatogoriyaData"

export default {
  name: 'Home',

  components: {
    Corousel,
    Sarlavha,
    NextBtn,
  },

  data() {
    return {
      pagename: {
        name: "Explore our wide variety of categories",
        discription: "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      },
      command: 0,   // 🔥 counter bo‘ldi
      btn_hiddden: true,
      categories:categoriesData,
    }
  },

  methods: {
    goNext() {
      this.command++  // har safar +1
    },
    goPrev() {
      this.command--  // har safar -1
    },
    btn_hidden_toggle() {
      this.btn_hiddden = window.innerWidth < 750 ? false : true
    }
  },

  mounted() {
    this.btn_hidden_toggle()
    window.addEventListener('resize', this.btn_hidden_toggle)

  },
  beforeUnmount() {
    window.removeEventListener('resize', this.btn_hidden_toggle)
  },

}
</script>

<style>
.wrapper_home {
  max-width: 1600px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.wrapper_home .sarlavha {
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  padding: 0 10px;
}

.wrapper_home .corusel_container {
  width: 100%;
  position: relative;
  /* border: 1px solid red; */
}

@media (max-width: 750px) {
  .wrapper_home {
    gap: 40px;
  }

  .wrapper_home .corusel_container {
    padding-bottom: 100px;
  }

  .next_btn_2 {
    position: absolute;
    right: 10px;
  }
}
</style>
