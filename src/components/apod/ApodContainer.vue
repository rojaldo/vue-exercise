<template>
  <ApodComponent
    :inputApod="apod"
    @onDateSelected="dateSelected($event)"
  ></ApodComponent>
</template>

<script>
import ApodComponent from "./ApodComponent.vue";
export default {
  name: "ApodContainer",
  components: {
    ApodComponent,
  },
  data() {
    return {
      apod: this.$store.getters.getApod,
    };
  },
  created() {
    // get apod
    this.$store.dispatch("fetchApod").then((apod) => {
      this.apod = apod;
    });
  },
  methods: {
    dateSelected(date) {
        console.log("Date selected (Container): " + date);
      this.$store.dispatch("fetchApod", date).then((apod) => {
        this.apod = apod;
      });
    },
  },
};
</script>

<style  scoped>
</style>