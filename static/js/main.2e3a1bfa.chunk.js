(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(5),d=n(1),s=n(4),o=n.n(s),b=n(0),r=function(t){var e,n=t.tabs,c=t.selectedTabId,i=t.onTabSelected,a=n.find((function(t){return t.id===c}))||n[0],d=null===(e=n.find((function(t){return t.id===c})))||void 0===e?void 0:e.content;return Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:n.map((function(t){return Object(b.jsx)("li",{className:o()({"is-active":a.id===t.id}),"data-cy":"Tab",children:Object(b.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){t.id!==c&&i(t)}(t)},children:t.title})},t.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:d})]})},l=(n(11),n(12),n(13),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),u=function(){var t,e=Object(d.useState)(l[0].id),n=Object(a.a)(e,2),c=n[0],i=n[1],s=null===(t=l.find((function(t){return t.id===c})))||void 0===t?void 0:t.title;return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Selected tab is ".concat(s)}),Object(b.jsx)(r,{tabs:l,selectedTabId:c,onTabSelected:function(t){var e=t.id;i(e)}})]})};i.a.render(Object(b.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2e3a1bfa.chunk.js.map