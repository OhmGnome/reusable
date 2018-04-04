function getCookieVal(search) {
	var split = document.cookie.split(';'), val = '';
	for (var i = 0; i < split.length; i++) {
		if (split[i].indexOf(search) > -1) {
			split = split[i].split('=')
			val = split[1]
		}
	}
	return val
}
