(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(237)),i=n(244),o=n(245),l={id:"java",title:"Java",hide_title:!0,sidebar_label:"Java"},b={id:"Instalacao/java",isDocsHomePage:!1,title:"Java",description:"Java",source:"@site/docs\\Instalacao\\Java.md",permalink:"/documentation/docs/Instalacao/java",sidebar_label:"Java",sidebar:"someSidebar",previous:{title:"Python",permalink:"/documentation/docs/Instalacao/python"},next:{title:".NET Core",permalink:"/documentation/docs/Instalacao/core"}},s=[{value:"Pre requirements",id:"pre-requirements",children:[]},{value:"Tested with",id:"tested-with",children:[]},{value:"Installing via gradle",id:"installing-via-gradle",children:[]},{value:"Installing via maven",id:"installing-via-maven",children:[]},{value:"Starting",id:"starting",children:[{value:"For development environment",id:"for-development-environment",children:[]},{value:"For production environment",id:"for-production-environment",children:[]}]},{value:"Running tests",id:"running-tests",children:[]},{value:"Running examples",id:"running-examples",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{className:"titulo"},"Java"),Object(c.b)("div",{className:"subtitulo"},Object(c.b)("p",null,"Our API is ",Object(c.b)("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\nand responds in ",Object(c.b)("a",{href:"https://www.json.org/json-en.html"},"JSON"),". Gerencianet uses ",Object(c.b)("a",{href:"https://oauth.net/"},"OAuth")," to provide authorized access to the API. Our NodeJS SDK is already prepared to perform this authentication automatically."),Object(c.b)("p",null,"Below, check out the procedures for installing the Gerencianet SDK in ",Object(c.b)("a",{href:"https://github.com/gerencianet/gn-api-sdk-java-examples",target:"_blank",title:"Link Externo"},"Java"),":"),Object(c.b)("br",null),Object(c.b)("h2",{id:"pre-requirements"},"Pre requirements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Java >=7.0")),Object(c.b)("br",null),Object(c.b)("h2",{id:"tested-with"},"Tested with"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Java ",Object(c.b)("inlineCode",{parentName:"li"},"7.0"),"  e ",Object(c.b)("inlineCode",{parentName:"li"},"8.0"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"installing-via-gradle"},"Installing via gradle"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"compile 'br.com.gerencianet.gnsdk:gn-api-sdk-java:0.2.2'\n")),Object(c.b)("br",null),Object(c.b)("h2",{id:"installing-via-maven"},"Installing via maven"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"<dependency>\n    <groupId>br.com.gerencianet.gnsdk</groupId>\n    <artifactId>gn-api-sdk-java</artifactId>\n    <version>0.2.2</version>\n</dependency>\n")),Object(c.b)("br",null),Object(c.b)("h2",{id:"starting"},"Starting"),Object(c.b)("p",null,"Requer o m\xf3dulo e os pacotes:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"import br.com.gerencianet.gnsdk.Gerencianet;\nimport br.com.gerencianet.gnsdk.exceptions.GerencianetException;\n")),Object(c.b)("p",null,"Although the web services responses are in json format, the SDK will convert any server response to a ",Object(c.b)("em",{parentName:"p"},"JSONObject")," or ",Object(c.b)("em",{parentName:"p"},"Map <String, Object>"),". The code must be inside a ",Object(c.b)("em",{parentName:"p"},"try-catch")," and exceptions can be handled as follows:"),Object(c.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"```java\ntry {\n  /* code */\n} catch(GerencianetException e) {\n  /* Gerencianet's api errors will come here */\n} catch(Exception ex) {\n  /* Other errors will come here */\n}\n")))),Object(c.b)("br",null),Object(c.b)("h3",{id:"for-development-environment"},"For development environment"),Object(c.b)("p",null,"Instantiate the module passing its ",Object(c.b)("em",{parentName:"p"},"Client_Id, Client_Secret")," and sandbox being equal to ",Object(c.b)("inlineCode",{parentName:"p"},"true"),":"),Object(c.b)(i.a,{defaultValue:"JSONObject",values:[{label:"JSONObject",value:"JSONObject"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"JSONObject",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'JSONObject options = new JSONObject();\noptions.put("client_id", "client_id");\noptions.put("client_secret", "client_secret");\noptions.put("sandbox", true);\n\nGerencianet gn = new Gerencianet($options);\n')))),Object(c.b)("p",null,"Ou ent\xe3o:"),Object(c.b)(i.a,{defaultValue:"Map",values:[{label:"Map",value:"Map"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"Map",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Map<String, Object> options = new HashMap<String, Object>();\noptions.put("client_id", "client_id");\noptions.put("client_secret", "client_secret");\noptions.put("sandbox", true);\n\nGerencianet gn = new Gerencianet($options);\n')))),Object(c.b)("br",null),Object(c.b)("h3",{id:"for-production-environment"},"For production environment"),Object(c.b)("p",null,"To change the environment to production, just set the third sandbox to ",Object(c.b)("inlineCode",{parentName:"p"},"false"),", and its production ",Object(c.b)("em",{parentName:"p"},"Client_Id and Client_Secret"),":"),Object(c.b)(i.a,{defaultValue:"JSONObject",values:[{label:"JSONObject",value:"JSONObject"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"JSONObject",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'JSONObject options = new JSONObject();\noptions.put("client_id", "client_id");\noptions.put("client_secret", "client_secret");\noptions.put("sandbox", false);\n\nGerencianet gn = new Gerencianet($options);\n')))),Object(c.b)("p",null,"Or else:"),Object(c.b)(i.a,{defaultValue:"Map",values:[{label:"Map",value:"Map"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"Map",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Map<String, Object> options = new HashMap<String, Object>();\noptions.put("client_id", "client_id");\noptions.put("client_secret", "client_secret");\noptions.put("sandbox", false);\n\nGerencianet gn = new Gerencianet($options);\n')))),Object(c.b)("br",null),Object(c.b)("h2",{id:"running-tests"},"Running tests"),Object(c.b)("p",null,"To run the test suite with ",Object(c.b)("em",{parentName:"p"},"coverage"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"mvn clean test jacoco:report\n")),Object(c.b)("br",null),Object(c.b)("h2",{id:"running-examples"},"Running examples"),Object(c.b)("p",null,"To run some existing examples follow the steps outlined in our Github (",Object(c.b)("a",{href:"https://github.com/gerencianet/gn-api-sdk-java-examples"},"gn-api-sdk-java-examples"),").")))}p.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,O=u["".concat(i,".").concat(d)]||u[d]||p[d]||c;return n?r.a.createElement(O,o(o({ref:t},b),{},{components:n})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},241:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},242:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},243:function(e,t,n){"use strict";var a=n(0),r=n(242);t.a=function(){return Object(a.useContext)(r.a)}},244:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(243),i=n(241),o=n(92),l=n.n(o);const b=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:u,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:O}=Object(c.a)(),[m,j]=Object(a.useState)(o);if(null!=p){const e=d[p];null!=e&&e!==m&&u.some(t=>t.value===e)&&j(e)}const v=e=>{j(e),null!=p&&O(p,e)},f=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},u.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),onFocus:()=>v(e),onClick:()=>v(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},245:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);