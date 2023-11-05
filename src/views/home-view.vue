<script lang="ts">
import {Component, Vue} from 'vue-facing-decorator';
import {exampleStoreModule} from "@/store/example/example-store";
import HelloWorldComponent from "@/components/hello-world-component.vue";

@Component({
  components: {HelloWorldComponent}
})
export default class HomeView extends Vue {

  text: string = process.env.VUE_APP_EXAMPLE_TEXT

  getText() {
    exampleStoreModule.actionSetHelloWorld(this.text);
    return exampleStoreModule.getHelloWorld
  }
}
</script>

<template>
<hello-world-component :msg="getText()"></hello-world-component>
</template>

<style scoped>

</style>