(this.webpackJsonpmy_voca_app=this.webpackJsonpmy_voca_app||[]).push([[0],{34:function(t,e,c){},35:function(t,e,c){},36:function(t,e,c){},65:function(t,e,c){},66:function(t,e,c){},67:function(t,e,c){},68:function(t,e,c){},69:function(t,e,c){},70:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),s=c(27),r=c.n(s),o=(c(34),c(35),c(5)),i=(c(36),c(15)),j=c.n(i),d=c(28),l=c(11),u=c(9),h=c.n(u);var b=function(t){var e=Object(n.useState)([]),c=Object(l.a)(e,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(t);case 2:c=e.sent,s(c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),a},O=c(0);var p=function(){var t=b("http://localhost:3001/days");return Object(O.jsx)("ul",{className:"DayList",children:t.map((function(t){return Object(O.jsx)("li",{children:Object(O.jsxs)(o.b,{to:"/day/".concat(t.day),children:["Day ",t.day]})},t.id)}))})};c(65);var x=function(){return Object(O.jsxs)("div",{className:"Header",children:[Object(O.jsx)("h1",{className:"title",children:Object(O.jsx)(o.b,{to:"/",children:"\ud1a0\uc775 VOCA"})}),Object(O.jsxs)("div",{className:"add_btn",children:[Object(O.jsx)(o.b,{to:"/create_word",children:"\ub2e8\uc5b4 \ucd94\uac00"}),Object(O.jsx)(o.b,{to:"/create_day",children:"Day \ucd94\uac00"})]})]})},f=c(18);c(66);var v=function(t){var e=t.word,c=Object(n.useState)(e),a=Object(l.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(!1),i=Object(l.a)(o,2),j=i[0],d=i[1],u=Object(n.useState)(s.isDone),b=Object(l.a)(u,2),p=b[0],x=b[1];return 0===s.id?null:Object(O.jsxs)("tr",{className:p?"off":"",children:[Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"checkbox",checked:p,onChange:function(){h()("http://localhost:3001/words/".concat(s.id),{method:"PUT",headers:{"Content-Type":"application/json"},data:Object(f.a)(Object(f.a)({},s),{},{isDone:!p})}).then((function(t){"OK"===t.statusText&&x(!p)}))}})}),Object(O.jsx)("td",{children:s.eng}),Object(O.jsx)("td",{children:j&&s.kor}),Object(O.jsxs)("td",{children:[Object(O.jsxs)("button",{onClick:function(){d(!j)},className:"show_btn",children:["\ub73b ",j?"\uc228\uae30\uae30":"\ubcf4\uae30"]}),Object(O.jsx)("button",{onClick:function(){window.confirm("\uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&h()("http://localhost:3001/words/".concat(s.id),{method:"DELETE"}).then((function(t){"OK"===t.statusText&&r({id:0})}))},className:"del_btn",children:"\uc0ad\uc81c"})]})]},s.id)},y=c(2);c(67);var m=function(){var t=Object(y.g)().day,e=b("http://localhost:3001/words?day=".concat(t));return Object(O.jsxs)("div",{className:"Day",children:[Object(O.jsxs)("h2",{children:["Day ",t]}),Object(O.jsx)("table",{children:Object(O.jsx)("tbody",{children:e.map((function(t){return Object(O.jsx)(v,{word:t},t.id)}))})})]})};var w=function(){return Object(O.jsxs)("div",{className:"EmptyPage",children:[Object(O.jsx)("h2",{children:"\uc798\ubabb\ub41c \uc811\uadfc\uc785\ub2c8\ub2e4."}),Object(O.jsx)(o.b,{to:"/",children:"\ub3cc\uc544\uac00\uae30"})]})};c(68);var N=function(){var t=b("http://localhost:3001/days"),e=Object(y.f)(),c=Object(n.useRef)(null),a=Object(n.useRef)(null),s=Object(n.useRef)(null);return Object(O.jsxs)("div",{className:"CreateWord",children:[Object(O.jsxs)("div",{className:"input_area",children:[Object(O.jsx)("label",{children:"Day"}),Object(O.jsx)("select",{ref:c,children:t.map((function(t){return Object(O.jsx)("option",{value:t.day,children:t.day},t.id)}))})]}),Object(O.jsxs)("div",{className:"input_area",children:[Object(O.jsx)("label",{children:"Eng"}),Object(O.jsx)("input",{type:"text",placeholder:"computer",ref:a})]}),Object(O.jsxs)("div",{className:"input_area",children:[Object(O.jsx)("label",{children:"Kor"}),Object(O.jsx)("input",{type:"text",placeholder:"\ucef4\ud4e8\ud130",ref:s})]}),Object(O.jsx)("button",{onClick:function(t){t.preventDefault(),h()("http://localhost:3001/words",{method:"POST",headers:{"Content-Type":"application/json"},data:{day:c.current.value,eng:a.current.value,kor:s.current.value,isDone:!1}}).then((function(t){"Created"===t.statusText&&(alert("\uc0dd\uc131\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.push("/day/".concat(c.current.value)))}))},children:"\uc800\uc7a5"})]})};c(69);var D=function(){var t=b("http://localhost:3001/days"),e=Object(y.f)();return Object(O.jsxs)("div",{className:"CreateDay",children:[Object(O.jsxs)("h3",{children:["\ud604\uc7ac \uc77c \uc218 : ",t.length,"\uc77c"]}),Object(O.jsx)("button",{onClick:function(c){c.preventDefault(),h()("http://localhost:3001/days",{method:"POST",headers:{"Content-Type":"application/json"},data:{day:t.length+1}}).then((function(t){"Created"===t.statusText&&(alert("\uc0dd\uc131\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.push("/"))}))},children:"Day \ucd94\uac00"})]})};var _=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(x,{}),Object(O.jsxs)(y.c,{children:[Object(O.jsx)(y.a,{exact:!0,path:"/",component:p}),Object(O.jsx)(y.a,{path:"/day/:day",component:m}),Object(O.jsx)(y.a,{path:"/create_word",component:N}),Object(O.jsx)(y.a,{path:"/create_day",component:D}),Object(O.jsx)(y.a,{component:w})]})]})})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.9933b6d7.chunk.js.map