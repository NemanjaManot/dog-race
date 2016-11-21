$(function() {
    
    // Click the GO button
    $('#go').click(function() {
        
        
        // build a function that checks to see if a dog has won the race
        function checkIfComplete() {
            
            if( isComplete == false ) {
                isComplete = true;
            } else {
                place = 'This is a very slow dog. He is finished after ';
            }
            
        }
        
        // width of the dogs
        var dogWidth = $('#dog1').width();
        
        // width of the racetrack
        var raceTrackWidth = $(window).width() - dogWidth;
        
        // generate a random between 1 and 5000
        
        var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
        var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );
        
        // set a 'flag' variable to FALSE by default
        var isComplete = false;
        
        // set a 'flag' variable to WINNER by default
        var place = 'This is a WINNER, ladies and gentlemen. Speedy Gonzales with ';
        
        // animate dog 1
        $('#dog1').animate({
        
            // move the dog width of the racetrack
            left: raceTrackWidth
            
        }, raceTime1, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo1 span').text(` ${place} ${raceTime1} milliseconds! `);
            
        });
        
        // animate dog 2
        $('#dog2').animate({
        
            // move the dog width of the racetrack
            left: raceTrackWidth
            
        }, raceTime2, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo2 span').text(` ${place} ${raceTime2} milliseconds! `);
            
        });
        
    });
    
    // reset the race
    $('#reset').click(function() {
        $('.dog').css('left','0');
        $('.raceInfo span').text('');
    });
    

});
    

















