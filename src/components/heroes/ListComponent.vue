<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(hero, index) in heroesList" :key="index">{{hero}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'ListComponent',
        props: {
            heroesList: {
                type: Array,
                required: true
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>