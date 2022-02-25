<template>
  <div class="jumbotron">
    <h1 class="display-3">{{ apod.title }}</h1>
    <p class="lead">{{selectedDate}}</p>
    
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
    // this.getApod();
  },
  watch: {
    // selectedDate(newDate) {
    //   // this.getApod(newDate);
    // },
  },
};
</script>

<style scoped>
</style>