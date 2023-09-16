"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[577],{2577:function(e,r,t){t.r(r),t.d(r,{default:function(){return A}});var s=t(9434),i=t(1087),a="ChooseYourBreakfast_container__C3LX-",n="ChooseYourBreakfast_text__OKIc7",c="ChooseYourBreakfast_text_active__W10JZ",o="ChooseYourBreakfast_btn__C4J3a",h="ChooseYourBreakfast_img__cFvx-",l="ChooseYourBreakfast_crossbolt__IOqrz",_=t(2791);var d=t.p+"static/media/Icon.0a8a3971e234ad8c5e19a6955068f22a.svg";var x=t.p+"static/media/Sprite.95ee85462b56e68d327e4e7a151857db.svg",u=t(184),j=function(){return(0,u.jsxs)("div",{className:a,children:[(0,u.jsxs)("p",{className:n,children:[(0,u.jsx)("span",{className:c,children:" Delicious and healthy \xa0"}),"way to enjoy a variety of fresh ingredients in one satisfying meal"]}),(0,u.jsx)(i.rU,{to:"/categories/Breakfast",children:(0,u.jsxs)("button",{type:"button",className:o,children:["See recipes",(0,u.jsx)("svg",{className:h,width:"12",height:"9",children:(0,u.jsx)("use",{href:d+"#arrow-right"})})]})}),(0,u.jsx)("svg",{className:l,children:(0,u.jsx)("use",{href:x+"#crossbolt"})})]})},m=t(9439),g="Search_form__H6ZBx",f="Search_input__XY4Y+",v="Search_btn__caGzV",p=t(5264),y=function(){var e=(0,_.useState)(""),r=(0,m.Z)(e,2),t=r[0],s=r[1];return(0,u.jsxs)("form",{className:g,children:[(0,u.jsx)("input",{className:f,type:"text",autoComplete:"off",autoFocus:!0,value:t,onChange:function(e){return s(e.currentTarget.value.toLowerCase())},placeholder:"Enter the text"}),(0,u.jsx)(i.rU,{to:"/search/?query=".concat(t),onClick:function(e){if(!t)return e.preventDefault(),p.Notify.failure("Enter ingredient!")},children:(0,u.jsx)("button",{className:v,type:"submit",children:"Search"})})]})},w="Main_container__uzGJG",N=function(){return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:w,children:[(0,u.jsx)(j,{}),(0,u.jsx)(y,{})]})})},C="MainPage_wrapper__JFbZh",b="MainPage_wrapper_leaf__CTIKY",k="MainPage_container__Lm-lH",P="MainPage_title_start__shOLn",M="MainPage_title__goIOM",Y="MainPage_text__eh1lt",S=t(4217),B=t(6071),U="RecipeList_list__vNNkD",F="RecipeList_list_item__39mnX",L="RecipeList_list_title__0UpHV",O="RecipeList_img__xYgff";function Z(e){var r=e.data;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:U,children:r.map((function(e){return(0,u.jsx)("li",{className:F,children:(0,u.jsxs)(i.rU,{to:"/recipe/".concat(e._id),children:[(0,u.jsx)("img",{src:e.thumb,alt:"recipe",className:O}),(0,u.jsx)("h3",{className:L,children:e.title})]})},e._id)}))})})}var q="PreviewCategories_container__w3by+",I="PreviewCategories_list__ROJ5M",J="PreviewCategories_list_item__KcSo6",R="PreviewCategories_title__U0oOr",H="PreviewCategories_btn__7oh9X",X="PreviewCategories_btn_other__7puN+",z=t(6112),D=t(1413),E=t(8175),G=t(4805),K=function(e){var r=(0,G.useMediaQuery)({query:"(min-width: 1440px)"}),t=(0,G.useMediaQuery)({query:"(min-width: 768px) and (max-width: 1439px)"}),s=(0,G.useMediaQuery)({query:"(max-width: 767px)"}),i=t?768:s?375:1440;return(0,u.jsxs)(E.ZP,(0,D.Z)((0,D.Z)({width:i,height:900,backgroundColor:"#f3f3f3",foregroundColor:"#8BAA36"},e),{},{children:[r&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("rect",{x:"0",y:"0",rx:"8",ry:"8",width:"350",height:"45"}),(0,u.jsx)("rect",{x:"0",y:"94",rx:"8",ry:"8",width:"300",height:"323"}),(0,u.jsx)("rect",{x:"313",y:"94",rx:"8",ry:"8",width:"300",height:"323"}),(0,u.jsx)("rect",{x:"626",y:"94",rx:"8",ry:"8",width:"300",height:"323"}),(0,u.jsx)("rect",{x:"938",y:"94",rx:"8",ry:"8",width:"300",height:"323"})]}),t&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("rect",{x:"0",y:"0",rx:"8",ry:"8",width:"250",height:"44"}),(0,u.jsx)("rect",{x:"0",y:"84",rx:"8",ry:"8",width:"336",height:"323"}),(0,u.jsx)("rect",{x:"368",y:"84",rx:"8",ry:"8",width:"336",height:"323"})]}),s&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("rect",{x:"0",y:"0",rx:"8",ry:"8",width:"250",height:"30"}),(0,u.jsx)("rect",{x:"0",y:"60",rx:"8",ry:"8",width:"343",height:"323"})]})]}))},Q=function(){var e=(0,s.v9)(z.O2),r=(0,s.v9)(z.xU);return(0,u.jsxs)("div",{className:q,children:[r?(0,u.jsx)(K,{}):(0,u.jsx)("ul",{className:I,children:null===e||void 0===e?void 0:e.map((function(e){var r,t,s;return(0,u.jsxs)("li",{className:J,children:[(0,u.jsx)("h2",{className:R,children:null===(t=e[0])||void 0===t?void 0:t.category}),(0,u.jsx)(Z,{data:e}),(0,u.jsx)(i.rU,{to:"/categories/".concat(null===(s=e[0])||void 0===s?void 0:s.category),children:(0,u.jsx)("button",{className:H,type:"button",children:"See all"})})]},null===(r=e[0])||void 0===r?void 0:r._id)}))}),(0,u.jsx)(i.rU,{className:X,to:"/categories",children:"Other categories"})]})},A=function(){var e=(0,s.I0)(),r=(0,s.v9)(S.wU);return(0,_.useEffect)((function(){e((0,B.Hq)())}),[e,r]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:C,children:(0,u.jsxs)("div",{className:b,children:[(0,u.jsxs)("div",{className:k,children:[(0,u.jsxs)("h1",{className:M,children:[(0,u.jsx)("span",{className:P,children:"So"}),"Yummy"]}),(0,u.jsx)("p",{className:Y,children:'"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.'}),(0,u.jsx)(N,{})]}),(0,u.jsx)(Q,{})]})})})}}}]);
//# sourceMappingURL=577.77984e01.chunk.js.map