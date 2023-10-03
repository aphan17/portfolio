(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(3),s=n(1),i=n(0),l=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(a.a)(n,2),r=c[0],o=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://aphan17.github.io/",j="AP.",h="Ashley Phan",b="Full Stack Software Engineer",d="I'm a Seattle-based software engineer who embarked on a career transition from healthcare to software development. Through my work in healthcare, I had a strong desire to improve access to quality resources for individuals. However, I realized that I could have an even greater impact by utilizing software to help bridge this gap. In the past year, I have been developing and furthering my skills by self-learning with resources like The Odin Project, taking Udemy courses, and recently completing the Hack Reactor Bootcamp. I'm excited to combine my past experiences with my newly acquired technical skills, aiming to craft inventive solutions and create a significant and positive impact.",m="",u={linkedin:"https://www.linkedin.com/in/ashleyphan-/",github:"https://github.com/aphan17"},O=[{name:"The Bench",description:"A social media platform connecting gym-goers.",stack:["React","FastAPI","Python","JavaScript","PostgreSQL","Docker"],sourceCode:"https://gitlab.com/macd-may/module3-project-gamma",livePreview:"https://macd-may.gitlab.io/module3-project-gamma/"},{name:"Trail Tales",description:"A web blog application for local hikers in the Seattle Area",stack:["HTML","CSS","Django","Python"],sourceCode:"https://github.com/aphan17/trail-tales"},{name:"Flow",description:"A task manager application designed for project planning and tracking",stack:["HTML","CSS","Django","Python"],sourceCode:"https://github.com/aphan17/flow"}],p=["HTML","CSS","JavaScript","React","Git","CI/CD","Python","Django","FastAPI"],x="ashleyphan17@gmail.com",f=n(16),g=n.n(f),k=n(14),v=n.n(k),N=n(18),_=n.n(N),w=n(17),y=n.n(w),C=(n(28),function(){var e=Object(s.useContext)(l),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(s.useState)(!1),o=Object(a.a)(r,2),j=o[0],h=o[1],b=function(){return h(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,p.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,x?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(v.a,{}):Object(i.jsx)(g.a,{})}),Object(i.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(y.a,{}):Object(i.jsx)(_.a,{})})]})}),S=(n(32),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(C,{})]})}),P=n(11),I=n.n(P),T=n(19),A=n.n(T),E=(n(33),function(){var e=h,t=b,n=d,c=m,a=u;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(i.jsxs)(i.Fragment,{children:[a.github&&Object(i.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(I.a,{})}),a.linkedin&&Object(i.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(A.a,{})})]})]})]})}),L=n(7),H=n.n(L),D=n(20),F=n.n(D),J=(n(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},H()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(I.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(F.a,{})})]})}),M=(n(36),function(){return O.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(i.jsx)(J,{project:e},H()())}))})]}):null}),R=(n(37),function(){return p.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},H()())}))})]}):null}),z=n(21),B=n.n(z),q=(n(38),function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(B.a,{fontSize:"large"})})}):null}),G=(n(39),function(){return x?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(x),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Q=(n(40),function(){return Object(i.jsx)("footer",{className:"footer"})}),U=(n(41),function(){var e=Object(s.useContext)(l),t=Object(a.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(S,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(E,{}),Object(i.jsx)(M,{}),Object(i.jsx)(R,{}),Object(i.jsx)(G,{})]}),Object(i.jsx)(q,{}),Object(i.jsx)(Q,{})]})});n(42);Object(c.render)(Object(i.jsx)(r,{children:Object(i.jsx)(U,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.2a9c1410.chunk.js.map