(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[66],{1147:function(e,a,t){"use strict";t.r(a);var n=t(7),c=t(302),r=t(89),s=t(661),i=t(662),j=t(663),o=t(664),l=t(665),d=t(565),h=t(300),m=t(1085),b=t(1),u=t(2);const p=Object(n.a)(s.a)((()=>({whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}))),x=[{name:"john doe",date:"18 january, 2019",amount:1e3,status:"close",company:"ABC Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"james cassegne",date:"8 january, 2019",amount:5e3,status:"close",company:"Collboy Tech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."}];var g=()=>{const[e,a]=Object(b.useState)(0),[t,n]=Object(b.useState)(5);return Object(u.jsxs)(c.a,{width:"100%",overflow:"auto",children:[Object(u.jsxs)(p,{children:[Object(u.jsx)(i.a,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(o.a,{align:"left",children:"Name"}),Object(u.jsx)(o.a,{align:"center",children:"Company"}),Object(u.jsx)(o.a,{align:"center",children:"Start Date"}),Object(u.jsx)(o.a,{align:"center",children:"Status"}),Object(u.jsx)(o.a,{align:"center",children:"Amount"}),Object(u.jsx)(o.a,{align:"right",children:"Action"})]})}),Object(u.jsx)(l.a,{children:x.slice(e*t,e*t+t).map(((e,a)=>Object(u.jsxs)(j.a,{children:[Object(u.jsx)(o.a,{align:"left",children:e.name}),Object(u.jsx)(o.a,{align:"center",children:e.company}),Object(u.jsx)(o.a,{align:"center",children:e.date}),Object(u.jsx)(o.a,{align:"center",children:e.status}),Object(u.jsxs)(o.a,{align:"center",children:["$",e.amount]}),Object(u.jsx)(o.a,{align:"right",children:Object(u.jsx)(d.a,{children:Object(u.jsx)(h.a,{color:"error",children:"close"})})})]},a)))})]}),Object(u.jsx)(m.a,{sx:{px:2},page:e,component:"div",rowsPerPage:t,count:x.length,onPageChange:(e,t)=>{a(t)},rowsPerPageOptions:[5,10,25],onRowsPerPageChange:e=>{n(+e.target.value),a(0)},nextIconButtonProps:{"aria-label":"Next Page"},backIconButtonProps:{"aria-label":"Previous Page"}})]})};const y=Object(n.a)(s.a)((e=>{let{theme:a}=e;return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}})),O=[{name:"john doe",date:"18 january, 2019",amount:1e3,status:"close",company:"ABC Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"james cassegne",date:"8 january, 2019",amount:5e3,status:"close",company:"Collboy Tech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."}];var T=()=>Object(u.jsx)(c.a,{width:"100%",overflow:"auto",children:Object(u.jsxs)(y,{children:[Object(u.jsx)(i.a,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(o.a,{align:"left",children:"Name"}),Object(u.jsx)(o.a,{align:"center",children:"Company"}),Object(u.jsx)(o.a,{align:"center",children:"Start Date"}),Object(u.jsx)(o.a,{align:"center",children:"Status"}),Object(u.jsx)(o.a,{align:"center",children:"Amount"}),Object(u.jsx)(o.a,{align:"right",children:"Action"})]})}),Object(u.jsx)(l.a,{children:O.map(((e,a)=>Object(u.jsxs)(j.a,{children:[Object(u.jsx)(o.a,{align:"left",children:e.name}),Object(u.jsx)(o.a,{align:"center",children:e.company}),Object(u.jsx)(o.a,{align:"center",children:e.date}),Object(u.jsx)(o.a,{align:"center",children:e.status}),Object(u.jsxs)(o.a,{align:"center",children:["$",e.amount]}),Object(u.jsx)(o.a,{align:"right",children:Object(u.jsx)(d.a,{children:Object(u.jsx)(h.a,{color:"error",children:"close"})})})]},a)))})]})});const w=Object(n.a)("div")((e=>{let{theme:a}=e;return{margin:"30px",[a.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[a.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));a.default=()=>Object(u.jsxs)(w,{children:[Object(u.jsx)(c.a,{className:"breadcrumb",children:Object(u.jsx)(r.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Table"}]})}),Object(u.jsx)(r.j,{title:"Simple Table",children:Object(u.jsx)(T,{})}),Object(u.jsx)(r.j,{title:"Pagination Table",children:Object(u.jsx)(g,{})})]})}}]);