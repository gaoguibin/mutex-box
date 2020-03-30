!function(o,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:o)[n]=t[n]}}(this,(function(){return function(o){var r={};function t(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return o[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=o,t.c=r,t.d=function(o,r,n){t.o(o,r)||Object.defineProperty(o,r,{enumerable:!0,get:n})},t.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,r){if(1&r&&(o=t(o)),8&r)return o;if(4&r&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&r&&"string"!=typeof o)for(var s in o)t.d(n,s,function(r){return o[r]}.bind(null,s));return n},t.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(r,"a",r),r},t.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)},t.p="",t(t.s=1)}([,function(o,r,t){"use strict";var n,s=this&&this.__assign||function(){return(s=Object.assign||function(o){for(var r,t=1,n=arguments.length;t<n;t++)for(var s in r=arguments[t])Object.prototype.hasOwnProperty.call(r,s)&&(o[s]=r[s]);return o}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),function(o){o[o.USE_CHECK=1]="USE_CHECK",o[o.FILL_EACHMODEL=16]="FILL_EACHMODEL",o[o.USE_OFFSET=256]="USE_OFFSET",o[o.USE_EACHOFFSET=4096]="USE_EACHOFFSET"}(n||(n={}));var e=function(){function o(r,t){void 0===r&&(r=[]),void 0===t&&(t={}),this.options=t,this.model_map=new Array,this.model_list=new Array,this.options.ncols>0||(this.options.ncols=r.reduce((function(o,r){return Math.max(o,(r.col||0)+(r.colspan||1))}),1));var n=this._fill(r,o.STATES.USE_CHECK|o.STATES.FILL_EACHMODEL);this.append(n)}return Object.defineProperty(o.prototype,"ncols",{get:function(){return this.options.ncols},set:function(o){this.setNCols(o)},enumerable:!0,configurable:!0}),o.prototype.setNCols=function(r,t){if(r!==this.options.ncols){this.model_map.splice(0,this.model_map.length);var n=this.model_list.splice(0,this.model_list.length);if(t&&1!==t)for(var s=r-this.options.ncols,e=0,l=n;e<l.length;e++){l[e].col+=s}this.options.ncols=r;var a=this._fill(n,o.STATES.USE_CHECK|o.STATES.FILL_EACHMODEL);this.append(a)}},o.prototype.fill=function(r){r instanceof Array||(r=[r]),this._fill(r,o.STATES.FILL_EACHMODEL)},o.prototype.clear=function(o){var r=this.model_list.indexOf(o),t=0;for(~r&&this.model_list.splice(r,1);~(r=this.model_map.indexOf(o));)t++,this.model_map[r]=void 0;return t},o.prototype.remove=function(o){o instanceof Array||(o=[o]),this._fill(o)},o.prototype.move=function(r,t,n){void 0===n&&(n=0),r instanceof Array||(r=[r]),this.remove(r),this._fill(r,n|o.STATES.FILL_EACHMODEL|o.STATES.USE_OFFSET,t)},o.prototype.getModel=function(o,r){if(o>=0&&r>=0&&o<this.ncols)return this.model_map[o+r*this.ncols]},o.prototype.format=function(o,r,t){return void 0===r&&(r=o.col),void 0===t&&(t=o.row),o.col=Math.round(Math.max(Math.min(r,this.ncols-o.colspan),0)),o.row=Math.round(Math.max(t,0)),o},o.prototype.trim=function(){for(var o=Math.ceil(this.model_map.length/this.ncols),r=[],t=1;t<o;t++)for(var n=0;n<this.ncols;n++){var s=t*this.ncols+n,e=this.model_map[s];if(e&&e.row===t){var l=this._pathTest([e],[0,-t-1],e);l>0&&(r.push(e),this.move([e],[0,-l])),n+=e.colspan-1}}return r},o.prototype.append=function(r){r instanceof Array||(r=[r]);for(var t=0,n=r;t<n.length;t++){var s=n[t];s.colspan>this.ncols&&(s.colspan=this.ncols);for(var e=Math.ceil(this.model_map.length/this.ncols),l=0,a=0,i={col:0,row:e,colspan:s.colspan,rowspan:s.rowspan},c=0,p=this.ncols-s.colspan;c<=p;c++){i.col=c;var f=this._pathTest([i],[0,-e-1],i);l<f&&(l=f,a=c)}s.col=a,s.row=e-l,this._fill([s],o.STATES.FILL_EACHMODEL)}},o.prototype.alloc=function(r,t,n,e){void 0===n&&(n=this.format(s({},r))),void 0===e&&(e=this.cover(n));var l=e.slice();if(0===e.length)return l;var a=this.calcWrap(e);if(t&&n.col===a.col&&n.row===a.row&&t.colspan===a.colspan&&t.rowspan===a.rowspan&&(Math.abs(r.col-a.col)/t.colspan+Math.abs(r.row-a.row))/t.rowspan<.1&&Math.abs(t.col-a.col)/t.colspan+Math.abs(t.row-a.row)/t.rowspan>1&&0===this.cover(t).length)this.move(e,[t.col-a.col,t.row-a.row]);else if(a.colspan+a.rowspan>1.6*(n.colspan+n.rowspan)||!this._compress(n,e,a,r)){e.sort((function(o,r){return o.row-r.row}));for(var i=s({},n),c=0;c<e.length;c++){var p=e[c];this._compress(i,[p],p,void 0,!1)?e.splice(c--,1):(i.col>p.col&&(i.colspan+=i.col-p.col,i.col=p.col),i.col+i.colspan<p.col+p.colspan&&(i.colspan=p.col+p.colspan-i.col))}if(0===e.length)return l;var f=[],h=[];a=this.calcWrap(e);for(var u=n.colspan-Math.max(a.col-n.col,0)-Math.max(n.col+n.colspan-a.colspan-a.col,0),v=[{col:Math.max(n.col,a.col),row:n.row,colspan:u,rowspan:0}],w={},d=[new Array(u).fill(n.rowspan)];v.length;){var m=[],_={},E=[];for(var S in w)w[S].sort((function(o,r){return o.row-r.row}));for(c=0;c<v.length;c++){for(var y=v[c],O=d[c],M=(C=y.col)+y.colspan;C<M;C++){if(j=w[C]){for(var b=0,T=0;T<j.length-1;T++){var A=j[T];if(!(A.row<y.row))break;b+=j[T+1].row-(A.row+A.rowspan)}O[C-y.col]-=b}}if((g=Math.max.apply(Number,O))>0)if(d[c]=g,-1===(T=f.indexOf(y)))T=f.length,f.push(y),h.push(g);else{if(h[T]>=g)continue;h[T]=g}else v.splice(c,1),d.splice(c,1),c--}for(T=0;T<v.length;T++){y=v[T];var g=d[T];var C=y.col;o:for(M=C+y.colspan;C<M;C++)for(var L=y.row+y.rowspan,F=L+g;L<F;L++){var x=this.model_map[C+L*this.ncols];if(x){var H=m.indexOf(x),U=(O=void 0,F-L+Math.max(y.row-x.row,0));if(-1===H){var j,I=f.indexOf(x);if(I>=0&&h[I]>=U)continue o;m.push(x),E.push(O=new Array(x.colspan).fill(0)),(j=_[C]||(_[C]=[])).push({row:x.row,rowspan:x.rowspan})}else O=E[H];O[C-x.col]=Math.max(O[C-x.col],U);break}}}v=m,w=_,d=E}f.splice(0,1),h.splice(0,1),this.move(f,h.map((function(o){return[0,o]})),o.STATES.USE_EACHOFFSET),l=l.concat(f)}return l},o.prototype.cover=function(o){for(var r=[],t=o.col,n=o.row,s=0;s<o.rowspan;s++)for(var e=0;e<o.colspan;e++){var l=this.model_map[e+t+(s+n)*this.ncols];if(void 0!==l){~r.indexOf(l)||r.push(l);var a=l.colspan+l.col-1;e+t<a&&(e=a-t)}}return r},o.prototype.calcWrap=function(o){for(var r={col:o[0].col,row:o[0].row,colspan:o[0].colspan,rowspan:o[0].rowspan},t=1;t<o.length;t++){var n=o[t];r.col>n.col&&(r.colspan+=r.col-n.col,r.col=n.col),r.row>n.row&&(r.rowspan+=r.row-n.row,r.row=n.row),r.colspan+r.col<n.col+n.colspan&&(r.colspan+=n.col+n.colspan-r.col-r.colspan),r.rowspan+r.row<n.row+n.rowspan&&(r.rowspan+=n.row+n.rowspan-r.row-r.rowspan)}return r},o.prototype.calcOffset=function(o,r){return{l:o.col-(r.col+r.colspan),r:o.col+o.colspan-r.col,t:o.row-(r.row+r.rowspan),b:o.row+o.rowspan-r.row}},o.prototype._fill=function(r,t,n){void 0===t&&(t=0);var s=o.STATES,e=t&s.USE_CHECK?[]:void 0,l=this.model_map,a=this.model_list,i=this.ncols;o:for(var c=0;c<r.length;c++){var p=r[c];if(t&s.USE_CHECK&&(isFinite(p.colspan)||(p.colspan=1),isFinite(p.rowspan)||(p.rowspan=1),isNaN(p.col+p.row)||p.col<0||p.col+p.colspan>i))e.push(p);else{var f=a.indexOf(p);if(t&s.FILL_EACHMODEL){if(-1!==f)continue;a.push(p)}else f>=0&&a.splice(f,1);t&s.USE_EACHOFFSET?(p.col+=n[c][0],p.row+=n[c][1]):t&s.USE_OFFSET&&(p.col+=n[0],p.row+=n[1]);for(var h=p.col,u=p.row,v=p.colspan,w=p.rowspan,d=0;d<w;d++)for(var m=0;m<v;m++){var _=m+h+(d+u)*i;if(t&s.USE_CHECK&&void 0!==l[_]){do{for(;m--;)l[m+h+(d+u)*i]=void 0;m=v}while(d--);t&s.FILL_EACHMODEL&&a.pop(),e.push(p);continue o}l[_]=t&s.FILL_EACHMODEL?p:n}}}return e},o.prototype._pathTest=function(o,r,t){void 0===t&&(t=this.calcWrap(o));for(var n=0|r[0],s=0|r[1],e=0,l=0,a=0,i=n&&n/Math.abs(n),c=s&&s/Math.abs(s);e!==n||l!==s;){if(e!==n?e+=i:l+=c,t.col+e<0||t.col+e+t.colspan>this.ncols||t.row+l<0)return a;for(var p=0,f=o;p<f.length;p++)for(var h=f[p],u=h.row,v=u+h.rowspan;u<v;u++)for(var w=h.col,d=w+h.colspan;w<d;w++){var m=w+e+(u+l)*this.ncols;if(this.model_map[m]&&-1===o.indexOf(this.model_map[m]))return a}a+=1}return!0},o.prototype._compress=function(o,r,t,n,s){void 0===r&&(r=this.cover(o)),void 0===t&&(t=this.calcWrap(r)),void 0===s&&(s=!0);var e=t.colspan/t.rowspan,l=o.rowspan/o.colspan,a=(e+l)/4;e=a+e/2,l=a+l/2;var i=this.calcOffset(o,t),c=n?this.calcOffset(n,t):i,p=[Math.abs(l*c.l),[i.l,0]],f=[Math.abs(l*c.r),[i.r,0],p];p.push(f),f.push(p);var h,u=[Math.abs(e*c.t),[0,i.t]];s&&(h=[Math.abs(e*c.b),[0,i.b]],u.push(h),h.push(u));for(var v=(s?[p,f,u,h]:[p,f,u]).sort((function(o,r){return o[0]-r[0]})),w=0;w<v.length;w++){var d=v.lastIndexOf(v[w][2]);if(d>w&&(v.splice(d,1),v.splice(w+1,0,v[w][2])),!0===this._pathTest(r,v[w][1],t))return this.move(r,v[w][1]),!0}return!1},o.STATES=n,o}();r.default=e}])}));
//# sourceMappingURL=mutex_model.js.map