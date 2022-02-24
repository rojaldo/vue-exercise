<template>
  <HeroesComponent :inputHeroes="heroes" @onAddHero="addHero($event)"></HeroesComponent>
</template>

<script>
import HeroesComponent from "./HeroesComponent.vue";

export default {
  name: "HeroesContainer",
  components: {
    HeroesComponent,
  },
  data() {
    return {
        heroes: this.$store.getters.getHeroes,
        };
  },
  methods: {
    addHero(hero) {
      this.$store.commit("addHero", hero);
    },
  },
};
</script>

<style scoped>
</style>