(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinxinxi/add-or-update"],{"027f":function(n,i,e){"use strict";(function(n){e("d491"),e("921b");t(e("66fd"));var i=t(e("83dd"));function t(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},"0a1c":function(n,i,e){"use strict";e.r(i);var t=e("aafc"),a=e.n(t);for(var r in t)"default"!==r&&function(n){e.d(i,n,(function(){return t[n]}))}(r);i["default"]=a.a},"83dd":function(n,i,e){"use strict";e.r(i);var t=e("aa1c"),a=e("0a1c");for(var r in a)"default"!==r&&function(n){e.d(i,n,(function(){return a[n]}))}(r);e("f466");var u,s=e("f0c5"),h=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,"51f15855",null,!1,t["a"],u);i["default"]=h.exports},"97d1":function(n,i,e){},aa1c:function(n,i,e){"use strict";var t={"w-picker":function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"57a3"))}},a=function(){var n=this,i=n.$createElement;n._self._c},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return t}))},aafc:function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,i,e,t,a,r,u){try{var s=n[r](u),h=s.value}catch(o){return void e(o)}s.done?i(h):Promise.resolve(h).then(t,a)}function u(n){return function(){var i=this,e=arguments;return new Promise((function(t,a){var u=n.apply(i,e);function s(n){r(u,t,a,s,h,"next",n)}function h(n){r(u,t,a,s,h,"throw",n)}s(void 0)}))}}var s=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("57a3"))}.bind(null,e)).catch(e.oe)},h={data:function(){return{ruleForm:{shangpinmingcheng:"",shangpintupian:"",shangpinleixing:"",shangjiazhanghao:"",shangpumingcheng:"",shangpinyuanjia:"",shangpinxianjia:"",tuangouzuidirenshu:"",shangpinzhekou:"",tuangoukaishishijian:"",tuangoujieshushijian:"",shangpinmiaoshu:"",ketihuodian:"",reversetime:"",clicknum:"",jifen:"",price:""},shangpinleixingOptions:[],shangpinleixingIndex:0,ketihuodianOptions:[],ketihuodianIndex:0,user:{},ro:{shangpinmingcheng:!1,shangpintupian:!1,shangpinleixing:!1,shangjiazhanghao:!1,shangpumingcheng:!1,shangpinyuanjia:!1,shangpinxianjia:!1,tuangouzuidirenshu:!1,shangpinzhekou:!1,tuangoukaishishijian:!1,tuangoujieshushijian:!1,shangpinmiaoshu:!1,ketihuodian:!1,reversetime:!1,clicknum:!1,jifen:!1,price:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var i=u(t.default.mark((function i(e){var a,r,u,s;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=n.getStorageSync("nowTable"),i.next=3,this.$api.session(a);case 3:return r=i.sent,this.user=r.data,this.ruleForm.shangjiazhanghao=this.user.shangjiazhanghao,this.ruleForm.shangpumingcheng=this.user.shangpumingcheng,i.next=9,this.$api.option("shangpinfenlei","shangpinleixing",{});case 9:return r=i.sent,this.shangpinleixingOptions=r.data,i.next=13,this.$api.option("shequtihuodian","tihuodidian",{});case 13:if(r=i.sent,this.ketihuodianOptions=r.data,this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=23;break}return this.ruleForm.id=e.id,i.next=21,this.$api.info("shangpinxinxi",this.ruleForm.id);case 21:r=i.sent,this.ruleForm=r.data;case 23:if(!e.cross){i.next=98;break}u=n.getStorageSync("crossObj"),i.t0=t.default.keys(u);case 26:if((i.t1=i.t0()).done){i.next=98;break}if(s=i.t1.value,"shangpinmingcheng"!=s){i.next=32;break}return this.ruleForm.shangpinmingcheng=u[s],this.ro.shangpinmingcheng=!0,i.abrupt("continue",26);case 32:if("shangpintupian"!=s){i.next=36;break}return this.ruleForm.shangpintupian=u[s],this.ro.shangpintupian=!0,i.abrupt("continue",26);case 36:if("shangpinleixing"!=s){i.next=40;break}return this.ruleForm.shangpinleixing=u[s],this.ro.shangpinleixing=!0,i.abrupt("continue",26);case 40:if("shangjiazhanghao"!=s){i.next=44;break}return this.ruleForm.shangjiazhanghao=u[s],this.ro.shangjiazhanghao=!0,i.abrupt("continue",26);case 44:if("shangpumingcheng"!=s){i.next=48;break}return this.ruleForm.shangpumingcheng=u[s],this.ro.shangpumingcheng=!0,i.abrupt("continue",26);case 48:if("shangpinyuanjia"!=s){i.next=52;break}return this.ruleForm.shangpinyuanjia=u[s],this.ro.shangpinyuanjia=!0,i.abrupt("continue",26);case 52:if("shangpinxianjia"!=s){i.next=56;break}return this.ruleForm.shangpinxianjia=u[s],this.ro.shangpinxianjia=!0,i.abrupt("continue",26);case 56:if("tuangouzuidirenshu"!=s){i.next=60;break}return this.ruleForm.tuangouzuidirenshu=u[s],this.ro.tuangouzuidirenshu=!0,i.abrupt("continue",26);case 60:if("shangpinzhekou"!=s){i.next=64;break}return this.ruleForm.shangpinzhekou=u[s],this.ro.shangpinzhekou=!0,i.abrupt("continue",26);case 64:if("tuangoukaishishijian"!=s){i.next=68;break}return this.ruleForm.tuangoukaishishijian=u[s],this.ro.tuangoukaishishijian=!0,i.abrupt("continue",26);case 68:if("tuangoujieshushijian"!=s){i.next=72;break}return this.ruleForm.tuangoujieshushijian=u[s],this.ro.tuangoujieshushijian=!0,i.abrupt("continue",26);case 72:if("shangpinmiaoshu"!=s){i.next=76;break}return this.ruleForm.shangpinmiaoshu=u[s],this.ro.shangpinmiaoshu=!0,i.abrupt("continue",26);case 76:if("ketihuodian"!=s){i.next=80;break}return this.ruleForm.ketihuodian=u[s],this.ro.ketihuodian=!0,i.abrupt("continue",26);case 80:if("reversetime"!=s){i.next=84;break}return this.ruleForm.reversetime=u[s],this.ro.reversetime=!0,i.abrupt("continue",26);case 84:if("clicknum"!=s){i.next=88;break}return this.ruleForm.clicknum=u[s],this.ro.clicknum=!0,i.abrupt("continue",26);case 88:if("jifen"!=s){i.next=92;break}return this.ruleForm.jifen=u[s],this.ro.jifen=!0,i.abrupt("continue",26);case 92:if("price"!=s){i.next=96;break}return this.ruleForm.price=u[s],this.ro.price=!0,i.abrupt("continue",26);case 96:i.next=26;break;case 98:this.styleChange();case 99:case"end":return i.stop()}}),i,this)})));function e(n){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tuangoukaishishijianConfirm:function(n){console.log(n),this.ruleForm.tuangoukaishishijian=n.result,this.$forceUpdate()},tuangoujieshushijianConfirm:function(n){console.log(n),this.ruleForm.tuangoujieshushijian=n.result,this.$forceUpdate()},reversetimeConfirm:function(n){console.log(n),this.ruleForm.reversetime=n.result,this.$forceUpdate()},shangpinleixingChange:function(n){this.shangpinleixingIndex=n.target.value,this.ruleForm.shangpinleixing=this.shangpinleixingOptions[this.shangpinleixingIndex]},ketihuodianChange:function(n){this.ketihuodianIndex=n.target.value,this.ruleForm.ketihuodian=this.ketihuodianOptions[this.ketihuodianIndex]},shangpintupianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.shangpintupian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.shangpinyuanjia||this.$validate.isIntNumer(this.ruleForm.shangpinyuanjia)){n.next=3;break}return this.$utils.msg("商品原价应输入整数"),n.abrupt("return");case 3:if(!this.ruleForm.shangpinxianjia||this.$validate.isIntNumer(this.ruleForm.shangpinxianjia)){n.next=6;break}return this.$utils.msg("商品现价应输入整数"),n.abrupt("return");case 6:if(!this.ruleForm.tuangouzuidirenshu||this.$validate.isIntNumer(this.ruleForm.tuangouzuidirenshu)){n.next=9;break}return this.$utils.msg("团购最低人数应输入整数"),n.abrupt("return");case 9:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){n.next=12;break}return this.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 12:if(!this.ruleForm.jifen||this.$validate.isIntNumer(this.ruleForm.jifen)){n.next=15;break}return this.$utils.msg("积分应输入整数"),n.abrupt("return");case 15:if(this.ruleForm.price){n.next=18;break}return this.$utils.msg("价格不能为空"),n.abrupt("return");case 18:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){n.next=21;break}return this.$utils.msg("价格应输入数字"),n.abrupt("return");case 21:if(!this.ruleForm.id){n.next=26;break}return n.next=24,this.$api.update("shangpinxinxi",this.ruleForm);case 24:n.next=28;break;case 26:return n.next=28,this.$api.add("shangpinxinxi",this.ruleForm);case 28:this.$utils.msgBack("提交成功");case 29:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};i.default=h}).call(this,e("543d")["default"])},f466:function(n,i,e){"use strict";var t=e("97d1"),a=e.n(t);a.a}},[["027f","common/runtime","common/vendor"]]]);