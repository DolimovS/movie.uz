<template>
 <div class="wrapper_home ">
    <div class="sarlavha">
        <Sarlavha  :title="pagename.name" :description="pagename.discription"/>
        <NextBtn />
    </div>
    

    <div class="corusel_container">
        <Corousel :categories="categories" :command="command"  />
    </div>
    <!-- Tugmalar -->
    <div class="controls">
      <button @click="goPrev">⬅ Oldingi</button>
      <button @click="goNext">Keyingi ➡</button>
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
      ],
      pagename:{
        name:"Explore our wide variety of categories",
        discription:"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      },
      command: '' // slayder boshqarish uchun
    }
  },

  methods: {
    goNext() {
      this.command = 'next'
    },
    goPrev() {
      this.command = 'prev'
    }
  }
}
</script>

<style >
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

.wrapper_home .sarlavha{
    display: flex;
    width: 100%;
    align-items: end;
    justify-content: space-between;
}
.wrapper_home .corusel_container{
    width: 1600px;
    width: 100%;
    /* border: 1px solid red; */
}
</style>
