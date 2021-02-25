<template>
  <div>
      <div class="dd1">
          <h3>用水知识</h3>
          <div class="img1"><img src="../assets/hx.png" alt=""></div>
          <div class="dd12">
              <div class="dd13">
                  <ul>
                      <li @click='$router.push({name:"guide1"})'>知识课堂</li><br>
                       <li v-for="a of data3">
                            {{a.title}}&nbsp;&nbsp;{{a.time}}<br><br>
                       </li>
                  </ul>
              </div>
              <div class="dd14">
                  <img src="../assets/pic4.png" alt="">
              </div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
    data () {
        return {
            data3:[]
        }
    },
created(){
        this.$axios.get("http://192.168.0.19:8080/selectAll").then(res=>{
            console.log(res.data.detail)
            this.data3=res.data.detail[2];
        })
    }
}
</script>

<style scoped>
.dd1{
    height: 10vh;
    position:relative;
}
img{
    max-width: 100%;
}
.img1{
    position:absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

h3{
    margin-left: 720px;
    margin-top: 50px;
    margin-bottom: 10px;
}
.dd13{
   position:absolute;
    left:20vw;
    top:10vh;
}
.dd14{
    position:absolute;
    left:50vw;
    top:10vh;
    width:25vw;
}
</style>