import{n as i,L as w,b,d as f,r as x,B as k,j as e,z as y,l as j,C as v,q as S}from"./index-168495d8.js";import{d as B,b as E,t as I,a as C,m as $}from"./BackgroundDesktopIn-43442101.js";const W=i.div``,P=i.section`
  display: flex;
  flex-direction: column-reverse;

  padding-top: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;

    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    background-repeat: no-repeat;
    background-image: url(${B});
  }
`,T=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: flex-start;
  background-image: url(${E});

  @media screen and (min-width: 768px) {
    position: relative;
    background-image: url(${I});
    width: 720px;
    height: 658px;
    background-position: -35px;
    background-position-y: -70px;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    background-image: none;

    padding-top: 135px;
    padding-left: 840px;

    background: url(${C});
    background-repeat: no-repeat;

    width: 1404px;
    height: 582px;
  }
`,L=i.div`
  background-image: url(${$});
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  height: 210px;
  background-position: center center;

  @media screen and (min-width: 768px) {
    background-image: none;
  }
`,z=i.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: var(--primery-color-black);
`,c=i.label`
  display: flex;
  gap: 16px;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  color: var(--primery-color-black);
`,h=i.input`
  border: 1px solid ${n=>n.error?"red":"#d7e3ff"};
  border-radius: 6px;
  padding: 12px 10px;
  width: 280px;
  height: 44px;
  background: var(--primery-color-white);
  outline: none;

  @media screen and (min-width: 768px) {
    border: 1px solid ${n=>n.error?"red":"#d7e3ff"};
    border-radius: 6px;
    padding: 12px 10px;
    width: 336px;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
    border: 1px solid ${n=>n.error?"red":"#d7e3ff"};
    border-radius: 6px;
    padding: 12px 10px;
    width: 384px;
    height: 44px;
  }
`,F=i.button`
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
`,V=i.button`
  display: flex;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  svg {
    width: 16px;
    height: 16px;

    fill: transparent;

    stroke: #407bff;
    background-color: #fff;
  }

  @media screen and (min-width: 1440px) {
    right: -30px;
  }
`,d=i.div`
  color: red;
  margin-top: 5px;
`,q=i.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 16px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 336px;
  }
`,D=i(w)`
  display: flex;
  align-items: center;
`,G=i.p`
  color: var(--primery-color-blue);
  font-size: 16px;
  transition: color 500ms ease-in-out;

  &:hover {
    color: var(--secondary-color-5);
  }
`,o=i.div`
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
`,M=i(o)`
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
`,R=i(o)`
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
`,U=i(o)`
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
`,Y=i(o)`
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
`,A=i(o)`
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
`,K=()=>{const{t:n}=b(),s=f(),[p,m]=x.useState(!1),[g,l]=x.useState(""),u=()=>{m(t=>!t)},r=k({initialValues:{email:"",password:""},validate:t=>{const a={};return(!t.email||!t.email.includes("@"))&&(a.email=n("Email is invalid")),(!t.password||t.password.length<6)&&(a.password=n("Password is invalid")),a},onSubmit:async t=>{try{if(!t.password){l("Password is required");return}await s(v({email:t.email,password:t.password})),await s(S())}catch{l("Invalid email or password. Please try again.")}}});return e.jsx(W,{children:e.jsx(y,{children:e.jsxs(P,{children:[e.jsx(L,{}),e.jsxs(T,{children:[e.jsx(z,{children:n("Sign In")}),e.jsx(M,{}),e.jsx(R,{}),e.jsx(U,{}),e.jsx(Y,{}),e.jsx(A,{}),e.jsxs(q,{onSubmit:r.handleSubmit,children:[e.jsx(c,{children:n("Enter your email")}),e.jsx(h,{type:"email",name:"email",placeholder:"E-mail",value:r.values.email,onChange:r.handleChange,onBlur:r.handleBlur,autoComplete:"email",error:r.touched.email&&r.errors.email}),r.touched.email&&r.errors.email&&e.jsx(d,{children:r.errors.email}),e.jsx(c,{children:n("Enter your password")}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(h,{type:p?"text":"password",name:"password",placeholder:n("Password"),value:r.values.password,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.password&&r.errors.password}),e.jsx(V,{type:"button",onClick:u,children:e.jsx("svg",{children:e.jsx("use",{href:`${j}#${p?"eye":"eye-slash"}`})})})]}),r.touched.password&&r.errors.password&&e.jsx(d,{children:r.errors.password}),g&&e.jsx(d,{children:"(loginError)"})," ",e.jsx(F,{type:"submit",disabled:!r.isValid,children:n("Sign In")})]}),e.jsx(D,{to:"/signup",children:e.jsx(G,{children:n("Sign Up")})})]})]})})})};export{K as default};
