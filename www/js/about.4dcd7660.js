(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1af6":function(t,e,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},"20fd":function(t,e,n){"use strict";var r=n("d9f6"),a=n("aebd");t.exports=function(t,e,n){e in t?r.f(t,e,a(0,n)):t[e]=n}},3702:function(t,e,n){var r=n("481b"),a=n("5168")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[a]===t)}},"40c3":function(t,e,n){var r=n("6b4c"),a=n("5168")("toStringTag"),i="Arguments"==r(function(){return arguments}()),o=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=o(e=Object(t),a))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},"4ee1":function(t,e,n){var r=n("5168")("iterator"),a=!1;try{var i=[7][r]();i["return"]=function(){a=!0},Array.from(i,function(){throw 2})}catch(o){}t.exports=function(t,e){if(!e&&!a)return!1;var n=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:n=!0}},i[r]=function(){return c},t(i)}catch(o){}return n}},"549b":function(t,e,n){"use strict";var r=n("d864"),a=n("63b6"),i=n("241e"),o=n("b0dc"),c=n("3702"),u=n("b447"),f=n("20fd"),s=n("7cd6");a(a.S+a.F*!n("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,a,h,d=i(t),l="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,p=void 0!==g,v=0,w=s(d);if(p&&(g=r(g,m>2?arguments[2]:void 0,2)),void 0==w||l==Array&&c(w))for(e=u(d.length),n=new l(e);e>v;v++)f(n,v,p?g(d[v],v):d[v]);else for(h=w.call(d),n=new l;!(a=h.next()).done;v++)f(n,v,p?o(h,g,[a.value,v],!0):a.value);return n.length=v,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},5795:function(t,e,n){"use strict";var r=n("7513"),a=n.n(r);a.a},7513:function(t,e,n){},"774e":function(t,e,n){t.exports=n("d2d5")},"7cd6":function(t,e,n){var r=n("40c3"),a=n("5168")("iterator"),i=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||i[r(t)]}},"7f7f":function(t,e,n){var r=n("86cc").f,a=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in a||n("9e1e")&&r(a,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},8554:function(t,e,n){t.exports=n.p+"img/1.26e3113a.jpg"},"95d5":function(t,e,n){var r=n("40c3"),a=n("5168")("iterator"),i=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||i.hasOwnProperty(r(e))}},a745:function(t,e,n){t.exports=n("f410")},ac6a:function(t,e,n){for(var r=n("cadf"),a=n("0d58"),i=n("2aba"),o=n("7726"),c=n("32e9"),u=n("84f2"),f=n("2b4c"),s=f("iterator"),h=f("toStringTag"),d=u.Array,l={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=a(l),g=0;g<m.length;g++){var p,v=m[g],w=l[v],b=o[v],y=b&&b.prototype;if(y&&(y[s]||c(y,s,d),y[h]||c(y,h,v),u[v]=d,w))for(p in r)y[p]||i(y,p,r[p],!0)}},b0dc:function(t,e,n){var r=n("e4ae");t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(o){var i=t["return"];throw void 0!==i&&r(i.call(t)),o}}},c8bb:function(t,e,n){t.exports=n("54a1")},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("canvas",{attrs:{id:"image-canvas",width:"1940",height:"1200"}}),r("img",{attrs:{src:n("8554"),hidden:"",id:"img"}})])}],i=(n("7f7f"),n("a745")),o=n.n(i);function c(t){if(o()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var u=n("774e"),f=n.n(u),s=n("c8bb"),h=n.n(s);function d(t){if(h()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return f()(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(t){return c(t)||d(t)||l()}n("ac6a");var g=n("d225"),p=n("b0b4"),v=n("308d"),w=n("6bb5"),b=n("4e2b"),y=n("9ab4"),x=n("60a3");const L=(...t)=>{return console.log(1),t.reverse().reduce((t,e)=>{return(...n)=>{return"function"===typeof t(...n)&&"function"===typeof e(...n)?e()(t()(...n)):"function"===typeof t(...n)&&"function"!==typeof e(...n)?e(t()(...n)):"function"!==typeof t(...n)&&"function"===typeof e(...n)?e()(t(...n)):e(t(...n))}})},S=(t,e=t.height)=>{const n=t.data.map((n,r,a)=>{if(r<4*e*t.width){const e=Math.ceil(r/(4*t.width)),n=Math.ceil(r%(4*t.width)/4),i=r%4;return a[4*(t.height-e)*t.width+4*n+i]}});return new ImageData(n,t.width,t.height)},A=(t,e=t.height)=>{const n=t.data.map((n,r,a)=>{if(r<4*e*t.width){const e=Math.ceil(r%(4*t.width)/4),n=Math.ceil(r/(4*t.width)),i=r%4;return a[4*n*t.width+4*(t.width-e)+i]}});return new ImageData(n,t.width,t.height)},M=t=>{const e=t.data.map((t,e)=>{return e%4!==3?255-t:t});return new ImageData(e,t.width,t.height)},D=t=>{const e=t.data.map((t,e)=>{return e%4===0?255:t});return new ImageData(e,t.width,t.height)},I=t=>{const e=t.data.map((t,e)=>{return e%4===1?255:t});return new ImageData(e,t.width,t.height)},T=t=>{const e=t.data.map((t,e)=>{return e%4===2?255:t});return new ImageData(e,t.width,t.height)},O=t=>{const e=t.data.map((t,e,n)=>{return e%4!==3&e>3?(n[e-4]+t+n[e+4])/3:t});return new ImageData(e,t.width,t.height)},j=(t=10)=>e=>{const n=e.data.map((e,n)=>{const r=Math.floor(n/4);return r%t===0?0:e});return new ImageData(n,e.width,e.height)},C=t=>{const e=t.data.map((t,e,n)=>{const r=4*Math.floor(e/4);return e%4!==3?.299*n[r]+.578*n[r+1]+.114*n[r+2]:t});return new ImageData(e,t.width,t.height)},E=(t=10)=>e=>{const n=e.data.map((n,r,a)=>{const i=Math.floor(r/(4*t*e.width)),o=Math.floor(r%(4*e.width)/(4*t));return r%4===0?a[4*(i*e.width+o)*t]:r%4===1?a[4*(i*e.width+o)*t+1]:r%4===2?a[4*(i*e.width+o)*t+2]:r%4===3?a[4*(i*e.width+o)*t+3]:void 0});return new ImageData(n,e.width,e.height)};var V=function(t){function e(){var t;return Object(g["a"])(this,e),t=Object(v["a"])(this,Object(w["a"])(e).apply(this,arguments)),t.arr=[{name:[],text:""},{name:[A],text:"reflectionLeftRight"},{name:[M],text:"reverse"},{name:[S],text:"reflectionUpDown"},{name:[S,A],text:"reflectionUpDown + reflectionLeftRight"},{name:[C],text:"gray"},{name:[T],text:"blueColor"},{name:[D],text:"redColor"},{name:[I],text:"greenColor"},{name:[j()],text:"curtain"},{name:[O],text:"blur"},{name:[E()],text:"mosaic"}],t}return Object(b["a"])(e,t),Object(p["a"])(e,[{key:"mounted",value:function(){var t=this,e=document.getElementById("image-canvas"),n=e.getContext("2d");setTimeout(function(){var e=document.getElementById("img"),r=550,a=290,i=240;n.textAlign="center",n.textBaseline="top",n.font="bold 28px serif",n.fillStyle="#00ffff",n.drawImage(e,0,0,480,221),n.fillText("origin",240,i);var o=n.getImageData(0,0,480,221);t.arr.forEach(function(t,e){if(e>0){var c=e%3,u=Math.floor(e/3);n.putImageData(L.apply(void 0,m(t.name))(o),c*r,u*a),n.fillText(t.text,240+c*r,i+u*a)}})},50)}}]),e}(x["b"]);V=y["a"]([x["a"]],V);var k=V,G=k,P=(n("5795"),n("2877")),R=Object(P["a"])(G,r,a,!1,null,null,null);e["default"]=R.exports}}]);
//# sourceMappingURL=about.4dcd7660.js.map