<template>
    <div>
        <Carousel ref="corousel" :itemsToShow="1" wrapAround :autoplay="5000">
            <Slide v-for="product in products" :key="product.id">
                <div class="moviesCard" :style="{ backgroundImage: `url('${product.bannerUrl}')` }">
                    <div class="cardOverlay">
                        <div class="meta">
                            <div class="meta_text">
                                <h2 class="title">{{ product.title.uz }}</h2>
                                <p>{{ product.description.uz }}</p>
                            </div>
                            <div class="corusel_btn">
                                <router-link :to="`/movies/${product.id}`">
                                    <Button btn_title="Play Now" btn_bc_color="red" />
                                </router-link>

                            </div>
                        </div>
                        <div class="slider_btn">
                            <button @click="prevSlide" class="prev_btn_1">
                                <Icon name="prev" />
                            </button>
                            <button @click="nextSlide" class="next_btn_1">
                                <Icon name="next" />
                            </button>
                        </div>
                    </div>
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import Icon from "../components/Template/Icon.vue";
import Button from '../components/Button.vue';

export default {
    name: 'MoviesHomeCorusel',
    components: { Carousel, Slide, Icon, Button, },
    data() {
        return {
            products: [ ],
        };


    },
    methods: {
        nextSlide() {
            this.$refs.corousel.next()
        },
        prevSlide() {
            this.$refs.corousel.prev()
        },
    },
    mounted() {
        fetch("https://movie-beckend.vercel.app/api/movie")
            .then(r => r.json())
            .then(data =>{
                 console.log(data)
                this.products=data.items
                console.log(this.products);
                
                }
        );

    }
};
</script>

<style>
.moviesCard {
    width: 1594px;
    height: 835px;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
}

.meta {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    z-index: 99;
}

.cardOverlay {
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    text-align: center;
    justify-content: center;
    padding-bottom: 20px;
    position: relative;
}

.cardOverlay::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 550px;
    pointer-events: none;
    z-index: 2;
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
}

.meta_text {
    max-width: 1200px;
    padding: 0 20px;
}

.meta_text h2 {
    font-family: Manrope;
    font-weight: 700;
    font-style: Bold;
    font-size: 38px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFFFF;
}

.meta_text p {
    font-family: Manrope;
    font-weight: 500;
    font-style: Medium;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    color: #999999;
}


.slider_btn {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    z-index: 99;
}

.prev_btn_1,
.next_btn_1 {
    padding: 14px;
    border-radius: 8px;
    border: 1px solid #1F1F1F;
    background-color: #0F0F0F;
}

.prev_btn_1:hover,
.next_btn_1:hover {
    background: rgba(0, 0, 0, 0.8);
}


@media (max-width: 1440px) {
    .moviesCard {
        width: 1280px;
        height: 610px;
    }

    .meta {
        gap: 24px;
    }

    .cardOverlay {
        gap: 40px;
        padding-bottom: 16px;
    }

    .meta_text h2 {
        font-size: 30px;
    }

    .meta_text p {
        font-size: 16px;
    }

    .slider_btn {
        padding: 0 40px;
    }

    .prev_btn_1,
    .next_btn_1 {
        padding: 12px;
    }
}


@media (max-width: 950px) {
    .moviesCard {
        /* width:1280px; */
        height: 510px;
    }

    .meta {
        gap: 20px;
    }

    .cardOverlay {
        gap: 30px;
        padding-bottom: 12px;
    }

    .meta_text h2 {
        font-size: 25px;
    }

    .meta_text p {
        font-size: 12px;
    }

    .slider_btn {
        padding: 0 30px;
    }

    .prev_btn_1,
    .next_btn_1 {
        padding: 10px;
    }
}

@media (max-width: 750px) {
    .moviesCard {
        height: 430px;
    }
}

@media (max-width: 590px) {
    .meta_text p {
        display: none;
    }
}

@media (max-width: 460px) {
    .slider_btn {
        display: none;
    }

    .moviesCard {
        width: 360px;
        height: 410px;
    }
}
</style>