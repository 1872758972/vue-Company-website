<template>
  <div>
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
      <el-link type="success" @click="$router.push({ name: 'home' })"
        >返回首页</el-link
      >
    </el-radio-group>

    <el-tabs :tab-position="tabPosition" style="height: 200px">
      <el-tab-pane label="添加新闻">
        <div>
          <el-form ref="form" label-width="80px">
            <el-form-item label="标题" style="width: 500px">
              <el-input v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="类别" style="width: 500px">
              公告,新闻,用水知识,服务指南
              <el-input v-model="type"></el-input>
            </el-form-item>

            <el-form-item label="内容">
              <el-input type="textarea" v-model="desc"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">添加</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>

      <el-tab-pane label="删除新闻">
        <div>
          <el-form ref="form" label-width="80px">
            <el-form-item label="标题" style="width: 500px">
              <el-input v-model="sname"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="del">删除</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>

      <el-tab-pane label="用户管理">
        <div>
          <el-form ref="form" label-width="80px">
            <el-form-item label="帐号" style="width: 500px">
              <el-input v-model="user"></el-input>
            </el-form-item>
            <el-form-item label="密码" style="width: 500px">
              <el-input v-model="passname"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="adduser">添加用户</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="deluser"
                >删除用户 (不必输入密码)</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: "top",
      name: "",
      type: "",
      desc: "",
      sname: "",
      user: "",
      passname: "",
    };
  },
  methods: {
    onSubmit() {
      const qs = require("qs");
      this.$axios
        .post(
          "http://192.168.0.19:8080/add",
          qs.stringify({
            title: this.name,
            time: new Date(),
            type: this.type,
            content: this.desc,
          })
        )
        .then((res) => {
          console.log(res);
          alert("添加成功");
        });
    },
    del() {
      const qs = require("qs");
      this.$axios
        .post(
          "http://192.168.0.19:8080/delete",
          qs.stringify({ title: this.sname })
        )
        .then((res) => {
          console.log(res);
          alert("删除成功");
        });
    },
    adduser() {
      const qs = require("qs");
      this.$axios
        .post(
          "http://192.168.0.19:8080/user/register",
          qs.stringify({ username: this.user, password: this.passname })
        )
        .then((res) => {
          console.log(res);
          alert("添加成功");
        });
    },
    deluser() {
      const qs = require("qs");
      this.$axios
        .post(
          "http://192.168.0.19:8080/user/delete",
          qs.stringify({ username: this.user })
        )
        .then((res) => {
          console.log(res);
          alert("删除成功");
        });
    },
  },
};
</script>

<style scoped>
</style>
