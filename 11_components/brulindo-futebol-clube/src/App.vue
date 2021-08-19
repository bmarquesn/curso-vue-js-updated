<template>
  <div id="app">
    <hcode-header />
    <hcode-section />
    <hcode-footer />
  </div>
</template>

<script>
import HcodeHeader from './components/HcodeHeader.vue';
import HcodeFooter from './components/HcodeFooter.vue';
import HcodeSection from './components/HcodeSection.vue';

export default {
  name: 'App',
  components: {
    HcodeHeader,
    HcodeFooter,
    HcodeSection
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
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
