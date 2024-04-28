import{u as i,L as y,d as v,b as S,B as $,D as P,E as d,F as B,G as E,r as u,j as e,z as C,l as g}from"./index-168495d8.js";import{d as U,b as R,t as W,a as F,m as T}from"./BackgroundDesktopIn-43442101.js";const q=i.section`
  display: flex;
  flex-direction: column-reverse;

  padding-top: 24px;

  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    background-repeat: no-repeat;
    background-image: url(${U});
  }
`,z=i.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;
  align-items: flex-start;
  background-image: url(${R});

  @media screen and (min-width: 768px) {
    position: relative;
    background-image: url(${W});
    width: 720px;
    height: 658px;
    background-position: -35px;
    background-position: -35px;
    background-position-y: -70px;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    background-image: none;

    padding-top: 135px;
    padding-left: 840px;

    background: url(${F});
    background-repeat: no-repeat;

    width: 1404px;
    height: 582px;
  }
`,L=i.div`
  background-image: url(${T});
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  height: 210px;
  background-position: center center;

  @media screen and (min-width: 768px) {
    background-image: none;
  }
`,V=i.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: var(--primery-color-black);
`,p=i.label`
  display: flex;
  gap: 160px;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  color: var(--primery-color-black);
`,l=i.input`
  border: 1px solid ${t=>t.$error?"red":"#d7e3ff"};

  border-radius: 6px;
  padding: 12px 10px;
  width: 280px;
  height: 44px;
  background: var(--primery-color-white);
  outline: none;

  @media screen and (min-width: 768px) {
    border: 1px solid ${t=>t.$error?"red":"#d7e3ff"};

    border-radius: 6px;
    padding: 12px 10px;
    width: 336px;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
    border: 1px solid ${t=>t.$error?"red":"#d7e3ff"};
    border-radius: 6px;
    padding: 12px 10px;
    width: 384px;
    height: 44px;
  }
`,I=i.button`
  width: 280px;
  height: 36px;
  padding: 10px;

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: var(--primery-color-blue);

  color: var(--primery-color-white);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  transition: box-shadow 500ms ease-in-out;

  &:hover {
    box-shadow: 0 4px 14px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    border-radius: 10px;
    padding: 10px 30px;
    width: 336px;
    height: 44px;
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    background: #407bff;
  }

  @media screen and (min-width: 1440px) {
    border-radius: 10px;
    padding: 10px 30px;
    width: 384px;
    height: 44px;
  }
`,w=i.span`
  display: flex;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;

    fill: transparent;

    stroke: #407bff;
  }

  @media screen and (min-width: 1440px) {
    right: -30px;
  }
`,x=i.div`
  -webkit-text-fill-color: red;

  margin-bottom: 10px;
`,D=i.form`
  display: flex;

  flex-direction: column;
  justify-content: center;

  gap: 16px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 336px;
  }
`,G=i(y)`
  display: flex;
  align-items: center;
`,M=i.p`
  color: var(--primery-color-blue);
  font-size: 16px;
  transition: color 500ms ease-in-out;

  &:hover {
    color: var(--secondary-color-5);
  }
`,n=i.div`
  position: absolute;

  background-color: #79b8ff;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  animation: waterEffect 5s infinite alternate;
  @keyframes waterEffect {
    from {
      background-color: #407bff;
    }
    to {
      background-color: #f3ecec;
    }
  }
`,O=i(n)`
  @media screen and (min-width: 768px) {
    top: 210px;
    left: 500px;
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 1440px) {
    top: 180px;
    left: 480px;
    width: 20px;
    height: 20px;
  }
`,Y=i(n)`
  @media screen and (min-width: 768px) {
    top: 43%;
    left: 56%;
    width: 27px;
    height: 27px;
  }
  @media screen and (min-width: 1440px) {
    top: 47.5%;
    left: 25.7%;
    width: 27px;
    height: 27px;
  }
`,A=i(n)`
  @media screen and (min-width: 768px) {
    top: 60%;
    left: 50%;
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 1440px) {
    top: 71%;
    left: 22%;
    width: 20px;
    height: 20px;
  }
`,H=i(n)`
  @media screen and (min-width: 768px) {
    top: 72%;
    left: 66.5%;
    width: 27px;
    height: 27px;
  }
  @media screen and (min-width: 1440px) {
    top: 76%;
    left: 28.6%;
    width: 27px;
    height: 27px;
  }
`,J=i(n)`
  @media screen and (min-width: 768px) {
    top: 64.2%;
    left: 61.4%;
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 1440px) {
    top: 87%;
    left: 31.7%;
    width: 40px;
    height: 40px;
  }
`,Q=()=>{const t=v(),{t:a}=S(),r=$({initialValues:{email:"",password:"",repeatPassword:""},validationSchema:P({email:d().email(a("Invalid email address")).required(a("Required")),password:d().min(6,a("Password must be at least 6 characters")).required(a("Required")),repeatPassword:d().oneOf([B("password"),null],a("Passwords must match")).required(a("Required"))}),onSubmit:(s,{setSubmitting:m})=>{t(E({email:s.email,password:s.password})).then(o=>{o.error&&o.error.message==="Rejected"&&r.setFieldError("email",a("This email is already registered")),m(!1)}).catch(o=>{o.response&&o.response.status===409?r.setFieldError("email",a("This email is already registered")):console.error(`${a("Error:")} ${o}`),m(!1)})}}),[h,b]=u.useState(!1),[c,f]=u.useState(!1),k=()=>{b(s=>!s)},j=()=>{f(s=>!s)};return e.jsx(C,{children:e.jsxs(q,{children:[e.jsx(L,{}),e.jsxs(z,{children:[e.jsx(V,{children:a("Sign Up")}),e.jsx(O,{}),e.jsx(Y,{}),e.jsx(A,{}),e.jsx(H,{}),e.jsx(J,{}),e.jsxs(D,{onSubmit:r.handleSubmit,children:[e.jsx(p,{children:a("Enter your email")}),e.jsx(l,{type:"email",name:"email",placeholder:"E-mail",value:r.values.email,onChange:r.handleChange,onBlur:r.handleBlur,$error:r.touched.email&&r.errors.email}),r.touched.email&&r.errors.email&&e.jsx(x,{children:r.errors.email}),e.jsx(p,{children:a("Enter your password")}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(l,{type:h?"text":"password",name:"password",placeholder:a("Password"),value:r.values.password,onChange:r.handleChange,onBlur:r.handleBlur,$error:r.touched.password&&r.errors.password}),e.jsx(w,{type:"button",onClick:k,children:e.jsx("svg",{children:e.jsx("use",{href:`${g}#${h?"eye":"eye-slash"}`})})})]}),r.touched.password&&r.errors.password&&e.jsx(x,{children:r.errors.password}),e.jsx(p,{children:a("Repeat password")}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(l,{type:c?"text":"password",name:"repeatPassword",placeholder:a("Repeat Password"),value:r.values.repeatPassword,onChange:r.handleChange,onBlur:r.handleBlur,$error:r.touched.repeatPassword&&r.errors.repeatPassword}),e.jsx(w,{type:"button",onClick:j,children:e.jsx("svg",{children:e.jsx("use",{href:`${g}#${c?"eye":"eye-slash"}`})})})]}),r.touched.repeatPassword&&r.errors.repeatPassword&&e.jsx(x,{children:r.errors.repeatPassword}),e.jsx(I,{type:"submit",disabled:!r.isValid||r.isSubmitting,children:a("Sign Up")}),e.jsx(G,{to:"/signin",children:e.jsx(M,{children:a("Sign In")})})]})]})]})})};export{Q as default};
