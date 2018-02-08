/*! respimage - v1.4.2 - 2015-08-22
 Licensed MIT */
!function(a,b,c){"use strict";function d(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function e(){var b;R=!1,U=a.devicePixelRatio,S={},T={},b=(U||1)*D.xQuant,D.uT||(D.maxX=Math.max(1.3,D.maxX),b=Math.min(b,D.maxX),v.DPR=b),V.width=Math.max(a.innerWidth||0,B.clientWidth),V.height=Math.max(a.innerHeight||0,B.clientHeight),V.vw=V.width/100,V.vh=V.height/100,V.em=v.getEmValue(),V.rem=V.em,o=D.lazyFactor/2,o=o*b+o,q=.4+.1*b,l=.5+.2*b,m=.5+.25*b,p=b+1.3,(n=V.width>V.height)||(o*=.9),I&&(o*=.9),u=[V.width,V.height,b].join("-")}function f(a,b,c){var d=b*Math.pow(a-.4,1.9);return n||(d/=1.3),a+=d,a>c}function g(a){var b,c=v.getSet(a),d=!1;"pending"!=c&&(d=u,c&&(b=v.setRes(c),d=v.applySetCandidate(b,a))),a[v.ns].evaled=d}function h(a,b){return a.res-b.res}function i(a,b,c){var d;return!c&&b&&(c=a[v.ns].sets,c=c&&c[c.length-1]),d=j(b,c),d&&(b=v.makeUrl(b),a[v.ns].curSrc=b,a[v.ns].curCan=d,d.res||_(d,d.set.sizes)),d}function j(a,b){var c,d,e;if(a&&b)for(e=v.parseSet(b),a=v.makeUrl(a),c=0;c<e.length;c++)if(a==v.makeUrl(e[c].url)){d=e[c];break}return d}function k(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[v.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}var l,m,n,o,p,q,r,s,t,u,v={},w=function(){},x=b.createElement("img"),y=x.getAttribute,z=x.setAttribute,A=x.removeAttribute,B=b.documentElement,C={},D={xQuant:1,lazyFactor:.4,maxX:2},E="data-pfsrc",F=E+"set",G="webkitBackfaceVisibility"in B.style,H=navigator.userAgent,I=/rident/.test(H)||/ecko/.test(H)&&H.match(/rv\:(\d+)/)&&RegExp.$1>35,J="currentSrc",K=/\s+\+?\d+(e\d+)?w/,L=/((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,M=/^([\+eE\d\.]+)(w|x)$/,N=/\s*\d+h\s*/,O=a.respimgCFG,P=("https:"==location.protocol,"position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),Q="font-size:100%!important;",R=!0,S={},T={},U=a.devicePixelRatio,V={px:1,"in":96},W=b.createElement("a"),X=!1,Y=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},Z=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},$=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=Z(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")});return function(b,d){var e;if(!(b in S))if(S[b]=!1,d&&(e=b.match(a)))S[b]=e[1]*V[e[2]];else try{S[b]=new Function("e",c(b))(V)}catch(f){}return S[b]}}(),_=function(a,b){return a.w?(a.cWidth=v.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.x,a},ab=function(c){var d,e,f,g=c||{};if(g.elements&&1==g.elements.nodeType&&("IMG"==g.elements.nodeName.toUpperCase()?g.elements=[g.elements]:(g.context=g.elements,g.elements=null)),g.reparse&&(g.reevaluate=!0,a.console&&console.warn&&console.warn("reparse was renamed to reevaluate!")),d=g.elements||v.qsa(g.context||b,g.reevaluate||g.reselect?v.sel:v.selShort),f=d.length){for(v.setupRun(g),X=!0,e=0;f>e;e++)v.fillImg(d[e],g);v.teardownRun(g)}},bb=Z(function(a){var b=[1,"x"],c=d(a||"");return c&&(c=c.replace(N,""),b=c.match(M)?[1*RegExp.$1,RegExp.$2]:!1),b});if(J in x||(J="src"),C["image/jpeg"]=!0,C["image/gif"]=!0,C["image/png"]=!0,C["image/svg+xml"]=b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),v.ns=("ri"+(new Date).getTime()).substr(0,9),v.supSrcset="srcset"in x,v.supSizes="sizes"in x,v.supPicture=!!a.HTMLPictureElement,v.supSrcset&&v.supPicture&&!v.supSizes&&!function(a){x.srcset="data:,a",a.src="data:,a",v.supSrcset=x.complete===a.complete,v.supPicture=v.supSrcset&&v.supPicture}(b.createElement("img")),v.selShort="picture>img,img[srcset]",v.sel=v.selShort,v.cfg=D,v.supSrcset&&(v.sel+=",img["+F+"]"),v.DPR=U||1,v.u=V,v.types=C,s=v.supSrcset&&!v.supSizes,v.setSize=w,v.makeUrl=Z(function(a){return W.href=a,W.href}),v.qsa=function(a,b){return a.querySelectorAll(b)},v.matchesMedia=function(){return v.matchesMedia=a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?function(a){return!a||matchMedia(a).matches}:v.mMQ,v.matchesMedia.apply(this,arguments)},v.mMQ=function(a){return a?$(a):!0},v.calcLength=function(a){var b=$(a,!0)||!1;return 0>b&&(b=!1),b},v.supportsType=function(a){return a?C[a]:!0},v.parseSize=Z(function(a){var b=(a||"").match(L);return{media:b&&b[1],length:b&&b[2]}}),v.parseSet=function(a){if(!a.cands){var b,c,d,e,f,g,h=a.srcset;for(a.cands=[];h;)h=h.replace(/^\s+/g,""),b=h.search(/\s/g),d=null,-1!=b?(c=h.slice(0,b),e=c.charAt(c.length-1),","!=e&&c||(c=c.replace(/,+$/,""),d=""),h=h.slice(b+1),null==d&&(f=h.indexOf(","),-1!=f?(d=h.slice(0,f),h=h.slice(f+1)):(d=h,h=""))):(c=h,h=""),c&&(d=bb(d))&&(g={url:c.replace(/^,+/,""),set:a},g[d[1]]=d[0],"x"==d[1]&&1==d[0]&&(a.has1x=!0),a.cands.push(g))}return a.cands},v.getEmValue=function(){var a;if(!r&&(a=b.body)){var c=b.createElement("div"),d=B.style.cssText,e=a.style.cssText;c.style.cssText=P,B.style.cssText=Q,a.style.cssText=Q,a.appendChild(c),r=c.offsetWidth,a.removeChild(c),r=parseFloat(r,10),B.style.cssText=d,a.style.cssText=e}return r||16},v.calcListLength=function(a){if(!(a in T)||D.uT){var b,c,e,f,g,h,i=d(a).split(/\s*,\s*/),j=!1;for(g=0,h=i.length;h>g&&(b=i[g],c=v.parseSize(b),e=c.length,f=c.media,!e||!v.matchesMedia(f)||(j=v.calcLength(e))===!1);g++);T[a]=j?j:V.width}return T[a]},v.setRes=function(a){var b;if(a){b=v.parseSet(a);for(var c=0,d=b.length;d>c;c++)_(b[c],a.sizes)}return b},v.setRes.res=_,v.applySetCandidate=function(a,b){if(a.length){var c,d,e,g,j,k,n,r,s,t,w,x,y,z=b[v.ns],A=u,B=o,C=q;if(r=z.curSrc||b[J],s=z.curCan||i(b,r,a[0].set),d=v.DPR,y=s&&s.res,!n&&r&&(x=I&&!b.complete&&s&&y-.2>d,x||s&&!(p>y)||(s&&d>y&&y>l&&(m>y&&(B*=.8,C+=.04*d),s.res+=B*Math.pow(y-C,2)),t=!z.pic||s&&s.set==a[0].set,s&&t&&s.res>=d&&(n=s))),!n)for(y&&(s.res=s.res-(s.res-y)/2),a.sort(h),k=a.length,n=a[k-1],e=0;k>e;e++)if(c=a[e],c.res>=d){g=e-1,n=a[g]&&(j=c.res-d)&&(x||r!=v.makeUrl(c.url))&&f(a[g].res,j,d)?a[g]:c;break}return y&&(s.res=y),n&&(w=v.makeUrl(n.url),z.curSrc=w,z.curCan=n,w!=r&&v.setSrc(b,n),v.setSize(b)),A}},v.setSrc=function(a,b){var c;a.src=b.url,G&&(c=a.style.zoom,a.style.zoom="0.999",a.style.zoom=c)},v.getSet=function(a){var b,c,d,e=!1,f=a[v.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&v.matchesMedia(c.media)&&(d=v.supportsType(c.type))){"pending"==d&&(c=d),e=c;break}return e},v.parseSets=function(a,b,d){var e,f,g,h,i="PICTURE"==b.nodeName.toUpperCase(),l=a[v.ns];(l.src===c||d.src)&&(l.src=y.call(a,"src"),l.src?z.call(a,E,l.src):A.call(a,E)),(l.srcset===c||!v.supSrcset||a.srcset||d.srcset)&&(e=y.call(a,"srcset"),l.srcset=e,h=!0),l.sets=[],i&&(l.pic=!0,k(b,l.sets)),l.srcset?(f={srcset:l.srcset,sizes:y.call(a,"sizes")},l.sets.push(f),g=(s||l.src)&&K.test(l.srcset||""),g||!l.src||j(l.src,f)||f.has1x||(f.srcset+=", "+l.src,f.cands.push({url:l.src,x:1,set:f}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=c,l.supported=!(i||f&&!v.supSrcset||g),h&&v.supSrcset&&!l.supported&&(e?(z.call(a,F,e),a.srcset=""):A.call(a,F)),l.supported&&!l.srcset&&(!l.src&&a.src||a.src!=v.makeUrl(l.src))&&(null==l.src?a.removeAttribute("src"):a.src=l.src),l.parsed=!0},v.fillImg=function(a,b){var c,d,e=b.reselect||b.reevaluate;if(a[v.ns]||(a[v.ns]={}),d=a[v.ns],e||d.evaled!=u){if(!d.parsed||b.reevaluate){if(c=a.parentNode,!c)return;v.parseSets(a,c,b)}d.supported?d.evaled=u:g(a)}},v.setupRun=function(b){(!X||R||U!=a.devicePixelRatio)&&(e(),b.elements||b.context||clearTimeout(t))},v.supPicture?(ab=w,v.fillImg=w):(b.createElement("picture"),function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";h=setTimeout(e,"loading"==a?200:999),b.body&&(c=c||d.test(a),v.fillImgs(),c&&clearTimeout(h))},f=function(){v.fillImgs()},g=function(){clearTimeout(t),R=!0,t=setTimeout(f,99)},h=setTimeout(e,b.body?0:20);Y(a,"resize",g),Y(b,"readystatechange",e)}()),v.respimage=ab,v.fillImgs=ab,v.teardownRun=w,ab._=v,a.respimage=a.picturefill||ab,!a.picturefill)for(a.respimgCFG={ri:v,push:function(a){var b=a.shift();"function"==typeof v[b]?v[b].apply(v,a):(D[b]=a[0],X&&v.fillImgs({reselect:!0}))}};O&&O.length;)a.respimgCFG.push(O.shift());a.picturefill||(a.picturefill=a.respimage,a.picturefillCFG||(a.picturefillCFG=a.respimgCFG))}(window,document);

/*! respimage - v1.4.2 - 2015-08-22
 Licensed MIT */
!function(a){"use strict";var b,c=0,d=function(){window.respimage&&a(window.respimage),(window.respimage||c>9999)&&clearInterval(b),c++};b=setInterval(d,8),d()}(function(a){"use strict";var b=a._;if(!document.querySelector){b.qsa=function(a,b){return jQuery(b,a)};var c=document.createElement("a");b.makeUrl=function(a){return jQuery.attr(c,"href",a+""),jQuery.prop(c,"href")}}});

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Cocoen = e()
    }
}(function() {
    return function e(t, n, i) {
        function s(o, a) {
            if (!n[o]) {
                if (!t[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(o, !0);
                    if (r) return r(o, !0);
                    var d = new Error("Cannot find module '" + o + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var h = n[o] = {
                    exports: {}
                };
                t[o][0].call(h.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, h, h.exports, e, t, n, i)
            }
            return n[o].exports
        }
        for (var r = "function" == typeof require && require, o = 0; o < i.length; o++) s(i[o]);
        return s
    }({
        1: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = function() {
                    function e(t, n) {
                        i(this, e), this.options = s({}, e.defaults, n), this.element = t || document.querySelector(".comparison-slider"), this.init()
                    }
                    return r(e, [{
                        key: "init",
                        value: function() {
                            this.createElements(), this.addEventListeners(), this.dimensions()
                        }
                    }, {
                        key: "createElements",
                        value: function() {
                            var e = document.createElement("span");
                            e.className = this.options.dragElementSelector.replace(".", ""), this.element.appendChild(e);
                            var t = document.createElement("div"),
                                n = this.element.querySelector("img:first-child");
                            t.appendChild(n.cloneNode(!0)), n.parentNode.replaceChild(t, n), this.dragElement = this.element.querySelector(this.options.dragElementSelector), this.beforeElement = this.element.querySelector("div:first-child"), this.beforeImage = this.beforeElement.querySelector("img");
							
							$(t).css('width', '50%');
							$(e).css('left', '50%');
                        }
                    }, {
                        key: "addEventListeners",
                        value: function() {
                            this.element.addEventListener("click", this.onTap.bind(this)), this.element.addEventListener("mousemove", this.onDrag.bind(this)), this.element.addEventListener("touchmove", this.onDrag.bind(this)), this.dragElement.addEventListener("mousedown", this.onDragStart.bind(this)), this.dragElement.addEventListener("touchstart", this.onDragStart.bind(this)), window.addEventListener("mouseup", this.onDragEnd.bind(this)), window.addEventListener("resize", this.dimensions.bind(this))
                        }
                    }, {
                        key: "dimensions",
                        value: function() {
                            this.elementWidth = parseInt(window.getComputedStyle(this.element).width, 10), this.elementOffsetLeft = this.element.getBoundingClientRect().left + document.body.scrollLeft, this.beforeImage.style.width = this.elementWidth + "px", this.dragElementWidth = parseInt(window.getComputedStyle(this.dragElement).width, 10), this.minLeftPos = this.elementOffsetLeft + 10, this.maxLeftPos = this.elementOffsetLeft + this.elementWidth - this.dragElementWidth
                        }
                    }, {
                        key: "onTap",
                        value: function(e) {
                            e.preventDefault(), this.leftPos = e.pageX ? e.pageX : e.touches[0].pageX, this.requestDrag()
                        }
                    }, {
                        key: "onDragStart",
                        value: function(e) {
                            e.preventDefault();
                            var t = e.pageX ? e.pageX : e.touches[0].pageX,
                                n = this.dragElement.getBoundingClientRect().left + document.body.scrollLeft;
                            this.posX = n + this.dragElementWidth - t, this.isDragging = !0
                        }
                    }, {
                        key: "onDragEnd",
                        value: function(e) {
                            e.preventDefault(), this.isDragging = !1
                        }
                    }, {
                        key: "onDrag",
                        value: function(e) {
                            e.preventDefault(), this.isDragging && (this.moveX = e.pageX ? e.pageX : e.touches[0].pageX, this.leftPos = this.moveX + this.posX - this.dragElementWidth, this.requestDrag())
                        }
                    }, {
                        key: "drag",
                        value: function() {
                            this.leftPos < this.minLeftPos ? this.leftPos = this.minLeftPos : this.leftPos > this.maxLeftPos && (this.leftPos = this.maxLeftPos);
                            var e = this.leftPos + this.dragElementWidth / 2 - this.elementOffsetLeft;
                            e /= this.elementWidth;
                            var t = 100 * e + "%";
                            this.dragElement.style.left = t, this.beforeElement.style.width = t, this.options.dragCallback && this.options.dragCallback(e)
                        }
                    }, {
                        key: "requestDrag",
                        value: function() {
                            window.requestAnimationFrame(this.drag.bind(this))
                        }
                    }]), e
                }();
            o.defaults = {
                dragElementSelector: ".comparison-slider-drag",
                dragCallback: null
            }, t.exports = o
        }, {}]
    }, {}, [1])(1)
});
	
if( $('.comparison-slider').length > 0 ){
	window.onload = function(){
		new Cocoen();
	}
}

(function($){

	$.organicTabs = function(el, options){
		var base = this;
		base.$el = $(el);

		base.$nav = base.$el.find('.tabs-nav');

		base.init = function(){
			
			base.options = $.extend({}, $.organicTabs.defaultOptions, options);

			base.$nav.delegate('a', 'click', function(e){
				
				e.preventDefault();

				var curList = base.$el.find('a.active').attr('href').substring(1),
					$newList = $(this),
					listID = $newList.attr('href').substring(1),
					$allListWrap = base.$el.find('.tabs');

				if( (listID != curList) && ( base.$el.find(':animated').length == 0) ){
					base.$el.find("#"+curList).removeClass('visible');
					base.$el.find("#"+listID).addClass('visible');

					base.$el.find('.tabs-nav a').removeClass('active');
					$newList.addClass('active');
					
					if( base.options.hash === true ){
					
						if( window.history && history.pushState ){
							history.replaceState('', '', '#' + base.options.param + '=' + listID);
						} else {
							window.location.hash = '#' + listID;
						}
						
					}
				}
			});
			
			if( base.options.hash === true && window.location.hash ){
				
				var hash = window.location.hash.substring(1);
				
				if( hash.indexOf('tab') > -1 ){
					var _tab = hash.replace('tab=', '');
				
					var tab = $("a[href='#" + _tab + "']");
                
					tab.closest('.tabs-nav').find('a').removeClass('active');
					tab.addClass('active');
					
					$('.tab', base.$el).removeClass('visible');
					$('#' + _tab).addClass('visible');
				}
			}
		};
		
		base.init();
	};

	$.organicTabs.defaultOptions = {
		'param': 'tab',
		'hash': true
	};

	$.fn.organicTabs = function(options) {
		return this.each(function() {
		(new $.organicTabs(this, options));
	});
};
    
})(jQuery);