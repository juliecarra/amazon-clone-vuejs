(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{252:function(t,e,r){"use strict";r.r(e);r(33);var n=r(10),c={asyncData:function(t){var e=t.$axios;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$get("http://localhost:8080/api/categories");case 3:return r=t.sent,t.abrupt("return",{categories:r.categories});case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},data:function(){return{type:""}},methods:{submitForm:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,data={type:t.type},e.next=4,t.$axios.$post("http://localhost:8080/api/categories",data);case 4:return e.sent,e.abrupt("return",t.categories.push(data));case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},o=r(21),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-3"}),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"a-section"},[r("div",{staticClass:"a-spacing-top-medium"}),t._v(" "),r("h2",{staticStyle:{"text-align":"center"}},[t._v("Add a new category")]),t._v(" "),r("form",[r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Type")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text"},domProps:{value:t.type},on:{input:function(e){e.target.composing||(t.type=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-large"},[r("span",{staticClass:"a-button-register"},[r("span",{staticClass:"a-button-inner"},[r("span",{staticClass:"a-button-text",on:{click:t.submitForm}},[t._v("Add Category")])])])])]),t._v(" "),r("br"),t._v(" "),t._l(t.categories,(function(e){return r("ul",{key:e._id,staticClass:"list-group-item"},[r("li",[t._v(t._s(e.type))])])}))],2)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);