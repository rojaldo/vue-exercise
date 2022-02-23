<template>
  <div class="jumbotron">
    <h1 class="display-3">{{ data.title }}</h1>
    <p class="lead">{{selectedDate}}</p>
    
    <img
      :src="data.url"
      :alt="data.title"
      class="d-flex mx-auto"
      v-if="data.media_type === 'image'"
    />
    <youtube
      class="d-flex mx-auto"
      v-if="data.media_type === 'video'"
      :video-id="videoID"
      :player-vars="playerVars"
    ></youtube>
    <hr class="my-2" />
    <p>{{ data.explanation }}</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button"
        >Jumbo action name</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "ApodView",
  data() {
    return {
      data: {},
      playerVars: {
        autoplay: 1,
      },
    };
  },
  props: {
    apod: {
      type: Object,
      required: false,
    },
    selectedDate: {
      type: String,
      required: false,
    },
  },
  created() {
    console.log("ApodView created");
    this.getApod();
  },
  methods: {
    getApod(date = "") {
      const baseURL = "https://api.nasa.gov/planetary/apod";
      const apiKey = "DEMO_KEY";
      const url = `${baseURL}?api_key=${apiKey}&date=${date}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
        });
    },
  },
  watch: {
    selectedDate(newDate) {
      this.getApod(newDate);
    },
  },
};
</script>

<style scoped>
</style>