<template>
<div class="register">
  <div class="wrapper container">
    <form id="registerForm" v-on:submit.prevent="onSubmit">
      <p class="clearfix">
        <label class="one" for="username">用户名：</label>
        <input id="username" v-model="user.userName" name="user.userName" class="required" value="" placeholder="请输入用户名" />
      </p>
      <div id="userinfo">{{userinfo}}</div>
      <p class="clearfix">
        <label class="one" for="sex">性别：</label>
        <select id="sex" v-model="user.userSex" name="user.userSex" >
         <option id="op" v-for="option in sexsure" v-bind:value="option.value">{{option.text}}</option>
        <!-- <option id="op" value="萌妹子">萌妹子</option>
         <option id="op" value="软汉子">软汉子</option>
         <option id="op" value="女王">女王</option>
         <option id="op" value="萌面骑士">萌面骑士</option>
         <option id="op" value="腐女">腐女</option>
         <option id="op" value="中二青年">中二青年</option>-->
        </select>
      </p>
      <p class="clearfix">
        <label class="one" for="password">密码：</label>
        <input id="password" v-model="user.userPassword" name="user.userPassword" type="password" class="{required:true,rangelength:[8,20],}" value="" placeholder="" />
      </p>
      <div id="pwdinfo">{{pwdinfo}}</div>
      <p class="clearfix">
        <label class="one" for="confirm_password">确认密码：</label>
        <input id="confirm_password" v-model="confirm_password" name="confirm_password" type="password" class="{required:true,equalTo:'#password'}" value="" placeholder="" />
      </p>
      <div id="conpwdinfo">{{conpwdinfo}}</div>
      <p class="clearfix agreement">
        <input type="checkbox" />
        <b class="left">已阅读并同意<router-link to="" id="agreement">《用户协议》</router-link></b>
      </p>
      <p class="clearfix"><label class="one"></label><input class="submit" type="submit" value="立即注册" /></p>
      <p class="last"><router-link to="/" id="login">已有账号？马上前往登录！&gt;</router-link></p>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userinfo: '',
      pwdinfo: '',
      conpwdinfo: '',
      confirm_password: '',
      user: {
        userSex: 3 // 初始默认值
      },
      sexsure: [
        {text: '御姐', value: 1},
        {text: '大佬', value: 2},
        {text: '吃汉', value: 3},
        {text: '(lll￢ω￢)', value: 4}
      ]
    }
  },
  methods: {
    onSubmit: function () {
      var flag = this.checkform(this.user)
      console.log(flag)
    },
    checkform: function (user) {
      if (user.userName === undefined || user.userName === null || user.userName.length === 0) {
        this.userinfo = '用户名不能为空！>_<'
        return false
      } else if (user.userPassword === undefined || user.userPassword === null || user.userPassword.length === 0) {
        this.userinfo = undefined
        this.pwdinfo = '密码不能为空!T^T'
        return false
      } else if (user.userPassword !== this.confirm_password) {
        alert(this.confirm_password)
        this.userinfo = undefined
        this.pwdinfo = undefined
        this.conpwdinfo = '两次密码不一致！'
        return false
      } else {
        this.userinfo = undefined
        this.pwdinfo = undefined
        this.conpwdinfo = undefined
        return true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin:0;
  padding:0;
}
.clearfix:after {
  content:".";
  display:block;
  clear:both;
  font-size:0;
  overflow:hidden;
  height:0;
}
.clearfix {
  zoom:1;
}
.register {
  background-image: url(../assets/register/26.jpg);
  font-family: 'Open Sans', sans-serif;
	background-size:cover;
	-webkit-background-size:cover;
	-moz-background-size:cover;
	-o-background-size:cover;
  min-height: 650px;
  padding-bottom: 4%;

}
form {
  margin:0px 0 0 340px;
  padding-top: 100px;
}
form p {
  margin-bottom:10px;
  text-align: left;
}
router-link {
  color:#ff7702;
}
label {
  display:block;
  float:left;
  height:48px;
  line-height:48px;
  color:#F00;
  text-indent:10px;
  padding-left: 10%;
}
label.one {
  width:90px;
  height:48px;
  text-align:right;
  color:#000;
}
input {
  float:left;
  font-size:16px;
  font-family:"微软雅黑";
  color:#666;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -o-border-radius: 5px;
}
#username,#password,#confirm_password,.submit,#agent {
  border:1px solid #ccc;
  width:300px;
  height:46px;
  text-indent:10px;
}
#sex {
  border:1px solid #ccc;
  width:300px;
  height:46px;
  text-indent:10px;
  font-size: 22px;

}
.agreement {
  margin-left:90px;
  height:30px;
  line-height:30px;
  font-size:14px;
}
.agreement input {
  display:block;
  line-height:30px;
  height:14px;
  margin:8px 8px 0 11%;
  border:none;
  width:20px;
}
.submit{
  margin-left:0px;
  background:#F93;
  font-size:20px;
  letter-spacing:4px;
  color:#fff;
  cursor:pointer;
}
.last {
  padding-left: 280px;
  color:rgb(226, 61, 160);
}
#userinfo {
  color: rgb(221, 19, 200);
  margin-left: 10px;
}

#pwdinfo {
  color: rgb(221, 19, 200);
  margin-left: 10px;
}

#conpwdinfo {
  color: rgb(221, 19, 200);
  margin-left: 10px;
}
</style>
