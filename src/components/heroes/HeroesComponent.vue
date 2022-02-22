<template>
<div class="container">
    <div class="form-group">
      <label for="">Hero Name</label>
      <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="heroName">
    </div>
    <button type="button" class="btn btn-primary mt-3" @click="addHero()" :disabled="heroName.length === 0">Add Hero</button>
    <hr class="mb-5">
    <ul class="list-group">
        <li class="list-group-item" v-for="(hero, index) in heroes" :key="index">{{hero}}</li>
    </ul>
</div>
</template>

<script>
    export default {
        name: 'HeroesComponent',
        data() {
            return {
                heroName: '',
                heroes: ['Batman', 'Superman', 'Spiderman'],
            };
        },
        methods: {
            addHero() {
                this.heroes.push(this.heroName);
                this.heroName = '';
            },
        },
    }
</script>

<style scoped>

</style>