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
            <h4>当前位置：首页---联系我们</h4>
          </div>
          <div class="ull">
            <ul class="ul">
              <li class="li">联系我们</li>
              <li :class="[showl==2?'li1':'li2']" @click='$router.push({name:"contact2"}),showl=2'>集团简介</li>
              <li :class="[showl==3?'li1':'li2']" @click='$router.push({name:"contact3"}),showl=3'>联系我们</li>              
              <li :class="[showl==4?'li1':'li2']" @click='$router.push({name:"contact4"}),showl=4'>公司招聘</li>
            </ul>
          </div>
          <div class="content1">
            <contact2 v-show="showl==2"></contact2>
            <contact3 v-show="showl==3"></contact3>
            <contact4 v-show="showl==4"></contact4>
          </div>
      </div>
  </div>
</template>

<script>
import contact2 from '@/router/contact/contact2'
import contact3 from '@/router/contact/contact3'
import contact4 from '@/router/contact/contact4'
export default {
  name:'contact1',
  components:{
    contact2,contact3,contact4
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