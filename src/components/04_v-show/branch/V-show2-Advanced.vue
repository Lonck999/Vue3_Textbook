<template>
  <div>
    <h1>v-show2 Advanced</h1>
    <button @click="currentTab = 'home'">Home</button>
    <button @click="currentTab = 'profile'">Profile</button>
    <button @click="currentTab = 'messages'">Messages</button>

    <div v-show="currentTab === 'home'">Home Tab Content</div>
    <div v-show="currentTab === 'profile'">Profile Tab Content</div>
    <div v-show="currentTab === 'messages'">Messages Tab Content</div>
  </div>
  <hr />
  <div>
    <input v-model="email" placeholder="Enter your email" />
    <p class="show" v-show="!isValidEmail(email)">請輸入有效的電子郵件地址。</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentTab = ref("home");
const email = ref("");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
</script>

<style scoped>
.show {
  margin-top: -5px;
  color: red;
}
</style>
