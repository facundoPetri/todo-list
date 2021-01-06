(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n){t(1,arguments);var r=e(n);return!isNaN(r)}var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var o,i={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,c=a.width?String(a.width):t.defaultWidth;r=t.values[c]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function s(t){return function(e,n){var r=String(e),a=n||{},o=a.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],u=r.match(i);if(!u)return null;var c,s=u[0],d=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(d),c=t.valueCallback?t.valueCallback(c):c,{value:c=a.valueCallback?a.valueCallback(c):c,rest:r.slice(s.length)}}}const d={code:"en-US",formatDistance:function(t,e,n){var a;return n=n||{},a="string"==typeof r[t]?r[t]:1===e?r[t].one:r[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:i,formatRelative:function(t,e,n,r){return u[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(o={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(o.matchPattern);if(!a)return null;var i=a[0],u=n.match(o.parsePattern);if(!u)return null;var c=o.valueCallback?o.valueCallback(u[0]):u[0];return{value:c=r.valueCallback?r.valueCallback(c):c,rest:n.slice(i.length)}}),era:s({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:s({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function l(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function m(n,r){t(2,arguments);var a=e(n).getTime(),o=l(r);return new Date(a+o)}function h(e,n){t(2,arguments);var r=l(n);return m(e,-r)}function f(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const g=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return f("yy"===e?r%100:r,e.length)},w=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):f(n+1,2)},v=function(t,e){return f(t.getUTCDate(),e.length)},p=function(t,e){return f(t.getUTCHours()%12||12,e.length)},b=function(t,e){return f(t.getUTCHours(),e.length)},y=function(t,e){return f(t.getUTCMinutes(),e.length)},T=function(t,e){return f(t.getUTCSeconds(),e.length)},C=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return f(Math.floor(r*Math.pow(10,n-3)),e.length)};var D=864e5;function x(n){t(1,arguments);var r=1,a=e(n),o=a.getUTCDay(),i=(o<r?7:0)+o-r;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function M(n){t(1,arguments);var r=e(n),a=r.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=x(o),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var c=x(u);return r.getTime()>=i.getTime()?a+1:r.getTime()>=c.getTime()?a:a-1}function E(e){t(1,arguments);var n=M(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=x(r);return a}var P=6048e5;function U(n,r){t(1,arguments);var a=r||{},o=a.locale,i=o&&o.options&&o.options.weekStartsOn,u=null==i?0:l(i),c=null==a.weekStartsOn?u:l(a.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=e(n),d=s.getUTCDay(),m=(d<c?7:0)+d-c;return s.setUTCDate(s.getUTCDate()-m),s.setUTCHours(0,0,0,0),s}function k(n,r){t(1,arguments);var a=e(n,r),o=a.getUTCFullYear(),i=r||{},u=i.locale,c=u&&u.options&&u.options.firstWeekContainsDate,s=null==c?1:l(c),d=null==i.firstWeekContainsDate?s:l(i.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(o+1,0,d),m.setUTCHours(0,0,0,0);var h=U(m,r),f=new Date(0);f.setUTCFullYear(o,0,d),f.setUTCHours(0,0,0,0);var g=U(f,r);return a.getTime()>=h.getTime()?o+1:a.getTime()>=g.getTime()?o:o-1}function S(e,n){t(1,arguments);var r=n||{},a=r.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:l(o),u=null==r.firstWeekContainsDate?i:l(r.firstWeekContainsDate),c=k(e,n),s=new Date(0);s.setUTCFullYear(c,0,u),s.setUTCHours(0,0,0,0);var d=U(s,n);return d}var N=6048e5;function W(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+f(o,2)}function A(t,e){return t%60==0?(t>0?"-":"+")+f(Math.abs(t)/60,2):Y(t,e)}function Y(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+f(Math.floor(a/60),2)+n+f(a%60,2)}const O={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return g(t,e)},Y:function(t,e,n,r){var a=k(t,r),o=a>0?a:1-a;return"YY"===e?f(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):f(o,e.length)},R:function(t,e){return f(M(t),e.length)},u:function(t,e){return f(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return f(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return f(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return w(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return f(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(n,r,a,o){var i=function(n,r){t(1,arguments);var a=e(n),o=U(a,r).getTime()-S(a,r).getTime();return Math.round(o/N)+1}(n,o);return"wo"===r?a.ordinalNumber(i,{unit:"week"}):f(i,r.length)},I:function(n,r,a){var o=function(n){t(1,arguments);var r=e(n),a=x(r).getTime()-E(r).getTime();return Math.round(a/P)+1}(n);return"Io"===r?a.ordinalNumber(o,{unit:"week"}):f(o,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):v(t,e)},D:function(n,r,a){var o=function(n){t(1,arguments);var r=e(n),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var o=r.getTime(),i=a-o;return Math.floor(i/D)+1}(n);return"Do"===r?a.ordinalNumber(o,{unit:"dayOfYear"}):f(o,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return f(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return f(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return f(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return p(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):b(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):f(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):f(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):y(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T(t,e)},S:function(t,e){return C(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return A(a);case"XXXX":case"XX":return Y(a);case"XXXXX":case"XXX":default:return Y(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return A(a);case"xxxx":case"xx":return Y(a);case"xxxxx":case"xxx":default:return Y(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+W(a,":");case"OOOO":default:return"GMT"+Y(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+W(a,":");case"zzzz":default:return"GMT"+Y(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return f(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return f((r._originalDate||t).getTime(),e.length)}};function q(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function j(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const L={p:j,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return q(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",q(a,e)).replace("{{time}}",j(o,e))}};var z=6e4;function H(t){return t.getTime()%z}function F(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?(z+H(e))%z:H(e);return n*z+r}var X=["D","DD"],Q=["YY","YYYY"];function G(t){return-1!==X.indexOf(t)}function B(t){return-1!==Q.indexOf(t)}function R(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,$=/''/g,_=/[a-zA-Z]/;function V(t){return t.match(Z)[1].replace($,"'")}var K=36e5,tt={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},et=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,nt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,rt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function at(t){var e,n={},r=t.split(tt.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1],tt.timeZoneDelimiter.test(n.date)&&(n.date=t.split(tt.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=tt.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function ot(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),o=r[2]&&parseInt(r[2]);return{year:null==o?a:100*o,restDateString:t.slice((r[1]||r[2]).length)}}function it(t,e){if(null===e)return null;var n=t.match(et);if(!n)return null;var r=!!n[4],a=ut(n[1]),o=ut(n[2])-1,i=ut(n[3]),u=ut(n[4]),c=ut(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,c)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,u,c):new Date(NaN);var s=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(lt[e]||(mt(t)?29:28))}(e,o,i)&&function(t,e){return e>=1&&e<=(mt(t)?366:365)}(e,a)?(s.setUTCFullYear(e,o,Math.max(a,i)),s):new Date(NaN)}function ut(t){return t?parseInt(t):1}function ct(t){var e=t.match(nt);if(!e)return null;var n=st(e[1]),r=st(e[2]),a=st(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*K+6e4*r+1e3*a:NaN}function st(t){return t&&parseFloat(t.replace(",","."))||0}function dt(t){if("Z"===t)return 0;var e=t.match(rt);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*K+6e4*a):NaN}var lt=[31,null,31,30,31,30,31,31,30,31,30,31];function mt(t){return t%400==0||t%4==0&&t%100}class ht{constructor(r,a,o,i){this.title=r,this.desc=a,this.dueDate=function(r,a,o){t(2,arguments);var i=String(a),u=o||{},c=u.locale||d,s=c.options&&c.options.firstWeekContainsDate,m=null==s?1:l(s),f=null==u.firstWeekContainsDate?m:l(u.firstWeekContainsDate);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=c.options&&c.options.weekStartsOn,w=null==g?0:l(g),v=null==u.weekStartsOn?w:l(u.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var p=e(r);if(!n(p))throw new RangeError("Invalid time value");var b=F(p),y=h(p,b),T={firstWeekContainsDate:f,weekStartsOn:v,locale:c,_originalDate:p};return i.match(J).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,L[e])(t,c.formatLong,T):t})).join("").match(I).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return V(t);var n=O[e];if(n)return!u.useAdditionalWeekYearTokens&&B(t)&&R(t,a,r),!u.useAdditionalDayOfYearTokens&&G(t)&&R(t,a,r),n(y,t,c.localize,T);if(e.match(_))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("")}(function(e,n){t(1,arguments);var r=n||{},a=null==r.additionalDigits?2:l(r.additionalDigits);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,i=at(e);if(i.date){var u=ot(i.date,a);o=it(u.restDateString,u.year)}if(isNaN(o)||!o)return new Date(NaN);var c,s=o.getTime(),d=0;if(i.time&&(d=ct(i.time),isNaN(d)||null===d))return new Date(NaN);if(!i.timezone){var m=new Date(s+d),h=new Date(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate(),m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds());return h.setFullYear(m.getUTCFullYear()),h}return c=dt(i.timezone),isNaN(c)?new Date(NaN):new Date(s+d+c)}(o),"'Vence' P"),this.priority=parseInt(i)}}class ft{constructor(t){this.title=t,this.todoList=[]}get getTodoList(){return this.todoList}addTodo(t,e,n,r){const a=new ht(t,e,n,r);this.todoList.push(a)}removeTodo(t){this.todoList.splice(t,1)}}let gt,wt=[];function vt(t){const e=new ft(t);e.addTodo("Prueba","Prueba 1","2021-01-29",2),wt.push(e)}vt("Default");const pt=()=>{document.querySelectorAll(".project-item").forEach((t=>t.remove())),wt.forEach((t=>{bt(t)}))},bt=t=>{const e=document.querySelector("#projects"),n=document.createElement("div");n.setAttribute("class","project-item"),n.onclick=()=>{document.querySelectorAll(".todo-item").forEach((t=>t.remove()));const t=[...n.parentElement.children].indexOf(n)-3;gt=t,(t=>{const e=document.querySelector("#todos");document.querySelectorAll(".todo-item").forEach((t=>t.remove())),t.forEach((t=>{const n=document.createElement("div");n.setAttribute("class","todo-item");const r=document.createElement("h4");r.textContent=t.title;const a=document.createElement("p");a.textContent=t.desc;const o=document.createElement("p");o.textContent=t.dueDate;const i=document.createElement("input");i.setAttribute("type","range"),i.setAttribute("readonly","true");const u=document.createElement("span");u.setAttribute("class","delete-project"),u.innerHTML="&times;",u.onclick=()=>{const t=[...n.parentElement.children].indexOf(n)-2;wt[gt].removeTodo(t),pt()},n.append(r,a,o,i,u),e.appendChild(n)}))})(wt[t].getTodoList)};const r=document.createElement("p");r.textContent=t.title;const a=document.createElement("span");a.setAttribute("class","delete-project"),a.innerHTML="&times;",a.onclick=()=>{const t=[...n.parentElement.children].indexOf(n)-3;wt.splice(t,1),pt()};const o=document.createElement("span");o.setAttribute("class","add-todo"),o.innerHTML="+",o.onclick=()=>{content.appendChild(yt(t))},n.append(r,a,o),e.appendChild(n)},yt=t=>{const e=document.createElement("div");e.setAttribute("id","myModal"),e.setAttribute("class","modal");const n=document.createElement("div");n.setAttribute("class","modal-content");const r=document.createElement("span");r.setAttribute("class","close"),r.innerHTML="&times;";const a=document.createElement("h2");a.textContent="Add new To Do";const o=document.createElement("label");o.textContent="To Do:";const i=document.createElement("input"),u=document.createElement("label");u.textContent="Description:";const c=document.createElement("input"),s=document.createElement("label");s.textContent="Due-Date:";const d=document.createElement("input");d.setAttribute("type","date");const l=document.createElement("label");l.textContent="Priority:";const m=document.createElement("input");m.setAttribute("type","range"),m.setAttribute("max","4");const h=document.createElement("button");return h.setAttribute("class","addProject"),h.textContent="Add",h.onclick=()=>{i.value&&c.value&&d.value&&t.addTodo(i.value,c.value,d.value,m.value),pt(),e.style.display="none"},n.append(r,a,o,i,u,c,s,d,l,m,h),e.appendChild(n),r.onclick=()=>{e.style.display="none"},e.style.display="block",e};(()=>{const t=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","projects");const n=document.createElement("h1");n.textContent="Projects";const r=document.createElement("button");r.setAttribute("class","add"),r.addEventListener("click",(e=>t.appendChild((()=>{const t=document.createElement("div");t.setAttribute("id","myModal"),t.setAttribute("class","modal");const e=document.createElement("div");e.setAttribute("class","modal-content");const n=document.createElement("span");n.setAttribute("class","close"),n.innerHTML="&times;";const r=document.createElement("h2");r.textContent="Add new Project";const a=document.createElement("label");a.textContent="Project name:  ";const o=document.createElement("input"),i=document.createElement("button");return i.setAttribute("class","addProject"),i.textContent="Add",i.onclick=()=>{o.value&&o.value.length<16&&vt(o.value),pt(),t.style.display="none"},e.append(n,r,a,o,i),t.appendChild(e),n.onclick=function(){t.style.display="none"},t.style.display="block",t})()))),r.textContent="+",e.append(n,r);const a=document.createElement("div");a.setAttribute("id","todos");const o=document.createElement("h1");o.textContent="To Do",a.append(o);const i=document.createElement("div");i.setAttribute("class","headings-projects");const u=document.createElement("span");u.textContent="Add";const c=document.createElement("span");c.textContent="Delete";const s=document.createElement("span");s.textContent="Title";const d=document.createElement("div");d.setAttribute("class","headings-todo");const l=document.createElement("span");l.textContent="Title";const m=document.createElement("span");m.textContent="Description";const h=document.createElement("span");h.textContent="Due Date";const f=document.createElement("span");f.textContent="Priority";const g=document.createElement("span");g.textContent="Delete",i.append(s,u,c),d.append(l,m,h,h,f,g),a.appendChild(d),e.appendChild(i),t.append(e,a)})(),pt()})();