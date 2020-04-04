(this["webpackJsonpspotify-player"]=this["webpackJsonpspotify-player"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(0),c=a.n(r),l=a(33),s=a.n(l),o=(a(92),a(93),a(132)),i=a(131),u=a(127),m=a(128),d=a(77),f=a(73),h=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{onClick:function(){window.location.href="https://accounts.spotify.com/authorize?client_id=bee70acc71d645e0aeb3ba505672c35d&response_type=token&redirect_uri=http://localhost:3000"},variant:"success"},"Login"))},p=a(29),b=function(e){var t=Object(r.useState)({label:"Track",value:"track"}),a=Object(n.a)(t,2),l=a[0],s=a[1],b=Object(p.g)(),E=b.type,y=b.query,g=b.offset,v=e.search,k=e.history;Object(r.useEffect)((function(){E&&y&&g&&v({q:y,type:E,limit:9,offset:9*g})}),[E,y,g,v]);return c.a.createElement(o.a,{bg:"dark",expand:"lg"},c.a.createElement(o.a.Brand,null,c.a.createElement(o.a.Brand,{className:"text-white"},c.a.createElement("span",{className:"text-success border border-success rounded-pill p-2"},"Spotify"),c.a.createElement("span",null,"Player"))),c.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(i.a,{className:"mr-auto"}),c.a.createElement(u.a,{inline:!0,onSubmit:function(e){e.preventDefault(),0!==e.target.searchQuery.value.trim().length&&k.push("/search/"+l.value+"/"+e.target.searchQuery.value.trim().replace(" ","+")+"/0")}},e.logged?c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{name:"searchType",onSelect:function(e){s(JSON.parse(e))},className:"mr-2"},c.a.createElement(m.a.Toggle,{variant:"success",id:"dropdown-basic"},l.label),c.a.createElement(m.a.Menu,null,c.a.createElement(m.a.Item,{eventKey:JSON.stringify({label:"Track",value:"track"})},"Track"),c.a.createElement(m.a.Item,{eventKey:JSON.stringify({label:"Artist",value:"artist"})},"Artist"),c.a.createElement(m.a.Item,{eventKey:JSON.stringify({label:"Album",value:"album"})},"Album"),c.a.createElement(m.a.Item,{eventKey:JSON.stringify({label:"Playlist",value:"playlist"})},"Playlist"))),c.a.createElement(d.a,{type:"text",placeholder:"Search",className:"mr-sm-2",name:"searchQuery"}),c.a.createElement(f.a,{type:"submit"},"Search")):c.a.createElement(h,null))))},E=a(84),y=a.n(E),g=a(134),v=a(125),k=function(e){return c.a.createElement(f.a,{className:"float-right mb-2 rounded-circle",variant:"outline-success",onClick:function(){return e.notifyPlayerNotSupported(!0)}},"\u25b6")},O=a(45),N=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(!1),l=Object(n.a)(a,2),s=l[0],o=l[1],i=Object(r.useState)(Object(O.a)({},e.style,{whiteSpace:"nowrap",overflow:e.children.style&&e.children.style.overflow&&"visible"!==e.children.style.overflow?e.children.style.overflow:"hidden"})),u=Object(n.a)(i,2),m=u[0],d=u[1];Object(r.useEffect)((function(){var e;o((e=t.current).clientWidth<e.scrollWidth||e.clientHeight<e.scrollHeight),s&&d((function(e){return Object(O.a)({},e,{overflow:"visible"})}))}),[s]);var f=c.a.cloneElement(e.children,{ref:t,style:m,className:e.className});return"p"!==e.children.type&&console.error("the children of Marquee component must be a <p> element"),s?c.a.createElement("marquee",null,f):f},j=function(e){var t=Object(r.useState)(!0),a=Object(n.a)(t,2),l=a[0],s=a[1];return"track"!==e.track.type?null:c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{className:"d-inline-block m-2 w-30 h-25 border-success rounded",bg:"dark",text:"success"},c.a.createElement("center",null,c.a.createElement(v.a,{animation:"grow",variant:"light",style:{margin:e.track.album.images[1].width/2,display:l?"block":"none"}})),c.a.createElement(g.a.Img,{variant:"top",src:e.track.album.images[1].url,onLoad:function(){s(!1)},className:l?"d-none":"d-block"}),c.a.createElement(g.a.Body,null,c.a.createElement(N,{style:{fontSize:"20px"},className:"font-weight-bold"},c.a.createElement("p",null,e.track.name)),c.a.createElement("span",{className:"text-info"},function(e){var t=e/1e3,a=Math.floor(t/60);return t-=60*a,(a=a.toFixed(0))+":"+(t=t.toFixed(0))}(e.track.duration_ms)),c.a.createElement("br",null),c.a.createElement(N,{className:"text-white-50"},c.a.createElement("p",null,e.track.artists.map((function(t,a){return c.a.createElement("span",{key:t.id},c.a.createElement("span",{className:"span-link",onClick:function(){return a=t.id,void e.history.push("/artist/"+a);var a}},t.name),a!==e.track.artists.length-1?", ":"")})))),c.a.createElement(N,{className:"text-warning"},c.a.createElement("p",null,c.a.createElement("span",{className:"span-link",onClick:function(){return t=e.track.album.id,void e.history.push("/album/"+t);var t}},e.track.album.name))),c.a.createElement(k,{notifyPlayerNotSupported:e.notifyPlayerNotSupported}))))},w=a(126),x=a(129),S=a(39),F=function(e){var t=Object(p.g)(),a=t.type,n=t.query,r=function(t){var r=Object(O.a)({},e.searchOptions);r.offset=r.limit*t,e.history.push("/search/"+a+"/"+n+"/"+t)};if(!e.searchOptions)return c.a.createElement(c.a.Fragment,null);for(var l=e.searchOptions.offset/e.searchOptions.limit,s=l+1,o=[],i=function(e){e>0?o.push(c.a.createElement(S.a.Item,{key:e,active:e===s,onClick:function(){return r(e-1)}},e)):o.push(c.a.createElement(S.a.Item,{key:e,disabled:!0},"\xa0"))},u=l+1-2;u<=l+1+2;u++)i(u);return c.a.createElement(S.a,{className:"mx-auto",style:{width:"200px"}},c.a.createElement(S.a.Prev,{disabled:0===l,onClick:function(){return r(s-2)}}),o,c.a.createElement(S.a.Next,{onClick:function(){return r(s)}}))},_=a(133),C=function(e){var t=Object(r.useState)(!0),a=Object(n.a)(t,2),l=a[0],s=a[1];return c.a.createElement(_.a,{defaultActiveKey:"0",className:"mb-2 "},c.a.createElement(g.a,{className:"mb-2 text-light",style:{borderRadius:"0px",border:"0"}},c.a.createElement(_.a.Toggle,{as:g.a.Header,eventKey:"0",className:"bg-dark-3 border-bottom border-secondary mb-0 noselect",onClick:function(){return s(!l)}},c.a.createElement("span",null,e.toggle),c.a.createElement("span",{className:"float-right pointer"},l?c.a.createElement(c.a.Fragment,null,"\u25bd"):c.a.createElement(c.a.Fragment,null,"\u25b6"))),c.a.createElement(_.a.Collapse,{eventKey:"0"},c.a.createElement(g.a.Body,{className:"bg-transparent  bg-dark-2 "},e.children))))},P=function(e){var t=Object(r.useState)(!0),a=Object(n.a)(t,2),l=a[0],s=a[1],o=e.artist;return"artist"!==o.type?null:c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{className:"d-inline-block m-2 w-30 h-25 border-success rounded",bg:"dark",text:"success"},o.images.length>=2?c.a.createElement(c.a.Fragment,null,c.a.createElement("center",null,c.a.createElement(v.a,{animation:"grow",variant:"light",style:{margin:"41%",display:l?"block":"none"}})),c.a.createElement("div",{className:"image-cropper "+(l?"d-none":"d-block")},c.a.createElement(g.a.Img,{variant:"top",src:o.images[1].url,onLoad:function(){s(!1)},className:"profile-pic "}))):c.a.createElement("div",{className:"border border-secondary rounded-circle image-cropper bg-dark"}),c.a.createElement(g.a.Body,null,c.a.createElement(N,{className:"text-center font-weight-bold span-link noselect",style:{fontSize:"20px"}},c.a.createElement("p",{onClick:function(){return t=o.id,void e.history.push("/artist/"+t);var t}},o.name)))))},R=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),l=a[0],s=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(w.a,{className:"pt-2 pb-2"},e.searchResult&&e.searchResult.tracks&&c.a.createElement(C,{toggle:"Tracks"},e.searchResult.tracks.items.map((function(t){return c.a.createElement(j,{key:t.id,track:t,notifyPlayerNotSupported:s,history:e.history})}))),e.searchResult&&e.searchResult.artists&&c.a.createElement(C,{toggle:"Artists"},e.searchResult.artists.items.map((function(t){return c.a.createElement(P,{key:t.id,artist:t,history:e.history})}))),c.a.createElement(F,{history:e.history,offset:e.offset,next:e.next,resultsPerPage:6,search:e.search,searchOptions:e.searchOptions})),c.a.createElement("div",{style:{position:"fixed",bottom:10,right:10}},c.a.createElement(x.a,{animation:!0,autohide:!0,delay:3e3,show:l,onClose:function(){return s(!1)}},c.a.createElement(x.a.Header,{className:"bg-danger text-light"},c.a.createElement("strong",{className:"mr-auto"},"Error"),c.a.createElement("small",null,"Just now")),c.a.createElement(x.a.Body,null,"Spotify player is not supported yet by Spotify API."))))},T=function(e){var t=function(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),c=a[0],l=a[1],s=Object(r.useState)(null),o=Object(n.a)(s,2),i=o[0],u=o[1],m=Object(r.useState)(null),d=Object(n.a)(m,2),f=d[0],h=d[1];return Object(r.useEffect)((function(){if(f&&e){var t=!0,a=Object.keys(f).reduce((function(e,t){return e+"&"+t+"="+f[t]}),"access_token="+e);return y.a.get("https://api.spotify.com/v1/search?"+a).then((function(e){var a=e.data;t&&(console.log(a),l(a))})).catch((function(e){return u(e)})),function(){return t=!1}}}),[f,e]),Object(r.useEffect)((function(){i&&console.error(i)}),[i]),{searchResult:c,search:h,searchOptions:f,error:i}}(e._TOKEN),a=t.searchResult,l=t.search,s=t.searchOptions,o=Object(p.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/",exact:!0},c.a.createElement(b,{logged:e.logged,search:l,history:o})),c.a.createElement(p.a,{path:"/search/:type/:query/:offset",exact:!0},c.a.createElement(b,{logged:e.logged,search:l,history:o}),c.a.createElement(R,{searchResult:a,search:l,searchOptions:s,history:o})),c.a.createElement(p.a,null,c.a.createElement("p",{className:"text-white"},"NOT FOUND"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(40),K=a(130),A=function(e){var t=function(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),a=t[0],c=t[1],l=Object(K.a)(["access_token"]),s=Object(n.a)(l,2),o=s[0].access_token,i=s[1];return Object(r.useEffect)((function(){if(!a)if(o)c(o);else{var e=window.location.href,t=e.indexOf("access_token="),n="access_token=".length,r=e.indexOf("&token_type");if(-1!==t&&-1!==r){var l=e.substring(t+n,r);c(l),i("access_token",l,{maxAge:3600})}}}),[i,a,o]),a}();return c.a.cloneElement(e.children,{logged:!!t,_TOKEN:t})};s.a.render(c.a.createElement(I.a,null,c.a.createElement(A,null,c.a.createElement(T,{logged:!1}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){e.exports=a(118)},92:function(e,t,a){},93:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.e68541ac.chunk.js.map