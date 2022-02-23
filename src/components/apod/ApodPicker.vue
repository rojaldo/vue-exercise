<template>
  <div>
    <label for="example-datepicker">Choose a date</label>
    <b-form-datepicker
      id="example-datepicker"
      v-model="selectedDate"
      class="mb-2"
      @input="onDateSelected()"
    ></b-form-datepicker>
  </div>
</template>

<script>
export default {
    name: "ApodPicker",
    data() {
        return {
            selectedDate: new Date().toISOString().slice(0, 10),
        };
    },
    methods: {
        onDateSelected() {
            this.$emit("onDateSelected", this.selectedDate);
        },
    },
    emits: ["onDateSelected"],
};
</script>

<style scoped>
</style>