function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,i,r,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function w(e){return c=e,u=setTimeout(j,t),l?y(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function j(){var e=v();if(S(e))return h(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function h(e){return u=void 0,p&&o?y(e):(o=i=void 0,a)}function O(){var e=v(),n=S(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return w(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},O.flush=function(){return void 0===u?a:h(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),w=document.querySelector('input[name="email"]'),S=document.querySelector('textarea[name="message"]'),j=e(t)((function(){const e={email:w.value,message:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);window.addEventListener("load",(function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);w.value=t.email||"",S.value=t.message||""}})),y.addEventListener("input",(function(e){e.preventDefault(),j()})),y.addEventListener("submit",(function(e){e.preventDefault();const t={email:w.value,message:S.value};localStorage.removeItem("feedback-form-state"),w.value="",S.value="",console.log("Submitted Feedback:",t)}));
//# sourceMappingURL=03-feedback.2df9a9b6.js.map
