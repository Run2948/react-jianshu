import { createGlobalStyle } from 'styled-components';

export const ResetStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export const IconFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./statics/iconfont/iconfont.eot?t=1590344685706'); /* IE9 */
  src: url('./statics/iconfont/iconfont.eot?t=1590344685706#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQoAAsAAAAACGwAAAPaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEDINgATYCJAMUCwwABCAFhG0HRhtqB8gOJQkRwWAIUUJIPHyN/e/c3X2q6TuiiaF7NI+efoJGkkaCUCAUDYmhFLOmlt9Pv6kvUCWd+s2s4krJxJCD0AjZcRMT/RTxg2PGWwvm2WwuGY0bBeAogWbDTowSGQbIg/kPYzdRHsRxAk0LOrDszcznwU8BxgViVddE8EuplJrsUBeqJUuLuAXe6ukGcxk3+e/jq23hR1LJwNRDFzMUSP7AvDjMDv8/XDeqgcnjGaCtImMrUIhLpaZVbBjaitV0pnjZCTTVJekD7DZ91vxFyf//xLwdSZoSey//eFkiqoCoLWJ2hgsfEqYSfJiyysRrRCqZT4fDEu5rKU00cAfAT0A2NyY+uVHUa2s61QY1Ahqf7Gntzgkc39Uq3G22PLj35tvcxLuWEbuuZd2LYvL6G1MPP4wy792zTrpyB1xdUY9bKOznd6+fD8OPTLq2K/rxR+7Akye8hS+33HtuG3FXENSk4XdKbEfvmgVgPLzX/O5dwexx5075pHtpNTsnuR1GMUPc9vbt8qWv5TnLOxwuLp69xzbnNj97fsS6O/RtbvO379edfb5XzEGacZbmRh25HH4ky7ImdEvt4hWT69cceT25afPIlMy4Nm9SbNnWxuOgT10C246auSEgJy81K+p11ZREzaUdSJzrc9nOVub1/5OmQkrowmj4ffh05ydBZgozbvfucUzyMPBR8hGvP3/Ko65pK35fT1X+bzUNjv2+O6/5sbdPXZ+ZZ7GygVnCxPRwasHI5B9rv/tcabh6ILtqCzMSxq3aOpAZwMgs+dVbIGPfqNFHv37utzidrRzgt5KQ6Pxpkxoir7rVvoy9h3K9a9+6tPWeoPSWbaETcFK+xmwHmJ3KR9gEMKP5EDv89/+Ny4d2lvasEv/fr1XAq1/v29wxowXaieAfirVm/2x2y7LicoG6UuxizLLNFTsSKsmpa+IX24aejiOZtA4Q6im2BknNPGR1axEFsxUqWrZDVd0OaNoia3XLCMGK0sBmYwQIfdsg6XoMWd8VRME8gYqpt1DVDxaaTkSNLVvWh86lESxSrCBpANJlw60iLeWC7FKs9XGKJMnlBAETU/eikMDgbDQLuzEZY4bZVwulVEUqMVwoUzgNO50G8hCjAss00E6pJzYoSC17UqBsuICzB4GJKEyBSAZAdDKDm0prU1zu+6UwTR9OIlJT0qEVYIRJ7xwJESi4BSJL5G5Vci3nmPrShKIoFaIiDC5IpmDAnDBkQDzlgypgMiqQvUfAI1aQVE1tKwqcX+J6xm3QBB5TiRQ5SlSiKp0RvUyP7vYxsUhku++APi7RkHQAAAA=') format('woff2'),
  url('./statics/iconfont/iconfont.woff?t=1590344685706') format('woff'),
  url('./statics/iconfont/iconfont.ttf?t=1590344685706') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./statics/iconfont/iconfont.svg?t=1590344685706#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;

