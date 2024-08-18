import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)
 // const doubleCount = computed(() => count.value * 2)
  
  function signUp(data) {
    user.value = data;
    isAuthenticated.value = true;
    localStorage.setItem('user', JSON.stringify(user.value))
  }

  function login(data) {
    const userData = localStorage.getItem('user');
    const parsedData = JSON.parse(userData);

    if (Object.keys(userData).length > 0) {
      if (parsedData.email !== data.email && parsedData.password !== data.password) {
        alert('Invalid toast')
      }
      else {
        isAuthenticated.value = true;
        user.value = parsedData
      }
    }
  }

  function logout() {
    localStorage.removeItem('user')
    isAuthenticated.value = false;
  }

  return { user, signUp, login, logout, isAuthenticated }
})
