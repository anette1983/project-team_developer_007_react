"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[434],{6434:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var i,r,s=n(2791),c=n(7689),a=n(9434),l=n(6112),d=n(4217),o=n(6071),_=n(9439),p=["title","titleId"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function h(e,t){var n=e.title,c=e.titleId,a=f(e,p);return s.createElement("svg",u({width:14,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},a),n?s.createElement("title",{id:c},n):null,i||(i=s.createElement("g",{clipPath:"url(#a)",stroke:"#23262A",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"},s.createElement("path",{d:"M7 12.833A5.833 5.833 0 1 0 7 1.167a5.833 5.833 0 0 0 0 11.666Z"}),s.createElement("path",{d:"M7 3.5V7l2.333 1.167"}))),r||(r=s.createElement("defs",null,s.createElement("clipPath",{id:"a"},s.createElement("path",{fill:"#fff",d:"M0 0h14v14H0z"})))))}var g=s.forwardRef(h),m=(n.p,n(1858)),j=n(8172),x="RecipePageTitle_hero__-KbYe",v="RecipePageTitle_title__iBWjZ",R="RecipePageTitle_subtitle__1zt-J",b="RecipePageTitle_button__+Oc9t",y="RecipePageTitle_icon__yJhPv",N="RecipePageTitle_time_prepeare__PK0LH",I=n(184),w=function(){var e=x,t=v,n=R,i=b,r=N,c=y,d=(0,a.v9)(l.XQ),o=(0,a.v9)(m.Zh),p=(0,s.useState)(!1),u=(0,_.Z)(p,2),f=u[0],h=u[1],w=(0,a.I0)();(0,s.useEffect)((function(){w((0,j.eC)())}),[w,d,f]),(0,s.useEffect)((function(){o.find((function(e){return e._id===d._id}))?h(!0):h(!1)}),[]);return(0,I.jsxs)("section",{className:e,children:[(0,I.jsx)("h1",{className:t,children:d.title}),(0,I.jsxs)("p",{className:n,children:[d.description," "]}),(0,I.jsx)("button",{type:"button",onClick:function(){f?(w((0,j.$H)(d._id)),h(!1)):(w((0,j.qG)(d._id)),h(!0))},className:i,children:f?"Remove from favorite":"Add to favorite recipes"}),(0,I.jsxs)("p",{className:r,children:[(0,I.jsx)(g,{className:c}),(0,I.jsxs)("span",{children:[d.time," min"]})]})]})};function E(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=E(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}var O=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=E(e))&&(i&&(i+=" "),i+=t);return i},P=n(3175),k="RecipeInngredient_container__jwx9S",L="RecipeInngredient_wrapper_img__rRmYU",T="RecipeInngredient_wrapper_ingridient_title__EKQRX",S="RecipeInngredient_ingridient_title__HFycI",Z="RecipeInngredient_wrapper_ingridient_quantity__EfeCu",A="RecipeInngredient_input_checkbox__5zEQi",C="RecipeInngredient_text_ingridient_quantity__pEJti";function Q(e){var t=e.ingredient,n=k,i=L,r=T,c=S,l=Z,d=C,o=A,p=(0,s.useState)(!1),u=(0,_.Z)(p,2),f=u[0],h=u[1],g=(0,a.I0)();return(0,I.jsxs)("div",{className:n,children:[(0,I.jsx)("div",{className:i,children:(0,I.jsx)("img",{src:t._id.img,alt:t._id.name})}),(0,I.jsx)("div",{className:r,children:(0,I.jsx)("p",{className:c,children:t._id.name})}),(0,I.jsx)("div",{className:l,children:(0,I.jsx)("p",{className:d,children:t.measure})}),(0,I.jsx)("input",{className:o,type:"checkbox",checked:f,onChange:function(){f?(g((0,P.$H)(t._id._id)),h(!1)):(g((0,P.TP)({ingredientId:t._id._id,measure:t.measure})),h(!0))}})]})}var q="RecipeIngredientsList_section__R6DRV",H="RecipeIngredientsList_wrapper_title_table__pnJlO",U="RecipeIngredientsList_title_table__pGzxs",z="RecipeIngredientsList_title_table_position__SqLRZ",F=function(){var e=H,t=q,n=U,i=z,r=(0,a.v9)(l.XQ),s=0!==Object.keys(r).length?r.ingredients:[];return(0,I.jsxs)("section",{className:t,children:[(0,I.jsxs)("div",{className:e,children:[(0,I.jsx)("p",{className:n,children:"Ingredients"}),(0,I.jsx)("p",{className:O([n,i]),children:"Number"}),(0,I.jsx)("p",{className:n,children:"Add to list"})]}),0!==s.length?s.map((function(e){return(0,I.jsx)("li",{style:{listStyleType:"none"},children:(0,I.jsx)(Q,{ingredient:e})},e._id._id)})):(0,I.jsx)(I.Fragment,{children:"No ingredients"})]})},J=function(){var e=(0,a.v9)(l.XQ),t=0!==Object.keys(e).length?e.instructions.split("."):[];return(0,I.jsxs)("section",{children:[(0,I.jsx)("h2",{children:"Recipe Preparation"}),0!==t.length?(0,I.jsx)("ol",{children:t.map((function(e,t){return(0,I.jsx)("li",{children:e},t)}))}):(0,I.jsx)("p",{children:"No instructions"}),(0,I.jsx)("img",{src:e.preview,alt:e.title})]})},X="RecipePage_container__seGcU",G=function(){var e=X,t=(0,a.I0)(),n=(0,a.v9)(d.Qb),i=(0,a.v9)(d.wU),r=(0,a.v9)(l.xU),_=(0,c.UO)().recipeId;return(0,s.useEffect)((function(){t((0,o.RE)(_))}),[t,i,_]),(0,I.jsx)("div",{className:e,children:n&&!i&&(0,I.jsx)(I.Fragment,{children:r?(0,I.jsx)("h3",{children:"Request in progress..."}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(w,{}),(0,I.jsx)(F,{}),(0,I.jsx)(J,{})]})})})}},1858:function(e,t,n){n.d(t,{Zh:function(){return i}});var i=function(e){return e.favoriteRecipes.favoriteRecipesList.recipes}}}]);
//# sourceMappingURL=434.741bb688.chunk.js.map