<template>
  <div class="container">
    <label for="example-datepicker">Choose a date</label>
    <b-form-datepicker
      id="example-datepicker"
      v-model="selectedDate"
      class="mb-2"
      @input="onDateSelected()"
    ></b-form-datepicker>
    <p>Value: '{{ selectedDate }}'</p>
    <div class="jumbotron">
      <h1 class="display-3">{{ apod.title }}</h1>
      <p class="lead">{{ apod.date }}</p>
      <img :src="apod.url" :alt="apod.title" class="d-flex mx-auto" />
      <hr class="my-2" />
      <p>{{ apod.explanation }}</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button"
          >Jumbo action name</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApodComponent",
  data() {
    return {
      apod: {},
      // today date in the format YYYY-MM-DD
      selectedDate: new Date().toISOString().slice(0, 10),
    };
  },
  created() {
    console.log("ApodComponent created");
    this.getApod();
  },
  methods: {
    onDateSelected() {
      console.log("Date selected: " + this.selectedDate);
      this.getApod(this.selectedDate);
    },
    getApod(date = "") {
        const baseURL = "https://api.nasa.gov/planetary/apod";
        const apiKey = "DEMO_KEY";
        const url = `${baseURL}?api_key=${apiKey}&date=${date}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.apod = data;
        });
    },
  },
};
</script>

<style scoped>
</style>