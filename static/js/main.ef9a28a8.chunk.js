(this["webpackJsonpua-portfolio"]=this["webpackJsonpua-portfolio"]||[]).push([[0],{43:function(e,t,a){},47:function(e,t,a){},53:function(e,t,a){e.exports=a.p+"static/media/sortingAlgo.6a0fd2f4.png"},65:function(e,t,a){e.exports=a(87)},70:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},83:function(e,t,a){e.exports=a.p+"static/media/chatapp.d19c8829.png"},84:function(e,t,a){e.exports=a.p+"static/media/CCSpic.a8aab414.png"},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),i=a.n(l),c=(a(70),a(16));var o=function(e){return r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},r.a.createElement(c.b,{to:"/"},r.a.createElement("h2",null,"UMER AHMED"))),r.a.createElement("div",{className:"tabs"},r.a.createElement(c.b,{to:"/experience",className:1===e.sel?"underline":""},r.a.createElement("h2",null,"experience")),r.a.createElement(c.b,{to:"/projects",className:2===e.sel?"underline":""},r.a.createElement("h2",null,"projects"))))},s=a(4),u=a(48),d=a.n(u),m=a(35);function p(e){var t=r.a.useState(!1),a=Object(m.a)(t,2),n=a[0],l=a[1],i=r.a.useRef();return r.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&l(e.isIntersecting)}))}));return e.observe(i.current),function(){return e.unobserve(i.current)}}),[]),r.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),style:{transitionDelay:"".concat(e.delay)},ref:i},e.children)}var f,h=a(57),g=(a(78),function(e){e.setup=function(){e.createCanvas(400,400,"transparent"),f=e.PI/4,e.stroke(0)},e.draw=function(){e.clear(),e.translate(200,e.height),f=e.map(e.sin(.01*e.frameCount),-1,1,e.PI/2,e.PI/16),function t(a){e.line(0,0,0,-a),e.translate(0,-a),a>4&&(e.push(),e.rotate(f),t(.67*a),e.pop(),e.push(),e.rotate(-f),t(.67*a),e.pop())}(100)}}),E=function(){return r.a.createElement("div",{id:"fractal-tree"},r.a.createElement(h.a,{sketch:g}))},v=a(50),b=a.n(v),y=a(52),w=a.n(y),k=a(51),j=a.n(k);a(79),a(80),a(81);var N=function(){var e=[r.a.createElement(c.b,{to:"/experience"},r.a.createElement("h1",null,"Experience")),r.a.createElement(c.b,{to:"/projects"},r.a.createElement("h1",null,"Projects")),r.a.createElement("div",{className:"sidebar-logos",href:"/"},r.a.createElement("a",{href:"mailto:umer99ahmed@gmail.com",target:"_blank"},r.a.createElement(b.a,{style:{padding:5,fontSize:23}})),r.a.createElement("a",{href:"https://github.com/umer99ahmed",target:"_blank"},r.a.createElement(j.a,{style:{padding:5,fontSize:22}})),r.a.createElement("a",{href:"https://www.linkedin.com/in/umer-ahmed/",target:"_blank"},r.a.createElement(w.a,{style:{padding:5,fontSize:24}})))];return r.a.createElement("div",{className:"homebox"},r.a.createElement("div",{className:"intro"},r.a.createElement(E,null),r.a.createElement(d.a,{avgTypingDelay:120},r.a.createElement("span",{className:"intro-title"},"Hi, I am ",r.a.createElement("span",{className:"intro-name"},"Umer"),".")),r.a.createElement(p,null,r.a.createElement("div",{className:"intro-desc"},"a software engineer who likes building cool stuff with code. I have an interest in full-stack development, artificial intelligence, design, and everything in between."))),r.a.createElement("div",{className:"links"},e.map((function(e,t){return r.a.createElement(p,{delay:"".concat(t+1,"00ms")},r.a.createElement("div",null,e))}))))};var S=function(e){var t=e.tools.map((function(e,t){return r.a.createElement("div",{key:t,className:"tool"},r.a.createElement("h4",null,e))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.image,")"),backgroundColor:"".concat(e.color)},className:"projectBox"},r.a.createElement("a",{className:"button",target:"_blank",href:e.link},e.name)),r.a.createElement("div",{className:"projectAbout"},r.a.createElement("p",null," ",e.about)),r.a.createElement("div",{className:"projectInfo"},t,r.a.createElement("div",{className:"gitlink"},r.a.createElement("a",{target:"_blank",href:e.gitlink},r.a.createElement("h4",null,"github \ud83e\udc46")))))},I=(a(43),a(53)),x=a.n(I);a(83);var O=function(){return r.a.createElement("div",{className:"sectionContainer"},r.a.createElement(S,{name:"Sorting Algorithm Visualizer",image:x.a,about:"An algorithm visualizer that displays the steps a sorting algorithm takes to find a solution.",link:"https://umer99ahmed.github.io/sorting-algorithm-visualizer/#/",tools:["ReactJS","HTML/CSS"],gitlink:"https://github.com/umer99ahmed/sorting-algorithm-visualizer"}))};a(47),a(84);var C=a(54),R=a(55),z=a(34),D=a(58),T=a(56),A=a(59),L=a(109),M=a(112),P=a(110),_=a(108),B=a(111),J=["children","value","index"],q=window.innerWidth<600;function H(e){var t=e.children,a=e.value,n=e.index,l=Object(A.a)(e,J);return q?r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},l),a===n&&r.a.createElement(B.a,{p:3},r.a.createElement(_.a,null,t))):r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel"},l),a===n&&r.a.createElement(B.a,{p:3},r.a.createElement(_.a,null,t)))}var K=Object(L.a)((function(e){return{root:{flexGrow:1,display:"flex",height:300},tabs:{borderRight:"0px solid ".concat(e.palette.divider)}}})),Q=function(){var e=K(),t=r.a.useState(0),a=Object(m.a)(t,2),n=a[0],l=a[1],i={Cisco:{jobTitle:"Software Engineer @",duration:"May 2022 - PRESENT",desc:["Developed and optimized network control plane components within Cisco\u2019s IOS-XR router operating system, including the Routing Information Base (RIB) and Label Switching Database (MPLS-LSD), using C.","Developed automation unit tests for code committed to the IOS-XR codebase achieving >80% code coverage.","Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.","Occupied a triage prime role where I led meetings, assigned bugs and brainstormed on solutions for technical issues."]},Kenna:{jobTitle:"Full Stack Developer @",duration:"Jan 2021 - Aug 2021",desc:["Developed and maintained a live web application used by account managers for data collection and integration using React, Redux, Node.js, and SQL Server Management Studio.","Optimized and created server-side API's, SQL queries, and stored procedures to efficiently retrieve and display large data-sets on to the client-side.","Led a successful team initiative to integrate pagination on front-end data grids, resulting in a significant (>90%) decrease in page render times and reduction in SQL query times.","Iterated and reorganized quickly on users and senior developer feedback through weekly technical demos."]},"University of Guelph":{jobTitle:"IT Consultant @",duration:"May 2019 - Dec 2019",desc:["Provided technical support and resolved a wide range software, networking, account, and security related issues for university staff, faculty, and students through effective communication and collaboration with clients and IT analysts.","Initiated and developed a comprehensive departmental web page, complete with important links, contacts, and knowledge bases, which was used to assist student IT consultants in troubleshooting issues."]}};return r.a.createElement("div",{className:e.root},r.a.createElement(M.a,{orientation:q?null:"vertical",variant:q?"fullWidth":"scrollable",value:n,onChange:function(e,t){l(t)},className:e.tabs},Object.keys(i).map((function(e,t){return r.a.createElement(P.a,Object.assign({label:q?"0".concat(t,"."):e},(a=t,q?{id:"full-width-tab-".concat(a),"aria-controls":"full-width-tabpanel-".concat(a)}:{id:"vertical-tab-".concat(a)})));var a}))),Object.keys(i).map((function(e,t){return r.a.createElement(H,{value:n,index:t},r.a.createElement("span",{className:"joblist-job-title"},i[e].jobTitle+" "),r.a.createElement("span",{className:"joblist-job-company"},e),r.a.createElement("div",{className:"joblist-duration"},i[e].duration),r.a.createElement("ul",{className:"job-description"},i[e].desc.map((function(e,t){return r.a.createElement(p,{delay:"".concat(t+1,"00ms")},r.a.createElement("li",{key:t},e))}))))})))},U=function(e){Object(D.a)(a,e);var t=Object(T.a)(a);function a(){var e;return Object(C.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(z.a)(e)),e}return Object(R.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return r.a.createElement("div",{id:"experience"},r.a.createElement(p,null,r.a.createElement(Q,null)))}}]),a}(r.a.Component);var F=function(){return r.a.createElement("div",{className:"sectionContainer"},r.a.createElement(U,null))};var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(s.a,{path:"/experience"},r.a.createElement(o,{sel:1}),r.a.createElement(F,null)),r.a.createElement(s.a,{path:"/projects"},r.a.createElement(o,{sel:2}),r.a.createElement(O,null))))};i.a.render(r.a.createElement(c.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null))),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.ef9a28a8.chunk.js.map