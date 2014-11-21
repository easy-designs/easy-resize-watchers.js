# Easy Resize Watchers

This is a collection of scripts we routinely use to make building JavaScript interfaces that adapt to changes in screen size a breeze.

## `watchResize()`

A global method for triggering callbacks when the browser is resized. The current viewport width (in pixels) is passed as an argument to callbacks.

Usage Example:

	watchResize(function( size_in_px ){
	  console.log( 'The browser is currently ' + size_in_px + 'px wide' );
	});

## `getActiveMQ()`

A global method for getting the current breakpoint name. Requires CSS similar to the following:

	#getActiveMQ-watcher {
		font-family: "break-0";
		display: none;
	}
	@media only screen and (min-width: 20em) {
		#getActiveMQ-watcher {
			font-family: "break-1";
		}
	}
	@media only screen and (min-width: 30em) {
		#getActiveMQ-watcher {
			font-family: "break-2";
		}
	}
	@media only screen and (min-width: 48em) {
		#getActiveMQ-watcher {
			font-family: "break-3";
	 	}
	}

The value of the font-family declaration will be returned by the method. This is best used in concert with watchResize to get access to the value:

	window.watchResize(function( size_in_px ){
		console.log( 'The browser is currently ' + size_in_px + 'px wide' );
		var breakpoint = getActiveMQ();
		console.log( 'The breakpoint is ' + breakpoint );
	});