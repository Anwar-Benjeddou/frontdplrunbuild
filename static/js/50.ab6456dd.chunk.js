(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[50],{1123:function(e,t,a){"use strict";a.r(t);var r=a(9),o=a(89),n=a(578),i=a.n(n),l=a(1),c=a(7),s=a(302),d=a(684),p=a(716),m=a.n(p),b=a(579),j=a.n(b),u=a(580),v=a.n(u),O=a(158),h=a(496),g=a(568),x=a(738),f=a(736),y=a(737),C=a(693),S=a(586),k=a.n(S),A=a(2);const w=Object(c.a)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[t.breakpoints.down("sm")]:{marginBottom:"16px"}},"& .sr-only":{display:"none"},"& .text-filter":{width:"100%",boxSizing:"border-box"}}}));t.default=function(){const[e,t]=Object(l.useState)([]),[a,n]=Object(l.useState)({}),[c,p]=Object(l.useState)(!1),[b,S]=Object(l.useState)(!1),M=()=>{p(!1)};Object(l.useEffect)((()=>{F()}),[]);const F=async()=>{var e=await O.m.statementTimeValidate();e&&n(e.content),e&&console.log(e);var a=await O.h.marksIndex();if(a){var o=a.content.map((e=>Object(r.a)(Object(r.a)({},e),{},{quantity:0,sale:0,order:0,expiry_date:"",batch_number:0})));t(o)}},_=m()({mode:"click",afterSaveCell:(a,o,n,i)=>{const l=e.map((e=>e.id===n.id?Object(r.a)(Object(r.a)({},e),{},{[i.dataField]:o}):e));t(l),console.log(e),(e=>{const t=e.some((e=>{const t=parseFloat(e.quantity),a=parseFloat(e.order);return 0!==t||0!==a}));S(t)})(l)}}),z=[{dataField:"dci_form_dosage.dci.name",text:"DCI",editable:!1,filter:Object(u.textFilter)({placeholder:"DCI"})},{dataField:"dci_form_dosage.form",text:"Forme et dosage",editable:!1,filter:Object(u.textFilter)({placeholder:"Forme et dosage"}),formatter:(e,t)=>{var a,r,o;return Object(A.jsxs)(A.Fragment,{children:[null===(a=t.dci_form_dosage)||void 0===a?void 0:a.form," ",null===(r=t.dci_form_dosage)||void 0===r?void 0:r.dosage,"  ",null===(o=t.dci_form_dosage)||void 0===o?void 0:o.unity]})}},{dataField:"quantity",text:"Stock disponible",validator:(e,t,a)=>!isNaN(e)||{valid:!1,message:"Le stock doit \xeatre num\xe9rique"}},{dataField:"expiry_date",text:"Date d'expiration du stock disponible",editor:{type:"date"},formatter:(e,t)=>!e||isNaN(new Date(e).getTime())?"":k()(new Date(e)).format("DD-MM-YYYY")},{dataField:"batch_number",text:"N\xb0 de lot du stock disponible"},{dataField:"order",text:"Commande en cours",validator:(e,t,a)=>!isNaN(e)||{valid:!1,message:"La commande doit \xeatre num\xe9rique"}}];return Object(A.jsxs)(w,{children:[Object(A.jsx)(s.a,{className:"breadcrumb",children:Object(A.jsx)(o.a,{routeSegments:[{name:"D\xe9clarations",path:"/admin/settings/marks"}]})}),Object(A.jsxs)(o.j,{title:"Ajout de d\xe9clarations multiples",children:[0===a&&Object(A.jsx)(d.a,{sx:{m:1},severity:"error",variant:"filled",children:"D\xe9claration non permise pour aujourd'hui!"}),1===a&&Object(A.jsx)(h.a,{variant:"outlined",color:"primary",sx:{m:1},onClick:()=>{p(!0)},disabled:!b,children:"Cr\xe9er d\xe9claration"}),Object(A.jsxs)(g.a,{open:c,onClose:M,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(A.jsx)(C.a,{id:"alert-dialog-title",children:"Cr\xe9ation de d\xe9claration"}),Object(A.jsx)(f.a,{children:Object(A.jsx)(y.a,{id:"alert-dialog-description",children:"Voulez-vous vraiment cr\xe9er cette d\xe9claration?"})}),Object(A.jsxs)(x.a,{children:[Object(A.jsx)(h.a,{onClick:M,autoFocus:!0,children:"Annuler"}),Object(A.jsx)(h.a,{onClick:()=>(async()=>{var a=e.map((e=>({mark_id:e.id,dci_id:e.dci_form_dosage.dci.id,quantity:parseFloat(e.quantity),sale:parseFloat(e.sale),order:parseFloat(e.order),expiry_date:e.expiry_date,batch_number:e.batch_number})));await O.k.statementStatusAdd(a)&&(M(),t([]),window.location.href="/dpl/supplier/list/statement")})(),children:"Confirmer"})]})]}),1===a&&Object(A.jsx)(i.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",bootstrap4:!0,keyField:"id",data:e,cellEdit:_,columns:z,pagination:j()({sizePerPage:20,sizePerPageList:[5,10,15,20,25]}),filter:v()(),headerClasses:"table thead-light mb-0"})]})]})}},582:function(e,t,a){"use strict";a(1);var r=a(88),o=a(2);t.a=Object(r.a)(Object(o.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},684:function(e,t,a){"use strict";var r=a(5),o=a(4),n=a(1),i=a(11),l=a(125),c=a(28),s=a(7),d=a(108),p=a(206),m=a(12),b=a(562),j=a(87),u=a(78);function v(e){return Object(u.a)("MuiAlert",e)}var O=Object(j.a)("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),h=a(565),g=a(88),x=a(2),f=Object(g.a)(Object(x.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),y=Object(g.a)(Object(x.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),C=Object(g.a)(Object(x.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),S=Object(g.a)(Object(x.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),k=a(582);const A=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],w=Object(s.a)(b.a,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t["".concat(a.variant).concat(Object(m.a)(a.color||a.severity))]]}})((e=>{let{theme:t}=e;const a="light"===t.palette.mode?c.darken:c.lighten,r="light"===t.palette.mode?c.lighten:c.darken;return Object(o.a)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter((e=>{let[,t]=e;return t.main&&t.light})).map((e=>{let[o]=e;return{props:{colorSeverity:o,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert["".concat(o,"Color")]:a(t.palette[o].light,.6),backgroundColor:t.vars?t.vars.palette.Alert["".concat(o,"StandardBg")]:r(t.palette[o].light,.9),["& .".concat(O.icon)]:t.vars?{color:t.vars.palette.Alert["".concat(o,"IconColor")]}:{color:t.palette[o].main}}}})),...Object.entries(t.palette).filter((e=>{let[,t]=e;return t.main&&t.light})).map((e=>{let[r]=e;return{props:{colorSeverity:r,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert["".concat(r,"Color")]:a(t.palette[r].light,.6),border:"1px solid ".concat((t.vars||t).palette[r].light),["& .".concat(O.icon)]:t.vars?{color:t.vars.palette.Alert["".concat(r,"IconColor")]}:{color:t.palette[r].main}}}})),...Object.entries(t.palette).filter((e=>{let[,t]=e;return t.main&&t.dark})).map((e=>{let[a]=e;return{props:{colorSeverity:a,variant:"filled"},style:Object(o.a)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert["".concat(a,"FilledColor")],backgroundColor:t.vars.palette.Alert["".concat(a,"FilledBg")]}:{backgroundColor:"dark"===t.palette.mode?t.palette[a].dark:t.palette[a].main,color:t.palette.getContrastText(t.palette[a].main)})}}))]})})),M=Object(s.a)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),F=Object(s.a)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),_=Object(s.a)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),z={success:Object(x.jsx)(f,{fontSize:"inherit"}),warning:Object(x.jsx)(y,{fontSize:"inherit"}),error:Object(x.jsx)(C,{fontSize:"inherit"}),info:Object(x.jsx)(S,{fontSize:"inherit"})},L=n.forwardRef((function(e,t){const a=Object(d.a)({props:e,name:"MuiAlert"}),{action:n,children:c,className:s,closeText:b="Close",color:j,components:u={},componentsProps:O={},icon:g,iconMapping:f=z,onClose:y,role:C="alert",severity:S="success",slotProps:L={},slots:I={},variant:N="standard"}=a,P=Object(r.a)(a,A),D=Object(o.a)({},a,{color:j,severity:S,variant:N,colorSeverity:j||S}),R=(e=>{const{variant:t,color:a,severity:r,classes:o}=e,n={root:["root","color".concat(Object(m.a)(a||r)),"".concat(t).concat(Object(m.a)(a||r)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return Object(l.a)(n,v,o)})(D),q={slots:Object(o.a)({closeButton:u.CloseButton,closeIcon:u.CloseIcon},I),slotProps:Object(o.a)({},O,L)},[B,E]=Object(p.a)("closeButton",{elementType:h.a,externalForwardedProps:q,ownerState:D}),[T,W]=Object(p.a)("closeIcon",{elementType:k.a,externalForwardedProps:q,ownerState:D});return Object(x.jsxs)(w,Object(o.a)({role:C,elevation:0,ownerState:D,className:Object(i.a)(R.root,s),ref:t},P,{children:[!1!==g?Object(x.jsx)(M,{ownerState:D,className:R.icon,children:g||f[S]||z[S]}):null,Object(x.jsx)(F,{ownerState:D,className:R.message,children:c}),null!=n?Object(x.jsx)(_,{ownerState:D,className:R.action,children:n}):null,null==n&&y?Object(x.jsx)(_,{ownerState:D,className:R.action,children:Object(x.jsx)(B,Object(o.a)({size:"small","aria-label":b,title:b,color:"inherit",onClick:y},E,{children:Object(x.jsx)(T,Object(o.a)({fontSize:"small"},W))}))}):null]}))}));t.a=L}}]);