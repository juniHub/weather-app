(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),i=(a(9),a(1)),s="cee4a33e53eedece9e24cbb925cc1cff",l="https://api.openweathermap.org/data/2.5/";var m=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),m=Object(i.a)(o,2),h=m[0],u=m[1];return c.a.createElement("div",{className:"undefined"!=typeof h.main?h.main.temp>16?"app warm":"app cold":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Enter the city",onChange:function(e){return r(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(a,"&units=metric&APPID=").concat(s)).then((function(e){return e.json()})).then((function(e){u(e),r(""),console.log(e)}))}})),"undefined"!=typeof h.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},h.name,", ",h.sys.country),c.a.createElement("div",{className:"date"},(new Date).toDateString())),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(h.main.temp),"\xb0C"),c.a.createElement("div",{className:"weather"},h.weather[0].description),c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(h.weather[0].icon,"@2x.png")})))):c.a.createElement("div",{className:"error"},"Enter your city name to know the current weather!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.dfaec64b.chunk.js.map