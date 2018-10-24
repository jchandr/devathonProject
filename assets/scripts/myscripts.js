$(document).ready(function () {
  var addProductsToDisplay = function() {

var productTemplate = '<div class="product">'+
'            <div class="product-detail" style="height: 14vw">'+
'              <div class="product-image">'+
'                <img src="https://picsum.photos/250/250/?random'+Math.random(5)+'" alt="">'+
'              </div>'+
'            </div>'+
'            <div class="product-detail product-detail-hidden" style="height: 14vw">'+
'              <input class="hidden" type="file" name="product-image-files">'+
'              <div class="product-no-extra-photos">'+
'                <img src="http://www.free-icons-download.net/images/upload-logo-icon-61335.png">'+
'              </div>'+
'              <div class="product-pictures hidden">'+
'                <div class="add-a-picture">'+
'                  <i class="fas fa-plus"></i>'+
'                </div>'+
'              </div>'+
'            </div>'+
'            <div class="product-detail" style="display: inline;">'+
'              <div class="product-short-info">'+
'                <div class="product-title">'+
'                  Product Title'+
'                </div>'+
'                <div class="product-info-seperator">'+
'                </div>'+
'                <div class="product-price">'+
'                  <i class="fas fa-rupee-sign"></i> 2,500'+
'                </div>'+
'              </div>'+
'              <div class="product-extended-info">'+
'                <div class="input-group">'+
'                  <label>Product Title</label>'+
'                  <input type="text" name="" value="Pink Gorgette Embelished Saree" style="color: black; font-weight: bold;">'+
'                </div>'+
'                <div class="seperator"></div>'+
'                <div class="input-group">'+
'                  <label>Price</label>'+
'                  <div style="display: flex">'+
'                    <i class="fas fa-rupee-sign"></i>'+
'                    <input type="text" name="" value="1,800" style="color: black; font-weight: bold;">'+
'                  </div>'+
'                </div>'+
'                <div class="seperator"></div>'+
'                <div class="input-group">'+
'                  <label>Offer Price</label>'+
'                  <input type="text" name="" value="" placeholder="Enter offer price" style="font-weight: bold;">'+
'                </div>'+
'                <div class="seperator"></div>'+
'                <div class="input-group">'+
'                  <label>Inventory</label>'+
'                  <div style="display: flex">'+
'                    <select>'+
'                      <option value="">1</option>'+
'                      <option value="">2</option>'+
'                      <option value="">3</option>'+
'                    </select>'+
'                    <i class="fas fa-chevron-down" style="color: #d6d2d2;"></i>'+
'                  </div>'+
'                </div>'+
'                <div class="seperator"></div>'+
'                <div class="input-group">'+
'                  <label>Desctiption</label>'+
'                  <input type="text" name="" value="" placeholder="Enter Desctiption" style="font-weight: bold;">'+
'                </div>'+
'                <div class="seperator"></div>'+
'              </div>'+
'            </div>'+
'            <div class="product-detail product-detail-hidden">'+
'              <div class="product-variations">'+
'                <div class="no-product-variation">'+
'                  <div class="plus-box">'+
'                    <i class="fas fa-plus"></i>'+
'                  </div>'+
'                  <p>Have variations to your product<br/>like size, color and more?</p>'+
'                </div>'+
'                <div class="add-more-variation-big hidden">'+
'                  <div class="plus-box">'+
'                    <i class="fas fa-plus"></i>'+
'                  </div>'+
'                  <div>'+
'                    <p>Add more variations</p>'+
'                  </div>'+
'                </div>'+
'              </div>'+
'              <div class="next-button">'+
'              </div>'+
'            </div>'+
'        </div>';
    $(".products").append(productTemplate)
  }

  var currentlyFocusedProduct = undefined

  $(".products").on("click", ".product", function(event) {
    //check for previously open product and close it
    if(currentlyFocusedProduct) {
      $(currentlyFocusedProduct).children(".product-detail").each(function(i, x) {
        if(i === 1 || i === 3) {
          $(x).removeClass("product-detail-visible")
          $(x).addClass("product-detail-hidden")
        }
        if(i === 0 || i === 2) {
          $(x).removeClass("product-detail-visible")
        }
      })
      $(currentlyFocusedProduct).children(".product-detail").children(".product-extended-info").css("visibility", "hidden");
      $(currentlyFocusedProduct).children(".product-detail").children(".product-short-info").show()
    }
    //set the currently focused product
    currentlyFocusedProduct = $(event.currentTarget)
    $(currentlyFocusedProduct).children(".product-detail").each(function(i, x) {
      $(x).removeClass("product-detail-hidden");
      $(x).addClass("product-detail-visible")
    })
    $(currentlyFocusedProduct).children(".product-detail").children(".product-extended-info").css("visibility", "visible");
    $(currentlyFocusedProduct).children(".product-detail").children(".product-short-info").hide()
  })

  $(".products").on("click", "i.fa-chevron-down", function (event) {
    $(event.target).siblings("select")
  })

  $(".products").on("click", ".product-no-extra-photos", function (event) {
    $(event.currentTarget).siblings("input[name=\"product-image-files\"]").click()
  })

  $(".products").on("click", ".add-a-picture", function (event) {
    $(event.currentTarget).parent().siblings("input[name=\"product-image-files\"]").click()
  })

  $(".products").on("change", "input[name=\"product-image-files\"]", function (event) {
    if(event.target.files.length > 0) {
      console.log(event)
      $(event.target).siblings(".product-no-extra-photos").eq(0).addClass("hidden")
      $(event.target).siblings(".product-pictures").eq(0).removeClass("hidden")
      let productImageDiv = $.parseHTML('<div class="product-picture"><img src="" alt=""></div>')
      $(productImageDiv).children("img").attr('src', "https://picsum.photos/250/250/?random"+ Math.random(5))
      $(event.target).siblings(".product-pictures").prepend(productImageDiv);
    }
  })

  $(".products").on("click", ".no-product-variation > .plus-box", function(event) {
    $(event.target).parent().hide()
    $(event.target).parent().siblings(".add-more-variation-big").removeClass("hidden")
    var newVariation = '<div class="product-variation input-group">'+
    '                  <label>Option</label>'+
    '                  <input type="text" name="" value="" placeholder="Add option name">'+
    '                  <div class="add-more-variation-small">'+
    '                    <div class="plus-box">'+
    '                      <i class="fas fa-plus"></i>'+
    '                    </div>'+
    '                    <div>'+
    '                      <p>Add more variations</p>'+
    '                    </div>'+
    '                  </div>'+
    '                </div>';

    newVariation = $.parseHTML(newVariation)
    $(event.currentTarget).parent().parent().prepend(newVariation)
  })

  $(".products").on("click", ".add-more-variation-big",function(event) {
    var newVariation = '<div class="product-variation input-group">'+
    '                  <label>Option</label>'+
    '                  <input type="text" name="" value="" placeholder="Add option name">'+
    '                  <div class="add-more-variation-small">'+
    '                    <div class="plus-box">'+
    '                      <i class="fas fa-plus"></i>'+
    '                    </div>'+
    '                    <div>'+
    '                      <p>Add more variations</p>'+
    '                    </div>'+
    '                  </div>'+
    '                </div>';

    newVariation = $.parseHTML(newVariation)
    $(event.currentTarget).parent().prepend(newVariation)
  })

  $(".products").on("click", ".add-more-variation-small",function(event) {
    var newInputElement = $.parseHTML('<input type="text" name="" value="" placeholder="Add option name">')
    $(newInputElement).insertBefore($(event.currentTarget))
  })

  addProductsToDisplay()
  addProductsToDisplay()
  addProductsToDisplay()
  addProductsToDisplay()
})
