(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1591],{3295:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home-nft-market",function(){return a(7807)}])},4349:function(e,s,a){"use strict";function t(){document.addEventListener("readystatechange",(function(e){if("complete"===e.target.readyState){for(var s=document.getElementsByClassName("clockdiv"),a=new Array,t=0;t<s.length;t++)a[t]=new Array,a[t].el=s[t],a[t].time=new Date(s[t].getAttribute("data-date")).getTime(),a[t].days=0,a[t].hours=0,a[t].seconds=0,a[t].minutes=0;setInterval((function(){for(var e=0;e<a.length;e++){var s=(new Date).getTime(),t=a[e].time-s;a[e].days=Math.floor(t/864e5),a[e].hours=Math.floor(t%864e5/36e5),a[e].minutes=Math.floor(t%36e5/6e4),a[e].seconds=Math.floor(t%6e4/1e3),t<0?(a[e].el.querySelector(".days").innerHTML=0,a[e].el.querySelector(".hours").innerHTML=0,a[e].el.querySelector(".minutes").innerHTML=0,a[e].el.querySelector(".seconds").innerHTML=0):(a[e].el.querySelector(".days").innerHTML=a[e].days,a[e].el.querySelector(".hours").innerHTML=a[e].hours,a[e].el.querySelector(".minutes").innerHTML=a[e].minutes,a[e].el.querySelector(".seconds").innerHTML=a[e].seconds)}}),1e3)}}))}a.d(s,{Z:function(){return t}})},4124:function(e,s,a){"use strict";a.d(s,{Z:function(){return m}});var t=a(5893),i=a(7294),r=a(9008),n=a.n(r),c=a(1664),l=a.n(c),o=function(e){var s=e.links,a=e.navbarRef,i=e.theme,r=e.logoTheme,n=e.container;return(0,t.jsx)("nav",{className:"navbar navbar-expand-lg ".concat(i),ref:a,children:(0,t.jsxs)("div",{className:"container".concat("nft-market"===n?"-xxl":""),children:[(0,t.jsx)(l(),{className:"navbar-brand",href:"/",children:(0,t.jsxs)("div",{className:"logo",children:["dark"===r&&(0,t.jsx)("img",{src:"img/logo-dark.png",alt:""}),"light"===r&&(0,t.jsx)("img",{src:"img/logo-light.png",alt:""}),!r&&(0,t.jsx)("img",{src:"img/logo-light.png",alt:""})]})}),(0,t.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,t.jsx)("i",{className:"fas fa-bars"})}),(0,t.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,t.jsx)("ul",{className:"navbar-nav",children:s&&s.length&&s.map((function(e,s){return(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link",href:e.href,"data-scroll-nav":s,onClick:function(s){return function(e,s){"#0"==s&&e.preventDefault();var a=document.querySelector('[data-scroll-index="'.concat(e.target.dataset.scrollNav,'"]'));a&&a.scrollIntoView({behavior:"smooth",block:"start"})}(s,e.href)},children:e.name})},s)}))})})]})})},m=function(e){var s=e.children,a=e.links,r=e.type,c=e.navTheme,l=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=l.current;window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll")}))}),[l]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("link",{rel:"stylesheet",href:"/css/plugins.css"}),(0,t.jsx)("link",{rel:"stylesheet",href:"/css/style.css"}),"mobile-app"===r?(0,t.jsx)("link",{rel:"stylesheet",href:"/mobile-app/css/mobile-app.css"}):null,"architecture"===r?(0,t.jsx)("link",{rel:"stylesheet",href:"/arch/css/arch-style.css"}):null,"nft-market"===r?(0,t.jsx)("link",{rel:"stylesheet",href:"/nft/css/nft.css"}):null,"freelancer"===r?(0,t.jsx)("link",{rel:"stylesheet",href:"/freelancer/css/freelancer-style.css"}):null,"restaurant"===r?(0,t.jsx)("link",{rel:"stylesheet",href:"/restaurant/css/restaurant-style.css"}):null]}),["freelancer","restaurant","architecture"].includes(r)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{navbarRef:l,logoTheme:c,theme:c||"light",links:a,container:r}),s]}):(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("main",{children:[(0,t.jsx)(o,{navbarRef:l,logoTheme:c,theme:c||"light",links:a,container:r}),s]})})]})}},7807:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return K}});var t=a(5893),i=a(7294),r=a(9008),n=a.n(r),c=a(4124),l=a(1239),o=(a(4877),JSON.parse('{"Kz":["nft/img/header/1.jpg","nft/img/header/2.jpg","nft/img/header/3.jpg","nft/img/header/4.jpg"],"dF":["nft/img/header/4.jpg","nft/img/header/5.jpg","nft/img/header/6.jpg","nft/img/header/7.jpg"],"Wl":["nft/img/header/8.jpg","nft/img/header/9.jpg","nft/img/header/10.jpg","nft/img/header/11.jpg"]}')),m=function(){var e=(0,i.useState)(!1),s=e[0],a=e[1];return(0,t.jsxs)("header",{className:"full-height valign","data-scroll-index":"0",children:[(0,t.jsx)("div",{className:"background bg-img",style:{backgroundImage:"url('nft/img/pattern-bg.png')"}}),(0,t.jsx)("div",{className:"container-xxl",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-6 valign md-mb50",children:(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsxs)("h1",{children:["Discover, ",(0,t.jsx)("br",{})," collect, and sell extraordinary NFTs"]}),(0,t.jsxs)("div",{className:"mt-40 flex",children:[(0,t.jsx)("div",{className:"mr-30",children:(0,t.jsxs)("a",{href:"#0","data-scroll-nav":"2",className:"butn butn-md bg-light text-dark radius-5",children:[(0,t.jsx)("span",{className:"text slide-up",children:"Get Started"}),(0,t.jsx)("span",{className:"text slide-down",children:"Get Started"})]})}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{href:"https://youtu.be/AzwC6umvd1s",className:"btn-vid",onClick:function(e){e.preventDefault(),a(!0)},children:(0,t.jsx)("i",{className:"fas fa-play"})})})]})]})}),(0,t.jsx)("div",{className:"col-lg-5 offset-lg-1",children:(0,t.jsxs)("div",{className:"flex main-marq",children:[(0,t.jsxs)("div",{className:"slide-vertical st1 mr-20",children:[(0,t.jsx)("div",{className:"box",children:o.Kz.map((function(e,s){return(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:e,alt:""})},s)}))}),(0,t.jsx)("div",{className:"box",children:o.Kz.map((function(e,s){return(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:e,alt:""})},s)}))})]}),(0,t.jsxs)("div",{className:"slide-vertical st2",children:[(0,t.jsx)("div",{className:"box",children:o.dF.map((function(e,s){return(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:e,alt:""})},s)}))}),(0,t.jsx)("div",{className:"box",children:o.dF.map((function(e,s){return(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:e,alt:""})},s)}))})]}),(0,t.jsxs)("div",{className:"slide-vertical st3 ml-20",children:[(0,t.jsx)("div",{className:"box",children:o.Wl.map((function(e,s){return(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:e,alt:""})},s)}))}),(0,t.jsx)("div",{className:"box",children:o.Wl.map((function(e,s){return(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:e,alt:""})},s)}))})]})]})})]})}),(0,t.jsx)("div",{className:"star1",children:(0,t.jsx)("img",{src:"nft/img/header/star1.png",alt:""})}),(0,t.jsx)("div",{className:"star2",children:(0,t.jsx)("img",{src:"nft/img/header/star2.png",alt:""})}),(0,t.jsx)("div",{className:"star3",children:(0,t.jsx)("img",{src:"nft/img/header/star3.png",alt:""})}),(0,t.jsx)("div",{className:"star4"}),(0,t.jsx)(l.Z,{channel:"youtube",autoplay:!0,isOpen:s,videoId:"AzwC6umvd1s",onClose:function(){return a(!1)}})]})},d=a(4349),h=function(e){var s=e.data,a=e.countdown;return(0,t.jsx)("div",{className:"col-lg-3 col-md-6 ".concat(a?"":"mt-30"),children:(0,t.jsxs)("div",{className:"item-card md-mb50",children:[(0,t.jsxs)("div",{className:"img",children:[(0,t.jsx)("a",{href:"#0",children:(0,t.jsx)("img",{src:s.image,alt:""})}),(0,t.jsx)("div",{className:"fav",children:(0,t.jsx)("span",{className:"icon pe-7s-like"})}),a?(0,t.jsxs)("div",{className:"clockdiv","data-date":s.countdown_date,children:[(0,t.jsx)("div",{children:(0,t.jsx)("span",{className:"days"})}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{className:"hours"})}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{className:"minutes"})}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{className:"seconds"})})]}):null]}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsxs)("div",{className:"info",children:[(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("div",{className:"authors-img",children:(0,t.jsx)("div",{className:"img1",children:(0,t.jsx)("img",{src:s.author.picture,alt:""})})}),(0,t.jsx)("div",{className:"author-name valign",children:(0,t.jsx)("span",{className:"fz-12 ml-10 opacity-8",children:(0,t.jsx)("a",{href:"#0",children:s.author.name})})})]}),(0,t.jsx)("div",{className:"item-title mt-15",children:(0,t.jsx)("h6",{className:"fw-700",children:(0,t.jsx)("a",{href:"#0",children:s.title})})}),(0,t.jsx)("div",{className:"eth mt-10",children:(0,t.jsxs)("span",{className:"fz-14",children:[(0,t.jsx)("span",{className:"fz-12 opacity-7 mr-5",children:"Highest bid :"}),(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("img",{src:"nft/img/eth1.svg",alt:""})}),(0,t.jsxs)("span",{children:[s.price," ETH"]})]})})]}),(0,t.jsxs)("div",{className:"botm flex",children:[(0,t.jsx)("div",{className:"left valign",children:(0,t.jsx)("div",{className:"reles",children:(0,t.jsxs)("span",{className:"fz-12",children:["Relesed :",(0,t.jsx)("span",{className:"opacity-7 ml-5",children:s.date})]})})}),(0,t.jsx)("div",{className:"right ml-auto",children:(0,t.jsx)("div",{className:"bid",children:(0,t.jsx)("a",{href:"#0",children:"Bid"})})})]})]})]})})},g=JSON.parse('[{"image":"nft/img/nfts-img/1.jpg","countdown_date":"December 22, 2022 21:14:01","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/2.jpg","countdown_date":"December 22, 2022 21:14:01","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/3.jpg","countdown_date":"December 22, 2022 21:14:01","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/4.jpg","countdown_date":"December 22, 2022 21:14:01","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"}]'),f=function(){return(0,i.useEffect)((function(){setTimeout((function(){(0,d.Z)()}))}),[]),(0,t.jsx)("section",{className:"feat-card section-padding","data-scroll-index":"1",children:(0,t.jsxs)("div",{className:"container-xxl",children:[(0,t.jsx)("div",{className:"sec-head-bord mb-80",children:(0,t.jsx)("div",{className:"container-xxl",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-8 rest",children:(0,t.jsx)("div",{className:"sec-head",children:(0,t.jsxs)("h4",{children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("i",{className:"fas fa-fire"})})," Featured NFTs"]})})}),(0,t.jsx)("div",{className:"col-md-4"})]})})}),(0,t.jsx)("div",{className:"row",children:g.map((function(e,s){return(0,t.jsx)(h,{data:e,countdown:!0},s)}))})]})})};function u(e,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function p(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(s){p(e,s,a[s])}))}return e}function v(e,s){return!s||"object"!==b(s)&&"function"!==typeof s?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):s}function N(e,s){return(N=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e})(e,s)}var b=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function y(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,t=j(e);if(s){var i=j(this).constructor;a=Reflect.construct(t,arguments,i)}else a=t.apply(this,arguments);return v(this,a)}}var k="unmounted",G="exited",w="entering",O="entered",E="exiting",M={entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},S=function(e){!function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&N(e,s)}(n,e);var s,a,i,r=y(n);function n(e){var s;return function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,n),(s=r.call(this,e)).state={status:k},s}return s=n,(a=[{key:"componentDidMount",value:function(){this.props.show&&this.performEnter()}},{key:"componentDidUpdate",value:function(e){var s=null;if(e!==this.props){var a=this.state.status;this.props.show?a!==w&&a!==O&&(s=w):a!==w&&a!==O||(s=E)}this.updateStatus(s)}},{key:"updateStatus",value:function(e){null!==e?e===w?this.performEnter():this.performExit():this.state.status===G&&this.setState({status:k})}},{key:"performEnter",value:function(){var e=this;this.setState({status:w},(function(){var s=e;setTimeout((function(){s.setState({status:O},(function(){}))}),0)}))}},{key:"performExit",value:function(){var e=this,s=this.props.duration;this.setState({status:E},(function(){var a=e;setTimeout((function(){a.setState({status:G},(function(){}))}),s)}))}},{key:"render",value:function(){var e=this.state.status;if(e===k)return null;var s=this.props,a=s.children,i=s.duration,r=s.className,n=s.style;return(0,t.jsx)("div",{className:r,style:x({},n,{transition:"opacity ".concat(i,"ms ease-in-out"),opacity:.1},M[e]),children:a})}}])&&u(s.prototype,a),i&&u(s,i),n}(i.Component);S.defaultProps={show:!1,duration:300};var T=S,C=JSON.parse('{"tabs":[{"id":1,"title":"Trendings","icon":"fas fa-fire"},{"id":2,"title":"abstract Art","icon":"fas fa-gem"},{"id":3,"title":"Sports","icon":"fas fa-basketball-ball"},{"id":4,"title":"Celebrity","icon":"fas fa-female"},{"id":5,"title":"Games","icon":"fab fa-playstation"}],"contents":[{"id":1,"show":true,"cards":[{"image":"nft/img/nfts-img/1.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/2.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/3.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/4.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/5.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/6.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/7.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/8.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"}]},{"id":2,"show":false,"cards":[{"image":"nft/img/nfts-img/1.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/2.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/3.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/4.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/5.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/6.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/7.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/8.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"}]},{"id":3,"show":false,"cards":[{"image":"nft/img/nfts-img/1.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/2.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/3.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/4.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/5.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/6.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/7.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/8.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"}]},{"id":4,"show":false,"cards":[{"image":"nft/img/nfts-img/1.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/2.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/3.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/4.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/5.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/6.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/7.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/8.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"}]},{"id":5,"show":false,"cards":[{"image":"nft/img/nfts-img/1.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/2.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/3.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/4.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/5.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/6.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/7.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"},{"image":"nft/img/nfts-img/8.jpg","author":{"picture":"nft/img/authors/1.jpg","name":"@ Elon Mask"},"title":"Graphics for Games","date":"October 2021","price":"0.15"}]}]}'),_=function(){var e=(0,i.useState)(C),s=e[0],a=e[1];return(0,t.jsx)("section",{className:"explore tabs-fade","data-scroll-index":"2",children:(0,t.jsxs)("div",{className:"container-xxl",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("div",{className:"sec-head-bord mb-50",children:(0,t.jsx)("div",{className:"container-xxl",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-12 rest flex md-no-flex",children:[(0,t.jsx)("div",{className:"sec-head mr-20 md-mb30",children:(0,t.jsxs)("h4",{children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("i",{className:"fas fa-fire"})})," Explore NFTs"]})}),(0,t.jsx)("div",{className:"ml-auto",children:(0,t.jsx)("div",{className:"tab-links",children:(0,t.jsx)("ul",{className:"rest flex",children:s.tabs.map((function(e,s){return(0,t.jsx)("li",{className:"item-link ".concat(0==s?"current":""),"data-tab":"tab-".concat(e.id),onClick:function(){return s=e.id,document.querySelectorAll(".explore .item-link[data-tab]").forEach((function(e){return e.classList.remove("current")})),document.querySelector('.explore .item-link[data-tab="tab-'.concat(s,'"]')).classList.add("current"),void a((function(e){var a=structuredClone(e),t=a.contents.map((function(e){return e.show=!1,e})),i=t.findIndex((function(e){return e.id===s}));return t[i].show=!0,a.contents=t,a}));var s},children:(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{className:e.icon})," ",e.title]})},s)}))})})})]})})})})})}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:s.contents.map((function(e){return(0,t.jsx)(T,{show:e.show,children:(0,t.jsx)("div",{className:"tab-content feat-card current",id:"tab-".concat(e.id),children:(0,t.jsx)("div",{className:"row",children:e.cards.map((function(e,s){return(0,t.jsx)(h,{data:e},s)}))})})},e.id)}))})})]})})},L=JSON.parse('{"i":[{"title":"Trading Volume","number":"$173","operator":"M"},{"title":"NFTs Created","number":"538","operator":"K+"},{"title":"Total Users","number":"23","operator":"K+"}],"r":{"Wc":["nft/img/authors/1.jpg","nft/img/authors/2.jpg","nft/img/authors/3.jpg"],"Rx":"40k+","fL":"Digital art creators joined us to sale their own NFT to our marketplace."}}'),z=function(){return(0,t.jsx)("section",{className:"blck-nft section-padding","data-scroll-index":"3",children:(0,t.jsx)("div",{className:"container-xxl",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-5",children:(0,t.jsxs)("div",{className:"content md-mb80",children:[(0,t.jsxs)("span",{className:"rad-head mb-20",children:[(0,t.jsx)("i",{className:"fas fa-fire gr-blue-text"}),"Digital Art"]}),(0,t.jsx)("h3",{className:"fw-700 mb-15",children:"Digital art works."}),(0,t.jsx)("p",{children:"We are a collective group of designers, developers, and technologists with extensive backgrounds in digital sector. Our purpose is to make most notable NFT collections."}),(0,t.jsx)("div",{className:"d-flex justify-content-between stauts mt-50",children:L.i.map((function(e,s){return(0,t.jsxs)("div",{className:"item",children:[(0,t.jsxs)("h5",{className:"fw-700",children:[e.number," ",(0,t.jsx)("span",{className:"fz-18",children:e.operator})]}),(0,t.jsx)("span",{className:"fz-14 fw-300 mt-10",children:e.title})]},s)}))})]})}),(0,t.jsx)("div",{className:"col-lg-6 offset-lg-1",children:(0,t.jsxs)("div",{className:"imgs flex",children:[(0,t.jsxs)("div",{className:"img1",children:[(0,t.jsx)("img",{src:"nft/img/01.jpg",alt:""}),(0,t.jsx)("span",{className:"bord"})]}),(0,t.jsxs)("div",{className:"img2",children:[(0,t.jsx)("img",{src:"nft/img/02.jpg",alt:""}),(0,t.jsx)("span",{className:"bord"})]}),(0,t.jsxs)("div",{className:"box-text",children:[(0,t.jsxs)("div",{className:"users-imgs flex valign",children:[(0,t.jsx)("div",{children:L.r.Wc.map((function(e,s){return(0,t.jsx)("div",{className:"simg".concat(s+1),children:(0,t.jsx)("img",{src:e,alt:""})},s)}))}),(0,t.jsx)("div",{className:"ml-15 fz-12",children:(0,t.jsxs)("span",{children:["More Than ",(0,t.jsx)("br",{})," ",(0,t.jsx)("span",{className:"fz-14 fw-700",children:L.r.Rx})]})})]}),(0,t.jsx)("p",{className:"fz-14 text-light mt-10",children:L.r.fL})]})]})})]})})})},A=JSON.parse('[{"icon":"fas fa-wallet","title":"Set Up Your Wallet","details":"NFTs are the latest and greatest application of blockchain technology."},{"icon":"fas fa-shapes","title":"Create Collection","details":"NFTs are the latest and greatest application of blockchain technology."},{"icon":"fas fa-gem","title":"Add your NFT\'s","details":"NFTs are the latest and greatest application of blockchain technology."},{"icon":"fab fa-shopify","title":"List them for sale","details":"NFTs are the latest and greatest application of blockchain technology."}]'),F=function(){return(0,t.jsx)("section",{className:"proc-items","data-scroll-index":"3",children:(0,t.jsx)("div",{className:"container-xxl",children:(0,t.jsx)("div",{className:"row",children:A.map((function(e,s){return(0,t.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,t.jsxs)("div",{className:"item ".concat(s!==A.length-1?"md-mb50":""),children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("i",{className:"".concat(e.icon," gr-blue-text")})}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:e.title}),(0,t.jsx)("p",{children:e.details})]})]})},s)}))})})})},P=JSON.parse('[{"images":["nft/img/nfts-img/1.jpg","nft/img/nfts-img/2.jpg","nft/img/nfts-img/3.jpg"],"author":{"image":"nft/img/authors/1.jpg","name":"Elon Mask"},"title":"Colorful Abstract Painting","items":"14"},{"images":["nft/img/nfts-img/4.jpg","nft/img/nfts-img/5.jpg","nft/img/nfts-img/6.jpg"],"author":{"image":"nft/img/authors/2.jpg","name":"Elon Mask"},"title":"Colorful Abstract Painting","items":"50"},{"images":["nft/img/nfts-img/7.jpg","nft/img/nfts-img/8.jpg","nft/img/nfts-img/9.jpg"],"author":{"image":"nft/img/authors/3.jpg","name":"Elon Mask"},"title":"Colorful Abstract Painting","items":"22"}]'),R=function(){return(0,t.jsx)("section",{className:"collection-box section-padding","data-scroll-index":"4",children:(0,t.jsxs)("div",{className:"container-xxl",children:[(0,t.jsx)("div",{className:"sec-head-bord mb-80",children:(0,t.jsx)("div",{className:"container-xxl",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-8 rest",children:(0,t.jsx)("div",{className:"sec-head",children:(0,t.jsxs)("h4",{children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("i",{className:"fas fa-fire"})})," Hot Collections"]})})}),(0,t.jsx)("div",{className:"col-md-4"})]})})}),(0,t.jsx)("div",{className:"row",children:P.map((function(e,s){return(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"coll-item ".concat(s!==P.length-1?"md-mb50":""),children:[(0,t.jsxs)("div",{className:"imgs",children:[(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:e.images[0],alt:""})}),(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:e.images[1],alt:""})})]}),(0,t.jsx)("div",{className:"img mt-10",children:(0,t.jsx)("img",{src:e.images[2],alt:""})})]}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsxs)("div",{className:"se-img",children:[(0,t.jsx)("img",{src:e.author.image,alt:""}),(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("i",{className:"fas fa-check"})})]}),(0,t.jsxs)("div",{className:"text flex",children:[(0,t.jsxs)("div",{className:"left",children:[(0,t.jsx)("h6",{children:(0,t.jsx)("a",{href:"#0",children:e.title})}),(0,t.jsxs)("p",{children:["Created by : ",(0,t.jsx)("a",{href:"#0",children:e.author.name})]})]}),(0,t.jsx)("div",{className:"right ml-auto valign",children:(0,t.jsx)("div",{className:"item-calc",children:(0,t.jsxs)("span",{className:"fz-12",children:[e.items," Items"]})})})]})]})]})},s)}))})]})})},D=JSON.parse('[{"image":"nft/img/nfts-img/a1.jpg","author":{"image":"nft/img/authors/1.jpg","name":"Mark Wahlberg"},"items":22},{"image":"nft/img/nfts-img/a2.jpg","author":{"image":"nft/img/authors/2.jpg","name":"Mark Wahlberg"},"items":22},{"image":"nft/img/nfts-img/a3.jpg","author":{"image":"nft/img/authors/3.jpg","name":"Mark Wahlberg"},"items":22},{"image":"nft/img/nfts-img/a4.jpg","author":{"image":"nft/img/authors/1.jpg","name":"Mark Wahlberg"},"items":22},{"image":"nft/img/nfts-img/a5.jpg","author":{"image":"nft/img/authors/2.jpg","name":"Mark Wahlberg"},"items":22}]'),W=function(){return(0,t.jsx)("section",{className:"collection-box selrs section-padding pt-0",children:(0,t.jsxs)("div",{className:"container-xxl",children:[(0,t.jsx)("div",{className:"sec-head-bord mb-80",children:(0,t.jsx)("div",{className:"container-xxl",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-8 rest",children:(0,t.jsx)("div",{className:"sec-head",children:(0,t.jsxs)("h4",{children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("i",{className:"fas fa-fire"})})," Top Creators"]})})}),(0,t.jsx)("div",{className:"col-md-4"})]})})}),(0,t.jsx)("div",{className:"row justify-content-center",children:D.map((function(e,s){return(0,t.jsx)("div",{className:"col-lg col-md-4",children:(0,t.jsxs)("div",{className:"coll-item ${idx !== creators.length - 1 ? 'md-mb50':''}",children:[(0,t.jsx)("div",{className:"imgs",children:(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:e.image,alt:""})})}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsxs)("div",{className:"se-img",children:[(0,t.jsx)("img",{src:e.author.image,alt:""}),(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("i",{className:"fas fa-check"})})]}),(0,t.jsxs)("div",{className:"text text-center",children:[(0,t.jsx)("h6",{children:(0,t.jsx)("a",{href:"#0",children:e.author.name})}),(0,t.jsx)("div",{className:"item-calc mt-10",children:(0,t.jsxs)("span",{className:"fz-12",children:[e.items," Items"]})})]})]})]})},s)}))})]})})},q=a(1664),H=a.n(q),I=function(){return(0,t.jsxs)("footer",{className:"bg-img pb-0",style:{backgroundImage:"url('nft/img/space.jpg')"},"data-scroll-index":"5",children:[(0,t.jsx)("div",{className:"container cal-action",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-9",children:(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"text md-mb50",children:[(0,t.jsx)("h2",{children:"Let\u2018s join to our community."}),(0,t.jsxs)("p",{children:["Are you an artist or NFT project creator? ",(0,t.jsx)("br",{})," Get in touch with us to get your content on nftsRavo."]}),(0,t.jsxs)("div",{className:"users-imgs flex",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"simg1",children:(0,t.jsx)("img",{src:"nft/img/authors/1.jpg",alt:""})}),(0,t.jsx)("div",{className:"simg2",children:(0,t.jsx)("img",{src:"nft/img/authors/2.jpg",alt:""})}),(0,t.jsx)("div",{className:"simg3",children:(0,t.jsx)("img",{src:"nft/img/authors/3.jpg",alt:""})})]}),(0,t.jsx)("div",{className:"ml-15 fz-12",children:(0,t.jsxs)("span",{children:["Join to us more than",(0,t.jsx)("br",{})," ",(0,t.jsx)("span",{className:"fz-14 fw-700",children:"40k+ "})," creators"]})})]})]})})}),(0,t.jsx)("div",{className:"col-lg-3 valign d-flex justify-content-end",children:(0,t.jsxs)("div",{children:[(0,t.jsx)(H(),{href:"/contact-arch",children:(0,t.jsxs)("a",{className:"butn butn-md bg-light text-dark radius-30",children:[(0,t.jsx)("span",{className:"text slide-up",children:"Join Now"}),(0,t.jsx)("span",{className:"text slide-down",children:"Join Now"})]})}),(0,t.jsx)("br",{className:"md-hide"}),(0,t.jsx)(H(),{href:"/contact-arch",children:(0,t.jsxs)("a",{className:"butn butn-md radius-30 bord-white",children:[(0,t.jsx)("span",{className:"text slide-up",children:"Connect Wallet"}),(0,t.jsx)("span",{className:"text slide-down",children:"Connect Wallet"})]})})]})})]})}),(0,t.jsx)("div",{className:"sub-footer pt-40 pb-40",children:(0,t.jsx)("div",{className:"container-xxl",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsx)("div",{className:"horizontal-link fz-13",children:(0,t.jsxs)("ul",{className:"rest",children:[(0,t.jsx)("li",{className:"mr-30",children:(0,t.jsx)("a",{href:"#0",children:"Privacy policy"})}),(0,t.jsx)("li",{className:"mr-30",children:(0,t.jsx)("a",{href:"#0",children:"Legal notice"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#0",children:"Terms of service"})})]})})}),(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsx)("div",{className:"copyrights d-flex justify-content-end",children:(0,t.jsxs)("p",{className:"fz-13",children:["\xa9 2022 Ravo is Proudly Powered by",(0,t.jsx)("span",{className:"underline ms-1",children:(0,t.jsx)("a",{href:"https://themeforest.net/user/themescamp",rel:"noreferrer",target:"_blank",children:"ThemesCamp"})})]})})})]})})})]})};function J(e,s){(null==s||s>e.length)&&(s=e.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=e[a];return t}function B(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,s){if(!e)return;if("string"===typeof e)return J(e,s);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return J(e,s)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K=function(){(0,i.useEffect)((function(){var e;document.body.classList.add("nft-market");(e=document.body.classList).remove.apply(e,B(["index-bus1","index-corporate","index-restaurant","index-freelancer","cr-agency","mobile-app","gr-orange-bg","land-demo2","index-main","index-arch"]))}),[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n(),{children:(0,t.jsx)("title",{children:"Ravo - NFTs Marketplace"})}),(0,t.jsxs)(c.Z,{type:"nft-market",links:[{name:"Home",href:"#0"},{name:"Live Bidding",href:"#0"},{name:"Explore",href:"#0"},{name:"About",href:"#0"},{name:"Collections",href:"#0"},{name:"Contact",href:"#0"}],children:[(0,t.jsx)(m,{}),(0,t.jsx)(f,{}),(0,t.jsx)(_,{}),(0,t.jsx)(z,{}),(0,t.jsx)(F,{}),(0,t.jsx)(R,{}),(0,t.jsx)(W,{}),(0,t.jsx)(I,{})]})]})}}},function(e){e.O(0,[1664,8627,9774,2888,179],(function(){return s=3295,e(e.s=s);var s}));var s=e.O();_N_E=s}]);