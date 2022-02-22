<template>
  <div id="app">
    <b-tabs content-class="mt-3">
      <b-tab title="Calculator" ><CalculatorComponent></CalculatorComponent></b-tab>
      <b-tab title="Heroes" :active="true"><HeroesComponent></HeroesComponent></b-tab>
    </b-tabs>
    
  </div>
</template>

<script>
import CalculatorComponent from "./components/calculator/CalculatorComponent.vue";
import HeroesComponent from "./components/heroes/HeroesComponent.vue";

export default {
  name: "App",
  components: {
    CalculatorComponent,
    HeroesComponent
  },
};
</script>

<style>
</style>
