"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[342],{6488:function(n,e,t){t.d(e,{Hg:function(){return c},Jh:function(){return f},TP:function(){return p},z1:function(){return s},zv:function(){return l}});var r=t(5861),a=t(7757),i=t.n(a),o=t(5294),u="b3d3319c72d7aa893f843e4082479da1";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},7342:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,o,u,c=t(9439),s=t(6488),p=t(5510),l=t(168),f=t(5867),d=f.ZP.button(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  border: 0;\n  margin-right: 4px;\n  margin-left: 4px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    transform: scale(1.2);\n  }\n"]))),h=f.ZP.form(a||(a=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 30px;\n  max-width: 300px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 8px;\n"]))),m=f.ZP.input(i||(i=(0,l.Z)(["\n  width: 100%;\n  font-size: 16px;\n  &::placeholder {\n    font: inherit;\n    font-size: 16px;\n  }\n"]))),x=t(184),v=function(n){var e=n.onSubmit,t=n.children;return(0,x.jsx)(h,{onSubmit:e,children:t})},g=t(9126),Z=function(){return(0,x.jsx)(m,{type:"text",name:"movieName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"May contain only letters, apostrophe, dash and spaces. For example moon",required:!0,autoComplete:"off",autoFocus:!0,placeholder:"Search movie..."})},b=function(n){var e=n.onSubmit;return(0,x.jsx)("div",{children:(0,x.jsxs)(v,{onSubmit:e,children:[(0,x.jsx)(Z,{}),(0,x.jsx)(d,{type:"submit","aria-label":"search button",children:(0,x.jsx)(g.dVI,{})})]})})},w=t(2791),y=t(7689),k=t(1087),j=f.ZP.ul(o||(o=(0,l.Z)(["\n display: flex;\n  flex-direction: column;\nrow-gap: 10px;\n"]))),S=(0,f.ZP)(k.rU)(u||(u=(0,l.Z)(["\n&:hover {\n    border-radius:3px;\n    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);\n};\ntext-decoration:none;\npadding: 2px;"]))),_=function(){var n,e=(0,y.TH)(),t=(0,k.lr)(),r=(0,c.Z)(t,2),a=r[0],i=r[1],o=null!==(n=a.get("movieName"))&&void 0!==n?n:"",u=(0,w.useState)([]),l=(0,c.Z)(u,2),f=l[0],d=l[1],h=(0,w.useState)(!1),m=(0,c.Z)(h,2),v=m[0],g=m[1],Z=(0,w.useState)(!1),_=(0,c.Z)(Z,2),z=_[0],P=_[1];(0,w.useEffect)((function(){""!==o&&(d([]),g(!0),(0,s.z1)(o).then((function(n){if(!n.results.length)return g(!1),P(!0),console.log("There is no movies. Please, try again");P(!1),d(n.results),g(!1)})))}),[o]);return(0,x.jsxs)("div",{children:[(0,x.jsx)(b,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;i({movieName:e.elements.movieName.value}),e.reset()}}),z&&(0,x.jsx)("p",{children:"There is no movies with this request. Please, try again"}),(0,x.jsxs)(j,{children:[f.map((function(n){return(0,x.jsx)("li",{children:(0,x.jsx)(S,{to:"/movies/".concat(n.id),state:{from:e},children:n.original_title||n.name})},n.id)})),v&&(0,x.jsx)(p.a,{})]})]})}}}]);
//# sourceMappingURL=342.ff4ef681.chunk.js.map