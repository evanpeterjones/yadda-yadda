(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],s=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var s={},n={app:0},a=[];function i(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=s,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"02b1":function(t,e,o){"use strict";var s=o("7f46"),n=o.n(s);n.a},"034f":function(t,e,o){"use strict";var s=o("85ec"),n=o.n(s);n.a},"0ab0":function(t,e,o){"use strict";var s=o("c432"),n=o.n(s);n.a},"11c9":function(t,e,o){"use strict";var s=o("e5e6"),n=o.n(s);n.a},"325b":function(t,e,o){"use strict";var s=o("844a"),n=o.n(s);n.a},3610:function(t,e,o){"use strict";var s=o("d0a2"),n=o.n(s);n.a},"3f95":function(t,e,o){"use strict";var s=o("a0da"),n=o.n(s);n.a},4678:function(t,e,o){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=a(t);return o(e)}function a(t){if(!o.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id="4678"},"56d7":function(t,e,o){"use strict";o.r(e);o("99af"),o("c975"),o("a434"),o("b64b");var s=o("2909"),n=(o("e623"),o("e379"),o("5dc8"),o("37e1"),o("2b0e")),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("NavigationBar",{on:{myPosts:function(e){return t.swapDialog("myPosts")},myAccount:function(e){return t.swapDialog("myAccount")},newQRCode:function(e){return t.swapDialog("QRCode")}}}),t.location?o("div",[o("Home",{on:{newPostDialog:function(e){return t.swapDialog("newPost")}}})],1):o("div",[o("Splash",{on:{newPostDialog:function(e){return t.swapDialog("newPost")}}})],1),o(t.CurrDialog,{tag:"component",on:{closeDialog:function(e){return t.swapDialog(null,null)}}})],1)},i=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.location?o("div",{staticClass:"header"},[t.mobile?o("div",[o("h1",[t._v(t._s(t.appname))])]):o("div",[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("h1",[t._v(t._s(t.appname))])]),o("div",{staticClass:"col"},[o("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",split:"",pill:""},on:{click:t.updateLocationSort},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("h4",[t._v(t._s(t.location))])]},proxy:!0}],null,!1,3410412724)},[o("b-dropdown-item",{on:{click:t.myPosts}},[t._v(" My Posts ")]),o("b-dropdown-item",{on:{click:t.myAccount}},[t._v(" My Account ")]),o("b-dropdown-item",{on:{click:t.showQR}},[t._v(" Mobile Sync ")])],1)],1)])])]):o("div",{staticClass:"login"},[o("h1",[t._v(t._s(t.appname[0])),o("span",{staticClass:"logo"},[t._v(t._s(t.appname1))])])]),o("br")])},c=[],l={name:"NavigationBar",data:function(){return{appname:"YAPP",appname1:"APP"}},computed:{location:function(){var t=this.$store.getters.locationName;return t},mobile:function(){return this.$store.getters.isMobile}},methods:{myAccount:function(){this.$emit("myAccount")},myPosts:function(){this.$emit("myPosts")},updateLocationSort:function(){this.$store.commit("nextLocationType")},newPostDialog:function(){this.$emit("newPostDialog")},showQR:function(){this.$emit("newQRCode")}}},u=l,d=(o("325b"),o("2877")),f=Object(d["a"])(u,r,c,!1,null,null,null),p=f.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-modal",{attrs:{"hide-header":"","prevent-defaults":"",ok:""},on:{hidden:t.close,ok:function(e){return t.send(t.textInput)}},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var s=e.ok,n=e.cancel;e.hide;return[t.validPost?o("div",[o("b",{staticStyle:{color:"grey"}},[t._v(t._s(t.charsLeft))])]):o("div",[o("b",{staticStyle:{color:"red"}},[t._v(t._s(t.charsLeft))])]),o("b-button",{attrs:{pill:"","button-size":"lg"},on:{click:function(t){return n()}}},[o("font-awesome-layers",{staticClass:"fa"},[o("font-awesome-icon",{attrs:{icon:["fas","trash"]}})],1)],1),o("b-button",{attrs:{pill:"",variant:"primary","button-size":"lg"},on:{click:function(t){return s()}}},[o("font-awesome-layers",{staticClass:"fa"},[o("font-awesome-icon",{attrs:{icon:["fas","arrow-right"]}})],1)],1)]}}])},[o("b-form-textarea",{attrs:{id:"New Post",placeholder:"What's happening?",rows:"4"},model:{value:t.textInput,callback:function(e){t.textInput=e},expression:"textInput"}})],1)],1)},h=[],b={name:"NewPost",data:function(){return{textInput:""}},computed:{charsLeft:function(){return this.textInput.length+"/140"},validPost:function(){return this.textInput.length<=140}},mounted:function(){this.$children[0].show()},methods:{close:function(){this.$emit("closeDialog")},send:function(t){var e=this;t?(t.length>140&&alert("post must be shorter than 140 characters"),this.$http.get("/newPost",{params:{content:t||"",parent:this.$store.getters.replyTo}}).then((function(t){console.log(t),e.$store.commit("newPost",t.data[0])})).catch((function(t){console.error(t)}))):alert("can't make an empty post")}}},g=b,v=Object(d["a"])(g,m,h,!1,null,null,null),_=v.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-modal",{attrs:{title:"My Posts",scrollable:"","hide-footer":""},on:{hidden:t.hide}},[t.feed?t._l(t.feed,(function(e){return o("div",{key:e.pst_id_pk},[o("post",{attrs:{id:e["pst_id_pk"],"has-comments":e["pst_hascomments"],parent:e["pst_parent_fk"],user:e["pst_usr_id_fk"],time:e["pst_time"],edited:e["pst_edittime"],content:e["pst_content"],decentral:e["pst_decentral"]},on:{closeDialog:t.hide}})],1)})):o("div",[o("p",[t._v(" You have no posts ")])])],2)],1)},j=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("card",[o("div",[o("post-header",{attrs:{"reply-to":t.parent,"user-id":t.user,uname:t.uname,time:t.time},on:{closeDialog:t.close}}),o("div",{staticClass:"content"},[o("p",[t._v(" "+t._s(t.content)+" ")])]),o("post-footer",{attrs:{id:t.id,"has-comments":t.hasComments,decentral:t.decentral,user:t.user,edited:t.edited}})],1)])},k=[],$=(o("a9e3"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col font-weight-bold text-nowrap"},[t.replyTo?o("font-awesome-icon",{attrs:{icon:["fa","reply"]},on:{click:t.getComments}}):o("font-awesome-icon",{attrs:{icon:["fa","atom"]}}),t._v(" "+t._s(t.userName)+" ")],1),o("div",{staticClass:"col"}),o("div",{staticClass:"col text-nowrap"},[o("p",[t._v(t._s(t.parsedTime))])])])])}),P=[],C=(o("caad6"),o("07ac"),o("2532"),["Giraffe","Woodpecker","Camel","Starfish","Koala","Alligator","Owl","Tiger","Bear","Blue whale","Coyote","Chimpanzee","Raccoon","Lion","Arctic wolf","Crocodile","Dolphin","Elephant","Squirrel","Snake","Kangaroo","Hippopotamus","Elk","Fox","Gorilla","Bat","Hare","Toad","Frog","Deer","Rat","Badger","Lizard","Mole","Hedgehog","Otter","Reindeer"]),O=["Abloom","Abiding","Achy","Adequate","Aesthetical","Affordable","Ageless","Austere","Amaranth","Amber","Apricot","Aqua","Arctic","Auburn","Almond"],x={};function z(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(e&&(x[t]=e),x.user_id)return x.user_id;var n=O[(t+o)%O.length],a=C[(t+s)%C.length],i=n+" "+a;return Object.values(x).includes(i)?o%colors.length===t?z(t,o,s+1):s%C.length===t?z(t,o+1,s):(delete x.user_id,z(t)):i}var S=z,D=o("c1df"),A=o.n(D),T={getTimeSince:function(t,e){var o=A()(t).fromNow();return o},formatTime:function(t){return A()(new Date(t)).format("YYYY-MM-DD")}},N=T,M={name:"PostHeader",props:{uname:{type:String,default:null},userId:{type:Number,default:-1},time:{type:String,default:""},replyTo:{type:Number,default:null}},computed:{userName:function(){return this.userId?S(this.userId):"Purple Otter"},parsedTime:function(){return this.time?N.getTimeSince(this.time):"0:00"}},methods:{getComments:function(){var t=this;this.$http.get("/postComments",{params:{post:this.replyTo}}).then((function(e){console.log(e),t.$store.commit("addNewCommentsFeed",e.data)})).catch((function(t){console.log("yeet"),console.error(t)})),this.$emit("closeDialog")}}},E=M,I=(o("3f95"),Object(d["a"])(E,$,P,!1,null,null,null)),R=I.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-3 float-left"},[t.myPost?o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{pill:"",title:"Delete",variant:"outline-secondary"},on:{click:function(e){return t.confirmDelete(t.id)}}},[o("font-awesome-icon",{attrs:{icon:["fas","trash"]}})],1):t._e()],1),o("div",{staticClass:"col"},[t.hasComments?o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{pill:"",title:"View Comments"},on:{click:function(e){return t.comments(t.id)}}},[o("font-awesome-icon",{attrs:{icon:["fas","comment"]}})],1):t._e()],1),o("div",{staticClass:"col-3"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{pill:"",title:"Reply"},on:{click:function(e){return t.reply(t.id)}}},[o("font-awesome-icon",{attrs:{icon:["fas","reply"]}})],1)],1)])])},B=[],U=(new n["default"],{name:"PostFooter",props:{user:{type:Number,default:null},hasComments:{type:Boolean,default:!1},id:{type:Number,default:-1},edited:{type:String,default:null},decentral:{type:Boolean,default:!1}},computed:{myPost:function(){return this.user&&this.$store.getters.userId==this.user}},methods:{reply:function(t){this.$store.commit("setReplyTo",t)},confirmDelete:function(t){var e=this,o=this.$createElement,s=o("div",{class:["foobar"]},[o("p",{class:["text-center"]},["Are you sure you want to delete this post?"])]);this.$bvModal.msgBoxConfirm([s],{buttonSize:"sm",centered:!0,size:"sm",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0"}).then((function(o){o&&e.deletePost(t)}))},deletePost:function(t){var e=this;this.$http.get("/deletePost",{params:{post:t}}).then((function(t){e.$store.commit("deletePost",t.data),console.log(t)})).catch((function(t){console.log(t)}))},comments:function(t){var e=this;this.$http.get("/postComments",{params:{post:t}}).then((function(t){console.log(t),e.$store.commit("addNewCommentsFeed",t.data)})).catch((function(t){console.log("yeet"),console.error(t)}))}}}),F=U,Y=Object(d["a"])(F,L,B,!1,null,null,null),H=Y.exports,q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.mobile?o("div",{staticClass:"card"},[t._t("default")],2):o("div",{staticClass:"card card-desktop bg",staticStyle:{margin:"auto",width:"350px"}},[t._t("default")],2)])},Q=[],W={name:"Card",computed:{mobile:function(){return this.$store.getters.isMobile}}},G=W,J=(o("0ab0"),Object(d["a"])(G,q,Q,!1,null,null,null)),K=J.exports,V={name:"Post",components:{Card:K,PostHeader:R,PostFooter:H},props:{id:{type:Number,default:null},uname:{type:String,default:null},user:{type:Number,default:null},time:{type:String,default:null},edited:{type:String,default:null},content:{type:String,default:null},decentral:{type:Boolean,default:!1},parent:{type:Number,default:null},hasComments:{type:Boolean,default:null}},methods:{close:function(){this.$emit("closeDialog")}}},X=V,Z=(o("02b1"),Object(d["a"])(X,w,k,!1,null,null,null)),tt=Z.exports,et={name:"MyPosts",components:{Post:tt},data:function(){return{feed:null}},mounted:function(){var t=this;this.$children[0].show(),this.$http.get("/myPosts").then((function(e){console.log(e.data),t.feed=0==e.data.length?null:e.data})).catch((function(t){console.log(t)}))},methods:{hide:function(){this.$emit("closeDialog")}}},ot=et,st=Object(d["a"])(ot,y,j,!1,null,null,null),nt=st.exports,at=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-modal",{attrs:{title:"My Account","prevent-defaults":""},on:{ok:t.updateAccountInfo,hidden:t.hide}},[o("b-form",[o("b-form-group",{attrs:{label:"User ID","label-for":"input-1"}},[o("b-form-input",{attrs:{disabled:"",id:"input-1"},model:{value:t.user_data.usr_id_pk,callback:function(e){t.$set(t.user_data,"usr_id_pk",e)},expression:"user_data.usr_id_pk"}})],1),o("b-form-group",{attrs:{label:"Username","label-for":"input-1",description:"this isn't currently implemented elsewhere"}},[o("b-form-input",{attrs:{id:"input-1"},model:{value:t.user_data.usr_username,callback:function(e){t.$set(t.user_data,"usr_username",e)},expression:"user_data.usr_username"}})],1),o("b-form-group",{attrs:{label:"Email","label-for":"input-1",description:"We'll never share your email with anyone else."}},[o("b-form-input",{attrs:{id:"input-1",type:"email"},model:{value:t.user_data.usr_email,callback:function(e){t.$set(t.user_data,"usr_email",e)},expression:"user_data.usr_email"}})],1),o("b-alert",{attrs:{fade:"",dismissible:"",show:t.errorUpdating},on:{dismissed:function(e){t.errorUpdating=!1}}},[t._v(" This email is already registered ")]),o("b-form-group",{attrs:{label:"Account Created","label-for":"input-1"}},[o("b-form-input",{attrs:{disabled:"",id:"input-1",type:"date"},model:{value:t.user_data.usr_createdon,callback:function(e){t.$set(t.user_data,"usr_createdon",e)},expression:"user_data.usr_createdon"}})],1)],1)],1)],1)},it=[],rt=(o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("159b"),o("ade3"));function ct(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function lt(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ct(Object(o),!0).forEach((function(e){Object(rt["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ct(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var ut={name:"MyAccount",data:function(){return{user_data:[],errorUpdating:!1}},methods:{setResult:function(t){t.usr_pwd_fk&&delete t.usr_pwd_fk,this.user_data=lt({},t,{usr_createdon:N.formatTime(t.usr_createdon)})},emailSent:function(t){var e=this,o=this.$createElement,s=o("div",{class:["foobar"]},[o("p",{class:["text-center"]},["A verification link has been sent to "+t])]);this.$bvModal.msgBoxConfirm([s],{buttonSize:"sm",centered:!0,size:"sm",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0"}).then((function(t){t&&e.hide()}))},updateAccountInfo:function(t){var e=this;t.preventDefault(),this.$http.get("updateAccountInfo",{params:{id:this.user_data.usr_id_pk,username:this.user_data.usr_username,email:this.user_data.usr_email}}).then((function(t){e.setResult(t.data[0]),e.hide()})).catch((function(t){e.errorUpdating=!0}))},hide:function(){this.$emit("closeDialog")}},mounted:function(){var t=this;this.$http.get("userInformation").then((function(e){t.setResult(e.data[0])})).catch((function(t){console.log(t)})),this.$children[0].show()}},dt=ut,ft=Object(d["a"])(dt,at,it,!1,null,null,null),pt=ft.exports,mt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-modal",{attrs:{size:"sm","hide-header":"","hide-footer":""},on:{hidden:t.hide}},[o("qrcode",{attrs:{value:t.url,options:{width:250}}})],1)],1)},ht=[],bt=o("b2e5"),gt=o.n(bt),vt={name:"QRCode",components:{qrcode:gt.a},data:function(){return{url:"https://www.internetizens.net/sessionSync?cookie="}},mounted:function(){var t=this;this.$children[0].show(),this.$http.get("/sessionSync",{params:{cookie:this.$cookies.get("yapp-session")}}).then((function(e){t.url+=e.data})).catch((function(t){console.log(t)}))},methods:{hide:function(){this.$emit("closeDialog")}}},_t=vt,yt=Object(d["a"])(_t,mt,ht,!1,null,null,null),jt=yt.exports,wt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{width:"80%",margin:"auto","max-width":"500px"}},[o("br"),o("p",{staticStyle:{"text-align":"center"}},[t._v(" Please enter a location to view posts ")]),o("form",[o("b-form-input",{attrs:{state:t.valid,placeholder:"zip code","on-submit":"return false;"},on:{submit:function(e){return t.flight(t.zip)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.formSubmit(t.zip)}},model:{value:t.zip,callback:function(e){t.zip=e},expression:"zip"}}),o("br"),o("b-button",{attrs:{pill:""},on:{click:function(e){return t.flight()}}},[t._v(" Search ")])],1)])},kt=[],$t={name:"Splash",data:function(){return{zip:null,valid:null}},watch:{zip:function(){this.valid=!(5!=this.zip.length||!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.zip))||null}},mounted:function(){this.getLocation()},methods:{flight:function(){console.log("asdf"),this.$emit("newPostDialog")},formSubmit:function(t){var e=this;t?this.$http.get("/setUserLocation",{params:{zip:t,ses:this.$cookies.get("yapp-session")}}).then((function(t){console.log(t),e.$store.commit("setLocation",t.data[0])})).catch((function(t){console.log(t)})):this.zip=this.getLocation(),this.zip||alert("you must provide a zip code or enable location services to continue")},getLocation:function(){var t=this,e={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};navigator.geolocation.getCurrentPosition((function(e){var o=e.coords;t.$http.get("/getzip",{withCredentials:!0,params:{lat:o.latitude,long:o.longitude}}).then((function(e){t.$store.commit("setLocation",e.data[0])})).catch((function(t){console.log(t)}))}),(function(t){console.warn("ERROR(".concat(t.code,"): ").concat(t.message))}),e)}}},Pt=$t,Ct=(o("3610"),Object(d["a"])(Pt,wt,kt,!1,null,"0af438f0",null)),Ot=Ct.exports,xt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Feed"),o("div",{staticClass:"right-corner-container"},[t.showingReplies?o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"button-class",attrs:{pill:"",variant:"light",title:"Close"},on:{click:function(e){return t.close(t.id)}}},[o("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1):t._e(),o("br"),o("br"),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"button-class",attrs:{pill:"",title:"New Post"},on:{click:t.createNewPost}},[o("font-awesome-icon",{attrs:{icon:["fas","plus"]}})],1)],1)],1)},zt=[],St=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"feed-container container-fluid"},[t.posts&&t.feed?o("div",{staticClass:"row scrolling-wrapper"},t._l(t.posts,(function(e){return o("div",{key:e[0][0].pst_id_pk,staticClass:"col scrolling-vert",attrs:{id:"feeder"},on:{scroll:t.onScroll}},t._l(e,(function(t){return o("div",{key:t.pst_id_pk},[o("post",{attrs:{hasComments:t["pst_hascomments"],parent:t["pst_parent_fk"],uname:t["usr_username"],id:t["pst_id_pk"],user:t["pst_usr_id_fk"],time:t["pst_time"],edited:t["pst_edittime"],content:t["pst_content"],decentral:t["pst_decentral"]}})],1)})),0)})),0):o("card",[o("br"),o("h5",[t._v("No Yapps yet! You can be the first!^^^")]),o("br")])],1)},Dt=[],At={name:"Feed",components:{Post:tt,Card:K},computed:{posts:function(){return this.$store.getters.posts},mobile:function(){return this.$store.getters.isMobile}},methods:{onScroll:function(){var t=this,e=document.getElementById("feeder"),o=e.scrollTop+e.offsetHeight===e.scrollHeight;o&&this.$http.get("/feed",{params:{offset:this.$store.getters.offset+5,cookie:this.$cookies.get("yapp-session"),loc_id:this.$store.getters.loc_id}}).then((function(e){console.log(e.data),t.$store.commit("addPosts",e.data),t.$store.commit("updateOffset")})).catch((function(t){console.log(t)}))}}},Tt=At,Nt=(o("11c9"),Object(d["a"])(Tt,St,Dt,!1,null,"8c6d6b9a",null)),Mt=Nt.exports,Et={name:"Home",components:{Feed:Mt},computed:{showingReplies:function(){return this.$store.getters.posts.length>1}},methods:{close:function(){this.$store.commit("removeReplies")},createNewPost:function(){this.$emit("newPostDialog")}}},It=Et,Rt=Object(d["a"])(It,xt,zt,!1,null,null,null),Lt=Rt.exports,Bt=o("4989"),Ut=o.n(Bt),Ft={title:"YAPP",name:"App",components:{NavigationBar:p,Splash:Ot,BModal:Ut.a,NewPost:_,QRCode:jt,Home:Lt,myPosts:nt,myAccount:pt},data:function(){return{CurrDialog:null,components:{replyPost:_,newPost:_,QRCode:jt,myPosts:nt,myAccount:pt}}},computed:{location:function(){return this.$store.getters.location},posts:function(){return this.$store.getters.posts},mobile:function(){return this.$store.getters.isMobile},replyPost:function(){return""}},mounted:function(){var t=this;navigator.cookieEnabled||this.cookies_required(),this.$store.watch((function(t){return t.replyTo}),(function(e,o){t.$store.getters.replyTo&&t.swapDialog("newPost",t.$store.getters.replyTo)})),this.$nextTick((function(){window.addEventListener("resize",(function(){t.$store.commit("setIsMobile",window.innerWidth)}))}))},methods:{swapDialog:function(t,e){this.$store.commit("setReplyTo",e),this.CurrDialog=this.components[t]},cookies_required:function(){this.$bvModal.msgBoxConfirm("Yapp relies on giving you a cookie to identify you so you don't have to give up your personal information like other social media sites.",{title:"Please Enable Cookies",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"Okay",hideHeaderClose:!1,centered:!0})}}},Yt=Ft,Ht=(o("034f"),Object(d["a"])(Yt,a,i,!1,null,null,null)),qt=Ht.exports,Qt=o("2f62"),Wt=o("8c4f"),Gt=o("2b27"),Jt=o.n(Gt),Kt=o("5f5b"),Vt=(o("ab8b"),o("bc3a")),Xt=o.n(Vt);n["default"].use(Wt["a"]);new Wt["a"]({routes:[{path:"/*",name:"Yapp",title:"Yapp",component:Mt},{path:"/splash",name:"Login",title:"YAPP",component:Ot}]});var Zt=o("ecee"),te=o("c074"),ee=o("ad3d");Zt["c"].add(te["e"],te["g"],te["d"],te["a"],te["b"],te["c"],te["f"]),n["default"].component("font-awesome-icon",ee["a"]),n["default"].component("font-awesome-layers",ee["b"]),n["default"].config.productionTip=!1,n["default"].use(Kt["a"]),n["default"].use(Jt.a),n["default"].use(Wt["a"]),n["default"].use(Qt["a"]),Jt.a.config("7d"),Jt.a.set("theme","default"),Jt.a.set("hover-time","1s");var oe=new Qt["a"].Store({state:{location:"",locationType:"loc_alias",loc_id:0,posts:[],offset:0,isMobile:window.innerWidth<500,userId:null,replyTo:null},getters:{location:function(t){return t.location},loc_id:function(t){return t.loc_id?t.loc_id:0},locationName:function(t){return t.location[t.locationType]},posts:function(t){return t.posts},isMobile:function(t){return t.isMobile},userId:function(t){return t.userId},locationType:function(t){return t.locationType},offset:function(t){return t.offset},replyTo:function(t){return t.replyTo}},mutations:{removeReplies:function(t){t.posts.splice(1,1)},setLocation:function(t,e){console.log("Location: "+e.loc_id),t.loc_id=e.loc_id_pk,delete e.loc_id_pk,t.location=e},setPosts:function(t,e){t.posts.push(e)},addPosts:function(t,e){for(var o=0;o<e.length;o++)t.posts[0].splice(t.posts[0].length,0,e[o])},addNewCommentsFeed:function(t,e){var o=e.shift();t.posts=[t.posts[0],[o].concat(Object(s["a"])(e.reverse()))]},setIsMobile:function(t,e){t.isMobile=e<800},setUserId:function(t,e){t.userId=e},deletePost:function(t,e){for(var o=null,s=0;s<t.posts[0].length;s++)t.posts[0][s].pst_id_pk==e&&(t.posts[0].splice(s,1),o=s);if(t.posts.length>1)for(s=0;s<t.posts[1].length;s++)t.posts[1][s].pst_id_pk==e&&(t.posts[1].splice(s,1),o=s);o&&(t.offset-=1)},setReplyTo:function(t,e){t.replyTo=e},newPost:function(t,e){if(e.pst_parent_fk){for(var o=0;o<t.posts[0].length;o++)e.pst_parent_fk==t.posts[0][o].pst_id_pk&&(o,t.posts[0][o]=Object.assign({},t.posts[0][o],{pst_hascomments:!0}));if(t.posts[1])for(o=0;o<t.posts[1].length;o++)e.pst_parent_fk==t.posts[1][o].pst_id_pk&&(o,t.posts[0][o]=Object.assign({},t.posts[0][o],{pst_hascomments:!0}))}t.posts[1]&&t.posts[1][0].pst_id_pk==e.pst_parent_fk?t.posts[1].splice(1,0,e):t.posts[0].unshift(e),t.offset++},nextLocationType:function(t){var e=Object.keys(t.location),o=e.indexOf(t.locationType);t.locationType=e[(o+1)%3]},updateOffset:function(t){t.offset+=5}}}),se=Xt.a.create({crossDomain:!0});n["default"].prototype.$http=se;var ne=new n["default"];Object.defineProperties(n["default"].prototype,{$bus:{get:function(){return ne}}}),n["default"].prototype.$cookies.get("yapp-session")&&(n["default"].prototype.$http.get("/getUserFromSession").then((function(t){console.log("UserID: "+t.data),oe.commit("setUserId",t.data)})).catch((function(t){console.log("yikes"),console.error(t)})),n["default"].prototype.$http.get("/getLocationFromSession",{params:{ses:n["default"].prototype.$cookies.get("yapp-session")}}).then((function(t){oe.commit("setLocation",t.data)})).catch((function(t){console.log(t)}))),oe.watch((function(t){return t.location}),(function(t,e){console.log(t),n["default"].prototype.$http.get("/getUserFromSession",{params:{cookie:n["default"].prototype.$cookies.get("yapp-session")}}).then((function(t){console.log("UserID: "+t.data),oe.commit("setUserId",t.data)})),n["default"].prototype.$http.get("/feed",{params:{offset:0,loc_id:oe.getters.loc_id,cookie:n["default"].prototype.$cookies.get("yapp-session")}}).then((function(t){0!=t.data.length?(console.log("post data: "),console.log(t.data),oe.commit("setPosts",t.data)):(console.error("error"),console.error(t),oe.commit("setPosts",[{pst_id_pk:"asdf"},{}]))})).catch((function(t){console.log(t)}))}));var ae=new Wt["a"]({routes:void 0});new n["default"]({store:oe,router:ae,render:function(t){return t(qt)}}).$mount("#app")},"7f46":function(t,e,o){},"844a":function(t,e,o){},"85ec":function(t,e,o){},a0da:function(t,e,o){},c432:function(t,e,o){},d0a2:function(t,e,o){},e5e6:function(t,e,o){}});
//# sourceMappingURL=app.03b17cf5.js.map