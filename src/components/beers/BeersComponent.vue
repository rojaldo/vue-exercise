<template>
  <div class="container">
    <vue-slider v-model="range"></vue-slider>
    <div class="row">
      <div
        class="col-sm-12 col-md-6 col-lg-4 my-2"
        v-for="(beer, index) in showBeers"
        :key="index"
      >
        <div class="card h-100">
          <img
            class="card-img-top mx-auto mt-2"
            :src="beer.image_url"
            alt=""
            style="width: 60px"
          />
          <div class="card-body">
            <h4 class="card-title">{{ beer.name }}</h4>
            <h6>{{ beer.first_brewed }}</h6>
            <h6>{{ beer.abv }}</h6>
            <p class="card-text">{{ beer.tagline }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeersComponent",
  data() {
    return {
      beers: [],
      range: [3, 5],
    };
  },props: {
    inputRange: {
      type: Array,
      required: true,
    },
    inputBeers: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.range = this.inputRange;
    this.beers = this.inputBeers;
  },
  computed: {
    showBeers() {
      return this.beers.filter(
        (beer) => beer.abv >= this.range[0] && beer.abv <= this.range[1]
      ).sort((a, b) => a.abv - b.abv);
    },
  },
  watch: {
    range(newRange) {
      this.$emit("onRange", newRange);
    },
    inputBeers(newBeers) {
      this.beers = newBeers;
    },
  },
  components: {},
};
</script>

<style scoped>
</style>