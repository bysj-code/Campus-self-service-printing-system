(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"32d1":function(t,e,n){"use strict";var r=n("73ca"),a=n.n(r);a.a},"565f":function(t,e,n){"use strict";var r=n("691c"),a=n.n(r);a.a},"691c":function(t,e,n){},"73ca":function(t,e,n){},"807a":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},a31c:function(t,e,n){"use strict";n.r(e);var r=n("a9d1"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},a9d1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),a=o(n("dd2a"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,a,o,i){try{var u=t[o](i),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function u(t){i(o,r,a,u,s,"next",t)}function s(t){i(o,r,a,u,s,"throw",t)}u(void 0)}))}}var s={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu"],index:0,roleNum:0}},onLoad:function(){var t=["请选择登录用户类型"],e=a.default.list();this.menuList=e;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&(t.push(this.menuList[n].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=t,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(e){t.setStorageSync("loginTable",e),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var e=this;return u(r.default.mark((function n(){var a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.username){n.next=3;break}return e.$utils.msg("请输入用户名"),n.abrupt("return");case 3:if(e.password){n.next=6;break}return e.$utils.msg("请输入用户密码"),n.abrupt("return");case 6:if(e.optionsValues[e.index]){n.next=9;break}return e.$utils.msg("请选择登陆用户类型"),n.abrupt("return");case 9:return n.next=11,e.$api.login("".concat(e.optionsValues[e.index]),{username:e.username,password:e.password});case 11:return a=n.sent,t.removeStorageSync("useridTag"),t.setStorageSync("token",a.token),t.setStorageSync("nickname",e.username),t.setStorageSync("nowTable","".concat(e.optionsValues[e.index])),n.next=18,e.$api.session("".concat(e.optionsValues[e.index]));case 18:a=n.sent,t.setStorageSync("userid",a.data.id),a.data.vip&&t.setStorageSync("vip",a.data.vip),t.setStorageSync("role","".concat(e.options[e.index])),e.$utils.tab("../index/index");case 23:case"end":return n.stop()}}),n)})))()},optionsChange:function(t){this.index=t.target.value}}};e.default=s}).call(this,n("543d")["default"])},c743:function(t,e,n){"use strict";(function(t){n("7dff");r(n("66fd"));var e=r(n("cb2e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},cb2e:function(t,e,n){"use strict";n.r(e);var r=n("807a"),a=n("a31c");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("32d1"),n("565f");var i,u=n("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"66654734",null,!1,r["a"],i);e["default"]=s.exports}},[["c743","common/runtime","common/vendor"]]]);