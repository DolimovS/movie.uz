<template>
  <div class="qaestion_container">
    <div 
      v-for="(question, index) in questions" 
      class="questions_title" 
      @click="toggleQuestion(question.id)" 
      :key="index">
      <span class="question_number"> 0{{ question.id }}</span>
      <div class="question_text">
        <h1>{{ question.title }}</h1>
        <p v-if="activeQuestion === question.id">{{ question.answer }}</p>
      </div>
      <Icon :name="activeQuestion === question.id ? 'minus' : 'plus'" />
    </div>
  </div>
</template>

<script>
import Icon from './Template/Icon.vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      activeQuestion: null,
      questions: [
        {
          id: 1,
          title: "What is StreamVibe?",
          answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
        {
          id: 2,
          title: "How much does StreamVibe cost?",
          answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
        {
          id: 3,
          title: "How much does StreamVibe cost?",
          answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
        {
          id: 4,
          title: "How can I watch StreamVibe?",
          answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
        {
          id: 5,
          title: "How do I sign up for StreamVibe?",
          answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
         {
          id: 6,
          title: "What is the StreamVibe free trial?",
          answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
         {
          id: 7,
          title: "How do I contact StreamVibe customer support?",
          answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        },
         {
          id: 8,
          title: "What are the StreamVibe payment methods?",
          answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
        }
      ]
    }
  },
  methods: {
    toggleQuestion(id) {
      this.activeQuestion = this.activeQuestion === id ? null : id
    }
  }
}
</script>


<style>
.qaestion_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
}
.questions_title {
  display: flex;
  gap: 24px;
  align-items: start;
  padding: 30px;
  flex: 1 1 calc(40% - 30px);
  /* border: 1px solid red; */
  position: relative; /* ::after joylashishi uchun */
}

.questions_title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg, 
    rgba(229, 0, 0, 0) 0%, 
    #E50000 16.67%, 
    rgba(229, 0, 0, 0) 100%
  );
}

.question_number {
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #262626;
    background-color: #1F1F1F;
font-family: Manrope;
font-weight: 600;
font-style: SemiBold;
font-size: 20px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
}
.question_text{
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 560px;
    width: 100%;
}
.question_text h1{
font-family: Manrope;
font-weight: 500;
font-style: Medium;
font-size: 22px;
leading-trim: NONE;
line-height: 150%;
letter-spacing: 0%;
}
.question_text p{
font-family: Manrope;
font-weight: 400;
font-style: Regular;
font-size: 18px;
leading-trim: NONE;
line-height: 150%;
letter-spacing: 0%;
color: #999999;
}

@media (max-width:1120px) {

.questions_title {
  gap: 16px;
  padding: 24px;
}
.question_number {
    padding: 16px;
font-size: 16px;
}
.question_text{
    gap: 14px;
}
.question_text h1{
font-size: 20px;
}
.question_text p{
font-size: 16px;
}
}

@media (max-width:800px){
    .questions_title {
  flex: 1  calc(90% - 30px);
}
}

@media (max-width:450px) {

.questions_title {
  gap: 16px;
  padding: 24px 10px;
}
.question_number {
    padding: 12px;
}
.question_text{
    gap: 20px;
}
.question_text h1{
font-size: 18px;
}
.question_text p{
font-size: 14px;
}
}
</style>