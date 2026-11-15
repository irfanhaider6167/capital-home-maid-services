import{c as o,j as a,u as h,s as c,r as f,B as s,T as r,a as n,L as i,b as g,W as b,C as u,y as j}from"./index-Dq6xUlSS.js";import{C as v,a as w}from"./CardContent-DvkCoc8_.js";import{C as N}from"./CardMedia-C2VZPJTW.js";const y=o([a.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),a.jsx("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime"),S=o(a.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack"),C=o(a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle"),I=o(a.jsx("path",{d:"M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2m-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m13-6v11c0 1.1-.9 2-2 2H4v-2h17V7z"}),"Payments"),k="923477054656",H=()=>{const{slug:l}=h(),t=c.find(e=>e.slug===l);if(f.useEffect(()=>{window.scrollTo(0,0),t&&(document.title=t.title)},[t,l]),!t)return a.jsx(d,{children:a.jsxs(s,{className:"notFound",children:[a.jsx(r,{variant:"h4",children:"Service Not Found"}),a.jsx(n,{component:i,to:"/services",variant:"contained",sx:{mt:2},children:"View All Services"})]})});const p=c.filter(e=>e.slug!==l).slice(0,3),m=encodeURIComponent(`Hello Sania Home Maid Services, I want to hire a ${t.name} (${t.salary}) in Islamabad/Rawalpindi.`);return a.jsx(d,{children:a.jsxs(s,{className:"container",children:[a.jsx(n,{component:i,to:"/services",startIcon:a.jsx(S,{}),className:"backBtn",children:"Back to All Services"}),a.jsxs(s,{className:"grid",children:[a.jsx("img",{src:t.imgurl,alt:`${t.name} - Sania Home Maid Services`,className:"heroImg"}),a.jsxs(s,{className:"info",children:[a.jsx(g,{label:"CNIC Verified Staff • Islamabad & Rawalpindi",className:"badge"}),a.jsxs(r,{variant:"h3",component:"h1",className:"title",children:[t.name," Services"]}),a.jsxs(s,{className:"salaryCard",children:[a.jsxs(s,{className:"salaryItem",children:[a.jsx(I,{className:"iconGold"}),a.jsxs("div",{children:[a.jsx(r,{className:"label",children:"Estimated Salary"}),a.jsx(r,{className:"value",children:t.salary})]})]}),a.jsxs(s,{className:"salaryItem",children:[a.jsx(y,{className:"iconGold"}),a.jsxs("div",{children:[a.jsx(r,{className:"label",children:"Duty Timing"}),a.jsx(r,{className:"value",children:t.shift})]})]})]}),a.jsx(r,{className:"desc",children:t.fullDesc}),a.jsx(r,{variant:"h6",className:"subTitle",children:"Key Responsibilities & Features:"}),a.jsx("ul",{className:"dutiesList",children:t.duties.map((e,x)=>a.jsxs("li",{children:[a.jsx(C,{className:"checkIcon"}),a.jsx("span",{children:e})]},x))}),a.jsxs(s,{className:"actions",children:[a.jsx(n,{component:"a",href:`https://wa.me/${k}?text=${m}`,target:"_blank",rel:"noopener noreferrer",variant:"contained",startIcon:a.jsx(b,{}),className:"waBtn",children:"Book on WhatsApp"}),a.jsx(n,{component:"a",href:"tel:+923477054656",variant:"outlined",startIcon:a.jsx(u,{}),className:"callBtn",children:"Call: 0347-7054656"}),a.jsxs(r,{sx:{mt:2.5,fontSize:"14px",color:"#4b5563"},children:[a.jsx("strong",{children:"Available Areas:"})," All Over Pakistan — Specially Islamabad, Rawalpindi & Lahore (DHA, Bahria Town, F-Sectors, Gulberg, Model Town & more)."]})]})]})]}),a.jsxs(s,{className:"relatedSection",children:[a.jsx(r,{variant:"h4",component:"h2",className:"relatedHeading",children:"Related Services"}),a.jsx(s,{className:"relatedGrid",children:p.map(e=>a.jsxs(v,{className:"relatedCard",children:[a.jsx(i,{to:`/services/${e.slug}`,className:"cardLink",children:a.jsx(N,{component:"img",image:e.imgurl,alt:`${e.name} - Sania Home Maid Services`,className:"relatedImg",loading:"lazy"})}),a.jsxs(w,{className:"relatedContent",children:[a.jsx(i,{to:`/services/${e.slug}`,className:"cardLink",children:a.jsx(r,{variant:"h6",className:"relatedTitle",children:e.name})}),a.jsx(r,{className:"relatedSalary",children:e.salary}),a.jsx(r,{className:"relatedDesc",children:e.shortDesc}),a.jsx(n,{component:i,to:`/services/${e.slug}`,variant:"outlined",fullWidth:!0,className:"relatedBtn",children:"View Details"})]})]},e.id))})]})]})})},d=j.section`
  padding: 60px 20px;
  background: #f9fafb;

  .container {
    max-width: 1100px;
    margin: auto;
  }

  .backBtn {
    margin-bottom: 25px;
    color: #0b2a5b !important;
    font-weight: 600 !important;
    text-transform: none !important;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: 40px;
    background: #ffffff;
    padding: 35px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  }

  .heroImg {
    width: 100%;
    height: 430px;
    object-fit: cover;
    border-radius: 16px;
  }

  .badge {
    background: #e0f2fe !important;
    color: #0b2a5b !important;
    font-weight: 600;
    margin-bottom: 14px;
  }

  .title {
    font-weight: 700;
    color: #0b2a5b;
    margin-bottom: 16px;
  }

  .salaryCard {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    background: #071426;
    color: #ffffff;
    padding: 16px 20px;
    border-radius: 14px;
    border-left: 4px solid #c59b43;
    margin-bottom: 20px;
  }

  .salaryItem {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 180px;
  }

  .iconGold {
    color: #f7d774;
    font-size: 28px !important;
  }

  .label {
    font-size: 12px !important;
    color: #cbd5e1;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .value {
    font-size: 15px !important;
    font-weight: 700 !important;
    color: #f7d774;
  }

  .desc {
    color: #4b5563;
    line-height: 1.8;
    margin-bottom: 22px;
    font-size: 16px;
  }

  .subTitle {
    font-weight: 700;
    color: #111827;
    margin-bottom: 12px;
  }

  .dutiesList {
    list-style: none;
    padding: 0;
    margin: 0 0 28px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .dutiesList li {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #374151;
    font-size: 15px;
  }

  .checkIcon {
    color: #25d366;
    font-size: 20px !important;
  }

  .actions {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .waBtn {
    background: #25d366 !important;
    font-weight: 600 !important;
    padding: 12px 24px !important;
    border-radius: 10px !important;
    text-transform: none !important;
  }

  .callBtn {
    border-color: #0b2a5b !important;
    color: #0b2a5b !important;
    font-weight: 600 !important;
    padding: 12px 24px !important;
    border-radius: 10px !important;
    text-transform: none !important;
  }

  /* Related Services Styles */
  .relatedSection {
    margin-top: 65px;
  }

  .relatedHeading {
    font-weight: 700;
    color: #0b2a5b;
    margin-bottom: 25px;
    text-align: center;
  }

  .relatedGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .relatedCard {
    border-radius: 16px !important;
    overflow: hidden;
    background: #ffffff !important;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06) !important;
    transition: transform 0.25s ease;
    display: flex;
    flex-direction: column;
  }

  .relatedCard:hover {
    transform: translateY(-6px);
  }

  .cardLink {
    text-decoration: none;
    color: inherit;
  }

  .relatedImg {
    width: 100%;
    height: 185px;
    object-fit: cover;
  }

  .relatedContent {
    padding: 18px !important;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .relatedTitle {
    font-weight: 700 !important;
    color: #0b2a5b;
    margin-bottom: 6px !important;
  }

  .relatedSalary {
    font-size: 13px !important;
    font-weight: 700 !important;
    color: #92400e;
    background: #fef9c3;
    display: inline-block;
    padding: 3px 10px;
    border-radius: 6px;
    margin-bottom: 10px !important;
    align-self: flex-start;
  }

  .relatedDesc {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px !important;
    flex-grow: 1;
  }

  .relatedBtn {
    border-color: #0b2a5b !important;
    color: #0b2a5b !important;
    font-weight: 600 !important;
    text-transform: none !important;
    border-radius: 8px !important;
  }

  .notFound {
    text-align: center;
    padding: 80px 20px;
  }

  @media (max-width: 850px) {
    .grid {
      grid-template-columns: 1fr;
      padding: 20px;
    }

    .heroImg {
      height: 260px;
    }

    .title {
      font-size: 1.8rem !important;
    }

    .relatedGrid {
      grid-template-columns: 1fr;
    }
  }
`;export{H as default};
