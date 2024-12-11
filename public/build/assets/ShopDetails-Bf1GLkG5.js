import{s as re,y as de,z as ue,e as l,q as ce,i as ve,f as Q,o,c as r,a as e,t as s,n as f,F as _,r as h,b as d,u as C,m as pe,A as me,B as ge,C as fe,w as T,d as _e,l as w}from"./app-D8LHgVkI.js";import{S as he,d as we}from"./swiper-B9AAoD8p.js";import{_ as xe,a as be,f as ye}from"./free-mode-DxwR7Mp5.js";import{_ as ke}from"./ProductCard-CqvkeMkU.js";import{_ as $e}from"./CategoryCard-BUHdMth7.js";import"./Bag-N9eMPsGI.js";const Re={class:""},Ce={class:"h-56 md:h-64 w-full"},Pe=["src"],Ve={class:"main-container relative bg-primary-50 py-10 pt-24"},je={class:"-top-32 sm:-top-28 lg:-top-[108px] absolute left-0 right-0 main-container"},Be={class:"w-full p-6 bg-white rounded-2xl shadow flex-col gap-2 sm:gap-6 flex"},Se={class:"flex justify-between w-full gap-3 sm:gap-6 flex-wrap sm:flex-nowrap"},Te={class:"flex grow gap-6"},Me={class:"w-16 h-16 md:w-[88px] md:h-[88px] rounded-full overflow-hidden shrink-0"},ze=["src"],De={class:"flex flex-col items-start gap-2"},Fe={class:"flex justify-start items-center w-full gap-2"},Le={class:"text-slate-950 text-lg font-bold leading-normal tracking-tight"},Ne={class:"flex justify-start items-center gap-4"},He={class:"text-slate-500 text-base font-normal leading-normal"},Ue={class:"text-slate-500 text-base font-normal leading-normal text-center"},Ae={class:"text-slate-500 text-sm font-normal leading-tight"},qe=["innerHTML"],Ee={class:"sm:border-l border-slate-200 w-full sm:w-[156px] md:w-[184px] flex flex-row-reverse sm:flex-col justify-center sm:justify-start items-center gap-2"},Ie={class:"flex gap-1"},Oe={class:"text-slate-800 text-base font-bold leading-normal"},Ge={class:"text-slate-500 text-base font-normal leading-normal"},Je={class:"flex"},Ke={class:"flex justify-between items-center w-full"},Qe={class:"lg:w-[448px] relative hidden sm:block"},We=["placeholder"],Xe={class:"pt-10"},Ye=["src"],Ze={class:"main-container py-10 pt-24"},et={class:"mt-12"},tt={key:0,class:"w-full"},st={class:"grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-6 items-start"},at={key:0,class:"text-slate-950 text-xl font-medium leading-7"},lt={class:"flex justify-between items-center w-full mt-8 gap-4 flex-wrap"},ot={class:"text-slate-800 text-base font-normal leading-normal"},nt={key:1,class:"w-full"},it={class:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-6 items-start"},rt={key:2,class:"w-full"},dt={class:"grid grid-cols-1 xl:grid-cols-2 gap-8 items-start"},ut={class:"text-slate-950 text-xl font-medium leading-7"},ct={class:"mt-4"},vt={key:0,class:"flex justify-between items-center w-full mt-8 gap-4 flex-wrap"},pt={class:"text-slate-800 text-base font-normal leading-normal"},bt={__name:"ShopDetails",setup(mt){const W=re(),X=new de,x=ue(),Y=[ye],M=l(!0),c=l(!0),v=l(!1),p=l(!1),u=l(1),b=l(12),Z=t=>{u.value=t,S()},y=l(5),m=l(1),ee=t=>{m.value=t,z()},n=l({}),P=l([]),k=l([]),V=l(0),j=l({}),$=l(0),B=l([]),R=l(""),te=()=>{u.value=1,c.value=!0,v.value=!1,p.value=!1,S()};ce(R,()=>{te()}),ve(()=>{if(M.value=!1,!W.multiVendor){X.push("/");return}le(),window.scrollTo(0,0),S()});const se=()=>{c.value=!1,v.value=!0,p.value=!1,oe()},ae=()=>{c.value=!1,v.value=!1,p.value=!0,z()},le=async()=>{axios.get("/shops/"+x.params.id).then(t=>{n.value=t.data.data.shop})},S=async()=>{axios.get("/products",{params:{shop_id:x.params.id,page:u.value,per_page:b.value,search:R.value}}).then(t=>{V.value=t.data.data.total,k.value=t.data.data.products})},oe=async()=>{P.value.length===0&&axios.get("/shop-categories",{params:{shop_id:x.params.id}}).then(t=>{P.value=t.data.data.categories})},z=async()=>{axios.get("/reviews",{params:{shop_id:x.params.id,page:m.value,per_page:y.value}}).then(t=>{$.value=t.data.data.total,B.value=t.data.data.reviews,j.value=t.data.data.average_rating_percentage})},ne={320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:2,spaceBetween:10},1024:{slidesPerView:2,spaceBetween:30},1280:{slidesPerView:3,spaceBetween:30}};return(t,i)=>{var F,L,N,H,U,A,q,E,I,O,G,J,K;const D=Q("vue-awesome-paginate"),ie=Q("router-link");return o(),r("div",Re,[e("div",Ce,[e("img",{src:(F=n.value)==null?void 0:F.banner,loading:"lazy",class:"w-full h-full object-cover"},null,8,Pe)]),e("div",Ve,[e("div",je,[e("div",Be,[e("div",Se,[e("div",Te,[e("div",Me,[e("img",{src:(L=n.value)==null?void 0:L.logo,loading:"lazy",class:"w-full h-full object-cover"},null,8,ze)]),e("div",De,[e("div",Fe,[e("div",Le,s((N=n.value)==null?void 0:N.name),1),e("div",{class:f(["px-1 py-0.5 rounded-[10px] text-white text-xs font-normal leading-none",((H=n.value)==null?void 0:H.shop_status)==="Online"?"bg-lime-600":"bg-slate-500"])},s((U=n.value)==null?void 0:U.shop_status),3)]),e("div",Ne,[e("div",He,s((A=n.value)==null?void 0:A.total_products)+"+ Items ",1),i[5]||(i[5]=e("div",{class:"h-3 w-[0px] border text-slate-300"},null,-1)),e("div",Ue,s((q=n.value)==null?void 0:q.total_categories)+"+ Categorise ",1)]),e("div",Ae,[e("div",{innerHTML:(E=n.value)==null?void 0:E.description},null,8,qe)])])]),e("div",Ee,[e("div",Ie,[e("div",Oe,s((O=(I=n.value)==null?void 0:I.rating)==null?void 0:O.toFixed(1)),1),e("div",Ge," ("+s((G=n.value)==null?void 0:G.total_reviews)+") ",1)]),e("div",Je,[(o(),r(_,null,h(5,a=>{var g;return d(C(pe),{key:a,class:f(["w-4 h-4",a<=((g=n.value)==null?void 0:g.rating)?"text-amber-500":"text-gray-300"])},null,8,["class"])}),64))])])]),e("div",Ke,[e("div",null,[e("button",{class:f(["px-4 py-3 rounded-[10px] text-base font-normal leading-normal",c.value?"text-white bg-primary":"text-slate-600"]),onClick:i[0]||(i[0]=a=>{c.value=!0,p.value=!1,v.value=!1})},s(t.$t("All Products")),3),e("button",{class:f(["px-4 py-3 rounded-[10px] text-base font-normal leading-normal",v.value?"text-white bg-primary":"text-slate-600"]),onClick:i[1]||(i[1]=a=>se())},s(t.$t("Categories")),3),e("button",{class:f(["px-4 py-3 rounded-[10px] text-base font-normal leading-normal",p.value?"text-white bg-primary":"text-slate-600"]),onClick:ae},s(t.$t("Reviews")),3)]),e("div",Qe,[me(e("input",{type:"text",placeholder:t.$t("Search product"),class:"p-3 pr-10 bg-slate-100 rounded-lg border border-slate-200 w-full outline-none focus:border-primary transition duration-300","onUpdate:modelValue":i[2]||(i[2]=a=>R.value=a)},null,8,We),[[ge,R.value]]),d(C(fe),{class:"w-6 h-6 absolute top-1/2 right-3 -translate-y-1/2 text-slate-400"})])])])]),e("div",Xe,[d(C(we),{breakpoints:ne,spaceBetween:30,freeMode:!0,modules:Y},{default:T(()=>{var a;return[(o(!0),r(_,null,h((a=n.value)==null?void 0:a.banners,g=>(o(),_e(C(he),{key:g.id},{default:T(()=>[e("img",{src:g.thumbnail,alt:"banner",loading:"lazy",class:"aspect-[6/2] rounded-xl"},null,8,Ye)]),_:2},1024))),128))]}),_:1})])]),e("div",Ze,[e("div",et,[c.value?(o(),r("div",tt,[e("div",st,[(o(!0),r(_,null,h(k.value,a=>(o(),r("div",{key:a.id,class:"w-full"},[d(ke,{product:a},null,8,["product"])]))),128)),k.value.length==0?(o(),r("div",at,s(t.$t("No Products Found")),1)):w("",!0)]),e("div",lt,[e("div",ot,s(t.$t("Showing"))+" "+s(b.value*(u.value-1)+1)+" "+s(t.$t("to"))+" "+s(b.value*(u.value-1)+k.value.length)+" "+s(t.$t("of"))+" "+s(V.value)+" "+s(t.$t("results")),1),e("div",null,[d(D,{"total-items":V.value,"items-per-page":b.value,type:"button","max-pages-shown":5,modelValue:u.value,"onUpdate:modelValue":i[3]||(i[3]=a=>u.value=a),"hide-prev-next-when-ends":!0,onClick:Z},null,8,["total-items","items-per-page","modelValue"])])])])):w("",!0),v.value?(o(),r("div",nt,[e("div",it,[(o(!0),r(_,null,h(P.value,a=>(o(),r("div",{key:a.id,class:"w-full"},[d(ie,{to:`/shops/${n.value.id}/categories/${a.slug}`,class:"w-full"},{default:T(()=>[d($e,{category:a},null,8,["category"])]),_:2},1032,["to"])]))),128))])])):w("",!0),p.value?(o(),r("div",rt,[e("div",dt,[e("div",null,[e("div",ut,s(t.$t("Rating and Review")),1),d(xe,{reviewRatings:(J=j.value)==null?void 0:J.percentages,avarageRating:(K=j.value)==null?void 0:K.rating,totalReview:$.value},null,8,["reviewRatings","avarageRating","totalReview"])]),e("div",null,[i[6]||(i[6]=e("div",{class:"text-slate-950 text-xl font-medium leading-7"},"Reviews",-1)),e("div",ct,[(o(!0),r(_,null,h(B.value,a=>(o(),r("div",{key:a.id,class:"mb-4"},[d(be,{review:a},null,8,["review"])]))),128)),M.value?w("",!0):(o(),r("div",vt,[e("div",pt,s(t.$t("Showing"))+" "+s(y.value*(m.value-1)+1)+" "+s(t.$t("to"))+" "+s(y.value*(m.value-1)+B.value.length)+" "+s(t.$t("of"))+" "+s($.value)+" "+s(t.$t("results")),1),e("div",null,[d(D,{"total-items":$.value,"items-per-page":y.value,type:"button","max-pages-shown":3,modelValue:m.value,"onUpdate:modelValue":i[4]||(i[4]=a=>m.value=a),"hide-prev-next-when-ends":!0,onClick:ee},null,8,["total-items","items-per-page","modelValue"])])]))])])])])):w("",!0)])])])}}};export{bt as default};