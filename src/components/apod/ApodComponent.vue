<template>
  <div class="container">
    <ApodPicker @onDateSelected="onDateSelected($event)"></ApodPicker>
    <ApodView :apod="apod"></ApodView>
  </div>
</template>

<script>
import ApodView from "./ApodView.vue";
import ApodPicker from "./ApodPicker.vue";

export default {
  name: "ApodComponent",
  data() {
    return {
      apod: {},
      date: new Date().toISOString().slice(0, 10),
    };
  },
  props: {
    inputApod: {
      type: Object,
      required: false,
    },
  },
  components: {
    ApodView,
    ApodPicker,
  },
  created() {
    console.log("ApodComponent created");
    this.getApod();
  },
  methods: {
    onDateSelected(date) {
      console.log("Date selected: " + date);
      this.date = date;
      this.$emit("onDateSelected", date);
      // this.getApod(date);
    }
  },
  computed: {
    // a computed getter
    videoID() {
      // `this` points to the vm instance
      // get id from https://www.youtube.com/embed/liapnqj9GDc?rel=0
      let res = this.apod.url.split("embed/")[1];
      res = res.split("?")[0];
      return res;
    },
  },
  watch: {
    inputApod(newApod) {
      console.log("ApodComponent watch inputApod: " + newApod);
      this.apod = newApod;
    },
  },
};
</script>

<style scoped>
</style>