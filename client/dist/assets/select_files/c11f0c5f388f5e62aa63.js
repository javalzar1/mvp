(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1131:function(t,e,o){"use strict";var r=o(999),n=o.n(r);e.default=n.a},1132:function(t,e,o){(e=o(43)(!1)).push([t.i,".or_KAbip{font-size:.875rem;color:#8f95b3}",""]),e.locals={or:"or_KAbip"},t.exports=e},1168:function(t,e,o){"use strict";var r=o(1131),n=o(23);var component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-row mt-5 mb-5"},[this._m(0),this._v(" "),e("div",{class:["col-auto",this.$style.or]},[this._v("or")]),this._v(" "),this._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("hr")])}],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.a=component.exports},1266:function(t,e,o){"use strict";o(40);var r=o(8),n=o(995),l=o(1170),c=o(5),m=(o(922),o(924)),d=o(26),f=o(187),v={$_veeValidate:{validator:"new"},components:{BFormInput:n.a,BFormGroup:l.a},mixins:[f.a],props:{email:{type:String,default:null}},data:function(){return{form:new m.a({email:this.email,password:null,remember:!1},this.$validator)}},methods:{onSubmit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Object(d.c)("/api/v2/login",{subscriptions:!0}),e.next=3,t.form.post(o);case 3:t.$amplitude.getInstance().logEvent("login",{type:"email"}),c.default.gtm.trackEvent({event:"login",category:"email"}),"redirect"in t.$route.query?window.location.href=t.$route.query.redirect:(window.location.reload(),t.$root.$emit("bv::hide::modal","modalAuthLogin"));case 6:case"end":return e.stop()}}),e)})))()}}},h=o(23),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[o("b-form-group",{staticClass:"mb-4"},[o("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{type:"text",name:"email",placeholder:t.$t("user.email"),"data-vv-as":t.$t("user.email"),state:t.errors.has("email")?"invalid":null},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email","string"==typeof e?e.trim():e)},expression:"form.email"}})],1),t._v(" "),o("b-form-group",{staticClass:"my-4"},[o("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"password",name:"password",placeholder:t.$t("auth.password"),"data-vv-as":t.$t("auth.password"),state:t.errors.has("password")?"invalid":null},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password","string"==typeof e?e.trim():e)},expression:"form.password"}})],1),t._v(" "),o("button",{class:["btn btn-primary btn-block",t.form.isLoading?t.form.loadingClass:""],attrs:{type:"submit"}},[t._v("\n    "+t._s(t.$t("auth.login"))+"\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports},1978:function(t,e,o){var content=o(2716);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("ea9c109e",content,!0,{sourceMap:!1})},2715:function(t,e,o){"use strict";var r=o(1978),n=o.n(r);e.default=n.a},2716:function(t,e,o){(e=o(43)(!1)).push([t.i,".modal_3NW6G .modal-dialog{max-width:440px!important}.modal_3NW6G .btnForgotPassword_13tFG{font-weight:400;text-align:center}",""]),e.locals={modal:"modal_3NW6G",btnForgotPassword:"btnForgotPassword_13tFG"},t.exports=e},2912:function(t,e,o){"use strict";o.r(e);var r=o(153),n=o(1266),l=o(1275),c=o(1168),m={components:{BModal:r.a,LoginForm:n.a,Social:l.a,OrH:c.a},methods:{goToSignUp:function(){this.$root.$emit("bv::show::modal","modalAuthSignup"),this.$root.$emit("bv::hide::modal","modalAuthLogin")}}},d=o(2715),f=o(23);var component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{attrs:{id:"modalAuthLogin","modal-class":["modalAuth",t.$style.modal],centered:"","no-fade":!1,lazy:""}},[o("div",{attrs:{slot:"modal-header"},slot:"modal-header"},[o("h4",{staticClass:"h2 mb-2"},[t._v(t._s(t.$t("modals.auth.login.title")))])]),t._v(" "),o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-md-11"},[o("social",{attrs:{type:"login"}}),t._v(" "),o("or-h"),t._v(" "),o("login-form"),t._v(" "),o("div",{staticClass:"text-center mt-4"},[o("a",{class:["text-secondary font-size-sm",t.$style.btnForgotPassword],attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$root.$emit("bv::show::modal","modalAuthForgotPassword")}}},[t._v(t._s(t.$t("auth.forgot_password")))])])],1)]),t._v(" "),o("div",{staticClass:"font-size-sm",attrs:{slot:"modal-footer"},slot:"modal-footer"},[o("span",{staticClass:"text-muted font-weight-normal mr-1"},[t._v(t._s(t.$t("auth.dont_have_account")))]),t._v(" "),o("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goToSignUp(e)}}},[t._v(t._s(t.$t("auth.signup_long")))]),t._v(".\n  ")])])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},999:function(t,e,o){var content=o(1132);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("4c7ee325",content,!0,{sourceMap:!1})}}]);
//# sourceMappingURL=c11f0c5f388f5e62aa63.js.map