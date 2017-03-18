<template>
  <div id="app">
    <img src="./assets/logo.png">
    <PromptWindow v-if="promptWindow.visible"></PromptWindow>
    <router-view></router-view>
  </div>
</template>

<script>
import PromptWindow from '@/components/PromptWindow';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    PromptWindow,
  },
  computed: {
    ...mapGetters({
      promptWindow: 'promptWindow',
    }),
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
