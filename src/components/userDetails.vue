<template>
  <div class="user-card">
    <img :src="avatar" alt="User Avatar" class="avatar" />
    <div class="user-info">
      <div class="name">{{ first_name }} {{ last_name }}</div>
      <div class="email">{{ email }}</div>
      <div class="email">Phone number:</div>
      <div class="email">Address</div>
      <button class="close-button" @click="closeUserCard">X</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  first_name: String,
  last_name: String,
  avatar: String,
  email: String,
})
const emits = defineEmits(['close'])
const closeUserCard = () => {
  emits('close');
};
</script>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 20px 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  position: relative;
  box-sizing: border-box;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
}

.user-info {
  flex-grow: 1;
}

.name {
  font-size: 1.2rem;
  font-weight: bold;
}

.email {
  color: #555;
  padding: 5px 0;
}
.close-button {
  border-radius: 50%;
  border: 1px solid grey;
  padding: 5px;
  position: absolute;
  top: 5%;
  left: 90%;
}
</style>
