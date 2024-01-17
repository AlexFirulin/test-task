import { ref } from 'vue';
import axios from 'axios';

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users');
    users.value = response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

const addUser  = async (data) => {
  await axios.post('https://reqres.in/api/users',data)
}
const deleteUser = async() => {
  await axios.delete('https://reqres.in/api/users')
}

export { users, fetchUsers, addUser, deleteUser };
