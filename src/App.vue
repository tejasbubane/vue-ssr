<template>
  <div id="app">
    This is App
    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
    <router-link :to="{ name: 'settings' }">Settings</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
