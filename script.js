(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);


window._wpemojiSettings = {
    baseUrl: "https://s.w.org/images/core/emoji/14.0.0/72x72/",
    ext: ".png",
    svgUrl: "https://s.w.org/images/core/emoji/14.0.0/svg/",
    svgExt: ".svg",
    source: { concatemoji: "https://remphuthanh.com/wp-includes/js/wp-emoji-release.min.js?ver=6.2.3" },
};
/*! This file is auto-generated */
!(function (e, a, t) {
    var n,
        r,
        o,
        i = a.createElement("canvas"),
        p = i.getContext && i.getContext("2d");
    function s(e, t) {
        p.clearRect(0, 0, i.width, i.height), p.fillText(e, 0, 0);
        e = i.toDataURL();
        return p.clearRect(0, 0, i.width, i.height), p.fillText(t, 0, 0), e === i.toDataURL();
    }
    function c(e) {
        var t = a.createElement("script");
        (t.src = e), (t.defer = t.type = "text/javascript"), a.getElementsByTagName("head")[0].appendChild(t);
    }
    for (o = Array("flag", "emoji"), t.supports = { everything: !0, everythingExceptFlag: !0 }, r = 0; r < o.length; r++)
        (t.supports[o[r]] = (function (e) {
            if (p && p.fillText)
                switch (((p.textBaseline = "top"), (p.font = "600 32px Arial"), e)) {
                    case "flag":
                        return s("\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")
                            ? !1
                            : !s("\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") &&
                                  !s(
                                      "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
                                      "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"
                                  );
                    case "emoji":
                        return !s("\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff", "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff");
                }
            return !1;
        })(o[r])),
            (t.supports.everything = t.supports.everything && t.supports[o[r]]),
            "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
    (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag),
        (t.DOMReady = !1),
        (t.readyCallback = function () {
            t.DOMReady = !0;
        }),
        t.supports.everything ||
            ((n = function () {
                t.readyCallback();
            }),
            a.addEventListener
                ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1))
                : (e.attachEvent("onload", n),
                  a.attachEvent("onreadystatechange", function () {
                      "complete" === a.readyState && t.readyCallback();
                  })),
            (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji), c(e.wpemoji)));
})(window, document, window._wpemojiSettings);


(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "../www.googletagmanager.com/gtm5445.html?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-5LRJ2MP");


(function($){
    $(document).ready(function(){
        $(window).load(function(){
            if($('.single-product div#tab-description').length > 0){
                var wrap = $('.single-product div#tab-description');
                var current_height = wrap.height();
                var your_height = 300;
                if(current_height > your_height){
                    wrap.css('height', your_height+'px');
                    wrap.append(function(){
                        return '<div class="devvn_readmore_flatsome"><a title="Xem thêm" href="javascript:void(0);">Xem thêm</a></div>';
                    });
                    $('body').on('click','.devvn_readmore_flatsome', function(){
                        wrap.removeAttr('style');
                        $('body .devvn_readmore_flatsome').remove();
                    });
                }
            }
        });
    })
})(jQuery)

(function () {
    var c = document.body.className;
    c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
    document.body.className = c;
})();

/* <![CDATA[ */
var wpcf7 = { api: { root: "https://remphuthanh.com/wp-json/", namespace: "contact-form-7/v1" }, cached: "1" };

/* ]]> */

/* <![CDATA[ */
var tocplus = { visibility_show: "show", visibility_hide: "hide", width: "Auto" };

/* ]]> */

/* <![CDATA[ */
var wc_add_to_cart_params = { ajax_url: "/wp-admin/admin-ajax.php", wc_ajax_url: "/?wc-ajax=%%endpoint%%", i18n_view_cart: "Xem gi\u1ecf h\u00e0ng", cart_url: "https://remphuthanh.com/gio-hang", is_cart: "", cart_redirect_after_add: "no" };

/* ]]> */

/* <![CDATA[ */
var woocommerce_params = { ajax_url: "/wp-admin/admin-ajax.php", wc_ajax_url: "/?wc-ajax=%%endpoint%%" };

/* ]]> */

/* <![CDATA[ */
var flatsomeVars = {
    theme: { version: "3.17.3" },
    ajaxurl: "https://remphuthanh.com/wp-admin/admin-ajax.php",
    rtl: "",
    sticky_height: "50",
    stickyHeaderHeight: "0",
    scrollPaddingTop: "0",
    assets_url: "https://remphuthanh.com/wp-content/themes/flatsome/assets/",
    lightbox: {
        close_markup:
            '<button title="%title%" type="button" class="mfp-close"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>',
        close_btn_inside: false,
    },
    user: { can_edit_pages: false },
    i18n: { mainMenu: "Main Menu", toggleButton: "Toggle" },
    options: {
        cookie_notice_version: "1",
        swatches_layout: false,
        swatches_disable_deselect: false,
        swatches_box_select_event: false,
        swatches_box_behavior_selected: false,
        swatches_box_update_urls: "1",
        swatches_box_reset: false,
        swatches_box_reset_limited: false,
        swatches_box_reset_extent: false,
        swatches_box_reset_time: 300,
        search_result_latency: "0",
    },
    is_mini_cart_reveal: "1",
};

/* ]]> */

/* <![CDATA[ */
var _zxcvbnSettings = { src: "https://remphuthanh.com/wp-includes/js/zxcvbn.min.js" };

/* ]]> */

wp.i18n.setLocaleData({ "text direction\u0004ltr": ["ltr"] });


/* <![CDATA[ */
var pwsL10n = { unknown: "M\u1eadt kh\u1ea9u m\u1ea1nh kh\u00f4ng x\u00e1c \u0111\u1ecbnh", short: "R\u1ea5t y\u1ebfu", bad: "Y\u1ebfu", good: "Trung b\u00ecnh", strong: "M\u1ea1nh", mismatch: "M\u1eadt kh\u1ea9u kh\u00f4ng kh\u1edbp" };

/* ]]> */

(function (domain, translations) {
    var localeData = translations.locale_data[domain] || translations.locale_data.messages;
    localeData[""].domain = domain;
    wp.i18n.setLocaleData(localeData, domain);
})("default", {
    "translation-revision-date": "2023-07-15 15:29:09+0000",
    generator: "GlotPress/4.0.0-alpha.9",
    domain: "messages",
    locale_data: {
        messages: {
            "": { domain: "messages", "plural-forms": "nplurals=1; plural=0;", lang: "vi_VN" },
            "%1$s is deprecated since version %2$s! Use %3$s instead. Please consider writing more inclusive code.": [
                "%1$s \u0111\u00e3 ng\u1eebng ho\u1ea1t \u0111\u1ed9ng t\u1eeb phi\u00ean b\u1ea3n %2$s! S\u1eed d\u1ee5ng thay th\u1ebf b\u1eb1ng %3$s.",
            ],
        },
    },
    comment: { reference: "wp-admin/js/password-strength-meter.js" },
});


/* <![CDATA[ */
var wc_password_strength_meter_params = {
    min_password_strength: "3",
    stop_checkout: "",
    i18n_password_error: "Vui l\u00f2ng nh\u1eadp m\u1eadt kh\u1ea9u kh\u00f3 h\u01a1n.",
    i18n_password_hint:
        'G\u1ee3i \u00fd: M\u1eadt kh\u1ea9u ph\u1ea3i c\u00f3 \u00edt nh\u1ea5t 12 k\u00fd t\u1ef1. \u0110\u1ec3 n\u00e2ng cao \u0111\u1ed9 b\u1ea3o m\u1eadt, s\u1eed d\u1ee5ng ch\u1eef in hoa, in th\u01b0\u1eddng, ch\u1eef s\u1ed1 v\u00e0 c\u00e1c k\u00fd t\u1ef1 \u0111\u1eb7c bi\u1ec7t nh\u01b0 ! " ? $ % ^ & ).',
};

/* ]]> */