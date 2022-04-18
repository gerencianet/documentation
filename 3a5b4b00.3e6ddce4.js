(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(243)),i={id:"Introducao",title:"Introdu\xe7\xe3o",hide_title:!0,sidebar_label:"Introduction"},s={id:"Assinaturas/Introducao",isDocsHomePage:!1,title:"Introdu\xe7\xe3o",description:"Introduction",source:"@site/docs\\Assinaturas\\Introducao.md",permalink:"/documentation/docs/Assinaturas/Introducao",sidebar_label:"Introduction",sidebar:"someSidebar",previous:{title:"Outros endpoints",permalink:"/documentation/docs/PagamentoCartao/EndpointsCartao"},next:{title:"Como funciona",permalink:"/documentation/docs/Assinaturas/ComoFunciona"}},c=[{value:"Next steps",id:"next-steps",children:[]}],u={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{className:"titulo"},"Introduction"),Object(o.b)("div",{className:"subtitulo"},Object(o.b)("p",null,"Charge your customers with recurrent bilings through subscription plans. As soon as he authorizes the debits, you don't have to worry about sending the bill every month and your customer doesn't run the risk of forgetting to make the payment."),Object(o.b)("p",null,"A subscription is a set of transactions generated in a recurrent way."),Object(o.b)("p",null,"To generate a subscription, simply generate a charge and send, together with the information of this charge, data that determine the number of installments and the frequency in which the system must generate a transaction exactly the same as the first one. This information is called ",Object(o.b)("em",{parentName:"p"},"Planos de Assinaturas"),"."),Object(o.b)("p",null,"That way, a subscription is always associated with a plan."),Object(o.b)("p",null,"A subscription is characterized by the ",Object(o.b)("em",{parentName:"p"},"recurring charge"),", which can be carried out by boleto or card: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Credit Card:")," your customer makes the payment, according to the frequency you have defined (monthly, quarterly, etc.), the same amount being automatically charged to your customer's credit card. In the recurrence by card, your customer enters the card data only in the first payment, then the charge is carried out automatically without having to inform the data again;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Boleto Banc\xe1rio:")," the subscription is made via boleto and your customer receives the boleto in 5 (five) days before the due date of the installment.")),Object(o.b)("p",null,"Creating a subscription is quite simple and requires only three steps: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../Assinaturas/CriandoAssinatura#1-crie-o-plano-de-assinatura"}),"Create the subscription plan"),", defining the frequency and how many charges should be generated;")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../Assinaturas/CriandoAssinatura#2-crie-inscri%C3%A7%C3%B5es-assinaturas-para-vincular-ao-plano"}),"Create subscriptions (subscriptions) to link to plan"),";")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../Assinaturas/CriandoAssinatura#3-defina-a-forma-de-pagamento-da-assinatura-e-os-dados-do-cliente"}),"Define subscription payment method and customer details"),"."))),Object(o.b)("h2",{id:"next-steps"},"Next steps"),Object(o.b)("p",null,"Now that you know a little about subscriptions, how about seeing ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"ComoFunciona.md"}),"how subscriptions work")," so that you can then ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"CriandoAssinatura.md"}),"create your subscription plan"),".")))}l.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,s(s({ref:t},u),{},{components:n})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);