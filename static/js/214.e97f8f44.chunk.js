"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[214],{7214:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,i,o,a,c,l,s,x=t(9434),p=t(168),u=t(5867),d=u.ZP.form(r||(r=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\nmin-width: 260px;\nmargin-bottom: 20px;\n"]))),f=u.ZP.label(i||(i=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 5px;\nmargin-bottom: 10px;\n"]))),m=u.ZP.button(o||(o=(0,p.Z)(["\n\n    display: block;\n    max-width: 169px;\n    align-self: center;\n    padding: 5px 10px;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 1.2;\n    text-align: center;\n    letter-spacing: 0.04em;\n    color: inherit;\n    border: 1px solid gray;\n    border-radius: 4px;\n    background-color: white;\n\n    &:hover, &:focus \n    {\n    color: #4d5ae5;\n    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),\n    0px 2px 2px rgba(0, 0, 0, 0.12);}\n\n\n"]))),h=t(3634),b=t(6382),g=t(184),j=function(){var n=(0,x.I0)(),e=(0,x.v9)((function(n){return n.contacts.items}))||[];return(0,g.jsxs)(d,{onSubmit:function(t){t.preventDefault();var r=t.currentTarget.elements,i=r.name,o=r.number,a={name:i.value,number:o.value};console.log(a),e.find((function(n){return n.name.toLowerCase()===a.name.toLowerCase()}))?alert("".concat(a.name," is already in contacts!")):n((0,h.el)(a)),t.currentTarget.reset()},children:[(0,g.jsxs)(f,{htmlFor:e.id,children:[(0,g.jsx)("span",{children:"Name"}),(0,g.jsx)("input",{id:(0,b.x0)(),type:"text",name:"name"})]}),(0,g.jsxs)(f,{children:[(0,g.jsx)("span",{children:"Number"}),(0,g.jsx)("input",{type:"tel",name:"number"})]}),(0,g.jsx)(m,{type:"submit",children:"Add contact"})]})},y=u.ZP.button(a||(a=(0,p.Z)(["\n\n    max-width: 169px;\n    padding: 5px 10px;\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 1.2;\n    text-align: center;\n    letter-spacing: 0.04em;\n    color: inherit;\n    border: 1px solid gray;\n    border-radius: 4px;\n    background-color: white;\n\n    &:hover, &:focus \n    {\n    color: #dbcd0b;\n    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),\n    0px 2px 2px rgba(0, 0, 0, 0.12);}\n\n\n"]))),v=u.ZP.li(c||(c=(0,p.Z)(["\ndisplay: flex;\ngap: 20px;\njustify-content: space-between;\nalign-items: center;\n"]))),w=function(n){var e=n.contact,t=e.id,r=e.name,i=e.number,o=n.onContactDelete;return(0,g.jsxs)(v,{children:[(0,g.jsxs)("p",{children:[r,": ",i]}),(0,g.jsx)(y,{type:"button",onClick:function(){return o(t)},children:"Delete"})]},t)},Z=u.ZP.ul(l||(l=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\nmin-width: 260px;\n\n"]))),k=function(){var n=(0,x.I0)(),e=(0,x.v9)((function(n){return n.filter.filter})),t=(0,x.v9)((function(n){return n.contacts.items})),r=function(e){n((0,h._f)(e))},i=Array.isArray(t)?t.filter((function(n){return"string"===typeof n.name&&n.name.toLowerCase().includes(e.toLowerCase())})):[];return(0,g.jsx)(Z,{children:i.map((function(n){return(0,g.jsx)(w,{contact:n,onContactDelete:r},n.id)}))})},C=u.ZP.label(s||(s=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 5px;\npadding-top: 10px;\npadding-bottom: 10px;\nmin-width: 260px;\n\n"]))),P=t(4808),_=function(){var n=(0,x.I0)(),e=(0,x.v9)((function(n){return n.filter.filter}));return(0,g.jsxs)(C,{children:[(0,g.jsx)("span",{children:"Find contacts by name"}),(0,g.jsx)("input",{type:"text",value:e,onChange:function(e){var t=e.target.value;n((0,P.r)(t))}})]})},D=t(2791),F=t(1538);function I(){var n=(0,x.I0)(),e=(0,x.v9)(F.Vc),t=(0,x.v9)(F.by);return(0,D.useEffect)((function(){n((0,h.yF)())}),[n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h1",{children:"Phonebook"}),(0,g.jsx)(j,{}),e&&!t?(0,g.jsx)("b",{children:"Request in progress..."}):null,(0,g.jsx)("h2",{children:"Contacts"}),(0,g.jsx)(_,{}),(0,g.jsx)(k,{})]})}}}]);
//# sourceMappingURL=214.e97f8f44.chunk.js.map