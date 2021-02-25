<template>
  <div>
      <div class="dd1">
          <h3>通知公告</h3>
          <div class="img1"><img src="../assets/hx.png" alt=""></div>
      </div>
      <div class="dd2">
          <div class="d1">
              <div class="d11"><img src="../assets/01tsgg.png" alt="">停水公告</div>
              <ul>
                 <li v-for="a of data1">
                     {{a.title}}&nbsp;&nbsp;{{a.time}}
                 </li>
                  <li @click='$router.push({name:"announcement2"})'>阅读更多</li>
              </ul>
          </div>
          <div class="d1">
              <div class="d11"><img src="../assets/02szgg.png" alt="">水质公告</div>
              <ul>
                  <li v-for="a of data1">
                     {{a.title}}&nbsp;&nbsp;{{a.time}}
                 </li>
                  <li @click='$router.push({name:"announcement3"})'>阅读更多</li>
              </ul>
          </div>
          <div class="d1">
              <div class="d11"><img src="../assets/03qtgg.png" alt="">其他公告</div>
              <ul>
                  <li v-for="a of data1">
                     {{a.title}}&nbsp;&nbsp;{{a.time}}
                 </li>
                  <li @click='$router.push({name:"announcement4"})'>阅读更多</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>//公告
export default {
    name:'announcement1',
    data () {
        return {
            data1:[]
        }
    },
    created(){
        this.$axios.get("http://192.168.0.19:8080/selectAll").then(res=>{
            console.log(res.data.detail[0])
            this.data1=res.data.detail[0];
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
.dd2{
    display:flex;
    justify-content:center;
}
.d1{
    border-right:1px solid rgba(48, 46, 46, 0.274);
    width:25vw;
    float: left;
}
.d11{
    margin-left:2.5vw;
}
</style>