import{g as C,a as y,r as u,u as v,j as e,c as w,b as N,s as I,m as l,T as p,B as M,d as j,y as E}from"./index-CVhkX-Ze.js";import{C as A,a as R}from"./CardContent-CEJTfBXa.js";function k(a){return C("MuiCardMedia",a)}y("MuiCardMedia",["root","media","img"]);const S=a=>{const{classes:i,isMediaComponent:t,isImageComponent:o}=a;return N({root:["root",t&&"media",o&&"img"]},k,i)},T=I("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(a,i)=>{const{ownerState:t}=a,{isMediaComponent:o,isImageComponent:n}=t;return[i.root,o&&i.media,n&&i.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),P=["video","audio","picture","iframe","img"],B=["picture","img"],O=u.forwardRef(function(i,t){const o=v({props:i,name:"MuiCardMedia"}),{children:n,className:g,component:s="div",image:r,src:h,style:m,...f}=o,c=P.includes(s),x=!c&&r?{backgroundImage:`url("${r}")`,...m}:m,d={...o,component:s,isMediaComponent:c,isImageComponent:B.includes(s)},b=S(d);return e.jsx(T,{className:w(b.root,g),as:s,role:!c&&r?"img":void 0,ref:t,style:x,ownerState:d,src:c?r||h:void 0,...f,children:n})}),_="923177799786",U=[{name:"FILIPINO NANNY",description:"Professional and caring Filipino nanny services for families and children.",imgurl:"/images/finalimg/Filipino Nanny.jpg"},{name:"ENGLISH MAID",description:"Experienced English-speaking maids for home cleaning and household work.",imgurl:"/images/finalimg/English Maid.jpg"},{name:"CHINESE TRANSLATOR",description:"Professional Chinese translator services for business and communication.",imgurl:"/images/finalimg/Chinese Translator.jpg"},{name:"COOK",description:"Skilled home and office cooks for delicious and hygienic meals.",imgurl:"https://plus.unsplash.com/premium_photo-1661714089290-ea7791092f78?q=80&w=1457&auto=format&fit=crop"},{name:"DRIVER",description:"Reliable and professional drivers for personal and family transport.",imgurl:"https://plus.unsplash.com/premium_photo-1681821679118-bb069eeb2d98?q=80&w=1470&auto=format&fit=crop"},{name:"BABY CARE",description:"Trusted baby care and babysitting services with trained staff.",imgurl:"https://plus.unsplash.com/premium_photo-1682094262987-86ac9b94a500?q=80&w=1470&auto=format&fit=crop"},{name:"CLEANER",description:"Professional cleaning and housekeeping staff for homes and offices.",imgurl:"https://plus.unsplash.com/premium_photo-1661721750123-e5b654d0ee4a?q=80&w=1470&auto=format&fit=crop"},{name:"SECURITY GUARD",description:"Well-trained security guards for safety and property protection.",imgurl:"https://plus.unsplash.com/premium_photo-1682125939509-03aa8ae4b587?q=80&w=1470&auto=format&fit=crop"},{name:"NURSE",description:"Professional nursing and patient care services at your doorstep.",imgurl:"https://plus.unsplash.com/premium_photo-1673958771843-12c73b278bd0?q=80&w=1470&auto=format&fit=crop"}],D=()=>e.jsxs(H,{children:[e.jsxs(l.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsx(p,{variant:"h3",className:"heading",children:"Our Services"}),e.jsx(p,{className:"subHeading",children:"Trusted home maid services for your family and business needs."})]}),e.jsx(M,{className:"cardContainer",children:U.map((a,i)=>{const t=`Hi, I am interested in ${a.name} service`;return e.jsx(l.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:i*.05},whileHover:{y:-8},children:e.jsxs(A,{className:"serviceCard",children:[e.jsx(O,{component:"img",image:a.imgurl,alt:a.name,className:"serviceImage",loading:"lazy"}),e.jsxs(R,{className:"cardContent",children:[e.jsx(p,{variant:"h5",className:"serviceTitle",children:a.name}),e.jsx(p,{className:"serviceDescription",children:a.description}),e.jsx(j,{component:"a",href:`https://wa.me/${_}?text=${encodeURIComponent(t)}`,target:"_blank",variant:"contained",className:"whatsappBtn",children:"WhatsApp Now"})]})]})},i)})})]}),L=u.memo(D),H=E.section`
  padding: 90px 20px;
  background: linear-gradient(180deg, #f9fafb, #eef2f7);

  .heading {
    text-align: center;
    font-weight: 700;
    color: #111827;
    margin-bottom: 10px;
  }

  .subHeading {
    text-align: center;
    max-width: 700px;
    margin: auto;
    color: #6b7280;
    font-size: 16px;
    margin-bottom: 50px;
  }

  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .serviceCard {
    width: 340px;
    border-radius: 18px !important;
    overflow: hidden;
    background: #fff !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08) !important;
    transition: 0.3s ease;
  }

  /* ✅ IMAGE FIX */
  .serviceImage {
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: center;
  }

  /* ✅ MOBILE FIX */
  @media (max-width: 768px) {
    padding: 60px 15px;

    .serviceCard {
      width: 100%;
    }

    .serviceImage {
      height: 180px;
      object-position: center top;
    }
  }

  .cardContent {
    padding: 20px !important;
  }

  .serviceTitle {
    font-weight: 700 !important;
    margin-bottom: 10px !important;
    color: #111827;
  }

  .serviceDescription {
    color: #6b7280;
    margin-bottom: 15px !important;
    line-height: 1.6;
  }

  .whatsappBtn {
    background: #25d366 !important;
    font-weight: 600 !important;
    text-transform: none !important;
    border-radius: 8px !important;
  }

  .whatsappBtn:hover {
    background: #1ebe5d !important;
  }
`;export{L as default};
