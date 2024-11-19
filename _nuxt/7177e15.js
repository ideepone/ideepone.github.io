(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4,5,6],{281:function(e,t,o){var content=o(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(108).default)("e7c4b268",content,!0,{sourceMap:!1})},282:function(e,t,o){var content=o(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(108).default)("76414476",content,!0,{sourceMap:!1})},283:function(e,t,o){var content=o(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(108).default)("a4434b30",content,!0,{sourceMap:!1})},285:function(e,t,o){"use strict";o.r(t);var r={name:"AppHeader",methods:{goHome:function(){this.$router.push("/")},googleSearch:function(){var script=document.createElement("script");script.src="https://cse.google.com/cse.js?cx=22cebcba626cb44ec",script.async=!0,document.head.appendChild(script)}},mounted:function(){this.googleSearch()}},n=(o(292),o(46)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("header",{staticClass:"app-header"},[t("button",{staticClass:"toggle-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[e._v("☰")]),e._v(" "),e._m(0),e._v(" "),t("button",{staticClass:"home-button",on:{click:e.goHome}},[e._v("Home")])])}),[function(){var e=this._self._c;return e("div",{staticClass:"search-container"},[e("div",{staticClass:"gcse-search"})])}],!1,null,"5715dc3a",null);t.default=component.exports},286:function(e,t,o){"use strict";o.r(t);o(45),o(64),o(62),o(19);var r={name:"AppSidebar",props:{categories:{type:Array,default:function(){return[]}},tags:{type:Array,default:function(){return[]}},isOpen:{type:Boolean,default:!1}},computed:{limitedTags:function(){var e=["Causal",".io","Driving","Sports","Action","Shooting","Puzzle","Clicker","Adventure","Beauty"];return this.tags.filter((function(t){return!e.includes(t)})).slice(0,20)}}},n=(o(294),o(46)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("aside",{staticClass:"sidebar",class:{open:e.isOpen}},[t("div",{staticClass:"sidebar-content"},[t("h2",[e._v("Categories")]),e._v(" "),t("ul",e._l(e.categories,(function(o){return t("li",{key:o},[t("router-link",{attrs:{to:"/category/".concat(o)}},[e._v(e._s(o))])],1)})),0),e._v(" "),t("h2",[e._v("Tags")]),e._v(" "),t("ul",e._l(e.limitedTags,(function(o){return t("li",{key:o},[t("router-link",{attrs:{to:"/tag/".concat(o)}},[e._v(e._s(o))])],1)})),0),e._v(" "),t("h2",[e._v("Legal")]),e._v(" "),e._m(0)])])}),[function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"/terms.html",target:"_blank"}},[e._v("Terms of Service")])]),e._v(" "),t("li",[t("a",{attrs:{href:"/privacy.html",target:"_blank"}},[e._v("Privacy Policy")])])])}],!1,null,"6bea1920",null);t.default=component.exports},288:function(e,t,o){"use strict";o.r(t);o(31);var r={name:"GameItem",props:{game:Object},data:function(){return{defaultImage:"/path/to/default/image.png"}},computed:{isNewRelease:function(){return new Date(this.game.released).getMonth()>8}},methods:{goToGameDetail:function(){this.game.router?this.$router.push("/game/".concat(this.game.router)):console.error("Game router is missing")}}},n=(o(290),o(46)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"game-item",on:{click:e.goToGameDetail}},[e.game.rating>9?t("div",{staticClass:"hot-badge"},[e._v("HOT")]):e.isNewRelease?t("div",{staticClass:"new-badge"},[e._v("NEW")]):e._e(),e._v(" "),t("img",{staticClass:"game-image",attrs:{src:e.game.cover||e.defaultImage,alt:"game.name"}}),e._v(" "),t("div",{staticClass:"game-name"},[e._v(e._s(e.game.name))])])}),[],!1,null,"e9f068d6",null);t.default=component.exports},290:function(e,t,o){"use strict";o(281)},291:function(e,t,o){var r=o(107)((function(i){return i[1]}));r.push([e.i,".game-item[data-v-e9f068d6]{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;justify-content:center;margin:0;padding:5px;position:relative}.hot-badge[data-v-e9f068d6]{background-color:red}.hot-badge[data-v-e9f068d6],.new-badge[data-v-e9f068d6]{border-radius:3px;color:#fff;font-size:10px;font-weight:700;left:5px;padding:1px 4px;position:absolute;top:5px}.new-badge[data-v-e9f068d6]{background-color:blue}.game-image[data-v-e9f068d6]{display:block;height:auto;max-height:150px;-o-object-fit:cover;object-fit:cover;width:100%}.game-name[data-v-e9f068d6]{background-color:rgba(0,0,0,.7);border-radius:5px;bottom:10px;color:#fff;font-size:12px;left:50%;line-height:1.2;opacity:0;overflow:hidden;padding:5px 10px;position:absolute;text-align:center;text-overflow:ellipsis;transform:translateX(-50%);transition:opacity .3s ease;white-space:nowrap}.game-item:hover .game-name[data-v-e9f068d6]{opacity:1}",""]),r.locals={},e.exports=r},292:function(e,t,o){"use strict";o(282)},293:function(e,t,o){var r=o(107)((function(i){return i[1]}));r.push([e.i,".app-header[data-v-5715dc3a]{align-items:center;background-color:#007bff;color:#fff;display:flex;height:60px;justify-content:space-between;left:0;padding:10px 20px;position:fixed;right:0;top:0;z-index:1100}.toggle-button[data-v-5715dc3a]{background-color:transparent;border:none;color:#fff;cursor:pointer;font-size:20px;margin-right:20px}.search-container[data-v-5715dc3a]{border-radius:8px;display:block;flex:1;margin:1px auto;max-width:800px;overflow:hidden;width:100%}.gcse-search[data-v-5715dc3a]{border-radius:10px;margin-bottom:0;overflow:hidden;width:100%}.home-button[data-v-5715dc3a]{background-color:transparent;border:none;color:#fff;cursor:pointer;font-size:16px;margin-left:20px}@media (min-width:1200px){.search-container[data-v-5715dc3a]{max-width:1000px}}",""]),r.locals={},e.exports=r},294:function(e,t,o){"use strict";o(283)},295:function(e,t,o){var r=o(107)((function(i){return i[1]}));r.push([e.i,".sidebar[data-v-6bea1920]{background-color:#2c3e50;bottom:0;box-shadow:2px 0 5px rgba(0,0,0,.2);color:#ecf0f1;left:0;overflow:hidden;position:fixed;top:60px;transition:width .3s ease;width:0;z-index:1000}.sidebar.open[data-v-6bea1920]{width:220px}.sidebar-content[data-v-6bea1920]{height:calc(100% - 60px);overflow-y:auto;padding-right:10px}.sidebar h2[data-v-6bea1920]{background-color:#34495e;color:#ecf0f1;font-size:18px;margin-bottom:15px;padding:10px;text-align:center}.sidebar ul[data-v-6bea1920]{list-style:none;margin:0;padding:0}.sidebar li[data-v-6bea1920]{margin-bottom:10px}.sidebar a[data-v-6bea1920]{color:#ecf0f1;display:block;padding:10px 15px;-webkit-text-decoration:none;text-decoration:none;transition:background-color .3s,color .3s}.sidebar a[data-v-6bea1920]:hover{background-color:#1abc9c;color:#fff}",""]),r.locals={},e.exports=r},318:function(e,t,o){"use strict";o.d(t,"b",(function(){return c})),o.d(t,"a",(function(){return l}));var r=o(296),n=(o(45),o(47),o(19),o(297),o(38),o(298),o(299),o(300),o(304),o(305),o(306),o(307),o(308),o(309),o(310),o(311),o(312),o(313),o(314),o(315),o(316),o(37),o(428));function c(){return n.a.get("https://polygame.cc/crazygames.json").then((function(e){return e.data}))}function l(e){return Object(r.a)(new Set(e.map((function(e){return e.class})))).filter((function(e){return e}))}},369:function(e,t,o){var content=o(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(108).default)("70696db7",content,!0,{sourceMap:!1})},420:function(e,t,o){"use strict";o(369)},421:function(e,t,o){var r=o(107)((function(i){return i[1]}));r.push([e.i,".category-container{display:flex;flex-direction:column}.content-container{position:relative}.main-content{margin-top:60px;padding:20px}.breadcrumb{font-size:14px;margin-bottom:20px}.games-list{display:flex;flex-wrap:wrap;gap:5px;justify-content:space-between}.game-item{box-sizing:border-box;flex:1 1 calc(20% - 10px);margin-bottom:10px;text-align:center}.game-image{border-radius:10px;height:auto;-o-object-fit:cover;object-fit:cover;width:100%}@media (min-width:1200px){.game-item{flex:1 1 calc(10% - 10px)}}@media (max-width:768px){.game-item{flex:1 1 calc(33.33% - 10px)}}@media (max-width:480px){.game-item{flex:1 1 calc(50% - 10px)}}",""]),r.locals={},e.exports=r},430:function(e,t,o){"use strict";o.r(t);o(31);var r=o(296),n=(o(45),o(320),o(47),o(321),o(19),o(297),o(38),o(287),o(298),o(299),o(300),o(304),o(305),o(306),o(307),o(308),o(309),o(310),o(311),o(312),o(313),o(314),o(315),o(316),o(37),o(285)),c=o(286),l=o(288),d=o(318),f={name:"CategoryView",components:{AppHeader:n.default,AppSidebar:c.default,GameItem:l.default},data:function(){return{games:[],categories:[],tags:[],searchQuery:"",sidebarOpen:!1}},computed:{categoryGames:function(){var e=this;return this.games.filter((function(t){return t.class===e.$route.params.name}))},filteredCategoryGames:function(){return this.categoryGames.filter((function(e){return e.name&&e.cover}))},filteredCategories:function(){return Object(d.a)(this.games)}},methods:{searchGames:function(){this.$router.push({path:"/category/".concat(this.$route.params.name),query:{search:this.searchQuery}})},toggleSidebar:function(){this.sidebarOpen=!this.sidebarOpen}},created:function(){var e=this;Object(d.b)().then((function(data){e.games=data,e.categories=Object(d.a)(e.games),e.tags=Object(r.a)(new Set(e.games.flatMap((function(e){return e.tags?e.tags.split(",").map((function(e){return e.trim()})):[]}))))})).catch((function(e){console.error("Error loading data:",e)}))}},m=(o(420),o(46)),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"category-container"},[t("AppHeader",{on:{"toggle-sidebar":e.toggleSidebar}}),e._v(" "),t("div",{staticClass:"content-container"},[t("AppSidebar",{attrs:{categories:e.categories,tags:e.tags,isOpen:e.sidebarOpen}}),e._v(" "),t("main",{staticClass:"main-content"},[t("nav",{staticClass:"breadcrumb"},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" "),t("span",[e._v(">")]),e._v(" "),t("span",[e._v(e._s(e.$route.params.name))])],1),e._v(" "),t("div",{staticClass:"games-list"},e._l(e.filteredCategoryGames,(function(e){return t("div",{key:e.name,staticClass:"game-item"},[t("router-link",{attrs:{to:"/game/".concat(e.router)}},[t("img",{staticClass:"game-image",attrs:{src:e.cover,alt:"game.name"}})])],1)})),0)])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AppHeader:o(285).default,AppSidebar:o(286).default})}}]);