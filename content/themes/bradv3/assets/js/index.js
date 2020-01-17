function hasScrolled() {
	var e = $(this).scrollTop();
	Math.abs(lastScrollTop - e) <= delta ||
	  (e > lastScrollTop && e > navbarHeight
		? $("nav")
			.removeClass("nav-down")
			.addClass("nav-up")
		: e + $(window).height() < $(document).height() &&
		  $("nav")
			.removeClass("nav-up")
			.addClass("nav-down"),
	  (lastScrollTop = e));
  }
  !(function($, e, t) {
	"use strict";
	var n = $(document),
	  r = function(e, t, n) {
		var r;
		return function i() {
		  function o() {
			n || e.apply(a, s), (r = null);
		  }
		  var a = this,
			s = arguments;
		  r ? clearTimeout(r) : n && e.apply(a, s), (r = setTimeout(o, t || 100));
		};
	  };
	n.ready(function() {
	  function e() {
		var e = $(this),
		  t = n.outerWidth(),
		  r = this.naturalWidth;
		r >= t ? e.addClass("full-img") : e.removeClass("full-img");
	  }
	  function t() {
		r.each(e);
	  }
	  var n = $(".post-content");
	  n.fitVids();
	  var r = $("img").on("load", e);
	  t(), $(window).smartresize(t), $(".scroll-down").arctic_scroll();
	  var i = function() {
		  return $(document).height() - $(window).height();
		},
		o = function() {
		  return $(window).scrollTop();
		};
	  if ("max" in document.createElement("progress")) {
		var a = $("progress");
		a.attr({ max: i() }),
		  $(document).on("scroll", function() {
			a.attr({ value: o() });
		  }),
		  $(window).resize(function() {
			a.attr({ max: i(), value: o() });
		  });
	  } else {
		var a = $(".progress-bar"),
		  s = i(),
		  c,
		  l,
		  u = function() {
			return (c = o()), (l = (c / s) * 100), (l += "%");
		  },
		  d = function() {
			a.css({ width: u() });
		  };
		$(document).on("scroll", d),
		  $(window).on("resize", function() {
			(s = i()), d();
		  });
	  }
	}),
	  (jQuery.fn[e] = function(t) {
		return t ? this.bind("resize", r(t)) : this.trigger(e);
	  }),
	  ($.fn.arctic_scroll = function(e) {
		var t = { elem: $(this), speed: 500 },
		  n = $.extend(t, e);
		n.elem.click(function(e) {
		  e.preventDefault();
		  var t = $(this),
			r = $("html, body"),
			i = !!t.attr("data-offset") && t.attr("data-offset"),
			o = !!t.attr("data-position") && t.attr("data-position"),
			a;
		  i
			? ((a = parseInt(i)),
			  r
				.stop(!0, !1)
				.animate({ scrollTop: $(this.hash).offset().top + a }, n.speed))
			: o
			? ((a = parseInt(o)),
			  r.stop(!0, !1).animate({ scrollTop: a }, n.speed))
			: r
				.stop(!0, !1)
				.animate({ scrollTop: $(this.hash).offset().top }, n.speed);
		});
	  });
  })(jQuery, "smartresize"),
	(function($) {
	  "use strict";
	  $.fn.fitVids = function(e) {
		var t = { customSelector: null };
		if (!document.getElementById("fit-vids-style")) {
		  var n = document.head || document.getElementsByTagName("head")[0],
			r =
			  ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
			i = document.createElement("div");
		  (i.innerHTML = '<p>x</p><style id="fit-vids-style">' + r + "</style>"),
			n.appendChild(i.childNodes[1]);
		}
		return (
		  e && $.extend(t, e),
		  this.each(function() {
			var e = [
			  "iframe[src*='player.vimeo.com']",
			  "iframe[src*='youtube.com']",
			  "iframe[src*='youtube-nocookie.com']",
			  "iframe[src*='kickstarter.com'][src*='video.html']",
			  "object",
			  "embed"
			];
			t.customSelector && e.push(t.customSelector);
			var n = $(this).find(e.join(","));
			(n = n.not("object object")),
			  n.each(function() {
				var e = $(this);
				if (
				  !(
					("embed" === this.tagName.toLowerCase() &&
					  e.parent("object").length) ||
					e.parent(".fluid-width-video-wrapper").length
				  )
				) {
				  var t =
					  "object" === this.tagName.toLowerCase() ||
					  (e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)))
						? parseInt(e.attr("height"), 10)
						: e.height(),
					n = isNaN(parseInt(e.attr("width"), 10))
					  ? e.width()
					  : parseInt(e.attr("width"), 10),
					r = t / n;
				  if (!e.attr("id")) {
					var i = "fitvid" + Math.floor(999999 * Math.random());
					e.attr("id", i);
				  }
				  e
					.wrap('<div class="fluid-width-video-wrapper"></div>')
					.parent(".fluid-width-video-wrapper")
					.css("padding-top", 100 * r + "%"),
					e.removeAttr("height").removeAttr("width");
				}
			  });
		  })
		);
	  };
	})(window.jQuery || window.Zepto);
  var didScroll,
	lastScrollTop = 0,
	delta = 1,
	navbarHeight = $("nav").outerHeight();
  $(window).scroll(function(e) {
	didScroll = !0;
  }),
	setInterval(function() {
	  didScroll && (hasScrolled(), (didScroll = !1));
	}, 250);
  //# sourceMappingURL=./index-min.js.map
  