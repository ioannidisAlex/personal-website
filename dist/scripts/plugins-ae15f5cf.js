+function(t){"use strict";function e(e){var i,s=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(s)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),a=t.extend({},s.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&a.toggle&&/show|hide/.test(e)&&(a.toggle=!1),n||i.data("bs.collapse",n=new s(this,a)),"string"==typeof e&&n[e]()})}var s=function(e,i){this.$element=t(e),this.options=t.extend({},s.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};s.VERSION="3.3.4",s.TRANSITION_DURATION=350,s.DEFAULTS={toggle:!0},s.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},s.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var a=t.Event("show.bs.collapse");if(this.$element.trigger(a),!a.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(s.TRANSITION_DURATION)[o](this.$element[0][l])}}}},s.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(s.TRANSITION_DURATION):n.call(this)}}},s.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},s.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,s){var n=t(s);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},s.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=s,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(s){var n=t(this);n.attr("data-target")||s.preventDefault();var a=e(n),o=a.data("bs.collapse"),r=o?"toggle":n.data();i.call(a,r)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,s=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(s).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var s=t(this),n=s.data("bs.button"),a="object"==typeof e&&e;n||s.data("bs.button",n=new i(this,a)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,s){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,s),this.isLoading=!1};i.VERSION="3.3.4",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",s=this.$element,n=s.is("input")?"val":"html",a=s.data();e+="Text",null==a.resetText&&s.data("resetText",s[n]()),setTimeout(t.proxy(function(){s[n](null==a[e]?this.options[e]:a[e]),"loadingText"==e?(this.isLoading=!0,s.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,s.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));t&&this.$element.toggleClass("active")};var s=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=s,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var s=t(i.target);s.hasClass("btn")||(s=s.closest(".btn")),e.call(s,"toggle"),i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var s=t(this),n=s.data("bs.carousel"),a=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e),o="string"==typeof e?e:a.slide;n||s.data("bs.carousel",n=new i(this,a)),"number"==typeof e?n.to(e):o?n[o]():a.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.4",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),s="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(s&&!this.options.wrap)return e;var n="prev"==t?-1:1,a=(i+n)%this.$items.length;return this.$items.eq(a)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,s){var n=this.$element.find(".item.active"),a=s||this.getItemForDirection(e,n),o=this.interval,r="next"==e?"left":"right",l=this;if(a.hasClass("active"))return this.sliding=!1;var h=a[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,o&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var c=t(this.$indicators.children()[this.getItemIndex(a)]);c&&c.addClass("active")}var u=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(a.addClass(e),a[0].offsetWidth,n.addClass(r),a.addClass(r),n.one("bsTransitionEnd",function(){a.removeClass([e,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(u)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),a.addClass("active"),this.sliding=!1,this.$element.trigger(u)),o&&this.cycle(),this}};var s=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=s,this};var n=function(i){var s,n=t(this),a=t(n.attr("data-target")||(s=n.attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,""));if(a.hasClass("carousel")){var o=t.extend({},a.data(),n.data()),r=n.attr("data-slide-to");r&&(o.interval=!1),e.call(a,o),r&&a.data("bs.carousel").to(r),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery);