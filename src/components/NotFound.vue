<template>
  <div class="notfound_container">
    <h1 class="error_code">404</h1>
    <p class="error_text">Uzr! Siz qidirayotgan sahifa topilmadi.</p>
    
    <router-link to="/">
      <button class="back_btn">Bosh sahifaga qaytish</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.notfound_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  background-color: #0d0d0d;
  color: #fff;
}

.error_code {
  font-size: 6rem;
  font-weight: bold;
  color: #e50000;
  margin-bottom: 20px;
}

.error_text {
  font-size: 1.3rem;
  margin-bottom: 30px;
  color: #ccc;
}

.back_btn {
  padding: 12px 24px;
  background-color: #e50000;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.back_btn:hover {
  background-color: #b30000;
}





</style>
