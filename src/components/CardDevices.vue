<template>
    <div class="card_container">
        <div class="card_container_text">
            <Icon class="card_icon" name="telefon" />
            <h1>{{ card_text }}</h1>
        </div>
        <div class="card_container_description">
            <p>{{ card_discription }}</p>
        </div>
    </div>
</template>

<script>
import Icon from './Template/Icon.vue';

export default {
    components: {
        Icon,
    },
    props: {
        card_text: {
            type: String,
            required: true,
        },
        card_discription: {
            type: String,
            required: true,
        }


    }
}
</script>

<style>
.card_container {
     flex: 1 1 calc(33.333% - 30px);
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 1px solid #262626;
  padding: 50px;
  border-radius: 12px;
  background: 
    linear-gradient(0deg, #0F0F0F, #0F0F0F),
    linear-gradient(
      221.52deg,
      rgba(240, 5, 5, 0.212) 0%,     /* qizil faqat boshida */
      rgba(229, 0, 0, 0.0) 30%     /* 40% ga kelganda yo‘qoladi */
    );
  background-blend-mode: overlay;
  color: #fff;
}


.card_container_text {
    display: flex;
    gap: 16px;
    align-items: center;
}

.card_icon {
    border: 1px solid #1F1F1F;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    border-radius: 12px;
    background-color: #141414;
}

.card_container_text h1 {
    font-family: Manrope;
    font-weight: 600;
    font-style: SemiBold;
    font-size: 24px;
    /* leading-trim: NONE; */
    line-height: 150%;
    letter-spacing: 0%;

}
.card_container_description {
    max-width: 400px;
}
.card_container_description p {
    font-family: Manrope;
    font-weight: 400;
    font-style: Regular;
    font-size: 18px;
    /* leading-trim: NONE; */
    line-height: 150%;
    letter-spacing: 0%;
}

@media (max-width:1440px) {
.card_container {
  gap: 24px;
  padding: 40px;
  /* border: 1px silid red; */
}
.card_container_text {
    gap: 12px;
}
.card_icon {
    width: 54px;
    height: 54px;
}
.card_container_text h1 {
    font-size: 20px;
}

.card_container_description p {
    font-size: 16px
}
.card_container_description {
    max-width: 333px;
}

}
@media (max-width: 1124px) {
  .card_container {
    flex: 1 1 calc(50% - 20px); /* 2 tadan qator */
  }
}
@media (max-width: 734px) {
.card_container {
  gap: 20px;
  padding: 24px;
}
.card_container_text {
    gap: 8.5px;
}
.card_icon {
    width: 44px;
    height: 44px;
}
.card_container_text h1 {
    font-size: 18px;
}

.card_container_description p {
    font-size: 14px
}
}
@media (max-width: 570px) {
.card_container {
    flex: 1 1 100%;
}

}
</style>