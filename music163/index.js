// var $ = require('jquery');
var run = require('./music163order.js');

run(0, 42, function(list) {
  list.forEach(function(item) {
    console.log(item.nb + '   ' + item.id + '   ' + item.title);
  });
});

    // run(start, end, function(list) {
    //   console.log(111)
    //   // $('#js-song-list').html(getSongListHTML(list));
    // });

// function getSongListHTML (songList) {
//   var htmlArr = [];
//   songList.forEach(function(item) {
//     htmlArr.push(
//       `
//       <div class="col-xs-3 col-xs-3">
//           <div class="thumbnail">
//               <img src="${item.img}" alt="...">
//               <div class="caption">
//                   <h6><a href="${item.url}" target="_blank">${item.title}</a></h6>
//                   <p>${item.nb}</p>
//               </div>
//           </div>
//       </div>
//       `
//     );
//   });
//   return htmlArr.join('');
// }