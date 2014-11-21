/*! watchResize() (c) Aaron Gustafson (@AaronGustafson). MIT License. https://github.com/easy-designs/easy-resize-watchers.js */

/* watchResize()
 * 
 * A global method for triggering callbacks when the browser is resized. The 
 * current viewport width (in pixels) is passed as an argument to callbacks.
 * 
 * Usage Example:
 * 
 * watchResize(function( size_in_px ){
 *   console.log( 'The browser is currently ' + size_in_px + 'px wide' );
 * });
 * 
 **/
(function( window ){
    window.watchResize = function( callback ){
        var resizing;
        callback.size = window.innerWidth;
        function done()
        {
            var curr_size = window.innerWidth;
            clearTimeout( resizing );
            resizing = null;
            // only run on a true resize
            if ( callback.size != curr_size )
            {
                callback.size = curr_size;
                callback(callback.size);
            }
        }
        window.addEventListener('resize', function(){
            if ( resizing )
            {
                clearTimeout( resizing );
                resizing = null;
            }
            resizing = setTimeout( done, 50 );
        });
        // init
        callback(callback.size);
    };
}(window));