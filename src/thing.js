define(['jquery'], function(jquery) {
	return function(a) {
	    if (a === true) {
	        jquery('#info').html('<p>this is some text</p>');
	    } else {
	        jquery('#info').html('<p>this is another text</p>');
	    }
	}
});
