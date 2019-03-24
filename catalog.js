
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
