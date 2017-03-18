<template>
  <div v-bind:style="backgroundStyle()" class="hello">
    <h1>{{ msg }}</h1>
    <h1 v-on:click="showPopupWindow('red')">Color Me red</h1>
    <h1 v-on:click="showPopupWindow('blue')">Color Me blue</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import colorChangePayloadBuilder from './builders';

export default {
  name: 'hello',
  computed: {
    ...mapGetters({
      backgroundColor: 'currentBackgroundColor',
    }),
  },
  methods: {
    showPopupWindow(color) {
      switch (color) {
        case 'red': {
          const payload = colorChangePayloadBuilder('colorBackgroundRed', 'red', 'Make red');
          this.showWindowAction(payload);
          break;
        }
        case 'blue': {
          const payload = colorChangePayloadBuilder('colorBackgroundBlue', 'blue', 'Make blue');
          this.showWindowAction(payload);
          break;
        }
        default: {
          throw new Error();
        }
      }
    },
    ...mapActions({
      showWindowAction: 'showPopupWindow',
    }),
  },
  data() {
    return {
      backgroundStyle: () => ({
        backgroundColor: this.backgroundColor,
      }),
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped lang="sass">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

background-red {
  background-color: red;
}

background-blue {
  background-color: blue;
}
</style>
