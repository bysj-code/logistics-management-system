(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cangchuxinxi/list"],{"0827":function(t,n,i){"use strict";(function(t){i("6cdc"),i("921b");e(i("66fd"));var n=e(i("b871"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("543d")["createPage"])},"573f":function(t,n,i){"use strict";var e={"mescroll-uni":()=>Promise.all([i.e("common/vendor"),i.e("components/mescroll-uni/mescroll-uni")]).then(i.bind(null,"f05e"))},s=function(){var t=this,n=t.$createElement,i=(t._self._c,t.isAuth("cangchuxinxi","修改")),e=t.isAuthFront("cangchuxinxi","修改"),s=t.isAuth("cangchuxinxi","删除"),a=t.isAuthFront("cangchuxinxi","删除"),r=t.isAuth("cangchuxinxi","新增"),u=t.isAuthFront("cangchuxinxi","新增");t.$mp.data=Object.assign({},{$root:{m0:i,m1:e,m2:s,m3:a,m4:r,m5:u}})},a=[];i.d(n,"b",(function(){return s})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}))},"7a8c":function(t,n,i){},a7ab:function(t,n,i){"use strict";i.r(n);var e=i("c150"),s=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=s.a},b871:function(t,n,i){"use strict";i.r(n);var e=i("573f"),s=i("a7ab");for(var a in s)"default"!==a&&function(t){i.d(n,t,(function(){return s[t]}))}(a);i("d19a");var r,u=i("f0c5"),c=Object(u["a"])(s["default"],e["b"],e["c"],!1,null,"a7b7907e",null,!1,e["a"],r);n["default"]=c.exports},c150:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=s(i("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,n,i,e,s,a,r){try{var u=t[a](r),c=u.value}catch(o){return void i(o)}u.done?n(c):Promise.resolve(c).then(e,s)}function r(t){return function(){var n=this,i=arguments;return new Promise((function(e,s){var r=t.apply(n,i);function u(t){a(r,e,s,u,c,"next",t)}function c(t){a(r,e,s,u,c,"throw",t)}u(void 0)}))}}var u={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"快递单号"},{queryName:"用户姓名"},{queryName:"物品分类"},{queryName:"员工姓名"}],queryIndex:0,list:[],lists:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0"}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var t=r(e.default.mark((function t(){return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 3:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onLoad:function(t){t.userid?this.userid=t.userid:this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.kuaididanhao="",this.searchForm.yonghuxingming="",this.searchForm.wupinfenlei="",this.searchForm.yuangongxingming=""},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=r(e.default.mark((function t(n){var i,s,a,r,u;return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i={page:n.num,limit:n.size},this.searchForm.kuaididanhao&&(i["kuaididanhao"]="%"+this.searchForm.kuaididanhao+"%"),this.searchForm.yonghuxingming&&(i["yonghuxingming"]="%"+this.searchForm.yonghuxingming+"%"),this.searchForm.wupinfenlei&&(i["wupinfenlei"]="%"+this.searchForm.wupinfenlei+"%"),this.searchForm.yuangongxingming&&(i["yuangongxingming"]="%"+this.searchForm.yuangongxingming+"%"),s={},!this.userid){t.next=12;break}return t.next=9,this.$api.page("cangchuxinxi",i);case 9:s=t.sent,t.next=15;break;case 12:return t.next=14,this.$api.list("cangchuxinxi",i);case 14:s=t.sent;case 15:for(1==n.num&&(this.list=[]),this.list=this.list.concat(s.data.list),a=Math.ceil(this.list.length/6),r=[],u=0;u<a;u++)r[u]=this.list.slice(6*u,6*(u+1));this.lists=r,0==s.data.list.length&&(this.hasNext=!1),n.endSuccess(n.size,this.hasNext);case 23:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onDetailTap:function(n){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(n.id,"&userid=")+this.userid)},onUpdateTap:function(n){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(n))},onAddTap:function(){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDeleteTap:function(n){var i=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=r(e.default.mark((function t(s){return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!s.confirm){t.next=5;break}return t.next=3,i.$api.del("cangchuxinxi",JSON.stringify([n]));case 3:i.hasNext=!0,i.mescroll.resetUpScroll();case 5:case"end":return t.stop()}}),t)})));function s(n){return t.apply(this,arguments)}return s}()})},search:function(){var t=r(e.default.mark((function t(){var n,i,s,a,r;return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.mescroll.num=1,n={page:this.mescroll.num,limit:this.mescroll.size},this.searchForm.kuaididanhao&&(n["kuaididanhao"]="%"+this.searchForm.kuaididanhao+"%"),this.searchForm.yonghuxingming&&(n["yonghuxingming"]="%"+this.searchForm.yonghuxingming+"%"),this.searchForm.wupinfenlei&&(n["wupinfenlei"]="%"+this.searchForm.wupinfenlei+"%"),this.searchForm.yuangongxingming&&(n["yuangongxingming"]="%"+this.searchForm.yuangongxingming+"%"),i={},!this.userid){t.next=13;break}return t.next=10,this.$api.page("cangchuxinxi",n);case 10:i=t.sent,t.next=16;break;case 13:return t.next=15,this.$api.list("cangchuxinxi",n);case 15:i=t.sent;case 16:for(1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(i.data.list),s=Math.ceil(this.list.length/6),a=[],r=0;r<s;r++)a[r]=this.list.slice(6*r,6*(r+1));this.lists=a,0==i.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 24:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}};n.default=u}).call(this,i("543d")["default"])},d19a:function(t,n,i){"use strict";var e=i("7a8c"),s=i.n(e);s.a}},[["0827","common/runtime","common/vendor"]]]);