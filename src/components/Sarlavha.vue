<template>
    <div class="sarlavha_contanier">
        <div class="container_text">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        component: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.sarlavha_contanier {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
}

.container_text {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.container_text h1 {
    font-family: Manrope;
    font-weight: 700;
    font-style: Bold;
    font-size: 38px;
    /* leading-trim: NONE; */
    line-height: 150%;
    letter-spacing: 0%;
}

.container_text p {
    font-family: Manrope;
    font-weight: 400;
    font-style: Regular;
    font-size: 18px;
    /* leading-trim: NONE; */
    line-height: 150%;
    letter-spacing: 0%;
    max-width: 1290px;
}
@media (max-width: 1220px) {
.container_text h1 {
    font-size: 28px;
}
.container_text p {
    font-size: 16px;
}
}
@media (max-width: 1220px) {
.container_text h1 {
    font-size: 28px;
}
.container_text p {
    font-size: 14px;
}
}
</style>