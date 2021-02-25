<template>
<div class="d11">
    <div class="d1">
    <h4 style="text-align:center; font-size:18px;">请选择登陆方式</h4>
    <el-input v-model="name" placeholder="请输入内容"></el-input>
    <el-input placeholder="请输入密码" v-model="pass" show-password></el-input>
    <el-button round class="b1" @click="tologin">管理员登录</el-button>
    <el-button round class="b11" @click='$router.push({name:"home"})'>游客身份</el-button>
    </div>
</div>
</template>

<script>
export default {
    name:'login',
    data () {
        return {
            name:'',
            pass:'',
            success:''
        }
    },
    methods:{
        tologin(){
            const qs=require('qs');
            this.$axios.post("http://192.168.0.19:8080/user/login",qs.stringify({username:this.name,password:this.pass})).then(res=>{
                console.log(res);
                this.success=res.data.success;
                if(this.success){
                    window.location='http://localhost:8080/a#/home';
                }else{
                    alert('帐号或密码错误');
                }
            })
        }
    }
}
</script>

<style scoped>
.d1{
    width:250px;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
.d11{
    width:100vw;
    height: 100vh;
    background-color:rgb(223, 246, 248);
}
.b1{
    margin-top:50px;
    margin-left: 80px;
}
</style>