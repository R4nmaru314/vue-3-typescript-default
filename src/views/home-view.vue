<script lang="ts">
import {Component, Vue} from 'vue-facing-decorator';
import {exampleStoreModule} from "@/store/example/example-store";
import HelloWorldComponent from "@/components/hello-world-component.vue";

@Component({
  components: {HelloWorldComponent}
})
export default class HomeView extends Vue {

  textInput: string = process.env.VUE_APP_EXAMPLE_TEXT

  get text() {
    exampleStoreModule.actionSetHelloWorld(this.textInput);
    return exampleStoreModule.getHelloWorld
  }
}
</script>

<template>
<hello-world-component :msg="text"></hello-world-component>
</template>

<style scoped>

</style>