(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(6),s=n.n(o),r=(n(11),n(2)),i=n(3),l=n.n(i),d=n(4),u=n.p+"static/media/edit.37a28d37.svg",j=n.p+"static/media/delect.a765328d.svg",b=n(0),h=function(e){var t=e.id,n=e.body,c=e.title,o=e.date,s=e.handleDeleteNote,i=Object(a.useState)(!1),h=Object(r.a)(i,2),p=h[0],O=h[1],f=Object(a.useState)(c),m=Object(r.a)(f,2),x=m[0],v=m[1],g=Object(a.useState)(n),N=Object(r.a)(g,2),y=N[0],S=N[1],k=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://nootbook.onrender.com/api/update/".concat(t),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({title:x,body:y})});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:!0===p?Object(b.jsxs)("form",{className:"note edit",onSubmit:k(t),children:[Object(b.jsx)("input",{className:"title_input",type:"text",placeholder:"Title ...",value:x,onChange:function(e){50-e.target.value.length>=0&&v(e.target.value)}}),Object(b.jsx)("textarea",{className:"body_input",id:"edit",rows:"8",cols:"10",placeholder:"Type to add a note...",value:y,onChange:function(e){200-e.target.value.length>=0&&S(e.target.value)}}),Object(b.jsxs)("div",{className:"note-footer",children:[Object(b.jsxs)("small",{children:[200-n.length," Remaining"]}),Object(b.jsx)("button",{type:"submit",className:"save",children:"Save"})]})]}):Object(b.jsxs)("div",{className:"note",children:[Object(b.jsx)("img",{className:"edit",src:u,alt:"edit",onClick:function(){O(!0)}}),Object(b.jsx)("h1",{id:"title",children:c}),Object(b.jsx)("span",{id:"body",children:n}),Object(b.jsxs)("div",{className:"note-footer",children:[Object(b.jsx)("small",{children:o}),Object(b.jsx)("img",{className:"delete-icon",onClick:function(){return s(t)},src:j,alt:"delect_icon","aria-details":"delect note",title:"delect"})]})]})})},p=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(r.a)(o,2),i=s[0],u=s[1],j=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://nootbook.onrender.com/api/savenote",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({title:n,body:i})});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("form",{className:"note new",onSubmit:j,children:[Object(b.jsx)("input",{className:"title_input",type:"text",placeholder:"Title ...",value:n,onChange:function(e){50-e.target.value.length>=0&&c(e.target.value)}}),Object(b.jsx)("textarea",{className:"body_input",rows:"8",cols:"10",placeholder:"Type to add a note...",value:i,onChange:function(e){200-e.target.value.length>=0&&u(e.target.value)}}),Object(b.jsxs)("div",{className:"note-footer",children:[Object(b.jsxs)("small",{children:[200-i.length," Remaining"]}),Object(b.jsx)("button",{type:"submit",className:"save",children:"Save"})]})]})},O=function(e){var t=e.notes,n=e.handleDeleteNote;return Object(b.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(b.jsx)(h,{id:e._id,title:e.title,body:e.body,date:e.date.split("T")[0],handleDeleteNote:n},e._id)})),Object(b.jsx)(p,{})]})},f=function(e){var t=e.handleSearchNote;return Object(b.jsx)("div",{className:"search",children:Object(b.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"type to search..."})})},m=function(e){var t=e.handleToggleDarkMode;return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{children:"Notes"}),Object(b.jsx)("button",{onClick:function(){return t((function(e){return!e}))},className:"save",children:"Toggle Mode"})]})},x=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){fetch("https://nootbook.onrender.com/api/getAll").then((function(e){return e.json()})).then((function(e){return c(e)}))}));var o=Object(a.useState)(""),s=Object(r.a)(o,2),i=s[0],l=s[1],d=Object(a.useState)(!1),u=Object(r.a)(d,2),j=u[0],h=u[1];return Object(b.jsx)("div",{className:"".concat(j&&"dark-mode"),children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(m,{handleToggleDarkMode:h}),Object(b.jsx)(f,{handleSearchNote:l}),Object(b.jsx)(O,{notes:n.filter((function(e){return e.title.toLowerCase().includes(i)})),handleDeleteNote:function(e){return fetch("https://nootbook.onrender.com/api/delete/".concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(){return console.log("delected")}))}})]})})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.90fe396e.chunk.js.map