<template>
  <div class="container">
    <div class="jumbotron">
        <h1 class="display-3">{{apod.title}}</h1>
        <p class="lead">{{apod.date}}</p>
        <img :src="apod.url" :alt="apod.title" class="d-flex mx-auto">
        <hr class="my-2">
        <p>{{apod.explanation}}</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
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
    };
  },
  created() {
    console.log("ApodComponent created");
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((data) => {this.apod = data});
  },
};
</script>

<style scoped>
</style>