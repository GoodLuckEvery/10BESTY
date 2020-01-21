function convertToGeoRiotLinks(a){var b=document.links.length,c=0;for(c=0;c<b;c++){var d=document.links[c];"amazon"==getLinkType(d.href)&&(d.href="http://target.georiot.com/Proxy.ashx?TSID="+a+"&GR_URL="+encodeURIComponent(d.href)+"&oldendpoint=true")}}function extractItunesLinkFromAffiliateUrl(a,b){if(a.href.indexOf("?")>0){var c=a.href.split("?"),d=c[1].split("&"),e=new Array(d.length),f=new Array(d.length),g=0;for(g=0;g<d.length;g++){var h=d[g].split("=");e[g]=h[0],""!=h[1]?f[g]=h[1]:f[g]=""}}return""}function getLinkType(a){var b=/\.amazon\./,c=/local\.amazon\./;return a.indexOf("target.georiot.com")>0||a.indexOf("geni.us")>0?"unknown":b.test(a)&&!c.test(a)?"amazon":"unknown"}if(void 0===Georiot){var Georiot=Georiot||{},Genius=Genius||{};Georiot.getLinkType=function(a){var b=/search\.itunes\.apple\.com|itunes\.apple\.com\/.*/i,c=/clk[uk]*\.tradedoubler\.com\S*\?\S*url=[https%3A%2F%2F|http%3A%2F%2F]*\itunes\.apple\.com/i,d=/click\.linksynergy\.com\S*?\S*RD_PARM1=[https%3A%2F%2F|https%253A%252F%252F|http%253A%252F%252F|http%3A%2F%2F]*\itunes\.apple\.com/i,e=/t.dgm-au.c\S+\?+\S*u=[https%3A%2F%2F|http%3A%2F%2F|https%253A%252F%252F|http%253A%252F%252F]*\itunes\.apple\.com/i,f=/^amazon\.|^amzn\.com|^amzn\.co\.uk|^amzn\.to|^smile.amazon\./,g=/local\.amazon\./,h=/^google\.prf\.hn|^play\.google\.com/,i=/click\.linksynergy\.com\S*?\S*murl=\S*microsoft\.com.*/i,j=/clk.*\.tradedoubler\.com\S*\?\S*url=[https%3A%2F%2F|http%3A%2F%2F].*microsoftstore\.com/i,k=/microsoftstore.com/i,l=/clk.*\.tradedoubler\.com\S*\?\S*url=[https%3A%2F%2F|http%3A%2F%2F].*microsoft\.com.*/i,m=/microsoft.com\/.*(store|p)\/.*/i;if(a.indexOf("target.georiot.com")>0||a.indexOf("geni.us")>0)return"unknown";var n=a.toLowerCase().replace("https://","").replace("http://","").replace("www.","");return b.test(a)?"apple":c.test(a)?"tradedoubler":d.test(a)?"linkshareApple":e.test(a)?"dgmperf":f.test(n)&&!g.test(n)?"amazon":h.test(n)?"google":i.test(n)?"linkshareMSFT":j.test(n)?"microsoft":k.test(n)?"microsoft":l.test(n)?"microsoft":m.test(n)?"microsoft":"unknown"},Georiot.extractLinkFromAffiliateUrl=function(a,b){if(a.href.indexOf("?")>0)for(var c=a.href.split("?"),d=c[1].split("&"),e=new Array(d.length),f=new Array(d.length),g=0;g<d.length;g++){var h=d[g].split("=");if(e[g]=h[0],""!==h[1]){if(f[g]=h[1],"tradedoubler"===b&&"url"===e[g])return f[g];if("linkshareApple"===b&&"RD_PARM1"===e[g])return f[g];if("dgmperf"===b&&"u"===e[g])return f[g];if("linkshareMSFT"===b&&"murl"===e[g])return f[g]}else f[g]=""}return""},Georiot.baseDomain="//buy.geni.us",Georiot.createOnClickFunction=function(a,b){return a.setAttribute("data-geniuslink",b),function(){return"_blank"===a.target?window.open(b,"_blank"):window.location.assign(b),!1}},Georiot.baseConvertLinks=function(a,b,c,d,e,f){if(!Georiot.utility.isThrive()){void 0===d&&(d=Georiot.baseDomain),!1===c||!0===c||(c=!1),!1===e||!0===e||(e=!1);for(var g=document.links.length,h=0;h<g;h++){var i=document.links[h];if(i.hasAttribute("georiot-ignore")&&"true"===i.getAttribute("georiot-ignore"));else{var j=Georiot.getLinkType(i.href);if(!(b.indexOf(j)>-1))continue;var k=i.href;if(void 0!==f&&(k=f(i,j)),""!==k){var l=d+"/Proxy.ashx?TSID="+a+"&GR_URL="+encodeURIComponent(k);c&&(l+="&dtb=1"),e?i.onclick=Georiot.createOnClickFunction(i,l):i.href=l}}}}},Georiot.utility={scriptIncluded:function(a){for(var b=document.getElementsByTagName("script"),c=0;c<b.length;c++)if(b[c].getAttribute("src")===a)return!0;return!1},isThrive:function(){return window.location.search.indexOf("tve=true")>-1}},Georiot.amazon={convertLinks:function(a,b,c){Georiot.amazon.convertToGeoRiotLinks(a,b,c)},convertToGeoRiotLinks:function(a,b,c){Georiot.baseConvertLinks(a,["amazon"],b,c,!1)},addOnClickRedirect:function(a,b,c){Georiot.baseConvertLinks(a,["amazon"],b,c,!0)}},Georiot.snippet={convertLinks:function(a,b,c){Georiot.snippet.convertToGeoRiotLinks(a,b,c)},convertToGeoRiotLinks:function(a,b,c){Georiot.baseConvertLinks(a,["apple","amazon","linkshareApple","linkshareMSFT","tradedoubler","dgmperf"],b,c,!1,function(a,b){return"linkshareApple"===b||"tradedoubler"===b||"dgmperf"===b||"linkshareMSFT"===b?decodeURIComponent(Georiot.extractLinkFromAffiliateUrl(a,b)):a})},addOnClickRedirect:function(a,b,c){Georiot.baseConvertLinks(a,["apple","amazon","linkshareApple","tradedoubler","dgmperf"],b,c,!0,function(a,b){return"linkshareApple"===b||"tradedoubler"===b||"dgmperf"===b?decodeURIComponent(Georiot.extractLinkFromAffiliateUrl(a,b)):a})}},Georiot.itunes={convertLinks:function(a,b,c){Georiot.itunes.convertToGeoRiotLinks(a,b,c)},convertToGeoRiotLinks:function(a,b,c){Georiot.baseConvertLinks(a,["apple"],!1,c,!1)},addOnClickRedirect:function(a,b,c){Georiot.baseConvertLinks(a,["apple"],!1,c,!0)}},Georiot.google={convertLinks:function(a,b){Georiot.google.convertToGeoRiotLinks(a,b)},convertToGeoRiotLinks:function(a,b){Georiot.baseConvertLinks(a,["google"],!1,b,!1)},addOnClickRedirect:function(a,b){Georiot.baseConvertLinks(a,["google"],!1,b,!0)}},Georiot.microsoft={convertLinks:function(a,b,c){Georiot.microsoft.convertToGeoRiotLinks(a,b,c)},convertToGeoRiotLinks:function(a,b){Georiot.baseConvertLinks(a,["microsoft","linkshareMSFT"],!1,b,!1,function(a,b){return"linkshareMSFT"===b?decodeURIComponent(Georiot.extractLinkFromAffiliateUrl(a,b)):a})},addOnClickRedirect:function(a,b){Georiot.baseConvertLinks(a,["microsoft"],!1,b,!0,function(a,b){return"linkshareMSFT"===b?decodeURIComponent(Georiot.extractLinkFromAffiliateUrl(a,b)):a})}},Genius.amazon=Georiot.amazon,Genius.snippet=Georiot.snippet,Genius.itunes=Georiot.itunes,Genius.google=Georiot.google,Genius.microsoft=Georiot.microsoft}
document.addEventListener("DOMContentLoaded",function(){var tsid=36597;Genius.itunes.addOnClickRedirect(tsid,false,"http://buy.geni.us");Genius.amazon.addOnClickRedirect(tsid,true,"http://buy.geni.us");Genius.google.addOnClickRedirect(tsid,"http://buy.geni.us");Genius.microsoft.addOnClickRedirect(tsid,"http://buy.geni.us")});

var q2w3_sidebar_options = [{"sidebar":"right","margin_top":10,"margin_bottom":70,"stop_id":"footer-horizontal-widget-area","screen_max_width":767,"screen_max_height":0,"width_inherit":false,"refresh_interval":1000,"window_load_hook":false,"disable_mo_api":false,"widgets":["text-101"]}];
function q2w3_sidebar_init(){for(var e=0;e<q2w3_sidebar_options.length;e++)q2w3_sidebar(q2w3_sidebar_options[e]);jQuery(window).on("resize",function(){for(var e=0;e<q2w3_sidebar_options.length;e++)q2w3_sidebar(q2w3_sidebar_options[e])});var i=function(){for(var e=["WebKit","Moz","O","Ms",""],i=0;i<e.length;i++)if(e[i]+"MutationObserver"in window)return window[e[i]+"MutationObserver"];return!1}();0==q2w3_sidebar_options[0].disable_mo_api&&i?(q2w3Refresh=!1,new i(function(e){e.forEach(function(e){-1!=q2w3_exclude_mutations_array(q2w3_sidebar_options).indexOf(e.target.id)||e.target.className&&"function"==typeof e.target.className.indexOf&&-1!=e.target.className.indexOf("q2w3-fixed-widget-container")||(q2w3Refresh=!0)})}).observe(document.body,{childList:!0,attributes:!0,attributeFilter:["style","class"],subtree:!0}),setInterval(function(){if(q2w3Refresh){for(var e=0;e<q2w3_sidebar_options.length;e++)q2w3_sidebar(q2w3_sidebar_options[e]);q2w3Refresh=!1}},300)):(console.log("MutationObserver not supported or disabled!"),q2w3_sidebar_options[0].refresh_interval>0&&setInterval(function(){for(var e=0;e<q2w3_sidebar_options.length;e++)q2w3_sidebar(q2w3_sidebar_options[e])},q2w3_sidebar_options[0].refresh_interval))}function q2w3_exclude_mutations_array(e){for(var i=new Array,o=0;o<e.length;o++)if(e[o].widgets.length>0)for(var t=0;t<e[o].widgets.length;t++)i.push(e[o].widgets[t]),i.push(e[o].widgets[t]+"_clone");return i}function q2w3_sidebar(e){if(!e)return!1;if(!e.widgets)return!1;if(e.widgets.length<1)return!1;function i(){}e.sidebar||(e.sidebar="q2w3-default-sidebar");var o=new Array,t=jQuery(window).height(),n=jQuery(document).height(),r=e.margin_top;jQuery("#wpadminbar").length&&(r=e.margin_top+jQuery("#wpadminbar").height()),jQuery(".q2w3-widget-clone-"+e.sidebar).remove();for(var s=0;s<e.widgets.length;s++)widget_obj=jQuery("#"+e.widgets[s]),widget_obj.css("position",""),widget_obj.attr("id")?(o[s]=new i,o[s].obj=widget_obj,o[s].clone=widget_obj.clone(),o[s].clone.children().remove(),o[s].clone_id=widget_obj.attr("id")+"_clone",o[s].clone.addClass("q2w3-widget-clone-"+e.sidebar),o[s].clone.attr("id",o[s].clone_id),o[s].clone.css("height",widget_obj.height()),o[s].clone.css("visibility","hidden"),o[s].offset_top=widget_obj.offset().top,o[s].fixed_margin_top=r,o[s].height=widget_obj.outerHeight(!0),o[s].fixed_margin_bottom=r+o[s].height,r+=o[s].height):o[s]=!1;var d,a=0;for(s=o.length-1;s>=0;s--)o[s]&&(o[s].next_widgets_height=a,o[s].fixed_margin_bottom+=a,a+=o[s].height,d||((d=widget_obj.parent()).addClass("q2w3-fixed-widget-container"),d.css("height",""),d.height(d.height())));jQuery(window).off("scroll."+e.sidebar);for(s=0;s<o.length;s++)o[s]&&_(o[s]);function _(i){var o,r=i.offset_top-i.fixed_margin_top,s=n-e.margin_bottom;e.stop_id&&jQuery("#"+e.stop_id).length&&(s=jQuery("#"+e.stop_id).offset().top-e.margin_bottom),o=e.width_inherit?"inherit":i.obj.css("width");var d=!1,a=!1,_=!1;jQuery(window).on("scroll."+e.sidebar,function(n){if(jQuery(window).width()<=e.screen_max_width||jQuery(window).height()<=e.screen_max_height)_||(i.obj.css("position",""),i.obj.css("top",""),i.obj.css("bottom",""),i.obj.css("width",""),i.obj.css("margin",""),i.obj.css("padding",""),widget_obj.parent().css("height",""),jQuery("#"+i.clone_id).length>0&&jQuery("#"+i.clone_id).remove(),_=!0,d=!1,a=!1);else{var w=jQuery(this).scrollTop();w+i.fixed_margin_bottom>=s?(a||(i.obj.css("position","fixed"),i.obj.css("top",""),i.obj.css("width",o),jQuery("#"+i.clone_id).length<=0&&i.obj.before(i.clone),a=!0,d=!1,_=!1),i.obj.css("bottom",w+t+i.next_widgets_height-s)):w>=r?d||(i.obj.css("position","fixed"),i.obj.css("top",i.fixed_margin_top),i.obj.css("bottom",""),i.obj.css("width",o),jQuery("#"+i.clone_id).length<=0&&i.obj.before(i.clone),d=!0,a=!1,_=!1):_||(i.obj.css("position",""),i.obj.css("top",""),i.obj.css("bottom",""),i.obj.css("width",""),jQuery("#"+i.clone_id).length>0&&jQuery("#"+i.clone_id).remove(),_=!0,d=!1,a=!1)}}).trigger("scroll."+e.sidebar)}}"undefined"!=typeof q2w3_sidebar_options&&q2w3_sidebar_options.length>0?window.jQuery?q2w3_sidebar_options[0].window_load_hook?jQuery(window).load(q2w3_sidebar_init):"loading"!=document.readyState?q2w3_sidebar_init():document.addEventListener("DOMContentLoaded",q2w3_sidebar_init):console.log("jQuery is not loaded!"):console.log("q2w3_sidebar_options not found!");

(function(window, $) {
    init = function() {
        $('.entry-content p,.entry-content li,.su-tabs-pane,.su-alert').each(function(index, option) {
            var hanzi = '[\u2E80-\u2FFF\u31C0-\u31EF\u3300-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFE30-\uFE4F]',
                punc = {
                    base: '[@&=_\,\.\?\!\$\%\^\*\-\+\/]',
                    open: '[\(\[\{\'"<‘“]',
                    close: '[\)\]\}\'">’”]'
                },
                latin = '[A-Za-z0-9\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]' + '|' + punc.base,
                patterns = ['/(' + hanzi + ')(' + latin + '|' + punc.open + ')/ig', '/(' + latin + '|' + punc.close + ')(' + hanzi + ')/ig'];

            patterns.forEach(function(exp) {
                findAndReplaceDOMText(this, {
                    find: eval(exp),
                    replace: '$1<c>$2'
                })
            }, this);

            findAndReplaceDOMText(this, {
                find: '<c>',
                replace: function() {
                    return document.createElement('c');
                }
            });

            this.normalize();

            $('* > c:first-child').parent().each(function() {
                if (this.firstChild.nodeType == 1) {
                    $(this).before($('<c/>'));
                    $(this).find('c:first-child').remove();
                }
            });
        })
    },

    findAndReplaceDOMText = function(a, b) {
        var b = b;
        b.filterElements = function(el) {
            var name = el.nodeName.toLowerCase(),
                classes = (el.nodeType == 1) ? el.getAttribute('class') : '',
                charized = (classes && classes.match(/han-js-charized/) != null) ? true : false;

            return name !== 'style' && name !== 'script' && !charized;
        };

        return window.findAndReplaceDOMText(a, b);
    }

    $(document).on('ready', function() {
        init();
        $("code c,pre c,kbd c,samp c,.su-label c,.su-heading c,.su-button c").remove();
    });
})(window, window.jQuery, undefined);

/**
 * findAndReplaceDOMText v 0.4.0
 * @author James Padolsey http://james.padolsey.com
 * @license http://unlicense.org/UNLICENSE
 *
 * Matches the text of a DOM node against a regular expression
 * and replaces each match (or node-separated portions of the match)
 * in the specified element.
 */
window.findAndReplaceDOMText = (function() {
    var PORTION_MODE_RETAIN = 'retain';
    var PORTION_MODE_FIRST = 'first';

    var doc = document;
    var toString = {}.toString;

    function isArray(a) {
        return toString.call(a) == '[object Array]';
    }

    function escapeRegExp(s) {
        return String(s).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    }

    function exposed() {
        // Try deprecated arg signature first:
        return deprecated.apply(null, arguments) || findAndReplaceDOMText.apply(null, arguments);
    }

    function deprecated(regex, node, replacement, captureGroup, elFilter) {
        if ((node && !node.nodeType) && arguments.length <= 2) {
            return false;
        }
        
        var isReplacementFunction = typeof replacement == 'function';
        if (isReplacementFunction) {
            replacement = (function(original) {
                return function(portion, match) {
                    return original(portion.text, match.startIndex);
                };
            }(replacement));
        }

        // Awkward support for deprecated argument signature (<0.4.0)
        var instance = findAndReplaceDOMText(node, {
            find: regex,

            wrap: isReplacementFunction ? null : replacement,
            replace: isReplacementFunction ? replacement : '$' + (captureGroup || '&'),

            prepMatch: function(m, mi) {
                // Support captureGroup (a deprecated feature)
                if (!m[0]) throw 'findAndReplaceDOMText cannot handle zero-length matches';

                if (captureGroup > 0) {
                    var cg = m[captureGroup];
                    m.index += m[0].indexOf(cg);
                    m[0] = cg;
                }

                m.endIndex = m.index + m[0].length;
                m.startIndex = m.index;
                m.index = mi;

                return m;
            },
            filterElements: elFilter
        });

        exposed.revert = function() {
            return instance.revert();
        };

        return true;
    }

    /**
     * findAndReplaceDOMText
     *
     * Locates matches and replaces with replacementNode
     *
     * @param {Node} node Element or Text node to search within
     * @param {RegExp} options.find The regular expression to match
     * @param {String|Element} [options.wrap] A NodeName, or a Node to clone
     * @param {String|Function} [options.replace='$&'] What to replace each match with
     * @param {Function} [options.filterElements] A Function to be called to check whether to
     *    process an element. (returning true = process element,
     *    returning false = avoid element)
     */
    function findAndReplaceDOMText(node, options) {
        return new Finder(node, options);
    }

    exposed.Finder = Finder;

    /**
     * Finder -- encapsulates logic to find and replace.
     */
    function Finder(node, options) {
        options.portionMode = options.portionMode || PORTION_MODE_RETAIN;

        this.node = node;
        this.options = options;

        // ENable match-preparation method to be passed as option:
        this.prepMatch = options.prepMatch || this.prepMatch;

        this.reverts = [];

        this.matches = this.search();

        if (this.matches.length) {
            this.processMatches();
        }
    }

    Finder.prototype = {
        /**
         * Searches for all matches that comply with the instance's 'match' option
         */
        search: function() {
            var match;
            var matchIndex = 0;
            var regex = this.options.find;
            var text = this.getAggregateText();
            var matches = [];

            regex = typeof regex === 'string' ? RegExp(escapeRegExp(regex), 'g') : regex;

            if (regex.global) {
                while (match = regex.exec(text)) {
                    matches.push(this.prepMatch(match, matchIndex++));
                }
            } else {
                if (match = text.match(regex)) {
                    matches.push(this.prepMatch(match, 0));
                }
            }

            return matches;
        },

        /**
         * Prepares a single match with useful meta info:
         */
        prepMatch: function(match, matchIndex) {
            if (!match[0]) {
                throw new Error('findAndReplaceDOMText cannot handle zero-length matches');
            }

            match.endIndex = match.index + match[0].length;
            match.startIndex = match.index;
            match.index = matchIndex;

            return match;
        },

        /**
         * Gets aggregate text within subject node
         */
        getAggregateText: function() {
            var elementFilter = this.options.filterElements;
            return getText(this.node);

            /**
             * Gets aggregate text of a node without resorting
             * to broken innerText/textContent
             */
            function getText(node) {
                if (node.nodeType === 3) {
                    return node.data;
                }

                if (elementFilter && !elementFilter(node)) {
                    return '';
                }

                var txt = '';

                if (node = node.firstChild)
                    do {
                        txt += getText(node);
                    } while (node = node.nextSibling);

                return txt;
            }
        },

        /**
         * Steps through the target node, looking for matches, and
         * calling replaceFn when a match is found.
         */
        processMatches: function() {
            var matches = this.matches;
            var node = this.node;
            var elementFilter = this.options.filterElements;

            var startPortion, endPortion, innerPortions = [],
                curNode = node,
                match = matches.shift(),
                atIndex = 0,
                // i.e. nodeAtIndex
                matchIndex = 0,
                portionIndex = 0,
                doAvoidNode;

            out: while (true) {
                if (curNode.nodeType === 3) {
                    if (!endPortion && curNode.length + atIndex >= match.endIndex) {
                        // We've found the ending
                        endPortion = {
                            node: curNode,
                            index: portionIndex++,
                            text: curNode.data.substring(match.startIndex - atIndex, match.endIndex - atIndex),
                            indexInMatch: atIndex - match.startIndex,
                            indexInNode: match.startIndex - atIndex,
                            // always zero for end-portions
                            endIndexInNode: match.endIndex - atIndex,
                            isEnd: true
                        };
                    } else if (startPortion) {
                        // Intersecting node
                        innerPortions.push({
                            node: curNode,
                            index: portionIndex++,
                            text: curNode.data,
                            indexInMatch: atIndex - match.startIndex,
                            indexInNode: 0 // always zero for inner-portions
                        });
                    }

                    if (!startPortion && curNode.length + atIndex > match.startIndex) {
                        // We've found the match start
                        startPortion = {
                            node: curNode,
                            index: portionIndex++,
                            indexInMatch: 0,
                            indexInNode: match.startIndex - atIndex,
                            endIndexInNode: match.endIndex - atIndex,
                            text: curNode.data.substring(match.startIndex - atIndex, match.endIndex - atIndex)
                        };
                    }

                    atIndex += curNode.data.length;
                }

                doAvoidNode = curNode.nodeType === 1 && elementFilter && !elementFilter(curNode);

                if (startPortion && endPortion) {
                    curNode = this.replaceMatch(match, startPortion, innerPortions, endPortion);

                    // processMatches has to return the node that replaced the endNode
                    // and then we step back so we can continue from the end of the
                    // match:
                    atIndex -= (endPortion.node.data.length - endPortion.endIndexInNode);

                    startPortion = null;
                    endPortion = null;
                    innerPortions = [];
                    match = matches.shift();
                    portionIndex = 0;
                    matchIndex++;

                    if (!match) {
                        break; // no more matches
                    }
                } else if (!doAvoidNode && (curNode.firstChild || curNode.nextSibling)) {
                    // Move down or forward:
                    curNode = curNode.firstChild || curNode.nextSibling;
                    continue;
                }

                // Move forward or up:
                while (true) {
                    if (curNode.nextSibling) {
                        curNode = curNode.nextSibling;
                        break;
                    } else if (curNode.parentNode !== node) {
                        curNode = curNode.parentNode;
                    } else {
                        break out;
                    }
                }
            }
        },

        /**
         * Reverts ... TODO
         */
        revert: function() {
            // Reversion occurs backwards so as to avoid nodes subsequently
            // replaced during the matching phase (a forward process):
            for (var l = this.reverts.length; l--;) {
                this.reverts[l]();
            }
            this.reverts = [];
        },

        prepareReplacementString: function(string, portion, match, matchIndex) {
            var portionMode = this.options.portionMode;
            if (portionMode === PORTION_MODE_FIRST && portion.indexInMatch > 0) {
                return '';
            }
            string = string.replace(/\$(\d+|&|`|')/g,
                function($0, t) {
                    var replacement;
                    switch (t) {
                        case '&':
                            replacement = match[0];
                            break;
                        case '`':
                            replacement = match.input.substring(0, match.startIndex);
                            break;
                        case '\'':
                            replacement = match.input.substring(match.endIndex);
                            break;
                        default:
                            replacement = match[+t];
                    }
                    return replacement;
                });

            if (portionMode === PORTION_MODE_FIRST) {
                return string;
            }

            if (portion.isEnd) {
                return string.substring(portion.indexInMatch);
            }

            return string.substring(portion.indexInMatch, portion.indexInMatch + portion.text.length);
        },

        getPortionReplacementNode: function(portion, match, matchIndex) {
            var replacement = this.options.replace || '$&';
            var wrapper = this.options.wrap;

            if (wrapper && wrapper.nodeType) {
                // Wrapper has been provided as a stencil-node for us to clone:
                var clone = doc.createElement('div');
                clone.innerHTML = wrapper.outerHTML || new XMLSerializer().serializeToString(wrapper);
                wrapper = clone.firstChild;
            }

            if (typeof replacement == 'function') {
                replacement = replacement(portion, match, matchIndex);
                if (replacement && replacement.nodeType) {
                    return replacement;
                }
                return doc.createTextNode(String(replacement));
            }

            var el = typeof wrapper == 'string' ? doc.createElement(wrapper) : wrapper;

            replacement = doc.createTextNode(this.prepareReplacementString(replacement, portion, match, matchIndex));

            if (!el) {
                return replacement;
            }

            el.appendChild(replacement);

            return el;
        },

        replaceMatch: function(match, startPortion, innerPortions, endPortion) {
            var matchStartNode = startPortion.node;
            var matchEndNode = endPortion.node;

            var preceedingTextNode;
            var followingTextNode;

            if (matchStartNode === matchEndNode) {
                var node = matchStartNode;

                if (startPortion.indexInNode > 0) {
                    // Add `before` text node (before the match)
                    preceedingTextNode = doc.createTextNode(node.data.substring(0, startPortion.indexInNode));
                    node.parentNode.insertBefore(preceedingTextNode, node);
                }

                // Create the replacement node:
                var newNode = this.getPortionReplacementNode(endPortion, match);

                node.parentNode.insertBefore(newNode, node);

                if (endPortion.endIndexInNode < node.length) { // ?????
                    // Add `after` text node (after the match)
                    followingTextNode = doc.createTextNode(node.data.substring(endPortion.endIndexInNode));
                    node.parentNode.insertBefore(followingTextNode, node);
                }

                node.parentNode.removeChild(node);

                this.reverts.push(function() {
                    if (preceedingTextNode === newNode.previousSibling) {
                        preceedingTextNode.parentNode.removeChild(preceedingTextNode);
                    }
                    if (followingTextNode === newNode.nextSibling) {
                        followingTextNode.parentNode.removeChild(followingTextNode);
                    }
                    newNode.parentNode.replaceChild(node, newNode);
                });

                return newNode;
            } else {
                preceedingTextNode = doc.createTextNode(matchStartNode.data.substring(0, startPortion.indexInNode));
                followingTextNode = doc.createTextNode(matchEndNode.data.substring(endPortion.endIndexInNode));

                var firstNode = this.getPortionReplacementNode(startPortion, match);
                var innerNodes = [];

                for (var i = 0, l = innerPortions.length; i < l; ++i) {
                    var portion = innerPortions[i];
                    var innerNode = this.getPortionReplacementNode(portion, match);
                    portion.node.parentNode.replaceChild(innerNode, portion.node);
                    this.reverts.push((function(portion, innerNode) {
                        return function() {
                            innerNode.parentNode.replaceChild(portion.node, innerNode);
                        };
                    }(portion, innerNode)));
                    innerNodes.push(innerNode);
                }

                var lastNode = this.getPortionReplacementNode(endPortion, match);

                matchStartNode.parentNode.insertBefore(preceedingTextNode, matchStartNode);
                matchStartNode.parentNode.insertBefore(firstNode, matchStartNode);
                matchStartNode.parentNode.removeChild(matchStartNode);

                matchEndNode.parentNode.insertBefore(lastNode, matchEndNode);
                matchEndNode.parentNode.insertBefore(followingTextNode, matchEndNode);
                matchEndNode.parentNode.removeChild(matchEndNode);

                this.reverts.push(function() {
                    preceedingTextNode.parentNode.removeChild(preceedingTextNode);
                    firstNode.parentNode.replaceChild(matchStartNode, firstNode);
                    followingTextNode.parentNode.removeChild(followingTextNode);
                    lastNode.parentNode.replaceChild(matchEndNode, lastNode);
                });

                return lastNode;
            }
        }
    };

    return exposed;
}());