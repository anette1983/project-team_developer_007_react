"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[671],{1556:function(e,n,i){i.d(n,{e:function(){return d}});var t="mainPage_title__NkTqx",r="mainPage_firstGreen__OVjdr",s="mainPage_black__JMHNO",a="mainPage_lastGreen__7VLZZ",c=i(184),d=function(e){var n=e.text;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{className:t,children:n}),(0,c.jsx)("svg",{className:r,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})}),(0,c.jsx)("svg",{className:s,width:"7",height:"7",viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2",width:"6",height:"6",rx:"3",transform:"rotate(-25 0 2)",fill:"#22252A"})}),(0,c.jsx)("svg",{className:a,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})})]})}},8671:function(e,n,i){i.r(n),i.d(n,{default:function(){return me}});var t=i(4942),r=i(1413),s=i(3433),a=i(9439),c=i(2791),d=i(7689),l=i(9434),o=i(8816),u=i(2166),p=i(5984),g=i(5264),m=i(6727),_=m.Ry().shape({img:m.Z_().required("Image is required"),title:m.Z_().typeError("Should be a string").required("Title is required"),description:m.Z_().typeError("Should be a string").required("Description is required"),cookingTime:m.Z_(),category:m.Z_(),ingredients:m.IX().of(m.Ry({name:m.Z_().required("Ingredient name is required"),ingredientsQuantity:m.Z_().required("Ingredient quantity is required"),ingredientsQuantityMeasure:m.Z_(),id:m.Z_()})).required("Ingredients is required"),preparation:m.Z_().required("Preparation text is required")}),A="RecipeDescriptionFields_descriptionFieldWrapper__OllyZ",f="RecipeDescriptionFields_imgWrapper__PThwi",x="RecipeDescriptionFields_imgInput__hs24V",h="RecipeDescriptionFields_mockImg__LkiOa",v="RecipeDescriptionFields_recipeImg__NeH-m",j="RecipeDescriptionFields_inputBox__S5ETY",I="RecipeDescriptionFields_inputRaw__4EWRb",R="RecipeDescriptionFields_selectBox__Zi2-P",N="RecipeDescriptionFields_selectLabel__Hx9Qt",F="RecipeDescriptionFields_selectVariantsBox__M1-9-",y="RecipeDescriptionFields_arrow__s+6oQ",C="RecipeDescriptionFields_selectVariants__xv5ae",w="RecipeDescriptionFields_selectList__nuUTP",Q="RecipeDescriptionFields_selectItem__rRTPj",B="RecipeDescriptionFields_errorMsg__JCF6Y",Z="RecipeDescriptionFields_inputsWrapper__Jv0zK",b=i(7322),k=i(2530),P=i(4666),T=i(184),E=function(){for(var e=[],n=5;n<=120;n+=5)e.push(n);return e}(),S=function(e){var n=e.title,i=e.description,t=e.time,r=e.category,s=e.onInputImgUpload,d=e.onTitleChange,o=e.onDescriptionChange,u=e.onTimeChange,p=e.onCategoryChange,g=e.errors,m=(0,l.I0)(),_=(0,l.v9)(k.us);(0,c.useEffect)((function(){m((0,P.p)())}),[m]);var S=(0,c.useState)(""),U=(0,a.Z)(S,2),D=U[0],L=U[1],M=(0,c.useState)(!1),q=(0,a.Z)(M,2),G=q[0],H=q[1],O=(0,c.useState)(!1),J=(0,a.Z)(O,2),V=J[0],z=J[1];return(0,T.jsxs)("div",{className:A,children:[(0,T.jsxs)("div",{className:f,onChange:function(e){return function(e){var n=e.target.files[0],i=new FileReader;i.addEventListener("load",(function(e){var i=e.target.result,t=new File([i],{type:n.type}),r=URL.createObjectURL(t);L(r)})),i.readAsArrayBuffer(n),s(e)}(e)},children:[(0,T.jsx)("label",{htmlFor:"dishImg",children:(0,T.jsx)("img",{className:h,src:"".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAABaUExURUdwTP////r6+vj4+Pf39/v7+/r6+vr6+vf39/r6+vn5+fr6+vn5+fn5+fT09Pr6+vf39/r6+vr6+vr6+vn5+fz8/Pr6+vb29vn5+fn5+fj4+Pn5+fr6+vr6+pqn3MYAAAAddFJOUwAQ73AgQN/AQL9Qn6DfMGBgz1+Qf1AwcICvsLDQwKQItQAAAgtJREFUeNrtmtt24yAMRTGoOIAvcZyktzn//5vzkLW67NoxclugM9F5dYR2AMtISCmRSCQSiUTrOpjgbrJTPcctzczA3gZ5Nd0u973DukLcdrxj2h7Z7rsB0GP/dBNNxTGfGdBtkEtjgZZ4/k96Dy1/Vi30ieUfGKsU26oaAQYBabyk2tkv0PFVsBjTvVsjXHSl0FbpACqLY3QCjinDSx+bgivatAFOYzsiGU6o+Y4amG89/4E12P6HDk9pATzqsgAHARAAARAAARAAARAAAYgA+Hf2UOdp7n1mpybNT516zTz7f1aZdfpcfzjl9d8tKyCHHH7JacTkKKH/uHuAUwP4qhxYcskAeP6hSwNAALIB1BdS6nppCgEMH8UWsiUA3KSaVrn8APNqXjVkB6CNj0MOgLAVJXMA+GX1KS/AotxImQF2PvwPARbf/OujbcLFoaPJHYi6+y9BHoBhHort432MpveQ3VDoQBJ8pxR5J2fCxwHQpQGYqVn9LyenJmzeHFMdd19v+3/1UiUTAAEQAAEQAAEQAAH47QC+LEDyZrZYu17xdj6CrpICWFAs+Unc0jlEf1G4qVW5lLugYbSskuZfhe/VmZU3eiCkae0O4EUZn6S5veotNDPKkQXaYA4r4nhaMfMmaKDm5+39nzvJ9xtno90pW+ybVTJNvSLGHJo1u8aQEolEIpFItK6/PiSfvUakTWYAAAAASUVORK5CYII="),alt:"addphoto"})}),(0,T.jsx)("input",{className:x,type:"file",accept:".jpg, .jpeg, .png",id:"dishImg",name:"img"}),D&&(0,T.jsx)("img",{className:v,src:D,alt:"recipeImage"}),g.imgs&&(0,T.jsx)("p",{className:B,children:g.imgs})]}),(0,T.jsxs)("div",{className:Z,children:[(0,T.jsxs)("div",{className:j,children:[(0,T.jsx)("input",{className:I,type:"text",id:"title",name:"title",placeholder:"Enter item title",onChange:function(e){return d(e.target.value)},value:n}),g.title&&(0,T.jsx)("p",{className:B,children:g.title})]}),(0,T.jsxs)("div",{className:j,children:[(0,T.jsx)("input",{className:I,type:"text",id:"about",name:"description",placeholder:"Enter about recipe",onChange:function(e){return o(e.target.value)},value:i}),g.description&&(0,T.jsx)("p",{className:B,children:g.description})]}),(0,T.jsxs)("div",{className:R,onClick:function(){z(!V)},children:[(0,T.jsx)("div",{className:N,children:"Category"}),(0,T.jsxs)("div",{className:F,children:[(0,T.jsx)("span",{className:C,children:r}),(0,T.jsx)(b.Ix0,{className:y,size:"18"})]}),V&&(0,T.jsx)("ul",{className:w,children:_.map((function(e,n){return(0,T.jsx)("li",{className:Q,onClick:function(){return n=e.name,p(n),void z(!1);var n},children:e.name},e._id)}))})]}),(0,T.jsxs)("div",{className:R,onClick:function(){H(!G)},children:[(0,T.jsx)("div",{className:N,children:"Cooking time"}),(0,T.jsxs)("div",{className:F,children:[(0,T.jsxs)("span",{className:C,children:[t," min"]}),(0,T.jsx)(b.Ix0,{className:y,size:"18"})]}),G&&(0,T.jsx)("ul",{className:w,children:E.map((function(e){return(0,T.jsx)("li",{className:Q,onClick:function(){return n="".concat(e),u(n),void H(!1);var n},children:e},e)}))})]})]})]})},U=function(e){return e.ingredients.ingredientsList},D=i(7260),L={ingredientsFieldWrapper:"RecipeIngredientsFields_ingredientsFieldWrapper__7nfJt",subtitle:"RecipeIngredientsFields_subtitle__1ZGFR",subtitleWrapper:"RecipeIngredientsFields_subtitleWrapper__SfGmt",ingredientsCounter:"RecipeIngredientsFields_ingredientsCounter__nN9uc",counterBtn:"RecipeIngredientsFields_counterBtn__IkHfo",counterBtnIcon:"RecipeIngredientsFields_counterBtnIcon__qPiY0",counterValue:"RecipeIngredientsFields_counterValue__OM8mo",ingredientItem:"RecipeIngredientsFields_ingredientItem__HjtdF",ingredientNameField:"RecipeIngredientsFields_ingredientNameField__srmHQ",ingredientInputBox:"RecipeIngredientsFields_ingredientInputBox__5j0ek",ingredientNameInput:"RecipeIngredientsFields_ingredientNameInput__t8j40",selectIngredients:"RecipeIngredientsFields_selectIngredients__cTPG+",selectIngredientItem:"RecipeIngredientsFields_selectIngredientItem__IYGbG",ingredientQuantityField:"RecipeIngredientsFields_ingredientQuantityField__vGfAg",ingredientQuantityInput:"RecipeIngredientsFields_ingredientQuantityInput__4ivy3",selectBox:"RecipeIngredientsFields_selectBox__wSTHA",arrow:"RecipeIngredientsFields_arrow__0afm7",arrowIngr:"RecipeIngredientsFields_arrowIngr__2RFdn",selectLabel:"RecipeIngredientsFields_selectLabel__paEGl",selectQuantityList:"RecipeIngredientsFields_selectQuantityList__s8IwP",selectQuantityItem:"RecipeIngredientsFields_selectQuantityItem__qidO3",deleteBtn:"RecipeIngredientsFields_deleteBtn__dOAYE",deleteBtnIcon:"RecipeIngredientsFields_deleteBtnIcon__Yxm5n",errorMsg:"RecipeIngredientsFields_errorMsg__k3PKf"},M=function(e){var n=e.ingredients,i=e.incrIngredientFields,t=e.decrIngredientFields,r=e.deleteIngredient,d=e.updateIngredient,o=e.updateErrors,u=e.errors,p=(0,l.I0)(),g=(0,l.v9)(U);(0,c.useEffect)((function(){p((0,D.D)())}),[p]);var m=(0,c.useState)(g),_=(0,a.Z)(m,2),A=_[0],f=_[1],x=["tbs","tsp","kg","g","ml","pcs","to taste"],h=(0,c.useState)(1),v=(0,a.Z)(h,2),j=v[0],I=v[1],R=(0,c.useState)(new Array(n.length).fill("")),N=(0,a.Z)(R,2),F=N[0],y=N[1],C=(0,c.useState)(new Array(n.length).fill("")),w=(0,a.Z)(C,2),Q=w[0],B=w[1];return(0,T.jsxs)("div",{className:L.ingredientsFieldWrapper,children:[(0,T.jsxs)("div",{className:L.subtitleWrapper,children:[(0,T.jsx)("h3",{className:L.subtitle,children:"Ingredients"}),(0,T.jsxs)("div",{className:L.ingredientsCounter,children:[(0,T.jsx)("button",{className:L.counterBtn,type:"button",onClick:function(){0!==j&&(t(),I((function(e){return e-1})))},children:(0,T.jsx)(b.eqC,{className:L.counterBtnIcon,size:"14"})}),(0,T.jsx)("p",{className:L.counterValue,children:j}),(0,T.jsx)("button",{className:L.counterBtn,type:"button",onClick:function(){i(),I((function(e){return e+1}))},children:(0,T.jsx)(b.x06,{className:L.counterBtnIcon,size:"14"})})]})]}),(0,T.jsx)("ul",{className:L.ingredientsList,children:n.map((function(e,n){return(0,T.jsxs)("li",{className:L.ingredientItem,children:[(0,T.jsxs)("div",{className:L.ingredientNameField,children:[(0,T.jsxs)("div",{children:[(0,T.jsxs)("div",{className:L.ingredientInputBox,children:[(0,T.jsx)("input",{name:"ingredients",className:L.ingredientNameInput,autoFocus:!0,value:e.name,onChange:function(e){return function(e,n,i){B((function(n){var i=(0,s.Z)(n);return i[e]=!0,i})),f(g.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return e.name}))),d(e,n,i,"name"),o(["ingredients[".concat(e,"]")])}(n,e.target.value,g[n]._id)}}),(0,T.jsx)(b.Ix0,{className:L.arrowIngr,size:"18"})]}),u["ingredients[".concat(n,"]")]&&(0,T.jsx)("p",{className:L.errorMsg,children:u["ingredients[".concat(n,"]")]}),Q[n]&&(0,T.jsx)("ul",{className:L.selectIngredients,children:A.map((function(i){return(0,T.jsx)("li",{className:L.selectIngredientItem,onClick:function(){return function(e,n,i){d(e,n,i,"name"),B((function(n){var i=(0,s.Z)(n);return i[e]=!1,i}))}(n,i,e.id)},children:i},i)}))})]}),(0,T.jsxs)("div",{className:L.ingredientQuantityField,children:[(0,T.jsx)("input",{className:L.ingredientQuantityInput,type:"number",value:e.ingredientsQuantity,onChange:function(i){return function(e,n,i){console.log("Quantity",{index:e,value:n}),d(e,n,i,"ingredientsQuantity"),o(["ingredients[".concat(e,"].ingredientQuantity")])}(n,i.target.value,e.id)}}),(0,T.jsxs)("div",{className:L.selectBox,onClick:function(){return function(e){y((function(n){var i=(0,s.Z)(n);return i[e]=!i[e],i}))}(n)},children:[(0,T.jsx)("span",{className:L.selectLabel,children:e.ingredientsQuantityMeasure}),(0,T.jsx)(b.Ix0,{className:L.arrow,size:"18"})]}),F[n]&&(0,T.jsx)("ul",{className:L.selectQuantityList,children:x.map((function(i){return(0,T.jsx)("li",{className:L.selectQuantityItem,onClick:function(){return function(e,n,i){console.log("Set quantity",{id:i,value:n}),y((function(n){var i=(0,s.Z)(n);return i[e]=!i[e],i})),d(e,n,i,"ingredientsQuantityMeasure")}(n,i,e.id)},children:i},i)}))}),u["ingredients[".concat(n,"].ingredientsQuantity")]&&(0,T.jsxs)("p",{className:L.errorMsg,children:[" ",u["ingredients[".concat(n,"].ingredientsQuantity")]," "]})]})]}),(0,T.jsx)("button",{className:L.deleteBtn,type:"button",onClick:function(){return function(e,n){r(e),I((function(e){return e-1})),B((function(e){var i=(0,s.Z)(e);return i[n]=!1,i}))}(e.id,n)},children:(0,T.jsx)(b.lTq,{className:L.deleteBtnIcon,size:"18px"})})]},e.id)}))})]})},q={subtitle:"RecipePreparationFields_subtitle__5jg8a",recipeTextarea:"RecipePreparationFields_recipeTextarea__gE981",errorText:"RecipePreparationFields_errorText__viRuP"},G=function(e){var n=e.onPreparationTextChange,i=(e.preparation,e.errors),t=(0,c.useState)(""),r=(0,a.Z)(t,2),s=r[0],d=r[1];return(0,T.jsxs)("div",{className:q.preparationFieldWrapper,children:[(0,T.jsx)("h3",{className:q.subtitle,children:"Recipe Preparation"}),(0,T.jsx)("textarea",{className:q.recipeTextarea,name:"instructions",id:"instructions",placeholder:"Enter recipe",onKeyDown:function(e){var i=s;"Enter"===e.key&&(i=s.split("\n").join(", ")),n(i)},onChange:function(e){d(e.target.value)},value:s}),i.preparation&&(0,T.jsx)("p",{className:q.errorText,children:i.preparation})]})},H="AddRecipeComponents_addSectionWrap__cl+na",O="AddRecipeComponents_addRecipeForm__VEcmL",J="AddRecipeComponents_addButton__caTT4",V="AddRecipeComponents_socialsWrapper__aanky",z="AddRecipeComponents_subtitle__Qt+Kw",Y="AddRecipeComponents_popularRecipesList__TrCDl",W="AddRecipeComponents_popularRecipesItem__Q2PZK",K="AddRecipeComponents_popularRecipesLink__I+PD+",X="AddRecipeComponents_recipePreview__H0kJa",$="AddRecipeComponents_popularRecipeSubtitle__8ngnR",ee="AddRecipeComponents_popularRecipeText__OtUqX",ne="AddRecipeComponents_notFoundText__HsX5I",ie="AddRecipeComponents_followUsBlock__Sg535",te=function(){var e=(0,c.useState)(""),n=(0,a.Z)(e,2),i=n[0],m=n[1],A=(0,c.useState)(""),f=(0,a.Z)(A,2),x=f[0],h=f[1],v=(0,c.useState)(""),j=(0,a.Z)(v,2),I=j[0],R=j[1],N=(0,c.useState)("Breakfast"),F=(0,a.Z)(N,2),y=F[0],C=F[1],w=(0,c.useState)("30"),Q=(0,a.Z)(w,2),B=Q[0],Z=Q[1],b=(0,c.useState)([{id:(0,p.x0)(),ingredientsQuantity:0,ingredientsQuantityMeasure:"tbs",name:""}]),k=(0,a.Z)(b,2),P=k[0],E=k[1],U=(0,c.useState)(""),D=(0,a.Z)(U,2),L=D[0],q=D[1],V=(0,c.useState)({}),z=(0,a.Z)(V,2),Y=z[0],W=z[1],K=(0,d.s0)(),X=(0,c.useMemo)((function(){return P.map((function(e){var n=e.id,i=e.ingredientsQuantity,t=e.ingredientsQuantityMeasure;return{measure:"".concat(i," ").concat(t),id:n}}))}),[P]),$={img:i,title:x,description:I,cookingTime:B,category:y,ingredients:P,preparation:L},ee=new FormData;ee.append("preview",i),ee.append("title",x),ee.append("description",I),ee.append("category",y),ee.append("time",B),ee.append("ingredients",JSON.stringify(X)),ee.append("instructions",L);var ne=(0,l.I0)(),ie=(0,l.v9)(u.FO),te=function(e){W((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,t.Z)({},e,""))}))};return console.log(ie),(0,T.jsx)("div",{className:H,children:(0,T.jsxs)("form",{className:O,onSubmit:function(e){e.preventDefault(),_.validate($,{abortEarly:!1}).then((function(){ne((0,o.C0)(ee)).unwrap().then((function(e){console.log("RES",e),K("/my",{replace:!0}),g.Notify.success("Hooray! The recipe was successfully added")})).catch((function(e){console.log(e),g.Notify.error("Ooops, smth is going wrong... Try again!")}))})).catch((function(e){console.log("ERRR",e);var n=e.inner.reduce((function(e,n){return(0,r.Z)((0,r.Z)({},e),{},(0,t.Z)({},n.path,n.message))}),{});W(n)}))},children:[(0,T.jsx)(S,{title:x,description:I,time:B,category:y,onInputImgUpload:function(e){m(e.target.files[0]),te("img")},onTitleChange:function(e){h(e),te("title")},onDescriptionChange:function(e){R(e),te("description")},onCategoryChange:function(e){C(e)},onTimeChange:function(e){Z(e)},errors:Y}),(0,T.jsx)(M,{ingredients:P,incrIngredientFields:function(){E((function(e){return[].concat((0,s.Z)(e),[{id:(0,p.x0)(),ingredientsQuantity:0,ingredientsQuantityMeasure:"tbs",name:""}])}))},decrIngredientFields:function(){var e=P[P.length-1];E((function(n){return n.filter((function(n){return n.id!==e.id}))}))},deleteIngredient:function(e){E(P.filter((function(n){return n.id!==e})))},updateIngredient:function(e,n,i,t){console.log("ADD",{index:e,value:n,id:i,prop:t}),E((function(r){console.log("STATE",r);var a=(0,s.Z)(r);return a[e][t]=n,a[e].id=i,console.log(a),a}))},updateErrors:te,errors:Y}),(0,T.jsx)(G,{onPreparationTextChange:function(e){q(e),te("preparation")},preparation:L,errors:Y}),(0,T.jsx)("button",{className:J,type:"submit",children:"Add"})]})})},re=i(3),se=function(){return(0,T.jsxs)("div",{className:V,children:[(0,T.jsx)("h3",{className:z,children:" Follow us "}),(0,T.jsx)("div",{className:ie,children:(0,T.jsx)(re.L,{})})]})},ae=i(1556),ce=function(e){return e.popularRecipes.popularRecipes},de=i(3397);function le(){var e=(0,l.I0)(),n=(0,l.v9)(ce);return(0,c.useEffect)((function(){e((0,de.T)())}),[e]),(0,T.jsxs)("div",{children:[(0,T.jsx)("h3",{className:z,children:"Popular recipe"}),n.length>0?(0,T.jsx)("ul",{className:Y,children:n.map((function(e){return(0,T.jsx)("li",{className:W,children:(0,T.jsxs)("a",{href:"/recipe/".concat(e._id),className:K,children:[(0,T.jsx)("img",{src:e.preview||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABFUExURUdwTPn5+fr6+vj4+Pf39/r6+vr6+vf39/r6+vn5+fn5+fr6+vv7+/f39/////n5+fn5+fb29vr6+vr6+vn5+fz8/Pr6+n8EUKgAAAAWdFJOUwCAkHBA778g3+DfwEBgEFB/cF+foFAThhDgAAAA/UlEQVRYw+2X6w7CIAyFBVrKYOyqvP+jaoxhEUhcISbGcP6Nwpe1sO5wuXT9l6ZFmyhIo/MR05JK65URI0Xl8SM2XnEtrLd0/mXJZARC4qRLdkpGxM4rmBTJgB55ANDJwEA8AJkO6IBvAG6lWUt4ainFzhx9FV5a+d1pw5DIbiyACZmQBQgFVQGcFK4BgM9SA1YDXlsFtQAX+10lIPZNWQmQsWVXAnRrCgEaixgQGrfxkYWQuukkVh9lzNfbD/+690effY7oE8PRu3IH/CRAA9PmudRoSh7gqlKrbplWN5vueWZblez+DufsPkjji1jlhqg5q9oRc2Lq17M/0x1koh1YeifJIwAAAABJRU5ErkJggg==",alt:"popularDish",className:X}),(0,T.jsxs)("div",{children:[(0,T.jsx)("h5",{className:$,children:e.title}),(0,T.jsx)("p",{className:ee,children:e.instructions})]})]})},e._id)}))}):(0,T.jsx)("p",{className:ne,children:"There are no popular recipes yet"})]})}var oe="AddRecipePage_wrapper__8rLIM",ue="AddRecipePage_pageContent__6accz",pe="AddRecipePage_formContainer__TEeEs",ge="AddRecipePage_sidebar__1uoTZ",me=function(){return(0,T.jsx)("div",{className:oe,children:(0,T.jsxs)("section",{className:ue,children:[(0,T.jsx)(ae.e,{text:"Add recipe"}),(0,T.jsxs)("div",{className:pe,children:[(0,T.jsx)(te,{}),(0,T.jsxs)("div",{className:ge,children:[(0,T.jsx)(se,{}),(0,T.jsx)(le,{})]})]})]})})}},2166:function(e,n,i){i.d(n,{FO:function(){return s},gj:function(){return r},mQ:function(){return t},uG:function(){return a}});var t=function(e){return e.myRecipes.availableRecipes.recipes},r=function(e){return e.myRecipes.isLoading},s=function(e){return e.myRecipes.error},a=function(e){return e.myRecipes.availableRecipes.total}}}]);
//# sourceMappingURL=671.138147a3.chunk.js.map