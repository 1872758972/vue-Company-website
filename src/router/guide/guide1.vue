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
            <h4>当前位置：首页---服务指南---用水知识</h4>
          </div>
          <div class="ull">
            <ul class="ul">
              <li class="li">服务指南</li>
              <li :class="[showl==2?'li1':'li2']" @click='$router.push({name:"guide2"}),showl=2'>用水知识</li>
              <li :class="[showl==3?'li1':'li2']" @click='$router.push({name:"guide3"}),showl=3'>用水服务</li>              
              <li :class="[showl==4?'li1':'li2']" @click='$router.push({name:"guide4"}),showl=4'>其他分类</li>
            </ul>
          </div>
          <div class="content1">
            <guide2 v-show="showl==2"></guide2>
            <guide3 v-show="showl==3"></guide3>
            <guide4 v-show="showl==4"></guide4>
          </div>
      </div>
  </div>
</template>

<script>
import guide1 from '@/router/guide/guide1'
import guide2 from '@/router/guide/guide2'
import guide3 from '@/router/guide/guide3'
import guide4 from '@/router/guide/guide4'
export default {
  name:'guide1',
  components:{
    guide2,guide3,guide4
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