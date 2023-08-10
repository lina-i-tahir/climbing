"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4348],{41079:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(85893),i=n(67294),r=n(33403),l=n(26954);function o(e){return function(e){var t=e.metadata.lat,n=e.metadata.lng,a=[t,t],i=a[0],r=a[1],l=[n,n],o=l[0],s=l[1];return e.children.length>0&&e.children.forEach((function(e){var t=e.metadata,n=t.lat,a=t.lng;n>r?r=n:a>s&&(s=a),n<i?i=n:a<o&&(o=a)})),[[o,i],[s,r]]}(e)}function s(e){var t=i.useRef(null),n={top:45,left:45,bottom:45,right:45};return i.useEffect((function(){if(null!==t.current){var a=t.current,i=o(e.area);a.fitBounds(i,{padding:n})}}),[e.area.id]),(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsxs)(r.D5,{ref:t,id:"areaHeatmap2",initialViewState:{bounds:o(e.area),fitBoundsOptions:{padding:n}},reuseMaps:!0,mapboxAccessToken:"pk.eyJ1IjoibWFwcGFuZGFzIiwiYSI6ImNrMW1nZTY2ODAwaGszbmxzdmV1dzNvZTcifQ.aI_avtcHh5F1QBW1UvUhLA",mapStyle:l.MK.dark,children:[e.subAreas.map((function(t){return(0,a.jsx)(r.Jx,{style:{zIndex:t.id===e.focused?100:0},longitude:t.metadata.lng,latitude:t.metadata.lat,anchor:"bottom",children:(0,a.jsx)("div",{className:"rounded shadow transition text-xs px-1 font-bold \n            ".concat(t.id===e.focused?"bg-green-500 text-white scale-125":" bg-white","\n            ").concat(t.id===e.selected?"bg-violet-500 text-white scale-125":" bg-white"),children:t.areaName})},t.id)})),(0,a.jsx)(r.Jx,{style:{zIndex:1},longitude:e.area.metadata.lng,latitude:e.area.metadata.lat,anchor:"bottom",children:(0,a.jsx)("div",{className:"rounded shadow transition text-md px-1 font-bold bg-violet-500 text-white scale-125 z-index-1",children:e.area.areaName})}),(0,a.jsx)(r.jf,{})]})})}},26954:function(e,t,n){n.d(t,{MK:function(){return c},ZP:function(){return d},cF:function(){return s}});var a=n(41799),i=n(69396),r=n(85893),l=n(67294),o=n(33403),s={width:300,height:1024,padding:{top:20,bottom:20,left:20,right:20},bearing:0,zoom:9,pitch:0,latitude:36.079693291728546,longitude:-115.5,bbox:[0,0,0,0]},c={light:"mapbox://styles/mappandas/ckx5ksor56x3z15qavm57edp9",dark:"mapbox://styles/mappandas/cl0u44wo8008415pedsbgtml7"};function d(e){var t=e.height,n=e.viewstate,s=e.onViewStateChange,d=e.children,u=e.light,h=e.onClick,f=void 0===h?function(){}:h,v=e.onHover,m=void 0===v?function(){}:v,x=e.interactiveLayerIds,g=(0,l.useRef)(null);(0,l.useEffect)((function(){null!==g.current&&g.current.resize()}),[t,g]);var p=l.useCallback((function(){if(null!==g.current){var e=g.current,t=e.getBounds(),r=t.getSouthWest(),l=t.getNorthEast(),o=[r.lng,r.lat,l.lng,l.lat],c=e.getCenter(),d={bearing:0,zoom:e.getZoom(),padding:e.getPadding(),pitch:0,latitude:c.lat,longitude:c.lng,bbox:o};s((0,i.Z)((0,a.Z)({},n,d),{bbox:o}))}}),[n]);return(0,r.jsx)(o.D5,(0,i.Z)((0,a.Z)({},n),{id:"areaHeatmap",reuseMaps:!0,mapStyle:u?c.light:c.dark,mapboxAccessToken:"pk.eyJ1IjoibWFwcGFuZGFzIiwiYSI6ImNrMW1nZTY2ODAwaGszbmxzdmV1dzNvZTcifQ.aI_avtcHh5F1QBW1UvUhLA",onMouseMove:m,onClick:f,interactiveLayerIds:x,onMove:function(e){var t,n,r=e.viewState,l=null!==(n=null===(t=g.current)||void 0===t?void 0:t.getBounds())&&void 0!==n?n:null,o=[0,0,0,0];if(null!=l){var c=l.getSouthWest(),d=l.getNorthEast();o=[c.lng,c.lat,d.lng,d.lat]}s((0,i.Z)((0,a.Z)({},r),{height:0,width:0,bbox:o}))},onLoad:p,interactive:!0,style:{height:t},ref:g,children:d}))}},67484:function(e,t,n){n.d(t,{F:function(){return a.Z}});n(11163);var a=n(10913)},7135:function(e,t,n){n.d(t,{uR:function(){return s},hw:function(){return r}});var a=n(36005),i=n(51779),r=function(e){var t,n=e.username,a=void 0===n?"":n,i=e.fullName,r=void 0===i?"":i,o=e.imageList,s=void 0===o?[]:o,c="/u/".concat(a),d=null!==(t=null===s||void 0===s?void 0:s.length)&&void 0!==t?t:0,u="".concat(0===d?"":d," Photo").concat(d>1?"s":"");return{author:c,pageTitle:"".concat(r," (").concat(c,") \u2022  ").concat(u," on OpenBeta"),pageImages:d>0?l(s):[]}},l=function(e){return(0,a.TV)(e.slice(0,10)).slice(0,4).map((function(e){return"".concat(i.o.CDN_BASE_URL,"/").concat(e.mediaUrl,"?w=1200&ch=630&cy=center&format=jpg&q=90")}))},o=n(25550),s=function(e){var t,n,a,i,r,l,s,d,u=e.area,h=u.areaName,f=u.aggregate,v=u.pathTokens,m=f.byDiscipline,x=null!==(r=null===m||void 0===m||null===(t=m.sport)||void 0===t?void 0:t.total)&&void 0!==r?r:0,g=null!==(l=null===m||void 0===m||null===(n=m.trad)||void 0===n?void 0:n.total)&&void 0!==l?l:0,p=null!==(s=null===m||void 0===m||null===(a=m.boulder)||void 0===a?void 0:a.total)&&void 0!==s?s:0,j=null!==(d=null===m||void 0===m||null===(i=m.aid)||void 0===i?void 0:i.total)&&void 0!==d?d:0,b=[x>0?"Sport ".concat(x):null,g>0?"Trad ".concat(g):null,p>0?"Bouldering ".concat(p):null,j>0?"Aid ".concat(j):null].filter((function(e){return null!=e})).join(" \xb7 "),y="";v.length>=2&&(y=(0,o.qI)(v[v.length-2])+" \u2022 ");var w=x+g+p+j,N="".concat(y).concat((0,o.qI)(h)," Area").concat(w>1?" \u2022 ".concat(w," climbs"):""),k=u.media;return{pageTitle:N,pageDescription:b,pageImages:k.length>0?c(k):[]}},c=function(e){return(0,a.TV)(e.slice(0,10)).slice(0,4).map((function(e){return"".concat(i.o.CDN_BASE_URL,"/").concat(e.mediaUrl,"?w=1200&ch=630&cy=center&format=jpg&q=85")}))};n(23121)},24348:function(e,t,n){n.r(t),n.d(t,{PageMeta:function(){return ie},__N_SSG:function(){return te},default:function(){return ne}});var a=n(41799),i=n(69396),r=n(85893),l=n(67294),o=n(11163),s=n(33514),c=n(83631),d=n(11618),u=n(41079),h=n(828);function f(e){var t=e.cont,n=e.maxLength,a=(0,l.useState)(!1),i=a[0],o=a[1],s=(0,l.useMemo)((function(){return function(e,t){var n=function(e){function t(t){for(var n=0,i=e;i<a.length&&i>=0;i+=t){if(a[i].endsWith("."))return n;n++}return n}return[t(1),t(-1)]},a=e.split(" "),i=[];if(a.length<=t||0===a.length)return[e,""];if(!e.includes("."))return[a.slice(0,t).join(" "),""];var r=!0,l=!1,o=void 0;try{for(var s,c=a[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var d=s.value;if(i.length>=t){var u=(0,h.Z)(n(i.length-1),2),f=u[0];if(u[1]<f&&i.length>1)for(;i.length>0&&!i[i.length-1].endsWith(".");)i.pop();else for(;void 0!==i[i.length-1]&&!i[i.length-1].endsWith(".");)i.push(a[i.length-1]);break}i.push(d)}}catch(v){l=!0,o=v}finally{try{r||null==c.return||c.return()}finally{if(l)throw o}}return[i.join(" "),a.slice(i.length).join(" ")]}(t,n)}),[t]),c=s[0],d=s[1],u=d.length>0,f=(0,l.useRef)(null);if(u){var v,m=null!==f.current?null===(v=f.current)||void 0===v?void 0:v.clientHeight:500;return(0,r.jsxs)("div",{"data-testid":"description",className:"transition",children:[(0,r.jsxs)("p",{children:[c,"\xa0",(0,r.jsx)("button",{"data-testid":"show-button",onClick:function(){return o(!i)},className:"text-blue-600 underline transition\n              ".concat(i?"opacity-0":"opacity-1"),children:"See full description"})]}),(0,r.jsx)("div",{"data-testid":"description-hidden-section",className:"overflow-y-hidden",style:{transition:"max-height 0.2s ease-in-out",maxHeight:i?"".concat(m,"px"):"0px"},children:(0,r.jsxs)("p",{ref:f,"aria-hidden":i?"false":"true",children:[d,"\xa0",(0,r.jsx)("button",{"data-testid":"hide-button",onClick:function(){return o(!i)},className:"text-blue-600 underline transition\n            ".concat(i?"opacity-1":"opacity-0"),children:"Hide full description"})]})})]})}return(0,r.jsx)("div",{children:""!==c?c:"No description found"})}var v=n(25550);function m(e){var t=e.description;return(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold max-w-sm",children:e.title}),(0,r.jsx)("a",{href:(0,v.eb)({lat:e.latitude,lng:e.longitude}),target:"blank",children:(0,r.jsxs)("div",{className:"text-slate-700 tracking-wider hover:underline hover:text-blue-700 text-sm",title:"Click to view on google maps",children:[e.latitude.toFixed(5),", ",e.longitude.toFixed(5)]})})]}),(0,r.jsx)("div",{className:"border-slate-500 border-l-2 mx-6 md:mx-8 lg:mx-16"}),""!==t?(0,r.jsxs)("div",{className:"mt-2",children:[(0,r.jsx)("h3",{className:"font-semibold tracking-tight",children:"Description"}),(0,r.jsx)("div",{className:"my-2 whitespace-pre-line",children:(0,r.jsx)(f,{cont:t,maxLength:50})})]}):""]})}var x=n(47568),g=n(20414),p=n(41664),j=n.n(p),b=n(9253),y=n(44204),w=n(87226),N=n(3023),k=n(75358),C=n(97187),S=(0,y.z)({chartName:"BarChart",GraphicalChild:w.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:N.K},{axisType:"yAxis",AxisComp:k.B}],formatAxisMap:C.t9});function Z(e){var t=Object.keys(e.data).filter((function(e){return"__typename"!==e})).map((function(t){var n;return{value:null===(n=e.data[t])||void 0===n?void 0:n.total,label:t}}));return(0,r.jsx)(b.h,{children:(0,r.jsxs)(S,{margin:{top:0,left:10,bottom:0},layout:"vertical",data:t,children:[(0,r.jsx)(N.K,{hide:!0,type:"number"}),(0,r.jsx)(k.B,{dataKey:"label",type:"category"}),(0,r.jsx)(w.$,{dataKey:"value",className:"fill-slate-800"})]})})}var F=n(29815);function A(e){var t=e.val,n=e.vert,a=e.label,i=Array(n).fill(0).map((function(e,n){return!(n<t)})).reverse();return(0,r.jsxs)("div",{className:"items-center flex flex-col flex-grow text-center px-2",children:[i.map((function(e,t){return e?(0,r.jsx)("div",{className:"bg-slate-200 grow w-8 mt-1"},t):(0,r.jsx)("div",{className:"bg-slate-700 grow w-8 mt-1"},t)})),(0,r.jsx)("div",{style:{fontSize:"0.6rem"},className:" text-slate-700 hidden md:block",children:a})]})}function B(e){var t=void 0!==e.verticalResolution?e.verticalResolution:4,n=(0,l.useMemo)((function(){var n,a=(n=Math).max.apply(n,(0,F.Z)(e.data));return e.data.map((function(e){var n=e/a*t;return n=n>0&&n<1?1:Math.round(n)}))}),[e.data]),a=void 0!==e.columnLabels?e.columnLabels:[];return(0,r.jsx)("div",{className:"flex h-full flex-grow",title:e.title,children:n.map((function(e,n){return(0,r.jsx)(A,{label:a[n],val:e,vert:t},n)}))})}function I(e){var t=e.val,n=e.vert,a=Array(n).fill(0).map((function(e,n){return!(n<t)})).reverse();return(0,r.jsx)("div",{className:"pr-1",children:a.map((function(e,t){return e?(0,r.jsx)("div",{className:"bg-gray-200 h-1 w-2 mt-0.5"},t):(0,r.jsx)("div",{className:"bg-gray-600 h-1 w-2 mt-0.5"},t)}))})}function E(e){var t=void 0!==e.verticalResolution?e.verticalResolution:4,n=(0,l.useMemo)((function(){var n,a=(n=Math).max.apply(n,(0,F.Z)(e.data));return e.data.map((function(e){var n=e/a*t;return n=n>0&&n<1?1:Math.round(n)}))}),[e.data]);return(0,r.jsx)("div",{className:"flex",title:e.title,children:n.map((function(e,n){return(0,r.jsx)(I,{val:e,vert:t},n)}))})}function M(e){var t,n=l.useRef(null),a=null!==n.current?null===(t=n.current)||void 0===t?void 0:t.clientHeight:0;return(0,r.jsx)("div",{className:"w-full overflow-y-hidden",style:{maxHeight:e.expand?"".concat(a,"px"):"0px",transition:"max-height 0.2s ease-in-out"},children:(0,r.jsx)("div",{ref:n,children:e.children})})}function T(e){var t=e.onFocus,n=e.onClick,a=e.selected,i=e.id,l=e.name,o=e.totalClimbs,s=e.href,c=e.aggregate,d=[c.byGradeBand.beginner,c.byGradeBand.intermediate,c.byGradeBand.advanced,c.byGradeBand.expert];return(0,r.jsxs)("div",{onClick:function(){return n(i)},onMouseEnter:function(){return t(i)},title:a?"":"Click to Expand",className:"px-6 p-3 rounded-lg border mb-2 cursor-pointer\n      ".concat(a?"ring-violet-500 shadow-lg shadow-violet-400 border-violet-700":"hover:bg-slate-200 border-gray-600"),id:i,children:[(0,r.jsxs)("div",{className:"flex flex-wrap items-baseline",children:[(0,r.jsxs)("h4",{className:"w-full flex-1 text-lg font-semibold whitespace-nowrap truncate flex",children:[l,(0,r.jsx)("span",{className:"text-xs p-1",children:e.isFav&&(0,r.jsx)("div",{className:"",children:"\u2764\ufe0f"})})]}),(0,r.jsxs)("div",{className:"text-xs pr-6",children:[0!==o?o:"No"," ","Climbs"]}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)(E,{data:d,title:"Grade distribution for this area. Beginner routes on left and advanced routes on the far right"})})]}),(0,r.jsxs)(M,{expand:a,children:[(0,r.jsxs)("div",{className:"p-3 flex pt-6",children:[(0,r.jsx)("div",{className:"pr-8",children:(0,r.jsx)(B,{columnLabels:["Beginner","Intermediate","Advanced","Expert"],verticalResolution:8,data:d,title:"Grade distribution for this area. Beginner routes on left and advanced routes on the far right"})}),(0,r.jsx)("div",{className:"w-full h-32",title:"How many routes of each discipline are logged in this area",children:null!=c.byDiscipline&&(0,r.jsx)(Z,{data:c.byDiscipline})})]}),(0,r.jsx)("div",{className:"flex justify-center pt-4",children:(0,r.jsx)(j(),{href:s,children:(0,r.jsx)("button",{className:"border border-slate-600 rounded p-1 px-4",children:"View"})})})]})]})}function L(e){var t=function(t){e.focused!==t?e.onFocus(t):e.onFocus(null)},n=function(t){e.selected!==t?e.onSelect(t):e.onSelect(null)},i=(0,l.useState)([]),o=i[0],s=i[1];return(0,l.useEffect)((function(){fetch("/api/user/fav").then(function(){var e=(0,x.Z)((function(e){return(0,g.__generator)(this,(function(t){switch(t.label){case 0:return[4,e.json()];case 1:return[2,t.sent()]}}))}));return function(t){return e.apply(this,arguments)}}()).then((function(e){var t=e.areaCollections.favourites;s(void 0!==t?t:[])})).catch(console.error)}),[]),(0,l.useEffect)((function(){if(null!==e.selected){var t=document.getElementById("".concat(e.selected,"-xqoops98"));if(null===t)return;t.scrollIntoView({behavior:"smooth",block:"center"})}}),[e.selected]),(0,r.jsx)("div",{className:"pr-3 p-2",onMouseLeave:function(){return e.onFocus(null)},children:e.items.map((function(i){return(0,r.jsx)("div",{id:"".concat(i.id,"-xqoops98"),children:(0,r.jsx)(T,(0,a.Z)({isFav:o.includes(i.id),onFocus:t,onClick:n,selected:e.selected===i.id},i))},i.id)}))})}var P=n(14888),R=n(43815),z=function(e){var t,n=[];if((null===e||void 0===e||null===(t=e.payload)||void 0===t?void 0:t.length)>0){var a=e.payload[0].payload.details;n=Object.keys(a).map((function(e){return[e,a[e]]}))}return(0,r.jsxs)("div",{className:"bg-white p-2 rounded border border-slate-700",children:[(0,r.jsx)("h5",{children:e.label}),(0,r.jsx)("table",{children:(0,r.jsx)("tbody",{children:n.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e[0]}),(0,r.jsx)("td",{className:"pl-4",children:e[1]})]},e[0])}))})})]})};function D(e){var t=e.items.filter((function(e){return e.totalClimbs>1})).map((function(e){return{name:e.name,total:e.totalClimbs,id:e.id,details:{beginner:e.aggregate.byGradeBand.beginner,intermediate:e.aggregate.byGradeBand.intermediate,advance:e.aggregate.byGradeBand.advanced,expert:e.aggregate.byGradeBand.expert}}}));return(0,r.jsx)("div",{className:"w-full",style:{height:"5rem"},children:(0,r.jsx)(b.h,{width:"100%",height:"100%",children:(0,r.jsxs)(S,{data:t,onClick:function(t){if(void 0!==t&&null!==t&&void 0!==t.activePayload&&0!==t.activePayload.length){var n=t.activePayload[0].payload.id;e.onSelect(n)}},onMouseMove:function(t){var n;if(null!=(null===t||void 0===t||null===(n=t.activePayload)||void 0===n?void 0:n.length)&&0!==t.activePayload.length){var a=t.activePayload[0].payload.id;a!==e.focused&&e.onFocus(a)}},children:[(0,r.jsx)(P.u,{content:(0,r.jsx)(z,{}),isAnimationActive:!1}),(0,r.jsx)(N.K,{hide:!0,dataKey:"name"}),(0,r.jsx)(w.$,{dataKey:"total",className:"fill-slate-800 cursor-pointer hover:fill-slate-700",children:t.map((function(t){return(0,r.jsx)(R.b,{className:"".concat(t.id===e.focused?"fill-green-500":"fill-slate-800","\n                 ").concat(t.id===e.selected?"fill-violet-500":"fill-slate-800")},t.id)}))})]})})})}function G(e){var t=(0,l.useRef)(null),n=400;return void 0!==t.current&&null!==t.current&&(n=t.current.clientHeight),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{ref:t,children:[(0,r.jsx)(m,{title:e.title,description:e.description,latitude:e.latitude,longitude:e.longitude}),(0,r.jsx)(D,{items:e.items,onFocus:e.onFocus,onSelect:e.onSelect,selected:e.selected,focused:e.focused})]}),(0,r.jsx)("div",{style:{maxHeight:"calc(85vh - ".concat(n,"px)")},className:"overflow-y-auto mt-8",children:(0,r.jsx)(L,{onFocus:e.onFocus,onSelect:e.onSelect,items:e.items,focused:e.focused,selected:e.selected})})]})}var _=n(59181),H=n(84437),W=n(7135);var O=l.forwardRef((function({title:e,titleId:t,...n},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"}))})),V=n(48974);var K=l.forwardRef((function({title:e,titleId:t,...n},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"}))})),U=n(311),q=n(32274),Q=n(22667),Y=n(68146),J=n(89936),$=n(67484),X=n(65799);function ee(e){var t=(0,$.F)().isMobile,n=(0,l.useRef)(0),s=(0,l.useState)("none"),c=s[0],d=s[1],u=(0,l.useState)(!1),h=u[0],f=u[1],v=e.areaName,m=e.uuid,x=e.history,g=(0,o.useRouter)(),p=(0,l.useCallback)((function(){d("none"),(n.current>0||h)&&g.reload()}),[c,h]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Q.h_,{children:[(0,r.jsxs)(Q.WA,{className:"btn btn-primary btn-sm w-full md:w-fit gap-2 items-center",children:["Edit ",(0,r.jsx)(O,{className:"w-3 h-3 lg:w-4 lg:w-4"})]}),(0,r.jsxs)(Q.Nv,{align:t?"center":"end",children:[(0,r.jsx)(Q.hP,{text:"Change history (".concat(x.length,")"),onSelect:function(){return d("history")},disabled:0===x.length}),(0,r.jsx)(Q.u2,{}),(0,r.jsx)(Q.hP,{className:"font-bold",icon:(0,r.jsx)(V.Z,{className:"w-5 h-5"}),text:"Quick Edit",onSelect:function(){return d("edit")}}),(0,r.jsx)(Q.u2,{}),(0,r.jsx)(Q.hP,{icon:(0,r.jsx)(K,{className:"w-5 h-5"}),text:"Add new area",onSelect:function(){return d("add")}}),(0,r.jsx)(Q.u2,{}),(0,r.jsx)(Q.hP,{icon:(0,r.jsx)(U.Z,{className:"w-5 h-5"}),text:"Advanced Edit",onSelect:function(){g.push("/crag/".concat(e.uuid))}}),(0,r.jsx)(Q.u2,{}),(0,r.jsx)(Q.hP,{text:"Cancel"})]})]}),(0,r.jsx)(q.hV,{modal:!0,open:"edit"===c,onOpenChange:p,children:(0,r.jsx)(q.cZ,{title:"Edit area",children:(0,r.jsx)(J.ZP,(0,i.Z)((0,a.Z)({},e),{formRef:n}))})}),(0,r.jsx)(q.hV,{modal:!0,open:"add"===c,onOpenChange:p,children:(0,r.jsx)(q.cZ,{title:"Add new child area",children:(0,r.jsx)(Y.ZP,{parentName:v,parentUuid:m,onSuccess:function(){return f(!0)}})})}),(0,r.jsx)(q.hV,{modal:!0,open:"history"===c,onOpenChange:p,children:(0,r.jsx)(q.cZ,{title:"Change history",children:(0,r.jsx)(X.default,{history:x})})})]})}var te=!0,ne=function(e){var t=(0,o.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[!t.isFallback&&(0,r.jsx)(ie,(0,a.Z)({},e)),(0,r.jsx)(s.Z,{showFooter:!1,showFilterBar:!1,contentContainerClass:"content-default",children:t.isFallback?(0,r.jsx)("div",{className:"px-4 max-w-screen-md h-screen",children:(0,r.jsx)("div",{children:"Loading..."})}):(0,r.jsx)(ae,(0,a.Z)({},e))})]})},ae=function(e){var t=e.area,n=e.history,o=(0,l.useState)(null),s=o[0],c=o[1],h=(0,l.useState)(null),f=h[0],m=h[1],x=(0,_.q)(),g=t.children.map((function(e){var t;return{id:e.metadata.areaId,name:e.areaName,description:null===(t=e.content)||void 0===t?void 0:t.description,totalClimbs:e.totalClimbs,aggregate:e.aggregate,content:e.content,href:(0,v.QF)(e.metadata.areaId,e.metadata.leaf,e.children.length)}})),p=t.areaName,j=t.children,b=t.metadata,y=t.content,w=t.pathTokens,N=t.ancestors;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex overflow-y-auto",style:{height:"calc(100vh - ".concat(x,"px)")},children:[(0,r.jsxs)("div",{className:"p-6 flex-1 overflow-y-auto",style:{height:"calc(100vh - ".concat(x,"px)"),scrollSnapType:"y mandatory"},children:[(0,r.jsxs)("div",{className:"pt-4",children:[(0,r.jsx)(d.ZP,{ancestors:N,pathTokens:w}),(0,r.jsx)("div",{className:"mt-4"}),(0,r.jsx)(H.Z,{isHero:!0,photoList:t.media})]}),(0,r.jsx)("div",{className:"mt-4 md:flex md:justify-end",children:(0,r.jsx)(ee,(0,i.Z)((0,a.Z)({},t),{history:n}))}),(0,r.jsx)("div",{className:"mt-16",children:(0,r.jsx)(G,{onFocus:function(e){return c(e)},onSelect:function(e){return m(e)},items:g,selected:f,focused:s,title:p,description:y.description,longitude:b.lng,latitude:b.lat})})]}),(0,r.jsx)("div",{className:"md:1-1/4 lg:w-1/2",children:(0,r.jsx)(u.default,{focused:s,selected:f,subAreas:j,area:t})})]})})},ie=function(e){var t=e.area,n=(0,W.uR)({area:t}),a=n.pageImages,i=n.pageTitle,l=n.pageDescription;return(0,r.jsx)(c.Z,{title:i,description:l,images:a})}},3023:function(e,t,n){n.d(t,{K:function(){return a}});var a=function(){return null};a.displayName="XAxis",a.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0}},75358:function(e,t,n){n.d(t,{B:function(){return a}});var a=function(){return null};a.displayName="YAxis",a.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1}}}]);