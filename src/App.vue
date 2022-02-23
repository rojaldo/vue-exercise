<template>
  <div id="app">
    <b-tabs content-class="mt-3">
      <b-tab title="Calculator" ><CalculatorComponent></CalculatorComponent></b-tab>
      <b-tab title="Heroes" ><HeroesComponent></HeroesComponent></b-tab>
      <b-tab title="Apod" :active="true"><ApodComponent></ApodComponent></b-tab>
    </b-tabs>
    
  </div>
</template>

<script>
import CalculatorComponent from "./components/calculator/CalculatorComponent.vue";
import HeroesComponent from "./components/heroes/HeroesComponent.vue";
import ApodComponent from "./components/apod/ApodComponent.vue";

export default {
  name: "App",
  components: {
    CalculatorComponent,
    HeroesComponent,
    ApodComponent,
  },
};
</script>

<style>
</style>
