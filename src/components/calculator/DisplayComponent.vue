<template>
  <div class="display-box">{{ myDisplay }}</div>
</template>

<script>
export default {
  name: "DisplayComponent",
  data() {
    return {
      display: "",
    };
  },
  props: ["myDisplay"],
};
</script>

<style scoped>
.display-box {
  font-family: "Orbitron", sans-serif;
  background-color: #dcdbe1;
  border: solid black 0.5px;
  color: black;
  border-radius: 5px;
  width: 100%;
  height: 65%;
}
</style>