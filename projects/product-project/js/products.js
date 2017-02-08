/* global $ */
/* global _ */
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  $.getJSON('data/product.json', function(product){

    var $containerDiv = $('<div>').attr('class', 'container-fluid').appendTo('.main');
    // var $divRows = $('<div>').attr('class', 'row').appendTo('.container-fluid');


//     var $createModals = function(){

//             console.log('dsfnsv')
//     return    $('div').attr('id', 'myModal')
//                     .attr('class', 'modal show')
//                     .attr('tabindex', '-1')
//                     .attr('role', 'dialog')
//                     .attr('aria-hidden', 'true')
//                     .append($('<div>').attr('class', 'modal-dialog'))
//                     .append($('<div>').attr('class', 'modal-content')
//                                         .append($('<div>').attr('class', 'modal-header').append($('<button type="button" class="close" data-dismiss="modal">X</button>')
//                                                                                         .append($('<h3>').text(productVal.desc))))
//                                         .append($('<div>').attr('class', 'modal-body'))
//                                         .append($('<div>').attr('class', 'modal-footer')))
    
//   }
    // $('.main').append($createModals)
    
    var $populatedDivRows = _.map(product, function(productVal, index){
        return $($('<div>').attr('class', 'row'))
                            .append($('<div>').attr('class', 'col-md-3')
                            .append($('<img>').attr('src', 'img/product/thumbs/' + productVal.image)
                                                .attr('class', 'img-responsive')
                                                .attr('id', 'image'+index)
                                                // .css('width', '250px')
                                                // .css('height', '450px')
                                                ))
                            .append($('<div>').attr('class', 'col-md-9')
                                                .append($('<h3>').text(productVal.desc))
                                                                .append($('<h3>').text('$' + productVal.price.toFixed(2))));
    })
    $('.container-fluid').append($populatedDivRows);
  
    var $makingImagesClickable = _.map(product, function(productVal, index){
         $('#image'+index).on('click', function(){
            console.log('image#' + index +' was clicked')
                                
                    return $('<div>').attr('class', 'modal fade')
                                        .attr('tabindex', '-1')
                                        .attr('role', 'dialog')})
                                        .append($('<div>').attr('class', 'modal-dialog')
                                                            .attr('role', 'document'))
                                        .append($('<div>').attr('class', 'modal-content')
                                                            .append($('<div>').attr('class', 'modal-header').append($('<button>').attr('type', 'button')
                                                                                                                                    .attr('class', 'close')
                                                                                                                                    .attr('data-dismiss', 'modal')
                                                                                                                                    .attr('aria-label', 'Close').append($('<span>').attr('aria-hidden', 'true')
                                                                                                                                    .text(`&times;`)))
                                                                                                                        .append($('<h3>').text(productVal))))       
                                
                                        
                                                            // .append($('<div>').attr('class', 'modal-header').append($('<button>').attr('type', 'button')
                                                            //                                                                         .attr('class', 'close')
                                                            //                                                                         .attr('data-dismiss', 'modal')
                                                            //                                                                         .attr('aria-label', 'Close').append($('<span>').attr('aria-hidden', 'true')
                                                            //                                                                                                                         .text(`&times;`)))
                                                            //                                                 .append($('<h3>').text(productVal)))
                                                            // .append($('<div>').attr('class', 'modal-body').append($('<div>').attr('class', 'row')/*.append($('div').attr('class', 'col-md-3'))))
                                                            //                                                                                         .append($('div').attr('class', 'col-md-6'))
                                                            //                                                                                         .append($('div').attr('class', 'col-md-3'))                    
                                                            // .append($('<div>').attr('class', 'modal-footer').append($('<button>').attr('type', 'button')
                                                            //                                                                         .attr('class', 'btn btn-default')
                                                            //                                                                         .attr('data-dismiss', 'modal')
                                                            //                                                                         .text('close'))))
                          


    })
     
    
    
  })
  // ALL YOUR CODE GOES ABOVE HERE //
});