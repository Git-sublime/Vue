webpackJsonp([1],{"0npn":function(t,e){},"2Gcx":function(t,e){},"9LlX":function(t,e){},"9n10":function(t,e){},BzWd:function(t,e){},HzSP:function(t,e){},JSX2:function(t,e){},L31D:function(t,e){},LFq0:function(t,e){},M6Sr:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var a=i("C7Lr")({name:"App"},n,!1,function(t){i("9LlX")},null,null).exports,r=i("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"header-left iconfont icon-fanhui"}),this._v(" "),this._m(0),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[e("span",[this._v(this._s(this.$store.state.city))]),this._v(" "),e("span",{staticClass:"iconfont icon-xiangxia"})])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont icon-sousuo head-seach-icon"}),this._v(" "),e("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市/景点/游玩主题"}})])}]};var c=i("C7Lr")({name:"homeHeader"},o,!1,function(t){i("Vmzz")},"data-v-f7220a6e",null).exports,l={name:"homeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:4e3}}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.list?e("swiper",{staticClass:"swiper",attrs:{options:this.swiperOption}},[this._l(this.list,function(t,i){return e("swiper-slide",{key:t.id},[e("img",{attrs:{src:t.imgUrl,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var u=i("C7Lr")(l,d,!1,function(t){i("L31D")},"data-v-3dde553b",null).exports,p={name:"homeIcons",props:{list:Array},data:function(){return{swiperOptions:{loop:!1}}},computed:{pages:function(){var t=[];return this.list&&this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.list,function(t){return i("div",{staticClass:"hide"})}),t._v(" "),i("swiper",{staticClass:"homeIcons",attrs:{options:t.swiperOptions}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e,s){return i("div",{key:e.id,staticClass:"icon-item"},[i("div",{staticClass:"icon-item-wrapper"},[i("img",{staticClass:"icon-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"icon-content",domProps:{textContent:t._s(e.desc)}})])}),0)}),1)],2)},staticRenderFns:[]};var v=i("C7Lr")(p,h,!1,function(t){i("0npn")},"data-v-2ec0a4d7",null).exports,f={name:"homeRecommend",props:{list:Array},filters:{formatPrice:function(t){return t?"￥"+t.toString()+"元":""}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热门推荐")]),t._v(" "),i("div",{staticClass:"recommend-wrapper"},[i("ul",t._l(t.list,function(e,s){return i("router-link",{key:e.id,staticClass:"recItem",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item-right"},[i("p",{staticClass:"item-title",domProps:{textContent:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"item-desc",domProps:{textContent:t._s(e.desc)}}),t._v(" "),i("p",{staticClass:"item-price"},[i("span",{staticClass:"sign"},[t._v("￥")]),t._v(" "),i("span",{staticClass:"price",domProps:{textContent:t._s(e.price)}}),t._v(" "),i("span",{staticClass:"text"},[t._v("起")]),t._v(" "),i("span",{staticClass:"address",domProps:{textContent:t._s(e.address)}})])])])}),1)])])},staticRenderFns:[]};var C=i("C7Lr")(f,m,!1,function(t){i("uQyb")},"data-v-57455eb7",null).exports,_={name:"homeWeekend",props:{list:Array}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("div",{staticClass:"recommend-wrapper"},[i("ul",t._l(t.list,function(e,s){return i("li",{key:e.id,staticClass:"recItem"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-right"},[i("p",{staticClass:"item-title",domProps:{textContent:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"item-desc",domProps:{textContent:t._s(e.desc)}})])])}),0)])])},staticRenderFns:[]};var w=i("C7Lr")(_,y,!1,function(t){i("QiYq")},"data-v-404d3c1e",null).exports,g=i("aozt"),k=i.n(g),x={components:{eHeader:c,eSwiper:u,eIcons:v,eRecommend:C,eWeekend:w},data:function(){return{res:{}}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;k.a.get("./static/mock/index.json").then(function(e){var i=e.data;i.data&&i.ret&&(t.res=i.data)})}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("e-header"),t._v(" "),i("e-swiper",{attrs:{list:t.res.swiperList}}),t._v(" "),i("e-icons",{attrs:{list:t.res.iconList}}),t._v(" "),i("e-recommend",{attrs:{list:t.res.recommendList}}),t._v(" "),i("e-weekend",{attrs:{list:t.res.weekendList}})],1)},staticRenderFns:[]};var $=i("C7Lr")(x,b,!1,function(t){i("wOQY")},null,null).exports,L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"city-header"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"city-back iconfont icon-fanhui"})]),this._v("\n    选择城市\n  ")],1)},staticRenderFns:[]};var S=i("C7Lr")({name:"cityHeader"},L,!1,function(t){i("qmxK")},"data-v-7cdc1610",null).exports,R=i("vHT0"),E={name:"cityHeader",props:{cities:Object},data:function(){return{keyWord:"",list:[],timer:null}},mounted:function(){this.scroll=new R.a(this.$refs.wrapper)},methods:{handleCityClick:function(t){this.$store.dispatch("changeCity",t),this.keyWord=""}},watch:{keyWord:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyWord)>-1||i.name.indexOf(t.keyWord)>-1)&&e.push(i)});t.list=e},100)}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"city-search"},[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWord,expression:"keyWord"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyWord},on:{input:function(e){e.target.composing||(t.keyWord=e.target.value)}}})])]),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyWord,expression:"keyWord"}],ref:"wrapper",staticClass:"result"},[i("ul",[t._l(t.list,function(e,s){return i("li",{key:e.id,staticClass:"result-item border-bottom",domProps:{textContent:t._s(e.name)},on:{click:function(i){t.handleCityClick(e.name)}}})}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:!t.list.length,expression:"!list.length"}],staticClass:"notFound"},[t._v(t._s(this.$store.state.city))])],2)])])],1)},staticRenderFns:[]};var I=i("C7Lr")(E,F,!1,function(t){i("WQfI")},"data-v-4453bbc0",null).exports,P={name:"cityList",props:{hotCities:Array,cities:Object,letter:String},mounted:function(){this.scroll=new R.a(this.$refs.wrapper)},methods:{handleCityClick:function(t){this.$store.dispatch("changeCity",t);var e=this.$refs.currentPosition;this.scroll.scrollToElement(e)}},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"scroll-box"},[i("div",{staticClass:"scroll-content"},[i("div",{ref:"currentPosition",staticClass:"area"},[i("div",{staticClass:"title"},[t._v("您的位置")]),t._v(" "),i("ul",{staticClass:"list"},[i("li",{staticClass:"active"},[t._v(t._s(this.$store.state.city))])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title"},[t._v("热门城市")]),t._v(" "),i("ul",{staticClass:"list"},t._l(t.hotCities,function(e,s){return i("li",{key:e.id,domProps:{textContent:t._s(e.name)},on:{click:function(i){t.handleCityClick(e.name)}}})}),0)]),t._v(" "),i("div",t._l(t.cities,function(e,s,n){return i("div",{key:n,staticClass:"area"},[i("div",{ref:s,refInFor:!0,staticClass:"title"},[t._v(t._s(s))]),t._v(" "),i("ul",{staticClass:"list-sort"},t._l(e,function(e,s){return i("li",{key:e.id,domProps:{textContent:t._s(e.name)},on:{click:function(i){t.handleCityClick(e.name)}}})}),0)])}),0)])])},staticRenderFns:[]};var N=i("C7Lr")(P,O,!1,function(t){i("OQlt")},"data-v-5b3ee86e",null).exports,W={name:"cityAlphabet",props:{cities:Object},methods:{handleClick:function(t){this.$emit("change",t.target.innerText)}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"city-Alphabet"},t._l(t.cities,function(e,s,n){return i("li",{key:n,ref:s,refInFor:!0,domProps:{textContent:t._s(s)},on:{click:t.handleClick}})}),0)},staticRenderFns:[]};var T={name:"city",components:{cHeader:S,cSearch:I,cList:N,cAlphabet:i("C7Lr")(W,A,!1,function(t){i("LFq0")},"data-v-23690229",null).exports},data:function(){return{hotCities:[],cities:{},letter:""}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;k.a.get("./static/mock/city.json").then(function(e){var i=e.data;t.hotCities=i.data.hotCities,t.cities=i.data.cities})},handleClickAlphabet:function(t){this.letter=t}}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city"},[i("c-header"),t._v(" "),i("c-search",{attrs:{cities:t.cities}}),t._v(" "),i("c-list",{attrs:{hotCities:t.hotCities,cities:t.cities,letter:t.letter}}),t._v(" "),i("c-alphabet",{attrs:{cities:t.cities},on:{change:t.handleClickAlphabet}})],1)},staticRenderFns:[]};var B=i("C7Lr")(T,G,!1,function(t){i("zJgj")},"data-v-0937677c",null).exports,j={name:"Gallery",props:{gallaryImgs:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!1,paginationType:"fraction",observer:!0,observeParents:!0}}},methods:{hideGallery:function(){this.$emit("hide",!1)}}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.hideGallery}},[e("div",{staticClass:"img-wrapper"},[e("swiper",{staticClass:"swiper",attrs:{options:this.swiperOption}},[this._l(this.gallaryImgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"swiper-img",attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var z=i("C7Lr")(j,H,!1,function(t){i("JSX2")},"data-v-d2adf73c",null).exports,D={name:"detailBanner",props:{sightName:String,bannerImg:String,gallaryImgs:Array},components:{gallery:z},data:function(){return{showGallery:!1}},computed:{imgNumber:function(){if(this.gallaryImgs)return this.gallaryImgs.length}},methods:{isShowGallery:function(){this.showGallery=!0},notShowGallery:function(){this.showGallery=!1}}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.isShowGallery}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"title"},[t._v(t._s(t.sightName))]),t._v(" "),i("div",{staticClass:"number"},[i("span",{staticClass:"iconfont icon-tupian head-seach-icon"}),t._v(t._s(t.imgNumber))])])]),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("gallery",{directives:[{name:"show",rawName:"v-show",value:t.showGallery,expression:"showGallery"}],attrs:{gallaryImgs:t.gallaryImgs},on:{hide:t.notShowGallery}})],1)],1)},staticRenderFns:[]};var M=i("C7Lr")(D,Q,!1,function(t){i("bcUy")},"data-v-263ea4b8",null).exports,q={name:"detailHeader",data:function(){return{showReturnBtn:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showReturnBtn=!1}else this.showReturnBtn=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showReturnBtn,expression:"showReturnBtn"}],staticClass:"return-btn",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"header-left iconfont icon-fanhui"})]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showReturnBtn,expression:"!showReturnBtn"}],staticClass:"detail-header",style:this.opacityStyle},[e("router-link",{staticClass:"header-left iconfont icon-fanhui",attrs:{tag:"span",to:"/"}}),this._v("\n      详细信息\n    ")],1)],1)},staticRenderFns:[]};var J=i("C7Lr")(q,U,!1,function(t){i("BzWd")},"data-v-ac73dfc2",null).exports,X={name:"detailList",props:{categoryList:Array}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.categoryList,function(e,s){return i("div",{key:s,staticClass:"categoryList"},[i("div",{staticClass:"cateContent border-bottom"},[t._v(t._s(e.title))]),t._v(" "),e.children?i("div",{staticClass:"cateChildren"},[i("detail-list",{attrs:{categoryList:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var K={name:"detail",components:{detailBanner:M,detailHeader:J,detailList:i("C7Lr")(X,Y,!1,function(t){i("HzSP")},"data-v-89e8992a",null).exports},data:function(){return{res:{}}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;k.a.get("./static/mock/detail.json",{params:{id:this.$route.params.id}}).then(function(e){t.res=e.data.data})}}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.res.sightName,bannerImg:this.res.bannerImg,gallaryImgs:this.res.gallaryImgs}}),this._v(" "),e("keep-alive",[e("detail-header")],1),this._v(" "),e("detail-list",{attrs:{categoryList:this.res.categoryList}}),this._v(" "),e("div",{staticClass:"content"})],1)},staticRenderFns:[]};var Z=i("C7Lr")(K,V,!1,function(t){i("2Gcx")},"data-v-752ac696",null).exports;s.a.use(r.a);var tt=new r.a({routes:[{path:"/",name:"Main",component:$},{path:"/city",name:"City",component:B},{path:"/detail/:id",name:"Detail",component:Z}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),et=i("iDdd"),it=i.n(et),st=i("41jX"),nt=i.n(st),at=i("9rMa");s.a.use(at.a);var rt=new at.a.Store({state:{city:"上海"},actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:{changeCity:function(t,e){this.state.city=e}}});i("9n10"),i("M6Sr"),i("v2ns");s.a.config.productionTip=!1,it.a.attach(document.body),s.a.use(nt.a),new s.a({el:"#app",router:tt,store:rt,components:{App:a},template:"<App/>"})},OQlt:function(t,e){},QiYq:function(t,e){},UGy7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("C7Lr")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},Vmzz:function(t,e){},WQfI:function(t,e){},bcUy:function(t,e){},qmxK:function(t,e){},syvT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("Bnvi"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("C7Lr")(n,a,!1,null,null,null);e.default=r.exports},uQyb:function(t,e){},v2ns:function(t,e){},wOQY:function(t,e){},zJgj:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e75cefd7b4566fd30c14.js.map