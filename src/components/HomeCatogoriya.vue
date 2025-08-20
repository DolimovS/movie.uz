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
import img_1 from "../assets/img1.png"
import img_2 from "../assets/img2.png"
import img_3 from "../assets/img3.png"
import img_4 from "../assets/img4.png"
import Sarlavha from "./Sarlavha.vue"
import NextBtn from "./NextBtn.vue"

export default {
  name: 'Home',

  components: {
    Corousel,
    Sarlavha,
    NextBtn,
  },

  data() {
    return {
      categories: [
        { id: 1, name: 'Komediya', slug: 'comedy', image: img_1 },
        { id: 2, name: 'Drama', slug: 'drama', image: img_2 },
        { id: 3, name: 'Action', slug: 'action', image: img_3 },
        { id: 4, name: 'Fantastika', slug: 'fantasy', image: img_4 },
        { id: 5, name: 'Komediya', slug: 'comedy', image: img_3 },
        { id: 6, name: 'Drama', slug: 'drama', image: img_4 },
        { id: 7, name: 'Action', slug: 'action', image: img_1 },
        { id: 8, name: 'Fantastika', slug: 'fantasy', image: img_2 },
        { id: 9, name: 'Komediya', slug: 'comedy', image: img_1 },
        { id: 10, name: 'Drama', slug: 'drama', image: img_2 },
        { id: 11, name: 'Action', slug: 'action', image: img_3 },
        { id: 12, name: 'Fantastika', slug: 'fantasy', image: img_4 },
        { id: 13, name: 'Komediya', slug: 'comedy', image: img_3 },
        { id: 14, name: 'Drama', slug: 'drama', image: img_4 },
        { id: 15, name: 'Action', slug: 'action', image: img_1 },
        { id: 16, name: 'Fantastika', slug: 'fantasy', image: img_2 },
      ],
      pagename: {
        name: "Explore our wide variety of categories",
        discription: "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      },
      command: '',
      btn_hiddden: true
    }
  },

  methods: {
    goNext() {
      this.command = 'next'
    },
    goPrev() {
      this.command = 'prev'
    },
    btn_hidden_toggle() {
    this.btn_hiddden = window.innerWidth < 750 ? false : true
  }

  },
   mounted() {
      this.btn_hidden_toggle() // sahifa yuklanganda tekshir
      window.addEventListener('resize', this.btn_hidden_toggle)
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.btn_hidden_toggle)
    }
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

.wrapper_home .controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 20px;
}

.wrapper_home button {
  padding: 8px 16px;
  border: none;
  background: #333;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

.wrapper_home button:hover {
  background: #555;
}

.wrapper_home .sarlavha {
  display: flex;
  /* border: 1px solid red; */
  width: 100%;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  padding: 0 10px;
}

.wrapper_home .corusel_container {
  /* width: 1600px; */
  width: 100%;
  position: relative;
  
  /* border: 1px solid red; */
}



@media (max-width: 750px) {
 .wrapper_home {
  max-width: 1600px;
  width: 100%;
  gap: 40px;

}
.wrapper_home .corusel_container {
  padding-bottom: 100px;
}
.next_btn_2{
  position:absolute;
  bottom: unset;right: 10px;
}
}
</style>
