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
export default {
  name: "HeroesComponent",
  data() {
    return {
      heroes: ["Batman", "Superman", "Spiderman"],
    };
  },
  components: {
    ListComponent, FormComponent
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