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
   
  });

 
