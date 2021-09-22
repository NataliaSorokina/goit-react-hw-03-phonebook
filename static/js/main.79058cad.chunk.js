(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,n,e){},24:function(t,n,e){"use strict";e.r(n);var a,c,o,r,i,s,l,u,p,d,b=e(1),h=e.n(b),f=e(9),m=e.n(f),g=(e(18),e(19),e(12)),j=e(4),x=e(5),O=e(7),v=e(6),C=e(26),y=e(2),w=e(3),S=w.a.h1(a||(a=Object(y.a)(["\n  font-weight: 700;\n  font-size: 32px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n"]))),k=w.a.h2(c||(c=Object(y.a)(["\n  margin: 0;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 26px;\n"]))),A=e(0),z=function(t){var n=t.title,e=t.children;return Object(A.jsxs)("section",{children:[Object(A.jsx)(k,{children:n}),e]})},D=e(11),F=w.a.form(o||(o=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),I=w.a.label(r||(r=Object(y.a)(["\n  font-weight: 500;\n  font-size: 18px;\n  margin: 10px;\n"]))),J=w.a.input(i||(i=Object(y.a)(["\n  padding: 4px;\n  margin-left: 10px;\n"]))),T=w.a.button(s||(s=Object(y.a)(["\n  width: auto;\n  height: 40px;\n  font-weight: normal;\n  font-size: 16px;\n  margin: 20px;\n  padding: 10px 20px;\n  color: #fff;\n  background-color: dodgerblue;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  border: none;\n  &:hover {\n    cursor: pointer;\n    background-color: rgb(39, 24, 245);\n  }\n"]))),H=function(t){Object(O.a)(e,t);var n=Object(v.a)(e);function e(){var t;Object(j.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(n){var e=n.currentTarget,a=e.name,c=e.value;t.setState(Object(D.a)({},a,c))},t.handleSubmit=function(n){n.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(x.a)(e,[{key:"render",value:function(){return Object(A.jsxs)(F,{onSubmit:this.handleSubmit,children:[Object(A.jsxs)(I,{htmlFor:"name",children:["Name",Object(A.jsx)(J,{type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(A.jsxs)(I,{htmlFor:"number",children:["Number",Object(A.jsx)(J,{type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(A.jsx)(T,{type:"submit",children:"Add contact"})]})}}]),e}(b.Component),L=H,M=w.a.ul(l||(l=Object(y.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 15px;\n"]))),N=w.a.li(u||(u=Object(y.a)(["\n  display: flex;\n  flex-basis: 1/3;\n  width: 30%;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 20px;\n  font-weight: 500;\n  font-size: 18px;\n"]))),B=function(t){var n=t.contacts,e=t.onDeleteContact;return Object(A.jsx)(M,{children:n.map((function(t){return Object(A.jsxs)(N,{children:[t.name,": ",t.number,Object(A.jsx)(T,{type:"button",onClick:function(){return e(t.id)},children:"Delete"})]},t.id)}))})},P=w.a.label(p||(p=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-weight: 400;\n  font-size: 18px;\n  margin-top: 10px;\n"]))),Z=w.a.input(d||(d=Object(y.a)(["\n  margin-top: 10px;\n  padding: 4px;\n"]))),q=function(t){var n=t.value,e=t.onChange;return Object(A.jsxs)(P,{children:["Find contacts by name"," ",Object(A.jsx)(Z,{type:"text",value:n,onChange:e})]})},U=function(t){Object(O.a)(e,t);var n=Object(v.a)(e);function e(){var t;Object(j.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(n){var e=t.state.contacts,a=n.name,c=n.number,o={id:Object(C.a)(),name:a,number:c};e.some((function(t){return t.name===o.name}))?alert("".concat(o.name," is already in contacts")):t.setState({contacts:[].concat(Object(g.a)(t.state.contacts),[o])})},t.filterChangeHandler=function(n){console.log(n.currentTarget.value),t.setState({filter:n.currentTarget.value})},t.getfilteredContacts=function(){var n=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(n)}))},t.deleteContact=function(n){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t}return Object(x.a)(e,[{key:"componentDidMount",value:function(){console.log("App componentDidMount");var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,n){console.log("App componentDidUpdate"),console.log(n),console.log(this.state),this.state.contacts!==n.contacts&&(console.log("Contacts updated"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){console.log("App render");var t=this.getfilteredContacts();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(S,{children:"Phonebook"}),Object(A.jsx)(L,{onSubmit:this.formSubmitHandler}),Object(A.jsxs)(z,{title:"Contacts",children:[Object(A.jsx)(q,{value:this.state.filter,onChange:this.filterChangeHandler}),Object(A.jsx)(B,{contacts:t,onDeleteContact:this.deleteContact})]})]})}}]),e}(h.a.Component),E=U,$=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,27)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,r=n.getTTFB;e(t),a(t),c(t),o(t),r(t)}))};m.a.render(Object(A.jsx)(h.a.StrictMode,{children:Object(A.jsx)(E,{})}),document.getElementById("root")),$()}},[[24,1,2]]]);
//# sourceMappingURL=main.79058cad.chunk.js.map