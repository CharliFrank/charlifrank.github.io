/* global $ */
/* global _ */
$(function() {
    // ALL YOUR CODE GOES BELOW HERE //
    $.getJSON('data/product.json', function(product) {

            var $containerDiv = $('<div>').attr('class', 'container-fluid').appendTo('.main');
            // var $divRows = $('<div>').attr('class', 'row').appendTo('.container-fluid');



            var $populatedDivRows = _.map(product, function(productVal, index) {
                return $($('<div>').attr('class', 'row'))
                    .append($('<div>').attr('class', 'col-md-3')
                        .append($('<img>').attr('src', 'img/product/thumbs/' + productVal.image)
                            .attr('class', 'img-responsive')
                            .attr('id', 'image' + index)
                            .attr('data-toggle', 'modal')
                            .attr('data-target', '#myModal')
                        )).click(function(){
                            console.log(index)
                            var modalTitle = $('#myModalLabel').text(productVal.desc)
                            var modalImage = $('.col-md-3').append($('<img>').attr('src', 'img/product/thumbs/' + productVal.image))
                            var modalInfo = $('.col-md-7').append($('<p>').text('$' + productVal.price.toFixed(2)))
                                                            .append($('<p>').text('Specs: \n' + (_.map(productVal.specs, function(specVal, index){return specVal}))))
                                                            .append($('<p>').text('Stock:' + productVal.stock))
                            var modalColors = $('.col-md-2').append($('<p>').text('Available Colors:' + (_.map(productVal.availableColors, function(colorVal, index){return colorVal + '\n'}))))
                            // var modalClose = function(){
                            //     return $('.close').modal(hide)
                            // }
                            
                        })
                    .append($('<div>').attr('class', 'col-md-9')
                        .append($('<h3>').text(productVal.desc))
                        .append($('<h3>').text('$' + productVal.price.toFixed(2))));
            })
            $('.container-fluid').append($populatedDivRows);

        // $('#searchBtn').on('click', function(){
        //     console.log($('#searchBar').val())
        // })
        //  $('#searchBar').on('keyup', function(){
        //     console.log($('#searchBar').val())
        //     _.filter(product, function(value, index) {
        //         if($('#searchBar').val().toLowerCase() == value){
        //             return value
        //         }
        //     })
        // })    
        
        
        
        var $ul = $('<ul>').attr('class', 'live-search-list').appendTo('.main');
            
        
        var $li = _.map(product, function(val, index){
           var type = $('<li>').attr('class', 'live-search-list li').text(val.type)
           var desc = $('<li>').attr('class', 'live-search-list li').text(val.desc)
           var price = $('<li>').attr('class', 'live-search-list li').text(val.price)
            var color = $('<li>').attr('class', 'live-search-list li').text(val.color)
            var stock = $('<li>').attr('class', 'live-search-list li').text(val.stock)
           return type, desc, color
        })
        $($ul).append($li)
        
        
        $('.live-search-list li').each(function(){
           $(this).attr('data-search-term', $(this).text().toLowerCase());
        });

         $('.live-search-box').on('keyup', function(){

            var searchTerm = $(this).val().toLowerCase();
            
                $('.live-search-list li').each(function(){
            
                    if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
            
                });
            
            });
        })
        // ALL YOUR CODE GOES ABOVE HERE //
});