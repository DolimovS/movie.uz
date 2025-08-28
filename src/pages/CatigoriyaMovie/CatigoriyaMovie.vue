<template>
    <div class="catogoriya_movie_container">
        <div class="catigoriya_title">
            <h1>{{ selectedCategoryName }}</h1>
            <div class="catigoriya_sellect">
                <select class="catigoriya_select" v-model="selectedCategoryId">
                    <option value="all">All</option>
                    <option v-for="item in source" :key="item.id" :value="item.id">
                        {{ item.name }}
                    </option>
                </select>
            </div>
        </div>

        <div class="kinolar">
            <!-- <p><b>Server filter key:</b> {{ selectedCategoryEngName }}</p> -->
            <div class="kinolar_container">
                <div v-for="item in allmovie" :key="item.id" class="card_kino">
                    <router-link>
                        <div class="onekonilar">
                            <img :src="item.bannerUrl" alt="movie images">
                            <div class="kino_title">
                                <h1>{{ item.title.uz }}</h1>
                                <p class="kino_time">2:39:01</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { categoriesData } from "../../Data/CatogoriyaData";

export default {
    props: {
        categoryId: {
            type: String,
            default: "all"
        }
    },
    data() {
        return {
            source: categoriesData,
            selectedCategoryId: "all",
            allmovie: [],
        };
    },
    computed: {
        selectedCategory() {
            if (this.selectedCategoryId === "all") {
                return { id: "all", name: "All", engName: "all" }
            }
            return this.source.find(item => item.id === this.selectedCategoryId)
        },

        selectedCategoryName() {
            return this.selectedCategory?.name || "All"
        },

        selectedCategoryEngName() {
            return this.selectedCategory?.engName || "all"
        }



    },
    mounted() {
        if (this.categoryId !== "all") {
            this.selectedCategoryId = this.categoryId;
        }
        fetch("https://movie-beckend.vercel.app/api/movie")
            .then(r => r.json())
            .then(data => {
                this.allmovie = data.items
                console.log(this.allmovie);

            })
            .catch(

        )
    }
};
</script>

<style>
.catogoriya_movie_container {
    max-width: 1600px;
    padding: 0 160px 10px; 
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
    /* border: 1px solid red; */
}

.catigoriya_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.catigoriya_title>h1 {
    font-family: Manrope;
    font-weight: 700;
    font-style: Bold;
    font-size: 38px;
    line-height: 150%;
    letter-spacing: 0%;
}

.catigoriya_select {
    padding: 10px;
    outline: none;
    background-color: black;
    border: 3px solid #202020;
    color: white;
    font-size: 20px;
    border-radius: 10px;
}

.kinolar_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 42px;
    justify-content: center;
}

.onekonilar {
    padding: 20px;
    border-radius: 20px;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    transition: 0.3s all;
}

.onekonilar:hover {
    transform: scale(1.01);
}

.onekonilar img {
    width: 100%;
    height: 350px;
    border-radius: 20px;
}

/* Kino title */
.kino_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
}

.kino_title h1 {
    font-family: Manrope;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
}

.kino_time {
    padding: 5px 10px;
    border-radius: 100px;
    background-color: #262626;
    font-family: Manrope;
}
@media (max-width: 1440px) {
    .catogoriya_movie_container {
    padding: 0 80px 10px; 
}
}
@media (max-width: 770px) {
    .catogoriya_movie_container {
    padding: 0 20px 10px; 
}
}

@media (max-width: 1220px) {
    .kinolar_container {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }

    .onekonilar img {
        height: 340px;
    }
}

@media (max-width: 900px) {
    .catogoriya_movie_container {
        gap: 30px;
    }

    .kinolar_container {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }

    .onekonilar img {
        height: 300px;
    }

    .kino_time {
        display: none;
    }
}

@media (max-width: 550px) {
    .catogoriya_movie_container {
        gap: 25px;
    }

    .kinolar_container {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .catigoriya_select {
        padding: 5px;
        font-size: 15px;
    }

    .catigoriya_title>h1 {
        font-size: 25px;
    }

    .onekonilar {
        padding: 10px;
    }

    .onekonilar img {
        width: 100%;
        height: 180px;
        margin: 0 auto;
    }

    .kino_title h1 {
        font-size: 16px;
        font-weight: 500;
        text-align: center;
    }
}
</style>
