(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/peisongxinxi/list"],{"3d6c":function(t,i,n){"use strict";(function(t){n("6cdc"),n("921b");e(n("66fd"));var i=e(n("fd55"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("543d")["createPage"])},"5c02":function(t,i,n){"use strict";n.r(i);var e=n("976b"),s=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=s.a},7688:function(t,i,n){"use strict";var e={"mescroll-uni":()=>Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"f05e"))},s=function(){var t=this,i=t.$createElement,n=(t._self._c,t.isAuth("peisongxinxi","修改")),e=t.isAuthFront("peisongxinxi","修改"),s=t.isAuth("peisongxinxi","删除"),r=t.isAuthFront("peisongxinxi","删除"),a=t.isAuth("peisongxinxi","新增"),o=t.isAuthFront("peisongxinxi","新增");t.$mp.data=Object.assign({},{$root:{m0:n,m1:e,m2:s,m3:r,m4:a,m5:o}})},r=[];n.d(i,"b",(function(){return s})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return e}))},"85d2":function(t,i,n){"use strict";var e=n("feea"),s=n.n(e);s.a},"976b":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=s(n("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,i,n,e,s,r,a){try{var o=t[r](a),u=o.value}catch(c){return void n(c)}o.done?i(u):Promise.resolve(u).then(e,s)}function a(t){return function(){var i=this,n=arguments;return new Promise((function(e,s){var a=t.apply(i,n);function o(t){r(a,e,s,o,u,"next",t)}function u(t){r(a,e,s,o,u,"throw",t)}o(void 0)}))}}var o={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"快递单号"},{queryName:"用户姓名"},{queryName:"物品分类"},{queryName:"员工姓名"}],queryIndex:0,list:[],lists:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0"}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var t=a(e.default.mark((function t(){return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 3:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),onLoad:function(t){t.userid?this.userid=t.userid:this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.kuaididanhao="",this.searchForm.yonghuxingming="",this.searchForm.wupinfenlei="",this.searchForm.yuangongxingming=""},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=a(e.default.mark((function t(i){var n,s,r,a,o;return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={page:i.num,limit:i.size},this.searchForm.kuaididanhao&&(n["kuaididanhao"]="%"+this.searchForm.kuaididanhao+"%"),this.searchForm.yonghuxingming&&(n["yonghuxingming"]="%"+this.searchForm.yonghuxingming+"%"),this.searchForm.wupinfenlei&&(n["wupinfenlei"]="%"+this.searchForm.wupinfenlei+"%"),this.searchForm.yuangongxingming&&(n["yuangongxingming"]="%"+this.searchForm.yuangongxingming+"%"),s={},!this.userid){t.next=12;break}return t.next=9,this.$api.page("peisongxinxi",n);case 9:s=t.sent,t.next=15;break;case 12:return t.next=14,this.$api.list("peisongxinxi",n);case 14:s=t.sent;case 15:for(1==i.num&&(this.list=[]),this.list=this.list.concat(s.data.list),r=Math.ceil(this.list.length/6),a=[],o=0;o<r;o++)a[o]=this.list.slice(6*o,6*(o+1));this.lists=a,0==s.data.list.length&&(this.hasNext=!1),i.endSuccess(i.size,this.hasNext);case 23:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onDetailTap:function(i){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(i.id,"&userid=")+this.userid)},onUpdateTap:function(i){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(i))},onAddTap:function(){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDeleteTap:function(i){var n=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=a(e.default.mark((function t(s){return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!s.confirm){t.next=5;break}return t.next=3,n.$api.del("peisongxinxi",JSON.stringify([i]));case 3:n.hasNext=!0,n.mescroll.resetUpScroll();case 5:case"end":return t.stop()}}),t)})));function s(i){return t.apply(this,arguments)}return s}()})},search:function(){var t=a(e.default.mark((function t(){var i,n,s,r,a;return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.mescroll.num=1,i={page:this.mescroll.num,limit:this.mescroll.size},this.searchForm.kuaididanhao&&(i["kuaididanhao"]="%"+this.searchForm.kuaididanhao+"%"),this.searchForm.yonghuxingming&&(i["yonghuxingming"]="%"+this.searchForm.yonghuxingming+"%"),this.searchForm.wupinfenlei&&(i["wupinfenlei"]="%"+this.searchForm.wupinfenlei+"%"),this.searchForm.yuangongxingming&&(i["yuangongxingming"]="%"+this.searchForm.yuangongxingming+"%"),n={},!this.userid){t.next=13;break}return t.next=10,this.$api.page("peisongxinxi",i);case 10:n=t.sent,t.next=16;break;case 13:return t.next=15,this.$api.list("peisongxinxi",i);case 15:n=t.sent;case 16:for(1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(n.data.list),s=Math.ceil(this.list.length/6),r=[],a=0;a<s;a++)r[a]=this.list.slice(6*a,6*(a+1));this.lists=r,0==n.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 24:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()}};i.default=o}).call(this,n("543d")["default"])},fd55:function(t,i,n){"use strict";n.r(i);var e=n("7688"),s=n("5c02");for(var r in s)"default"!==r&&function(t){n.d(i,t,(function(){return s[t]}))}(r);n("85d2");var a,o=n("f0c5"),u=Object(o["a"])(s["default"],e["b"],e["c"],!1,null,"139b3d87",null,!1,e["a"],a);i["default"]=u.exports},feea:function(t,i,n){}},[["3d6c","common/runtime","common/vendor"]]]);