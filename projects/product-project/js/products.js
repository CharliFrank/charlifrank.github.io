/*global $*/
/*global _*/
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  $.getJSON('data/product.json', function(products){
      
      var displayProducts = function(products){
    //   // populate page with products
        
       return _.map(products, function(productValue, index){
         return $('<div>').attr('class', 'container-fluid')
                        .append($('<div>').attr('clas', 'row')
                            .append($('<div>').attr('class', 'col-md-12')
                                    .append($('<li>').attr('class', 'data-search-term').append($('<p>').text(productValue.desc)))
                                    .append($('<div>').attr('class', 'row')
                                        .append($('<div>').attr('class', 'col-md-7')
                                            .append($('<li>').attr('class', 'data-search-term').append($('<p>').text(productValue.price).attr('class', 'data-search-term')))
                                            .append($('<div>').attr('class', 'col-md-8')
                                                    .append($('<li>').attr('class', 'live-search-list li').attr('class', 'data-search-term').append($('<p>').text(_.map(productValue.specs, function(specs, index){return specs})))))
                                            .append($('<div>').attr('class', 'col-md-4')
                                                    .append($('<li>').attr('class', 'data-search-term').append($('<p>').text('Colors: \n' + _.map(productValue.availableColors, function(colors, index){return colors})))
                                                    .append($('<li>').attr('class', 'data-search-term').append($('<p>').text('Stock: \n' + productValue.stock))))))
                                        .append($('<div>').attr('class', 'col-md-5')
                                                .append($('<li>').attr('class', 'data-search-term').append($('<img>').attr('src', 'img/product/thumbs/'+productValue.image).attr('class', 'image'+index).css('width', '300').css('height', '300')                            .attr('id', 'image' + index)
                                                        // .attr('data-toggle', 'modal')
                                                        // .attr('data-target', '#myModal')
                                                        ))))))
          
         });
      };
      $('#products').append(displayProducts(products));
      
      var search = function(products, query){
        query = query.toLowerCase();
       
          return _.filter(products, function(product, index){
            
            return query === product.type   
            
          })
      }
     
      
    //   $('.main').append(displayProducts(products.splice(10)));
      var searchBarValue =$('.btn-group').on('click', function(){
         $('#products').html(displayProducts(search(products, $('input').val())))
      })
      
        
    _.map(products, function(productValue, index){
        $('.image'+index).attr('data-toggle', 'modal').attr('data-target', '#myModal').on('click', function(){
                                        $('.modal-header').html($('<p>').text(products[index].desc))
                                        $('.modal-body').html($('<img>').attr('src', 'img/product/'+products[index].image).css('width', '250').css('height', '375'))
        })
       
    })
     

  
    

      
      
      
      
      
      
      
      
      
      
      
      
      
      
  })
  
  
  
  
  // ALL YOUR CODE GOES ABOVE HERE //
});