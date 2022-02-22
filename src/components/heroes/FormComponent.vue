<template>
  <fragment>
    <div class="form-group">
      <label for="">Hero Name</label>
      <input
        type="text"
        class="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=""
        v-model="hero.name"
      />
    </div>
        <div class="form-group">
      <label for="">Hero Alias</label>
      <input
        type="text"
        class="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=""
        v-model="hero.alias"
      />
    </div>
    <button
      type="button"
      class="btn btn-primary mt-3"
      @click="addHero()"
      :disabled="hero.name.length === 0"
    >
      Add Hero
    </button>
  </fragment>
</template>

<script>
import {Hero} from '../../models/Hero';
export default {
  name: "FormComponent",
  data() {
    return {
      hero: new Hero(),
    };
  },
  methods: {
    addHero() {
        this.$emit("onAddHero", this.hero);
        this.hero = new Hero();
        },
  },
};
</script>

<style  scoped>
</style>