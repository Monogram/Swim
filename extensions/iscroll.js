iScroll.prototype.handleEvent = function(e) {
	var that = this,
		hasTouch = 'ontouchstart' in window && !isTouchPad,
		vendor = (/webkit/i).test(navigator.appVersion) ? 'webkit' :
				 (/firefox/i).test(navigator.userAgent) ? 'Moz' :
				 'opera' in window ? 'O' : '',
		RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
		START_EV = hasTouch ? 'touchstart' : 'mousedown',
		MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
		END_EV = hasTouch ? 'touchend' : 'mouseup',
		CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
		WHEEL_EV = vendor == 'Moz' ? 'DOMMouseScroll' : 'mousewheel';

	switch(e.type) {
		case START_EV:
			if (that.checkInputs(e.target.tagName)) {
				return;
			}

			if (!hasTouch && e.button !== 0) return;

			that._start(e);
			break;
		case MOVE_EV:
			that._move(e);
			break;
		case END_EV:
			if (that.checkInputs(e.target.tagName)) {
				return;
			}
		case CANCEL_EV:
			that._end(e);
			break;
		case RESIZE_EV:
			that._resize();
			break;
		case WHEEL_EV:
			that._wheel(e);
			break;
		case 'mouseout':
			that._mouseout(e);
			break;
		case 'webkitTransitionEnd':
			that._transitionEnd(e);
			break;
	}
}

iScroll.prototype.checkInputs = function(tagName) {
	if (tagName === 'INPUT' || tagName === 'TEXTFIELD' || tagName === 'SELECT') {
		return true;
	} else {
		return false;
	}
}