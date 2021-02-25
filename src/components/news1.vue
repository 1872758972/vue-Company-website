<template>
<div>
    <div class="dd1">
          <h3>新闻资讯</h3>
          <div class="img1"><img src="../assets/hx.png" alt=""></div>
      </div>
    <div class="dd12">
        <el-carousel :interval="4000" type="card" height="300px" width="100px">
    <el-carousel-item v-for="item in imgList" :key="item">
        <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
  <div class="u1">
      <ul>
        <li v-for="a of data2">
            {{a.title}}&nbsp;&nbsp;{{a.time}}<br>
            {{a.content}}<br><br>
        </li>
    </ul>
  <el-button type="primary" @click='$router.push({name:"news1"})'>查看更多</el-button>
  </div>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
             imgList:[require('../assets/7.png'),
             require('../assets/6.png'),
             require('../assets/5.png'),
             ],
             data2:[]
        }
    },
        created(){
        this.$axios.get("http://192.168.0.19:8080/selectAll").then(res=>{
            console.log(res.data.detail[0])
            this.data2=res.data.detail[1];
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
    top:50%;
    transform: translate(-50%,-50%);
}

h3{
    margin-left: 720px;
    margin-top: 50px;
    margin-bottom: 10px;
}
.dd12{
    width: 55vw;
    position:relative;
    left: 22%;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.u1{

}
</style>