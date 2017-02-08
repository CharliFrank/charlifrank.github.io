/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
            //var count = 0;
        var $topRatedList = data.discography.topRated;
        var $topRated = _.map($topRatedList, function(val, position){
           return  $('<li>').attr('id', 'top-rated-list-item-' + position).append($topRatedList[position].title);
        })
        $('#list-top-rated').append($topRated);
        $('#list-top-rated').css('list-style', 'none').css('color', 'white').css('font-style', 'italic');
        
        
        var $recordingsList = data.discography.recordings;
        var $recordingsSection = $('<section>').attr('id', 'sections-recordings').appendTo('#sidebar');
        var $recordingsSectionHeader = $('<h2>').attr('id', 'recordings-list-header').text('Recordings').appendTo('#sections-recordings');
        var $unorderedListRecordings = $('<ul>').attr('id', 'list-recordings').css('list-style', 'none').css('color', 'white').css('font-style', 'italic').appendTo('#sections-recordings');
       
         var topRatedImage = $('<div>').attr('id', 'top-rated-images').appendTo("#header-top-rated");
        $('<img>').attr('src', 'images/album/voice-in-the-night.jpg').attr('id', 'top-rated-image').appendTo("#top-rated-images");        
        
        var $recordingsListImage = $('<div>').attr('id', 'recording-list-images').appendTo("#recordings-list-header");
        $('<img>').attr('src', 'images/album/eastern-rebellion.jpg').attr('id', 'recording-list-image').appendTo("#recording-list-images");        

        
        var $listRecordings = _.map($recordingsList, function(val, position, colletion){
            return $('<li>').css('cursor', 'pointer').on('click', function(){
                $('#recording-list-image').attr('src', val.art)
            }).attr('class', 'recording').attr('id', 'recordings-list-item-' + position).css('padding-top', '10px')
                .appendTo('#list-recordings')
                .append(
                    $('<div>').attr('class', 'title').text(val.title)
                ).append(
                    $('<div>').attr('class', 'artist').text(val.artist)
                ).append(
                    $('<div>').attr('class', 'release').text(val.release)
                ).append(
                    $('<div>').attr('class', 'year').text(val.year)
                );
                
        })
        console.log($listRecordings)
           
        $('#list-recordings').append($listRecordings);

      
        var $billyImages = data.images.billy;
        $billyImages = $billyImages.slice(0, 1);
        var imageCounter = 0;
        
        $('#image-billy').on('click', function(){
            const pacifier = opspark.makePacifier($('#image-container-billy')[0]);

            if(imageCounter > 3){
                imageCounter = 0;
            }
            $('#image-billy').attr('src', 'images/billy/billy-' + imageCounter + '.jpg').hide().fadeIn(1000, function(){
                pacifier.stop();
            });
            imageCounter++;
        });
    
    // Build out a feature for the list items of both the top rated and recordings lists such that when the user clicks 
    // on one of the <li>, we swap out the source of the image for the feature based on the art url associated with the 
    // recording.
    // To do this, you need a way of writing some data to each <li> such that when a user clicks on it, we can retrieve 
    // the data. How can you do this?
        
        $('#top-rated-list-item-0').css('cursor', 'pointer').on('click', function(){
            $('#top-rated-image').attr('src', 'images/album/voice-in-the-night.jpg')
        })
        $('#top-rated-list-item-1').css('cursor', 'pointer').on('click', function(){
            $('#top-rated-image').attr('src', 'images/album/the-shape-of-jazz-to-come.jpg')
        })
        $('#top-rated-list-item-2').css('cursor', 'pointer').on('click', function(){
            $('#top-rated-image').attr('src', 'images/album/like-sonny.jpg')
        })
        $('#top-rated-list-item-3').css('cursor', 'pointer').on('click', function(){
            $('#top-rated-image').attr('src', 'images/album/go.jpg')
        })
        $('#top-rated-list-item-4').css('cursor', 'pointer').on('click', function(){
            $('#top-rated-image').attr('src', 'images/album/the-water-is-wide.jpg')
        })
        var $topRatedImages = _.map(data.topRated, function(image, index){
            return image.art;
        })
        
        // create a fuction to call when clicked to change an image
        // $('#list-top-rated').on('click', <li>,  )
        
        
        
        
        
        
        
        
        var riderThings = data.rider;
        var tableDiv = $('<div>').attr('id', 'section-table').appendTo('#sections');
        var tableTitle = $('<h2>').attr('id', 'section-table-header').text('Rider Table').appendTo('#section-table');
        var createTable = function(pieces){
            var createRow = function(piece){
                var $row = $("<tr>");
                var $type = $("<td>").text(piece.type).css('outline-style', 'solid').css('padding-top', '10px').css('padding-left', '10px').css('padding-bottom', '10px');
                var $desc = $("<td>").text(piece.desc).css('outline-style', 'solid').css('padding-top', '10px').css('padding-left', '10px').css('padding-bottom', '10px');
                $row.append($type);
                $row.append($desc);
                return $row;
            }
            var $table = $("<table>");
            var $rows = pieces.map(createRow);
            $table.append($rows);
            return $table;
         };
        createTable(riderThings).appendTo('#section-table-header');
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


