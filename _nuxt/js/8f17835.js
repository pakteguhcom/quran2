(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{475:function(t,e,r){var content=r(483);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("473f1195",content,!0,{sourceMap:!1})},476:function(t,e,r){var content=r(485);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("3fc07b03",content,!0,{sourceMap:!1})},482:function(t,e,r){"use strict";r(475)},483:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,'.surah_nav[data-v-fc33dc28]{position:fixed;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;bottom:0;left:auto;z-index:10;margin:0;height:60px;text-align:center;width:100%;max-width:500px;background:var(--bg-card-color)}.surah_nav[data-v-fc33dc28],.surah_nav_item[data-v-fc33dc28]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--text-color)}.surah_nav_title[data-v-fc33dc28]{font-size:2rem}.surah_nav_next[data-v-fc33dc28],.surah_nav_prev[data-v-fc33dc28]{text-decoration:none}.surah_nav_next span[data-v-fc33dc28],.surah_nav_prev span[data-v-fc33dc28]{padding:0 .25em;font-size:2rem}.select[data-v-fc33dc28]{-webkit-appearance:none;padding:.5em 1.5rem .5em .5rem;outline:none;border:none;font-size:1rem;border-radius:4px;margin-left:.5em;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAAXNSR0IArs4c6QAAAJ1JREFUCB1jzMnJCWdkZBSdPHnyFAYk0NDQwPbmzZuVTExMk5iA4p7//v2bDFScC1OzatUqZqCC5f////cHyikwiYiIJAFNWgIUmARSCKQZDx48OAdIBwJNSZ8yZcp8RpBuoNFMQJ0LgRIxQO4hILYFKsgEOmEmSJ4ZRBw4cOC/l5fXxu/fvysDub5Ak3OAJswAyWEAkIm5ublu6BIADTRHW7YWzxEAAAAASUVORK5CYII=");background-position:right 7px center;background-repeat:no-repeat;color:var(--bg-color);background-color:var(--text-color);border:1px solid var(--bg-color)}@media screen and (max-width:480px){.text-nav[data-v-fc33dc28]{display:none}}',""]),t.exports=n},484:function(t,e,r){"use strict";r(476)},485:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,".verse__header[data-v-7fc105d2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.verse__arabic[data-v-7fc105d2]{font-size:2rem;width:100%;float:right;text-align:right;margin-top:.25em}",""]),t.exports=n},488:function(t,e,r){"use strict";r(38),r(25);var n=r(13),c=r(19),o=r(16),l=r(17),d=r(7),h=(r(55),r(45),r(26),r(34),r(46),r(47),r(21),r(48),r(239),r(2)),f=r(6),v=r(112),m=r.n(v),y=r(478),_=r.n(y);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var j=function(t){Object(o.a)(r,t);var e=x(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).selectedVerse=1,t}return Object(c.a)(r,[{key:"onChildChanged",value:function(t){var e="verse-".concat(t);document.getElementById(e).scrollIntoView({behavior:"smooth"}),setTimeout((function(){window.location.href="#verse-".concat(t)}),500)}},{key:"isAMP",get:function(){return Boolean(this.$route.name.includes("amp"))}},{key:"isHavePrev",get:function(){return this.surahId>1}},{key:"isHaveNext",get:function(){return this.surahId<114}},{key:"arrayAyah",get:function(){return Array.from({length:this.verseCount},(function(t,e){return e+1}))}}]),r}(f.Vue);Object(h.a)([Object(f.Prop)({type:Number,default:1})],j.prototype,"surahId",void 0),Object(h.a)([Object(f.Prop)({type:Object,default:function(){return{arabic:""}}})],j.prototype,"nextSurah",void 0),Object(h.a)([Object(f.Prop)({type:Object,default:function(){return{arabic:""}}})],j.prototype,"prevSurah",void 0),Object(h.a)([Object(f.Prop)({type:Number,default:0})],j.prototype,"verseCount",void 0),Object(h.a)([Object(f.Watch)("selectedVerse")],j.prototype,"onChildChanged",null);var O=j=Object(h.a)([Object(f.Component)({components:{MdArrowBackIcon:m.a,MdArrowForwardIcon:_.a}})],j),A=(r(482),r(5)),component=Object(A.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:"surah_nav amp--"+t.isAMP},[r("nuxt-link",{staticClass:"surah_nav_item surah_nav_prev",attrs:{to:"/"+(t.surahId-1)+"/"}},[t.isHavePrev?r("MdArrowBackIcon",{attrs:{w:"30px",h:"30px"}}):t._e(),t._v(" "),t.prevSurah?r("span",{staticClass:"text-nav"},[t._v("\n      "+t._s(t.prevSurah.arabic)+"\n    ")]):t._e()],1),t._v(" "),r("div",{staticClass:"surah_nav_item surah_nav_center"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedVerse,expression:"selectedVerse"}],staticClass:"select",attrs:{name:"verse-select"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedVerse=e.target.multiple?r:r[0]}}},t._l(t.arrayAyah,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]),t._v(" "),r("nuxt-link",{staticClass:"surah_nav_item surah_nav_next",attrs:{to:"/"+(t.surahId+1)+"/"}},[t.nextSurah?r("span",{staticClass:"text-nav"},[t._v("\n      "+t._s(t.nextSurah.arabic)+"\n    ")]):t._e(),t._v(" "),t.isHaveNext?r("MdArrowForwardIcon",{attrs:{w:"30px",h:"30px"}}):t._e()],1)],1)}),[],!1,null,"fc33dc28",null);e.a=component.exports},489:function(t,e,r){"use strict";r(38),r(25);var n=r(13),c=r(16),o=r(17),l=r(7),d=(r(239),r(2)),h=r(6),f=r(52),v=r(480);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var y=function(t){Object(c.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).AppConstant=f.a,t}return r}(h.Vue);Object(d.a)([Object(h.Prop)({type:[Object,Array],default:function(){return{}}})],y.prototype,"verseArray",void 0),Object(d.a)([Object(h.Prop)({type:Object,default:function(){return{}}})],y.prototype,"translations",void 0),Object(d.a)([Object(h.Prop)({type:Object,default:function(){return{}}})],y.prototype,"tafsir",void 0),Object(d.a)([Object(h.Prop)({type:Number,default:1})],y.prototype,"surahId",void 0),Object(d.a)([Object(h.Prop)({type:String,default:""})],y.prototype,"source",void 0),Object(d.a)([Object(h.Prop)({type:Boolean,default:!1})],y.prototype,"showSettings",void 0);var _=y=Object(d.a)([Object(h.Component)({components:{SingleVerse:v.a}})],y),x=(r(484),r(5)),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"verse__root"},[1!==t.surahId&&9!==t.surahId?r("div",{staticClass:"verse block_content has-shadow"},[r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"verse__arabic font-arabic",staticStyle:{"text-align":"center"},attrs:{dir:"rtl"}},[t._v("\n        "+t._s(t.AppConstant.BISMILLAH)+"\n      ")])])]):t._e(),t._v(" "),t._l(t.verseArray,(function(e,n){return r("div",{key:n},[r("SingleVerse",{attrs:{verse:e,"verse-index":n,"surah-id":t.surahId,translations:t.translations,tafsir:t.tafsir,source:t.source,"show-settings":t.showSettings}})],1)}))],2)}),[],!1,null,"7fc105d2",null);e.a=component.exports},519:function(t,e,r){var content=r(583);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("ddef9d3c",content,!0,{sourceMap:!1})},582:function(t,e,r){"use strict";r(519)},583:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,".detail__content[data-v-2ddd8ee4]{width:90%;margin:0 auto;padding-bottom:2em}",""]),t.exports=n},616:function(t,e,r){"use strict";r.r(e);r(38),r(25);var n=r(9),c=r(13),o=r(19),l=r(16),d=r(17),h=r(7),f=(r(41),r(2)),v=r(6),m=r(8),y=r(52),_=r(479),x=r(489),j=r(481),O=r(488),A=r(241),w=r(240);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var k=function(t){Object(l.a)(r,t);var e=S(r);function r(){var t;return Object(c.a)(this,r),(t=e.apply(this,arguments)).loading=!0,t}return Object(o.a)(r,[{key:"metaHead",get:function(){return{title:this.metaTitle,meta:[{hid:"description",name:"description",content:this.metaDesc},{hid:"og:title",property:"og:title",content:this.metaTitle},{hid:"og:description",property:"og:title",content:this.metaDesc},{hid:"twitter:title",name:"twitter:title",content:this.metaTitle},{hid:"twitter:description",name:"twitter:title",content:this.metaDesc},{hid:"twitter:label1",name:"twitter:label1",content:"Surat"},{hid:"twitter:label2",name:"twitter:label2",content:this.currentSurah.name_latin},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor},{hid:"article:tag",name:"article:tag",content:this.currentSurah.name_latin}],link:[{rel:"amphtml",href:"".concat(y.a.PATH,"amp/").concat(this.surahId,"/")}],script:[{id:"ld-breadcrumb",innerHTML:JSON.stringify(this.jsonldBreadcrumb),type:"application/ld+json",body:!0},{id:"ld-article",innerHTML:JSON.stringify(this.jsonLdArticle),type:"application/ld+json",body:!0}],__dangerouslyDisableSanitizers:["script"]}}},{key:"head",value:function(){return this.metaHead}},{key:"beforeMount",value:function(){this.setHeaderTitle("".concat(this.surahId,": ").concat(this.currentSurah.name_latin)),this.setPage("surah-detail")}}]),r}(v.Vue);Object(f.a)([m.State],k.prototype,"settingActiveTheme",void 0),Object(f.a)([m.State],k.prototype,"settingShowMuqaddimah",void 0),Object(f.a)([m.Mutation],k.prototype,"setHeaderTitle",void 0),Object(f.a)([m.Mutation],k.prototype,"setPage",void 0);var C=k=Object(f.a)([Object(v.Component)({components:{Breadcrumb:_.a,VerseCard:x.a,SurahHeader:j.a,SurahNavigation:O.a,SeoText:A.a},validate:function(t){var e=t.params;if(isNaN(e.surahid))return!1;var r=parseInt(e.surahid,10);return r>0&&r<115},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(w.f)({surahid:r.surahid});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()}})],k),I=(r(582),r(5)),component=Object(I.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("div",{staticClass:"detail"},[r("Breadcrumb",{attrs:{"surah-name":t.currentSurah.name_latin}}),t._v(" "),r("SurahHeader",{attrs:{"surah-number":Number(t.currentSurah.number),"surah-name":t.currentSurah.name,"surah-latin":t.currentSurah.name_latin,"surah-translation":t.currentSurah.translations.id.name,"verse-count":Number(t.currentSurah.number_of_ayah),source:"surah","show-settings":!0}}),t._v(" "),r("div",{staticClass:"detail__content"},[t.settingShowMuqaddimah?r("div",{staticClass:"block_content has-shadow text-left"},[r("div",{domProps:{innerHTML:t._s(t.currentSurahFromList.opening)}})]):t._e(),t._v(" "),r("VerseCard",{attrs:{"verse-array":t.currentSurah.text,"surah-id":t.surahId,translations:t.currentSurah.translations,tafsir:t.currentSurah.tafsir,source:"surah","show-settings":!0}}),t._v(" "),t.settingShowMuqaddimah?r("div",{staticClass:"block_content has-shadow text-left"},[r("div",{domProps:{innerHTML:t._s(t.currentSurahFromList.closing)}})]):t._e(),t._v(" "),r("SeoText",{attrs:{paragraph:"Baca Quran Surat "+t.currentSurah.name_latin+" beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya."}})],1),t._v(" "),r("SurahNavigation",{attrs:{"surah-id":t.surahId,"next-surah":t.nextSurah,"prev-surah":t.prevSurah,"verse-count":Number(t.currentSurah.number_of_ayah)}})],1)])}),[],!1,null,"2ddd8ee4",null);e.default=component.exports}}]);