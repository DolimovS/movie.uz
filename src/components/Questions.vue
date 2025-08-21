<template>
    <div>
        <div class="questions_title">
            <span class="question_number">01</span>
            <div class="question_text">
                <h1>What is StreamVibe?</h1>
                <p>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
            </div>
            <Icon :name="questionToggle ? 'minus' : 'plus'" />
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
            questionToggle: false,
        }
    }
}
</script>

<style>
.questions_title {
    display: flex;
    gap: 16px;
    align-items: start;
}

.question_number {
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #262626;
    background-color: #1F1F1F;
    font-family: Manrope;
    font-weight: 600;
    font-style: SemiBold;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;

}
</style>