!function(o,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:o)[n]=t[n]}}(window,(function(){return function(o){var r={};function t(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return o[n].call(e.exports,e,e.exports,t),e.l=!0,e.exports}return t.m=o,t.c=r,t.d=function(o,r,n){t.o(o,r)||Object.defineProperty(o,r,{enumerable:!0,get:n})},t.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,r){if(1&r&&(o=t(o)),8&r)return o;if(4&r&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&r&&"string"!=typeof o)for(var e in o)t.d(n,e,function(r){return o[r]}.bind(null,e));return n},t.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(r,"a",r),r},t.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)},t.p="",t(t.s=1)}([,function(o,r,t){"use strict";var n,e=this&&this.__assign||function(){return(e=Object.assign||function(o){for(var r,t=1,n=arguments.length;t<n;t++)for(var e in r=arguments[t])Object.prototype.hasOwnProperty.call(r,e)&&(o[e]=r[e]);return o}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),function(o){o[o.USE_CHECK=1]="USE_CHECK",o[o.FILL_EACHMODEL=16]="FILL_EACHMODEL",o[o.USE_OFFSET=256]="USE_OFFSET",o[o.USE_EACHOFFSET=4096]="USE_EACHOFFSET"}(n||(n={}));var l=function(){function o(o,r){void 0===r&&(r=o.reduce((function(o,r){return Math.max(o,(r.col||0)+(r.colspan||1))}),1)),this.model_map=new Array,this.model_list=new Array,this._ncols=null,this.model_list=this.model_list.concat(o),this.ncols=r}return Object.defineProperty(o.prototype,"ncols",{get:function(){return this._ncols},set:function(r){if(r!==this._ncols){this._ncols=r,this.model_map.splice(0,this.model_map.length);var t=this.model_list.splice(0,this.model_list.length),n=this._fill(t,o.STATES.USE_CHECK|o.STATES.FILL_EACHMODEL);this.append(n)}},enumerable:!0,configurable:!0}),o.prototype.fill=function(r){r instanceof Array||(r=[r]),this._fill(r,o.STATES.FILL_EACHMODEL)},o.prototype.clear=function(o){var r=this.model_list.indexOf(o),t=0;for(~r&&this.model_list.splice(r,1);~(r=this.model_map.indexOf(o));)t++,this.model_map[r]=void 0;return t},o.prototype.remove=function(o){o instanceof Array||(o=[o]),this._fill(o)},o.prototype.move=function(r,t,n){void 0===n&&(n=0),r instanceof Array||(r=[r]),this.remove(r),this._fill(r,n|o.STATES.FILL_EACHMODEL|o.STATES.USE_OFFSET,t)},o.prototype.getModel=function(o,r){if(o>=0&&r>=0&&o<this.ncols)return this.model_map[o+r*this.ncols]},o.prototype.format=function(o,r,t){return void 0===r&&(r=o.col),void 0===t&&(t=o.row),o.col=Math.round(Math.max(Math.min(r,this.ncols-o.colspan),0)),o.row=Math.round(Math.max(t,0)),o},o.prototype.trim=function(){for(var o=Math.ceil(this.model_map.length/this.ncols),r=[],t=1;t<o;t++)for(var n=0;n<this.ncols;n++){var e=t*this.ncols+n,l=this.model_map[e];if(l&&l.row===t){var s=this._pathTest([l],[0,-t-1],l);s>0&&(r.push(l),this.move([l],[0,-s])),n+=l.colspan-1}}return r},o.prototype.append=function(r){r instanceof Array||(r=[r]);for(var t=0,n=r;t<n.length;t++){var e=n[t];e.colspan>this.ncols&&(e.colspan=this.ncols);for(var l=Math.ceil(this.model_map.length/this.ncols),s=0,a=0,c={col:0,row:l,colspan:e.colspan,rowspan:e.rowspan},i=0,p=this.ncols-e.colspan;i<=p;i++){c.col=i;var f=this._pathTest([c],[0,-l-1],c);s<f&&(s=f,a=i)}e.col=a,e.row=l-s,this._fill([e],o.STATES.FILL_EACHMODEL)}},o.prototype.alloc=function(r,t,n,l){void 0===n&&(n=this.format(e({},r))),void 0===l&&(l=this.cover(n));var s=l.slice();if(0===l.length)return s;var a=this.calcWrap(l);if(t&&n.col===a.col&&n.row===a.row&&t.colspan===a.colspan&&t.rowspan===a.rowspan&&(Math.abs(r.col-a.col)+Math.abs(r.row-a.row))/(t.colspan+t.rowspan)<.1&&Math.abs(t.col-a.col)/t.colspan+Math.abs(t.row-a.row)/t.rowspan>1&&0===this.cover(t).length)this.move(l,[t.col-a.col,t.row-a.row]);else if(a.colspan+a.rowspan>1.6*(n.colspan+n.rowspan)||!this._compress(n,l,a,r)){l.sort((function(o,r){return o.row-r.row}));for(var c=e({},n),i=0;i<l.length;i++){var p=l[i];this._compress(c,[p],p,void 0,!1)?l.splice(i--,1):(c.col>p.col&&(c.colspan+=c.col-p.col,c.col=p.col),c.col+c.colspan<p.col+p.colspan&&(c.colspan=p.col+p.colspan-c.col))}if(0===l.length)return s;var f=[],h=[];a=this.calcWrap(l);for(var u=n.colspan-Math.max(a.col-n.col,0)-Math.max(n.col+n.colspan-a.colspan-a.col,0),v=[{col:Math.max(n.col,a.col),row:n.row,colspan:u,rowspan:0}],w={},d=[new Array(u).fill(n.rowspan)];v.length;){var _=[],m={},E=[];for(var y in w)w[y].sort((function(o,r){return o.row-r.row}));for(i=0;i<v.length;i++){for(var S=v[i],O=d[i],M=(x=S.col)+S.colspan;x<M;x++){if(U=w[x]){for(var b=0,T=0;T<U.length-1;T++){var g=U[T];if(!(g.row<S.row))break;b+=U[T+1].row-(g.row+g.rowspan)}O[x-S.col]-=b}}if((A=Math.max.apply(Number,O))>0)if(d[i]=A,-1===(T=f.indexOf(S)))T=f.length,f.push(S),h.push(A);else{if(h[T]>=A)continue;h[T]=A}else v.splice(i,1),d.splice(i,1),i--}for(T=0;T<v.length;T++){S=v[T];var A=d[T];var x=S.col;o:for(M=x+S.colspan;x<M;x++)for(var F=S.row+S.rowspan,L=F+A;F<L;F++){var C=this.model_map[x+F*this.ncols];if(C){var H=_.indexOf(C),j=(O=void 0,L-F+Math.max(S.row-C.row,0));if(-1===H){var U,I=f.indexOf(C);if(I>=0&&h[I]>=j)continue o;_.push(C),E.push(O=new Array(C.colspan).fill(0)),(U=m[x]||(m[x]=[])).push({row:C.row,rowspan:C.rowspan})}else O=E[H];O[x-C.col]=Math.max(O[x-C.col],j);break}}}v=_,w=m,d=E}f.splice(0,1),h.splice(0,1),this.move(f,h.map((function(o){return[0,o]})),o.STATES.USE_EACHOFFSET),s=s.concat(f)}return s},o.prototype.cover=function(o){for(var r=[],t=o.col,n=o.row,e=0;e<o.rowspan;e++)for(var l=0;l<o.colspan;l++){var s=this.model_map[l+t+(e+n)*this.ncols];if(void 0!==s){~r.indexOf(s)||r.push(s);var a=s.colspan+s.col-1;l+t<a&&(l=a-t)}}return r},o.prototype.calcWrap=function(o){for(var r={col:o[0].col,row:o[0].row,colspan:o[0].colspan,rowspan:o[0].rowspan},t=1;t<o.length;t++){var n=o[t];r.col>n.col&&(r.colspan+=r.col-n.col,r.col=n.col),r.row>n.row&&(r.rowspan+=r.row-n.row,r.row=n.row),r.colspan+r.col<n.col+n.colspan&&(r.colspan+=n.col+n.colspan-r.col-r.colspan),r.rowspan+r.row<n.row+n.rowspan&&(r.rowspan+=n.row+n.rowspan-r.row-r.rowspan)}return r},o.prototype.calcOffset=function(o,r){return{l:o.col-(r.col+r.colspan),r:o.col+o.colspan-r.col,t:o.row-(r.row+r.rowspan),b:o.row+o.rowspan-r.row}},o.prototype._fill=function(r,t,n){void 0===t&&(t=0);var e=o.STATES,l=t&e.USE_CHECK?[]:void 0,s=this.model_map,a=this.model_list,c=this.ncols;o:for(var i=0;i<r.length;i++){var p=r[i];if(t&e.USE_CHECK&&(isFinite(p.colspan)||(p.colspan=1),isFinite(p.rowspan)||(p.rowspan=1),isNaN(p.col+p.row)||p.col+p.colspan>c))l.push(p);else{var f=a.indexOf(p);if(t&e.FILL_EACHMODEL){if(-1!==f)continue;a.push(p)}else f>=0&&a.splice(f,1);t&e.USE_EACHOFFSET?(p.col+=n[i][0],p.row+=n[i][1]):t&e.USE_OFFSET&&(p.col+=n[0],p.row+=n[1]);for(var h=p.col,u=p.row,v=p.colspan,w=p.rowspan,d=0;d<w;d++)for(var _=0;_<v;_++){var m=_+h+(d+u)*c;if(t&e.USE_CHECK&&void 0!==s[m]){do{for(;_--;)s[_+h+(d+u)*c]=void 0;_=v}while(d--);t&e.FILL_EACHMODEL&&a.pop(),l.push(p);continue o}s[m]=t&e.FILL_EACHMODEL?p:n}}}return l},o.prototype._pathTest=function(o,r,t){void 0===t&&(t=this.calcWrap(o));for(var n=0|r[0],e=0|r[1],l=0,s=0,a=0,c=n&&n/Math.abs(n),i=e&&e/Math.abs(e);l!==n||s!==e;){if(l!==n?l+=c:s+=i,t.col+l<0||t.col+l+t.colspan>this.ncols||t.row+s<0)return a;for(var p=0,f=o;p<f.length;p++)for(var h=f[p],u=h.row,v=u+h.rowspan;u<v;u++)for(var w=h.col,d=w+h.colspan;w<d;w++){var _=w+l+(u+s)*this.ncols;if(this.model_map[_]&&-1===o.indexOf(this.model_map[_]))return a}a+=1}return!0},o.prototype._compress=function(o,r,t,n,e){void 0===r&&(r=this.cover(o)),void 0===t&&(t=this.calcWrap(r)),void 0===e&&(e=!0);var l=t.colspan/t.rowspan,s=o.rowspan/o.colspan,a=(l+s)/4;l=a+l/2,s=a+s/2;var c=this.calcOffset(o,t),i=n?this.calcOffset(n,t):c,p=[Math.abs(s*i.l),[c.l,0]],f=[Math.abs(s*i.r),[c.r,0],p];p.push(f),f.push(p);var h,u=[Math.abs(l*i.t),[0,c.t]];e&&(h=[Math.abs(l*i.b),[0,c.b]],u.push(h),h.push(u));for(var v=(e?[p,f,u,h]:[p,f,u]).sort((function(o,r){return o[0]-r[0]})),w=0;w<v.length;w++){var d=v.lastIndexOf(v[w][2]);if(d>w&&(v.splice(d,1),v.splice(w+1,0,v[w][2])),!0===this._pathTest(r,v[w][1],t))return this.move(r,v[w][1]),!0}return!1},o.STATES=n,o}();r.default=l}])}));
//# sourceMappingURL=mutex_model.js.map