<template>
  <div>
      <div class="d1">
          <div class="d2">
              <p>公司地址</p>
              <p>邮政编码</p>
              <p>电话</p>
          </div>
          <div class="d3">
              <img src="../assets/erweima.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.d1{
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:center;
    background-image: url(../assets/d_bg.png);
    height:200px;
}
.d2{
    padding-top:20px;
}
p{
    color:rgba(255, 255, 255, 0.466);
}
.d3{
    margin-left:50px;
}
</style>