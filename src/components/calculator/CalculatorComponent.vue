<template>
  <table class="calculator">
    <tr>
      <td colspan="3">
          <div class="display-box">{{display}}</div>
        <!-- <input class="display-box" type="text" id="result" disabled /> -->
      </td>
      <!-- clearScreen() function clear all the values -->
      <td>
        <input
          class="button"
          type="button"
          value="C"
          @click="clearScreen()"
          style="background-color: #fb0066"
        />
      </td>
    </tr>
    <tr>
      <!-- handleClick() function display the value of clicked button -->
      <td>
        <input class="button" type="button" value="1" @click="handleClick('1')" />
      </td>
      <td>
        <input class="button" type="button" value="2" @click="handleClick('2')" />
      </td>
      <td>
        <input class="button" type="button" value="3" @click="handleClick('3')" />
      </td>
      <td>
        <input class="button" type="button" value="/" @click="handleClick('/')" />
      </td>
    </tr>
    <tr>
      <td>
        <input class="button" type="button" value="4" @click="handleClick('4')" />
      </td>
      <td>
        <input class="button" type="button" value="5" @click="handleClick('5')" />
      </td>
      <td>
        <input class="button" type="button" value="6" @click="handleClick('6')" />
      </td>
      <td>
        <input class="button" type="button" value="-" @click="handleClick('-')" />
      </td>
    </tr>
    <tr>
      <td>
        <input class="button" type="button" value="7" @click="handleClick('7')" />
      </td>
      <td>
        <input class="button" type="button" value="8" @click="handleClick('8')" />
      </td>
      <td>
        <input class="button" type="button" value="9" @click="handleClick('9')" />
      </td>
      <td>
        <input class="button" type="button" value="+" @click="handleClick('+')" />
      </td>
    </tr>
    <tr>
      <td>
        <input class="button" type="button" value="." @click="handleClick('.')" />
      </td>
      <td>
        <input class="button" type="button" value="0" @click="handleClick('0')" />
      </td>
      <!-- calculate() function evaluate the mathematical expression -->
      <td>
        <input
          class="button"
          type="button"
          value="="
          @click="handleClick('=')"
          style="background-color: #fb0066"
        />
      </td>
      <td>
        <input class="button" type="button" value="*" @click="handleClick('*')" />
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "CalculatorComponent",
  data() {
    return {
      display: "",
    };
  },
  methods: {
    handleClick(value) {
      this.display += value;
    },
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
.display-box {
  font-family: "Orbitron", sans-serif;
  background-color: #dcdbe1;
  border: solid black 0.5px;
  color: black;
  border-radius: 5px;
  width: 100%;
  height: 65%;
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