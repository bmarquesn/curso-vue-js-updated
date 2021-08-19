<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
/**
* para criar components utilizando vue-cli (utiliza-se o prompt de comando):
* ir na pasta onde ficará o projeto
* vue create brulindo-futebol-clube
* npm audit fix
* ir na pasta que foi criada
* npm run serve
*/
</script>
<!-- este "scoped" serve para estipular que este CSS será somente para este component, o component atual -->
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
