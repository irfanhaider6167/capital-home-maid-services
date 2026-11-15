import{r as d,j as a,m as r,T as t,B as n,s as p,L as i,a as o,y as m}from"./index-Dq6xUlSS.js";import{C as l,a as x}from"./CardContent-DvkCoc8_.js";import{C as h}from"./CardMedia-C2VZPJTW.js";const g="923477054656",b=()=>a.jsxs(u,{children:[a.jsxs(r.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[a.jsx(t,{variant:"h3",className:"heading",children:"Our Services"}),a.jsx(t,{className:"subHeading",children:"Sania Home Maid Services provides CNIC-verified maids, cooks, nurses, babysitters, drivers & security guards all over Pakistan — with same-day placement in Islamabad, Rawalpindi & Lahore."})]}),a.jsx(n,{className:"cardContainer",children:p.map((e,s)=>{const c=`Hello Sania Home Maid Services, I am interested in hiring a ${e.name}.`;return a.jsx(r.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:s*.05},whileHover:{y:-8},children:a.jsxs(l,{className:"serviceCard",children:[a.jsx(i,{to:`/services/${e.slug}`,className:"cardLink",children:a.jsx(h,{component:"img",image:e.imgurl,alt:e.name,className:"serviceImage",loading:"lazy"})}),a.jsxs(x,{className:"cardContent",children:[a.jsx(i,{to:`/services/${e.slug}`,className:"cardLink",children:a.jsx(t,{variant:"h5",className:"serviceTitle",children:e.name.toUpperCase()})}),a.jsx(t,{className:"serviceDescription",children:e.shortDesc}),a.jsxs(n,{className:"btnGroup",children:[a.jsx(o,{component:i,to:`/services/${e.slug}`,variant:"outlined",className:"detailsBtn",children:"View Details"}),a.jsx(o,{component:"a",href:`https://wa.me/${g}?text=${encodeURIComponent(c)}`,target:"_blank",rel:"noopener noreferrer",variant:"contained",className:"whatsappBtn",children:"WhatsApp"})]})]})]})},e.id)})})]}),j=d.memo(b),u=m.section`
  padding: 20px 20px;
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

  .cardLink {
    text-decoration: none;
    color: inherit;
  }

  .serviceImage {
    width: 100%;
    height: 220px;
    object-fit: cover;
    object-position: center;
  }

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
    color: #0b2a5b;
  }

  .serviceDescription {
    color: #6b7280;
    margin-bottom: 18px !important;
    line-height: 1.6;
  }

  .btnGroup {
    display: flex;
    gap: 10px;
  }

  .detailsBtn {
    flex: 1;
    border-color: #0b2a5b !important;
    color: #0b2a5b !important;
    font-weight: 600 !important;
    text-transform: none !important;
    border-radius: 8px !important;
  }

  .whatsappBtn {
    flex: 1;
    background: #25d366 !important;
    font-weight: 600 !important;
    text-transform: none !important;
    border-radius: 8px !important;
  }

  .whatsappBtn:hover {
    background: #1ebe5d !important;
  }
`;export{j as default};
