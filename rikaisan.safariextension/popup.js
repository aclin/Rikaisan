var rik = {
    showPopup: function() {
        // outer-most document
        const topdoc =  document;

        var x = 100, y = 100;
        /*if (pos) {
            x = pos.screenX;
            y = pos.screenY;
        }*/

        //this.lbPop = lbPop;

        var popup = topdoc.getElementById('rikaichan-window');
        if (!popup) {
            var css = topdoc.createElementNS('http://www.w3.org/1999/xhtml', 'link');
            css.setAttribute('rel', 'stylesheet');
            css.setAttribute('type', 'text/css');
            //css.setAttribute('href', this.cfg.css);
            css.setAttribute('id', 'rikaichan-css');
            topdoc.getElementsByTagName('head')[0].appendChild(css);

            popup = topdoc.createElementNS('http://www.w3.org/1999/xhtml', 'div');
            popup.setAttribute('id', 'rikaichan-window');
            topdoc.documentElement.appendChild(popup);

            // if this is not set then Cyrillic text is displayed with Japanese
            // font, if the web page uses a Japanese code page as opposed to Unicode.
            // This makes it unreadable.
            popup.setAttribute('lang', 'en');		// ??? find a test case

            /*popup.addEventListener('dblclick',
                function (ev) {
                    rcxMain.hidePopup();
                    ev.stopPropagation();
                }, true);

            if (this.cfg.resizedoc) {
                if ((topdoc.body.clientHeight < 1024) && (topdoc.body.style.minHeight == '')) {
                    topdoc.body.style.minHeight = '1024px';
                    topdoc.body.style.overflow = 'auto';
                }
            }*/
        }

        //popup.style.height = 300px;
        //popup.style.width = 300px;
        //popup.style.maxWidth = 600px;

        if (topdoc.contentType == 'text/plain') {
            var df = document.createDocumentFragment();
            var sp = document.createElementNS('http://www.w3.org/1999/xhtml', 'span');
            df.appendChild(sp);
            sp.innerHTML = "Hello World!";
            while (popup.firstChild) {
                popup.removeChild(popup.firstChild);
            }
            popup.appendChild(df);
        }
        else {
            popup.innerHTML = "Hello World";
        }

        /*if (elem) {
            popup.style.top = '-1000px';
            popup.style.left = '0px';
            popup.style.display = '';

            var width = popup.offsetWidth;
            var height = popup.offsetHeight;

            // guess! (??? still need this?)
            if (width <= 0) width = 200;
            if (height <= 0) {
                height = 0;
                var j = 0;
                while ((j = text.indexOf('<br', j)) != -1) {
                    j += 5;
                    height += 22;
                }
                height += 25;
            }

            if (this.altView == 1) {
                // upper-left
                x = 0;
                y = 0;
            }
            else if (this.altView == 2) {
                // lower-right
                x = (content.innerWidth - (width + 20));
                y = (content.innerHeight - (height + 20));
            }
            else {
                // convert xy relative to outer-most document
                var cb = this.getCurrentBrowser();
                var bo = cb.boxObject;
                x -= bo.screenX;
                y -= bo.screenY;

                // when zoomed, convert to zoomed document pixel position
                // - not in TB compose and ...?
                if (cb.markupDocumentViewer != null) {
                    var z = cb.markupDocumentViewer.fullZoom || 1;
                    if (z != 1) {
                        x = Math.round(x / z);
                        y = Math.round(y / z);
                    }
                }

                if (elem instanceof Components.interfaces.nsIDOMHTMLOptionElement) {
                    // these things are always on z-top, so go sideways
                    x -= pos.pageX;
                    y -= pos.pageY;
                    var p = elem;
                    while (p) {
                        x += p.offsetLeft;
                        y += p.offsetTop;
                        p = p.offsetParent;
                    }

                    // right side of box
                    var w = elem.parentNode.offsetWidth + 5;
                    x += w;

                    if ((x + width) > content.innerWidth) {
                        // too much to the right, go left
                        x -= (w + width + 5);
                        if (x < 0) x = 0;
                    }

                    if ((y + height) > content.innerHeight) {
                        y = content.innerHeight - height - 5;
                        if (y < 0) y = 0;
                    }
                }
                else {
                    // go left if necessary
                    if ((x + width) > (content.innerWidth - 20)) {
                        x = (content.innerWidth - width) - 20;
                        if (x < 0) x = 0;
                    }

                    // below the mouse
                    var v = 25;

                    // under the popup title
                    if ((elem.title) && (elem.title != '')) v += 20;

                    // go up if necessary
                    if ((y + v + height) > content.innerHeight) {
                        var t = y - height - 30;
                        if (t >= 0) y = t;
                    }
                    else y += v;
                }
            }
        }*/

        popup.style.left = x;
        popup.style.top = y;
        popup.style.display = '';
    }
};

//rik.showPopup();