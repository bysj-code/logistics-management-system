(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yunshuxinxi-add-or-update"],{"0f11":function(e,r,n){var t=n("24fb");r=t(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-55cac9b0]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=r},"1b5f":function(e,r,n){"use strict";var t=n("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n("a481"),n("c5f6"),n("f559"),n("ac6a"),n("96cf");var i=t(n("3b8d")),o=t(n("e2b1")),a=t(n("064f")),u={data:function(){return{cross:"",ruleForm:{kuaididanhao:"",yonghuzhanghao:"",yonghuxingming:"",shouji:"",wupinmingcheng:"",wupinfenlei:"",shuliang:"",zhongliang:"",feiyong:"",shoujianren:"",shoujiandizhi:"",lianxishouji:"",quhuofangshi:"",zhifuleibie:"",yunshushijian:"",yunshuyuan:"",yuangongxingming:"",bumen:"",wuliuxinxi:"",yunshuluxian:"",crossuserid:"",crossrefid:""},yunshuyuanOptions:[],yunshuyuanIndex:0,user:{},ro:{kuaididanhao:!1,yonghuzhanghao:!1,yonghuxingming:!1,shouji:!1,wupinmingcheng:!1,wupinfenlei:!1,shuliang:!1,zhongliang:!1,feiyong:!1,shoujianren:!1,shoujiandizhi:!1,lianxishouji:!1,quhuofangshi:!1,zhifuleibie:!1,yunshushijian:!1,yunshuyuan:!1,yuangongxingming:!1,bumen:!1,wuliuxinxi:!1,yunshuluxian:!1,crossuserid:!1,crossrefid:!1}}},components:{wPicker:o.default,xiaEditor:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(r){var n,t,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.yunshushijian=this.$utils.getCurDateTime(),n=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:return t=e.sent,this.user=t.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.shouji=this.user.shouji,this.ro.shouji=!0,this.ro.kuaididanhao=!0,e.next=15,this.$api.option("yuangong","yuangonggonghao",{});case 15:if(t=e.sent,this.yunshuyuanOptions=t.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=25;break}return this.ruleForm.id=r.id,e.next=23,this.$api.info("yunshuxinxi",this.ruleForm.id);case 23:t=e.sent,this.ruleForm=t.data;case 25:if(this.cross=r.cross,!r.cross){e.next=121;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 29:if((e.t1=e.t0()).done){e.next=121;break}if(o=e.t1.value,"kuaididanhao"!=o){e.next=35;break}return this.ruleForm.kuaididanhao=i[o],this.ro.kuaididanhao=!0,e.abrupt("continue",29);case 35:if("yonghuzhanghao"!=o){e.next=39;break}return this.ruleForm.yonghuzhanghao=i[o],this.ro.yonghuzhanghao=!0,e.abrupt("continue",29);case 39:if("yonghuxingming"!=o){e.next=43;break}return this.ruleForm.yonghuxingming=i[o],this.ro.yonghuxingming=!0,e.abrupt("continue",29);case 43:if("shouji"!=o){e.next=47;break}return this.ruleForm.shouji=i[o],this.ro.shouji=!0,e.abrupt("continue",29);case 47:if("wupinmingcheng"!=o){e.next=51;break}return this.ruleForm.wupinmingcheng=i[o],this.ro.wupinmingcheng=!0,e.abrupt("continue",29);case 51:if("wupinfenlei"!=o){e.next=55;break}return this.ruleForm.wupinfenlei=i[o],this.ro.wupinfenlei=!0,e.abrupt("continue",29);case 55:if("shuliang"!=o){e.next=59;break}return this.ruleForm.shuliang=i[o],this.ro.shuliang=!0,e.abrupt("continue",29);case 59:if("zhongliang"!=o){e.next=63;break}return this.ruleForm.zhongliang=i[o],this.ro.zhongliang=!0,e.abrupt("continue",29);case 63:if("feiyong"!=o){e.next=67;break}return this.ruleForm.feiyong=i[o],this.ro.feiyong=!0,e.abrupt("continue",29);case 67:if("shoujianren"!=o){e.next=71;break}return this.ruleForm.shoujianren=i[o],this.ro.shoujianren=!0,e.abrupt("continue",29);case 71:if("shoujiandizhi"!=o){e.next=75;break}return this.ruleForm.shoujiandizhi=i[o],this.ro.shoujiandizhi=!0,e.abrupt("continue",29);case 75:if("lianxishouji"!=o){e.next=79;break}return this.ruleForm.lianxishouji=i[o],this.ro.lianxishouji=!0,e.abrupt("continue",29);case 79:if("quhuofangshi"!=o){e.next=83;break}return this.ruleForm.quhuofangshi=i[o],this.ro.quhuofangshi=!0,e.abrupt("continue",29);case 83:if("zhifuleibie"!=o){e.next=87;break}return this.ruleForm.zhifuleibie=i[o],this.ro.zhifuleibie=!0,e.abrupt("continue",29);case 87:if("yunshushijian"!=o){e.next=91;break}return this.ruleForm.yunshushijian=i[o],this.ro.yunshushijian=!0,e.abrupt("continue",29);case 91:if("yunshuyuan"!=o){e.next=95;break}return this.ruleForm.yunshuyuan=i[o],this.ro.yunshuyuan=!0,e.abrupt("continue",29);case 95:if("yuangongxingming"!=o){e.next=99;break}return this.ruleForm.yuangongxingming=i[o],this.ro.yuangongxingming=!0,e.abrupt("continue",29);case 99:if("bumen"!=o){e.next=103;break}return this.ruleForm.bumen=i[o],this.ro.bumen=!0,e.abrupt("continue",29);case 103:if("wuliuxinxi"!=o){e.next=107;break}return this.ruleForm.wuliuxinxi=i[o],this.ro.wuliuxinxi=!0,e.abrupt("continue",29);case 107:if("yunshuluxian"!=o){e.next=111;break}return this.ruleForm.yunshuluxian=i[o],this.ro.yunshuluxian=!0,e.abrupt("continue",29);case 111:if("crossuserid"!=o){e.next=115;break}return this.ruleForm.crossuserid=i[o],this.ro.crossuserid=!0,e.abrupt("continue",29);case 115:if("crossrefid"!=o){e.next=119;break}return this.ruleForm.crossrefid=i[o],this.ro.crossrefid=!0,e.abrupt("continue",29);case 119:e.next=29;break;case 121:this.styleChange();case 122:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},yunshuyuanChange:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.yunshuyuanIndex=r.target.value,this.ruleForm.yunshuyuan=this.yunshuyuanOptions[this.yunshuyuanIndex],e.next=4,this.$api.follow("yuangong","yuangonggonghao",{columnValue:this.ruleForm.yunshuyuan});case 4:n=e.sent,n.data.yuangongxingming&&(this.ruleForm.yuangongxingming=n.data.yuangongxingming),n.data.bumen&&(this.ruleForm.bumen=n.data.bumen);case 7:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),yunshushijianConfirm:function(e){console.log(e),this.ruleForm.yunshushijian=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var r,n,t,i,o,a,u,p,d,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.wupinmingcheng){e.next=3;break}return this.$utils.msg("物品名称不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.shuliang||this.$validate.isIntNumer(this.ruleForm.shuliang)){e.next=6;break}return this.$utils.msg("数量应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.zhongliang||this.$validate.isNumber(this.ruleForm.zhongliang)){e.next=9;break}return this.$utils.msg("重量kg应输入数字"),e.abrupt("return");case 9:if(!this.ruleForm.feiyong||this.$validate.isNumber(this.ruleForm.feiyong)){e.next=12;break}return this.$utils.msg("费用应输入数字"),e.abrupt("return");case 12:if(!this.cross){e.next=28;break}if(o=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==o){e.next=28;break}if(r||(r=uni.getStorageSync("crossObj")),o.startsWith("[")){e.next=24;break}for(u in r)u==o&&(r[u]=a);return p=uni.getStorageSync("crossTable"),e.next=22,this.$api.update("".concat(p),r);case 22:e.next=28;break;case 24:n=Number(uni.getStorageSync("userid")),t=r["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 28:if(!t||!n){e.next=50;break}return this.ruleForm.crossuserid=n,this.ruleForm.crossrefid=t,d={page:1,limit:10,crossuserid:n,crossrefid:t},e.next=34,this.$api.list("yunshuxinxi",d);case 34:if(l=e.sent,!(l.data.total>=i)){e.next=40;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 40:if(!this.ruleForm.id){e.next=45;break}return e.next=43,this.$api.update("yunshuxinxi",this.ruleForm);case 43:e.next=47;break;case 45:return e.next=47,this.$api.add("yunshuxinxi",this.ruleForm);case 47:this.$utils.msgBack("提交成功");case 48:e.next=58;break;case 50:if(!this.ruleForm.id){e.next=55;break}return e.next=53,this.$api.update("yunshuxinxi",this.ruleForm);case 53:e.next=57;break;case 55:return e.next=57,this.$api.add("yunshuxinxi",this.ruleForm);case 57:this.$utils.msgBack("提交成功");case 58:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,n=r.getFullYear(),t=r.getMonth()+1,i=r.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),t=t>9?t:"0"+t,i=i>9?i:"0"+i,"".concat(n,"-").concat(t,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};r.default=u},"3f81":function(e,r,n){"use strict";var t={"w-picker":n("e2b1").default},i=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{style:{minHeight:"100vh",padding:"160rpx 0 160rpx",borderColor:"#21d5ae",background:"url(http://codegen.caihongy.cn/20221223/869602be22f342bf8136d5a9f62af2f7.gif) no-repeat right top,url(http://codegen.caihongy.cn/20221223/a3dca8908c4c40b68f285ba0a3226a99.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/5100c3e4960949eeaacbc47dc102c484.png) no-repeat left bottom / 100% auto",borderWidth:"2rpx 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[n("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("快递单号")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.kuaididanhao,placeholder:"快递单号"},model:{value:e.ruleForm.kuaididanhao,callback:function(r){e.$set(e.ruleForm,"kuaididanhao",r)},expression:"ruleForm.kuaididanhao"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("用户账号")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.yonghuzhanghao,placeholder:"用户账号"},model:{value:e.ruleForm.yonghuzhanghao,callback:function(r){e.$set(e.ruleForm,"yonghuzhanghao",r)},expression:"ruleForm.yonghuzhanghao"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("用户姓名")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.yonghuxingming,placeholder:"用户姓名"},model:{value:e.ruleForm.yonghuxingming,callback:function(r){e.$set(e.ruleForm,"yonghuxingming",r)},expression:"ruleForm.yonghuxingming"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("手机")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.shouji,placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(r){e.$set(e.ruleForm,"shouji",r)},expression:"ruleForm.shouji"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("物品名称")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.wupinmingcheng,placeholder:"物品名称"},model:{value:e.ruleForm.wupinmingcheng,callback:function(r){e.$set(e.ruleForm,"wupinmingcheng",r)},expression:"ruleForm.wupinmingcheng"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("物品分类")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.wupinfenlei,placeholder:"物品分类"},model:{value:e.ruleForm.wupinfenlei,callback:function(r){e.$set(e.ruleForm,"wupinfenlei",r)},expression:"ruleForm.wupinfenlei"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("数量")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.shuliang,placeholder:"数量"},model:{value:e.ruleForm.shuliang,callback:function(r){e.$set(e.ruleForm,"shuliang",r)},expression:"ruleForm.shuliang"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("重量kg")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.zhongliang,placeholder:"重量kg"},model:{value:e.ruleForm.zhongliang,callback:function(r){e.$set(e.ruleForm,"zhongliang",r)},expression:"ruleForm.zhongliang"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("费用")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.feiyong,placeholder:"费用"},model:{value:e.ruleForm.feiyong,callback:function(r){e.$set(e.ruleForm,"feiyong",r)},expression:"ruleForm.feiyong"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("收件人")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.shoujianren,placeholder:"收件人"},model:{value:e.ruleForm.shoujianren,callback:function(r){e.$set(e.ruleForm,"shoujianren",r)},expression:"ruleForm.shoujianren"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("收件地址")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.shoujiandizhi,placeholder:"收件地址"},model:{value:e.ruleForm.shoujiandizhi,callback:function(r){e.$set(e.ruleForm,"shoujiandizhi",r)},expression:"ruleForm.shoujiandizhi"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("联系手机")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.lianxishouji,placeholder:"联系手机"},model:{value:e.ruleForm.lianxishouji,callback:function(r){e.$set(e.ruleForm,"lianxishouji",r)},expression:"ruleForm.lianxishouji"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("取货方式")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.quhuofangshi,placeholder:"取货方式"},model:{value:e.ruleForm.quhuofangshi,callback:function(r){e.$set(e.ruleForm,"quhuofangshi",r)},expression:"ruleForm.quhuofangshi"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("支付类别")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.zhifuleibie,placeholder:"支付类别"},model:{value:e.ruleForm.zhifuleibie,callback:function(r){e.$set(e.ruleForm,"zhifuleibie",r)},expression:"ruleForm.zhifuleibie"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("运输时间")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{placeholder:"运输时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("yunshushijian")}},model:{value:e.ruleForm.yunshushijian,callback:function(r){e.$set(e.ruleForm,"yunshushijian",r)},expression:"ruleForm.yunshushijian"}})],1),n("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("运输员")]),n("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.yunshuyuanIndex,range:e.yunshuyuanOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.yunshuyuanChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666"}},[e._v(e._s(e.yunshuyuanOptions[e.yunshuyuanIndex]))])],1)],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("员工姓名")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.yuangongxingming,placeholder:"员工姓名"},model:{value:e.ruleForm.yuangongxingming,callback:function(r){e.$set(e.ruleForm,"yuangongxingming",r)},expression:"ruleForm.yuangongxingming"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("部门")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.bumen,placeholder:"部门"},model:{value:e.ruleForm.bumen,callback:function(r){e.$set(e.ruleForm,"bumen",r)},expression:"ruleForm.bumen"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("运输路线2")]),n("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.yunshuluxian,placeholder:"运输路线2"},model:{value:e.ruleForm.yunshuluxian,callback:function(r){e.$set(e.ruleForm,"yunshuluxian",r)},expression:"ruleForm.yunshuluxian"}})],1),n("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20221223/6b85fcf145f4443f8e0c6a1d35ff48d3.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221223/f37ce3301ae04b20b8b81e44b07f3934.png) no-repeat right bottom / 100% auto,url(http://codegen.caihongy.cn/20221223/1db3995025f1402b9bbef192396a51b4.png) repeat-y center center / 100% auto",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("物流信息")]),n("v-uni-textarea",{style:{border:"0",minHeight:"240rpx",padding:"40rpx 40rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"url(http://codegen.caihongy.cn/20221223/869602be22f342bf8136d5a9f62af2f7.gif) no-repeat right top,rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{placeholder:"物流信息"},model:{value:e.ruleForm.wuliuxinxi,callback:function(r){e.$set(e.ruleForm,"wuliuxinxi",r)},expression:"ruleForm.wuliuxinxi"}})],1),n("v-uni-view",{staticClass:"btn",style:{width:"100%",margin:"40rpx 0 0 0",justifyContent:"center",display:"flex",height:"auto"}},[n("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"2rpx 4rpx 8rpx #ccc",margin:"0 40rpx 0 0",borderColor:"#1bd0a9",color:"#111",display:"inline",minWidth:"200rpx",borderRadius:"0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(27,208,169,1) 100%)",borderWidth:"2rpx 8rpx 2rpx",width:"auto",lineHeight:"72rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),n("w-picker",{ref:"yunshushijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.yunshushijianConfirm.apply(void 0,arguments)}}})],1)],1)},o=[];n.d(r,"b",(function(){return i})),n.d(r,"c",(function(){return o})),n.d(r,"a",(function(){return t}))},"8f4b":function(e,r,n){"use strict";n.r(r);var t=n("3f81"),i=n("e4ad");for(var o in i)"default"!==o&&function(e){n.d(r,e,(function(){return i[e]}))}(o);n("ef10");var a,u=n("f0c5"),p=Object(u["a"])(i["default"],t["b"],t["c"],!1,null,"55cac9b0",null,!1,t["a"],a);r["default"]=p.exports},adcdc:function(e,r,n){var t=n("0f11");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=n("4f06").default;i("93b00d2e",t,!0,{sourceMap:!1,shadowMode:!1})},e4ad:function(e,r,n){"use strict";n.r(r);var t=n("1b5f"),i=n.n(t);for(var o in t)"default"!==o&&function(e){n.d(r,e,(function(){return t[e]}))}(o);r["default"]=i.a},ef10:function(e,r,n){"use strict";var t=n("adcdc"),i=n.n(t);i.a}}]);