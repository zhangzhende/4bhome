<template>
<div class="con" style="z-index:0;">
  <ul>
    <li>
      <div class="box">
        <a href="">
        <img src="../assets/main/53-1.jpg" />
        <div class="box-content">
          <h3 class="title">中二</h3>
          <span class="post">举绅士之力，佑我蜀汉</span>
        </div>
        </a>
      </div>
    </li>
    <li>
      <div class="box">
        <a href="">
        <img src="../assets/main/63-1.jpg" />
        <div class="box-content">
          <h3 class="title">文艺</h3>
          <span class="post">垂死病中惊坐起， 笑问客从何处来</span>
        </div>
        </a>
      </div>
    </li>
    <li>
      <div class="box">
        <a href="">
        <img src="../assets/main/class3.jpg" />
        <div class="box-content">
          <h3 class="title">逗比</h3>
          <span class="post">逗比是一门严肃的喜剧文学</span>
        </div>
        </a>
      </div>
    </li>
    <li>
      <div class="box">
        <a href="">
        <img src="../assets/main/class4.jpg" />
        <div class="box-content">
          <h3 class="title">古风</h3>
          <span class="post">玲珑骰子安红豆，相思红豆，入骨相思君知否</span>
        </div>
      </a>
      </div>
    </li>
    <li>
      <div class="box">
        <a href="">
        <img src="../assets/main/class5.jpg" />
        <div class="box-content">
          <h3 class="title">更多期待</h3>
          <span class="post">潘多拉的魔盒</span>
        </div>
      </a>
      </div>
    </li>
    <li>
      <div class="box">
        <a href="">
        <img src="../assets/main/class6.jpg" />
        <div class="box-content">
          <h3 class="title">迷之区域</h3>
          <span class="post">神秘领域即将开启</span>
        </div>
      </a>
      </div>
    </li>
  </ul>

</div>
</template>

<script>
export default {
  http: {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },
  name: 'main',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {}
}
</script>
<!-- <script type="text/javascript" src="../js/jquery.js"></script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  list-style-type: none;
}
a {
  color: white;
}
/*清楚内外默认边距*/
h3  {
  color: white;
}
span  {
  color: white;
}
.con {
  background: url(../assets/main/12.jpg);
  background-position: -50px -500px;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  margin: 0px auto;
  padding-left: 13%;
  padding-right: 10%;
  padding-top: 25px;
  position: absolute;
}

.con ul li {
  width: 297px;
  height: 198px;
  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.box {
  text-align: center;
  overflow: hidden;
  color: #fff;
  position: relative;
}

.box:after {
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 69%, rgba(0, 0, 0, 0.76) 100%);
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease 0s;
}

.box:hover:after {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0.09) 11%, rgba(0, 0, 0, 0.12) 13%, rgba(0, 0, 0, 0.19) 20%, rgba(0, 0, 0, 0.29) 28%, rgba(0, 0, 0, 0.29) 29%, rgba(0, 0, 0, 0.42) 38%, rgba(0, 0, 0, 0.46) 43%, rgba(0, 0, 0, 0.53) 47%, rgba(0, 0, 0, 0.75) 69%, rgba(0, 0, 0, 0.87) 84%, rgba(0, 0, 0, 0.98) 99%, rgba(0, 0, 0, 0.94) 100%);
}

.box img {
  width: 100%;
  height: auto;
}

.box .box-content {
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.box .title {
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 10px 0;
  transform: translateY(60px);
  transition: all 0.4s cubic-bezier(0.13, 0.62, 0.81, 0.91) 0s;
}

.box .post {
  display: block;
  padding: 8px 0;
  font-size: 15px;
  transform: translateY(145px);
  transition: all 0.4s cubic-bezier(0.13, 0.62, 0.81, 0.91) 0s;
}

.box:hover .title,
.box:hover .post {
  transform: translateY(0);
}

.box .social {
  list-style: none;
  padding: 0 0 5px 0;
  margin: 40px 0 25px;
  opacity: 0;
  position: relative;
  transform: perspective(500px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
  transition: all 0.6s cubic-bezier(0, 0, 0.58, 1) 0s;
}

.box:hover .social {
  opacity: 1;
  transform: perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}

.box .social:before {
  content: "";
  width: 50px;
  height: 2px;
  background: #fff;
  margin: 0 auto;
  position: absolute;
  top: -23px;
  left: 0;
  right: 0;
}

.box .social li {
  display: inline-block;
}

.box .social li {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  background: #6d3795;
  font-size: 20px;
  color: #fff;
  margin-right: 10px;
  transition: all 0.3s ease 0s;
}

.box .social li :hover {
  background: #bea041;
}

.box .social li:last-child {
  margin-right: 0;
}
</style>
