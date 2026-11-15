import{r as n,j as e,m as r,T as i,B as s,k as o,l as d,N as p,A as l,n as m,y as c}from"./index-C5SsuxOw.js";const h=[{id:1,name:"Tariq Mahmood (F-11, Islamabad)",review:"Sania Home Maid Services provided us with a very reliable and honest house maid. Highly satisfied with their verified staff.",image:"https://randomuser.me/api/portraits/men/11.jpg"},{id:2,name:"Ayesha Siddiqui (DHA Phase 2)",review:"Very happy with their babysitter and cook services. The staff is polite, hygienic, and well-trained.",image:"https://randomuser.me/api/portraits/women/24.jpg"},{id:3,name:"Dr. Kamran Ahmed (Bahria Town)",review:"We hired a home nurse and patient care attendant through Sania Home Maid Services. Truly caring and professional team.",image:"https://randomuser.me/api/portraits/men/32.jpg"},{id:4,name:"Samee Ullah",review:"Professional agency with fast response and excellent customer support in Islamabad and Rawalpindi.",image:"/images/finalimg/samee.jpg"}],g=()=>e.jsxs(x,{children:[e.jsxs(r.div,{className:"heading",initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[e.jsx(i,{variant:"h3",className:"mainHeading",children:"Our Testimonials"}),e.jsx(i,{className:"subHeading",children:"We are grateful for the trust and positive feedback from families across Islamabad and Rawalpindi using Sania Home Maid Services."})]}),e.jsx(s,{className:"reviewSlider",children:e.jsx(o,{modules:[d,p,l],spaceBetween:25,slidesPerView:3,breakpoints:{0:{slidesPerView:1},600:{slidesPerView:2},992:{slidesPerView:3}},pagination:{clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,children:h.map((a,t)=>e.jsx(m,{children:e.jsxs(r.div,{className:"reviewCard",initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.1,duration:.6},whileHover:{y:-10,scale:1.02},children:[e.jsx("div",{className:"avatarContainer",children:e.jsx("img",{src:a.image,alt:a.name,className:"avatar",loading:"lazy"})}),e.jsx(i,{variant:"h6",className:"reviewName",children:a.name}),e.jsx(i,{className:"reviewText",children:a.review})]})},a.id))})})]}),u=n.memo(g),x=c.section`
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
`;export{u as default};
