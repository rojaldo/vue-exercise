<template>
  <table class="calculator">
    <tr>
      <td colspan="3">
        <DisplayComponent :myDisplay="display"></DisplayComponent>
        <!-- <input class="display-box" type="text" id="result" disabled /> -->
      </td>
      <!-- clearScreen() function clear all the values -->
      <td>
        <input
          class="button"
          type="button"
          value="C"
          @click="clearCalculator()"
          style="background-color: #fb0066"
        />
      </td>
    </tr>
    <KeyboardComponent @onKey="handleClick($event)"></KeyboardComponent>
  </table>
</template>

<script>
import { Calculator } from '../../models/Calculator';
import DisplayComponent from './DisplayComponent.vue';
import KeyboardComponent from './KeyboardComponent.vue';
export default {
  name: "CalculatorComponent",
  data() {
    return {
      display: "",
      calculator: new Calculator()
    };
  },
  components: {
    DisplayComponent,
    KeyboardComponent
  },
  methods: {
    handleClick(value) {
      if (typeof value === "number") {
        this.calculator.handleNumber(value);
      } else if (typeof value === "string") {
        this.calculator.handleSymbol(value);
      }
      this.display = this.calculator.display;
    },
    clearCalculator() {
      this.display = "";
      this.calculator.clear();
    },
  },
  destroyed() {
    console.log("CalculatorComponent destroyed");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
.calculator {
  padding: 10px;
  border-radius: 1em;
  height: 380px;
  width: 400px;
  margin: auto;
  background-color: #191b28;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.button {
  font-family: "Orbitron", sans-serif;
  background-color: #64278f;
  color: white;
  border: solid black 0.5px;
  width: 100%;
  border-radius: 5px;
  height: 70%;
  outline: none;
}
.button:active {
  background: #e5e5e5;
  -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
  -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
  box-shadow: inset 0px 0px 5px #c1c1c1;
}

</style>