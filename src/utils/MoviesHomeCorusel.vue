<template>
    <div>
        <Carousel :itemsToShow="1" :autoplayTimeout="300">
            <Slide v-for="product in products" :key="product.id">
                <div class="moviesCard" :style="{ backgroundImage: `url('${product.image}')` }">
                    <div class="cardOverlay">
                        <div class="meta">
                            <span class="id">#{{ product.id }}</span>
                            <h3 class="title">{{ product.title }}</h3>
                            <p class="desc">{{ product.description }}</p>
                        </div>
                        <div class="slider_btn">
                            <button class="prev_btn_1"><Icon name="prev"/></button>
                            <button class="next_btn_1"><Icon name="next"/></button>
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

export default {
    name: 'MoviesHomeCorusel',
    components: { Carousel, Slide ,Icon},
    data() {
        return {
            products: [
                { id: 1, image: 'https://picsum.photos/seed/1/1200/600', title: 'Kino 1', description: "Qisqacha ta'rif: sarguzasht va dramatik hikoya." },
                { id: 2, image: 'https://picsum.photos/seed/2/1200/600', title: 'Kino 2', description: "Komediya janrida kulgili sahnalar va iliq obrazlar." },
                { id: 3, image: 'https://picsum.photos/seed/3/1200/600', title: 'Kino 3', description: "Romantik syujet, his-tuyg'ularga boy." },
                { id: 4, image: 'https://picsum.photos/seed/4/1200/600', title: 'Kino 4', description: "Ilmiy fantaziya va kelajak manzaralari." },
                { id: 5, image: 'https://picsum.photos/seed/5/1200/600', title: 'Kino 5', description: "Triller: sirli voqealar va hayajon." },
                { id: 6, image: 'https://picsum.photos/seed/6/1200/600', title: 'Kino 6', description: "Oilaviy drama, qadr-qimmat va qadriyatlar." },
                { id: 7, image: 'https://picsum.photos/seed/7/1200/600', title: 'Kino 7', description: "Animatsion sarguzashtlar va rang-barang dunyo." },
                { id: 8, image: 'https://picsum.photos/seed/8/1200/600', title: 'Kino 8', description: "Tarixiy film, o'ziga xos zamon manzarasi." },
                { id: 9, image: 'https://picsum.photos/seed/9/1200/600', title: 'Kino 9', description: "Kriminal syujet, tergov va intriga." },
                { id: 10, image: 'https://picsum.photos/seed/10/1200/600', title: 'Kino 10', description: "Sarguzasht va do'stlik haqida jonli film." }
            ]
        };
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
.cardOverlay{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
}


.slider_btn{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border: 1px solid red;
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

</style>