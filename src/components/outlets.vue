<template>
  <div>
      <div class="dd1">
          <h3>服务网点</h3>
          <div class="img1"><img src="../assets/hx.png" alt=""></div>
          <div class="img2"><img src="../assets/ditu.png" alt=""></div>
      </div>

  </div>
</template>

<script>
export default {
    data () {
        return {
           
        }
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
.img2{
    position:absolute;
    left:25%;
    top: 100%;
    width:50vw;
}
h3{
    margin-left: 720px;
    margin-top: 50px;
    margin-bottom: 10px;
}

</style>