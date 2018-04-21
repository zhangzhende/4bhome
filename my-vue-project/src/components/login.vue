<template>
<div class="login">
  <h1>登录</h1>
  <div class="login-form">
    <div class="avtar">
      <img src="./../assets/login/avtar.png" />
      <div id="info" style="color: orange;">{{info}}</div>
    </div>
    <form  name="loginForm" v-on:submit.prevent="onSubmit">
      <div class="usesrname ">
        <label>用户名：</label><input type="text " v-model="user.id "  name="name" class="name">
      </div>
      <div class="passworddiv ">
        <label>密码：</label><input type="password" v-model="user.password "  name="password" class="password">
      </div>
      <div class="signin ">
        <button  type="submit " class="submit">提交</button>
      </div>
    </form>
  </div>
  <p class="last"><router-link to="register" id="registerUrl">没有账号?立即注册!&gt;</router-link></p>
</div>
</template>

<script>
export default {
  http: {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  },
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      info: '',
      user: {},
      loginForm: {}
    }
  },
  methods: {
    onSubmit: function () {
      var flag = this.check(this.user)
      if (flag) {
        var formData = JSON.stringify(this.user)
        this.$http.post('path', formData).then((response) => {
        }, (response) => {
          this.info = '你是sb吗？？😂'
        })
      }
    },
    check: function (user) {
      if (user.id === undefined || user.id === null || user.id.length === 0) {
        this.info = '用户名不能为空！>_<'
        return false
      } else if (user.password === undefined || user.password === null || user.password.length === 0) {
        this.info = '密码不能为空!T^T'
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form {
	background: #2b2b36;
	position: relative;
	width: 30%;
	margin: 2% auto 0 auto;
	text-align: center;
	border-radius: 15px;
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	-o-border-radius: 15px;
}
.login{
	background: url(../assets/login/bg1.jpg)  0px 0px;
	font-family: 'Open Sans', sans-serif;
	background-size:cover;
	-webkit-background-size:cover;
	-moz-background-size:cover;
	-o-background-size:cover;
	min-height:550px;
  padding-bottom: 5%;
}
.wrap{
	margin: 0 auto;
	width: 80%;
}
h1 {
	font-family: 'Exo 2', sans-serif;
	  text-align: center;
	  padding-top: 4em;
	  font-weight: 400;
	  color: #2B2B36;
	  font-size: 2em;
    margin: 0px;
}

.avtar img {
  margin: 2em 0 0;
}
.head-info {
  padding: 5px 0;
  text-align: center;
  font-weight: 600;
  font-size: 2em;
  color: #fff;
  background: #23232e;
  height: 50px;
	border-top-left-radius: 10px;
	-webkit-border-top-left-radius: 10px;
	-moz-border-top-left-radius: 10px;
	-o-border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	-webkit-border-top-right-radius: 10px;
	-moz-border-top-right-radius: 10px;
	-o-border-top-right-radius: 10p
}
label{
  color: #9199aa;
}
.name {
	  width: 50%;
	  padding: 1em 2em 1em 3em;
	  color: #9199aa;
	  font-size: 18px;
	  outline: none;
	  background: url(../assets/login/adm.png) no-repeat 10px 15px;
	  border: none;
	  font-weight: 100;
	  border-bottom: 1px solid#484856;
	  margin-top: 2em;
}
.password{
	  width: 50%;
	  padding: 1em 2em 1em 3em;
	  color: #dd3e3e;
	  font-size: 18px;
	  outline: none;
	  background: url(../assets/login/key.png) no-repeat 10px 23px;
	  border: none;
	  font-weight: 100;
	  border-bottom: 1px solid#484856;
	  margin-bottom: 3em;
 }
.key {
   background: url(../assets/login/pass.png) no-repeat 447px 17px;
}
.submit{
  font-size: 30px;
  color: #fff;
  outline: none;
  border: none;
  background: #3ea751;
  width: 100%;
  padding: 18px 0;
  border-bottom-left-radius: 15px;
	-webkit-border-bottom-left-radius: 15px;
	-moz-border-bottom-left-radius: 15px;
	-o-border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	-webkit-border-bottom-right-radius: 15px;
	-moz-border-bottom-right-radius: 15px;
	-o-border-bottom-right-radius: 15px;
	cursor: pointer;
}
.submit:hover {
	background: #ff2775;
  border-bottom-left-radius: 15px;
	-webkit-border-bottom-left-radius: 15px;
	-moz-border-bottom-left-radius: 15px;
	-o-border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	-webkit-border-bottom-right-radius: 15px;
	-moz-border-bottom-right-radius: 15px;
	-o-border-bottom-right-radius: 15px;
  	transition: 1s all;
	-webkit-transition: 1s all;
	-moz-transition: 1s all;
	-o-transition: 1s all;
}
#info {
  color: white;
}
.last {
  padding-left: 20%;
}
#registerUrl {
  color: #FF3
}
</style>
