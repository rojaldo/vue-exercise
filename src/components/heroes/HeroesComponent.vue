<template>
  <div class="container">
    <FormComponent @onAddHero="addHero($event)"></FormComponent>
    <hr class="mb-5" />
    <ListComponent :heroesList="heroes"></ListComponent>
  </div>
</template>

<script>
import ListComponent from "./ListComponent.vue";
import FormComponent from "./FormComponent.vue";
import { Hero } from '../../models/Hero';
export default {
  name: "HeroesComponent",
  data() {
    return {
      heroes: [
          new Hero("Superman", "Clark Kent"), 
          new Hero("Batman", "Bruce Wayne"),
          new Hero("Spiderman", "Peter Parker"),],
    };
  },
  components: {
    ListComponent,
    FormComponent,
  },
  methods: {
    addHero(hero) {
      this.heroes.push(hero);
    },
  },
};
</script>

<style scoped>
</style>