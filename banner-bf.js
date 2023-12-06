var css = 'img.banner { \
	position: fixed; \
	top: 0; \
	width: 150px;\
	z-index: 999999999999;\
}\
\n\
@media all and (max-width: 500px) {\
	img.banner {\
		width: 100px;\
	}\
}\
',
head = document.head || document.getElementsByTagName('head')[0],
style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
head.appendChild(style);

var img = document.createElement('img');
img.src = "2020-3.png";
img.className = 'banner';
img.onclick = function () { this.style.display = 'none'; }
document.body.appendChild(img);