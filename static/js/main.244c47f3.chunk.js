(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),o=c(5),r=c(8),l=c(7),d=c(1),i=c.n(d),u=(c(13),c(14),c(6)),b=c.n(u),j=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.clearGoods=function(){e.setState({selectedGood:""})},e.addGoods=function(t){e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood,c=t?"".concat(t," is selected"):"No goods selected";return Object(j.jsxs)("main",{className:"section container",children:[Object(j.jsx)("h1",{className:"title",children:c}),Object(j.jsx)("h1",{className:"title is-flex is-align-items-center",children:t&&Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.clearGoods})}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(c){return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":t===c}),children:[Object(j.jsxs)("td",{children:[t!==c&&Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.addGoods(c)},children:"+"}),t===c&&Object(j.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return e.clearGoods()},children:"-"})]}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.a.Component);n.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.244c47f3.chunk.js.map