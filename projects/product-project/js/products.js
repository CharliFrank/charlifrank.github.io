/*global $*/
/*global _*/
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  $.getJSON('data/product.json', function(products){
      
      var displayProducts = function(products){
    //   // populate page with products
        console.log('working')
       return _.map(products, function(productValue, index){
         return $('<div>').attr('class', 'container-fluid')
                        .append($('<div>').attr('clas', 'row')
                            .append($('<div>').attr('class', 'col-md-12')
                                    .append($('<li>').attr('class', 'data-search-term').append($('<p>').text(productValue.desc)))
                                    .append($('<div>').attr('class', 'row')
                                        .append($('<div>').attr('class', 'col-md-7')
                                            .append($('<li>').attr('class', 'data-search-term').append($('<p>').text('$' + productValue.price)))
                                            .append($('<div>').attr('class', 'col-md-8')
                                                    .append($('<li>').attr('class', 'live-search-list li').attr('class', 'data-search-term').append($('<p>').text('Specs: \n' +_.chunk(productValue.specs, [size=1])))))
                                            .append($('<div>').attr('class', 'col-md-4')
                                                    .append($('<li>').attr('class', 'data-search-term').append($('<p>').text('Colors: \n' + _.chunk(productValue.availableColors, [size=1])))
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
  console.log(query);
  // console.log(query.split)
  query = query.toLowerCase();
  if(query.length > 1){
      // console.log(query.split)
      query = query.split(' ');
    }
    
   console.log(query);
   return products.filter(function(product, index){
    // console.log(Object.keys(product).length)
    for(var key in product){
    // console.log(product[key])
    
    if(Array.isArray(product[key])){
    //   console.log('array!!!!!!!!!');
      for(var i = 0; i < product[key].length; i++){
      // console.log(query, product[key][i] )
       if(product[key][i].length > 0){
        var productKeyISplit = product[key][i].split(' ');
        // console.log(productKeyISplit)
        for( var j = 0; j < productKeyISplit.length; j++){
          // console.log(query, productKeyISplit[j])
          for(var queryIndex = 0; queryIndex < query.length; queryIndex++){
            // console.log(query[queryIndex], productKeyISplit[j].toLowerCase() )
            if(query[queryIndex] === productKeyISplit[j].toLowerCase()){
              return product;
            }
          
          }
        }
       }
      }
    }
    
    if(typeof product[key] === 'string' && product[key].length > 0 ){
    //   console.log('string!!!!!')
      var prodKey = product[key].split(' ');
      if(prodKey.length > 0){
        for(var k = 0; k < prodKey.length; k++){
        // console.log(product[key][k]);
        for(queryIndex = 0; queryIndex < query.length; queryIndex++){
            // console.log(query[queryIndex], productKeyISplit[j].toLowerCase() )
            if(query[queryIndex] === prodKey[k].toLowerCase()){
              return product;
              // console.log(query[queryIndex], prodKey[k].toLowerCase())
            }
          
          }
        }
      }
      
    }
    
    }
  });
};
     
      
    //   $('.main').append(displayProducts(products.splice(10)));
      $('.search-btn').on('click', function(){
          
          if($('input').val() === ''){
           $('#products').html(displayProducts(products));
          } else {
           $('#products').html(displayProducts(search(products, $('input').val())));
          }
      });
      
      var sortLowToHigh = function(products){
         return  _.sortBy(products, 'price');
       };
      $('.low-to-high').on('click', function(){
       $('#products').html(displayProducts(sortLowToHigh(products)));
      });

       var sortHighToLow = function(products){
          var sorted =  _.sortBy(products, 'price');
          return sorted.reverse();
       };
    $('.high-to-low').on('click', function(){
          $('#products').html(displayProducts(sortHighToLow(products)));
      });
      
      var under500 = function(products){
          var lessThanT500 = _.filter(products, function(product, index){
           return product.price < 500;
          });
          return  _.sortBy(lessThanT500, 'price');
      };
    $('.under-500').on('click', function(){
          $('#products').html(displayProducts(under500(products)));
      });
      
    var fiveToSevenHundred = function(products){
          var fiveToSeven = _.filter(products, function(product, index){
           return product.price > 500 && product.price < 700;
          });
          return  _.sortBy(fiveToSeven, 'price');
      };
    $('.500-700').on('click', function(){
          $('#products').html(displayProducts(fiveToSevenHundred(products)));
      });
      
      
    var above700 = function(products){
      var moreThan700 = _.filter(products, function(product, index){
       return product.price > 700;
      });
      return  _.sortBy(moreThan700, 'price');
    };
    $('.above-700').on('click', function(){
      $('#products').html(displayProducts(above700(products)));
    });
       
      
      
      
        
    _.map(products, function(productValue, index){
        $('.image'+index).attr('data-toggle', 'modal').attr('data-target', '#myModal').on('click', function(){
                                        $('.modal-header').html($('<p>').text(products[index].desc))
                                        $('.modal-body').html($('<img>').attr('src', 'img/product/'+products[index].image).css('width', '250').css('height', '375'))
        })
       
    })
     

  
    

      
      
      
      
      
      
      
      
      
      
      
      
      
      
  })
  
  
  
  
  // ALL YOUR CODE GOES ABOVE HERE //
});