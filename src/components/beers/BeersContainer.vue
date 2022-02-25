<template>
  <BeersComponent :inputRange="range" :inputBeers="beers" @onRange="handleRange($event)"></BeersComponent>
</template>

<script>
import BeersComponent from "./BeersComponent.vue";

export default {
  name: "BeersContainer",
  components: {
    BeersComponent,
  },
  created() {
    // get beers
    this.$store.dispatch("fetchBeers").then((beers) => {
      this.beers = beers;
    });

  },
  data() {
    return {
      range: this.$store.getters.getRange,
      beers: []
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