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
            <h4>当前位置：首页---新闻资讯---新闻分类</h4>
          </div>
          <div class="ull">
            <ul class="ul">
              <li class="li">新闻资讯</li>
              <li :class="[showl==2?'li1':'li2']" @click='$router.push({name:"news2"}),showl=2'>新闻分类</li>
              <li :class="[showl==3?'li1':'li2']" @click='$router.push({name:"news3"}),showl=3'>新闻相关专题</li>              
              <li :class="[showl==4?'li1':'li2']" @click='$router.push({name:"news4"}),showl=4'>新闻分类</li>
            </ul>
          </div>
          <div class="content1">
            <news2 v-show="showl==2"></news2>
            <news3 v-show="showl==3"></news3>
            <news4 v-show="showl==4"></news4>
          </div>
      </div>
  </div>
</template>

<script>
import news2 from '@/router/news/news2'
import news3 from '@/router/news/news3'
import news4 from '@/router/news/news4'
export default {
  name:'news1',
  data () {
    return {
      showl:2
    }
  },
  components:{
    news2,news3,news4
  }
}
</script>

<style scoped>
@import '../../assets/css/style1'
</style>