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
        v-model="heroName"
      />
    </div>
    <button
      type="button"
      class="btn btn-primary mt-3"
      @click="addHero()"
      :disabled="heroName.length === 0"
    >
      Add Hero
    </button>
  </fragment>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      heroName: '',
    };
  },
  methods: {
    addHero() {
        this.$emit("onAddHero", this.heroName);
        this.heroName = "";
        },
  },
};
</script>

<style  scoped>
</style>