<template>
  <div class="user-form">
    <div class="search">
      <div class="input-search">
        <label class="label" for="name">Name</label>
        <input id="name" type="text" v-model="searchName">
      </div>
      <div class="input-search">
        <label class="label" for="email">Email</label>
        <input id="email" type="text" v-model="searchEmail">
      </div>
    </div>
    <ul v-if="filteredUsers.length">
    <li v-for="user in filteredUsers" :key="user.id">
      <img :src="user.avatar" alt="" />
      <div class="user-name" @click="showDetails(user)"><u>{{ user.first_name }}</u></div>
      <div>{{ user.email }}</div>
      <button class="call-to-action" @click="deleteUser()">Delete user</button>
      <userDetailsVue
        v-if="selectedUser && selectedUser.id === user.id"
        class="user-details"
        :avatar="user.avatar"
        :first_name="user.first_name"
        :email="user.email"
        :last_name="user.last_name"
        @close="closeUserDetails"
      ></userDetailsVue>
    </li>
  </ul>
  <div v-else>
    No users to your search params
  </div>
  </div>
</template>

<script setup>
import userDetailsVue from '../components/userDetails.vue'
import { onMounted, ref, computed } from 'vue';
import { deleteUser, fetchUsers, users } from '../composable/users';

onMounted(fetchUsers)
let selectedUser = ref(null);
let searchName = ref('')
let searchEmail = ref('')

const showDetails = (user) => {
  selectedUser.value = user;
}
const closeUserDetails = () => {
  selectedUser.value = null;
}
const filteredUsers = computed(() => {
  const filterByName = (user) => {
    return user.first_name.toLowerCase().includes(searchName.value.toLowerCase());
  };
  const filterByEmail = (user) => {
    return user.email.toLowerCase().includes(searchEmail.value.toLowerCase());
  };
  let filtered = [...users.value];
  if (searchName.value) {
    filtered = filtered.filter(filterByName);
  }
  if (searchEmail.value) {
    filtered = filtered.filter(filterByEmail);
  }
  return filtered;
})
</script>


<style scoped>
.user-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  background: aliceblue;
}
.search {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 20px;
  width: 400px;
}
.input-search {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.label {
  font-size: 14px;
}
.user-name {
  cursor: pointer;
}
.call-to-action {
  background: transparent;
  border: 1px solid green;
  border-radius: 5px;
}
ul {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
}

ul > li {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}
ul > li:hover {
  flex: 1;
  max-width: 40%;
}

.user-details {
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>