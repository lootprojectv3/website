(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8869:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),o=n(1664),a=n(1163),s=n(9008),i=n(4409),c=n.n(i);function d(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{}),(0,r.jsx)(l,{}),(0,r.jsx)("div",{className:c().content,children:t}),(0,r.jsx)(h,{})]})}function u(){return(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"LootV3"}),(0,r.jsx)("meta",{name:"title",content:"LootV3"}),(0,r.jsx)("meta",{name:"description",content:"LootV3 is randomized adventurer gear generated and stored on chain."}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://www.lootprojectv3.com/"}),(0,r.jsx)("meta",{property:"og:title",content:"LootV3"}),(0,r.jsx)("meta",{property:"og:description",content:"LootV3 is randomized adventurer gear generated and stored on chain."}),(0,r.jsx)("meta",{property:"og:image",content:"https://lootprojectv3.com/meta.png"}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:"https://www.lootprojectv3.com/"}),(0,r.jsx)("meta",{property:"twitter:title",content:"LootV3"}),(0,r.jsx)("meta",{property:"twitter:description",content:"LootV3 is randomized adventurer gear generated and stored on chain."}),(0,r.jsx)("meta",{property:"twitter:image",content:"https://lootprojectV3.com/meta.png"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap",rel:"stylesheet"}),"next",(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-L04H1SYW6P"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments)}\n              gtag('js', new Date());\n              gtag('config', 'G-L04H1SYW6P');\n            "}})]})}function l(){(0,a.useRouter)().pathname;return(0,r.jsxs)("div",{className:c().header,children:[(0,r.jsx)("div",{className:c().header__logo,children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{children:"LootV3"})})}),(0,r.jsx)("div",{className:c().header__links,children:(0,r.jsx)("ul",{})})]})}function h(){return(0,r.jsx)("div",{className:c().footer,children:(0,r.jsxs)("p",{children:["This website is"," ",(0,r.jsx)("a",{href:"https://github.com/lootprojectv3/website",target:"_blank",rel:"noopener noreferrer",children:"open-source"}),"."]})})}},844:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),o=n(7757),a=n.n(o),s=n(5861),i=n(7294),c=n(8869),d=n(5594),u=n.n(d),l=n(387),h=new(n(255).J);function _(){return Math.floor(7970*Math.random()+16e3)}function p(){var e=(0,i.useState)(_()),t=e[0],n=e[1],o=(0,i.useState)(""),d=o[0],p=o[1];(0,i.useEffect)((function(){function e(){return(e=(0,s.Z)(a().mark((function e(t){var n,r,o,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0}],r=new l.CH("0x2464Df245C5E0Ff013b4f65DCA212A9a5B451089",n,h),e.next=4,r.tokenURI(t);case 4:o=e.sent,s=JSON.parse(window.atob(o.substring(29))).image,p(s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(t)}),[t]);return(0,r.jsx)(c.Z,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:u().home__cta,children:[(0,r.jsx)("h1",{children:"LootV3"}),(0,r.jsx)("ul",{children:[{name:"Twitter",url:"https://twitter.com/lootprojectv3"},{name:"Contract",url:"https://etherscan.io/address/0x2464Df245C5E0Ff013b4f65DCA212A9a5B451089"}].map((function(e,t){var n=e.name,o=e.url;return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:n})},t)}))}),(0,r.jsxs)("p",{children:["LootV3 is third set of Loot, a randomized adventurer gear generated and stored on chain.",(0,r.jsx)("br",{}),"LootV3 compatible with Loot & Extension Loot\uff08xLOOT).",(0,r.jsx)("br",{}),"You can retrieve token ownership within V3 contract.",(0,r.jsx)("br",{}),(0,r.jsx)("b",{children:"Extend, not Break."})]})]}),(0,r.jsxs)("div",{className:u().home__feature,children:[(0,r.jsxs)("span",{children:["Give me tokenID:",(0,r.jsx)("input",{value:t,onChange:function(e){return n(+e.target.value)}}),(0,r.jsx)("button",{onClick:function(){n(_())},children:"random"}),(0,r.jsx)("p",{children:"Loot V3 tokenId from 16001 to 23970"})]}),d&&(0,r.jsx)("a",{href:"https://opensea.io/assets/0x2464Df245C5E0Ff013b4f65DCA212A9a5B451089/".concat(t),target:"_blank",rel:"noopener noreferrer",className:u().home__bag,children:(0,r.jsx)("img",{src:d})})]})]})})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(844)}])},4409:function(e){e.exports={header:"Layout_header__2iLWX",header__logo:"Layout_header__logo__2Zu-m",header__links:"Layout_header__links__2tkmn",header__links_active:"Layout_header__links_active__2DGAB",footer:"Layout_footer__2GYdL"}},5594:function(e){e.exports={home__cta:"Home_home__cta__10yCx",home__feature:"Home_home__feature__GTZaW",home__bag:"Home_home__bag__1YhOb",home__bag_attributes:"Home_home__bag_attributes__3uVtG"}},8677:function(){},2808:function(){}},function(e){e.O(0,[621,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);