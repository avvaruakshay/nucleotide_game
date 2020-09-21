(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],d=0,p=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/nucleotide_game/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"175f":function(e,t,n){"use strict";var r=n("f54f"),o=n.n(r);o.a},"208a":function(e,t,n){},"32be":function(e,t,n){"use strict";var r=n("75cd"),o=n.n(r);o.a},3322:function(e,t,n){},"3cd6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Home")],1)},i=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"A",void 0,t.key,void 0)?null:e.keyPressed("A")},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"C",void 0,t.key,void 0)?null:e.keyPressed("C")},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"G",void 0,t.key,void 0)?null:e.keyPressed("G")},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"T",void 0,t.key,void 0)?null:e.keyPressed("T")}]}},[r("audio",{attrs:{id:"audio",src:n("6f4d"),autoplay:"false"}}),r("el-row",{attrs:{id:"header"}},[r("el-col",{staticStyle:{padding:"15px"},attrs:{offset:2,span:20,align:"left"}},[e._v(" Sequencing Games "),r("span",{staticStyle:{float:"right"}},[r("el-button",{staticStyle:{"font-size":"1.5rem",padding:"0px"},attrs:{type:"primary",icon:"fas icon-fa-info-circle",size:"mini",circle:""},on:{click:e.openInfo}})],1)])],1),r("el-row",{staticStyle:{margin:"30px 0px"},attrs:{gutter:20}},[r("el-col",{attrs:{offset:2,span:10}},[r("el-radio-group",{staticStyle:{width:"100%"},attrs:{disabled:e.store.gameModeChange,size:"mini"},model:{value:e.store.gameMode,callback:function(t){e.$set(e.store,"gameMode",t)},expression:"store.gameMode"}},[r("el-radio-button",{attrs:{label:"DNA"}}),r("el-radio-button",{attrs:{label:"RNA"}})],1)],1),r("el-col",{attrs:{span:10}},[r("el-button",{attrs:{id:"start",type:"info",size:"mini"},on:{click:function(t){return e.startGame()}}},[e._v("START")])],1)],1),r("el-row",{staticStyle:{"margin-bottom":"10px"}},[r("el-col",{staticStyle:{"font-weight":"bold","font-size":"1.2rem"}},[r("span",{staticStyle:{"margin-right":"30px"}},[e._v("Time: "+e._s((e.store.timer/1e3).toFixed(1)))]),r("span",[e._v("Score: "+e._s(e.store.playerScore))])])],1),r("div",{staticStyle:{height:"20rem"}},[r("div",{attrs:{id:"lanes-panel"}},[r("div",{staticStyle:{display:"inline-block",margin:"1rem"}},[r("reference-lane",{ref:"referenceStrand",attrs:{sequence:e.store.sequence}})],1),r("div",{staticStyle:{display:"inline-block",margin:"1rem"}},[r("player-lane",{ref:"playerStrand"})],1)]),"end"===e.store.gameStatus?r("div",{attrs:{id:"endgame-panel"}},[r("end-game")],1):e._e()]),r("el-row",{staticStyle:{margin:"20px 0px"},attrs:{gutter:30}},[r("el-col",[r("el-button",{staticClass:"key-button",attrs:{disabled:e.store.inputEnabled,id:"key-A",type:"primary"},on:{click:function(t){return e.buttonClick("key-A","button")}}},[e._v("A")]),r("el-button",{staticClass:"key-button",attrs:{disabled:e.store.inputEnabled,id:"key-C",type:"success"},on:{click:function(t){return e.buttonClick("key-C","button")}}},[e._v("C")]),r("el-button",{staticClass:"key-button",attrs:{disabled:e.store.inputEnabled,id:"key-G",type:"danger"},on:{click:function(t){return e.buttonClick("key-G","button")}}},[e._v("G")]),"DNA"===e.store.gameMode?r("el-button",{staticClass:"key-button",attrs:{disabled:e.store.inputEnabled,id:"key-T",type:"warning"},on:{click:function(t){return e.buttonClick("key-T","button")}}},[e._v("T")]):e._e(),"RNA"===e.store.gameMode?r("el-button",{staticClass:"key-button",attrs:{disabled:e.store.inputEnabled,id:"key-U",type:"warning"},on:{click:function(t){return e.buttonClick("key-U","button")}}},[e._v("U")]):e._e()],1)],1)],1)},c=[],s=(n("99af"),n("fb6a"),n("b680"),n("ac1f"),n("1276"),{sequence:"AAGATCGCAATC",currentNucIndex:0,inputNucleotide:function(e){var t=s.sequence,n=t.length,r=s.currentNucIndex,o=s.sequence[n-r-2];s.currPlayerNuc=e;var i="RNA"===s.gameMode?s.RNAcomplement:s.DNAcomplement;e!=i[o]?(s.playerScore+=s.negativeScore,s.playerNucleotides=["B","B","_","X"]):(s.playerScore+=s.positiveScore,s.playerNucleotides=["B","B","_",e]),r===n-2&&s.endGame(),s.currentNucIndex+=1,s.referenceNucleotides=("BBB"+t).toUpperCase().split("").slice(-1*(s.currentNucIndex+4),n-s.currentNucIndex)},startGame:function(){s.currentNucIndex=0,s.playerScore=0,s.gameStatus="start",s.gameModeChange=!0},endGame:function(){for(var e in s.playerNucleotides[2]="B",s.gameModeChange=!1,s.disableInput(),s.timeOuts)window.clearTimeout(s.timeOuts[e]);s.playerTime=((s.totalTime-s.timer)/1e3).toFixed(1),s.gameStatus="end"},enableInput:function(){s.inputEnabled=!1},disableInput:function(){s.inputEnabled=!0},updateTimer:function(e){s.timer=e},setTimeOuts:function(){for(var e=function(e){s.timeOuts.push(window.setTimeout((function(){s.updateTimer(s.totalTime-100*(e+1))}),100*(e+1)))},t=0;t<s.totalTime/100;t++)e(t);s.timeOuts.push(window.setTimeout((function(){s.gameStatus="end",s.disableInput(),s.playerTime=(s.totalTime/1e3).toFixed(1)}),s.totalTime))},gameMode:"DNA",gameStatus:"enter",gameModeChange:!1,timeOuts:[],gameSpeed:5e3,positiveScore:100,negativeScore:-50,DNAcomplement:{A:"T",C:"G",G:"C",T:"A"},RNAcomplement:{A:"U",C:"G",G:"C",T:"A"},prevPlayerNuc:"",currPlayerNuc:"_",referenceNucleotides:[],playerNucleotides:[],playerScore:0,totalTime:1e4,playerTime:0,timer:0,inputEnabled:!0});s.prevPlayerNuc=s.DNAcomplement[s.sequence[s.sequence.length-1]],s.playerNucleotides=["B","B","_",s.prevPlayerNuc],s.referenceNucleotides=s.sequence.slice(-4).split(""),s.timer=s.totalTime;var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{display:"flex","flex-direction":"column","flex-wrap":"wrap","overflow-inline":"hidden","white-space":"nowrap"}},e._l(e.currentNucs,(function(e,t){return n("nucleotide",{key:t,staticClass:"nucleotide",attrs:{base:e}})})),1)])},l=[],d=(n("d3b7"),n("96cf"),n("1da1")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{title:e.titles[e.base]}},[n("span",{staticClass:"tag",style:e.tagStyle},[e._v(e._s(e.base))])])},f=[],m={name:"Nucleotide",props:{base:String},data:function(){return{colors:{A:"#3F51B6",C:"#43A047",G:"#E54138",T:"#FD910B",U:"#FD910B",X:"black",B:"white",_:"#4e4e4e"},titles:{A:"Adenine",C:"Cytosine",G:"Guanine",T:"Thymine",U:"Uracil"}}},computed:{tagStyle:function(){var e=this;return{backgroundColor:e.colors[e.base]}}}},y=m,b=(n("175f"),n("2877")),g=Object(b["a"])(y,p,f,!1,null,"275ea0de",null),v=g.exports,x={name:"ReferenceLane",components:{Nucleotide:v},props:{sequence:String},computed:{currentNucs:function(){var e=this,t=e.sequence,n=t.length+3,r=("BBB"+t).toUpperCase().split("").slice(-1*(s.currentNucIndex+4),n-s.currentNucIndex);return r}},methods:{startAnimation:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,o,i,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n=e,r=n.sequence,o=r.length,s.enableInput(),i=function(e){window.setTimeout((function(){s.updateTimer(5e3-100*(e+1))}),100*e)},a=0;a<49;a++)i(a);if(!(o-s.currentNucIndex>2)){t.next=12;break}return c=new Promise((function(e,t){window.setTimeout((function(){s.updateTimer(s.gameSpeed),s.increaseCurrentIndex(),e("Done!")}),s.gameSpeed)})),t.next=10,c;case 10:t.sent,n.startAnimation();case 12:case"end":return t.stop()}}),t)})))()}}},h=x,k=(n("d75b"),Object(b["a"])(h,u,l,!1,null,"6bafdd11",null)),w=k.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{display:"flex","flex-direction":"column","flex-wrap":"wrap","overflow-inline":"hidden","white-space":"nowrap"}},e._l(e.presentNucs,(function(e,t){return n("nucleotide",{key:t,staticClass:"nucleotide",attrs:{base:e}})})),1)])},S=[],T=(n("2ef0"),{name:"PlayerLane",components:{Nucleotide:v},data:function(){return{}},computed:{presentNucs:function(){return s.playerNucleotides}},methods:{}}),_=T,N=(n("7133"),Object(b["a"])(_,C,S,!1,null,"baa6229e",null)),A=N.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"font-weight":"bold","font-size":"1rem",width:"90%",position:"relative",margin:"auto",top:"5rem"}},[n("div",{staticClass:"game-info",staticStyle:{padding:"0.5rem 0px",margin:"0px auto","border-top-right-radius":"5px","border-top-left-radius":"5px"}},[e._v(" GAME END! ")]),n("div",{staticClass:"game-info",staticStyle:{padding:"0.4rem 0px"}},[e._v(" Time: "+e._s(e.store.playerTime)+"s ")]),n("div",{staticClass:"game-info",staticStyle:{padding:"0.4rem 0px"}},[e._v(" Score: "+e._s(e.store.playerScore)+" ")]),n("div",{staticClass:"game-info",staticStyle:{padding:"0.5rem 0px","border-bottom-right-radius":"5px","border-bottom-left-radius":"5px"}},[e._v(" Nucleotides: "+e._s(e.store.currentNucIndex)+" ")])])},B=[],G={name:"EndGame",data:function(){return{store:s}}},I=G,E=(n("32be"),Object(b["a"])(I,O,B,!1,null,"5c0ee1e7",null)),P=E.exports,M=(n("cffa"),{name:"Home",components:{ReferenceLane:w,PlayerLane:A,EndGame:P},data:function(){return{store:s}},mounted:function(){this.openInfo()},methods:{startGame:function(){var e=document.getElementById("start");e.style.cssText="box-shadow: none; top: 5px; left: -5px",window.setTimeout((function(){var e=document.getElementById("start");e.style.cssText="box-shadow: -5px 5px #03B2C9, -4px 4px #03B2C9, -3px 3px #03B2C9, -2px 2px #03B2C9, -1px 1px #03B2C9; top: 0px; left: 0px"}),75),s.startGame(),s.enableInput(),s.setTimeOuts()},buttonClick:function(e){var t=document.getElementById("audio");t.play();var n=e.slice(-1),r={A:"#8490cf",C:"#84be87",G:"#f38d88",T:"#ffb861",U:"#ffb861"},o=r[n],i=document.getElementById(e);i.style.cssText="box-shadow: none; top: 5px; left: -5px",window.setTimeout((function(){var t=document.getElementById(e);t.style.cssText="box-shadow: -5px 5px ".concat(o,", -4px 4px ").concat(o,", -3px 3px ").concat(o,", -2px 2px ").concat(o,", -1px 1px ").concat(o,"; top: 0px; left: 0px")}),150),s.inputNucleotide(n)},keyPressed:function(e){this.buttonClick("key-".concat(e))},openInfo:function(){this.$alert('Hi Everyone! <i class="fas icon-fa-smile" style="color: yellow; background-color: black; border-radius: 15px"></i> <br>          This is a simple game to understand sequencing by synthesis.         As you start the game you get a sequence to which you have to generate          the complementary strand.',"Info",{confirmButtonText:"Got it!",dangerouslyUseHTMLString:!0})}},computed:{}}),j=M,q=(n("8b71"),Object(b["a"])(j,a,c,!1,null,null,null)),U=q.exports,D={name:"App",components:{Home:U}},R=D,$=(n("034f"),n("5c64"),Object(b["a"])(R,o,i,!1,null,null,null)),z=$.exports,F=n("5c96"),H=n.n(F);n("3cd6");r["default"].config.productionTip=!1,r["default"].use(H.a),r["default"].config.keyCodes={A:65,C:67,G:71,T:84},new r["default"]({render:function(e){return e(z)}}).$mount("#app")},"5c64":function(e,t,n){"use strict";var r=n("d32a"),o=n.n(r);o.a},"6f4d":function(e,t,n){e.exports=n.p+"media/button.84a60d37.wav"},7133:function(e,t,n){"use strict";var r=n("3322"),o=n.n(r);o.a},"75cd":function(e,t,n){},"85ec":function(e,t,n){},"88d7":function(e,t,n){},"8b71":function(e,t,n){"use strict";var r=n("88d7"),o=n.n(r);o.a},d32a:function(e,t,n){},d75b:function(e,t,n){"use strict";var r=n("208a"),o=n.n(r);o.a},f54f:function(e,t,n){}});
//# sourceMappingURL=app.653fa7ef.js.map