(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{517:function(t,e,c){var content=c(579);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(24).default)("2e107364",content,!0,{sourceMap:!1})},518:function(t,e,c){var content=c(581);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(24).default)("ef22cb70",content,!0,{sourceMap:!1})},578:function(t,e,c){"use strict";c(517)},579:function(t,e,c){var l=c(23)((function(i){return i[1]}));l.push([t.i,".VueCarousel-navigation-next,.VueCarousel-navigation-prev{z-index:2;background:var(--bg-card-darken-color)!important;color:var(--text-color)!important;border-radius:4px;height:48px;width:48px}.VueCarousel-navigation-prev{left:60px!important}.VueCarousel-navigation-next{right:60px!important}",""]),t.exports=l},580:function(t,e,c){"use strict";c(518)},581:function(t,e,c){var l=c(23)((function(i){return i[1]}));l.push([t.i,".slider-top[data-v-8a550968]{width:100%}.slide[data-v-8a550968],.slider-top[data-v-8a550968]{height:250px}.slide_item[data-v-8a550968]{width:100%;height:250px;position:relative;-webkit-transition:all 2s ease-in;transition:all 2s ease-in}.slide_item>img[data-v-8a550968]{height:250px;width:100%;-o-object-fit:cover;object-fit:cover}.slide-surah[data-v-8a550968]{width:90%;margin:0 auto;display:block;text-decoration:none}.slide-surah__title[data-v-8a550968]{font-size:1.5rem}.home__wrapper[data-v-8a550968]{margin:1em;display:grid;grid-gap:.5em;gap:.5em;grid-template-columns:repeat(3,minmax(0,1fr))}.item__link[data-v-8a550968]{text-decoration:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;padding:1em .5em;border-radius:4px;font-size:.8rem;background:var(--bg-card-color);color:var(--text-color)}.item__link img[data-v-8a550968],.item__link svg[data-v-8a550968]{margin-bottom:1em}.text-heading[data-v-8a550968]{padding:1em 1em 0}",""]),t.exports=l},615:function(t,e,c){"use strict";c.r(e);c(38),c(25);var l=c(13),r=c(19),n=c(16),v=c(17),d=c(7),o=c(2),h=c(6),f=c(8),_=c(52),m=c(113),z=c(36);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,l=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;c=Reflect.construct(l,arguments,r)}else c=l.apply(this,arguments);return Object(v.a)(this,c)}}var w=function(t){Object(n.a)(c,t);var e=x(c);function c(){var t;return Object(l.a)(this,c),(t=e.apply(this,arguments)).AppConstant=_.a,t.surahRecommendation=m.a.data,t.dataCarousel=[{id:"1",origin:"/assets/images/illustration_1.jpg",webp:"/assets/images/illustration_1.webp"}],t}return Object(r.a)(c,[{key:"isHaveFav",get:function(){return Object(z.a)(this.surahFavorite)}},{key:"metaHead",get:function(){return{title:_.m,meta:[{hid:"description",name:"description",content:_.b},{hid:"og:title",property:"og:title",content:_.m},{hid:"twitter:title",name:"twitter:title",content:_.m},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}],link:[{rel:"canonical",href:"".concat(_.a.PATH)}]}}},{key:"head",value:function(){return this.metaHead}},{key:"beforeMount",value:function(){this.setHeaderTitle(_.a.TITLE)}}]),c}(h.Vue);Object(o.a)([f.State],w.prototype,"surahFavorite",void 0),Object(o.a)([f.State],w.prototype,"settingActiveTheme",void 0),Object(o.a)([f.Mutation],w.prototype,"setHeaderTitle",void 0);var k=w=Object(o.a)([Object(h.Component)({components:{}})],w),y=(c(578),c(580),c(5)),component=Object(y.a)(k,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"container"},[c("div",{staticClass:"home"},[c("div",{staticClass:"slider-top"},t._l(t.dataCarousel,(function(e){return c("div",{key:e.id,staticClass:"slide"},[c("picture",{staticClass:"slide_item"},[c("source",{attrs:{srcset:e.webp,type:"image/webp"}}),t._v(" "),c("source",{attrs:{srcset:e.origin,type:"image/jpeg"}}),t._v(" "),c("img",{attrs:{src:e.origin,alt:"Reading Quran"}})])])})),0),t._v(" "),c("div",{staticClass:"home__wrapper"},[c("div",{staticClass:"item"},[c("nuxt-link",{staticClass:"item__link has-shadow",attrs:{to:"/all-surah/"}},[c("svg",{attrs:{width:"24",height:"24","enable-background":"new 0 0 512.037 512.037",viewBox:"0 0 512.037 512.037"}},[c("g",[c("path",{attrs:{fill:"#e63950",d:"m431.902 511.466c4.514 1.276 9.368.393 13.154-2.446 3.75-2.842 5.962-7.28 5.962-11.982v-91.538l-79.321-7.337-115.679 63.051z"}}),t._v(" "),c("path",{attrs:{fill:"#ff6c6c",d:"m61.018 497.037c0 4.702 2.212 9.141 5.962 11.982 3.782 2.837 8.636 3.723 13.154 2.446l175.884-50.253-113.285-62.367-81.715 6.653z"}}),t._v(" "),c("path",{attrs:{fill:"#613d5c",d:"m505.558 62.703c-4.014-2.798-9.199-3.472-13.813-1.714l-78.461 29.048h-157.266-157.265l-78.461-29.048c-4.614-1.758-9.8-1.084-13.813 1.714-4.043 2.812-6.46 7.412-6.46 12.334v302c0 6.694 4.438 12.583 10.884 14.429l50.116 14.033 195 55.714 195-55.714 50.116-14.033c6.445-1.846 10.884-7.734 10.884-14.429v-302c-.001-4.922-2.418-9.521-6.461-12.334z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m501.135 391.466c6.445-1.846 10.884-7.734 10.884-14.429v-302c0-4.922-2.417-9.521-6.46-12.334-4.014-2.798-9.199-3.472-13.813-1.714l-78.461 29.048h-157.267v371.175l195-55.714z"}}),t._v(" "),c("path",{attrs:{fill:"#fff5f5",d:"m444.718 2.736c-3.9-2.699-9-3.6-13.499-1.8l-175.201 58.2-175.2-58.2c-4.799-1.8-9.598-.899-13.499 1.8-3.9 3.001-6.301 7.5-6.301 12.301v251.3l195 104.099 195-104.399v-251c0-4.801-2.4-9.3-6.3-12.301z"}}),t._v(" "),c("path",{attrs:{fill:"#efe2dd",d:"m451.018 15.037c0-4.801-2.401-9.3-6.301-12.301-3.9-2.699-9-3.6-13.499-1.8l-175.201 58.2v311.3l195-104.399v-251z"}}),t._v(" "),c("path",{attrs:{fill:"#efe2dd",d:"m308.218 313.738c-22.5 7.5-40.499 22.5-52.2 41.699-11.7-19.199-29.7-34.199-52.2-41.699l-142.8-47.401v50.7c0 6.599 4.2 12.299 10.201 14.099l180 60c1.5.601 3.3.901 4.799.901 1.5 0 3.3-.3 4.799-.901l180-60c6-1.8 10.201-7.5 10.201-14.099v-51z"}}),t._v(" "),c("path",{attrs:{fill:"#cdbfba",d:"m440.818 331.136c6-1.8 10.201-7.5 10.201-14.099v-51l-142.8 47.701c-22.5 7.5-40.499 22.5-52.2 41.699v36.601c1.5 0 3.3-.3 4.799-.901z"}})])]),t._v("\n          "+t._s(t.AppConstant.SURAT_LIST)+"\n        ")])],1),t._v(" "),c("div",{staticClass:"item"},[c("nuxt-link",{staticClass:"item__link has-shadow",attrs:{to:"/juz-amma/"}},[c("svg",{attrs:{width:"24",height:"24","enable-background":"new 0 0 512 512",viewBox:"0 0 512 512"}},[c("g",[c("path",{attrs:{fill:"#4b2746",d:"m316 512c-8.291 0-15-6.709-15-15v-61c0-8.291 6.709-15 15-15s15 6.709 15 15v61c0 8.291-6.709 15-15 15z"}}),t._v(" "),c("g",{attrs:{fill:"#613d5c"}},[c("path",{attrs:{d:"m271 436v61c0 8.399-6.599 15-15 15s-15-6.601-15-15v-61c0-8.401 6.599-15 15-15s15 6.599 15 15z"}}),t._v(" "),c("path",{attrs:{d:"m196 512c-8.291 0-15-6.709-15-15v-61c0-8.291 6.709-15 15-15s15 6.709 15 15v61c0 8.291-6.709 15-15 15z"}}),t._v(" "),c("path",{attrs:{d:"m121 451v46c0 8.291 6.709 15 15 15s15-6.709 15-15v-76z"}})]),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m361 497c0 8.291 6.709 15 15 15s15-6.709 15-15v-46l-30-30z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m271 436v61c0 8.399-6.599 15-15 15v-91c8.401 0 15 6.599 15 15z"}}),t._v(" "),c("path",{attrs:{fill:"#613d5c",d:"m196 91c-8.291 0-15-6.709-15-15v-61c0-8.291 6.709-15 15-15s15 6.709 15 15v61c0 8.291-6.709 15-15 15z"}}),t._v(" "),c("path",{attrs:{fill:"#613d5c",d:"m271 15v61c0 8.399-6.599 15-15 15s-15-6.601-15-15v-61c0-8.401 6.599-15 15-15s15 6.599 15 15z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m316 91c-8.291 0-15-6.709-15-15v-61c0-8.291 6.709-15 15-15s15 6.709 15 15v61c0 8.291-6.709 15-15 15z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m376 0c-8.291 0-15 6.709-15 15v76l30-30v-46c0-8.291-6.709-15-15-15z"}}),t._v(" "),c("path",{attrs:{fill:"#613d5c",d:"m151 15c0-8.291-6.709-15-15-15s-15 6.709-15 15v46l30 30z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m256 91v-91c8.401 0 15 6.599 15 15v61c0 8.399-6.599 15-15 15z"}}),t._v(" "),c("path",{attrs:{fill:"#ff6c6c",d:"m121 61h270v390h-270z"}}),t._v(" "),c("path",{attrs:{fill:"#e63950",d:"m256 61h135v390h-135z"}}),t._v(" "),c("path",{attrs:{fill:"#613d5c",d:"m316 181h-18.6c-5.099-21.301-15.901-40.501-30.901-55.501-2.699-2.999-6.599-4.499-10.499-4.499s-7.8 1.5-10.499 4.499c-15 15-25.801 34.2-30.901 55.501h-18.6c-8.401 0-15 6.599-15 15v120c0 8.399 6.599 15 15 15h18.6c5.099 21.299 15.901 40.499 30.901 55.499 2.699 3.001 6.599 4.501 10.499 4.501s7.8-1.5 10.499-4.501c15-15 25.801-34.2 30.901-55.499h18.6c8.401 0 15-6.601 15-15v-120c0-8.401-6.599-15-15-15z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m331 196v120c0 8.399-6.599 15-15 15h-18.6c-5.099 21.299-15.901 40.499-30.901 55.499-2.699 3.001-6.599 4.501-10.499 4.501v-270c3.9 0 7.8 1.5 10.499 4.499 15 15 25.801 34.2 30.901 55.501h18.6c8.401 0 15 6.599 15 15z"}}),t._v(" "),c("circle",{attrs:{cx:"196",cy:"376",r:"15",fill:"#613d5c"}}),t._v(" "),c("circle",{attrs:{cx:"316",cy:"376",r:"15",fill:"#4b2746"}}),t._v(" "),c("circle",{attrs:{cx:"316",cy:"136",r:"15",fill:"#4b2746"}}),t._v(" "),c("circle",{attrs:{cx:"196",cy:"136",r:"15",fill:"#613d5c"}})])]),t._v("\n          "+t._s(t.AppConstant.JUZ_AMMA)+"\n        ")])],1),t._v(" "),c("div",{staticClass:"item"},[c("nuxt-link",{staticClass:"item__link has-shadow",attrs:{to:"/daily-doa/"}},[c("svg",{attrs:{width:"24",height:"24","enable-background":"new 0 0 512 512",viewBox:"0 0 512 512"}},[c("g",[c("path",{attrs:{fill:"#ffe1ba",d:"m192.951 512h-90c-8.284 0-15-6.716-15-15 0-24.853 20.147-45 45-45h60l30 26.875z"}}),t._v(" "),c("path",{attrs:{fill:"#ffbfab",d:"m411.951 237.999-23.099 17.401-42.326-15.383 4.826-31.417 24.598-18.6c12.902-9.6 31.8-7.5 42.001 6s7.2 32.1-6 41.999z"}}),t._v(" "),c("g",[c("path",{attrs:{fill:"#fff5f5",d:"m263.451 286c20.402 19.799 53.101 23.399 78.001 5.099l23.399-17.701 24.001-17.999-37.5-46.8-24.001 17.999-21.9 16.502-23.699-35.4c-11.1-16.802-29.702-26.7-49.801-26.7h-39-15c-32.999 0-60 26.999-60 60v151c0 32.999 27.001 60 60 60h15v60h105c32.999 0 60-27.001 60-60 0-33.001-27.001-60-60-60h-30c-16.5 0-30-13.5-30-30v-100.901z"}}),t._v(" "),c("path",{attrs:{fill:"#efe2dd",d:"m357.951 452c0-33.001-27.001-60-60-60h-30c-16.5 0-30-13.5-30-30v-100.901l25.5 24.901c20.402 19.799 53.101 23.399 78.001 5.099l23.399-17.701 24.001-17.999-37.5-46.8-24.001 17.999-21.9 16.502-23.699-35.4c-11.1-16.802-29.702-26.7-49.801-26.7h-39v271 60h105c33 0 60-27.001 60-60z"}})]),t._v(" "),c("path",{attrs:{fill:"#ffe1ba",d:"m222.951 61h-30-30l-30 30v30c0 33.091 26.909 60 60 60s60-26.909 60-60v-30z"}}),t._v(" "),c("path",{attrs:{fill:"#ffbfab",d:"m252.951 121v-30l-30-30h-30v120c33.091 0 60-26.909 60-60z"}}),t._v(" "),c("path",{attrs:{fill:"#ff6c6c",d:"m237.951 0h-45-45c-8.291 0-15 6.709-15 15v76h60 60v-76c0-8.291-6.709-15-15-15z"}}),t._v(" "),c("path",{attrs:{fill:"#e63950",d:"m252.951 15c0-8.291-6.709-15-15-15h-45v91h60z"}})])]),t._v("\n          "+t._s(t.AppConstant.DAILY_DOA)+"\n        ")])],1),t._v(" "),c("div",{staticClass:"item"},[c("nuxt-link",{staticClass:"item__link has-shadow",attrs:{to:"/asmaul-husna/"}},[c("svg",{attrs:{width:"24",height:"24","enable-background":"new 0 0 512 512",viewBox:"0 0 512 512"}},[c("g",[c("path",{attrs:{fill:"#613d5c",d:"m507.499 245.499-65.499-65.999v-94.5c0-8.099-6.899-15-15-15h-94.5l-66-65.501c-2.7-2.999-6.6-4.499-10.5-4.499s-7.8 1.5-10.499 4.499l-66.001 65.501h-94.5c-8.101 0-15 6.901-15 15v94.5l-65.499 65.999c-6 5.7-6 15.3 0 21l65.499 66.001v94.5c0 8.101 6.899 15 15 15h94.5l66 65.499c2.7 3.001 6.6 4.501 10.5 4.501s7.8-1.5 10.499-4.501l66-65.499h94.501c8.101 0 15-6.899 15-15v-94.5l65.499-66c6.001-5.701 6.001-15.301 0-21.001z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m507.499 266.499-65.499 66.001v94.5c0 8.101-6.899 15-15 15h-94.5l-66 65.499c-2.7 3.001-6.6 4.501-10.5 4.501v-512c3.9 0 7.8 1.5 10.499 4.499l66.001 65.501h94.5c8.101 0 15 6.901 15 15v94.5l65.499 65.999c6.001 5.7 6.001 15.3 0 21z"}}),t._v(" "),c("path",{attrs:{fill:"#ff6c6c",d:"m475.699 256-63.699 64.2v91.8h-91.8l-64.2 63.699-64.2-63.699h-91.8v-91.8l-63.699-64.2 63.699-64.2v-91.8h91.8l64.2-63.701 64.2 63.701h91.8v91.8z"}}),t._v(" "),c("path",{attrs:{fill:"#e63950",d:"m475.699 256-63.699 64.2v91.8h-91.8l-64.2 63.699v-439.4l64.2 63.701h91.8v91.8z"}}),t._v(" "),c("path",{attrs:{fill:"#fed843",d:"m331 256v91c0 24.899-20.099 45-45 45-11.7 0-21.899-4.501-30-11.7-8.101 7.2-18.3 11.7-30 11.7-24.901 0-45-20.101-45-45v-61c0-8.401-6.599-15-15-15s-15 6.599-15 15c0 8.399-6.599 15-15 15s-15-6.601-15-15c0-24.901 20.099-45 45-45s45 20.099 45 45v61c0 8.399 6.599 15 15 15s15-6.601 15-15v-91c0-8.401 6.599-15 15-15s15 6.599 15 15v91c0 8.399 6.599 15 15 15s15-6.601 15-15v-91c0-8.401 6.599-15 15-15s15 6.599 15 15z"}}),t._v(" "),c("path",{attrs:{fill:"#fabe2c",d:"m391 256v121c0 8.399-6.599 15-15 15s-15-6.601-15-15v-121c0-8.401 6.599-15 15-15s15 6.599 15 15z"}}),t._v(" "),c("path",{attrs:{fill:"#fed843",d:"m271 90v15c0 8.399-6.599 15-15 15s-15-6.601-15-15v-15c0-8.401 6.599-15 15-15s15 6.599 15 15z"}}),t._v(" "),c("path",{attrs:{fill:"#fed843",d:"m331 150v16c0 24.899-20.099 45-45 45-11.7 0-21.899-4.501-30-11.7-8.101 7.2-18.3 11.7-30 11.7-24.901 0-45-20.101-45-45v-16c0-8.401 6.599-15 15-15s15 6.599 15 15v16c0 8.399 6.599 15 15 15s15-6.601 15-15v-16c0-8.401 6.599-15 15-15s15 6.599 15 15v16c0 8.399 6.599 15 15 15s15-6.601 15-15v-16c0-8.401 6.599-15 15-15s15 6.599 15 15z"}}),t._v(" "),c("g",{attrs:{fill:"#fabe2c"}},[c("path",{attrs:{d:"m256 120v-45c8.401 0 15 6.599 15 15v15c0 8.399-6.599 15-15 15z"}}),t._v(" "),c("path",{attrs:{d:"m331 150v16c0 24.899-20.099 45-45 45-11.7 0-21.899-4.501-30-11.7v-64.3c8.401 0 15 6.599 15 15v16c0 8.399 6.599 15 15 15s15-6.601 15-15v-16c0-8.401 6.599-15 15-15s15 6.599 15 15z"}}),t._v(" "),c("path",{attrs:{d:"m331 256v91c0 24.899-20.099 45-45 45-11.7 0-21.899-4.501-30-11.7v-139.3c8.401 0 15 6.599 15 15v91c0 8.399 6.599 15 15 15s15-6.601 15-15v-91c0-8.401 6.599-15 15-15s15 6.599 15 15z"}})])])]),t._v("\n          "+t._s(t.AppConstant.ASMAUL_HUSNA)+"\n        ")])],1),t._v(" "),c("div",{staticClass:"item"},[c("nuxt-link",{staticClass:"item__link has-shadow",attrs:{to:"/wirid/"}},[c("svg",{attrs:{width:"24",height:"24","enable-background":"new 0 0 512 512",viewBox:"0 0 512 512"}},[c("g",[c("g",{attrs:{fill:"#351b33"}},[c("path",{attrs:{d:"m443.237 150.276c-4.33-9.467-9.592-18.582-15.661-27.076-4.816-6.743-3.242-16.107 3.501-20.923 6.733-4.806 16.169-3.346 20.923 3.501 7.168 10.047 13.403 20.84 18.52 32.048 3.449 7.53.124 16.428-7.416 19.867-7.516 3.445-16.419.13-19.867-7.417z"}}),t._v(" "),c("path",{attrs:{d:"m457.386 234.528c.984-10.389.984-20.913 0-31.302-.787-8.245 5.262-15.578 13.507-16.345 8.224-.808 15.599 5.22 16.345 13.507 1.17 12.274 1.17 24.704 0 36.978-.767 8.245-8.1 14.294-16.345 13.507-8.21-.755-14.302-8.081-13.507-16.345z"}}),t._v(" "),c("path",{attrs:{d:"m429.171 333.861c-5.096-5.096-5.904-13.258-1.595-19.307 6.07-8.494 11.332-17.609 15.661-27.076 3.439-7.541 12.336-10.866 19.867-7.416 7.572 3.449 10.866 12.336 7.416 19.867-5.117 11.207-11.352 22-18.52 32.048-4.816 6.743-14.18 8.318-20.923 3.501-.694-.488-1.326-1.037-1.906-1.617z"}}),t._v(" "),c("path",{attrs:{d:"m354.303 388.862c-3.449-7.53-.124-16.428 7.416-19.867 9.467-4.33 18.582-9.592 27.076-15.661 6.733-4.806 16.179-3.335 20.923 3.501 4.816 6.743 3.242 16.107-3.501 20.923-10.047 7.168-20.84 13.403-32.048 18.52-7.515 3.446-16.418.132-19.866-7.416z"}}),t._v(" "),c("path",{attrs:{d:"m261.122 396.651c.766-8.245 8.1-14.294 16.345-13.507 10.389.984 20.913.984 31.302 0 8.224-.808 15.568 5.231 16.345 13.507.787 8.245-5.262 15.578-13.507 16.345-12.274 1.17-24.704 1.17-36.978 0-8.209-.755-14.302-8.08-13.507-16.345z"}}),t._v(" "),c("path",{attrs:{d:"m176.518 356.835c4.816-6.743 14.18-8.317 20.923-3.501 8.494 6.07 17.609 11.332 27.076 15.661 7.52 3.48 10.876 12.326 7.416 19.867-3.439 7.541-12.336 10.866-19.867 7.416-11.207-5.117-22-11.352-32.048-18.52-6.629-4.65-8.375-14.078-3.5-20.923z"}})]),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m98.999 237.366c-1.17-12.274-1.17-24.704 0-36.978.766-8.245 8.1-14.294 16.345-13.507s14.294 8.141 13.507 16.345c-.984 10.389-.984 20.913 0 31.302.787 8.245-5.262 15.578-13.507 16.345-8.272.795-15.591-5.305-16.345-13.507z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m115.717 137.825c5.117-11.207 11.352-22 18.52-32.048 4.816-6.743 14.18-8.317 20.923-3.501 6.857 4.785 8.297 14.18 3.501 20.923-6.07 8.494-11.332 17.609-15.661 27.076-3.439 7.541-12.336 10.866-19.867 7.416-7.533-3.44-10.868-12.336-7.416-19.866z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m176.518 80.919c-4.816-6.743-3.242-16.107 3.501-20.923 10.047-7.168 20.84-13.403 32.048-18.52 7.541-3.439 16.438-.114 19.867 7.416 3.449 7.53.124 16.428-7.416 19.867-9.467 4.33-18.582 9.592-27.076 15.661-6.851 4.879-16.282 3.115-20.924-3.501z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m261.122 41.102c-.787-8.245 5.261-15.579 13.507-16.345 12.274-1.17 24.704-1.17 36.978 0 8.255.777 14.294 8.121 13.507 16.345-.767 8.245-8.1 14.294-16.345 13.507-10.389-.984-20.913-.984-31.302 0-8.271.796-15.59-5.305-16.345-13.507z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m354.303 48.892c3.439-7.541 12.336-10.866 19.867-7.416 11.207 5.117 22 11.352 32.048 18.52 6.764 4.713 8.297 14.18 3.501 20.923-4.816 6.743-14.18 8.317-20.923 3.501-8.494-6.07-17.609-11.332-27.076-15.661-7.534-3.442-10.868-12.338-7.417-19.867z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m134.237 331.976c-7.168-10.047-13.403-20.84-18.52-32.048-3.449-7.53-.124-16.428 7.416-19.867 7.53-3.449 16.407-.062 19.867 7.416 4.33 9.467 9.592 18.582 15.661 27.076 4.816 6.743 3.242 16.107-3.501 20.923-6.85 4.88-16.282 3.116-20.923-3.5z"}}),t._v(" "),c("g",{attrs:{fill:"#613d5c"}},[c("circle",{attrs:{cx:"420.398",cy:"91.598",r:"45"}}),t._v(" "),c("circle",{attrs:{cx:"165.839",cy:"346.156",r:"45"}})]),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m452.217 123.417c17.546-17.546 17.546-46.093 0-63.64l-63.64 63.64c17.547 17.547 46.094 17.547 63.64 0z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m197.659 377.976c17.546-17.546 17.546-46.093 0-63.64l-63.64 63.64c17.547 17.546 46.093 17.546 63.64 0z"}}),t._v(" "),c("path",{attrs:{fill:"#ff6c6c",d:"m134.019 377.976c-23.399-23.399-61.454-23.399-84.853 0-19.369 19.369-44.286 99.561-48.605 114.964-1.471 5.22 0 10.834 3.832 14.667 3.832 3.832 9.447 5.303 14.667 3.832 15.402-4.319 95.589-29.241 114.959-48.61 23.399-23.399 23.399-61.454 0-84.853z"}}),t._v(" "),c("path",{attrs:{fill:"#e63950",d:"m19.06 511.439c15.402-4.319 95.589-29.241 114.959-48.61 23.399-23.399 23.399-61.454 0-84.853l-129.626 129.631c3.833 3.832 9.447 5.303 14.667 3.832z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m423.515 253.814c6.443-23.968 31.167-38.231 55.125-31.82 11.601 3.128 21.296 10.544 27.314 20.975 6.018 10.41 7.603 22.539 4.485 34.15-6.401 23.948-31.126 38.231-55.094 31.83-23.788-6.407-38.286-30.972-31.83-55.135z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m203.045 381.104c6.453-23.979 31.178-38.242 55.136-31.83 23.968 6.443 38.221 31.178 31.82 55.125-6.451 24.024-31.097 38.251-55.125 31.799-23.985-6.398-38.211-31.175-31.831-55.094z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m296.236 404.399c-6.412-23.958 7.851-48.683 31.809-55.115 23.979-6.412 48.714 7.841 55.125 31.799l.021.021c6.401 23.968-7.882 48.693-31.841 55.105-24.155 6.47-48.714-7.939-55.114-31.81z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m423.526 183.95c-6.422-23.968 7.841-48.693 31.799-55.125 23.989-6.401 48.714 7.945 55.125 31.82 6.433 24.018-7.781 48.663-31.809 55.115-23.928 6.393-48.679-7.83-55.115-31.81z"}}),t._v(" "),c("path",{attrs:{fill:"#4b2746",d:"m388.578 377.976c-17.546-17.546-17.546-46.093 0-63.64 17.546-17.546 46.093-17.546 63.64 0s17.546 46.093 0 63.64c-17.547 17.546-46.094 17.546-63.64 0z"}}),t._v(" "),c("path",{attrs:{fill:"#613d5c",d:"m75.797 160.634c6.401-23.948 31.126-38.231 55.094-31.83l.021.021c23.948 6.381 38.2 31.136 31.809 55.115-6.443 23.968-31.167 38.231-55.125 31.82-23.862-6.398-38.289-30.955-31.799-55.126z"}}),t._v(" "),c("path",{attrs:{fill:"#613d5c",d:"m296.236 33.355c6.451-24.024 31.097-38.251 55.125-31.799 23.958 6.432 38.231 31.147 31.83 55.094-.01.01-.01.01-.021.021-6.432 23.958-31.157 38.221-55.115 31.809-23.915-6.42-38.234-31.118-31.819-55.125z"}}),t._v(" "),c("path",{attrs:{fill:"#613d5c",d:"m203.066 56.67c-6.422-23.989 7.862-48.714 31.82-55.125 23.946-6.414 48.649 7.711 55.115 31.809 6.412 23.958-7.851 48.683-31.809 55.115-24.008 6.427-48.707-7.883-55.126-31.799z"}}),t._v(" "),c("path",{attrs:{fill:"#613d5c",d:"m75.787 277.11c-6.433-24.018 7.781-48.663 31.809-55.115 23.968-6.401 48.683 7.872 55.115 31.809 6.422 23.968-7.841 48.693-31.799 55.125-.01.01-.01.01-.021.021-23.96 6.392-48.668-7.86-55.104-31.84z"}}),t._v(" "),c("path",{attrs:{fill:"#613d5c",d:"m134.019 123.417c-17.546-17.546-17.546-46.093 0-63.64s46.093-17.546 63.64 0 17.546 46.093 0 63.64-46.093 17.547-63.64 0z"}})])]),t._v("\n          "+t._s(t.AppConstant.WIRID)+"\n        ")])],1),t._v(" "),c("div",{staticClass:"item"},[c("nuxt-link",{staticClass:"item__link has-shadow",attrs:{to:"/tahlil/"}},[c("svg",{attrs:{width:"24",height:"24","enable-background":"new 0 0 512 512",viewBox:"0 0 512 512"}},[c("g",[c("path",{attrs:{fill:"#fabe2c",d:"m406 90c-8.291 0-15-6.709-15-15v-60c0-8.291 6.709-15 15-15s15 6.709 15 15v60c0 8.291-6.709 15-15 15z"}}),t._v(" "),c("path",{attrs:{fill:"#fabe2c",d:"m436 60h-60c-8.291 0-15-6.709-15-15s6.709-15 15-15h60c8.291 0 15 6.709 15 15s-6.709 15-15 15z"}}),t._v(" "),c("g",[c("path",{attrs:{fill:"#efe2dd",d:"m301 241h-45-45l-30 30v60h75 75v-60z"}}),t._v(" "),c("path",{attrs:{fill:"#cdbfba",d:"m331 271-30-30h-45v90h75z"}}),t._v(" "),c("path",{attrs:{fill:"#fed843",d:"m289.545 45c-7.412-3.691-16.406-.703-20.127 6.709-2.564 5.112-7.705 8.291-13.418 8.291-8.276 0-15-6.724-15-15s6.724-15 15-15c8.291 0 15-6.709 15-15s-6.709-15-15-15c-24.814 0-45 20.186-45 45 0 19.53 12.578 36.024 30 42.237v17.763c0 8.291 6.709 15 15 15s15-6.709 15-15v-17.858c10.754-3.81 19.924-11.376 25.254-22.015 3.706-7.398.703-16.406-6.709-20.127z"}}),t._v(" "),c("g",{attrs:{fill:"#fabe2c"}},[c("path",{attrs:{d:"m271 15c0-8.291-6.709-15-15-15v30c8.291 0 15-6.709 15-15z"}}),t._v(" "),c("path",{attrs:{d:"m271 105v-17.858c10.754-3.81 19.924-11.376 25.254-22.015 3.706-7.397.703-16.406-6.709-20.127-7.412-3.691-16.406-.703-20.127 6.709-2.564 5.112-7.705 8.291-13.418 8.291v60c8.291 0 15-6.709 15-15z"}})])]),t._v(" "),c("path",{attrs:{fill:"#fff5f5",d:"m346 301h-90-90c-8.284 0-15 6.716-15 15v75h105 105v-75c0-8.284-6.716-15-15-15z"}}),t._v(" "),c("path",{attrs:{fill:"#efe2dd",d:"m361 316c0-8.284-6.716-15-15-15h-90v90h105z"}}),t._v(" "),c("path",{attrs:{fill:"#fed843",d:"m136 91h-15v-15c0-8.291-6.709-15-15-15s-15 6.709-15 15v15h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v15c0 8.291 6.709 15 15 15s15-6.709 15-15v-15h15c8.291 0 15-6.709 15-15s-6.709-15-15-15z"}}),t._v(" "),c("path",{attrs:{fill:"#ff6c6c",d:"m263.925 92.271c-2.417-1.509-5.171-2.263-7.925-2.263s-5.508.754-7.925 2.263c-16.216 10.092-97.075 63.871-97.075 111.229 0 25.327 5.757 49.409 30 67.5h75 75c24.243-18.091 30-42.173 30-67.5 0-47.358-80.859-101.137-97.075-111.229z"}}),t._v(" "),c("path",{attrs:{fill:"#e63950",d:"m361 203.5c0-47.358-80.859-101.137-97.075-111.229-2.417-1.509-5.171-2.263-7.925-2.263v180.992h75c24.243-18.091 30-42.173 30-67.5z"}}),t._v(" "),c("path",{attrs:{fill:"#fed843",d:"m495.037 165.092c-2.505-6.533-9.258-10.4-16.113-9.492-6.914.967-12.246 6.606-12.847 13.579-9.228 107.563-102.059 191.821-210.077 191.821s-200.849-84.258-210.077-191.821c-.601-6.973-5.933-12.612-12.847-13.579-6.797-.923-13.608 2.959-16.113 9.492-11.25 29.472-16.963 60.058-16.963 90.908 0 140.61 115.39 256 256 256s256-115.39 256-256c0-30.85-5.713-61.436-16.963-90.908z"}}),t._v(" "),c("path",{attrs:{fill:"#fabe2c",d:"m512 256c0-30.85-5.713-61.436-16.963-90.908-2.505-6.533-9.258-10.4-16.113-9.492-6.914.967-12.246 6.606-12.847 13.579-9.228 107.563-102.059 191.821-210.077 191.821v151c140.61 0 256-115.39 256-256z"}})])]),t._v("\n          "+t._s(t.AppConstant.TAHLIL)+"\n        ")])],1)]),t._v(" "),t.isHaveFav?[c("client-only",[c("h2",{staticClass:"text-heading"},[t._v("\n          Surat favorit\n        ")]),t._v(" "),c("carousel",{attrs:{"per-page":1,"pagination-enabled":!1,"navigation-enabled":!0,"navigation-next-label":">>","navigation-prev-label":"<<",autoplay:!0,loop:!0}},t._l(t.surahFavorite,(function(e){return c("slide",{key:e.index},[c("nuxt-link",{staticClass:"slide-surah",attrs:{to:"/"+e.index+"/"}},[c("div",{staticClass:"block_content has-shadow"},[c("div",{staticClass:"slide-surah__title font-arabic",attrs:{dir:"rtl",lang:"ar"}},[t._v("\n                  "+t._s(e.arabic)+"\n                ")]),t._v(" "),c("div",{},[t._v("\n                  "+t._s(e.latin)+"\n                ")]),t._v(" "),c("div",{},[t._v("\n                  ("+t._s(e.translation)+": "+t._s(e.ayah_count)+" Ayat)\n                ")])])])],1)})),1)],1)]:t._e(),t._v(" "),c("client-only",[c("h2",{staticClass:"text-heading"},[t._v("\n        Surat rekomendasi\n      ")]),t._v(" "),c("carousel",{attrs:{"per-page":1,"pagination-enabled":!1,"navigation-enabled":!0,"navigation-next-label":">>","navigation-prev-label":"<<",autoplay:!0,loop:!0}},t._l(t.surahRecommendation,(function(e){return c("slide",{key:e.index},[c("nuxt-link",{staticClass:"slide-surah",attrs:{to:"/"+e.index+"/"}},[c("div",{staticClass:"block_content has-shadow"},[c("div",{staticClass:"slide-surah__title font-arabic",attrs:{dir:"rtl",lang:"ar"}},[t._v("\n                "+t._s(e.arabic)+"\n              ")]),t._v(" "),c("div",{},[t._v("\n                "+t._s(e.latin)+"\n              ")]),t._v(" "),c("div",{},[t._v("\n                ("+t._s(e.translation)+": "+t._s(e.ayah_count)+" Ayat)\n              ")])])])],1)})),1)],1)],2)])}),[],!1,null,"8a550968",null);e.default=component.exports}}]);