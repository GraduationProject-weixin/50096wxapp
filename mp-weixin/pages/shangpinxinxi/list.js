(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinxinxi/list"],{"58a5":function(t,n,e){"use strict";e.r(n);var i=e("9a02"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},6868:function(t,n,e){"use strict";var i={"mescroll-uni":function(){return Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"3b84"))}},r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.isAuth("shangpinxinxi","修改")),i=t.isAuth("shangpinxinxi","删除"),r=t.__map(t.list,(function(n,e){var i=n.shangpintupian.split(",");return{$orig:t.__get_orig(n),g0:i}})),a=t.isAuth("shangpinxinxi","新增");t.$mp.data=Object.assign({},{$root:{m0:e,m1:i,l0:r,m2:a}})},a=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},7054:function(t,n,e){"use strict";var i=e("7c74"),r=e.n(i);r.a},"7c74":function(t,n,e){},"9a02":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,i,r,a,s){try{var o=t[a](s),c=o.value}catch(u){return void e(u)}o.done?n(c):Promise.resolve(c).then(i,r)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var s=t.apply(n,e);function o(t){a(s,i,r,o,c,"next",t)}function c(t){a(s,i,r,o,c,"throw",t)}o(void 0)}))}}var o={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"商品名称"},{queryName:"可提货点"}],sactiveItem:{padding:"0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"rgba(242, 199, 68, 1)",color:"rgba(0, 0, 0, 1)",borderRadius:"40rpx",borderWidth:"2rpx",width:"auto",lineHeight:"56rpx",fontSize:"24rpx",borderStyle:"solid"},sitem:{padding:"0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(215, 215, 215, 1)",backgroundColor:"rgba(247, 247, 247, 1)",color:"#333",borderRadius:"40rpx",borderWidth:"2rpx",width:"auto",lineHeight:"56rpx",fontSize:"24rpx",borderStyle:"solid"},queryIndex:0,list:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},categoryList:[],categoryName:"全部",CustomBar:"0"}},onShow:function(){var t=s(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),t.next=3,this.$api.list("shangpinfenlei",{page:1,limit:100});case 3:n=t.sent,n.data.list.splice(0,0,{id:0,shangpinleixing:"全部"}),this.categoryList=n.data.list,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onLoad:function(){this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.shangpinmingcheng="",this.searchForm.ketihuodian=""},categoryClick:function(t){this.categoryName=t,this.mescroll.resetUpScroll()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=s(i.default.mark((function t(n){var e,r;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:n.num,limit:n.size},"全部"!=this.categoryName&&(e.shangpinleixing="%"+this.categoryName+"%"),t.next=4,this.$api.list("shangpinxinxi",e);case 4:r=t.sent,1==n.num&&(this.list=[]),this.list=this.list.concat(r.data.list),0==r.data.list.length&&(this.hasNext=!1),n.endSuccess(n.size,this.hasNext);case 9:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onDetailTap:function(t){this.$utils.jump("./detail?id=".concat(t.id))},onUpdateTap:function(t){this.$utils.jump("./add-or-update?id=".concat(t))},onAddTap:function(){this.$utils.jump("./add-or-update")},onDeleteTap:function(n){var e=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=s(i.default.mark((function t(r){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.confirm){t.next=5;break}return t.next=3,e.$api.del("shangpinxinxi",JSON.stringify([n]));case 3:e.hasNext=!0,e.mescroll.resetUpScroll();case 5:case"end":return t.stop()}}),t)})));function r(n){return t.apply(this,arguments)}return r}()})},search:function(){var t=s(i.default.mark((function t(){var n,e;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.mescroll.num=1,n={page:this.mescroll.num,limit:this.mescroll.size},this.searchForm.shangpinmingcheng&&(n["shangpinmingcheng"]="%"+this.searchForm.shangpinmingcheng+"%"),this.searchForm.ketihuodian&&(n["ketihuodian"]="%"+this.searchForm.ketihuodian+"%"),t.next=6,this.$api.list("shangpinxinxi",n);case 6:e=t.sent,1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(e.data.list),0==e.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 11:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}};n.default=o}).call(this,e("543d")["default"])},c440:function(t,n,e){"use strict";e.r(n);var i=e("6868"),r=e("58a5");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("7054");var s,o=e("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=c.exports},c536:function(t,n,e){"use strict";(function(t){e("d491"),e("921b");i(e("66fd"));var n=i(e("c440"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["c536","common/runtime","common/vendor"]]]);