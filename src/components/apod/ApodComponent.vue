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
      <img
        :src="apod.url"
        :alt="apod.title"
        class="d-flex mx-auto"
        v-if="apod.media_type === 'image'"
      />
      <youtube
        class="d-flex mx-auto"
        v-if="apod.media_type === 'video'"
        :video-id="videoID"
        :player-vars="playerVars"
      ></youtube>
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
      selectedDate: new Date().toISOString().slice(0, 10),
      // videoId: "lG0Ys-2d4MA",
      playerVars: {
        autoplay: 1,
      },
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
  computed: {
    // a computed getter
    videoID() {
      // `this` points to the vm instance
      // get id from https://www.youtube.com/embed/liapnqj9GDc?rel=0
        let res = this.apod.url.split("embed/")[1]
        res = res.split("?")[0]
        return res;
    }
  }

};
</script>

<style scoped>
</style>