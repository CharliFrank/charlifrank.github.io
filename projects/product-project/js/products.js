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
                        ))
                    .append($('<div>').attr('class', 'col-md-9')
                        .append($('<h3>').text(productVal.desc))
                        .append($('<h3>').text('$' + productVal.price.toFixed(2))));
            })
            $('.container-fluid').append($populatedDivRows);

            var $modals = _.map(product, function(productVal, index) {
            console.log('ARGGGGG!!!!!')    
            // return function(){
                return $('<div>').attr('class', 'modal fade')
                                .attr('id', 'myModal')
                                .attr('tabindex', '-1')
                                .attr('role', 'dialog')
                                .attr('aria-labelledby', 'gridSystemModalLabel')
                        .append($('<div>')
                                .attr('class', 'modal-dialog')
                                .attr('role', 'document')
                        .append($('<div>')
                                .attr('class', 'modal-content')
                        .append($('<div>')
                                .attr('class', 'modal-header')
                        .append($('<button>')
                                .attr('type', 'button')
                                .attr('class', 'close')
                                .attr('data-dismiss', 'modal')
                                .attr('aria-label', 'Close')
                                .attr('src', 'img' + index)
                        .append($('<span>')
                                .attr('aria-hidden', 'true')
                                .text(`&times;`)))
                        .append($('<h3>')
                                .text(productVal.desc)))
                        .append($('<div>')
                                .attr('class', 'modal-body')
                        .append($('<div>')
                                .attr('class', 'col-md-3')
                        .append($('<img>')
                                .attr('src', 'img/product/thumbs/' + productVal.image)))
                        .append($('<div>')
                                .attr('class', 'col-md-6')
                        .append($("<p>").text(productVal.desc))
                        .append($("<p>").text(productVal.price))
                        .append($("<p>").text(_.map(productVal.specs, function(specVal, index){return specVal + '\n'})))
                        .append($("<p>").text(productVal.stock)))
                        .append($('<div>').attr('class', 'col-md-3')
                        .append($('<p>').text(_.map(productVal.availableColors, function(colorVal, index){return colorVal + '\n'})))))
                        .append($('<div>').attr('class', 'modal-footer')
                        .append($('<button>').attr('type', 'button')
                                .attr('class', 'btn btn-default')
                                .attr('data-dismiss', 'modal')
                                .text('Close')))))

            // }
            })
            
            $('body').append($modals);

            //  $('#myModal').modal(show)
            // $('#image0').on('click', function(){
                // console.log('dsvfdskjvjd')
            // } )
            // $('#myModal').on('shown.bs.modal', function () {
            //   $('#myInput').focus()
            // })
            
            
        })
        // ALL YOUR CODE GOES ABOVE HERE //
});