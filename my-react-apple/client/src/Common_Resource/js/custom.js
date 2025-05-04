plus.on("click", function (){
    if ($(window).width() < 768) {
      console.log(this);
        // Toggle the expanded class on the clicked h3
        $(this).next('ul').slideToggle();
        $(this).toggleClass('expanded');

      
      }
})


$(window).resize(function() {
if ($(window).width() > 768) {
  // On desktop, make sure all ULs are visible
  $(".footer-links-wrapper ul").show();
  // Remove expanded class from all h3 elements
  $(".footer-links-wrapper h3").removeClass('expanded');
} else {
  // On mobile, hide all ULs (except those with expanded h3)
  $(".footer-links-wrapper ul").hide();
}
});