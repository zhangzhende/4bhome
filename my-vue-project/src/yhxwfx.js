//服务名称
var Sname = 'yhxwfx'
//版本号
var Sversion = '1.0'
//记录对象
var Sconsumer = 'sfalw'
//页面开始时间
var loadtime = (new Date()).getTime();
if (localStorage.getItem("userid") == undefined || localStorage.getItem("userid").length < 1) {
  localStorage.setItem("userid", getuuid(16, 35));
}
document.addEventListener("click", function() {
  record("click");
});
window.addEventListener("load", function() {
  if (sessionStorage.getItem("sessionid") == undefined || sessionStorage.getItem("sessionid").length < 1) {
    sessionStorage.setItem("sessionid", getymd() + "" + getuuid(8, 35));
  }
  //loadtime = (new Date()).getTime();
  sessionStorage.setItem("pvid", loadtime + "" + getuuid(3, 35));

  record("load");
});
window.addEventListener("beforeunload", function() {
  record("beforeunload");
});
window.addEventListener("touchstart", function() {
  record("touchstart");
});
function record(behaviour) {
  var param = {};
  param.behaviour = behaviour || '';
  if (navigator) {
    param.lang = navigator.language || '';
  }
  //用户识别号，区分不同用户
  param.userid = localStorage.getItem("userid");
  //会话识别号
  param.sessionid = sessionStorage.getItem("sessionid");
  //页面识别号
  param.pvid = sessionStorage.getItem("pvid");
  param.appname = Sname;
  param.appversion = Sversion
  param.consumer = Sconsumer;
  //事件发生的事件戳
  var date = new Date()
  param.timestamp = date.getTime();
  if (behaviour == "click") {
    var event = window.event;
    //点击事件鼠标所在的横坐标
    param.cx = event.clientX;
    //点击事件鼠标所在的纵坐标
    param.cy = event.clientY;
  }else if(behaviour=="touchstart"){
	  var event = window.event;
	  var touch = event.touches[0];
	  param.cx = Math.round(touch.pageX);
	  param.cy = Math.round(touch.pageY);
  }else if(behaviour=="beforeunload"){
    //停留时间
    param.accesstime = param.timestamp - loadtime;
    loadtime=param.timestamp;
  }



  //时区
  param.timezone = date.getTimezoneOffset() / -60;
  if (document) {
    //当前页面的url
    param.url = document.URL || '';
    //当前页面的标题
    param.title = document.title || '';
  }
  //Window对象数据
  if (window && window.screen) {
    //屏幕分辨率
    param.screen = window.screen.width + "*" + window.screen.height;
  }
  var args = '';
  for (var i in param) {
    if (args != '') {
      args += '&';
    }
    args += i + '=' + encodeURIComponent(param[i]);
  }

  //通过Image对象请求后端脚本
  var img = new Image(1, 1);
  img.src = 'http://172.16.176.169:8086/test.gif?' + args;
  var img2 = new Image(1, 1);
  img2.src = 'http://172.16.176.169:8086/youyou.gif?' + args;
}

function getSessionId() {
  var c_name = 'JSESSIONID';
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=")
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1
      c_end = document.cookie.indexOf(";", c_start)
      if (c_end == -1) c_end = document.cookie.length
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
};
//获取随机字符串
function getuuid(len, radix) {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [],
    i;
  radix = radix || chars.length;
  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
  } else {
    var r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuid.join('');
}
//获取年与日YYYYMMDD
function getymd() {
  var nowDate = new Date();
  var year = nowDate.getFullYear();
  var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) :
    nowDate.getMonth() + 1;
  var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
    .getDate();
  var dateStr = year + "" + month + day;
  return dateStr;
}
