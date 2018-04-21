<template>
<div class="con" >
  <div class="container" >
    <ul class="menu" style="display:inline-block; min-width:980px;">
      <li><a href="../main.jsp">首页</a></li>
      <li><a href="#">菜单一</a>
        <ul class="submenu">
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
        </ul>
      </li>
      <li class="active"><a href="#s2">菜单二</a>
        <ul class="submenu">
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
        </ul>
      </li>
      <li><a href="#">菜单三</a>
        <ul class="submenu">
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
          <li><a href="#">哈哈</a></li>
        </ul>
      </li>
      <li><a href="#">哈哈</a></li>
      <li><a href="#">嘻嘻</a></li>
    </ul>
  </div>
  <div class="row" style="display:inline-block; min-width:980px;">
    <div class="col-sm-6">
      <div class="ih-item circle effect2 top_to_bottom">
        <a href="#">
          <div class="img"><img src="../assets/main_zhonger/assets/4.jpg" alt="img"></div>
          <div class="info">
            <h3>Heading here</h3>
            <p>Description goes here</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="ih-item circle colored effect2 bottom_to_top">
        <a href="#">
          <div class="img"><img src="../assets/main_zhonger/assets/5.jpg" alt="img"></div>
          <div class="info">
            <h3>Heading here</h3>

            <p>Description goes here</p>
          </div>
        </a>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="ih-item circle effect2 top_to_bottom">
        <a href="#">
          <div class="img"><img src="../assets/main_zhonger/assets/6.jpg" alt="img"></div>
          <div class="info">
            <h3>Heading here</h3>

            <p>Description goes here</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="ih-item circle colored effect2 bottom_to_top">
        <a href="#">
          <div class="img"><img src="../assets/main_zhonger/assets/7.jpg" alt="img"></div>
          <div class="info">
            <h3>Heading here</h3>

            <p>Description goes here</p>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="row" style="display:inline-block;min-width:980px;">
    <div class="col-sm-6">
      <div class="ih-item circle effect2 top_to_bottom">
        <a href="#">
          <div class="img"><img src="../assets/main_zhonger/assets/11.jpg" alt="img"></div>
          <div class="info">
            <h3>Heading here</h3>

            <p>Description goes here</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="ih-item circle colored effect2 top_to_bottom">
        <a href="#">
          <div class="img"><img src="../assets/main_zhonger/assets/12.jpg" alt="img"></div>
          <div class="info">
            <h3>Heading here</h3>

            <p>Description goes here</p>
          </div>
        </a>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="ih-item circle effect2 bottom_to_top">
        <a href="#">
          <div class="img"><img src="../assets/main_zhonger/assets/13.jpg" alt="img"></div>
          <div class="info">
            <h3>Heading here</h3>

            <p>Description goes here</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="ih-item circle colored effect2 bottom_to_top">
        <a href="centerComment.jsp" target="_blank">
          <div class="img"><img src="../assets/main_zhonger/assets/14.jpg" alt="img"></div>
          <div class="info">
            <h3>国际中二交流中心</h3>
            <p>没错！我就是第九个被选召的孩子</p>
          </div>
        </a>
      </div>
    </div>
  </div>
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
<style scoped>
.con{
  background:url(../assets/main_zhonger/19.jpg) 0px 0px;
}
@import '../css/mainzhonger/css.css';
@import '../css/mainzhonger/main.css';
</style>
