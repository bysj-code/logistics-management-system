(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{"04b3":function(t,e,n){"use strict";n.r(e);var i=n("31d5"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"31d5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,r,a,u){try{var s=t[a](u),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(i,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var u=t.apply(e,n);function s(t){a(u,i,r,s,o,"next",t)}function o(t){a(u,i,r,s,o,"throw",t)}s(void 0)}))}}var s=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},o=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{yonghuzhanghao:"",mima:"",yonghuxingming:"",touxiang:"",xingbie:"",nianling:"",shouji:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yonghuzhanghao:!1,mima:!1,yonghuxingming:!1,touxiang:!1,xingbie:!1,nianling:!1,shouji:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=u(i.default.mark((function e(n){var r,a,u,s;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(a=e.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=t.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!n.id){e.next=14;break}return this.ruleForm.id=n.id,e.next=12,this.$api.info("yonghu",this.ruleForm.id);case 12:a=e.sent,this.ruleForm=a.data;case 14:if(this.cross=n.cross,!n.cross){e.next=50;break}u=t.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 18:if((e.t1=e.t0()).done){e.next=50;break}if(s=e.t1.value,"yonghuzhanghao"!=s){e.next=24;break}return this.ruleForm.yonghuzhanghao=u[s],this.ro.yonghuzhanghao=!0,e.abrupt("continue",18);case 24:if("mima"!=s){e.next=28;break}return this.ruleForm.mima=u[s],this.ro.mima=!0,e.abrupt("continue",18);case 28:if("yonghuxingming"!=s){e.next=32;break}return this.ruleForm.yonghuxingming=u[s],this.ro.yonghuxingming=!0,e.abrupt("continue",18);case 32:if("touxiang"!=s){e.next=36;break}return this.ruleForm.touxiang=u[s].split(",")[0],this.ro.touxiang=!0,e.abrupt("continue",18);case 36:if("xingbie"!=s){e.next=40;break}return this.ruleForm.xingbie=u[s],this.ro.xingbie=!0,e.abrupt("continue",18);case 40:if("nianling"!=s){e.next=44;break}return this.ruleForm.nianling=u[s],this.ro.nianling=!0,e.abrupt("continue",18);case 44:if("shouji"!=s){e.next=48;break}return this.ruleForm.shouji=u[s],this.ro.shouji=!0,e.abrupt("continue",18);case 48:e.next=18;break;case 50:this.styleChange();case 51:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(t){this.xingbieIndex=t.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.touxiang="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){var n,r,a,u,s,o,c,h,l,g;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.yonghuzhanghao){e.next=3;break}return this.$utils.msg("用户账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.yonghuxingming){e.next=9;break}return this.$utils.msg("用户姓名不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){e.next=12;break}return this.$utils.msg("年龄应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=15;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 15:if(!this.cross){e.next=31;break}if(s=t.getStorageSync("statusColumnName"),o=t.getStorageSync("statusColumnValue"),""==s){e.next=31;break}if(n||(n=t.getStorageSync("crossObj")),s.startsWith("[")){e.next=27;break}for(c in n)c==s&&(n[c]=o);return h=t.getStorageSync("crossTable"),e.next=25,this.$api.update("".concat(h),n);case 25:e.next=31;break;case 27:r=Number(t.getStorageSync("userid")),a=n["id"],u=t.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 31:if(!a||!r){e.next=53;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,l={page:1,limit:10,crossuserid:r,crossrefid:a},e.next=37,this.$api.list("yonghu",l);case 37:if(g=e.sent,!(g.data.total>=u)){e.next=43;break}return this.$utils.msg(t.getStorageSync("tips")),e.abrupt("return",!1);case 43:if(!this.ruleForm.id){e.next=48;break}return e.next=46,this.$api.update("yonghu",this.ruleForm);case 46:e.next=50;break;case 48:return e.next=50,this.$api.add("yonghu",this.ruleForm);case 50:this.$utils.msgBack("提交成功");case 51:e.next=61;break;case 53:if(!this.ruleForm.id){e.next=58;break}return e.next=56,this.$api.update("yonghu",this.ruleForm);case 56:e.next=60;break;case 58:return e.next=60,this.$api.add("yonghu",this.ruleForm);case 60:this.$utils.msgBack("提交成功");case 61:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(t){this.$refs[t].show()}}};e.default=c}).call(this,n("543d")["default"])},"6e35":function(t,e,n){"use strict";n.r(e);var i=n("e261"),r=n("04b3");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("d678");var u,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"4019143e",null,!1,i["a"],u);e["default"]=o.exports},"8cd8":function(t,e,n){},c490:function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");i(n("66fd"));var e=i(n("6e35"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d678:function(t,e,n){"use strict";var i=n("8cd8"),r=n.n(i);r.a},e261:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.ruleForm.touxiang.split(","));t.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))}},[["c490","common/runtime","common/vendor"]]]);