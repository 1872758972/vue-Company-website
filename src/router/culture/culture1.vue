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
            <h4>当前位置：首页---企业文化---水文化</h4>
          </div>
          <div class="ull">
            <ul class="ul">
              <li class="li">企业文化</li>
              <li :class="[showl==2?'li1':'li2']" @click='$router.push({name:"culture2"}),showl=2'>水文化</li>
              <li :class="[showl==3?'li1':'li2']" @click='$router.push({name:"culture3"}),showl=3'>公司文化</li>              
              <li :class="[showl==4?'li1':'li2']" @click='$router.push({name:"culture4"}),showl=4'>先进人物</li>
            </ul>
          </div>
          <div class="content1">
            <culture2 v-show="showl==2"></culture2>
            <culture3 v-show="showl==3"></culture3>
            <culture4 v-show="showl==4"></culture4>
          </div>
      </div>
  </div>
</template>

<script>
import culture2 from '@/router/culture/culture2'
import culture3 from '@/router/culture/culture3'
import culture4 from '@/router/culture/culture4'
export default {
  name:'culture1',
  components:{
    culture2,culture3,culture4
  },
  data () {
    return {
      showl:2
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/style1'
</style>