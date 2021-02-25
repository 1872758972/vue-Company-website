<template>
  <div>
    <div>
            <ul>
                  <li v-for="a of data1">
                     {{a.title}}&nbsp;&nbsp;{{a.time}}
                 </li>
              </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'annnouncement2',
  components:{
  },
  data () {
    return {
      data1:''
    }
  },
  created(){
        this.$axios.get("http://192.168.0.19:8080/selectAll").then(res=>{
            console.log(res.data.detail[0])
            this.data1=res.data.detail[3];
        })
}
}
</script>

<style>

</style>