// This is free and unencumbered software released into the public domain, by classroomtechtools.com

// Anyone is free to copy, modify, publish, use, compile, sell, or
// distribute this software, either in source code form or as a compiled
// binary, for any purpose, commercial or non-commercial, and by any
// means.

// In jurisdictions that recognize copyright laws, the author or authors
// of this software dedicate any and all copyright interest in the
// software to the public domain. We make this dedication for the benefit
// of the public at large and to the detriment of our heirs and
// successors. We intend this dedication to be an overt act of
// relinquishment in perpetuity of all present and future rights to this
// software under copyright law.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
// OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
// ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.


/*
	Use this to add custom application-specific logic to your awesometable
*/

(function (atjs) {

	// Save the main function in a different variable, to be called later
	// ahem, "cheap inheritance"

	atjs.parentStart = atjs.start;

	atjs.start = function (params) {
		atjs.parentStart(params);   // Let awesometable load up as normal

		// Set up things as you need them to be set up, using the params object
		// You can edit the <script> content to pass information to that params object
	};

	atjs.parentUpdate = atjs.update;

	atjs.update = function () {
		atjs.parentUpdate();  // calls the default handler

		// Do whatever else you need to do here.
               
function popDiv(e) {

        if (e.classList.contains('popUp') == false) {
                if (window.innerWidth < 480) {
                        var elem = e.querySelector('.openButton');

                        if (elem.getAttribute('href') == '')
                                return;

                        elem.click();
                        return;
                }

                var rect = e.getBoundingClientRect();

                var style = 'position: fixed;' +
                            'top: 0;bottom: 0;left: 0;right: 0;' +
                            'padding:' +
                            (rect.top > 0 ? rect.top : 0) + 'px ' +
                            (window.innerWidth > rect.right ? window.innerWidth - rect.right : 0) + 'px ' +
                            (window.innerHeight > rect.bottom ? window.innerHeight - rect.bottom : 0) + 'px ' +
                            (rect.left > 0 ? rect.left : 0) + 'px';

                e.setAttribute('style', style);

                e.parentElement.setAttribute('style', 'height:' + rect.height + 'px');
                e.querySelector('div').setAttribute('style', '');

                clearTimeout(e.timeout);
                e.timeout = setTimeout(function () {
                        e.classList.add('popUp');
                }, 20);
                
                e.classList.add('popUpOpen');
        } else {
                e.setAttribute('style', e.getAttribute('style') + '!important;background-Color:transparent;');
                e.querySelector('div').setAttribute('style', 'box-shadow: rgba(0, 0, 0, 0.4) 0 0!important');

                e.classList.remove('popUpOpen');
                
                clearTimeout(e.timeout);
                e.timeout = setTimeout(function () {
                        e.setAttribute('style', 'padding: 0');
                        e.parentElement.setAttribute('style', '');
                        e.classList.remove('popUp');
                        e.querySelector('div').setAttribute('style', '');
                }, 500);
        }
}

function cancelClick(ev, e) {
        if (e.parentElement.classList.contains('popUp') == true) {

                ev = ev || window.event;
                if (ev.stopPropagation)
                        ev.stopPropagation();
                if (ev.cancelBubble != null)
                        ev.cancelBubble = true;

        }
}

function closePopUp(e) {
        while (e.classList.contains('popUp') == false) {
                if (e.classList.contains('card-content') || e == document.body)
                        return;

                e = e.parentElement;
        }

        popDiv(e);
}




/* Do whatever else END */                
                
                
	};

	atjs.controllers.didChange = function (id) {
		// Lets you know if content of the controllers have changed
		// No need to call the default handler
	}


}(this.atjs));




