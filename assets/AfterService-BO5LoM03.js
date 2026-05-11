import{e as i,j as e,r as o,m as r,T as a,B as s,y as d}from"./index-CJ4cUIHA.js";import{C as c,a as l}from"./CardContent-D-u9W4kv.js";const p=i(e.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m3.3 14.71L11 12.41V7h2v4.59l3.71 3.71z"}),"AccessTimeFilled"),h=i(e.jsx("path",{d:"m19.83 7.5-2.27-2.27c.07-.42.18-.81.32-1.15.08-.18.12-.37.12-.58 0-.83-.67-1.5-1.5-1.5-1.64 0-3.09.79-4 2h-5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10v-2h2v2h5.5l1.68-5.59 2.82-.94V7.5zM13 9H8V7h5zm3 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"}),"Savings"),x=i(e.jsx("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z"}),"Security"),m=i(e.jsx("path",{d:"M9.68 13.69 12 11.93l2.31 1.76-.88-2.85L15.75 9h-2.84L12 6.19 11.09 9H8.25l2.31 1.84zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2 6 2v-7.72c1.24-1.41 2-3.25 2-5.28m-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6"}),"WorkspacePremium"),g=[{heading:"Expert Staff",text:"Our trained and experienced staff provide professional home maid services with care and responsibility.",icon:e.jsx(m,{})},{heading:"Secure Services",text:"We provide trusted, verified, and reliable domestic staff for your safety and peace of mind.",icon:e.jsx(x,{})},{heading:"Affordable Pricing",text:"Get reliable and affordable maid services in Pakistan at competitive rates.",icon:e.jsx(h,{})},{heading:"Always On Time",text:"We value punctuality and ensure timely service for every client and household.",icon:e.jsx(p,{})}],f=()=>e.jsxs(u,{children:[e.jsxs(r.div,{className:"headingContainer",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},children:[e.jsx(a,{variant:"h3",className:"heading",children:"Why Choose Us"}),e.jsx(a,{className:"subHeading",children:"We provide professional, trusted, and affordable home maid services with complete customer satisfaction."})]}),e.jsx(s,{className:"cardContainer",children:g.map((t,n)=>e.jsx(r.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:n*.15},whileHover:{y:-10,scale:1.03},children:e.jsx(c,{className:"card",children:e.jsxs(l,{children:[e.jsx("div",{className:"iconBox",children:t.icon}),e.jsx(a,{variant:"h5",className:"cardHeading",children:t.heading}),e.jsx(a,{className:"cardText",children:t.text})]})})},n))})]}),b=o.memo(f),u=d.section`
  padding: 90px 20px;

  background: linear-gradient(180deg, #ffffff, #f3f4f6);

  .headingContainer {
    text-align: center;

    max-width: 750px;

    margin: auto;

    margin-bottom: 60px;
  }

  .heading {
    font-weight: 700;

    color: #111827;

    margin-bottom: 16px;
  }

  .subHeading {
    color: #6b7280;

    line-height: 1.8;

    font-size: 17px;
  }

  .cardContainer {
    display: flex;

    justify-content: center;

    gap: 2rem;

    flex-wrap: wrap;
  }

  .card {
    width: 290px;

    padding: 30px 20px;

    border-radius: 24px !important;

    background: white !important;

    text-align: center;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;

    transition: 0.3s ease !important;

    overflow: hidden;

    position: relative;
  }

  .card::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 5px;

    background: linear-gradient(90deg, #25d366, #16a34a);
  }

  .iconBox {
    width: 75px;
    height: 75px;

    margin: auto;

    margin-bottom: 22px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(135deg, #25d366, #16a34a);

    color: white;

    font-size: 2rem;

    box-shadow: 0 10px 20px rgba(37, 211, 102, 0.25);
  }

  .cardHeading {
    font-weight: 700 !important;

    color: #111827;

    margin-bottom: 16px !important;
  }

  .cardText {
    color: #6b7280;

    line-height: 1.8;

    font-size: 15px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    padding: 70px 15px;

    .heading {
      font-size: 2rem !important;
    }

    .subHeading {
      font-size: 15px;
    }

    .card {
      width: 100%;
    }
  }
`;export{b as default};
