<script lang='ts'>
import {Component, Vue} from 'vue-facing-decorator';

@Component({})
export default class App extends Vue {
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view></router-view>
</template>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  text-align: center;
  font-family: Roboto, "Helvetica Neue", sans-serif;
}
</style>
