/*! getActiveMQ() (c) Aaron Gustafson (@AaronGustafson). MIT License. https://github.com/easy-designs/easy-resize-watchers.js */

/* getActiveMQ()
 * 
 * A global method for getting the current breakpoint. Requires CSS similar to 
 * the following:
 * 
 * #getActiveMQ-watcher {
 *  font-family: "break-0";
 *  display: none;
 * }
 * @media only screen and (min-width: 20em) {
 *  #getActiveMQ-watcher {
 *      font-family: "break-1";
 *  }
 * }
 * @media only screen and (min-width: 30em) {
 *  #getActiveMQ-watcher {
 *      font-family: "break-2";
 *  }
 * }
 * @media only screen and (min-width: 48em) {
 *  #getActiveMQ-watcher {
 *      font-family: "break-3";
 *  }
 * }
 * 
 * The value of the font-family declaration will be returned by the method. 
 * This is best used in concert with watchResize to get access to the value:
 * 
 * window.watchResize(function( size_in_px ){
 *  console.log( 'The browser is currently ' + size_in_px + 'px wide' );
 *  var breakpoint = getActiveMQ();
 *  console.log( 'The breakpoint is ' + breakpoint );
 * });
 * 
 **/
(function( window ){
    window.getActiveMQ = function(){
        var watcher = document.createElement('div'),
            computed = window.getComputedStyle;
        
        watcher.id = 'getActiveMQ-watcher';
        document.getElementsByTagName('body')[0].appendChild(watcher);
        
        if ( 'currentStyle' in watcher )
        {
            window.getActiveMQ = function(){
                return watcher.currentStyle['fontFamily'].replace(/['"]/g,'');
            };
        }
        else if ( computed )
        {
            window.getActiveMQ = function(){
                return computed( watcher, null ).getPropertyValue( 'font-family' ).replace(/['"]/g,'');
            };
        }
        else
        {
            window.getActiveMQ = function(){
                return 'unknown';
            };
        }
        return window.getActiveMQ();
    };
}(window));