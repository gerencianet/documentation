(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{242:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(2),i=n(6),a=(n(0),n(250)),r={id:"Introduction",title:"Introduction",hide_title:!0,sidebar_label:"Introduction"},c={id:"AberturadeContas/Introduction",isDocsHomePage:!1,title:"Introduction",description:"Introduction",source:"@site/docs\\AberturadeContas\\Introduction.md",permalink:"/documentation/docs/AberturadeContas/Introduction",sidebar_label:"Introduction",sidebar:"someSidebar",previous:{title:"Endpoints",permalink:"/documentation/docs/apiPagamentos/Endpoints"},next:{title:"Endpoints",permalink:"/documentation/docs/AberturadeContas/endpoints"}},l=[{value:"Account Opening API",id:"account-opening-api",children:[]},{value:"Understanding the application scopes",id:"understanding-the-application-scopes",children:[]},{value:"OAuth2 authentication",id:"oauth2-authentication",children:[]},{value:"Authorization",id:"authorization",children:[]},{value:"Configuring tests on Postman",id:"configuring-tests-on-postman",children:[{value:"1. Importing the Account Opening API Collection",id:"1-importing-the-account-opening-api-collection",children:[]},{value:"2. Creating an Environment",id:"2-creating-an-environment",children:[]},{value:"3. Setting the certificate in Postman",id:"3-setting-the-certificate-in-postman",children:[]},{value:"4. Assigning the Client_Id and Client_Secret in Postman",id:"4-assigning-the-client_id-and-client_secret-in-postman",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{className:"titulo"},"Introduction"),Object(a.b)("div",{className:"subtitulo"},Object(a.b)("p",null,"This page contains a introduction to the Gerencianet Account Opening API and information on how to configure an environment for its consumption."),Object(a.b)("h3",{id:"account-opening-api"},"Account Opening API"),Object(a.b)("p",null,"The Account Opening API provides our services to facilitate the opening of accounts on Gerencianet. With our API it is possible to start the process of opening your customer's accounts in a practical way and obtain the necessary credentials and certificates to use the customer's application."),Object(a.b)("h3",{id:"understanding-the-application-scopes"},"Understanding the application scopes"),Object(a.b)("p",null,"When creating or editing an application in your Gerencianet Account, you will need to configure the scopes that the application will have access to. Choosing these scopes will define the actions that an application will be authorized to perform via API."),Object(a.b)("p",null,"The scopes available in the Gerencianet Account Opening API are listed below with their respective descriptions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"gn.registration.write")," - Permission to make a simplified account opening request;"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"gn.registration.read")," - Permission to get account credentials;"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"gn.registration.webhook.write")," - Permission to change the webhook;"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"gn.registration.webhook.read")," - Permission to get the webhook;")),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Caution")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"To use the Gerencianet Account Opening API, it is necessary to activate the scopes mentioned on this page, therefore, you must fill in the form available at this ",Object(a.b)("a",{href:"https://www.cognitoforms.com/GerencianetSA3/GERENCIANETAPIAberturaDeContas"},"link"),"."),Object(a.b)("p",{parentName:"div"},"After filling it out, just wait for us to contact you."))),Object(a.b)("h2",{id:"oauth2-authentication"},"OAuth2 authentication"),Object(a.b)("p",null,"The process to authenticate in the Gerencianet Payment API follows the ","[OAuth2]","((",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://oauth.net/2/"}),"http://oauth.net/2/"),") process, in this process, it is included the security certificate generated in your Gerencianet account. Through this, the OAuth2 authentication can access the authorizations of you application and authorize or deny the requests. "),Object(a.b)("p",null,"For more details regarding authentication with OAuth2, just click on the button below:"),Object(a.b)("a",{href:"https://gerencianet.com.br/pix/?utm_referrer=https%3A%2F%2Fdev.gerencianet.com.br%2F",target:"_blank",alt:"QUERO SER CLIENTE GERENCIANET"},Object(a.b)("button",{type:"button",className:"buttonCTA buttonorange"},"OAuth2 authentication")),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("h2",{id:"authorization"},"Authorization"),Object(a.b)("p",null,"The Payments API requires the use of a PFX(.p12) certificate that is generated in your Gerencianet account. The Auth2 provides an authorization mechanism called mutual Transport Layer Security (mTLS) through the certificate created in your Gerencianet account, this method adds another level of security to the requests between your application and the Gerencianet Payment API."),Object(a.b)("p",null,"For more details about the PFX(.p12) creation and the mTLS pattern, just click on the button below:"),Object(a.b)("a",{href:"https://gerencianet.com.br/pix/?utm_referrer=https%3A%2F%2Fdev.gerencianet.com.br%2F",target:"_blank",alt:"QUERO SER CLIENTE GERENCIANET"},Object(a.b)("button",{type:"button",className:"buttonCTA buttonorange"},"Authorization with mTLS")),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("h2",{id:"configuring-tests-on-postman"},"Configuring tests on Postman"),Object(a.b)("p",null,"To proceed with the Postman configuration step, you must have:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A pair of ",Object(a.b)("inlineCode",{parentName:"li"},"Client_Id")," and ",Object(a.b)("inlineCode",{parentName:"li"},"Client_Secret")," credentials of an application registered in your Gerencianet Account;"),Object(a.b)("li",{parentName:"ol"},"A P12/PEM certificate generated in your Gerencianet account;"),Object(a.b)("li",{parentName:"ol"},"The Postman software installed on your computer (If you don't have it, ",Object(a.b)("a",{href:"https://www.postman.com/downloads/"},"click here ")," to download it);")),Object(a.b)("h3",{id:"1-importing-the-account-opening-api-collection"},"1. Importing the Account Opening API Collection"),Object(a.b)("p",null,"This is the ",Object(a.b)("a",{href:"https://documenter.getpostman.com/view/13574984/UyrDCazL"},"link "),"to our Collection that we will keep updated with the Gerencianet Account opening API endpoints."),Object(a.b)("a",{href:"https://documenter.getpostman.com/view/13574984/UyrDCurw",target:"_blank",alt:"QUERO SER CLIENTE GERENCIANET"},Object(a.b)("button",{type:"button",className:"buttonCTA buttonorange"},"Run in Postman")),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"With Postman started, use the shortcut ",Object(a.b)("code",null,"Ctrl+O")," to open the import screen;"),Object(a.b)("li",{parentName:"ol"},"Select ",Object(a.b)("em",{parentName:"li"},"Collection")," file;"),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("em",{parentName:"li"},"Import"))),Object(a.b)("a",{href:"/documentation/img/import-collection-postman.png",target:"_blank"},Object(a.b)("img",{src:"/documentation/img/import-collection-postman.png",alt:"Ilustra\xe7\xe3o do in\xedcio do processo de importa\xe7\xe3o"})),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("a",{href:"/documentation/img/2-import-collection-postman.png",target:"_blank"},Object(a.b)("img",{src:"/documentation/img/2-import-collection-postman.png",alt:"Ilustra\xe7\xe3o da importa\xe7\xe3o do arquivo"})),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("a",{href:"/documentation/img/3-import-collection-postman.png",target:"_blank"},Object(a.b)("img",{src:"/documentation/img/3-import-collection-postman.png",alt:"Ilustra\xe7\xe3o da etapa final da importa\xe7\xe3o"})),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("h3",{id:"2-creating-an-environment"},"2. Creating an Environment"),Object(a.b)("p",null,"Creating an ",Object(a.b)("em",{parentName:"p"},"Environment")," in Postman is necessary for some automations built into the collection to work. These automations are designed to make it easier for developers during testing."),Object(a.b)("p",null,"With them you need to request the authorization only once, and then the ",Object(a.b)("inlineCode",{parentName:"p"},"access_token")," is recorded as a Postman environment variable, available for use in subsequent requests."),Object(a.b)("p",null,"To create an Environment follow the steps below."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Use the ",Object(a.b)("inlineCode",{parentName:"li"},"Ctrl+N")," shortcut and select 'Environment';"),Object(a.b)("li",{parentName:"ol"},"Give a name specifying whether this Environment will be pointed to the production or homologation environment;"),Object(a.b)("li",{parentName:"ol"},"Create the variable ",Object(a.b)("inlineCode",{parentName:"li"},"gn-api-contas")," and in initial value enter the URL of the Production or Homologation Payment API;"),Object(a.b)("li",{parentName:"ol"},"Save your Environment;"),Object(a.b)("li",{parentName:"ol"},"Select the desired Environment, so Postman will understand the created variable.")),Object(a.b)("p",null,"The images below shows the steps above. As an example, an Environment was created for Gerencianet's Account Openning API Production environment."),Object(a.b)("a",{href:"/documentation/img/1-config-env-postman.png",target:"_blank"},Object(a.b)("img",{src:"/documentation/img/1-config-env-postman.png",alt:"Criando um novo environment"}))," ",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("a",{href:"/documentation/img/2-config-env-postman.png",target:"_blank"},Object(a.b)("img",{src:"/documentation/img/2-config-env-postman.png",alt:"Configura\xe7\xf5es do environment"}))," ",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("h3",{id:"3-setting-the-certificate-in-postman"},"3. Setting the certificate in Postman"),Object(a.b)("p",null,"All requests made to the Gerencianet Payment API need the certificate generated in your Gerencianet account. Therefore, to help you testing Postman, follow the steps below to configure the certificate usage during requests automatically:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Click the gear icon in the upper right corner of the Postman;"),Object(a.b)("li",{parentName:"ol"},'Then click "Settings" to open the settings;'),Object(a.b)("li",{parentName:"ol"},'In the top tab, click "Certificates";'),Object(a.b)("li",{parentName:"ol"},'Then click on "Add Certificate";'),Object(a.b)("li",{parentName:"ol"},'In the configuration window of the new certificate, fill the "Host" field with the Base Route of the environment to which the certificate belongs (Production or Homologation);'),Object(a.b)("li",{parentName:"ol"},'Use the "PFX File" field to tell Postman where your P12/PEM certificate file is located;'),Object(a.b)("li",{parentName:"ol"},'Finish by clicking "Add" to save your settings.')),Object(a.b)("p",null,"By following these steps, Postman will use the certificate for any requests made to the Host of the configured environment."),Object(a.b)("br",null),Object(a.b)("a",{href:"/documentation/img/1-add-cert-postman.png",target:"_blank"},Object(a.b)("img",{src:"/documentation/img/1-add-cert-postman.png",alt:"Acessando as configura\xe7\xf5es do Postman"}))," ",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("a",{href:"/documentation/img/2-add-cert-postman.png",target:"_blank"},Object(a.b)("img",{src:"/documentation/img/2-add-cert-postman.png",alt:"Adicionando um novo certificado no Postman"}))," ",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("a",{href:"/documentation/img/3-add-cert-postman.png",target:"_blank"},Object(a.b)("img",{src:"/documentation/img/3-add-cert-postman.png",alt:"Configura\xe7\xf5es do certificado"}))," ",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("h3",{id:"4-assigning-the-client_id-and-client_secret-in-postman"},"4. Assigning the Client_Id and Client_Secret in Postman"),Object(a.b)("p",null,"To complete the configuration of your Postman it is necessary to configure the credentials of an application of your Gerencianet account. These credentials are used for Basic Auth and to get the ",Object(a.b)("inlineCode",{parentName:"p"},"access_token")," from OAuth."),Object(a.b)("p",null,"Follow the steps below to include the credentials and perform your first test in the Pix Gerencianet API."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"In the imported collection, navigate to the ",Object(a.b)("inlineCode",{parentName:"li"},"/oauth/token")," route and double-click to open;"),Object(a.b)("li",{parentName:"ol"},'Go to the "Authorization" menu and make sure that the "Type" (authorization type) is selected as "Basic Auth";'),Object(a.b)("li",{parentName:"ol"},'In the "username" and "password" fields fill with your application credentials, Client_Id and Client_Secret respectively;'),Object(a.b)("li",{parentName:"ol"},'To test, click the "Send" button to submit the request')),Object(a.b)("p",null,"The image below illustrates the steps above. If everything was followed correctly, you should get a response in JSON format, containing the ",Object(a.b)("inlineCode",{parentName:"p"},"access_token"),", ",Object(a.b)("inlineCode",{parentName:"p"},"token_type"),", ",Object(a.b)("inlineCode",{parentName:"p"},"expires_in")," e ",Object(a.b)("inlineCode",{parentName:"p"},"scope")," (like the image bellow)."),Object(a.b)("a",{href:"/documentation/img/1-request-auth-postman.png",target:"_blank"},Object(a.b)("img",{src:"/documentation/img/1-request-auth-postman.png",alt:"Uso das credenciais de uma aplica\xe7\xe3o para autoriza\xe7\xe3o de requisi\xe7\xf5es"}))))}b.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=o,d=u["".concat(r,".").concat(m)]||u[m]||p[m]||a;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);