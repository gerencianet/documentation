(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{205:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return r})),o.d(a,"metadata",(function(){return c})),o.d(a,"rightToc",(function(){return s})),o.d(a,"Highlight",(function(){return b})),o.d(a,"default",(function(){return d}));var t=o(2),n=o(6),i=(o(0),o(237)),r={id:"FluxoNotificacoes",title:"Entendendo o fluxo das notifica\xe7\xf5es",hide_title:!0,sidebar_label:"Entendendo o fluxo das notifica\xe7\xf5es"},c={id:"Notificacoes/FluxoNotificacoes",isDocsHomePage:!1,title:"Entendendo o fluxo das notifica\xe7\xf5es",description:"Entendendo o fluxo das notifica\xe7\xf5es",source:"@site/docs\\Notificacoes\\FluxoNotificacoes.md",permalink:"/documentation/docs/Notificacoes/FluxoNotificacoes",sidebar_label:"Entendendo o fluxo das notifica\xe7\xf5es"},s=[{value:"Conhecendo mais sobre o fluxo de notifica\xe7\xf5es",id:"conhecendo-mais-sobre-o-fluxo-de-notifica\xe7\xf5es",children:[]},{value:"Exemplo 1: Notifica\xe7\xe3o com &quot;Sucesso (200)&quot;",id:"exemplo-1-notifica\xe7\xe3o-com-sucesso-200",children:[]},{value:"Exemplo 2: Notifica\xe7\xe3o com &quot;Falha (404)&quot;",id:"exemplo-2-notifica\xe7\xe3o-com-falha-404",children:[]},{value:"Exemplo 3: Notifica\xe7\xe3o com &quot;Falha (301)&quot; ou &quot;Falha (302)&quot;",id:"exemplo-3-notifica\xe7\xe3o-com-falha-301-ou-falha-302",children:[]},{value:"Exemplo 4: Notifica\xe7\xe3o com &quot;Falha (500)&quot;",id:"exemplo-4-notifica\xe7\xe3o-com-falha-500",children:[]},{value:"C\xf3digos de status HTTP (2xx, 3xx, 4xx e 5xx)",id:"c\xf3digos-de-status-http-2xx-3xx-4xx-e-5xx",children:[]}],b=function(e){var a=e.children;e.color;return Object(i.b)("span",{style:{borderRadius:"2px",color:"#009615",padding:"0.2rem"}},a)},l={rightToc:s,Highlight:b};function d(e){var a=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,o,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{className:"titulo"},"Entendendo o fluxo das notifica\xe7\xf5es"),Object(i.b)("div",{className:"subtitulo"},Object(i.b)("p",null,"Esta p\xe1gina tem como objetivo apresentar o ",Object(i.b)("code",null,"Hist\xf3rico de Notifica\xe7\xf5es"),". Este recurso est\xe1 dispon\xedvel na API de sua conta Gerencianet e permite visualizar os POSTs que a Gerencianet dispara para a URL de notifica\xe7\xe3o definida pelo integrador. Este POST cont\xe9m apenas uma informa\xe7\xe3o: um token de notifica\xe7\xe3o."),Object(i.b)("p",null,"Ao t\xe9rmino da leitura desta p\xe1gina, espera-se que voc\xea consiga interpretar os cen\xe1rios pertinentes a notifica\xe7\xf5es (callbacks), como em situa\xe7\xf5es em que uma cobran\xe7a em seu sistema n\xe3o foi baixada, o callback foi disparado para uma URL que voc\xea definiu previamente mas que n\xe3o \xe9 mais v\xe1lida, etc."),Object(i.b)("p",null,"Outras informa\xe7\xf5es sobre o processo de defini\xe7\xe3o da URL de notifica\xe7\xe3o e a mec\xe2nica envolvendo a consulta de detalhes de uma notifica\xe7\xe3o podem ser observadas na p\xe1gina ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"../Notificacoes/RecebendoNotificacoes"}),"Recebendo as notifica\xe7\xf5es"),"."),Object(i.b)("p",null,"V\xe1 direto ao ponto - utilize o \xedndice abaixo para encontrar a resposta de maneira mais eficiente:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"#conhecendo-mais-sobre-o-fluxo-de-notifica%C3%A7%C3%B5es"}),"Conhecendo mais sobre o fluxo de notifica\xe7\xf5es"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"#exemplo-1-notifica%C3%A7%C3%A3o-com-sucesso-200"}),'Exemplo 1: Notifica\xe7\xe3o com "Sucesso (200)"'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"#exemplo-2-notifica%C3%A7%C3%A3o-com-falha-404"}),'Exemplo 2: Notifica\xe7\xe3o com "Falha (404)"'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"#exemplo-3-notifica%C3%A7%C3%A3o-com-falha-301-ou-falha-302"}),'Exemplo 3: Notifica\xe7\xe3o com "Falha (301)" ou "Falha (302)"'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"#exemplo-4-notifica%C3%A7%C3%A3o-com-falha-500"}),'Exemplo 4: Notifica\xe7\xe3o com "Falha (500)"'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"#c%C3%B3digos-de-status-http-2xx-3xx-4xx-e-5xx"}),"C\xf3digos de status HTTP (2xx, 3xx, 4xx e 5xx)")))),Object(i.b)("h2",{id:"conhecendo-mais-sobre-o-fluxo-de-notifica\xe7\xf5es"},"Conhecendo mais sobre o fluxo de notifica\xe7\xf5es"),Object(i.b)("p",null,"O fato do POST ter sido enviado com ",Object(i.b)("em",{parentName:"p"},"Sucesso (200)")," para sua URL de notifica\xe7\xe3o n\xe3o significa, por si s\xf3, que o fluxo ocorreu normalmente. Assim que voc\xea recebe o POST, precisar\xe1 vir aqui consultar tais informa\xe7\xf5es."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"IMPORTANTE")),Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"O POST que a Gerencianet envia para sua URL ",Object(i.b)("strong",{parentName:"p"},"n\xe3o cont\xe9m as informa\xe7\xf5es da cobran\xe7a, mas apenas o token de notifica\xe7\xe3o.")," Todas as informa\xe7\xf5es sobre a referida cobran\xe7a ser\xe3o retornadas assim que voc\xea consumir o endpoint ",Object(i.b)("inlineCode",{parentName:"p"},"GET /notification/:token"),"."))),Object(i.b)("br",null),Object(i.b)("p",null,'O que ocorre, na realidade, \xe9 uma "via de m\xe3o dupla", ou seja, a Gerencianet dispara um POST para sua URL de notifica\xe7\xe3o a cada mudan\xe7a no status da cobran\xe7a e, em seguida, seu sistema, em posse do token de notifica\xe7\xe3o, envia uma requisi\xe7\xe3o de consumo ao endpoint ',Object(i.b)("code",null,"GET /notification/:token"),", em que ",Object(i.b)("code",null,":token")," \xe9 o token de notifica\xe7\xe3o contido no POST enviado."),Object(i.b)("p",null,"Dessa forma, podemos considerar que:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Subaba ",Object(i.b)("code",null,"Hist\xf3rico de Notifica\xe7\xf5es")," : indica os POSTs que a Gerencianet dispara para a URL de notifica\xe7\xe3o cadastrada.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Subaba ",Object(i.b)("code",null,"Hist\xf3rico de Requisi\xe7\xf5es")," : ao receber com sucesso em sua URL o POST da Gerencianet, seu sistema consultar\xe1 o endpoint ",Object(i.b)("code",null,"GET /notification/:token"),", em que ",Object(i.b)("code",null,":token")," ser\xe1 o token de notifica\xe7\xe3o que te enviamos."))),Object(i.b)("p",null,"O fluxo \xe9 determinado pela seguinte ordem:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A Gerencianet dispara o POST contendo o token de notifica\xe7\xe3o para a URL de notifica\xe7\xe3o cadastrada sempre que houver uma mudan\xe7a no status da cobran\xe7a. Detalhes podem ser observados na subaba ",Object(i.b)("code",null,"Hist\xf3rico de Notifica\xe7\xf5es"),";")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Sua URL recebeu o POST, fazendo com que seu sistema envie uma requisi\xe7\xe3o ",Object(i.b)("code",null,"GET")," para a rota ",Object(i.b)("code",null,"/notification/:token"),", em que ",Object(i.b)("code",null,":token")," ser\xe1 o token de notifica\xe7\xe3o que enviamos para voc\xea. Voc\xea pode visualizar esta requisi\xe7\xe3o na subaba ",Object(i.b)("code",null,"Hist\xf3rico de Requisi\xe7\xf5es"),"."))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"IMPORTANTE")),Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Se o integrador consulta o token enviado, consideramos que a notifica\xe7\xe3o foi realizada com sucesso. Caso n\xe3o consulte, tentamos novamente por at\xe9 3 dias."),Object(i.b)("p",{parentName:"div"},"Ou seja, se houver uma requisi\xe7\xe3o ao endpoint ",Object(i.b)("inlineCode",{parentName:"p"},"GET /notification/:token"),", entendemos que voc\xea recebeu o POST com o token de notifica\xe7\xe3o e que o consultou, recebendo como resposta todos os dados informativos sobre a altera\xe7\xe3o sofrida pela cobran\xe7a, como o status anterior e atual da cobran\xe7a."),Object(i.b)("p",{parentName:"div"},"Esta informa\xe7\xe3o pode ser visualizada na subaba ",Object(i.b)("inlineCode",{parentName:"p"},"Hist\xf3rico de Requisi\xe7\xf5es"),", buscando pelo token de notifica\xe7\xe3o em quest\xe3o."))),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"Para facilitar o entendimento e a visualiza\xe7\xe3o dos cen\xe1rios, vamos a alguns exemplos:"),Object(i.b)("h2",{id:"exemplo-1-notifica\xe7\xe3o-com-sucesso-200"},'Exemplo 1: Notifica\xe7\xe3o com "Sucesso (200)"'),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"../../img/Notificacao_Status_200.gif",alt:"alt text",title:"sucesso (200)"}))),Object(i.b)("p",null,"Nesta anima\xe7\xe3o, demonstramos um cen\xe1rio no qual o integrador recebeu com sucesso em sua URL de notifica\xe7\xe3o o POST enviado pela Gerencianet e, em seguida, consultou em nosso webservice o conte\xfado deste token de notifica\xe7\xe3o."),Object(i.b)("p",null,"Para que voc\xea mesmo possa conferir, acesse primeiramente a subaba ",Object(i.b)("inlineCode",{parentName:"p"},"Hist\xf3rico de Notifica\xe7\xf5es")," e, em posse do token de notifica\xe7\xe3o da cobran\xe7a que deseja verificar, acesse a subaba ",Object(i.b)("inlineCode",{parentName:"p"},"Hist\xf3rico de Requisi\xe7\xf5es"),', pesquise pelo referido token e, ao encontr\xe1-lo, clique no \xedcone de um "',Object(i.b)("em",{parentName:"p"},"olho"),'" presente na \xfaltima coluna. Desta forma, voc\xea visualizar\xe1 todas as informa\xe7\xf5es da referida cobran\xe7a que seu sistema consultou (leu).'),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"INFORMA\xc7\xc3O")),Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Na sub-aba ",Object(i.b)("inlineCode",{parentName:"p"},"Hist\xf3rico de Notifica\xe7\xf5es"),", a exibi\xe7\xe3o da resposta ",Object(i.b)("inlineCode",{parentName:"p"},"Sucesso (200)")," indica apenas que o POST foi enviado com sucesso para sua URL de notifica\xe7\xe3o, mas n\xe3o garante que o seu sistema foi capaz de ler e gravar as informa\xe7\xf5es do seu lado. Para isso, \xe9 necess\xe1rio acessar a subaba ",Object(i.b)("inlineCode",{parentName:"p"},"Hist\xf3rico de Requisi\xe7\xf5es")," e localizar a linha contendo o consumo do ",Object(i.b)("inlineCode",{parentName:"p"},"GET /notification/:token"),"."))),Object(i.b)("br",null),Object(i.b)("p",null,"Resumo das etapas seguidas:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Gerencianet enviou com sucesso uma notifica\xe7\xe3o (POST) para sua URL de notifica\xe7\xe3o (vide subaba ",Object(i.b)("inlineCode",{parentName:"p"},"Hist\xf3rico de Notifica\xe7\xf5es"),");"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Este POST cont\xe9m apenas o token de notifica\xe7\xe3o, que \xe9 ",Object(i.b)("inlineCode",{parentName:"li"},"7dd52fed-3d0a-42c8-b3fb-fc24f1d75303"),";"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Assim que a URL recebeu a notifica\xe7\xe3o, seu sistema enviou uma requisi\xe7\xe3o ",Object(i.b)("inlineCode",{parentName:"p"},"GET")," para a rota ",Object(i.b)("inlineCode",{parentName:"p"},"/notification/7dd52fed-3d0a-42c8-b3fb-fc24f1d75303")," (vide subaba ",Object(i.b)("inlineCode",{parentName:"p"},"Hist\xf3rico de Requisi\xe7\xf5es"),");"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Neste momento, seu sistema recebeu como resposta um JSON com todos os dados informativos sobre a altera\xe7\xe3o ocorrida na cobran\xe7a;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Para este exemplo, todo o fluxo foi realizado com sucesso"),": disparamos a notifica\xe7\xe3o contendo o token de notifica\xe7\xe3o e, em seguida, seu sistema consultou nosso webservice para saber (ler) as informa\xe7\xf5es da referida cobran\xe7a.   "))),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h2",{id:"exemplo-2-notifica\xe7\xe3o-com-falha-404"},'Exemplo 2: Notifica\xe7\xe3o com "Falha (404)"'),Object(i.b)("p",null,Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"../../img/Notificacao_Status_404.gif",alt:"alt text",title:"falha (404)"}))),Object(i.b)("p",null,"Nesta anima\xe7\xe3o, demonstramos um cen\xe1rio no qual a Gerencianet efetuou o envio do POST (notifica\xe7\xe3o), mas em ",Object(i.b)("code",null,"Hist\xf3rico de Notifica\xe7\xf5es")," est\xe1 sendo exibida a resposta ",Object(i.b)("code",null,"Falha (404)"),"."),Object(i.b)("p",null,"Esta ",Object(i.b)("code",null,"Falha (404)")," indica que o recurso requisitado n\xe3o foi encontrado. Voc\xea deve certificar que sua URL est\xe1 correta, pois tentamos entregar a notifica\xe7\xe3o na URL que voc\xea nos forneceu, mas o endere\xe7o n\xe3o foi localizado."),Object(i.b)("p",null,"Portanto, como seu sistema n\xe3o foi capaz de receber nosso callback, voc\xea ",Object(i.b)("strong",{parentName:"p"},"n\xe3o visualizar\xe1")," o consumo do ",Object(i.b)("code",null,"GET /notification/:token")," na subaba ",Object(i.b)("code",null,"Hist\xf3rico de Requisi\xe7\xf5es"),"."),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Solu\xe7\xf5es Sugeridas:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Voc\xea poder\xe1 ajustar o caminho da URL no lado de seu servidor;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Atualizar a URL de notifica\xe7\xe3o para o novo (e correto) endere\xe7o. Para isso, voc\xea poder\xe1 enviar requisi\xe7\xf5es ",Object(i.b)("inlineCode",{parentName:"p"},"PUT")," para a rota adequada da API, atentando-se ao limite de at\xe9 7.500 requisi\xe7\xf5es a cada 24 hs para este endpoint."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Ap\xf3s alterar a URL de notifica\xe7\xe3o, vamos continuar disparando a notifica\xe7\xe3o da cobran\xe7a, mas agora para a nova URL fornecida, desde que nosso primeiro envio n\xe3o tenha sido h\xe1 mais de 3 dias. Neste caso, voc\xea poder\xe1 reenviar os callbacks da API ",Object(i.b)("a",{href:"https://gerencianet.com.br/artigo/fazer-o-reenvio-de-callback-na-api/",target:"_blank",title:"Link Externo"},"seguindo orienta\xe7\xf5es de nossa FAQ"),".")))),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h2",{id:"exemplo-3-notifica\xe7\xe3o-com-falha-301-ou-falha-302"},'Exemplo 3: Notifica\xe7\xe3o com "Falha (301)" ou "Falha (302)"'),Object(i.b)("p",null,Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"../../img/Notificacao_Status_301.gif",alt:"alt text",title:"falha (301)"}))),Object(i.b)("p",null,"Nesta anima\xe7\xe3o, demonstramos um cen\xe1rio no qual a Gerencianet efetuou o envio do POST (notifica\xe7\xe3o), mas em ",Object(i.b)("inlineCode",{parentName:"p"},"Hist\xf3rico de Notifica\xe7\xf5es")," est\xe1 sendo exibida a resposta ",Object(i.b)("inlineCode",{parentName:"p"},"Falha (301)")," ou ",Object(i.b)("inlineCode",{parentName:"p"},"Falha (302)"),"."),Object(i.b)("p",null,"Estas situa\xe7\xf5es ocorrem quando existe um redirecionamento permanente ou tempor\xe1rio (301 ou 302, respectivamente) em seu servidor, afetando especificamente a entrega da notifica\xe7\xe3o para a URL de notifica\xe7\xe3o que voc\xea definiu previamente. Alguns exemplos comuns de quando isto ocorre:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Voc\xea definiu sua URL de notifica\xe7\xe3o como ",Object(i.b)("inlineCode",{parentName:"p"},"http://www.meusite.com.br"),", mas posteriormente instalou HTTPS/SSL em seu servidor e seu endere\xe7o ficou como ",Object(i.b)("inlineCode",{parentName:"p"},"https://www.meusite.com.br"),";")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Sua URL de notifica\xe7\xe3o era ",Object(i.b)("inlineCode",{parentName:"p"},"https://www.meusite.com.br"),", mas posteriormente voc\xea criou regras em seu servidor (via htaccess, web.config, etc) e o endere\xe7o passou a responder apenas como ",Object(i.b)("inlineCode",{parentName:"p"},"https://meusite.com.br"),"."))),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Solu\xe7\xf5es Sugeridas:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ajustar melhor a regra do redirecionamento 301 e/ou 302 em seu servidor;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Atualizar a URL de notifica\xe7\xe3o para o novo (e correto) endere\xe7o. Para isso, voc\xea poder\xe1 enviar requisi\xe7\xf5es ",Object(i.b)("inlineCode",{parentName:"p"},"PUT")," para a ",Object(i.b)("inlineCode",{parentName:"p"},"rota adequada da API"),", atentando-se ao limite de at\xe9 7.500 requisi\xe7\xf5es a cada 24 hs para este endpoint."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Ap\xf3s alterar a URL de notifica\xe7\xe3o, vamos continuar disparando a notifica\xe7\xe3o da cobran\xe7a, mas agora para a nova URL fornecida, desde que nosso primeiro envio n\xe3o tenha sido h\xe1 mais de 3 dias. Neste caso, voc\xea poder\xe1 reenviar os callbacks da API ",Object(i.b)("a",{href:"https://gerencianet.com.br/artigo/fazer-o-reenvio-de-callback-na-api/",target:"_blank",title:"Link Externo"},"seguindo orienta\xe7\xf5es de nossa FAQ"),".")))),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h2",{id:"exemplo-4-notifica\xe7\xe3o-com-falha-500"},'Exemplo 4: Notifica\xe7\xe3o com "Falha (500)"'),Object(i.b)("p",null,Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"../../img/Notificacao_Status_500.gif",alt:"alt text",title:"falha (500)"}))),Object(i.b)("p",null,"Nesta anima\xe7\xe3o, demonstramos um cen\xe1rio no qual a Gerencianet efetuou o envio do POST (notifica\xe7\xe3o), mas em ",Object(i.b)("code",null,"Hist\xf3rico de Notifica\xe7\xf5es")," est\xe1 sendo exibida a resposta ",Object(i.b)("code",null,"Falha (500)"),"."),Object(i.b)("p",null,"Respostas contendo ",Object(i.b)("code",null,"Falha (500)")," ou ",Object(i.b)("code",null,"500 Internal Server Error")," s\xe3o um status de erro HTTP que indica que o servidor encontrou uma condi\xe7\xe3o inesperada e que o impediu de atender \xe0 solicita\xe7\xe3o."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"O erro, no entanto, \xe9 uma mensagem gen\xe9rica e abrangente")," que indica uma dificuldade no processamento em seu servidor e pode ocorrer por diversos fatores."),Object(i.b)("p",null,"Por isso, \xe0s vezes, ",Object(i.b)("strong",{parentName:"p"},"os arquivos de log de seu servidor")," podem responder com um status ",Object(i.b)("em",{parentName:"p"},"code 500")," acompanhado de mais detalhes sobre o ",Object(i.b)("em",{parentName:"p"},"request")," para evitar que no futuro erros desse tipo possam voltar a acontecer. ",Object(i.b)("strong",{parentName:"p"},"Por isso, \xe9 sempre de extrema import\xe2ncia que voc\xea veja a mensagem de erro do log de seu servidor para ajud\xe1-lo a resolver.")),Object(i.b)("p",null,"A seguir, listamos as poss\xedveis causas que voc\xea pode explorar para solucionar o erro:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Arquivo de configura\xe7\xe3o em seu servidor, como ",Object(i.b)("code",null,".htaccess"),", ",Object(i.b)("code",null,"php.ini")," ou ",Object(i.b)("code",null,"web.config")," com par\xe2metros inv\xe1lidos.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Bloqueio em seu servidor (rede, firewall, pol\xedticas, etc): algumas aplica\xe7\xf5es e servi\xe7os podem ter determinados filtros, por isso, assegure-se que ",Object(i.b)("a",{href:"https://gerencianet.com.br/artigo/quais-enderecos-de-ip-gerencianet-utiliza/",target:"_blank"},"nossos endere\xe7os IP's")," estejam liberados.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Alto consumo de recursos em seu servidor ou limite de processos: hosts compartilhados s\xe3o mais suscet\xedveis a este tipo de situa\xe7\xe3o.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Timeout")," em seu servidor.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Permiss\xf5es incorretas no servidor em arquivos e/ou pastas.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Limite de mem\xf3ria e diretivas do PHP setadas no arquivo ",Object(i.b)("code",null,"php.ini"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Conflito entre vers\xf5es de PHP em seu host.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Possibilidade de plugins, m\xf3dulos, extens\xf5es ou temas terem causado o erro por incompatibilidade ou atualiza\xe7\xf5es autom\xe1ticas."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"DICA")),Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Por se tratar de um erro gen\xe9rico, \xe9 importante que voc\xea consulte e interprete os logs de erros do seu servidor:")),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Apache:")," ",Object(i.b)("inlineCode",{parentName:"li"},"/var/log/apache2/error.log")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"NGINX:")," ",Object(i.b)("inlineCode",{parentName:"li"},"/var/log/nginx/error.log"))),Object(i.b)("p",{parentName:"div"},"Caso n\xe3o tenha acesso a tais informa\xe7\xf5es, entre em contato com o seu provedor de hospedagem ou sua equipe t\xe9cnica respons\xe1vel pela infraestrutura de rede."))),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h2",{id:"c\xf3digos-de-status-http-2xx-3xx-4xx-e-5xx"},"C\xf3digos de status HTTP (2xx, 3xx, 4xx e 5xx)"),Object(i.b)("p",null,"A Gerencianet utiliza respostas HTTP para indicar sucesso ou falha nas requisi\xe7\xf5es. Geralmente, voc\xea consegue visualiz\xe1-los atrav\xe9s da subaba ",Object(i.b)("code",null,"Hist\xf3rico de Notifica\xe7\xf5es"),"."),Object(i.b)("p",null,"Comumente, quando retornamos respostas com status ",Object(i.b)("code",null,"2xx")," significa que houve sucesso na requisi\xe7\xe3o; status ",Object(i.b)("code",null,"3xx")," indicam redirecionamento; status ",Object(i.b)("code",null,"4xx")," indicam falhas no envio de dados por parte do cliente; status ",Object(i.b)("code",null,"5xx")," indicam erros internos de servidor."),Object(i.b)("p",null,"A seguir, tabela apresentando os c\xf3digos HTTP das respostas mais comuns, bem como suas explica\xe7\xf5es e solu\xe7\xf5es:"),Object(i.b)("table",null,Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("th",{align:"center"},"C\xf3digo"),Object(i.b)("th",{align:"center"},"Nome"),Object(i.b)("th",{align:"center"},"Descri\xe7\xe3o")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"200")),Object(i.b)("td",{align:"left"},"OK"),Object(i.b)("td",{align:"center"},"Requisi\xe7\xe3o ocorreu com sucesso.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"301")),Object(i.b)("td",{align:"left"},"Moved Permanently"),Object(i.b)("td",{align:"left"},"Redirecionamento de uma p\xe1gina para outro endere\xe7o, de forma permanente.",Object(i.b)("br",null),"Voc\xea deve atualizar para a URL correta para recebimento do token de notifica\xe7\xe3o.",Object(i.b)("br",null)," O ajuste da URL pode ser realizada no lado de seu servidor ou enviando requisi\xe7\xf5es ",Object(i.b)("code",null,"PUT")," para a rota adequada (saiba como).")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"302")),Object(i.b)("td",{align:"left"},"Found"),Object(i.b)("td",{align:"left"},"Redirecionamento de uma p\xe1gina para outro endere\xe7o, mas com indica\xe7\xe3o de car\xe1ter tempor\xe1rio, n\xe3o permanente.",Object(i.b)("br",null),"Voc\xea deve atualizar para a URL correta para recebimento do token de notifica\xe7\xe3o.",Object(i.b)("br",null),"O ajuste da URL pode ser realizada no lado de seu servidor ou enviando requisi\xe7\xf5es PUT para a rota adequada (saiba como).")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"400")),Object(i.b)("td",{align:"left"},"Bad Request"),Object(i.b)("td",{align:"left"},'Algum par\xe2metro obrigat\xf3rio n\xe3o foi enviado ou foi enviado de maneira inv\xe1lida.Consulte o "hist\xf3rico de requisi\xe7\xf5es" para interpretar os retornos da API (saiba como) e corrija a sintaxe e/ou par\xe2metros da requisi\xe7\xe3o que est\xe1 enviando \xe0 API Gerencianet.',Object(i.b)("br",null))),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"401")),Object(i.b)("td",{align:"left"},"Not Found"),Object(i.b)("td",{align:"left"},"O recurso requisitado n\xe3o foi encontrado. Ou seja, o retorno 404 surge quando o recurso (URL/documento/arquivo) requisitado a um servidor de destino n\xe3o existe ou n\xe3o \xe9 encontrado. ",Object(i.b)("br",null)," Certifique-se que sua URL est\xe1 correta para o recebimento do token de notifica\xe7\xe3o.",Object(i.b)("br",null),"O ajuste da URL pode ser realizada no lado de seu servidor ou enviando requisi\xe7\xf5es PUT para a rota adequada (saiba como).")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"404")),Object(i.b)("td",{align:"left"},"Not Found"),Object(i.b)("td",{align:"center"},"O recurso requisitado n\xe3o foi encontrado. Ou seja, o retorno 404 surge quando o recurso (URL/documento/arquivo) requisitado a um servidor de destino n\xe3o existe ou n\xe3o \xe9 encontrado. ",Object(i.b)("br",null)," Certifique-se que sua URL est\xe1 correta para o recebimento do token de notifica\xe7\xe3o. ",Object(i.b)("br",null)," O ajuste da URL pode ser realizada no lado de seu servidor ou enviando requisi\xe7\xf5es PUT para a rota adequada (saiba como).")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"500")),Object(i.b)("td",{align:"left"},"Internal Server Error"),Object(i.b)("td",{align:"center"},"Erro interno do servidor. O servidor encontrou uma condi\xe7\xe3o inesperada que impediu o cumprimento da solicita\xe7\xe3o. Normalmente indica erro oriundo do servidor web. Uma causa comum \xe9 algum erro no ",Object(i.b)("code",null,".htaccess"),". Para apurar, leia o log de erros do seu servidor.",Object(i.b)("br",null)," Vale lembrar que esse tipo de erro n\xe3o \xe9 acess\xedvel pelo PHP, por isso voc\xea n\xe3o conseguir\xe1 ler os detalhes do log ativando a exibi\xe7\xe3o dos erros no PHP. ",Object(i.b)("br",null),"Contudo, nem sempre o erro \xe9 do webserver, pois \xe9 poss\xedvel configurar o ambiente para que erros do PHP ou outro m\xf3dulo, por exemplo, sejam tratados pelo webserver com o status 500.  ")))),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"NOTA")),Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Caso esteja se deparando com algum c\xf3digo de resposta diferente dos citados acima, recomendamos que acesse a ",Object(i.b)("a",{href:"https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP",target:"_blank"},"rela\xe7\xe3o de c\xf3digos de estado HTTP")," da Wikipedia e confira.")))))}d.isMDXComponent=!0},237:function(e,a,o){"use strict";o.d(a,"a",(function(){return d})),o.d(a,"b",(function(){return p}));var t=o(0),n=o.n(t);function i(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){i(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var b=n.a.createContext({}),l=function(e){var a=n.a.useContext(b),o=a;return e&&(o="function"==typeof e?e(a):c(c({},a),e)),o},d=function(e){var a=l(e.components);return n.a.createElement(b.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var o=e.components,t=e.mdxType,i=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=l(o),m=t,p=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return o?n.a.createElement(p,c(c({ref:a},b),{},{components:o})):n.a.createElement(p,c({ref:a},b))}));function p(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=o.length,r=new Array(i);r[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,r[1]=c;for(var b=2;b<i;b++)r[b]=o[b];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);