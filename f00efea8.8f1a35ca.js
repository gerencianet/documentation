(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(243)),i={id:"introexamples",title:"introexamples",hide_title:!0,sidebar_label:"Introduction"},c={id:"ExemplosIntegracao/introexamples",isDocsHomePage:!1,title:"introexamples",description:"Functional examples of all billing services offered in the Gerencianet's API",source:"@site/docs\\ExemplosIntegracao\\intro.md",permalink:"/documentation/docs/ExemplosIntegracao/introexamples",sidebar_label:"Introduction",sidebar:"someSidebar",previous:{title:"WordPress (WooCommerce)",permalink:"/documentation/docs/Modulos/WordPress"},next:{title:"Atualizar Transa\xe7\xf5es",permalink:"/documentation/docs/OutrosRecursos/AtualizarTransacoes"}},s=[{value:"Run examples",id:"run-examples",children:[]}],p={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{className:"titulo"},"Functional examples of all billing services offered in the Gerencianet's API"),Object(o.b)("div",{className:"subtitulo"},Object(o.b)("p",null,"Seeking to offer a way for customers and integrators to visualize in practice how our charges are issued, we offer several ",Object(o.b)("strong",{parentName:"p"},"ready examples of integration with the Gerencianet APIs")," that demonstrate the ",Object(o.b)("strong",{parentName:"p"},"boleto/Bolix"),", ",Object(o.b)("strong",{parentName:"p"},"carn\xea")," modality , ",Object(o.b)("strong",{parentName:"p"},"credit card"),", ",Object(o.b)("strong",{parentName:"p"},"Pix"),", ",Object(o.b)("strong",{parentName:"p"},"subscriptions (recurring billing)"),", ",Object(o.b)("strong",{parentName:"p"},"payment link")," and ",Object(o.b)("strong",{parentName:"p"},"marketplace (split payment)"),", thus being able to have an experience with our services before going into development."),Object(o.b)("a",{href:"https://www.gerencianet.com.br/wp-content/themes/Gerencianet/exemplos-api/",target:"_blank",alt:"ACESSAR EXEMPLOS DE DEMONSTRA\xc7\xc3O"},Object(o.b)("button",{type:"button",className:"buttonCTA buttonorange"},"ACCESS DEMONSTRATION EXAMPLES")),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/examples.gif",alt:"alt text",title:"examples page"}))),Object(o.b)("p",null,"In addition to the possibility of running these tests, we make all the codes used in these examples available for download. It is worth mentioning that, in these examples, the PHP SDK was used to integrate with the APIs."),Object(o.b)("br",null),Object(o.b)("h2",{id:"run-examples"},"Run examples"),Object(o.b)("p",null,"To run these examples in your environment you need ",Object(o.b)("a",{href:"https://gerencianet.com.br/#abrirconta",target:"_blank"},"create a Gerencianet account")," and ",Object(o.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2021/04/14/macario.junior/1-create-app-pangeia.png",target:"_blank"},"create an application")," to get the credentials."),Object(o.b)("a",{href:"https://www.gerencianet.com.br/wp-content/themes/Gerencianet/exemplos-api/download/exemplos-integracao.zip",target:"_blank",alt:"BAIXAR C\xd3DIGOS DE EXEMPLOS DE INTEGRA\xc7\xc3O"},Object(o.b)("button",{type:"button",className:"buttonCTA buttonorange"},"DOWNLOAD INTEGRATION EXAMPLE CODES")),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"After downloading these examples, don't forget to insert your credentials in the ",Object(o.b)("strong",{parentName:"p"},"credentials.json")," file, being the ",Object(o.b)("code",null,"Client_Id")," and ",Object(o.b)("code",null,"Client_Secret")," according to the environment used (Approval or production), in addition to remembering that the parameter ",Object(o.b)("code",null,"sandbox")," is boolean and has 2 possible values, according to the environment, being: ",Object(o.b)("code",null,"sandbox => true")," is equivalent to the Homologation environment and ",Object(o.b)("code",null,"sandbox => false")," is equivalent to the production environment. "),Object(o.b)("p",{parentName:"div"},"To use the ",Object(o.b)("em",{parentName:"p"},"Pix")," example, you must also inform the ",Object(o.b)("strong",{parentName:"p"},"./certs/")," directory in the ",Object(o.b)("strong",{parentName:"p"},"credentials.json")," file, in the ",Object(o.b)("code",null,"pix_cert")," attribute, adding the name of your certificate in ",Object(o.b)("strong",{parentName:"p"},".pem")," format. Here you can find tips for ",Object(o.b)("a",{href:"../PIX/Credentials#conversion-of-p12-certificate-to-pem-format",target:"_blank"},"generate your certificate and convert it ",Object(o.b)("strong",{parentName:"p"},".p12")," to ",Object(o.b)("strong",{parentName:"p"},".pem")),". It is also necessary, in the file ",Object(o.b)("strong",{parentName:"p"},"./pix/emitar_pix.php"),", in the variable ",Object(o.b)("code",null,"$body")," insert your ",Object(o.b)("a",{href:"https://gerencianet.com.br/artigo/como- register-key-pix/",target:"_blank"},"key pix registered in the Gestornet")," in the parameter ",Object(o.b)("code",null,'"chave" => ""'),"."),Object(o.b)("p",{parentName:"div"},"For examples involving the issuance of a ",Object(o.b)("em",{parentName:"p"},"credit card")," to work, you must enter your ",Object(o.b)("strong",{parentName:"p"},"Account Identifier")," ",Object(o.b)("a",{href:"https://cdn.discordapp.com/attachments/652136190006525955/809138574549188618/identifier -account.jpg",target:"_blank"},"(?)")," in ",Object(o.b)("strong",{parentName:"p"},"line 1")," of the script contained in the file ",Object(o.b)("strong",{parentName:"p"},"./assets/js/payment-token.js"),". This script is used to obtain the ",Object(o.b)("em",{parentName:"p"},"payment_token"),". It is important to emphasize that this code is specific according to the environment used (production or approval). ",Object(o.b)("a",{href:"../CardPayment/CardPayment#11-obtaining-do-payment_token",target:"_blank"},"See this link")," how to correctly obtain your payment_token."))),Object(o.b)("p",null,"As this is a merely illustrative and educational example, it is necessary that you adapt it to your needs. ",Object(o.b)("strong",{parentName:"p"},"We are not responsible for using this example without the necessary adjustments for your production environment."))))}b.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),u=a,d=l["".concat(i,".").concat(u)]||l[u]||m[u]||o;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);