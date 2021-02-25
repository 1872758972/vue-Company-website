<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
li{
  list-style: none;
}
.navigation :hover{
  text-decoration: underline;
  font-size: 1.1em;
  transition: all .5s;
}
</style>
