(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-info/user-info"],{"0261":function(n,t,e){"use strict";var i,u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}))},"6c66":function(n,t,e){"use strict";e.r(t);var i=e("a3c7"),u=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=u.a},"8d8f":function(n,t,e){"use strict";e.r(t);var i=e("0261"),u=e("6c66");for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e("d20e");var r,o=e("f0c5"),s=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"6438e672",null,!1,i["a"],r);t["default"]=s.exports},a3c7:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(e("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,i,u,a,r){try{var o=n[a](r),s=o.value}catch(g){return void e(g)}o.done?t(s):Promise.resolve(s).then(i,u)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(i,u){var r=n.apply(t,e);function o(n){a(r,i,u,o,s,"next",n)}function s(n){a(r,i,u,o,s,"throw",n)}o(void 0)}))}}var o={data:function(){return{ruleForm:{},tableName:"",yonghuxingbieOptions:[],yonghuxingbieIndex:0,yuangongbumenOptions:[],yuangongbumenIndex:0,yuangongxingbieOptions:[],yuangongxingbieIndex:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=r(i.default.mark((function t(){var e,u,a=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.getStorageSync("nowTable"),t.next=3,this.$api.session(e);case 3:if(u=t.sent,this.ruleForm=u.data,this.tableName=e,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.yonghuxingbieOptions.forEach((function(n,t){n==a.ruleForm.xingbie&&(a.yonghuxingbieIndex=t)}))),"yuangong"!=this.tableName){t.next=14;break}return t.next=10,this.$api.option("bumen","bumen",{});case 10:u=t.sent,this.yuangongbumenOptions=u.data,this.yuangongbumenOptions.unshift("请选择部门"),this.yuangongbumenOptions.forEach((function(n,t){n==a.ruleForm.bumen&&(a.yuangongbumenIndex=t)}));case 14:"yuangong"==this.tableName&&(this.yuangongxingbieOptions="男,女".split(","),this.yuangongxingbieOptions.forEach((function(n,t){n==a.ruleForm.xingbie&&(a.yuangongxingbieIndex=t)}))),this.styleChange();case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{yonghutouxiangTap:function(){var n=this;this.$api.upload((function(t){n.ruleForm.touxiang="upload/"+t.file,n.$forceUpdate()}))},yonghuxingbieChange:function(n){this.yonghuxingbieIndex=n.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},yuangongbumenChange:function(n){this.yuangongbumenIndex=n.target.value,this.ruleForm.bumen=this.yuangongbumenOptions[this.yuangongbumenIndex]},yuangongxingbieChange:function(n){this.yuangongxingbieIndex=n.target.value,this.ruleForm.xingbie=this.yuangongxingbieOptions[this.yuangongxingbieIndex]},yuangongzhaopianTap:function(){var n=this;this.$api.upload((function(t){n.ruleForm.zhaopian="upload/"+t.file,n.$forceUpdate()}))},toggleTab:function(n){this.$refs[n].show()},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},logout:function(){n.setStorageSync("token",""),this.$utils.jump("../login/login")},update:function(){var t=r(i.default.mark((function t(){var e;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.yonghuzhanghao||"yonghu"!=this.tableName){t.next=3;break}return this.$utils.msg("用户账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.yonghuxingming||"yonghu"!=this.tableName){t.next=9;break}return this.$utils.msg("用户姓名不能为空"),t.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){t.next=12;break}return this.$utils.msg("年龄应输入整数"),t.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){t.next=15;break}return this.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 15:if(this.ruleForm.yuangonggonghao||"yuangong"!=this.tableName){t.next=18;break}return this.$utils.msg("员工工号不能为空"),t.abrupt("return");case 18:if(this.ruleForm.mima||"yuangong"!=this.tableName){t.next=21;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 21:if(this.ruleForm.yuangongxingming||"yuangong"!=this.tableName){t.next=24;break}return this.$utils.msg("员工姓名不能为空"),t.abrupt("return");case 24:if("yuangong"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){t.next=27;break}return this.$utils.msg("年龄应输入整数"),t.abrupt("return");case 27:if("yuangong"!=this.tableName||!this.ruleForm.shoujihao||this.$validate.isMobile(this.ruleForm.shoujihao)){t.next=30;break}return this.$utils.msg("手机号应输入手机格式"),t.abrupt("return");case 30:if("yuangong"!=this.tableName||!this.ruleForm.shenfenzhenghao||this.$validate.checkIdCard(this.ruleForm.shenfenzhenghao)){t.next=33;break}return this.$utils.msg("身份证号应输入身份证格式"),t.abrupt("return");case 33:return e=n.getStorageSync("nowTable"),t.next=36,this.$api.update(e,this.ruleForm);case 36:this.$utils.msgBack("修改成功");case 38:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};t.default=o}).call(this,e("543d")["default"])},c6d4:function(n,t,e){"use strict";(function(n){e("6cdc"),e("921b");i(e("66fd"));var t=i(e("8d8f"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},d20e:function(n,t,e){"use strict";var i=e("d9ad"),u=e.n(i);u.a},d9ad:function(n,t,e){}},[["c6d4","common/runtime","common/vendor"]]]);