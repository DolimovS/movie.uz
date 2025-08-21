<template>
    <div class="home">
        <HomeSection />
        <HomeCatogoriya />
        <div class="decices_product">
            <Sarlavha :title="devices_title" :description="devices_description" />
            <Devices />
        </div>
        <div class="questions_page">
            <div class="question_title">
                <Sarlavha :title="questions_title" :description="questions_description" />
                <Button :btn_title="btn_title"
                 btn_bc_color="#E50000"/>
            </div>
            <Questions/>
        </div>
    </div>
</template>

<script>
import HomeCatogoriya from '../components/HomeCatogoriya.vue';
import HomeSection from '../components/HomeSection.vue';
import Sarlavha from '../components/Sarlavha.vue';
import Questions from '../components/Questions.vue';
import Devices from "../components/Devices.vue"
import Button from "../components/Button.vue"


export default {
    name: "home",
    components: {
        HomeSection,
        HomeCatogoriya,
        Sarlavha,
        Devices,
        Button,
        Questions,
    },
    data() {
        return {
            devices_title: "We Provide you streaming experience across various devices.",
            devices_description: "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.",
            questions_title:"Frequently Asked Questions",
            questions_description:"Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!",

            btn_title:"Ask a Question",
        }
    }
}
</script>

<style>
.home {
    padding: 0 10px;
    max-width: 1600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 150px;
}

.decices_product {
    display: flex;
    flex-direction: column;
    gap: 80px;
    /* border: 1px solid red; */
}
/* questions_page */
.questions_page{
    display: flex;
    flex-direction: column;
    gap: 80px;
}
.question_title{
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 10px;
}

@media (max-width:1440px) {
    .decices_product {
        /* padding-top: 120px; */
        gap: 50px;
    }
    .home {
    gap: 80px;
}
}
@media (max-width:1000px) {
    .home {
    gap: 60px;
}
}

@media (max-width:600px) {
.question_title{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
}
 .decices_product {
        /* padding-top: 120px; */
        gap: 20px;
    }
    .home {
    gap: 20px;
}
}
</style>