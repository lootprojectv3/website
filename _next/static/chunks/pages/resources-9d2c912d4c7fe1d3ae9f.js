(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[584],{8869:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var o=r(5893),n=r(1664),a=r(1163),s=r(9008),i=r(4409),c=r.n(i);function d(e){var t=e.children;return(0,o.jsxs)("div",{children:[(0,o.jsx)(l,{}),(0,o.jsx)(u,{}),(0,o.jsx)("div",{className:c().content,children:t}),(0,o.jsx)(p,{})]})}function l(){return(0,o.jsxs)(s.default,{children:[(0,o.jsx)("title",{children:"LootV3"}),(0,o.jsx)("meta",{name:"title",content:"LootV3"}),(0,o.jsx)("meta",{name:"description",content:"LootV3 is randomized adventurer gear generated and stored on chain."}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:url",content:"https://www.lootprojectv3.com/"}),(0,o.jsx)("meta",{property:"og:title",content:"LootV3"}),(0,o.jsx)("meta",{property:"og:description",content:"LootV3 is randomized adventurer gear generated and stored on chain."}),(0,o.jsx)("meta",{property:"og:image",content:"https://lootprojectv3.com/meta.png"}),(0,o.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{property:"twitter:url",content:"https://www.lootprojectv3.com/"}),(0,o.jsx)("meta",{property:"twitter:title",content:"LootV3"}),(0,o.jsx)("meta",{property:"twitter:description",content:"LootV3 is randomized adventurer gear generated and stored on chain."}),(0,o.jsx)("meta",{property:"twitter:image",content:"https://lootprojectV3.com/meta.png"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap",rel:"stylesheet"})]})}function u(){(0,a.useRouter)().pathname;return(0,o.jsxs)("div",{className:c().header,children:[(0,o.jsx)("div",{className:c().header__logo,children:(0,o.jsx)(n.default,{href:"/",children:(0,o.jsx)("a",{children:"LootV3"})})}),(0,o.jsx)("div",{className:c().header__links,children:(0,o.jsx)("ul",{})})]})}function p(){return(0,o.jsx)("div",{className:c().footer,children:(0,o.jsxs)("p",{children:["This website is"," ",(0,o.jsx)("a",{href:"https://github.com/lootprojectv3/website",target:"_blank",rel:"noopener noreferrer",children:"open-source"}),"."]})})}},2167:function(e,t,r){"use strict";var o=r(3038);t.default=void 0;var n,a=(n=r(7294))&&n.__esModule?n:{default:n},s=r(1063),i=r(4651),c=r(7426);var d={};function l(e,t,r,o){if(e&&s.isLocalURL(t)){e.prefetch(t,r,o).catch((function(e){0}));var n=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;d[t+"%"+r+(n?"%"+n:"")]=!0}}var u=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),u=a.default.useMemo((function(){var t=s.resolveHref(n,e.href,!0),r=o(t,2),a=r[0],i=r[1];return{href:a,as:e.as?s.resolveHref(n,e.as):i||a}}),[n,e.href,e.as]),p=u.href,h=u.as,m=e.children,f=e.replace,b=e.shallow,g=e.scroll,v=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var y=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,k=c.useIntersection({rootMargin:"200px"}),w=o(k,2),x=w[0],L=w[1],_=a.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);a.default.useEffect((function(){var e=L&&r&&s.isLocalURL(p),t="undefined"!==typeof v?v:n&&n.locale,o=d[p+"%"+h+(t?"%"+t:"")];e&&!o&&l(n,p,h,{locale:t})}),[h,p,L,v,r,n]);var j={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,o,n,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==i&&o.indexOf("#")>=0&&(i=!1),t[n?"replace":"push"](r,o,{shallow:a,locale:c,scroll:i}))}(e,n,p,h,f,b,g,v)},onMouseEnter:function(e){s.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(n,p,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof v?v:n&&n.locale,M=n&&n.isLocaleDomain&&s.getDomainLocale(h,C,n&&n.locales,n&&n.domainLocales);j.href=M||s.addBasePath(s.addLocale(h,C,n&&n.defaultLocale))}return a.default.cloneElement(t,j)};t.default=u},7426:function(e,t,r){"use strict";var o=r(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!s,c=n.useRef(),d=n.useState(!1),l=o(d,2),u=l[0],p=l[1],h=n.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||u||e&&e.tagName&&(c.current=function(e,t,r){var o=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var o=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:n,elements:o}),r}(r),n=o.id,a=o.observer,s=o.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),i.delete(n))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,u]);return n.useEffect((function(){if(!s&&!u){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[h,u]};var n=r(7294),a=r(3447),s="undefined"!==typeof IntersectionObserver;var i=new Map},3503:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var o=r(5893),n=r(8869),a=r(2764),s=r.n(a),i=[{title:"Communities",description:"Spaces run by the community for Loot enthusiasts to share news and build together:",list:[{name:"Loot Community Discord",description:"For all things Loot and derivatives (note: high traffic)",url:"https://discord.gg/NXEntTSHgy"},{name:"Loot Talk (Forum)",description:"A place for structured discussion of all things Loot, for builders and the community",url:"https://loot-talk.com"}]},{title:"Developer Tooling",description:"Aggregated resources built by the Loot community:",list:[{name:"Loot Rarity",description:"Loot attributes and rarities sheet by @AustinGreen",url:"https://docs.google.com/spreadsheets/d/1Al0Yi-tM7K_05pCKjkQtSJjwbV2jMfac1i_oC4j2EYI/edit"},{name:"dhof-loot",description:"All bags, item occurrences, bag rarity, and images by @anish-agnihotri and @ktasbas",url:"https://github.com/Anish-Agnihotri/dhof-loot"},{name:"Loot subgraph",description:"Loot bag, owner, and transfer subgraph by @shahruz",url:"https://thegraph.com/legacy-explorer/subgraph/shahruz/loot"},{name:"loot-sdk",description:"TypeScript wrapper to loot subgraph by @shahruz",url:"https://www.npmjs.com/package/loot-sdk"},{name:"0xinventory.app",description:"Loot bag and item rarity explorer by @scotato",url:"https://0xinventory.app/"},{name:"Robes.Market",description:"Floor tracker for bags containing Divine Robes by @worm#6888",url:"https://robes.market/"},{name:"Pixel Character Generator",description:"Generates pixel characters from loot bags",url:"https://www.lootcharacter.com/"},{name:"loot-rarity",description:"Rarity colors for loot (TypeScript SDK) by @bpierre",url:"https://github.com/bpierre/loot-rarity"},{name:"loot-rarity-bookmarklet",description:"Bookmarklet to add rarity colors to OpenSea",url:"https://sp9q2.csb.app/"},{name:"LootComponents.sol",description:"Utility contract to easily interact with Loot properties",url:"https://etherscan.io/address/0x3eb43b1545a360d1D065CB7539339363dFD445F3#code"}]},{title:"Guilds",description:"Guild divided by items and attributes:",list:[{name:"Divine Roles",description:"For owners of Divine Robes",url:"https://divineroles.vercel.app/"},{name:"CrownDAO",description:"For owners of Crowns",url:"https://tinyurl.com/crowndao"},{name:"Dragon Guild",description:"For owners of Dragon loot",url:"https://tinyurl.com/lootdragonguild"},{name:"Divine Lodge",description:"For owners of Divine Loot",url:"https://tinyurl.com/divinelodge"},{name:"Ancient Adventurers",description:"For owners of Ancient Loot",url:"https://tinyurl.com/ancientadventurers"},{name:"Katana Garden",description:"For owners of Katanas",url:"https://katana.garden"}]},{title:"Market Trackers",description:"Tools to keep track of Loot by attributes:",list:[{name:"Robes.Market",description:"Market tracker for Divine Robes",url:"https://robes.market"},{name:"Weeb.Market",description:"Market tracker for Katanas",url:"https://weeb.market"},{name:"Ancients.Market",description:"Market tracker for Ancient Helms",url:"https://www.ancients.market/"},{name:"Crowns-Market.Vercel.App",description:"Market tracker for Crowns",url:"https://crowns-market.vercel.app/"},{name:"Hoods.Market",description:"Market tracker for Divine Hoods",url:"https://hoods.market/"},{name:"Bookclub.Market",description:"Market tracker for Books",url:"https://www.bookclub.market/"},{name:"SacredNumbers.Market",description:"Market tracker for Sacred Numbers",url:"http://www.sacrednumbers.market/"},{name:"Detection.Market",description:"Market tracker for Book of Detection",url:"http://detection.market/"},{name:"FloorBags.Market",description:"Market tracker for any item",url:"http://floorbags.market/"},{name:"Dragons.Market",description:"Market tracker for Dragon/Dragonskin items",url:"http://dragons.market/"}]},{title:"Derivative Projects",description:"Projects that remix or build on top of Loot. Please note that this list is community submitted and projects are *not* audited. Large errors are possible, up to and including loss of funds. Do your own research and proceed with caution:",list:[{name:"Loot Descriptions",description:"AI-based role-playing descriptions",url:"https://opensea.io/collection/lootdescriptions"},{name:"Realms",description:"Realm Wonders forked from @UnchartedAtlas",url:"https://etherscan.io/address/0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d#writeContract"},{name:"Ability Score",description:"RPC style level 1 ability scores",url:"https://etherscan.io/address/0x42a87e04f87a038774fb39c0a61681e7e859937b#code"},{name:"Adventure Gold",description:"Loot DAO governance and gold token",url:"https://etherscan.io/address/0x32353a6c91143bfd6c7d363b546e62a9a2489a20#writeContract"},{name:"Loot Characters",description:"Characters for your bags",url:"https://etherscan.io/address/0x7403ac30de7309a0bf019cda8eec034a5507cbb3#writeContract"},{name:"Loot Personalities v0.1",description:"Provide a backstory for your adventurer",url:"https://etherscan.io/address/0x3b1bb53b1a42ff61b7399fc196469a742cd3e98d#code"},{name:"Loot Class",description:"D&D-styled classes for bags",url:"https://etherscan.io/address/0xccab950f5b192603a94a26c4fa00c8d2d392b98d#writeContract"},{name:"Banquets",description:"Randomized adventurer meals",url:"https://etherscan.io/address/0x615a610649e656485d9baf0ebe525496d7b78e24"},{name:"Summons",description:"Summons to battle between good and evil",url:"https://twitter.com/HolyWarLoots/status/1432984936747716609"},{name:"Abodes",description:"Randomized adventurer dwellings",url:"https://twitter.com/LootAbodes/status/1433031932904935439?s=20"},{name:"Loot Army",description:"Randomized adventurer armies",url:"https://etherscan.io/address/0xed92dbe9df63728f5e92a2b8f2bc617082ee760b"},{name:"Mounts",description:"Randomized mounts for adventurers",url:"https://etherscan.io/address/0x4e8234d076caeb90604a7e5b6a584ee4eb18490a#writeContract"},{name:"FOOD Supplies",description:"Supplies for hungry and weary adventurers",url:"https://etherscan.io/address/0xb79d2717d14741266e1c23ff67dcb936e792113b#readContract"},{name:"Quests",description:"Randomized quest packs for bags",url:"https://etherscan.io/address/0x4de9d18Fd8390c12465bA3C6cc8032992fD7655d"},{name:"Companions",description:"Friendly companions to join your adventure",url:"https://etherscan.io/address/0x3461d89c7dd0119c6411850eb69a8a0a5531dae4#readContract"},{name:"Pets",description:"Randomized pet bags",url:"https://etherscan.io/address/0x70F11Bc4d6C07C821b20bbE1872c35aB57F0a112#writeContract"},{name:"Poorly Drawn Loot",description:"Experimental, poorly drawn bags",url:"https://opensea.io/activity/loot-poorly-drawn"},{name:"Foes (against Adventurers)",description:"Enemies of the Adventurers",url:"https://etherscan.io/address/0xB8AF61Bf2C0D8D4F65ebeCb4f46124AbDD462699#writeContract"},{name:"The Traveling Musician",description:"Travel tunes for loot holders",url:"https://etherscan.io/address/0xF7AC82FedA08d0f3E071847250521c1297E1aF9c#writeContract"},{name:"Loot Lore",description:"Jobs, Race, Religion, and Realms",url:"https://etherscan.io/address/0x32E58C6F1FF983924F385cE6aadF0595577beda1#writeContract"},{name:"Potions",description:"Consumable items with effects",url:"https://opensea.io/collection/potionsforloot"},{name:"Holy War Loots",description:"The Holy War",url:"https://twitter.com/HolyWarLoots/status/1433293231840653312"},{name:"Treasure",description:"Decentralized, composable money for the metaverse",url:"https://opensea.io/collection/treasure-for-loot"},{name:"Loot Avatars",description:"The Avatars on chain for Loot community",url:"https://twitter.com/lootavatars"},{name:"Encounters",description:"Randomly generated encounters for your Characters and Loot",url:"https://www.adventurerencounters.com/"},{name:"Name",description:"Names for adventurers that can be changed by spending Adventure Gold",url:"https://etherscan.io/address/0xb9310af43f4763003f42661f6fc098428469adab"},{name:"Maps",description:"Journey maps and location names for your Loot Adventures.",url:"https://mapsproject.xyz"}]}];function c(){return(0,o.jsx)(n.Z,{children:i.map((function(e,t){var r=e.title,n=e.description,a=e.list;return(0,o.jsxs)("div",{className:s().resources,children:[(0,o.jsx)("h2",{children:r}),(0,o.jsx)("p",{children:n}),(0,o.jsx)("ul",{children:a.map((function(e,t){var r=e.name,n=e.description,a=e.url;return(0,o.jsx)("li",{children:(0,o.jsxs)("p",{children:[(0,o.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:r})," ","\u2014 ",n]})},t)}))})]},t)}))})}},7019:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources",function(){return r(3503)}])},4409:function(e){e.exports={header:"Layout_header__2iLWX",header__logo:"Layout_header__logo__2Zu-m",header__links:"Layout_header__links__2tkmn",header__links_active:"Layout_header__links_active__2DGAB",footer:"Layout_footer__2GYdL"}},2764:function(e){e.exports={resources:"Resources_resources__1uBHo"}},9008:function(e,t,r){e.exports=r(639)},1664:function(e,t,r){e.exports=r(2167)},1163:function(e,t,r){e.exports=r(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=7019,e(e.s=t);var t}));var t=e.O();_N_E=t}]);