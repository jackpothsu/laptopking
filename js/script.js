$(function () {
    $(".header").load("common.html .header>*");
    $(".footer").load("common.html .footer>*");

    let width = $(window).width()
  if(width < 415){ let htmlbrs = $(".ablr p")
  for (let i = 0; i < htmlbrs.length; i++) {
    let htmlbr = htmlbrs[i];
    let htmlString = htmlbr.innerHTML;
    let cleanedString = htmlString.replace(/<br\s*\/?>/gi, "");
    htmlbr.innerHTML = cleanedString;
  }}
   

  //漢堡排
  $('.header').click(function(){
    $('.top1').toggleClass('on');
    $('.toggle').toggleClass("open");
  })
  

  $('.mainitem li').click(function(){
    $('p').toggleClass('test-on');
    
  })


  // 取得拉條元素
const scrollbar = document.documentElement.style;

// 設定拉條寬度和顏色
scrollbar.setProperty('--scrollbar-width', '16px');
scrollbar.setProperty('--scrollbar-color', '#888');

// 設定拉條背景顏色
scrollbar.setProperty('--scrollbar-background-color', '#f1f1f1');
  });

  document.addEventListener("DOMContentLoaded", function() {
    var loading = document.getElementById("loading");
    loading.style.display = "none";
  });
  

 
