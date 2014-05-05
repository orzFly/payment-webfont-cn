/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Payment-Webfont-China\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-alipay': '&#xe600;',
		'icon-tenpay': '&#xe601;',
		'icon-unionpay': '&#xe602;',
		'icon-bankcomm': '&#xe700;',
		'icon-icbc': '&#xe701;',
		'icon-cmbchina': '&#xe702;',
		'icon-ccb': '&#xe703;',
		'icon-boc': '&#xe704;',
		'icon-abchina': '&#xe705;',
		'icon-psbc': '&#xe706;',
		'icon-cncb': '&#xe707;',
		'icon-cncbi': '&#xe708;',
		'icon-qilu': '&#xe709;',
		'icon-spd': '&#xe70a;',
		'icon-pingan': '&#xe70b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
