(this.webpackJsonpclassdemo=this.webpackJsonpclassdemo||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),o=a.n(r),m=(a(12),a(3)),c=a(4),l=a(6),s=a(5),d=function(e){var t=e.img,a=e.name,n=e.text;return i.a.createElement("div",{className:"tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5",style:{width:500}},i.a.createElement("img",{src:t,alt:"#"}),i.a.createElement("h2",null,a),i.a.createElement("h3",null,n))},g=function(e){var t=e.demo;return i.a.createElement("div",null,t.map((function(e,t){return i.a.createElement(d,{key:t,id:e.id,img:e.img,name:e.name,text:e.text})})))},u=[{id:1,img:"./img/1.png",name:"The Unconventional Calculator",text:"-\u8f38\u5165\u6578\u5b57\u53ef\u4ee5\u52a0\u6e1b\u4e58\u9664\uff0c\u904b\u7528\uff2a\uff33\u5370\u51fa\u8a72\u6709\u8a08\u7b97\u7684\u7b54\u6848\uff1b\u589e\u52a0navbar\u548c\u9023\u7d50-"},{id:2,img:"./img/2.png",name:"Monster Killer",text:"-\u8207\u602a\u7378\u5c0d\u6c7a\uff0c\u6309\u653b\u64ca\u9375\u80fd\u653b\u64ca\u88dc\u8840\u9375\u80fd\u88dc\u8840\uff0c\u8840\u91cf\u689d\u7684\u8b8a\u5316-"},{id:3,img:"./img/3.png",name:"DOM Movie",text:"-\u80fd\u589e\u65b0\u559c\u611b\u7684\u96fb\u5f71\u3001\u5716\u7247\u548c\u9023\u7d50-"},{id:4,img:"./img/4.png",name:"Custom Video Player",text:"-\u64ad\u653e\u5f71\u96c6\uff0c\u80fd\u62c9\u6642\u9593\u8ef8\u548c\u66ab\u505c\u64ad\u653e-"},{id:5,img:"./img/5.png",name:"Music Player",text:"-\u64ad\u653e\u97f3\u6a02\uff0c\u80fd\u62c9\u6642\u9593\u8ef8\u548c\u66ab\u505c\u64ad\u653e-"},{id:6,img:"./img/6.png",name:"Meal Finder",text:"-\u67e5\u8a62\u98df\u8b5c\uff0c\u9ede\u5716\u7247\u986f\u793a\u6b65\u9a5f-"},{id:7,img:"./img/7.png",name:"RoboFriends",text:"-\u986f\u793a\u5361\u7247\uff0c\u5167\u5bb9\u5305\u542b\u5716\u7247\u3001\u540d\u7a31\u548c\u96fb\u5b50\u4fe1\u7bb1\uff0c\u53ef\u4ee5\u641c\u5c0b\u5c0d\u61c9\u5361\u7247-"},{id:8,img:"./img/8.png",name:"Figma",text:"-\u8a2d\u8a08\u767b\u5165\u4ecb\u9762-"},{id:9,img:"./img/9.png",name:"Pokemon",text:"-\u986f\u793aPokemon\u7684\u8cc7\u6599-"},{id:10,img:"./img/10.png",name:"TKU60",text:"-\u53ef\u89c0\u770b\u53ef\u89c0\u770b\u5f71\u7247\uff0cbuttond\u53ef\u4ee5\u904b\u884c-"}],h=function(e){var t=e.searchChange;return i.a.createElement("div",{className:"pa2"},i.a.createElement("input",{className:"tc pa3 bw2 ba b--dashed b--dark-red bg-light-yellow br4",type:"search",placeholder:"search demo",onChange:t}))},p=(a(13),function(e){return i.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"}},e.children)}),b=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={demo:u,searchField:""},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.demo.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return i.a.createElement("div",{className:"tc"},i.a.createElement("h1",null,"Class Demo"),i.a.createElement("div",{className:"bg-yellow bt"},i.a.createElement(h,{searchChange:this.onSearchChange})),i.a.createElement(p,null,i.a.createElement(g,{demo:t})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.3b0cc612.chunk.js.map