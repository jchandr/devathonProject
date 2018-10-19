$(document).ready(function () {
  $(".product").on("click", function(event) {
    $(event.currentTarget).children(".product-detail").each(function(i, x) {
      $(x).removeClass("product-detail-hidden");
      $(x).addClass("product-detail-visible")
    })
    $(event.currentTarget).children(".product-detail").children(".product-extended-info").css("visibility", "visible");
    $(event.currentTarget).children(".product-detail").children(".product-short-info").hide()
  })
})
