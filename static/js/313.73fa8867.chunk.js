"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[313],{4635:function(e,t,s){s.d(t,{N:function(){return h}});var n="mainPage_title__NkTqx",i="mainPage_firstGreen__OVjdr",a="mainPage_black__JMHNO",r="mainPage_lastGreen__7VLZZ",c=s(184),l=function(e){var t=e.text;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{className:n,children:t}),(0,c.jsx)("svg",{className:i,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})}),(0,c.jsx)("svg",{className:a,width:"7",height:"7",viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2",width:"6",height:"6",rx:"3",transform:"rotate(-25 0 2)",fill:"#22252A"})}),(0,c.jsx)("svg",{className:r,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})})]})},o="SectionTitle_container__zSlOi",h=function(e){var t=e.text;return(0,c.jsx)("div",{className:o,children:(0,c.jsx)(l,{text:t})})}},9313:function(e,t,s){s.r(t),s.d(t,{default:function(){return W}});var n=s(9439),i=s(2791),a=s(7689),r="searchInput_input__ZO0tM",c="searchInput_button__YJby1",l="searchInput_inputWrap__olMQQ",o="searchInput_form__g1y0F",h="searchInput_label__WAgVM",u="searchInput_select__ZW6Js",_="searchInput_selectWrap__v2Hw8",d="searchInput_optionWrap__eQFvx",m="searchInput_text__61vVW",p=s(184),x=function(e){var t=e.title,s=e.setSearchBy,x=e.page,f=e.searchQuery,g=(0,i.useState)("Title"),v=(0,n.Z)(g,2),j=v[0],w=v[1],N=(0,i.useState)(null!==f&&void 0!==f?f:""),b=(0,n.Z)(N,2),y=b[0],S=b[1],Z=(0,i.useState)(!1),k=(0,n.Z)(Z,2),I=k[0],B=k[1],C=function(e){w(e.currentTarget.id)},L=(0,a.TH)();return(0,i.useEffect)((function(){var e;null!==(e=L.state)&&void 0!==e&&e.from&&(s("ingredients"),w("Ingredients"))}),[]),(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({selectBy:j,search:y}),"Title"===j&&s("search"),"Ingredients"===j&&s("ingredients"),x(1)},className:o,children:[(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)("input",{type:"search",className:r,name:"search",value:y,onChange:function(e){S(e.target.value)}}),(0,p.jsx)("button",{type:"submit",className:c,children:"Search"})]}),(0,p.jsxs)("div",{className:_,children:[(0,p.jsx)("p",{className:h,children:"Search by:"}),(0,p.jsxs)("div",{className:u,onClick:function(){B(!I)},children:[j,(0,p.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,p.jsx)("g",{id:"chevron-up",children:(0,p.jsx)("path",{id:"Vector",d:"M3.5 5.25L7 8.75L10.5 5.25",stroke:"#8BAA36",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),I&&(0,p.jsxs)("div",{className:d,onClick:function(){B(!1)},children:[(0,p.jsx)("p",{onClick:C,className:m,id:"Title",children:"Title"}),(0,p.jsx)("p",{onClick:C,className:m,id:"Ingredients",children:"Ingredients"})]})]})]})},f=s(9033),g="searchContainer_tabPhoto__EAn5a",v="searchContainer_text__tNIrt",j="searchContainer_center__HHt3g",w="searchContainer_container__U-YtM",N="searchContainer_mobPhoto__se0nS",b="searcLwist_list__EY14+",y=s(1087),S="SearchRecipeList_list__QdmKq",Z="SearchRecipeList_list_item__qZu6U",k="SearchRecipeList_list_title__4PMU9",I="SearchRecipeList_img__wUMo+";function B(e){var t=e.data;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{className:S,children:t.map((function(e){return(0,p.jsx)("li",{className:Z,children:(0,p.jsxs)(y.rU,{to:"/recipe/".concat(e._id),children:[(0,p.jsx)("img",{src:e.thumb,alt:"recipe",className:I}),(0,p.jsx)("h3",{className:k,children:e.title})]})},e._id)}))})})}var C=function(e){var t=e.recipes;return(0,p.jsx)("ul",{className:b,children:(0,p.jsx)(B,{data:t})})},L=function(e){return e.recipesBySearch.availableRecipes},T=function(e){return e.recipesBySearch.error},M=s(9434),A=s(3730),E=s(4217),Q=s(4635),W=function(){var e,t=(0,i.useState)(1),r=(0,n.Z)(t,2),c=r[0],l=r[1],o=(0,i.useState)("search"),h=(0,n.Z)(o,2),u=h[0],_=h[1],d=(0,a.s0)(),m=6,b=(0,M.I0)(),S=(0,y.lr)(),Z=(0,n.Z)(S,2),k=Z[0],I=Z[1],B=(0,M.v9)(L),W=B.total,q=B.recipes,P=(0,M.v9)(E.Qb),F=(0,M.v9)(T),H=null!==(e=k.get("query"))&&void 0!==e?e:"",U=(0,i.useState)(1),R=(0,n.Z)(U,2),V=R[0],z=R[1],O=window.innerWidth;(0,i.useEffect)((function(){k.size&&!F||b((0,A.F)())}),[b,F,k.size]),(0,i.useEffect)((function(){H&&z(1)}),[H]),(0,i.useEffect)((function(){H&&(O>=1440&&(m=12),W&&z(Math.ceil(+W/m)),P&&b((0,A.$)({searchBy:u,page:c,limit:m,query:H})),I({query:H,page:c,limit:m}))}),[b,c,H,m,u,P,V,W,I,O]);var J=(0,a.TH)().pathname;return(0,i.useEffect)((function(){window.scrollTo(0,0)}),[J]),(0,i.useEffect)((function(){F&&d("/error",{replace:!0})}),[F,d]),(0,p.jsxs)("div",{className:f.Z.section,children:[(0,p.jsx)(Q.N,{text:"Search"}),(0,p.jsx)("div",{className:"".concat(f.Z.container," ").concat(w),children:(0,p.jsx)(x,{title:function(e){I({query:e.search,page:c,limit:m})},setSearchBy:_,page:l,searchQuery:H})}),!q&&(0,p.jsxs)("div",{className:"".concat(f.Z.container," ").concat(w," ").concat(j),children:[(0,p.jsx)("img",{className:N,src:s(1649),alt:"vegetables"}),(0,p.jsx)("img",{className:g,src:s(5995),alt:"vegetables"}),(0,p.jsx)("p",{className:v,children:"Try looking for something else.."})]}),q&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"".concat(f.Z.container," ").concat(w),children:(0,p.jsx)(C,{recipes:q})})})]})}},9033:function(e,t){t.Z={section:"pages_section__mNUz7",container:"pages_container__-MxLQ"}},1649:function(e,t,s){e.exports=s.p+"static/media/vegetables-5abfb9c60122f5 1.63c33e63d51609222126.png"},5995:function(e,t,s){e.exports=s.p+"static/media/vegetables-5abfb9c60122f5 1_tab.bc91271998b75900e48e.png"}}]);
//# sourceMappingURL=313.73fa8867.chunk.js.map