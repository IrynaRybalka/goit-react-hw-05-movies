"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{6488:function(t,e,n){n.d(e,{Hg:function(){return o},Jh:function(){return h},TP:function(){return p},z1:function(){return s},zv:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),u=n(5294),i="b3d3319c72d7aa893f843e4082479da1";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},1247:function(t,e,n){n.r(e);var r=n(9439),a=n(6488),c=n(2791),u=n(7689),i=n(184);e.default=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1],s=(0,u.UO)().movieId;return(0,c.useEffect)((function(){(0,a.zv)(s).then((function(t){return o(t.cast)}))}),[s]),(0,i.jsx)("ul",{children:n.length>0?n.map((function(t){var e=t.id,n=t.name,r=t.profile_path,a=t.character;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200".concat(r):"http://www.suryalaya.org/images/no_image.jpg",alt:"actor",loading:"lazy",width:120,height:180}),(0,i.jsx)("h3",{children:n}),(0,i.jsxs)("p",{children:[" Character: ",a]})]},e)})):"Sorry, there isn't any info :("})}}}]);
//# sourceMappingURL=247.31537721.chunk.js.map