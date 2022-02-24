<template>
  <BeersComponent :inputRange="range" @onRange="handleRange($event)"></BeersComponent>
</template>

<script>
import BeersComponent from "./BeersComponent.vue";
import { useStore } from "vuex";
export default {
  name: "BeersContainer",
  components: {
    BeersComponent,
  },
  setup() {
    return {
      store: useStore(),
    };
  },
  data() {
    return {
      range: this.$store.getters.getRange,
    };
  },
  methods:{
    handleRange(range) {
      this.$store.commit("setRange", range);
    },
  }
};
</script>

<style  scoped>
</style>