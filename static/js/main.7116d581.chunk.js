(this.webpackJsonptodolistapp=this.webpackJsonptodolistapp||[]).push([[0],{12:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c(6),i=c.n(s),o=(c(12),c(7)),r=c(5),j=c(0),a=function(t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"todo_style",children:[Object(j.jsx)("i",{className:"fas fa-times",onClick:function(){t.onSelect(t.id)}}),Object(j.jsxs)("li",{children:[" ",t.text," "]})]})})},l=(c(14),function(){var t=Object(n.useState)(""),e=Object(r.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)([]),l=Object(r.a)(i,2),d=l[0],u=l[1],b=function(t){console.log("deletd"),u((function(e){return e.filter((function(e,c){return c!==t}))}))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container-fluid main_div",children:Object(j.jsxs)("div",{className:"row center_div",children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"col-md-6 mx-auto",children:[Object(j.jsx)("h1",{children:"Todo List"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",placeholder:" Add a Items",onChange:function(t){s(t.target.value)},value:c}),Object(j.jsx)("button",{onClick:function(){u((function(t){return[].concat(Object(o.a)(t),[c])})),s("")},children:" + "}),Object(j.jsx)("ol",{children:d.map((function(t,e){return Object(j.jsx)(a,{id:e,text:t,onSelect:b},e)}))})]})]})})})});i.a.render(Object(j.jsx)(l,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7116d581.chunk.js.map