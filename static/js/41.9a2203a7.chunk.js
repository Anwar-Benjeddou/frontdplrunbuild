(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[41],{1153:function(e,t,o){"use strict";o.r(t);var r=o(89),a=o(578),n=o.n(a),i=o(1),c=o.n(i),s=o(7),l=o(302),p=o(158),d=o(579),u=o.n(d),b=o(580),m=o.n(b),h=o(589),j=o(9),O=o(597),g=o(300),v=o(496),x=o(568),f=o(738),w=o(736),y=o(737),T=o(693),S=o(563),C=o(54),R=o(576),k=o(2);const z=Object(s.a)(R.TextValidator)((()=>({width:"100%",marginBottom:"16px"})));function M(e){const[t,o]=c.a.useState(!1),[r,a]=Object(i.useState)({}),{name:n}=r;function s(){o(!1)}return Object(i.useEffect)((()=>{}),[r.password]),Object(k.jsxs)(l.a,{style:{padding:"10px"},children:[Object(k.jsx)(O.a,{color:"primary","aria-label":"Add",size:"small",className:"button",onClick:function(){o(!0)},children:Object(k.jsx)(g.a,{children:"add"})}),Object(k.jsxs)(x.a,{open:t,onClose:s,"aria-labelledby":"form-dialog-title",children:[Object(k.jsx)(T.a,{id:"form-dialog-title",children:"Ajouter une devise"}),Object(k.jsxs)(w.a,{children:[Object(k.jsx)(y.a,{children:"Veuillez entrer vos donn\xe9es de la devise ici. Nous enverrons des mises \xe0 jour occasionnellement."}),Object(k.jsx)("div",{children:Object(k.jsxs)(R.ValidatorForm,{onSubmit:async t=>{console.log("submitted"),console.log(r),await p.b.currenciesAdd(r)&&(e.refresh(),s())},onError:()=>null,children:[Object(k.jsx)(S.a,{container:!0,spacing:12,children:Object(k.jsx)(S.a,{item:!0,lg:12,md:12,sm:12,xs:12,sx:{mt:2},children:Object(k.jsx)(z,{type:"text",name:"name",label:"Nom de la devise",onChange:e=>{e.persist(),a(Object(j.a)(Object(j.a)({},r),{},{[e.target.name]:e.target.value}))},value:n||"",validators:["required"],errorMessages:["ce champ est obligatoire"]})})}),Object(k.jsx)(v.a,{color:"primary",variant:"contained",type:"submit",children:Object(k.jsx)(C.e,{sx:{pl:1,textTransform:"capitalize"},children:"Ajouter"})})]})})]}),Object(k.jsx)(f.a,{children:Object(k.jsx)(v.a,{variant:"outlined",color:"secondary",onClick:s,children:"Annuler"})})]})]})}const P=Object(s.a)(R.TextValidator)((()=>({width:"100%",marginBottom:"16px"})));function N(e){const[t,o]=c.a.useState(!1),[r,a]=Object(i.useState)(e.State),{name:n}=r;function s(){o(!1)}return Object(i.useEffect)((()=>{}),[r.password]),Object(k.jsxs)(l.a,{style:{padding:"10px"},children:[Object(k.jsx)(O.a,{color:"secondary","aria-label":"Add",size:"small",className:"button",onClick:function(){o(!0)},children:Object(k.jsx)(g.a,{children:"edit"})}),Object(k.jsxs)(x.a,{open:t,onClose:s,"aria-labelledby":"form-dialog-title",children:[Object(k.jsx)(T.a,{id:"form-dialog-title",children:"Mettre \xe0 jour la devise"}),Object(k.jsxs)(w.a,{children:[Object(k.jsx)(y.a,{children:"Veuillez entrer vos donn\xe9es de la devise ici. Nous enverrons des mises \xe0 jour occasionnellement."}),Object(k.jsx)("div",{children:Object(k.jsxs)(R.ValidatorForm,{onSubmit:async t=>{console.log("submitted"),console.log(r);var o={name:r.name};await p.b.currenciesUpdate(o,e.State.id)&&(e.refresh(),s())},onError:()=>null,children:[Object(k.jsx)(S.a,{container:!0,spacing:12,children:Object(k.jsx)(S.a,{item:!0,lg:12,md:12,sm:12,xs:12,sx:{mt:2},children:Object(k.jsx)(P,{type:"text",name:"name",label:"Nom de la devise",onChange:e=>{e.persist(),a(Object(j.a)(Object(j.a)({},r),{},{[e.target.name]:e.target.value}))},value:n||"",validators:["required"],errorMessages:["ce champ est obligatoire"]})})}),Object(k.jsx)(v.a,{color:"primary",variant:"contained",type:"submit",children:Object(k.jsx)(C.e,{sx:{pl:1,textTransform:"capitalize"},children:"Modifier"})})]})})]}),Object(k.jsx)(f.a,{children:Object(k.jsx)(v.a,{variant:"outlined",color:"secondary",onClick:s,children:"Annuler"})})]})]})}const F=Object(s.a)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[t.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));t.default=function(){const[e,t]=Object(i.useState)([]);Object(i.useEffect)((()=>{o()}),[]);const o=async()=>{var e=await p.b.currenciesIndex();e&&t(e.content),e&&console.log(e.content)},a=[{dataField:"name",text:"Nom de la devise"},{dataField:"is_active",text:"Etat",headerAlign:"center",align:"center",formatter:function(e,t){return"0"===t.is_active?Object(k.jsx)(h.a,{type:"currency",entity:t,status:"in-active",refresh:()=>o(),icons:"not_interested"}):Object(k.jsx)(h.a,{type:"currency",entity:t,status:"active",icons:"lens",color:"primary",refresh:()=>o()})}},{dataField:"id",text:"Action",headerAlign:"center",align:"center",formatter:function(e,t){return Object(k.jsx)(N,{State:t,refresh:()=>o()})}}];return Object(k.jsxs)(F,{children:[Object(k.jsx)(l.a,{className:"breadcrumb",children:Object(k.jsx)(r.a,{routeSegments:[{name:"Devises",path:"/admin/settings/currencies"}]})}),Object(k.jsxs)(r.j,{title:"devises",children:["  ",Object(k.jsx)(M,{refresh:()=>o()}),Object(k.jsx)(n.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",bootstrap4:!0,keyField:"id",data:e,columns:a,pagination:u()({sizePerPage:10,sizePerPageList:[5,10,15,20,25]}),filter:m()(),headerClasses:"table thead-light mb-0"})]})]})}},570:function(e,t,o){"use strict";var r=o(491);t.a=r.a},589:function(e,t,o){"use strict";var r=o(601),a=o(300),n=o(158),i=o(2);t.a=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(r.a,{title:e.status,onClick:()=>(async(t,o)=>{var r="0"===e.entity.is_active?"1":"0",a=await n.p.UpdateState(o+"/"+t.id,{is_active:r});console.log(a),e.refresh()})(e.entity,e.type),children:Object(i.jsx)(a.a,{color:e.color,fontSize:"large",children:e.icons})},"not_interested")})}},597:function(e,t,o){"use strict";var r=o(5),a=o(4),n=o(1),i=o(11),c=o(125),s=o(559),l=o(12),p=o(108),d=o(87),u=o(78);function b(e){return Object(u.a)("MuiFab",e)}var m=Object(d.a)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),h=o(7),j=o(102),O=o(2);const g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],v=Object(h.a)(s.a,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>Object(j.a)(e)||"classes"===e,overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t["size".concat(Object(l.a)(o.size))],"inherit"===o.color&&t.colorInherit,t[Object(l.a)(o.size)],t[o.color]]}})((e=>{let{theme:t,ownerState:o}=e;var r,n;return Object(a.a)({},t.typography.button,{minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(t.vars||t).zIndex.fab,boxShadow:(t.vars||t).shadows[6],"&:active":{boxShadow:(t.vars||t).shadows[12]},color:t.vars?t.vars.palette.text.primary:null==(r=(n=t.palette).getContrastText)?void 0:r.call(n,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],"&:hover":{backgroundColor:(t.vars||t).palette.grey.A100,"@media (hover: none)":{backgroundColor:(t.vars||t).palette.grey[300]},textDecoration:"none"},["&.".concat(m.focusVisible)]:{boxShadow:(t.vars||t).shadows[6]}},"small"===o.size&&{width:40,height:40},"medium"===o.size&&{width:48,height:48},"extended"===o.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===o.variant&&"small"===o.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===o.variant&&"medium"===o.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===o.color&&{color:"inherit"})}),(e=>{let{theme:t,ownerState:o}=e;return Object(a.a)({},"inherit"!==o.color&&"default"!==o.color&&null!=(t.vars||t).palette[o.color]&&{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}})}),(e=>{let{theme:t}=e;return{["&.".concat(m.disabled)]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}})),x=n.forwardRef((function(e,t){const o=Object(p.a)({props:e,name:"MuiFab"}),{children:n,className:s,color:d="default",component:u="button",disabled:m=!1,disableFocusRipple:h=!1,focusVisibleClassName:j,size:x="large",variant:f="circular"}=o,w=Object(r.a)(o,g),y=Object(a.a)({},o,{color:d,component:u,disabled:m,disableFocusRipple:h,size:x,variant:f}),T=(e=>{const{color:t,variant:o,classes:r,size:n}=e,i={root:["root",o,"size".concat(Object(l.a)(n)),"inherit"===t?"colorInherit":t]},s=Object(c.a)(i,b,r);return Object(a.a)({},r,s)})(y);return Object(O.jsx)(v,Object(a.a)({className:Object(i.a)(T.root,s),component:u,disabled:m,focusRipple:!h,focusVisibleClassName:Object(i.a)(T.focusVisible,j),ownerState:y,ref:t},w,{classes:T,children:n}))}));t.a=x},601:function(e,t,o){"use strict";var r=o(5),a=o(4),n=o(1),i=o(11),c=o(189),s=o(125),l=o(28),p=o(91),d=o(297),u=o(192),b=o(7),m=o(37),h=o(108),j=o(12),O=o(556),g=o(1125),v=o(110),x=o(35),f=o(570),w=o(194),y=o(159),T=o(87),S=o(78);function C(e){return Object(S.a)("MuiTooltip",e)}var R=Object(T.a)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),k=o(2);const z=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];const M=Object(b.a)(g.a,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((e=>{let{theme:t,ownerState:o,open:r}=e;return Object(a.a)({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},o.arrow&&{['&[data-popper-placement*="bottom"] .'.concat(R.arrow)]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},['&[data-popper-placement*="top"] .'.concat(R.arrow)]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},['&[data-popper-placement*="right"] .'.concat(R.arrow)]:Object(a.a)({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),['&[data-popper-placement*="left"] .'.concat(R.arrow)]:Object(a.a)({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})})),P=Object(b.a)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t["tooltipPlacement".concat(Object(j.a)(o.placement.split("-")[0]))]]}})((e=>{let{theme:t,ownerState:o}=e;return Object(a.a)({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:Object(l.alpha)(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:"".concat((r=16/14,Math.round(1e5*r)/1e5),"em"),fontWeight:t.typography.fontWeightRegular},{[".".concat(R.popper,'[data-popper-placement*="left"] &')]:Object(a.a)({transformOrigin:"right center"},o.isRtl?Object(a.a)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):Object(a.a)({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[".".concat(R.popper,'[data-popper-placement*="right"] &')]:Object(a.a)({transformOrigin:"left center"},o.isRtl?Object(a.a)({marginRight:"14px"},o.touch&&{marginRight:"24px"}):Object(a.a)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[".".concat(R.popper,'[data-popper-placement*="top"] &')]:Object(a.a)({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[".".concat(R.popper,'[data-popper-placement*="bottom"] &')]:Object(a.a)({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})});var r})),N=Object(b.a)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((e=>{let{theme:t}=e;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:Object(l.alpha)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}}));let F=!1;const A=new c.a;let E={x:0,y:0};function L(e,t){return function(o){for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];t&&t(o,...a),e(o,...a)}}const I=n.forwardRef((function(e,t){var o,l,b,T,S,R,I,B,V,W,D,U,_,H,q,J,X,Y,G;const K=Object(h.a)({props:e,name:"MuiTooltip"}),{arrow:Q=!1,children:Z,components:$={},componentsProps:ee={},describeChild:te=!1,disableFocusListener:oe=!1,disableHoverListener:re=!1,disableInteractive:ae=!1,disableTouchListener:ne=!1,enterDelay:ie=100,enterNextDelay:ce=0,enterTouchDelay:se=700,followCursor:le=!1,id:pe,leaveDelay:de=0,leaveTouchDelay:ue=1500,onClose:be,onOpen:me,open:he,placement:je="bottom",PopperComponent:Oe,PopperProps:ge={},slotProps:ve={},slots:xe={},title:fe,TransitionComponent:we=O.a,TransitionProps:ye}=K,Te=Object(r.a)(K,z),Se=n.isValidElement(Z)?Z:Object(k.jsx)("span",{children:Z}),Ce=Object(m.a)(),Re=Object(p.b)(),[ke,ze]=n.useState(),[Me,Pe]=n.useState(null),Ne=n.useRef(!1),Fe=ae||le,Ae=Object(c.b)(),Ee=Object(c.b)(),Le=Object(c.b)(),Ie=Object(c.b)(),[Be,Ve]=Object(y.a)({controlled:he,default:!1,name:"Tooltip",state:"open"});let We=Be;const De=Object(f.a)(pe),Ue=n.useRef(),_e=Object(v.a)((()=>{void 0!==Ue.current&&(document.body.style.WebkitUserSelect=Ue.current,Ue.current=void 0),Ie.clear()}));n.useEffect((()=>_e),[_e]);const He=e=>{A.clear(),F=!0,Ve(!0),me&&!We&&me(e)},qe=Object(v.a)((e=>{A.start(800+de,(()=>{F=!1})),Ve(!1),be&&We&&be(e),Ae.start(Ce.transitions.duration.shortest,(()=>{Ne.current=!1}))})),Je=e=>{Ne.current&&"touchstart"!==e.type||(ke&&ke.removeAttribute("title"),Ee.clear(),Le.clear(),ie||F&&ce?Ee.start(F?ce:ie,(()=>{He(e)})):He(e))},Xe=e=>{Ee.clear(),Le.start(de,(()=>{qe(e)}))},{isFocusVisibleRef:Ye,onBlur:Ge,onFocus:Ke,ref:Qe}=Object(w.a)(),[,Ze]=n.useState(!1),$e=e=>{Ge(e),!1===Ye.current&&(Ze(!1),Xe(e))},et=e=>{ke||ze(e.currentTarget),Ke(e),!0===Ye.current&&(Ze(!0),Je(e))},tt=e=>{Ne.current=!0;const t=Se.props;t.onTouchStart&&t.onTouchStart(e)},ot=e=>{tt(e),Le.clear(),Ae.clear(),_e(),Ue.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ie.start(se,(()=>{document.body.style.WebkitUserSelect=Ue.current,Je(e)}))},rt=e=>{Se.props.onTouchEnd&&Se.props.onTouchEnd(e),_e(),Le.start(ue,(()=>{qe(e)}))};n.useEffect((()=>{if(We)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||qe(e)}}),[qe,We]);const at=Object(x.a)(Object(u.a)(Se),Qe,ze,t);fe||0===fe||(We=!1);const nt=n.useRef(),it={},ct="string"===typeof fe;te?(it.title=We||!ct||re?null:fe,it["aria-describedby"]=We?De:null):(it["aria-label"]=ct?fe:null,it["aria-labelledby"]=We&&!ct?De:null);const st=Object(a.a)({},it,Te,Se.props,{className:Object(i.a)(Te.className,Se.props.className),onTouchStart:tt,ref:at},le?{onMouseMove:e=>{const t=Se.props;t.onMouseMove&&t.onMouseMove(e),E={x:e.clientX,y:e.clientY},nt.current&&nt.current.update()}}:{});const lt={};ne||(st.onTouchStart=ot,st.onTouchEnd=rt),re||(st.onMouseOver=L(Je,st.onMouseOver),st.onMouseLeave=L(Xe,st.onMouseLeave),Fe||(lt.onMouseOver=Je,lt.onMouseLeave=Xe)),oe||(st.onFocus=L(et,st.onFocus),st.onBlur=L($e,st.onBlur),Fe||(lt.onFocus=et,lt.onBlur=$e));const pt=n.useMemo((()=>{var e;let t=[{name:"arrow",enabled:Boolean(Me),options:{element:Me,padding:4}}];return null!=(e=ge.popperOptions)&&e.modifiers&&(t=t.concat(ge.popperOptions.modifiers)),Object(a.a)({},ge.popperOptions,{modifiers:t})}),[Me,ge]),dt=Object(a.a)({},K,{isRtl:Re,arrow:Q,disableInteractive:Fe,placement:je,PopperComponentProp:Oe,touch:Ne.current}),ut=(e=>{const{classes:t,disableInteractive:o,arrow:r,touch:a,placement:n}=e,i={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",a&&"touch","tooltipPlacement".concat(Object(j.a)(n.split("-")[0]))],arrow:["arrow"]};return Object(s.a)(i,C,t)})(dt),bt=null!=(o=null!=(l=xe.popper)?l:$.Popper)?o:M,mt=null!=(b=null!=(T=null!=(S=xe.transition)?S:$.Transition)?T:we)?b:O.a,ht=null!=(R=null!=(I=xe.tooltip)?I:$.Tooltip)?R:P,jt=null!=(B=null!=(V=xe.arrow)?V:$.Arrow)?B:N,Ot=Object(d.a)(bt,Object(a.a)({},ge,null!=(W=ve.popper)?W:ee.popper,{className:Object(i.a)(ut.popper,null==ge?void 0:ge.className,null==(D=null!=(U=ve.popper)?U:ee.popper)?void 0:D.className)}),dt),gt=Object(d.a)(mt,Object(a.a)({},ye,null!=(_=ve.transition)?_:ee.transition),dt),vt=Object(d.a)(ht,Object(a.a)({},null!=(H=ve.tooltip)?H:ee.tooltip,{className:Object(i.a)(ut.tooltip,null==(q=null!=(J=ve.tooltip)?J:ee.tooltip)?void 0:q.className)}),dt),xt=Object(d.a)(jt,Object(a.a)({},null!=(X=ve.arrow)?X:ee.arrow,{className:Object(i.a)(ut.arrow,null==(Y=null!=(G=ve.arrow)?G:ee.arrow)?void 0:Y.className)}),dt);return Object(k.jsxs)(n.Fragment,{children:[n.cloneElement(Se,st),Object(k.jsx)(bt,Object(a.a)({as:null!=Oe?Oe:g.a,placement:je,anchorEl:le?{getBoundingClientRect:()=>({top:E.y,left:E.x,right:E.x,bottom:E.y,width:0,height:0})}:ke,popperRef:nt,open:!!ke&&We,id:De,transition:!0},lt,Ot,{popperOptions:pt,children:e=>{let{TransitionProps:t}=e;return Object(k.jsx)(mt,Object(a.a)({timeout:Ce.transitions.duration.shorter},t,gt,{children:Object(k.jsxs)(ht,Object(a.a)({},vt,{children:[fe,Q?Object(k.jsx)(jt,Object(a.a)({},xt,{ref:Pe})):null]}))}))}}))]})}));t.a=I}}]);