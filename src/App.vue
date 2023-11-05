<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import HelloWorldComponent from "@/components/hello-world-component.vue";
import { exampleStoreModule } from "@/store/example/example-store";

@Component({
  components: { HelloWorldComponent },
})
export default class App extends Vue {
  setText() {
    exampleStoreModule.set(process.env.VUE_APP_EXAMPLE_TEXT);
    return exampleStoreModule.getHelloWorld;
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <hello-world-component :msg="setText"></hello-world-component>
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
