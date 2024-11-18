(function(){"use strict";var e={9649:function(e,a,t){var r=t(5130),s=t(6768);function n(e,a,t,r,n,o){const i=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(i)])}var o={name:"App"},i=t(1241);const l=(0,i.A)(o,[["render",n]]);var c=l,g=t(1387),m=t(4232);const d={class:"app-container"},u={class:"content-container"},p={class:"main-content"},h={key:0,class:"category-section"},f={class:"games-list"},v={class:"category-header"},b=["onClick"],k={class:"games-list"};function y(e,a,t,r,n,o){const i=(0,s.g2)("AppHeader"),l=(0,s.g2)("AppSidebar"),c=(0,s.g2)("GameItem"),g=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",d,[(0,s.bF)(i,{onToggleSidebar:o.toggleSidebar},null,8,["onToggleSidebar"]),(0,s.Lk)("div",u,[(0,s.bF)(l,{categories:o.filteredCategories,isOpen:n.sidebarOpen},null,8,["categories","isOpen"]),(0,s.Lk)("main",p,[n.playedGames.length?((0,s.uX)(),(0,s.CE)("div",h,[a[0]||(a[0]=(0,s.Lk)("h2",null,"History",-1)),(0,s.Lk)("div",f,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.playedGames,(e=>((0,s.uX)(),(0,s.Wv)(c,{key:e.name,game:e},null,8,["game"])))),128))])])):(0,s.Q3)("",!0),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.filteredCategories,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e,class:"category-section"},[(0,s.Lk)("div",v,[(0,s.bF)(g,{to:`/category/${e}`,class:"category-link"},{default:(0,s.k6)((()=>[(0,s.Lk)("h2",null,(0,m.v_)(e),1)])),_:2},1032,["to"]),(0,s.Lk)("button",{onClick:a=>o.goToCategory(e),class:"more-button"},"More",8,b)]),(0,s.Lk)("div",k,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.getGamesByCategory(e),(e=>((0,s.uX)(),(0,s.Wv)(c,{key:e.name,game:e},null,8,["game"])))),128))])])))),128))])])])}t(4114),t(7642),t(8004),t(3853),t(5876),t(2475),t(5024),t(1698),t(8992),t(4520),t(3949);var L=t(4373);const C={key:0,class:"hot-badge"},G={key:1,class:"new-badge"},O=["src"],S={class:"game-name"};function _(e,a,t,r,n,o){return(0,s.uX)(),(0,s.CE)("div",{class:"game-item",onClick:a[0]||(a[0]=(...e)=>o.goToGameDetail&&o.goToGameDetail(...e))},[t.game.rating>9?((0,s.uX)(),(0,s.CE)("div",C,"HOT")):o.isNewRelease?((0,s.uX)(),(0,s.CE)("div",G,"NEW")):(0,s.Q3)("",!0),(0,s.Lk)("img",{src:t.game.cover||n.defaultImage,alt:"game.name",class:"game-image"},null,8,O),(0,s.Lk)("div",S,(0,m.v_)(t.game.name),1)])}var E={name:"GameItem",props:{game:Object},data(){return{defaultImage:"/path/to/default/image.png"}},computed:{isNewRelease(){const e=new Date(this.game.released);return e.getMonth()>8}},methods:{goToGameDetail(){this.game.router?this.$router.push(`/game/${this.game.router}`):console.error("Game router is missing")}}};const A=(0,i.A)(E,[["render",_],["__scopeId","data-v-2a9fcba0"]]);var X=A;const I={class:"app-header"};function w(e,a,t,r,n,o){return(0,s.uX)(),(0,s.CE)("header",I,[(0,s.Lk)("button",{class:"toggle-button",onClick:a[0]||(a[0]=a=>e.$emit("toggle-sidebar"))},"☰"),a[2]||(a[2]=(0,s.Lk)("div",{class:"search-container"},[(0,s.Lk)("div",{class:"gcse-search"})],-1)),(0,s.Lk)("button",{class:"home-button",onClick:a[1]||(a[1]=(...e)=>o.goHome&&o.goHome(...e))},"Home")])}var F={name:"AppHeader",methods:{goHome(){this.$router.push("/")},googleSearch(){const e=document.createElement("script");e.src="https://cse.google.com/cse.js?cx=22cebcba626cb44ec",e.async=!0,document.head.appendChild(e)}},mounted(){this.googleSearch()}};const T=(0,i.A)(F,[["render",w],["__scopeId","data-v-3e6ae6b4"]]);var H=T;function $(e,a,t,r,n,o){const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("aside",{class:(0,m.C4)(["sidebar",{open:t.isOpen}])},[a[0]||(a[0]=(0,s.Lk)("h2",null,"Categories",-1)),(0,s.Lk)("ul",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.categories,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e},[(0,s.bF)(i,{to:`/category/${e}`},{default:(0,s.k6)((()=>[(0,s.eW)((0,m.v_)(e),1)])),_:2},1032,["to"])])))),128))]),a[1]||(a[1]=(0,s.Lk)("h2",null,"Legal",-1)),a[2]||(a[2]=(0,s.Lk)("ul",null,[(0,s.Lk)("li",null,[(0,s.Lk)("a",{href:"/terms.html",target:"_blank"},"Terms of Service")]),(0,s.Lk)("li",null,[(0,s.Lk)("a",{href:"/privacy.html",target:"_blank"},"Privacy Policy")])],-1))],2)}var j={name:"AppSidebar",props:{categories:{type:Array,default:()=>[]},isOpen:{type:Boolean,default:!1}}};const W=(0,i.A)(j,[["render",$],["__scopeId","data-v-17d47338"]]);var D=W,R={name:"HomeView",components:{GameItem:X,AppHeader:H,AppSidebar:D},data(){return{categories:[],games:[],playedGames:[],sidebarOpen:!1}},computed:{filteredCategories(){return this.categories.filter((e=>e))}},methods:{getGamesByCategory(e){return this.games.filter((a=>a.class===e)).slice(0,30)},hasMoreGames(e){return this.games.filter((a=>a.class===e)).length>30},goToCategory(e){this.$router.push(`/category/${e}`)},toggleSidebar(){this.sidebarOpen=!this.sidebarOpen},loadPlayedGames(){const e=JSON.parse(localStorage.getItem("playedGames"))||[];this.playedGames=this.games.filter((a=>e.includes(a.router)))}},created(){L.A.get("/crazygames.json").then((e=>{const a=new Set;e.data.forEach((e=>{a.add(e.class),this.games.push(e)})),this.categories=Array.from(a).filter((e=>e)),this.loadPlayedGames()})).catch((e=>{console.error("Error loading data:",e)}))}};const P=(0,i.A)(R,[["render",y],["__scopeId","data-v-291f592f"]]);var K=P;const M={class:"category-container"},Q={class:"content-container"},x={class:"main-content"},N={class:"breadcrumb"},z={class:"games-list"},B=["src"];function J(e,a,t,r,n,o){const i=(0,s.g2)("AppHeader"),l=(0,s.g2)("AppSidebar"),c=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",M,[(0,s.bF)(i,{onToggleSidebar:o.toggleSidebar},null,8,["onToggleSidebar"]),(0,s.Lk)("div",Q,[(0,s.bF)(l,{categories:o.filteredCategories,isOpen:n.sidebarOpen},null,8,["categories","isOpen"]),(0,s.Lk)("main",x,[(0,s.Lk)("nav",N,[(0,s.bF)(c,{to:"/"},{default:(0,s.k6)((()=>a[0]||(a[0]=[(0,s.eW)("Home")]))),_:1}),a[1]||(a[1]=(0,s.eW)(" > ")),(0,s.Lk)("span",null,(0,m.v_)(e.$route.params.name),1)]),(0,s.Lk)("div",z,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.filteredCategoryGames,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.name,class:"game-item"},[(0,s.bF)(c,{to:`/game/${e.router}`},{default:(0,s.k6)((()=>[(0,s.Lk)("img",{src:e.cover,alt:"game.name",class:"game-image"},null,8,B)])),_:2},1032,["to"])])))),128))])])])])}t(1454);function q(){return L.A.get("/crazygames.json").then((e=>e.data))}function V(e){return[...new Set(e.map((e=>e.class)))].filter((e=>e))}var U={name:"CategoryView",components:{AppHeader:H,AppSidebar:D},data(){return{games:[],categories:[],searchQuery:"",sidebarOpen:!1}},computed:{categoryGames(){return this.games.filter((e=>e.class===this.$route.params.name))},filteredCategoryGames(){return this.categoryGames.filter((e=>e.name&&e.cover))},filteredCategories(){return V(this.games)}},methods:{searchGames(){this.$router.push({path:`/category/${this.$route.params.name}`,query:{search:this.searchQuery}})},toggleSidebar(){this.sidebarOpen=!this.sidebarOpen}},created(){q().then((e=>{this.games=e,this.categories=V(this.games)})).catch((e=>{console.error("Error loading data:",e)}))}};const Y=(0,i.A)(U,[["render",J]]);var Z=Y;const ee={class:"content-container"},ae={class:"main-content"},te={class:"breadcrumb"},re={class:"iframe-wrapper"},se=["src"],ne={class:"game-details"},oe={class:"game-description"},ie={class:"game-rating"},le={class:"game-developer"},ce={class:"game-released"},ge={class:"game-updated"},me={key:0,class:"tags"},de={class:"recommendations"},ue={class:"games-list"};function pe(e,a,t,r,n,o){const i=(0,s.g2)("AppHeader"),l=(0,s.g2)("AppSidebar"),c=(0,s.g2)("router-link"),g=(0,s.g2)("GameItem");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(i,{onToggleSidebar:o.toggleSidebar},null,8,["onToggleSidebar"]),(0,s.Lk)("div",ee,[(0,s.bF)(l,{categories:o.filteredCategories,isOpen:n.sidebarOpen},null,8,["categories","isOpen"]),(0,s.Lk)("main",ae,[(0,s.Lk)("nav",te,[(0,s.bF)(c,{to:"/"},{default:(0,s.k6)((()=>a[0]||(a[0]=[(0,s.eW)("Home")]))),_:1}),a[1]||(a[1]=(0,s.Lk)("span",null,">",-1)),(0,s.bF)(c,{to:`/category/${n.game.class}`},{default:(0,s.k6)((()=>[(0,s.eW)((0,m.v_)(n.game.class),1)])),_:1},8,["to"]),a[2]||(a[2]=(0,s.Lk)("span",null,">",-1)),(0,s.Lk)("span",null,(0,m.v_)(n.game.name),1)]),(0,s.Lk)("div",re,[(0,s.Lk)("iframe",{src:n.game.embed,frameborder:"0",allow:"gamepad *;"},null,8,se)]),(0,s.Lk)("div",ne,[(0,s.Lk)("h1",null,(0,m.v_)(n.game.name),1),(0,s.Lk)("p",oe,[a[3]||(a[3]=(0,s.Lk)("strong",null,"Description:",-1)),(0,s.eW)(" "+(0,m.v_)(n.game.description),1)]),(0,s.Lk)("p",ie,[a[4]||(a[4]=(0,s.Lk)("strong",null,"Rating:",-1)),(0,s.eW)(" "+(0,m.v_)(n.game.rating),1)]),(0,s.Lk)("p",le,[a[5]||(a[5]=(0,s.Lk)("strong",null,"Developer:",-1)),(0,s.eW)(" "+(0,m.v_)(n.game.developer),1)]),(0,s.Lk)("p",ce,[a[6]||(a[6]=(0,s.Lk)("strong",null,"Released:",-1)),(0,s.eW)(" "+(0,m.v_)(n.game.released),1)]),(0,s.Lk)("p",ge,[a[7]||(a[7]=(0,s.Lk)("strong",null,"Updated:",-1)),(0,s.eW)(" "+(0,m.v_)(n.game.updated),1)]),n.game.tags?((0,s.uX)(),(0,s.CE)("div",me,[a[8]||(a[8]=(0,s.Lk)("strong",null,"Tags:",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.game.tags.split(","),(e=>((0,s.uX)(),(0,s.CE)("span",{key:e,class:"tag"},(0,m.v_)(e.trim()),1)))),128))])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",de,[a[9]||(a[9]=(0,s.Lk)("h2",null,"Recommended Games",-1)),(0,s.Lk)("div",ue,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.recommendedGames,(e=>((0,s.uX)(),(0,s.Wv)(g,{key:e.name,game:e},null,8,["game"])))),128))])])])])])}t(2577);var he={components:{AppHeader:H,AppSidebar:D,GameItem:X},data(){return{game:{},categories:[],recommendedGames:[],searchQuery:"",sidebarOpen:!1}},computed:{filteredCategories(){return this.categories.filter((e=>e))}},created(){this.loadGameData()},watch:{"$route.params.name":"loadGameData"},methods:{loadGameData(){const e=this.$route.params.name;L.A.get("/crazygames.json").then((a=>{const t=a.data.find((a=>a.router===e));t&&(this.game=t,this.addToHistory(t.router),this.loadRecommendedGames(t.class,t.router)),this.categories=[...new Set(a.data.map((e=>e.class)))].filter((e=>e))})).catch((e=>{console.error("Error loading data:",e)}))},addToHistory(e){let a=JSON.parse(localStorage.getItem("playedGames"))||[];a.includes(e)||(a.push(e),localStorage.setItem("playedGames",JSON.stringify(a)))},loadRecommendedGames(e,a){L.A.get("/crazygames.json").then((t=>{const r=t.data.filter((t=>t.class===e&&t.router!==a));this.recommendedGames=this.getRandomGames(r,30)})).catch((e=>{console.error("Error loading recommended games:",e)}))},getRandomGames(e,a){const t=e.sort((()=>.5-Math.random()));return t.slice(0,a)},searchGames(){this.$router.push({path:"/",query:{search:this.searchQuery}})},toggleSidebar(){this.sidebarOpen=!this.sidebarOpen}}};const fe=(0,i.A)(he,[["render",pe],["__scopeId","data-v-9fa78cee"]]);var ve=fe;const be=[{path:"/",component:K},{path:"/category/:name",component:Z},{path:"/game/:name",component:ve}],ke=(0,g.aE)({history:(0,g.LA)(),routes:be});var ye=ke;(0,r.Ef)(c).use(ye).mount("#app")}},a={};function t(r){var s=a[r];if(void 0!==s)return s.exports;var n=a[r]={exports:{}};return e[r].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(a,r,s,n){if(!r){var o=1/0;for(g=0;g<e.length;g++){r=e[g][0],s=e[g][1],n=e[g][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||o>=n)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(i=!1,n<o&&(o=n));if(i){e.splice(g--,1);var c=s();void 0!==c&&(a=c)}}return a}n=n||0;for(var g=e.length;g>0&&e[g-1][2]>n;g--)e[g]=e[g-1];e[g]=[r,s,n]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,r){var s,n,o=r[0],i=r[1],l=r[2],c=0;if(o.some((function(a){return 0!==e[a]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(l)var g=l(t)}for(a&&a(r);c<o.length;c++)n=o[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(g)},r=self["webpackChunkgamecenter"]=self["webpackChunkgamecenter"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(9649)}));r=t.O(r)})();
//# sourceMappingURL=app.35907856.js.map