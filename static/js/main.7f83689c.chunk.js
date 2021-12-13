(this["webpackJsonpromeshdhananjaya.com"]=this["webpackJsonpromeshdhananjaya.com"]||[]).push([[0],{29:function(e,t,r){},30:function(e,t,r){},37:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){},46:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(18),c=r.n(i),s=(r(29),r(62)),o=r(63),l=(r(30),r(60)),d=r(61),p=r(1);function h(){return Object(p.jsxs)("div",{className:"socialButton",children:[Object(p.jsx)("a",{href:"https://www.linkedin.com/in/romeshdhananjaya/",target:"_blank",rel:"noreferrer noopener",children:Object(p.jsx)("span",{children:Object(p.jsx)(l.a,{})})}),Object(p.jsx)("a",{href:"https://twitter.com/RskRoma",target:"_blank",rel:"noreferrer noopener",children:Object(p.jsx)("span",{children:Object(p.jsx)(d.a,{})})})]})}function y(){return Object(p.jsx)("div",{className:"topbar ",children:Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("a",{href:"/",className:"logo",children:"Romesh Dhananjaya"}),Object(p.jsxs)("div",{className:"itemContainer",children:[Object(p.jsx)(s.a,{className:"icon"}),Object(p.jsx)("span",{children:"+65 81226123"})]}),Object(p.jsxs)("div",{className:"itemContainer",children:[Object(p.jsx)(o.a,{className:"icon"}),Object(p.jsx)("span",{children:"romesh.d.sg@gmail.com"})]})]}),Object(p.jsx)("div",{className:"right",children:Object(p.jsx)("div",{children:Object(p.jsx)(h,{})})})]})})}var j=r(22),u=r(11),f=r.n(u),m=r(12),b=(r(37),[{id:1,date:{year:"2021",month:"September",day:"10"},title:"How to retry on service when failure happens.",body:[{type:"paragraph",text:"We can find many use cases where we need to retry on some services or APIs when there is an error in the api. It might be a network failure or any application failure. So today I am going to explain a way to retry with a Java Spring application."},{type:"paragraph",text:"Before everything we need to initialize a Java spring project and for that I am going to use Spring Initializer(https://start.spring.io/). If you need to know more about generating projects with Spring initializer please check this link."},{type:"paragraph",text:"Of course then we need to add a couple dependencies to the pom.xml file."},{type:"paragraph",text:"This is for the retry."},{type:"code",text:"\n<dependency>\n  <groupId>org.springframework.retry</groupId>\n  <artifactId>spring-retry</artifactId>\n  <version>1.2.5.RELEASE</version>\n</dependency>"},{type:"paragraph",text:"And this is to add Spring AOP."},{type:"code",text:"\n<dependency>\n  <groupId>org.springframework</groupId>\n  <artifactId>spring-aspects</artifactId>\n  <version>5.2.8.RELEASE</version>\n</dependency>"},{type:"paragraph",text:"Next We need to create a configuration class and later we use this to create the RetryTemplate bean. Let\u2019s name this class as RetryConfig. \n      We have to annotate this call with @Configuration and @EnableRetry annotations."},{type:"code",text:'@Configuration\n      @EnableRetry\n      @ConfigurationProperties("retry-config")\n      public class RetryConfig {\n      }'},{type:"paragraph",text:"Our next step would be defining the bean. So Let\u2019s create a method for that and I am giving the name retryTemplate. This method should return a RetryTemplate object."},{type:"code",text:"@Bean\n  public RetryTemplate retryTemplate() {\n}"},{type:"paragraph",text:"Then we need to create a BackOffPolicy and a RetryPolicy. With BackOffPolicy we can decide the wait time before the next retry. \n      When creating a BackOffPolicy we need to provide a backoff period in milliseconds as long value and the default value is 1000l (1000 millisecond). \n      There are different types of BackOffPolicies and for simplicity let\u2019s use FixedBackOffPolicy for this and which will fix the amount of time that we are providing before the retry."},{type:"paragraph",text:"So here\u2019s how we do it."},{type:"code",text:"FixedBackOffPolicy backOffPolicy = new FixedBackOffPolicy();\n      backOffPolicy.setBackOffPeriod(5000l); // 5 second wait"},{type:"paragraph",text:"The next part is RetryPolicy. In Spring Boot there are multiple RetryPolicy classes, designed for different use cases. \n      (AlwaysRetryPolicy, CircuitBreakerRetryPolicy, CompositeRetryPolicy, ExceptionClassifierRetryPolicy, ExperssionRetryPolicy, NeverRetryPolicy, SimpleRetryPolicy, TimeoutRetryPolocy)"},{type:"paragraph",text:"For this code I am going to use SimpleRetryPolicy."},{type:"code",text:"SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy();\nretryPolicy.setMaxAttempts(2);\nretryTemplate.setRetryPolicy(retryPolicy);"},{type:"paragraph",text:"MaxAttemps value will define the number of retries. In this example if it fails the first time this will retry two more times."},{type:"paragraph",text:"Then we can use this retryTemplate bean where we need to retry. Let\u2019s assume we have a service called TestService and it has a method called callApi(). \n      So here\u2019s how we can use retryTemplate."},{type:"code",text:"@Component\npublic class Test {\n    @Autowired\n    TestService testService;\n\n    @Autowired\n    RetryTemplate retryTemplate;\n\n    public void invokeService(){\n        retryTemplate.execute(arg0 -> {\n            testService.callApi();\n            return null;\n        });\n    }\n}\n      "},{type:"paragraph",text:"You can find below complete RetryTemplateConfiguration class"},{type:"code",text:"@Configuration\n@EnableRetry\npublic class RetryConfig {\n    @Bean\n    public RetryTemplate retryTemplate() {\n        RetryTemplate retryTemplate = new RetryTemplate();\n\n        FixedBackOffPolicy fixedBackOffPolicy = new FixedBackOffPolicy();\n        fixedBackOffPolicy.setBackOffPeriod(5000l);// 5 second wait\n        retryTemplate.setBackOffPolicy(fixedBackOffPolicy);\n\n        SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy();\n        retryPolicy.setMaxAttempts(2);\n        retryTemplate.setRetryPolicy(retryPolicy);\n\n        return retryTemplate;\n    }\n}\n  "}],summery:"We can find many use cases where we need to retry on some services or APIs when there is an error in the api. It might be a network failure or any application failure. So here is the way",tags:["Java","SpringBoot"]}]),x=r(3),O=function(){var e=Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function g(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),r=t[0],a=t[1],i=function(){var e=Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=Object(x.g)().id,s=b[c-1];return Object(p.jsxs)("div",{className:"blog-post",children:[Object(p.jsx)("div",{className:"title",children:s.title}),Object(p.jsx)("div",{onClick:i,className:"body",children:"Blog Post"}),Object(p.jsx)("div",{children:r.title})]})}r(42);var v=r(20);function w(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){Object(v.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Developer","Designer","Blogger"]})}),[]),Object(p.jsxs)("div",{className:"intro",id:"intro",children:[Object(p.jsx)("div",{className:"imageContainer",children:Object(p.jsx)("img",{src:window.location.origin+"/assets/ProPic.jpeg",alt:""})}),Object(p.jsx)("div",{className:"hi",children:"Hi."}),Object(p.jsx)("div",{className:"hiShadow"}),Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("h2",{children:"I am Romesh Dhananjaya"}),Object(p.jsxs)("h3",{children:["I am a ",Object(p.jsx)("span",{ref:e})]})]})]})}r(43),r(44);function P(e){var t=e.children;return Object(p.jsx)("div",{className:"tag",children:t})}function k(e){var t=e.date,r=e.title,n=e.summery,a=e.tags,i=e.onClick,c=function(){i()};return Object(p.jsxs)("div",{className:"blog-post-card",children:[Object(p.jsxs)("div",{className:"left",onClick:c,children:[Object(p.jsx)("span",{className:"year",children:t.year}),Object(p.jsx)("span",{className:"day",children:t.day}),Object(p.jsx)("span",{className:"month",children:t.month})]}),Object(p.jsxs)("div",{className:"right",children:[Object(p.jsx)("div",{className:"title",onClick:c,children:r}),Object(p.jsx)("div",{className:"summery",onClick:c,children:n}),Object(p.jsx)("div",{className:"tags",children:a.map((function(e){return Object(p.jsx)(P,{children:e},e)}))})]})]})}function R(){var e=Object(x.f)();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Blog"}),b.map((function(t){return Object(p.jsx)(k,{onClick:function(){return r=t.id,void e.push("/post/".concat(r));var r},date:t.date,title:t.title,summery:t.summery,tags:t.tags},t.id)}))]})}function N(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(w,{}),Object(p.jsx)("div",{className:"cardWrapper",children:Object(p.jsx)(R,{})})]})}r(45);function T(){return Object(p.jsx)("div",{className:"footer",children:Object(p.jsx)("p",{className:"copyright",children:"\xa9 Romesh Dhananjaya, romeshdhananjaya.com All rights reserved"})})}r(46);var S,B,I=["title","titleId"];function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function A(e,t){var r=e.title,a=e.titleId,i=E(e,I);return n.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":a},i),r?n.createElement("title",{id:a},r):null,S||(S=n.createElement("g",null,n.createElement("rect",{fill:"none",height:24,width:24}))),B||(B=n.createElement("g",null,n.createElement("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"}))))}var L=n.forwardRef(A),W=(r.p,function(){var e=function(){var e=Object(m.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=null,console.log(t),"Title is null",(r=document.createElement("a")).download="Title is null.json",document.body.appendChild(r),r.click(),document.body.removeChild(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"editor-wrapper",children:Object(p.jsx)("span",{onClick:e,className:"download-icon",children:Object(p.jsx)(L,{})})})}),D=r(21);r(47);var F=function(){return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(y,{}),Object(p.jsxs)("div",{className:"section",children:[Object(p.jsx)(D.a,{children:Object(p.jsxs)(x.c,{children:[Object(p.jsx)(x.a,{path:"/editor",children:Object(p.jsx)(W,{})}),Object(p.jsx)(x.a,{path:"/post/:id",children:Object(p.jsx)(g,{})}),Object(p.jsx)(x.a,{exact:!0,path:"/",children:Object(p.jsx)(N,{})})]})}),Object(p.jsx)(T,{})]})]})};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.7f83689c.chunk.js.map