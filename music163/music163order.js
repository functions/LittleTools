// 引入排序方法
var quickOrder = require('./quicksort.js');

// 私有变量
var _start = -1;
var _end = -1;
var curPage = -1;
var allList = null;

// 获取当前页的歌单列表，并收集每个歌单的信息
function getCurPageList() {
  var songItem = null;
  var songList = document.querySelector('#g_iframe')
                    .contentWindow.document.querySelectorAll('#m-pl-container li');
  console.log(curPage + '=========');
  songList.forEach(function(item){
    songItem = {
      id: item.querySelector('.msk').href,
      nb: +item.querySelector('.nb').innerText.replace('万', '0000'),
      title: item.innerText
    };
    allList.push(songItem);
  });
}

// 翻页并获取每页列表中的所有歌单详情
function switchPage() {
  if(curPage > _end) {
    // 对收集的结果进行排序
    var orderArr = quickOrder(allList, 'desc', 'nb');
    console.log(orderArr);
    return;
  }
  document.querySelector('#g_iframe').contentWindow.document.querySelector('.zbtn.znxt').click();
  setTimeout(function() {
    isLoaded(function(){
      console.log(curPage);
      getCurPageList();
      curPage++;
      switchPage();
    });
  }, 300)
}

// 判断列表区域是否加载完成
function isLoaded(cb) {
  setTimeout(function(){
    var pager = document.querySelector('#g_iframe').contentWindow.document.querySelector('#m-pl-pager');
    if(pager){
        cb();
    } else {
        isLoaded(cb);
    }
  }, 200);
}


module.exports = function(start, end) {
  _start = start;
  _end = end;
  curPage = _start;
  allList = [];
  switchPage();
}