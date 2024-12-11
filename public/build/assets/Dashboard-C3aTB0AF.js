import{_ as v}from"./AuthPageheader-DvZyGfVD.js";import{p as m,v as g,o as n,c as r,a as t,t as s,u as o,b as c,_ as x,e as p,i as f,F as b,r as $,y as w,J as y,s as k,Q as C,k as A,l as S,K as D}from"./app-D8LHgVkI.js";import{A as j}from"./AddressFormModal-DmcXNAUG.js";import{_ as V}from"./ProductCardHorizontal-CL4Vza3y.js";import{_ as M}from"./Bag-N9eMPsGI.js";import"./ArrowRightIcon-y98sU8DA.js";const P={class:"bg-white rounded-xl p-6"},N={class:"pb-3 text-slate-950 text-lg font-medium leading-normal tracking-tight"},O={class:"border-t border-slate-200"},B={key:0,class:"mt-4 flex flex-col gap-2"},R={class:"flex gap-1.5 items-center"},z={class:"text-slate-950 text-base font-medium leading-normal"},F={class:"flex items-center px-1.5 py-[3px] bg-slate-100 rounded-md text-slate-950 text-xs font-normal leading-none"},I={class:"text-slate-700 text-base font-normal leading-normal"},T={class:"text-slate-700 text-base font-normal leading-normal"},E={key:1,class:"px-3 py-4 rounded-lg border border-dashed border-primary-300 mt-4 text-center"},G={class:"text-slate-400 text-lg font-normal leading-7 tracking-tight"},J={__name:"DashboardDefaultShippingAddress",setup(h){const _=m(),e=g();return(a,d)=>(n(),r("div",P,[t("div",N,s(a.$t("Default Shipping Address")),1),t("div",O,[o(e).address?(n(),r("div",B,[t("div",R,[t("div",z,s(o(e).address.name),1),t("div",F,s(o(e).address.address_type),1)]),t("div",I,s(o(e).address.phone),1),t("div",T,s((o(e).address.flat_no?o(e).address.flat_no+", ":"")+o(e).address.address_line+", "+(o(e).address.address_line2?o(e).address.address_line2+", ":""))+" "+s(o(e).address.area+"-"+o(e).address.post_code),1)])):(n(),r("div",E,[t("div",G,s(a.$t("No address added yet")),1),t("div",{class:"text-center mt-3 text-primary text-sm font-normal leading-tight cursor-pointer",onClick:d[0]||(d[0]=i=>o(_).showAddressModal=!0)},s(a.$t("Click to add new address")),1)]))]),c(j)]))}},K={class:"bg-white rounded-xl p-6 h-full"},L={class:"pb-3 text-slate-950 text-lg font-medium leading-normal tracking-tight"},Q={key:0,class:"md:max-h-[calc(100vh-560px)] min-h-72 flex flex-col gap-2 border-t border-slate-200 overflow-y-auto"},W={key:1,class:"h-full flex justify-center items-center border-t border-slate-200"},q={class:"text-center text-slate-400 text-lg font-normal leading-7 tracking-tight"},H={__name:"DashboardRecenlyView",setup(h){const _=m(),e=p([]);f(()=>{a()});const a=()=>{axios.get("/recently-views",{headers:{Authorization:_.token}}).then(d=>{e.value=d.data.data.products}).catch(d=>{console.log(d)})};return(d,i)=>(n(),r("div",K,[t("div",L,s(d.$t("Recently Viewed")),1),e.value.length>0?(n(),r("div",Q,[(n(!0),r(b,null,$(e.value,l=>(n(),r("div",{key:l.id,class:"mt-3"},[c(V,{product:l},null,8,["product"])]))),128))])):(n(),r("div",W,[t("div",q,s(d.$t("No products have been viewed recently"))+". ",1)]))]))}},U=x(H,[["__scopeId","data-v-c909299e"]]),X={class:"w-full flex flex-col h-full bg-white px-6 pt-6 pb-3 rounded-xl"},Y={class:"flex justify-between items-center gap-2"},Z={class:"text-slate-950 text-lg font-medium leading-normal tracking-tight"},tt={class:"text-primary-600 text-lg font-medium leading-normal tracking-tight"},et={key:0,class:"border-t border-slate-200 mt-4 pt-4"},st={class:"max-h-80 md:max-h-[calc(100vh-520px)] min-h-72 overflow-y-auto"},ot={key:0,class:"flex gap-3 md:gap-6 mt-4 flex-wrap"},at={class:"flex items-center gap-2 grow"},lt={class:"text-center text-slate-500 text-base font-normal leading-normal"},dt={class:"text-slate-900 text-base md:text-lg font-bold leading-normal tracking-tight"},nt={class:"text-base font-medium"},rt={key:1,class:"border-t border-slate-200 mt-5 flex justify-center items-center flex-col grow"},it={class:"text-slate-400 text-2xl font-medium mt-2"},ct={__name:"DashboardMyCart",setup(h){const _=new w,e=g(),a=y(),d=k(),i=()=>{if(e.selectedShopIds.length===0){a.error("Please select at least one shop",{position:"bottom-left"});return}_.push("/checkout")};return(l,u)=>(n(),r("div",X,[t("div",Y,[t("div",Z,s(l.$t("My Cart")),1),t("div",tt,s(o(e).total>0?o(e).total:l.$t("No"))+" "+s(l.$t("items")),1)]),o(e).products.length>0?(n(),r("div",et,[t("div",st,[c(C)]),o(e).total>0?(n(),r("div",ot,[t("div",at,[t("div",lt,s(l.$t("Cart Amount")),1),t("div",dt,s(o(d).showCurrency(o(e).total_amount)),1)]),t("button",{class:"py-2 sm:py-4 inline-flex gap-2 items-center justify-center px-3 sm:px-6 text-white bg-primary grow rounded-xl",onClick:i},[t("div",nt,s(l.$t("Proceed to Checkout")),1),c(o(A),{class:"w-5 h-5 hidden sm:block"})])])):S("",!0)])):(n(),r("div",rt,[u[0]||(u[0]=t("img",{src:"/assets/icons/empty-cart.png",alt:"empty-cart",class:"w-[108px] h-[108px]",loading:"lazy"},null,-1)),t("div",it,s(l.$t("There is no product in your cart"))+".",1)]))]))}},_t=x(ct,[["__scopeId","data-v-d5685d8d"]]),ht={class:"flex flex-col h-full"},mt={class:"grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6 px-2 pt-2 md:px-4 md:pt-4 lg:px-6 lg:pt-6 pb-0 h-full"},gt={class:"col-span-1 xl:col-span-2 flex flex-col gap-4"},ut={class:"flex flex-wrap md:flex-nowrap gap-4"},xt={class:"flex grow justify-between bg-white p-3 rounded-lg border border-lime-300"},pt={class:"flex flex-col gap-2"},ft={class:"text-slate-950 text-lg md:text-2xl font-medium leading-normal tracking-tight"},vt={class:"text-slate-500 text-xs font-normal leading-none"},bt={class:"flex grow justify-between bg-white p-3 rounded-lg border border-primary-300"},$t={class:"flex flex-col gap-2"},wt={class:"text-slate-950 text-lg font-medium leading-normal tracking-tight"},yt={class:"text-slate-500 text-xs font-normal leading-none"},kt={class:"flex grow justify-between bg-white p-3 rounded-lg border border-red-300"},Ct={class:"flex flex-col gap-2"},At={class:"text-slate-950 text-lg font-medium leading-normal tracking-tight"},St={class:"text-slate-500 text-xs font-normal leading-none"},Dt={class:"flex grow justify-between bg-white p-3 rounded-lg border border-blue-300"},jt={class:"flex flex-col gap-2"},Vt={class:"text-slate-950 text-lg font-medium leading-normal tracking-tight"},Mt={class:"text-slate-500 text-xs font-normal leading-none"},Pt={class:"grow"},Nt={class:"col-span-1 xl:col-span-1 flex flex-col gap-4"},Ot={class:"grow"},Et={__name:"Dashboard",setup(h){const _=g(),e=m();f(()=>{d()});const a=p({all:0,pending:0,confirm:0,processing:0,on_the_way:0,delivered:0,cancelled:0}),d=async()=>{axios.get("/orders",{headers:{Authorization:e.token}}).then(i=>{a.value=i.data.data.status_wise_orders})};return(i,l)=>(n(),r("div",ht,[c(v,{title:i.$t("Dashboard")},null,8,["title"]),t("div",mt,[t("div",gt,[t("div",ut,[t("div",xt,[t("div",pt,[t("div",ft,s(a.value.pending+a.value.confirm+a.value.processing+a.value.on_the_way),1),t("div",vt,s(i.$t("On Going Order")),1)]),l[0]||(l[0]=t("div",null,[t("img",{src:"/assets/icons/truck-time.svg",alt:"",class:"w-6 h-6"})],-1))]),t("div",bt,[t("div",$t,[t("div",wt,s(o(_).total),1),t("div",yt,s(i.$t("Products in Cart")),1)]),t("div",null,[c(M,{width:"24",height:"24"})])]),t("div",kt,[t("div",Ct,[t("div",At,s(o(e).favoriteProducts),1),t("div",St,s(i.$t("Products in Wishlist")),1)]),t("div",null,[c(o(D),{class:"w-6 h-6 text-red-500"})])]),t("div",Dt,[t("div",jt,[t("div",Vt,s(a.value.all),1),t("div",Mt,s(i.$t("Products Ordered")),1)]),l[1]||(l[1]=t("div",null,[t("img",{src:"/assets/icons/box-tick.svg",alt:"",class:"w-6 h-6"})],-1))])]),t("div",Pt,[c(_t)])]),t("div",Nt,[t("div",null,[c(J)]),t("div",Ot,[c(U)])])])]))}};export{Et as default};
