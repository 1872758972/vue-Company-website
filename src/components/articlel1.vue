<template>
  <div>
    <li v-for="use in data1">
      <router-link @click="showl=1" :to="{name:'articlel'}">{{use.a}}</router-link>
      {{ use.b}}
      <router-view></router-view>
    </li>
  </div>
</template>

<script>//文章
export default {
  name:'articlel1',
    data () {
        return {
            showl:2,
            
        }
    },
    components:{
      
    }
}
</script>

<style>

</style>