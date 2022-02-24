<template>
  <div id="app">
    <nav>
      <router-link to="/calculator">Calculator</router-link> |
      <router-link to="/heroes">Heroes</router-link> |
      <router-link to="/apod">Apod</router-link> |
      <router-link to="/beers">Beers</router-link> |

    </nav>
    <router-view/>
  </div>
</template>

<style>

</style>
