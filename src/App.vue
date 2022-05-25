<template>
  <div :class="$style.app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DynamicHeading :level="6" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Counter/>
  </div>
</template>

<script>
import DynamicHeading from './components/DynamicHeading.vue'
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    DynamicHeading,
    HelloWorld,
    Counter
  }
}
</script>

<style module>
/* Challenge: Refactor these styles into a CSS class and combine it with CSS modules */
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
