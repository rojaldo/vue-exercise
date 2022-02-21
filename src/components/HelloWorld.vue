<template>
  <div>
    <h1>Hello World</h1>
    <p>{{ msg }}</p>
    <button @click="handleMyClick()">34</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    handleMyClick() {
        this.msg = `treinta 
        y cuatro`;
        console.log(`treinta 
y   cuatro`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
