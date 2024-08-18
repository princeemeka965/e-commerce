import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)
 // const doubleCount = computed(() => count.value * 2)
  
  function signUp(data) {
    user.value = data;
    isAuthenticated.value = true;
    localStorage.setItem('user', user.value)
  }

  function login() {
    const userData = localStorage.getItem('user');
    if (Object.keys(userData).length > 0) {
      isAuthenticated.value = true;
      user.value = userData
    }
  }

  function logout() {
    localStorage.removeItem('user')
    isAuthenticated.value = false;
  }

  return { user, signUp, login, logout }
})
