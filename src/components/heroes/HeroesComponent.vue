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
// import { Hero } from '../../models/Hero';
export default {
  name: "HeroesComponent",
  data() {
    return {
      heroes: [],
    };
  },
  props:{
    inputHeroes: {
      type: Array,
      required: true,
    },
  },
  components: {
    ListComponent,
    FormComponent,
  },
  created() {
    this.heroes = this.inputHeroes;
  },
  methods: {
    addHero(hero) {
      this.$emit("onAddHero", hero);
    },
  },
};
</script>

<style scoped>
</style>