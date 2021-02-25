<template>
  <div>
      <div>
          <div class="Home">
            <div class="img1"><img src="../../assets/logo.png" alt=""></div>
            <div class="navigation">
              <ul>
                <li @click='$router.push({name:"home"})'>首页</li>
                <li @click='$router.push({name:"announcement1"})'>通知公告</li>
                <li @click='$router.push({name:"news1"})'>新闻咨询</li>
                <li @click='$router.push({name:"guide1"})'>服务指南</li>
                <li @click='$router.push({name:"culture1"})'>企业文化</li>
                <li @click='$router.push({name:"contact1"})'>联系我们</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>当前位置：首页---通知公告---停水通知</h4>
          </div>
          <div class="ull">
            <ul class="ul">
              <li class="li">通知公告</li>
              <li :class="[showl==2?'li1':'li2']" @click='$router.push({name:"announcement2"}),showl=2'>停水通知</li>
              <li :class="[showl==3?'li1':'li2']" @click='$router.push({name:"announcement3"}),showl=3'>水质公告</li>              
              <li :class="[showl==4?'li1':'li2']" @click='$router.push({name:"announcement4"}),showl=4'>其他公告</li>
            </ul>
          </div>
          <div class="content1">
            <announcement2 v-show="showl==2"></announcement2>
            <announcement3 v-show="showl==3"></announcement3>
            <announcement4 v-show="showl==4"></announcement4>
          </div>
      </div>
  </div>
</template>

<script>
import announcement2 from '@/router/announcement/announcement2'
import announcement3 from '@/router/announcement/announcement3'
import announcement4 from '@/router/announcement/announcement4'
export default {
  name:'announcement1',
  components:{
    announcement2,announcement3,announcement4
  },
  data () {
    return {
      showl:2,
    }
  },
  }
</script>

<style scoped>
@import '../../assets/css/style1'
</style>