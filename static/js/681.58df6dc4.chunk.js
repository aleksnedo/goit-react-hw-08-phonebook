"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{5681:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,o,s,c,l,u,d,p,x,m=t(2791),h=t(9434),f=t(4270),b=function(n){return n.contacts},g=function(n){return n.filter},j=function(n){return n.contacts.isLoading},Z=function(n){return n.contacts.error},v=t(5705),w=t(168),y=t(6088),C=t(6151),z=(0,y.Z)(v.l0)(r||(r=(0,w.Z)(["\n  /* display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  padding: 30px;\n  border: 2px solid gray;\n  border-radius: 5px;\n  box-shadow: 3px 3px 30px 3px rgba(0, 0, 0, 0.75); */\n"]))),k=y.Z.label(a||(a=(0,w.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  display: flex;\n  justify-content: space-between;\n  width: 300px;\n"]))),F=(0,y.Z)(v.gN)(i||(i=(0,w.Z)(["\n  /* height: 20px;\n  width: 200px; */\n"]))),L=(0,y.Z)(C.Z)(o||(o=(0,w.Z)(["\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 10px;\n  width: 150px;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  color: white;\n  background-color: #4d4c4c;\n  transition: scale 100ms cubic-bezier(0.455, 0.03, 0.515, 0.5);\n  &:active {\n    scale: 0.95;\n  }\n"]))),A=t(971),_=t(3634),I=t(184),q=function(){var n=(0,h.v9)(b).contactsList,e=(0,h.I0)(),t=function(n,e){return e.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()||e.number===n.number}))};return(0,I.jsx)(v.J9,{initialValues:{name:"",number:""},validate:function(n){var e={};return n.name?n.number?/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){3,14}(\s*)?$/i.test(n.number)||(e.number="Invalid - only digits, at least 3"):e.number="Required":e.name="Required",e},onSubmit:function(r,a){var i=a.resetForm;t(r,n)?alert("".concat(r.name," or ").concat(r.phone," is already in contacts")):e((0,_.uK)(r)),i()},children:(0,I.jsxs)(z,{autoComplete:"on",children:[(0,I.jsx)(k,{htmlFor:"name",children:(0,I.jsx)(F,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter name",component:A.n})}),(0,I.jsx)(k,{htmlFor:"number",children:(0,I.jsx)(F,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter number",component:A.n})}),(0,I.jsx)(L,{type:"submit",children:"Add Contact"})]})})},E=t(1362),J=y.Z.label(s||(s=(0,w.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),K=y.Z.input(c||(c=(0,w.Z)(["\n  height: 20px;\n  width: 200px;\n"]))),N=t(4808),R=function(){var n=(0,h.I0)(),e=(0,h.v9)(g).filter;return(0,I.jsxs)(J,{children:["Find contacts by name",(0,I.jsx)(K,{type:"text",name:"filter",value:e,onChange:function(e){n((0,N.C)(e.currentTarget.value))}})]})},T=function(){var n=(0,h.v9)(j),e=(0,h.v9)(Z);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(q,{}),n&&!e&&(0,I.jsx)(E.a,{}),(0,I.jsx)(R,{})]})},$=y.Z.ul(l||(l=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),B=y.Z.li(u||(u=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 50px;\n"]))),D=y.Z.p(d||(d=(0,w.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n"]))),G=y.Z.span(p||(p=(0,w.Z)(["\n  color: gray;\n"]))),M=y.Z.button(x||(x=(0,w.Z)(["\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  color: white;\n  background-color: #4d4c4c;\n  padding: 5px;\n  width: 70px;\n  transition: scale 100ms cubic-bezier(0.455, 0.03, 0.515, 0.5);\n  &:active {\n    scale: 0.9;\n  }\n"]))),P=function(){var n=(0,h.I0)(),e=(0,h.v9)(b).contactsList,t=(0,h.v9)(g),r=function(){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,I.jsxs)($,{children:[0===r.length&&(0,I.jsx)("p",{children:"There is not any contacts"}),r.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,I.jsxs)(B,{children:[(0,I.jsxs)(D,{children:[r,": ",(0,I.jsx)(G,{children:a})]}),(0,I.jsx)(M,{type:"button",onClick:function(){return e=t,void n((0,_.GK)(e));var e},children:"Delete"})]},t)}))]})};function S(){var n=(0,h.I0)();return(0,m.useEffect)((function(){n((0,_.yF)())}),[n]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(f.q,{children:(0,I.jsx)("title",{children:"Contacts"})}),(0,I.jsxs)("section",{children:[(0,I.jsx)(T,{}),(0,I.jsx)(P,{})]})]})}}}]);
//# sourceMappingURL=681.58df6dc4.chunk.js.map