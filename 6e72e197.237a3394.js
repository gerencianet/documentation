(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(243)),o={id:"android",title:"Android",hide_title:!0,sidebar_label:"Android"},c={id:"Instalacao/android",isDocsHomePage:!1,title:"Android",description:"Android",source:"@site/docs\\Instalacao\\android.md",permalink:"/documentation/docs/Instalacao/android",sidebar_label:"Android",sidebar:"someSidebar",previous:{title:"Typescript",permalink:"/documentation/docs/Instalacao/typescript"},next:{title:"Status das transa\xe7\xf5es",permalink:"/documentation/docs/VisaoGeral/statusTransacoes"}},l=[{value:"Pre requirements",id:"pre-requirements",children:[]},{value:"Installation via gradle",id:"installation-via-gradle",children:[]},{value:"Tested with",id:"tested-with",children:[]},{value:"Basic use",id:"basic-use",children:[]},{value:"For homologation environment",id:"for-homologation-environment",children:[]},{value:"For production environment",id:"for-production-environment",children:[]},{value:"PIX API",id:"pix-api",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{className:"titulo"},"Android"),Object(i.b)("div",{className:"subtitulo"},Object(i.b)("p",null,"Our API is ",Object(i.b)("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\nand responds in ",Object(i.b)("a",{href:"https://www.json.org/json-en.html"},"JSON"),". Gerencianet uses ",Object(i.b)("a",{href:"https://oauth.net/"},"OAuth")," to provide authorized access to the API. Our NodeJS SDK is already prepared to perform this authentication automatically."),Object(i.b)("p",null,"Below, check out the procedures for installing the Gerencianet SDK in ",Object(i.b)("a",{href:"https://github.com/gerencianet/gn-api-sdk-android",target:"_blank",title:"Link Externo"},"Android"),":"),Object(i.b)("br",null),Object(i.b)("h2",{id:"pre-requirements"},"Pre requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Android ",Object(i.b)("inlineCode",{parentName:"li"},"7.0+"))),Object(i.b)("br",null),Object(i.b)("h2",{id:"installation-via-gradle"},"Installation via gradle"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"implementation 'br.com.gerencianet.mobile:gn-api-sdk-android:1.0.0'\n")),Object(i.b)("br",null),Object(i.b)("h2",{id:"tested-with"},"Tested with"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Android ",Object(i.b)("inlineCode",{parentName:"li"},"7.0")," e ",Object(i.b)("inlineCode",{parentName:"li"},"11.0"))),Object(i.b)("br",null),Object(i.b)("h2",{id:"basic-use"},"Basic use"),Object(i.b)("p",null,"Requires the module and packages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"import br.com.gerencianet.mobile.Gerencianet;\n")),Object(i.b)("p",null,"Although web services responses are in ",Object(i.b)("em",{parentName:"p"},"json")," format, the SDK will convert any server response to a ",Object(i.b)("em",{parentName:"p"},"Map <String, Object>"),". The code must be inside a ",Object(i.b)("em",{parentName:"p"},"try-catch")," and exceptions can be handled as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"try {\n\n/* code */\n\n} catch(GerencianetException e) {\n\n/* Gerencianet's api errors will come here */\n\n} catch(Exception ex) {\n\n/* Other errors will come here */\n\n}\n")),Object(i.b)("br",null),Object(i.b)("h2",{id:"for-homologation-environment"},"For homologation environment"),Object(i.b)("hr",null),Object(i.b)("p",null,"Instantiate the module passing its ",Object(i.b)("em",{parentName:"p"},"Client_Id"),", ",Object(i.b)("em",{parentName:"p"},"Client_Secret")," and ",Object(i.b)("em",{parentName:"p"},"sandbox")," being equal to ",Object(i.b)("em",{parentName:"p"},"true"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'HashMap<String, Object> options = new HashMap<String Object>();\n\noptions.put("client_id", "client_id ");\n\noptions.put("client_secret", "client_secret");\n\noptions.put("sandbox", true);\n\nGerencianet gn = new Gerencianet(options);\n')),Object(i.b)("h2",{id:"for-production-environment"},"For production environment"),Object(i.b)("hr",null),Object(i.b)("p",null,"To change the environment to production, just set the third sandbox to false, and its production Client_Id and Client_Secret:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'HashMap<String, Object> options = new HashMap<String Object>();\n\noptions.put("client_id", "client_id ");\n\noptions.put("client_secret", "client_secret");\n\noptions.put("sandbox", false);\n\nGerencianet gn = new Gerencianet(options);\n')),Object(i.b)("br",null),Object(i.b)("h2",{id:"pix-api"},"PIX API"),Object(i.b)("p",null,"To use the PIX API, it is necessary to inform the certificate path inside the ",Object(i.b)("em",{parentName:"p"},"assets")," folder and pass the context's ",Object(i.b)("em",{parentName:"p"},"assets")," as a parameter."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'HashMap<String, Object> options = new HashMap<String Object>();\n\noptions.put("client_id", "client_id ");\n\noptions.put("client_secret", "client_secret");\n\noptions.put("pix_cert", "./cert.p12");\n\noptions.put("sandbox", false);\n\nGerencianet gn = new Gerencianet(options, context.getAssets());\n'))))}p.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);