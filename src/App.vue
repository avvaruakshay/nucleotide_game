<template>
  <div id="app">
    <Home ref="home"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
}
</script>

<style>
#app {
  font-family: 'Ubuntu Mono', monospace;
  /* font-family: 'Ubuntu', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  width: 100%;
}

body {
  margin: 0px
}

.el-message-box {
  width: 80% !important;
  max-width: 500px !important;
  /* font-family: 'Ubuntu', sans-serif; */
  font-family: 'Ubuntu Mono', monospace;
}
</style>

<style lang="scss">
$fa-css-prefix: 'icon-fa';
$fa-font-path: '~@fortawesome/fontawesome-free/webfonts';

@import '~@fortawesome/fontawesome-free/scss/fontawesome.scss';
@import '~@fortawesome/fontawesome-free/scss/solid.scss';
@import '~@fortawesome/fontawesome-free/scss/brands.scss';

// Override Element UI's icon font
.fas {
  font-family: 'Font Awesome 5 Free' !important;
}

.fab {
  font-family: 'Font Awesome 5 Brands' !important;
}
</style>
