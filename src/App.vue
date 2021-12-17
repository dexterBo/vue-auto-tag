
<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <AntDesgin></AntDesgin>
    <ViewUI></ViewUI>
    <ElementUI></ElementUI>
  </div>
</template>

<script>
import AntDesgin from './components/AntDesgin.vue'
import ViewUI from './components/ViewUI.vue'
import ElementUI from './components/ElementUI.vue'

export default {
  name: 'App',
  components: {
    AntDesgin,
    ViewUI,
    ElementUI,
  }
}
</script>
