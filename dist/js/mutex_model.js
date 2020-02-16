!function(o,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e=r();for(var n in e)("object"==typeof exports?exports:o)[n]=e[n]}}(window,(function(){return function(o){var r={};function e(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return o[n].call(t.exports,t,t.exports,e),t.l=!0,t.exports}return e.m=o,e.c=r,e.d=function(o,r,n){e.o(o,r)||Object.defineProperty(o,r,{enumerable:!0,get:n})},e.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},e.t=function(o,r){if(1&r&&(o=e(o)),8&r)return o;if(4&r&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&r&&"string"!=typeof o)for(var t in o)e.d(n,t,function(r){return o[r]}.bind(null,t));return n},e.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(r,"a",r),r},e.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)},e.p="",e(e.s=1)}([,function(o,r,e){"use strict";function n(o,r){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable}))),e.push.apply(e,n)}return e}function t(o,r,e){return r in o?Object.defineProperty(o,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[r]=e,o}function a(o,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}var l=function(){function o(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.reduce((function(o,r){return Math.max(o,(r.col||0)+(r.colspan||1))}),1);!function(o,r){if(!(o instanceof r))throw new TypeError("Cannot call a class as a function")}(this,o),this.model_map=new Array,this.model_list=new Array,this._ncols=null,this.ncols=null,this.model_list=this.model_list.concat(r),this.ncols=e}var r,e,l;return r=o,(e=[{key:"fill",value:function(r){r instanceof Array||(r=[r]),this._fill(r,o.STATES.FILL_EACHMODEL)}},{key:"clear",value:function(o){var r=this.model_list.indexOf(o),e=0;for(~r||this.model_list.splice(r,1);~(r=this.model_map.indexOf(o));)e++,this.model_map[r]=void 0;return e}},{key:"remove",value:function(o){o instanceof Array||(o=[o]),this._fill(o)}},{key:"move",value:function(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;r instanceof Array||(r=[r]),this.remove(r),this._fill(r,n|o.STATES.FILL_EACHMODEL|o.STATES.USE_OFFSET,e)}},{key:"getModel",value:function(o,r){if(o>=0&&r>=0&&o<this.ncols)return this.model_map[o+r*this.ncols]}},{key:"format",value:function(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.col,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.row;return o.col=Math.round(Math.max(Math.min(r,this.ncols-o.colspan),0)),o.row=Math.round(Math.max(e,0)),o}},{key:"trim",value:function(){for(var o=Math.ceil(this.model_map.length/this.ncols),r=[],e=1;e<o;e++)for(var n=0;n<this.ncols;n++){var t=e*this.ncols+n,a=this.model_map[t];if(a&&a.row===e){var l=this._pathTest([a],[0,-e-1],a);l>0&&(r.push(a),this.move([a],[0,-l])),n+=a.colspan-1}}return r}},{key:"append",value:function(r){r instanceof Array||(r=[r]);var e=r,n=Array.isArray(e),t=0;for(e=n?e:e[Symbol.iterator]();;){var a;if(n){if(t>=e.length)break;a=e[t++]}else{if((t=e.next()).done)break;a=t.value}var l=a;l.colspan>this.ncols&&(l.colspan=this.ncols);for(var s=Math.ceil(this.model_map.length/this.ncols),i=0,c=0,p={col:0,row:s,colspan:l.colspan,rowspan:l.rowspan},f=0,u=this.ncols-l.colspan;f<=u;f++){p.col=f;var h=this._pathTest([p],[0,-s-1],p);i<h&&(i=h,c=f)}l.col=c,l.row=s-i,this._fill([l],o.STATES.FILL_EACHMODEL)}}},{key:"alloc",value:function(r,e){var a=this.format(function(o){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?n(Object(e),!0).forEach((function(r){t(o,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(e,r))}))}return o}({},r)),l=this.cover(a),s=l.slice();if(0===l.length)return s;var i=this.calcWrap(l);if(e&&a.col===i.col&&a.row===i.row&&e.colspan===i.colspan&&e.rowspan===i.rowspan&&(Math.abs(r.col-i.col)+Math.abs(r.row-i.row))/(e.colspan+e.rowspan)<.06&&Math.abs(e.col-i.col)/e.colspan+Math.abs(e.row-i.row)/e.rowspan>1)this.move(l,[e.col-i.col,e.row-i.row]);else if(i.colspan+i.rowspan>2*(a.colspan+a.rowspan)||!this._compress(a,l,i,r)){for(var c=0;c<l.length;c++)this._compress(a,[l[c]],l[c],void 0,!1)&&l.splice(c--,1);if(0===l.length)return s;var p=[],f=[];i=this.calcWrap(l);for(var u=a.colspan-Math.max(i.col-a.col,0)-Math.max(a.col+a.colspan-i.colspan-i.col,0),h=[{col:Math.max(a.col,i.col),row:a.row,colspan:u,rowspan:0}],v={},w=[new Array(u).fill(a.rowspan)];h.length;){var d={},m=[],_=[];for(var y in v)v[y].sort((function(o,r){return o.row-r.row}));for(var b=0;b<h.length;b++){for(var E=h[b],O=w[b],g=E.col,S=g+E.colspan;g<S;g++){var M=v[g];if(M){for(var A=0,T=0;T<M.length-1;T++){var x=M[T];if(!(x.row<E.row))break;A+=M[T+1].row-(x.row+x.rowspan)}O[g-E.col]-=A}}var k=Math.max.apply(Number,O);if(k>0){w[b]=k;var L=p.indexOf(E);if(-1===L)L=p.length,p.push(E),f.push(k);else{if(f[L]>=k)continue;f[L]=k}}else h.splice(b,1),w.splice(b,1),b--}for(var j=0;j<h.length;j++){var C=h[j],F=w[j];o:for(var H=C.col,P=H+C.colspan;H<P;H++)for(var D=C.row+C.rowspan,U=D+F;D<U;D++){var I=this.model_map[H+D*this.ncols];if(I){var K=m.indexOf(I),W=void 0,N=U-D+Math.max(C.row-I.row,0);if(-1===K){var q=p.indexOf(I);if(q>=0&&f[q]>=N)continue o;m.push(I),_.push(W=new Array(I.colspan).fill(0)),(d[H]||(d[H]=[])).push({row:I.row,rowspan:I.rowspan})}else W=_[K];W[H-I.col]=Math.max(W[H-I.col],N);break}}}h=m,v=d,w=_}p.splice(0,1),f.splice(0,1),this.move(p,f.map((function(o){return[0,o]})),o.STATES.USE_EACHOFFSET),s=s.concat(p)}return s}},{key:"cover",value:function(o){for(var r=[],e=o.col,n=o.row,t=0;t<o.rowspan;t++)for(var a=0;a<o.colspan;a++){var l=this.model_map[a+e+(t+n)*this.ncols];if(void 0!==l){~r.indexOf(l)||r.push(l);var s=l.colspan+l.col-1;a+e<s&&(a=s-e)}}return r}},{key:"calcWrap",value:function(o){for(var r={col:o[0].col,row:o[0].row,colspan:o[0].colspan,rowspan:o[0].rowspan},e=1;e<o.length;e++){var n=o[e];r.col>n.col&&(r.colspan+=r.col-n.col,r.col=n.col),r.row>n.row&&(r.rowspan+=r.row-n.row,r.row=n.row),r.colspan+r.col<n.col+n.colspan&&(r.colspan+=n.col+n.colspan-r.col-r.colspan),r.rowspan+r.row<n.row+n.rowspan&&(r.rowspan+=n.row+n.rowspan-r.row-r.rowspan)}return r}},{key:"calcOffset",value:function(o,r){return{l:o.col-(r.col+r.colspan),r:o.col+o.colspan-r.col,t:o.row-(r.row+r.rowspan),b:o.row+o.rowspan-r.row}}},{key:"_fill",value:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,t=o.STATES,a=e&t.USE_CHECK?[]:void 0,l=this.model_map,s=this.model_list,i=this.ncols;o:for(var c=0;c<r.length;c++){var p=r[c];if(e&t.USE_CHECK&&(isFinite(p.colspan)||(p.colspan=1),isFinite(p.rowspan)||(p.rowspan=1),isNaN(p.col+p.row)||p.col+p.colspan>i))a.push(p);else{var f=s.indexOf(p);if(e&t.FILL_EACHMODEL){if(-1!==f)continue;s.push(p)}else f>=0&&s.splice(f,1);e&t.USE_EACHOFFSET?(p.col+=n[c][0],p.row+=n[c][1]):e&t.USE_OFFSET&&(p.col+=n[0],p.row+=n[1]);for(var u=p.col,h=p.row,v=p.colspan,w=p.rowspan,d=0;d<w;d++)for(var m=0;m<v;m++){var _=m+u+(d+h)*i;if(e&t.USE_CHECK&&void 0!==l[_]){do{for(;m--;)l[m+u+(d+h)*i]=void 0;m=v}while(d--);e&t.FILL_EACHMODEL&&s.pop(),a.push(p);continue o}l[_]=e&t.FILL_EACHMODEL?p:n}}}return a}},{key:"_pathTest",value:function(o,r){for(var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.calcWrap(o),n=0|r[0],t=0|r[1],a=0,l=0,s=0,i=n&&n/Math.abs(n),c=t&&t/Math.abs(t);a!==n||l!==t;){if(a!==n?a+=i:l+=c,e.col+a<0||e.col+a+e.colspan>this.ncols||e.row+l<0)return s;var p=o,f=Array.isArray(p),u=0;for(p=f?p:p[Symbol.iterator]();;){var h;if(f){if(u>=p.length)break;h=p[u++]}else{if((u=p.next()).done)break;h=u.value}for(var v=h,w=v.row,d=w+v.rowspan;w<d;w++)for(var m=v.col,_=m+v.colspan;m<_;m++){var y=m+a+(w+l)*this.ncols;if(this.model_map[y]&&-1===o.indexOf(this.model_map[y]))return s}}s+=1}return!0}},{key:"_compress",value:function(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.cover(o),e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.calcWrap(crossed_models),n=arguments.length>3?arguments[3]:void 0,t=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=o.rowspan/o.colspan,l=e.colspan/e.rowspan,s=this.calcOffset(o,e),i=n?this.calcOffset(n,e):s,c=[Math.abs(a*i.l),[s.l,0]],p=[Math.abs(a*i.r),[s.r,0]];c.push(p),p.push(c);var f,u=[Math.abs(l*i.t),[0,s.t]];t&&(f=[Math.abs(l*i.b),[0,s.b]],u.push(f),f.push(u));for(var h=(t?[c,p,u,f]:[c,p,u]).sort((function(o,r){return o[0]-r[0]})),v=0;v<h.length;v++){var w=h.lastIndexOf(h[v][2]);if(w>v&&(h.splice(w,1),h.splice(v+1,0,h[v][2])),!0===this._pathTest(r,h[v][1],e))return this.move(r,h[v][1]),!0}}},{key:"ncols",get:function(){return this._ncols},set:function(r){if(r!==this._ncols){this._ncols=r,this.model_map.splice(0,this.model_map.length);var e=this.model_list.splice(0,this.model_list.length),n=this._fill(e,o.STATES.USE_CHECK|o.STATES.FILL_EACHMODEL);this.append(n)}}}])&&a(r.prototype,e),l&&a(r,l),o}();l.STATES={USE_CHECK:1,FILL_EACHMODEL:16,USE_OFFSET:256,USE_EACHOFFSET:4096},o.exports=l}])}));