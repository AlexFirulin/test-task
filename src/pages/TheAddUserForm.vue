<template>
<div class="user-form">
  <h2>Add user</h2>
  <form>
    <label class="label" for="name">Name:</label>
    <input
    type="text"
    id="name"
    name="name"
    placeholder="Enter name"
    required
    v-model="postData.name"
    @input="validateName"
  >
    <div v-if="nameValid" class="error"> Valid name contain more than 2 symbols</div>

    <label class="label" for="email">Email:</label>
    <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter email"
    required
    v-model="postData.email"
    >
    <div v-if="emailValid" class="error">Enter a valid email</div>

    <button type="submit"
    @click.prevent="addUser(postData)"
    :disabled="nameValid || emailValid"
    :style="{background : nameValid || emailValid ? 'gray' : 'green'}">Post user</button>
  </form>
  </div>
</template>

<script setup>
import { addUser } from '../composable/users';
import { ref, computed } from 'vue';
const postData = ref({
  name: '',
  email: ''
})
const nameValid = computed(() => {
  return postData.value.name === '';
});

const emailValid = computed(() => {
  const regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return !regExEmail.test(postData.value.email);
});
</script>

<style scoped>
    .user-form {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin: auto 50px;
      box-sizing: border-box;
      }

    .user-form input {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
      box-sizing: border-box;
    }

    .user-form button {
      background-color: #4caf50;
      color: #fff;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }
    .error {
      color: blue;
      font-size: 14px;
    }
    .label {
      font-size: 12px;
    }
</style>