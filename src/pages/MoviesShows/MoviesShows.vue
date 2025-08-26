<template>
    <div class="movies_shows_container">
    <MoviesHome/>
    </div>
</template>

<script>
import MoviesHome from '../../components/MoviesHome.vue';

    export default {
        name:"MoviesShows",
        components: {
            MoviesHome,
        }
    }
</script>

<style  >
.movies_shows_container{
    max-width: 1600px;
    margin: 0 auto ;
    display: flex;
    flex-direction: column;
    gap: 150px;
    padding: 10px;
}

</style>