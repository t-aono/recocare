(this["webpackJsonpcosmetic-rank"]=this["webpackJsonpcosmetic-rank"]||[]).push([[0],{114:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(30),s=c.n(a),i=c(24),j=c(11),o=c(18),b=c(5),l=c(10),d=c(31),h=c.n(d),O=c.p+"static/media/undraw_page_not_found.a9992cb1.svg",x=c.p+"static/media/recosk.ef5933a8.png",u=c(3),m=function(){return Object(u.jsx)(b.d,{my:"8",justifyContent:"center",children:Object(u.jsx)(b.a,{as:"a",href:"/",_hover:{cursor:"pointer"},children:Object(u.jsx)(l.a,{src:x})})})},f=c(36),g=c(28),p=c.p+"static/media/cosme.52db0d68.png",y=c.p+"static/media/undraw_reading.097b3ba7.svg",v=c.p+"static/media/cracker.92b79960.svg",w=function(){var e="".concat("https://recosk.herokuapp.com/","api/count"),t=Object(f.a)(e,(function(e){return fetch(e).then((function(e){return e.json()}))})),c=t.data;return t.error?Object(u.jsx)(b.b,{children:"\u30c7\u30fc\u30bf\u306e\u30a2\u30af\u30bb\u30b9\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.b,{className:h.a.topMessage,children:Object(u.jsx)(b.a,{as:"h1",fontSize:"1.1em",children:"\u304a\u6c17\u306b\u5165\u308a\u30b9\u30ad\u30f3\u30b1\u30a2\u3092\u898b\u3064\u3051\u3088\u3046"})}),Object(u.jsx)(b.a,{my:"20",position:"relative",left:"50%",transform:"translateX(-50%)",w:"100vw",children:Object(u.jsx)(l.a,{src:p,h:"80vw",maxH:"800px",objectFit:"cover",m:"0 auto"})}),c?Object(u.jsxs)(b.b,{children:[Object(u.jsx)(l.a,{src:v,w:"14"}),Object(u.jsxs)(b.a,{fontSize:"xl",children:["\u767b\u9332\u5546\u54c1\u6570 ",c.toLocaleString()," \u70b9"]}),Object(u.jsx)(l.a,{src:v,w:"14"})]}):"",Object(u.jsx)(b.b,{children:Object(u.jsx)(b.a,{children:"\u5546\u54c1\u968f\u6642\u8ffd\u52a0\u4e2d\uff01"})}),Object(u.jsxs)(b.a,{lineHeight:"2.5em",mt:"6em",children:["\u3069\u308c\u304c\u81ea\u5206\u306b\u81ea\u5206\u306b\u3042\u3063\u3066\u3044\u308b\u304b\u5206\u304b\u3089\u306a\u3044\u3002",Object(u.jsx)("br",{}),"\u5546\u54c1\u304c\u3042\u308a\u904e\u304e\u3066\u63a2\u3059\u306e\u304c\u75b2\u308c\u308b\u3002",Object(u.jsx)("br",{}),"\u60a9\u307f\u3092\u89e3\u6d88\u3067\u304d\u308b\u5546\u54c1\u3092\u52b9\u7387\u7684\u306b\u898b\u3064\u3051\u305f\u3044\u3002",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"\u305d\u306e\u3088\u3046\u306b\u8003\u3048\u305f\u4e8b\u306f\u3042\u308a\u307e\u305b\u3093\u304b\uff1f",Object(u.jsx)("br",{}),"\uff13\u3064\u306e\u8cea\u554f\u306b\u7b54\u3048\u308b\u3060\u3051\u3067\u3001\u3042\u306a\u305f\u306e\u5408\u308f\u305b\u305f\u30e9\u30f3\u30ad\u30f3\u30b0\u3092\u7d39\u4ecb\u3057\u307e\u3059!"]}),Object(u.jsx)(b.a,{mt:"20",mb:"7em",children:Object(u.jsx)(l.a,{src:y})}),Object(u.jsx)(b.b,{children:Object(u.jsx)(i.b,{to:"/question",children:Object(u.jsx)(g.a,{className:h.a.primaryBtn,colorScheme:"red500",height:"65px",width:"200px",size:"lg",children:"\u3084\u3063\u3066\u307f\u308b"})})}),Object(u.jsx)(b.a,{mt:"7em",position:"relative",left:"50%",transform:"translateX(-50%)",w:"100vw",children:Object(u.jsx)(l.a,{src:p,h:"80vw",maxH:"800px",objectFit:"cover",m:"0 auto"})})]})},S=c(47),k=c(39),_=function(){var e=Object(j.f)(),t=Object(j.h)().id,c="".concat("https://recosk.herokuapp.com/","api/product/").concat(t),n=Object(f.a)(c,(function(e){return fetch(e).then((function(e){return e.json()}))})),r=n.data,a=n.error,s="";if(r&&r.created_at){var i=new Date(r.created_at);s=i.getFullYear()+"/"+(i.getMonth()+1)+"/"+i.getDate()}return a?Object(u.jsx)(b.b,{children:"\u30c7\u30fc\u30bf\u306e\u30a2\u30af\u30bb\u30b9\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"}):r?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(b.a,{children:[Object(u.jsx)(b.b,{as:"h1",fontSize:"xl",children:"\u5546\u54c1\u8a73\u7d30"}),Object(u.jsx)(b.a,{mt:"5",fontWeight:"bold",children:"\u5546\u54c1\u540d"}),Object(u.jsx)(b.a,{children:r.name}),Object(u.jsx)(b.a,{p:"10",className:h.a.flexGrow,children:Object(u.jsx)(l.a,{src:r.medium_image_url,alt:r.name,objectFit:"contain",w:"100%"})}),Object(u.jsxs)(b.a,{children:[Object(u.jsx)(b.a,{fontWeight:"bold",children:"\u4fa1\u683c"}),Object(u.jsx)(b.a,{children:r.price.toLocaleString("ja-JP",{style:"currency",currency:"JPY"})})]}),Object(u.jsxs)(b.a,{mt:"3",children:[Object(u.jsx)(b.a,{fontWeight:"bold",children:"\u767b\u9332\u65e5"}),Object(u.jsx)(b.a,{children:s})]}),Object(u.jsx)(b.a,{my:"5",textAlign:"center",children:Object(u.jsx)(b.g,{href:r.afflliate_url,isExternal:!0,children:Object(u.jsxs)(g.a,{colorScheme:"red",variant:"outline",children:["\u697d\u5929\u3067\u898b\u308b",Object(u.jsx)(k.d,{mx:"2px"})]})})}),Object(u.jsx)(b.a,{fontWeight:"bold",children:"\u5546\u54c1\u8aac\u660e"}),Object(u.jsx)(b.a,{children:r.caption})]}),Object(u.jsx)(b.b,{mt:"10",children:Object(u.jsxs)(b.g,{size:"lg",mb:"10",variant:"link",onClick:function(){return e.goBack()},children:[Object(u.jsx)(k.a,{w:"7",h:"7"}),"\u30e9\u30f3\u30ad\u30f3\u30b0\u306b\u623b\u308b"]})})]}):Object(u.jsx)(S.a,{mt:"10",mb:"10",pt:"5",pb:"5",startColor:"red.300",endColor:"red.100"})},C=c(21),P=c(61),F=c(58),M=c(37),N=c(34),z=function(e){var t=e.category,c=e.setCategory,r=e.setCategories,a="".concat("https://recosk.herokuapp.com/","api/genre"),s=Object(f.a)(a,(function(e){return fetch(e).then((function(e){return e.json()}))})),i=s.data,j=s.error;return Object(n.useEffect)((function(){i&&r(i)}),[i,r]),j?Object(u.jsx)(b.b,{children:"\u30c7\u30fc\u30bf\u306e\u30a2\u30af\u30bb\u30b9\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"}):Object(u.jsxs)(F.a,{isRequired:!0,mt:"5",children:[Object(u.jsx)(F.b,{as:"legend",mb:"5",borderBottom:"solid 1px #ccc",children:"\u3069\u306e\u7a2e\u985e\u306e\u5546\u54c1\u3092\u304a\u63a2\u3057\u3067\u3059\u304b\uff1f"}),i?Object(u.jsx)(M.b,{name:"category",value:t,onChange:function(e){return function(e){return c(e)}(e)},children:Object(u.jsx)(b.e,{templateColumns:"repeat(2, 1fr)",columnGap:1,rowGap:3,children:i.map((function(e){return Object(u.jsx)(b.f,{children:Object(u.jsx)(M.a,{value:e.genre_id,colorScheme:"orange",children:e.name})},e.id)}))})}):Object(u.jsx)(b.b,{align:"center",children:Object(u.jsx)(N.a,{})})]})},W=function(e){var t=e.price,c=e.setPrice,r=Object(n.useMemo)((function(){return["1000","2000","3000","5000","7000","10000","20000"]}),[]);return Object(u.jsxs)(F.a,{mt:"5",children:[Object(u.jsx)(F.b,{as:"legend",mb:"5",borderBottom:"solid 1px #ccc",children:"\u3054\u4e88\u7b97\u306f\u3069\u308c\u304f\u3089\u3044\u3067\u3059\u304b\uff1f"}),Object(u.jsx)(M.b,{name:"price",value:t,onChange:function(e){return function(e){return c(e)}(e)},children:Object(u.jsx)(b.e,{templateColumns:"repeat(2, 1fr)",columnGap:1,rowGap:3,children:r.map((function(e){return Object(u.jsx)(b.f,{children:Object(u.jsxs)(M.a,{value:e,colorScheme:"orange",children:["\uff5e",Number(e).toLocaleString("ja-JP",{style:"currency",currency:"JPY"})]})},e)}))})})]})},B=c(56),E=c(59),J=function(e){var t=e.worry,c=e.setWorry,r=e.setWorries,a=function(e){var n=t.indexOf(e.target.value),r=[];n<0?(r=[].concat(Object(B.a)(t),[e.target.value]),c(r)):((r=t).splice(n,1),c(Object(B.a)(r)))},s="".concat("https://recosk.herokuapp.com/","api/effect"),i=Object(f.a)(s,(function(e){return fetch(e).then((function(e){return e.json()}))})),j=i.data,o=i.error;return Object(n.useEffect)((function(){j&&r(j)}),[j,r]),o?Object(u.jsx)(b.b,{children:"\u30c7\u30fc\u30bf\u306e\u30a2\u30af\u30bb\u30b9\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"}):Object(u.jsxs)(F.a,{isRequired:!0,mt:"5",children:[Object(u.jsx)(F.b,{as:"legend",mb:"5",borderBottom:"solid 1px #ccc",children:"\u30b9\u30ad\u30f3\u30b1\u30a2\u306b\u95a2\u3057\u3066\u304a\u60a9\u307f\u306f\u3042\u308a\u307e\u3059\u304b\uff1f"}),j?Object(u.jsx)(b.e,{templateColumns:"repeat(2, 1fr)",columnGap:1,rowGap:3,children:j.map((function(e){return Object(u.jsx)(b.f,{value:t,children:Object(u.jsx)(E.a,{colorScheme:"orange",value:e.id,onChange:a,isChecked:t.includes(String(e.id)),children:e.name})},e.id)}))}):Object(u.jsx)(b.b,{align:"center",children:Object(u.jsx)(N.a,{})})]})},G=c.p+"static/media/undraw_choose.6957b11e.svg",I=function(){var e=Object(j.f)(),t=Object(j.g)(),c=Object(P.a)(),r=Object(n.useState)(""),a=Object(C.a)(r,2),s=a[0],i=a[1],o=Object(n.useState)(""),d=Object(C.a)(o,2),O=d[0],x=d[1],m=Object(n.useState)([]),f=Object(C.a)(m,2),y=f[0],v=f[1],w=Object(n.useState)(),S=Object(C.a)(w,2),k=S[0],_=S[1],F=Object(n.useState)(""),M=Object(C.a)(F,2),N=M[0],B=M[1];Object(n.useEffect)((function(){t.state&&(t.state.genre&&i(t.state.genre),t.state.price&&B(t.state.price),t.state.effects&&v(t.state.effects))}),[t]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(b.a,{children:[Object(u.jsx)(b.b,{as:"h1",my:"3",fontSize:"1.5em",children:"\u30a2\u30f3\u30b1\u30fc\u30c8\u30d5\u30a9\u30fc\u30e0"}),Object(u.jsx)(b.a,{my:"3em",children:Object(u.jsx)(l.a,{src:G,my:10,w:"100vw",objectFit:"contain"})}),Object(u.jsxs)(b.h,{spacing:12,children:[Object(u.jsx)(z,{category:s,setCategory:i,categories:O,setCategories:x}),Object(u.jsx)(J,{worry:y,setWorry:v,setWorries:_}),Object(u.jsx)(W,{price:N,setPrice:B})]})]}),Object(u.jsx)(b.b,{mt:"5em",children:Object(u.jsx)(g.a,{className:h.a.primaryBtn,colorScheme:"red500",height:"65px",width:"200px",size:"lg",onClick:function(){s&&y.length?e.push({pathname:"/ranking",state:{genre:s,genreName:O.find((function(e){return e.genre_id===s})).name,effects:y,effectNames:k.map((function(e){return y.includes(String(e.id))&&e.name})).filter((function(e){return e})),price:N}}):c({status:"warning",variant:"top-accent",title:"\u5fc5\u9808\u9805\u76ee\u304c\u672a\u9078\u629e\u3067\u3059\u3002",duration:3e3,isClosable:!0})},children:"\u56de\u7b54\u3059\u308b"})}),Object(u.jsx)(b.a,{my:"20",position:"relative",left:"50%",transform:"translateX(-50%)",w:"100vw",children:Object(u.jsx)(l.a,{src:p,h:"80vw",maxH:"800px",objectFit:"cover",m:"0 auto"})})]})},L=function(e){var t=e.currentPage,c=e.lastPage,n=e.changePage;return Object(u.jsxs)(b.d,{justifyContent:"space-between",children:[1!==t?Object(u.jsxs)(b.g,{onClick:function(){return n(t-1)},children:[Object(u.jsx)(k.b,{w:"7",h:"7"}),"\u524d\u3078"]}):Object(u.jsx)(b.a,{}),t<c?Object(u.jsxs)(b.g,{onClick:function(){return n(t+1)},children:["\u6b21\u3078",Object(u.jsx)(k.c,{w:"7",h:"7"})]}):Object(u.jsx)(b.a,{})]})},T=c.p+"static/media/logo.ac6a0467.png",A=c.p+"static/media/ranking1.69644418.svg",Y=c.p+"static/media/ranking2.d72fce91.svg",q=c.p+"static/media/ranking3.0ce64a92.svg",D=function(){var e=Object(j.f)(),t=Object(j.g)(),c=Object(n.useState)([]),r=Object(C.a)(c,2),a=r[0],s=r[1],o=Object(n.useState)([]),d=Object(C.a)(o,2),h=d[0],O=d[1],x=Object(n.useState)(1),m=Object(C.a)(x,2),f=m[0],p=m[1],y=Object(n.useState)(null),v=Object(C.a)(y,2),w=v[0],_=v[1],P=Object(n.useState)(null),F=Object(C.a)(P,2),M=F[0],N=F[1],z=Object(n.useMemo)((function(){return"".concat("https://recosk.herokuapp.com/","api/ranking")}),[]),W=Object(n.useMemo)((function(){return{genre:t.state.genre,effects:t.state.effects,price:t.state.price}}),[t]),E=Object(n.useMemo)((function(){return{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(W)}}),[W]);Object(n.useEffect)((function(){fetch(z,E).then((function(e){return e.json()})).then((function(e){N(e.error),s(e.data),O(e.data.slice(0,"10")),_(Math.floor(e.data.length/"10"))})).catch((function(e){return N(e)}))}),[z,E]);var J=function(e){var t=[];for(var c in a)c>"10"*(e-1)&&c<="10"*e&&t.push(a[c]);O(t),p(e),window.scrollTo(0,0)};return M?Object(u.jsx)(b.b,{children:"\u30c7\u30fc\u30bf\u306e\u30a2\u30af\u30bb\u30b9\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"}):0!==a.length||M?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(b.b,{as:"h1",fontSize:"xl",children:"\u304a\u3059\u3059\u3081\u30e9\u30f3\u30ad\u30f3\u30b0"}),Object(u.jsxs)(b.a,{fontSize:"sm",my:"5",children:[Object(u.jsx)(b.a,{fontWeight:"bold",children:"\u56de\u7b54\u5185\u5bb9"}),Object(u.jsxs)(b.d,{mx:"1",children:[Object(u.jsx)(b.a,{w:"5em",children:"\u30ab\u30c6\u30b4\u30ea\uff1a"}),Object(u.jsx)(b.a,{children:t.state.genreName})]}),Object(u.jsxs)(b.d,{mx:"1",children:[Object(u.jsx)(b.a,{w:"5em",children:"\u60a9\u307f\uff1a"}),Object(u.jsx)(b.a,{children:t.state.effectNames.join("/")})]}),Object(u.jsxs)(b.d,{mx:"1",children:[Object(u.jsx)(b.a,{w:"5em",children:"\u3054\u4e88\u7b97\uff1a"}),Object(u.jsxs)(b.a,{children:["\u301c",Number(t.state.price).toLocaleString("ja-JP",{style:"currency",currency:"JPY"})]})]})]}),M||"",0===a.length?Object(u.jsx)(b.b,{my:"10",children:"\u8a72\u5f53\u306a\u3057"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(b.a,{fontSize:"sm",mt:"2",children:[a.length,"\u4ef6\u30d2\u30c3\u30c8\u3057\u307e\u3057\u305f!"]}),Object(u.jsx)(b.a,{my:"3",children:Object(u.jsx)(L,{currentPage:f,lastPage:w,changePage:J})}),Object(u.jsxs)(b.a,{borderBottom:"solid 1px #ccc",w:"6em",textAlign:"center",mx:"auto",fontSize:"sm",children:["10"*(f-1)+1,"\u301c","10"*f," \u4f4d"]}),h.map((function(e,t){return Object(u.jsx)(b.b,{my:"12",maxW:"30em",mx:"auto",children:Object(u.jsxs)(b.a,{ml:"5",maxW:"30em",children:[Object(u.jsx)(b.d,{mb:"2",justifyContent:"space-between",alignItems:"center",children:1===f&&0===t?Object(u.jsx)(b.a,{children:Object(u.jsx)(l.a,{w:"12",h:"12",src:A})}):1===f&&1===t?Object(u.jsx)(b.a,{children:Object(u.jsx)(l.a,{w:"10",h:"10",src:Y})}):1===f&&2===t?Object(u.jsx)(b.a,{children:Object(u.jsx)(l.a,{w:"10",h:"10",src:q})}):Object(u.jsxs)(b.a,{fontWeight:"bold",children:["10"*(f-1)+t+1," \u4f4d"]})}),Object(u.jsx)(b.a,{children:e.name}),Object(u.jsx)(b.a,{textAlign:"right",children:Object(u.jsx)(i.b,{to:"/product/"+e.id,children:Object(u.jsx)(g.a,{colorScheme:"orange",size:"sm",variant:"link",children:"\u8a73\u7d30\u3092\u898b\u308b"})})}),Object(u.jsx)(b.a,{mt:"3",mb:"1",children:Object(u.jsx)(l.a,{src:e.small_image_url,fallbackSrc:T,alt:e.name,objectFit:"contain",w:"100%",h:"10em",borderRadius:"lg"})}),e.recomend.map((function(e){return Object(u.jsxs)(b.a,{my:"3",children:[Object(u.jsx)(b.a,{display:"inline",background:"gray.400",fontWeight:"bold",color:"#fff",py:"1",px:"3",mr:"1",borderRadius:"full",children:e.effective}),"\u306e\u5bfe\u7b56\u306b\u304a\u3059\u3059\u3081",Object(u.jsx)("br",{}),Object(u.jsx)(b.a,{display:"inline",borderBottom:"2px solid orange",children:e.ingredient})," \u914d\u5408"]},e.ingredient)})),Object(u.jsx)(b.a,{fontSize:"sm",float:"right",children:e.price.toLocaleString("ja-JP",{style:"currency",currency:"JPY"})})]})},t)})),Object(u.jsx)(b.a,{mt:"10",children:Object(u.jsx)(L,{currentPage:f,lastPage:w,changePage:J})})]}),Object(u.jsx)(b.b,{my:"5em",children:Object(u.jsxs)(b.g,{variant:"link",onClick:function(){e.push({pathname:"/question",state:{genre:t.state.genre,effects:t.state.effects,price:t.state.price}})},children:[Object(u.jsx)(k.a,{w:"5",h:"5",verticalAlign:"sub",fontSize:"sm"}),"\u30a2\u30f3\u30b1\u30fc\u30c8\u30d5\u30a9\u30fc\u30e0\u3078\u623b\u308b"]})})]})}):Object(u.jsxs)(b.a,{children:[Object(u.jsx)(b.b,{children:"\u30e9\u30f3\u30ad\u30f3\u30b0\u4f5c\u6210\u4e2d\u3067\u3059\u2026"}),Object(B.a)(Array(10)).map((function(e,t){return Object(u.jsx)(S.a,{mt:"10",mb:"10",pt:"5",pb:"5",startColor:"red.300",endColor:"red.100"},t)}))]})},H=function(){var e=Object(j.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},R=function(e){var t=Object(j.f)().listen,c=e.trackingId;return Object(n.useEffect)((function(){return t((function(e){window.gtag&&(c?window.gtag("config",c,{page_path:e.pathname}):console.log("Tracking not enabled, as `trackingId` was not given and there is no `GA_MEASUREMENT_ID`."))}))}),[c,t]),null};var X=function(){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(b.c,{className:h.a.mainFontStyle,w:"100%",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(R,{trackingId:"G-YNY7NS9MHW"}),Object(u.jsx)(H,{}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/",children:Object(u.jsx)(w,{})}),Object(u.jsx)(j.a,{exact:!0,path:"/question",children:Object(u.jsx)(I,{})}),Object(u.jsx)(j.a,{path:"/ranking",children:Object(u.jsx)(D,{})}),Object(u.jsx)(j.a,{path:"/product/:id",children:Object(u.jsx)(_,{})}),Object(u.jsxs)(j.a,{path:"*",children:[Object(u.jsx)(b.b,{mt:"20",children:"\u30da\u30fc\u30b8\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\uff01"}),Object(u.jsx)(b.b,{mt:"20",children:Object(u.jsx)(l.a,{src:O})}),Object(u.jsx)(b.b,{mt:"20",children:Object(u.jsx)(i.b,{to:"/",children:"\u30c8\u30c3\u30d7\u3078"})})]})]})]})})]})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,118)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root")),U()},31:function(e,t,c){e.exports={mainFontStyle:"MainStyles_mainFontStyle__1iDbE",featureInactive:"MainStyles_featureInactive__3fVON",nowrap:"MainStyles_nowrap__LBgJZ",flexGrow:"MainStyles_flexGrow__3rUky",topMessage:"MainStyles_topMessage__PIzrV",primaryBtn:"MainStyles_primaryBtn__xauWd"}}},[[114,1,2]]]);
//# sourceMappingURL=main.a2e7eb09.chunk.js.map