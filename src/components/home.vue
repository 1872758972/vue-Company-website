<template>
  <div>
      <div>
          <div class="Home">
            <div class="img1"><img src="../assets/logo.png" alt=""></div>
            <div class="navigation">
              <ul>
                <li @click='$router.push({name:"home"})'>首页</li>
                <li @click='$router.push({name:"announcement1"})'>通知公告</li>
                <li @click='$router.push({name:"news1"})'>新闻咨询</li>
                <li @click='$router.push({name:"guide1"})'>服务指南</li>
                <li @click='$router.push({name:"culture1"})'>企业文化</li>
                <li @click='$router.push({name:"contact1"})'>联系我们</li>
                <li @click='$router.push({name:"management"})'>后台管理</li>
              </ul>
            </div>
          </div>
          <div class="Announcement1"><announcement1></announcement1></div>
          <div class="News1"><news1></news1></div>
          <div class="Knowledge"><knowledge></knowledge></div>
          <div class="Guide1"><guide1></guide1></div>
          <div class="Outlets"><outlets></outlets></div>
          <div class="Llink"><llink></llink></div>
      </div>
  </div>
</template>

<script>//主页
import announcement1 from '@/components/announcement1'
import news1 from '@/components/news1'
import knowledge from '@/components/knowledge'
import guide1 from '@/components/guide1'
import outlets from '@/components/outlets'
import llink from '@/components/llink'

export default {
  name:'home',
  components:{
    announcement1,news1,knowledge,guide1,outlets,llink
  },
  data () {
    return {
      
    }
  },
}

</script>

<style scoped>
.Home{
  background-image:url("../assets/banner1.png");
  background-size: cover;
  height: 700px;
  width: 100%;
}
.img1{
  float: left;
  margin-left:200px;
  padding-top: 25px;
}
.navigation{
  float: left;
  margin-left: 200px;
  margin-top: 25px;
  color:aliceblue;
}
li{
  float: left;
  margin-left: 50px;
  cursor: pointer;
}
.Announcement1{
  height:40vh;
}
.News1{
    height:100vh;
}
.Knowledge{

  height:60vh;
}
.Outlets{
  margin-top:400px;
  height:50vh;
}
.Llink{
  margin-top: 200px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>