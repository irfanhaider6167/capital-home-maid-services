import{f as h,h as F,i as R,k as I,l as q,n as D,r as G,j as m,m as N,T as A,B as V,S as J,N as W,A as U,o as X,y as Y}from"./index-tMKTCunX.js";function $(g){return g===void 0&&(g=""),`.${g.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function _(g){let{swiper:e,extendParams:O,on:u,emit:y}=g;const d="swiper-pagination";O({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`,paginationDisabledClass:`${d}-disabled`}}),e.pagination={el:null,bullets:[]};let w,v=0;function S(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function k(a,i){const{bulletActiveClass:t}=e.params.pagination;a&&(a=a[`${i==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${t}-${i}`),a=a[`${i==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${t}-${i}-${i}`)))}function E(a,i,t){if(a=a%t,i=i%t,i===a+1)return"next";if(i===a-1)return"previous"}function P(a){const i=a.target.closest($(e.params.pagination.bulletClass));if(!i)return;a.preventDefault();const t=D(i)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===t)return;const s=E(e.realIndex,t,e.slides.length);s==="next"?e.slideNext():s==="previous"?e.slidePrev():e.slideToLoop(t)}else e.slideTo(t)}function b(){const a=e.rtl,i=e.params.pagination;if(S())return;let t=e.pagination.el;t=h(t);let s,p;const x=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,M=e.params.loop?Math.ceil(x/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(p=e.previousRealIndex||0,s=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(s=e.snapIndex,p=e.previousSnapIndex):(p=e.previousIndex||0,s=e.activeIndex||0),i.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const l=e.pagination.bullets;let f,c,L;if(i.dynamicBullets&&(w=q(l[0],e.isHorizontal()?"width":"height"),t.forEach(n=>{n.style[e.isHorizontal()?"width":"height"]=`${w*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&p!==void 0&&(v+=s-(p||0),v>i.dynamicMainBullets-1?v=i.dynamicMainBullets-1:v<0&&(v=0)),f=Math.max(s-v,0),c=f+(Math.min(l.length,i.dynamicMainBullets)-1),L=(c+f)/2),l.forEach(n=>{const r=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(o=>`${i.bulletActiveClass}${o}`)].map(o=>typeof o=="string"&&o.includes(" ")?o.split(" "):o).flat();n.classList.remove(...r)}),t.length>1)l.forEach(n=>{const r=D(n);r===s?n.classList.add(...i.bulletActiveClass.split(" ")):e.isElement&&n.setAttribute("part","bullet"),i.dynamicBullets&&(r>=f&&r<=c&&n.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),r===f&&k(n,"prev"),r===c&&k(n,"next"))});else{const n=l[s];if(n&&n.classList.add(...i.bulletActiveClass.split(" ")),e.isElement&&l.forEach((r,o)=>{r.setAttribute("part",o===s?"bullet-active":"bullet")}),i.dynamicBullets){const r=l[f],o=l[c];for(let C=f;C<=c;C+=1)l[C]&&l[C].classList.add(...`${i.bulletActiveClass}-main`.split(" "));k(r,"prev"),k(o,"next")}}if(i.dynamicBullets){const n=Math.min(l.length,i.dynamicMainBullets+4),r=(w*n-w)/2-L*w,o=a?"right":"left";l.forEach(C=>{C.style[e.isHorizontal()?o:"top"]=`${r}px`})}}t.forEach((l,f)=>{if(i.type==="fraction"&&(l.querySelectorAll($(i.currentClass)).forEach(c=>{c.textContent=i.formatFractionCurrent(s+1)}),l.querySelectorAll($(i.totalClass)).forEach(c=>{c.textContent=i.formatFractionTotal(M)})),i.type==="progressbar"){let c;i.progressbarOpposite?c=e.isHorizontal()?"vertical":"horizontal":c=e.isHorizontal()?"horizontal":"vertical";const L=(s+1)/M;let n=1,r=1;c==="horizontal"?n=L:r=L,l.querySelectorAll($(i.progressbarFillClass)).forEach(o=>{o.style.transform=`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`,o.style.transitionDuration=`${e.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(I(l,i.renderCustom(e,s+1,M)),f===0&&y("paginationRender",l)):(f===0&&y("paginationRender",l),y("paginationUpdate",l)),e.params.watchOverflow&&e.enabled&&l.classList[e.isLocked?"add":"remove"](i.lockClass)})}function B(){const a=e.params.pagination;if(S())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let t=e.pagination.el;t=h(t);let s="";if(a.type==="bullets"){let p=e.params.loop?Math.ceil(i/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&p>i&&(p=i);for(let x=0;x<p;x+=1)a.renderBullet?s+=a.renderBullet.call(e,x,a.bulletClass):s+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?s=a.renderFraction.call(e,a.currentClass,a.totalClass):s=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?s=a.renderProgressbar.call(e,a.progressbarFillClass):s=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],t.forEach(p=>{a.type!=="custom"&&I(p,s||""),a.type==="bullets"&&e.pagination.bullets.push(...p.querySelectorAll($(a.bulletClass)))}),a.type!=="custom"&&y("paginationRender",t[0])}function z(){e.params.pagination=F(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let i;typeof a.el=="string"&&e.isElement&&(i=e.el.querySelector(a.el)),!i&&typeof a.el=="string"&&(i=[...document.querySelectorAll(a.el)]),i||(i=a.el),!(!i||i.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...e.el.querySelectorAll(a.el)],i.length>1&&(i=i.find(t=>R(t,".swiper")[0]===e.el))),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(e.pagination,{el:i}),i=h(i),i.forEach(t=>{a.type==="bullets"&&a.clickable&&t.classList.add(...(a.clickableClass||"").split(" ")),t.classList.add(a.modifierClass+a.type),t.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(t.classList.add(`${a.modifierClass}${a.type}-dynamic`),v=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&t.classList.add(a.progressbarOppositeClass),a.clickable&&t.addEventListener("click",P),e.enabled||t.classList.add(a.lockClass)}))}function j(){const a=e.params.pagination;if(S())return;let i=e.pagination.el;i&&(i=h(i),i.forEach(t=>{t.classList.remove(a.hiddenClass),t.classList.remove(a.modifierClass+a.type),t.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(t.classList.remove(...(a.clickableClass||"").split(" ")),t.removeEventListener("click",P))})),e.pagination.bullets&&e.pagination.bullets.forEach(t=>t.classList.remove(...a.bulletActiveClass.split(" ")))}u("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:i}=e.pagination;i=h(i),i.forEach(t=>{t.classList.remove(a.horizontalClass,a.verticalClass),t.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),u("init",()=>{e.params.pagination.enabled===!1?H():(z(),B(),b())}),u("activeIndexChange",()=>{typeof e.snapIndex>"u"&&b()}),u("snapIndexChange",()=>{b()}),u("snapGridLengthChange",()=>{B(),b()}),u("destroy",()=>{j()}),u("enable disable",()=>{let{el:a}=e.pagination;a&&(a=h(a),a.forEach(i=>i.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),u("lock unlock",()=>{b()}),u("click",(a,i)=>{const t=i.target,s=h(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&s&&s.length>0&&!t.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&t===e.navigation.nextEl||e.navigation.prevEl&&t===e.navigation.prevEl))return;const p=s[0].classList.contains(e.params.pagination.hiddenClass);y(p===!0?"paginationShow":"paginationHide"),s.forEach(x=>x.classList.toggle(e.params.pagination.hiddenClass))}});const T=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=h(a),a.forEach(i=>i.classList.remove(e.params.pagination.paginationDisabledClass))),z(),B(),b()},H=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=h(a),a.forEach(i=>i.classList.add(e.params.pagination.paginationDisabledClass))),j()};Object.assign(e.pagination,{enable:T,disable:H,render:B,update:b,init:z,destroy:j})}const K=[{id:1,name:"John Doe",review:"Excellent maid service with professional and trusted staff.",image:"https://randomuser.me/api/portraits/men/1.jpg"},{id:2,name:"Jane Smith",review:"Very satisfied with the cleaning and baby care services.",image:"https://randomuser.me/api/portraits/women/2.jpg"},{id:3,name:"Alex Johnson",review:"Highly recommended for home staff and nursing services.",image:"https://randomuser.me/api/portraits/men/3.jpg"},{id:4,name:"Samee Ullah",review:"Professional team with fast response and excellent support.",image:"/images/finalimg/samee.jpg"}],Q=()=>m.jsxs(Z,{children:[m.jsxs(N.div,{className:"heading",initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[m.jsx(A,{variant:"h3",className:"mainHeading",children:"Our Testimonials"}),m.jsx(A,{className:"subHeading",children:"We are grateful for the trust and positive feedback from our valued clients."})]}),m.jsx(V,{className:"reviewSlider",children:m.jsx(J,{modules:[_,W,U],spaceBetween:25,slidesPerView:3,breakpoints:{0:{slidesPerView:1},600:{slidesPerView:2},992:{slidesPerView:3}},pagination:{clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,children:K.map((g,e)=>m.jsx(X,{children:m.jsxs(N.div,{className:"reviewCard",initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:e*.1,duration:.6},whileHover:{y:-10,scale:1.02},children:[m.jsx("div",{className:"avatarContainer",children:m.jsx("img",{src:g.image,alt:g.name,className:"avatar",loading:"lazy"})}),m.jsx(A,{variant:"h6",className:"reviewName",children:g.name}),m.jsx(A,{className:"reviewText",children:g.review})]})},g.id))})})]}),ae=G.memo(Q),Z=Y.section`
  padding: 90px 20px;

  background:
    linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url("https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=1400");

  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  .heading {
    text-align: center;
    max-width: 800px;
    margin: auto;
    margin-bottom: 60px;
  }

  .mainHeading {
    color: white;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .subHeading {
    color: #d1d5db;
    font-size: 17px;
    line-height: 1.7;
  }

  .reviewSlider {
    width: 92%;
    margin: auto;
  }

  .reviewCard {
    background: rgba(255, 255, 255, 0.97);

    border-radius: 24px;

    padding: 35px 25px;

    text-align: center;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

    transition: 0.3s ease;

    min-height: 370px;
  }

  .avatarContainer {
    margin-bottom: 20px;
  }

  .avatar {
    width: 110px;
    height: 110px;

    border-radius: 50%;

    object-fit: cover;

    border: 5px solid #25d366;

    box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
  }

  .reviewName {
    font-weight: 700;
    color: #111827;

    margin-bottom: 14px;
  }

  .reviewText {
    color: #4b5563;

    line-height: 1.8;

    font-size: 15px;
  }

  /* SWIPER */
  .swiper {
    padding-bottom: 60px;
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    background: #25d366;
    opacity: 1;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    padding: 70px 15px;

    .mainHeading {
      font-size: 2rem !important;
    }

    .subHeading {
      font-size: 15px;
    }

    .reviewSlider {
      width: 100%;
    }

    .reviewCard {
      padding: 30px 20px;
      min-height: auto;
    }

    .avatar {
      width: 90px;
      height: 90px;
    }
  }
`;export{ae as default};
