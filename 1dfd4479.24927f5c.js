(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{125:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return b}));var o=t(2),n=t(6),r=(t(0),t(243)),i=(t(245),{id:"OpenCart",title:"OpenCart",hide_title:!0,sidebar_label:"OpenCart"}),c={id:"Modulos/OpenCart",isDocsHomePage:!1,title:"OpenCart",description:"OpenCart - Boleto e cart\xe3o",source:"@site/docs\\Modulos\\OpenCart.md",permalink:"/documentation/docs/Modulos/OpenCart",sidebar_label:"OpenCart"},s=[{value:"1. Requisitos do sistema",id:"1-requisitos-do-sistema",children:[]},{value:"1.1. Vers\xf5es do m\xf3dulo Gerencianet para OpenCart",id:"11-vers\xf5es-do-m\xf3dulo-gerencianet-para-opencart",children:[]},{value:"2. Pr\xe9-Instala\xe7\xe3o",id:"2-pr\xe9-instala\xe7\xe3o",children:[]},{value:"3. Instala\xe7\xe3o",id:"3-instala\xe7\xe3o",children:[{value:"3.1. Instala\xe7\xe3o Autom\xe1tica",id:"31-instala\xe7\xe3o-autom\xe1tica",children:[]},{value:"3.2. Instala\xe7\xe3o Manual",id:"32-instala\xe7\xe3o-manual",children:[]}]},{value:"4. Configura\xe7\xf5es",id:"4-configura\xe7\xf5es",children:[{value:"Aba &quot;Configura\xe7\xf5es Gerais&quot;",id:"aba-configura\xe7\xf5es-gerais",children:[]},{value:"Credenciais",id:"credenciais",children:[]},{value:"Aba &quot;Status da Compra&quot;",id:"aba-status-da-compra",children:[]}]},{value:"5. Funcionamento do M\xf3dulo",id:"5-funcionamento-do-m\xf3dulo",children:[]},{value:"6. Vers\xf5es do M\xf3dulo Gerencianet para OpenCart",id:"6-vers\xf5es-do-m\xf3dulo-gerencianet-para-opencart",children:[]},{value:"7. D\xfavidas Frequentes",id:"7-d\xfavidas-frequentes",children:[]},{value:"8. Suporte e Sugest\xf5es",id:"8-suporte-e-sugest\xf5es",children:[]}],l={rightToc:s};function b(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{className:"titulo"},"OpenCart - Boleto e cart\xe3o"),Object(r.b)("div",{className:"subtitulo"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"M\xf3dulo de Integra\xe7\xe3o Gerencianet para OpenCart 3.x - Vers\xe3o 3.1.1 (BETA)")),Object(r.b)("p",null,"O m\xf3dulo Gerencianet para OpenCart permite receber pagamentos por meio do checkout transparente da nossa API. Este m\xf3dulo \xe9 o M\xf3dulo Oficial da Gerencianet para o OpenCart, ",Object(r.b)("strong",{parentName:"p"},"compat\xedvel apenas com as vers\xf5es do OpenCart superior a 3.0.2.0"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Caso voc\xea tenha uma vers\xe3o inferior do Opencart"),", verifique a vers\xe3o correta do m\xf3dulo a ser baixado na tabela abaixo, atentando-se \xe0 vers\xe3o de seu OpenCart."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Bolix")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Caso voc\xea tenha ativado o Bolix em sua conta Gerencianet, as cobran\xe7as geradas pelo nosso m\xf3dulo/plugin j\xe1 v\xe3o vir com o pix no boleto.\nMais detalhes sobre o Bolix e como ativ\xe1-lo, click ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../Bolix/bolix"}),"aqui"),"."))),Object(r.b)("h2",{id:"1-requisitos-do-sistema"},"1. Requisitos do sistema"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Vers\xe3o do PHP: ",Object(r.b)("inlineCode",{parentName:"li"},"5.4.0")," \xe0 ",Object(r.b)("inlineCode",{parentName:"li"},"7.0.3"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"O OpenCart necessita das seguintes extens\xf5es do PHP ativadas:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"curl")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"dom")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"gd")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"xml")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("code",null,"zip"))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\xc9 necess\xe1rio que o ",Object(r.b)("inlineCode",{parentName:"li"},"Real Brasileiro")," esteja configurado como moeda padr\xe3o no Opencart."),Object(r.b)("li",{parentName:"ul"},"Vers\xe3o do OpenCart: ",Object(r.b)("em",{parentName:"li"},"Vide tabela abaixo"))),Object(r.b)("br",null),Object(r.b)("h2",{id:"11-vers\xf5es-do-m\xf3dulo-gerencianet-para-opencart"},"1.1. Vers\xf5es do m\xf3dulo Gerencianet para OpenCart"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Vers\xe3o do m\xf3dulo Gerencianet"),Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:"center"}),"Status"),Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:"right"}),"Reposit\xf3rio (branch)"),Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:"right"}),"Vers\xe3o do OpenCart Compat\xedvel(*)"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"0.4.1"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:"center"}),"Mantido"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:"right"}),Object(r.b)("a",{href:"https://github.com/gerencianet/gn-api-opencart/archive/1.x.zip",target:"_blank"},"Download v1")),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:"right"}),Object(r.b)("inlineCode",{parentName:"td"},"2.0.0.0")," \xe0 ",Object(r.b)("inlineCode",{parentName:"td"},"2.2.0.0"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"2.1.1"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:"center"}),"Mantido"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:"right"}),Object(r.b)("a",{href:"https://github.com/gerencianet/gn-api-opencart/archive/2.x.zip",target:"_blank"},"Download v2")),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:"right"}),Object(r.b)("inlineCode",{parentName:"td"},"2.x"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"3.1.1 (beta)"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:"center"}),"Mantido"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:"right"}),Object(r.b)("a",{href:"https://github.com/gerencianet/gn-api-opencart/archive/master.zip",target:"_blank"},"Download v3")),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:"right"}),Object(r.b)("inlineCode",{parentName:"td"},"3.0.2.0"))))),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"IMPORTANTE")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"(*) Os requisitos do sistema foram definidos de acordo com os nossos testes. Se seu sistema n\xe3o se encaixa nos requisitos, n\xe3o significa que algum dos tr\xeas m\xf3dulos disponibilizados n\xe3o funcionar\xe3o em seu OpenCart, mas sim, que n\xe3o testamos no mesmo ambiente."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Portanto, n\xe3o garantimos o funcionamento deste m\xf3dulo em ambientes diferentes dos citados acima.")))),Object(r.b)("br",null),Object(r.b)("h2",{id:"2-pr\xe9-instala\xe7\xe3o"},"2. Pr\xe9-Instala\xe7\xe3o"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Este passo s\xf3 deve ser seguido caso voc\xea tenha a vers\xe3o antiga do m\xf3dulo Gerencianet/Opencart e o Opencart 3.0.x.")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Desinstale o m\xf3dulo antigo da Gerencianet;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Apague os seguintes arquivos no servidor onde o OpenCart est\xe1 instalado:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"loja/admin/controller/payment/gerencianet.php\n\nloja/admin/language/en-gb/payment/gerencianet.php\n\nloja/admin/view/template/payment/gerencianet.tpl\n\nloja/catalog/controller/payment/gerencianet.php\n\nloja/catalog/language/en-gb/payment/gerencianet.php\n\nloja/catalog/model/payment/gerencianet.php\n\nloja/catalog/view/theme/default/template/payment/gerencianet.tpl\n\nloja/catalog/view/theme/default/template/payment/gerencianet_payment.tpl\n\nloja/catalog/view/theme/default/template/payment/gerencianet_success.tpl\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"ATEN\xc7\xc3O")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Nenhum diret\xf3rio deve ser apagado, apenas os arquivos citados acima."))),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"3-instala\xe7\xe3o"},"3. Instala\xe7\xe3o"),Object(r.b)("p",null,"O m\xf3dulo da Gerencianet para OpenCart pode ser instalado de duas formas:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(o.a)({parentName:"em"},{href:"#31-instala%C3%A7%C3%A3o-autom%C3%A1tica"}),"Instala\xe7\xe3o Autom\xe1tica"),":")," utilizando o arquivo de instala\xe7\xe3o do m\xf3dulo compactado atrav\xe9s da ferramenta de adicionar nova extens\xe3o do OpenCart;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(o.a)({parentName:"em"},{href:"#32-instala%C3%A7%C3%A3o-manual"}),"Instala\xe7\xe3o Manual"),":")," os arquivos do m\xf3dulo devem ser enviados manualmente para o servidor de hospedagem via FTP."))),Object(r.b)("br",null),Object(r.b)("h3",{id:"31-instala\xe7\xe3o-autom\xe1tica"},"3.1. Instala\xe7\xe3o Autom\xe1tica"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fa\xe7a o download do ",Object(r.b)("a",{href:"https://github.com/gerencianet/gn-api-opencart/blob/master/auto",target:"_blank"},"instalador autom\xe1tico do m\xf3dulo"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Na administra\xe7\xe3o da loja OpenCart, acesse o menu ",Object(r.b)("code",null,"System > Settings")," (ou ",Object(r.b)("code",null,"Configura\xe7\xf5es > Lojas"),") e clique no bot\xe3o ",Object(r.b)("code",null,"Edit")," (ou ",Object(r.b)("code",null,"Editar"),"). Na aba FTP, preencha as informa\xe7\xf5es de acesso ao FTP de sua hospedagem. Tenha aten\xe7\xe3o especial ao campo ",Object(r.b)("code",null,"FTP Root")," (ou ",Object(r.b)("code",null,"Diret\xf3rio FTP"),"), que \xe9 o caminho completo para o diret\xf3rio raiz em que est\xe1 instalado o seu OpenCart. Em seguida, clique no bot\xe3o ",Object(r.b)("code",null,"Save")," (ou ",Object(r.b)("code",null,"Salvar"),");")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Acesse o menu ",Object(r.b)("code",null,"Extensions > Extension Installer")," (ou ",Object(r.b)("code",null,"Extens\xf5es > Instalador"),"), clique no bot\xe3o ",Object(r.b)("code",null,"Upload"),", selecione o arquivo ",Object(r.b)("code",null,"gerencianet.ocmod.zip")," (citado na primeira instru\xe7\xe3o) e aguarde a conclus\xe3o da instala\xe7\xe3o autom\xe1tica."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Caso voc\xea j\xe1 tenha instalado o m\xf3dulo da Gerencianet anteriormente, o OpenCart poder\xe1 informar que alguns arquivos ser\xe3o sobrescritos. N\xe3o se preocupe, pois a instala\xe7\xe3o n\xe3o afetar\xe1 qualquer arquivo que n\xe3o seja do m\xf3dulo da Gerencianet j\xe1 existente em sua loja.")))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"ATEN\xc7\xc3O")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Devido ao tamanho do arquivo de instala\xe7\xe3o do m\xf3dulo, talvez seja necess\xe1rio alterar o par\xe2metro ",Object(r.b)("inlineCode",{parentName:"p"},"php_max_upload")," do ",Object(r.b)("inlineCode",{parentName:"p"},"php.ini")," para, no m\xednimo, 3 mb."))),Object(r.b)("br",null),Object(r.b)("h3",{id:"32-instala\xe7\xe3o-manual"},"3.2. Instala\xe7\xe3o Manual"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Fa\xe7a o download dos ",Object(r.b)("a",{href:"https://github.com/gerencianet/gn-api-opencart/blob/master/manual",target:"_blank"},"arquivos da \xfaltima vers\xe3o do m\xf3dulo"),";")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Descompacte os arquivos baixados e realize o upload das pastas ",Object(r.b)("code",null,"admin"),", ",Object(r.b)("code",null,"catalog")," e ",Object(r.b)("code",null,"lib")," para dentro do diret\xf3rio principal do OpenCart*."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",null,"*Caso voc\xea j\xe1 tenha instalado o m\xf3dulo da Gerencianet anteriormente, o OpenCart poder\xe1 informar que alguns arquivos ser\xe3o sobrescritos. N\xe3o se preocupe, pois a instala\xe7\xe3o n\xe3o afetar\xe1 qualquer arquivo que n\xe3o seja do m\xf3dulo da Gerencianet j\xe1 existente em sua loja."))))),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"4-configura\xe7\xf5es"},"4. Configura\xe7\xf5es"),Object(r.b)("p",null,"Ao acessar ",Object(r.b)("code",null,"Extensions > Payments")," (ou ",Object(r.b)("code",null,"Extens\xf5es > Pagamentos"),"), voc\xea j\xe1 visualizar\xe1 o m\xf3dulo da Gerencianet dispon\xedvel na lista. Clique em ",Object(r.b)("code",null,"Install")," para instalar o m\xf3dulo e depois em ",Object(r.b)("code",null,"edit")," para iniciar a configura\xe7\xe3o."),Object(r.b)("p",null,"Tr\xeas abas estar\xe3o dispon\xedveis para realizar a configura\xe7\xe3o do m\xf3dulo:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Configura\xe7\xf5es Gerais"),Object(r.b)("li",{parentName:"ul"},"Credenciais"),Object(r.b)("li",{parentName:"ul"},"Status da Compra")),Object(r.b)("br",null),Object(r.b)("h3",{id:"aba-configura\xe7\xf5es-gerais"},'Aba "Configura\xe7\xf5es Gerais"'),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"../../img/opencart.png",alt:"alt text"}))),Object(r.b)("p",null,"Nesta aba, as seguintes propriedades podem ser configuradas:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Modo:")," Determina se o m\xf3dulo est\xe1 em modo de testes. No modo de teste voc\xea pode gerar cobran\xe7as fict\xedcias para testar o fluxo;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Pagamentos permitidos:")," Determina quais tipos de pagamentos ser\xe3o aceitos pelo m\xf3dulo;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Dias para vencimento do Boleto:")," Determina em quantos dias o boleto ir\xe1 vencer ap\xf3s a data de gera\xe7\xe3o;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Desconto para pagamento no Boleto:")," Voc\xea pode fornecer desconto para clientes que pagam por meio de Boleto Banc\xe1rio;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Instru\xe7\xf5es no Boleto Banc\xe1rio:")," Voc\xea pode definir quatro linhas com at\xe9 90 caracteres de instru\xe7\xf5es no Boleto Banc\xe1rio. Se as linhas n\xe3o forem preenchidas, ser\xe3o exibidas as instru\xe7\xf5es padr\xf5es no boleto;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Atualizar status dos pedidos do OpenCart automaticamente:")," Determina se o m\xf3dulo poder\xe1 atualizar automaticamente o status de um pedido de acordo com as notifica\xe7\xf5es de atualiza\xe7\xe3o enviadas pela Gerencianet;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Envio de e-mail autom\xe1tico da sua loja para notificar o cliente:")," Notifica o cliente por um e-mail da sua loja quando uma atualiza\xe7\xe3o do status autom\xe1tica for realizada. Independente da op\xe7\xe3o, a Gerencianet enviar\xe1 um e-mail para o cliente informando sobre a cobran\xe7a;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Status:")," Determina se o m\xf3dulo de pagamentos da Gerencianet est\xe1 Ativo ou Inativo."))),Object(r.b)("br",null),Object(r.b)("h3",{id:"credenciais"},"Credenciais"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"../../img/opencart2.png",alt:"alt text"}))),Object(r.b)("p",null,'Nesta aba \xe9 necess\xe1rio informar as credenciais de sua aplica\xe7\xe3o, isto \xe9, o "Client_Id" e "Client_Secret" (veja onde localizar, de acordo com o ambiente: ',Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/3d4208-de7a4092-1d7e-4526-9e20-dd7ed0329500.png",target:"_blank"},"desenvolvimento")," e ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/335826-79f10f33-9878-4898-8795-a49b798b7185.png",target:"_blank"},"produ\xe7\xe3o"),") da sua aplica\xe7\xe3o e o ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/24/matheus.rodrigues/b66b15-d2201967-d646-4988-8e39-cffae37df203.png",target:"_blank"},"identificador da conta")," obtido na aplica\xe7\xe3o criada na Gerencianet."),Object(r.b)("br",null),Object(r.b)("h3",{id:"aba-status-da-compra"},'Aba "Status da Compra"'),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"../../img/opencart3.png",alt:"alt text"}))),Object(r.b)("p",null,"Nesta aba \xe9 realizada a configura\xe7\xe3o dos Status de pagamento da Gerencianet com os Status de pagamento de sua loja. Assim, quando houver a altera\xe7\xe3o do status do pagamento na Gerencianet, o status do pedido em sua loja ser\xe1 atualizado automaticamente de acordo com as configura\xe7\xf5es definidas."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"ATEN\xc7\xc3O")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Importante salientar que ",Object(r.b)("strong",{parentName:"p"},"os boletos gerados em sandbox n\xe3o s\xe3o v\xe1lidos e n\xe3o podem ser pagos"),', possuem a linha digit\xe1vel "zerada" e uma marca d\'\xe1gua ao fundo informando ser um boleto de teste.'),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},'Os pagamentos de cobran\xe7as de sandbox utilizando cart\xe3o de cr\xe9dito s\xe3o fict\xedcios, mesmo se utilizar um cart\xe3o "real".'),' Todos os pagamentos de cart\xe3o neste ambiente ter\xe3o o pagamento confirmado automaticamente, mas \xe9 apenas uma altera\xe7\xe3o de status para "Pago". Este recurso permite que voc\xea teste a notifica\xe7\xe3o do status ',Object(r.b)("code",null,"paid"),"."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Isso significa que todos os pagamentos realizados em sandbox n\xe3o s\xe3o reais e, portanto, n\xe3o h\xe1 cobran\xe7a de nenhuma import\xe2ncia financeira.")," "),Object(r.b)("p",{parentName:"div"},"\xc9 importante saber que as palavras ",Object(r.b)("strong",{parentName:"p"},"Playground, Sandbox e Ambiente de Desenvolvimento"),", no contexto da Gerencianet, s\xe3o sin\xf4nimos no sentido de fazerem refer\xeancia ao local de testes que oferecemos em que voc\xea pode testar \xe0 vontade sua integra\xe7\xe3o com a API."))),Object(r.b)("br",null),Object(r.b)("h2",{id:"5-funcionamento-do-m\xf3dulo"},"5. Funcionamento do M\xf3dulo"),Object(r.b)("p",null,"Ap\xf3s ser habilitado, o m\xf3dulo j\xe1 estar\xe1 dispon\xedvel como uma op\xe7\xe3o de pagamento. Dependendo da sua configura\xe7\xe3o de habilitar ou n\xe3o a op\xe7\xe3o de ",Object(r.b)("code",null,"Checkout em um passo"),", a p\xe1gina que o cliente digitar\xe1 seus dados de pagamento ser\xe1 diferente. Se a op\xe7\xe3o de ",Object(r.b)("code",null,"Checkout em um passo")," estiver ativa, seu cliente ir\xe1 preencher os dados de pagamento na mesma tela de ",Object(r.b)("code",null,"Finalizar compra"),", conforme as figuras abaixo:"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"../../img/opencart4.png",alt:"alt text",title:"Boleto"}))),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"../../img/opencart5.png",alt:"alt text",title:"Cart\xe3o"}))),Object(r.b)("p",null,"Desta forma, ao clicar em ",Object(r.b)("code",null,"Finalizar Compra"),", os dados do cliente ser\xe3o validados e, caso esteja tudo correto, a cobran\xe7a ser\xe1 gerada e a compra finalizada. O cliente ent\xe3o \xe9 redirecionado para a p\xe1gina de compra finalizada."),Object(r.b)("p",null,"Caso a op\xe7\xe3o de ",Object(r.b)("code",null,"Checkout em um passo")," n\xe3o estiver ativa, seu cliente ir\xe1 preencher os dados pessoas e de entrega na p\xe1gina de ",Object(r.b)("code",null,"Finalizar Compra")," e ao clicar em ",Object(r.b)("code",null,"Confirmar Pedido")," ser\xe1 redirecionado para outra p\xe1gina para prosseguir com o pagamento, onde optar\xe1 pelas op\xe7\xf5es de pagamento da Gerencianet, conforme figura abaixo:"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"../../img/opencart6.png",alt:"alt text",title:"Selecione a forma de pagamento"}))),Object(r.b)("br",null),Object(r.b)("p",null,"Ambas as telas de pagamento podem sofrer mudan\xe7as de acordo com o tema utilizado na loja."),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"NOTA")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Se algum dos campos obrigat\xf3rios para o realizar o pagamento n\xe3o for preenchido corretamente, ele ser\xe1 cobrado novamente no formul\xe1rio de pagamento. Para ",Object(r.b)("strong",{parentName:"p"},"Boleto Banc\xe1rio"),", os campos obrigat\xf3rios s\xe3o: ",Object(r.b)("strong",{parentName:"p"},"Nome, E-mail, CPF")," e ",Object(r.b)("strong",{parentName:"p"},"Telefone"),". Para ",Object(r.b)("strong",{parentName:"p"},"Cart\xe3o de Cr\xe9dito"),", os campos obrigat\xf3rios s\xe3o: ",Object(r.b)("strong",{parentName:"p"},"Nome, E-mail, CPF, data de nascimento, Telefone, Endere\xe7o, N\xfamero, Bairro, CEP, Cidade")," e ",Object(r.b)("strong",{parentName:"p"},"Estado"),"."))),Object(r.b)("br",null),Object(r.b)("h2",{id:"6-vers\xf5es-do-m\xf3dulo-gerencianet-para-opencart"},"6. Vers\xf5es do M\xf3dulo Gerencianet para OpenCart"),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"NOTA")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Durante alguns testes realizados no Opencart 2.3.0.2 quanto \xe0 troca de idiomas para portugu\xeas/br, observamos um mal funcionamento da loja, ocasionando, por exemplo, exclus\xe3o de alguns produtos da loja, dentre outros problemas que foram identificados. Salientamos que estes problemas n\xe3o possuem nenhuma rela\xe7\xe3o com o m\xf3dulo disponibilizado pela Gerencianet."),Object(r.b)("p",{parentName:"div"},"Para solucionar, acesse ",Object(r.b)("a",{href:"https://github.com/opencartbrasil/traducao/issues/27",target:"_blank"},"este issue")," no github do OpenCart Brasil e confira como proceder."))),Object(r.b)("br",null),Object(r.b)("h2",{id:"7-d\xfavidas-frequentes"},"7. D\xfavidas Frequentes"),Object(r.b)("br",null),Object(r.b)("h4",{id:"71-\xe9-obrigat\xf3rio-possuir-ssl-em-minha-loja-para-aceitar-pagamentos-com-o-m\xf3dulo"},"7.1. \xc9 obrigat\xf3rio possuir SSL em minha loja para aceitar pagamentos com o m\xf3dulo?"),Object(r.b)("p",null,"Para que o m\xf3dulo da Gerencianet para OpenCart funcione, n\xe3o \xe9 necess\xe1rio que a loja possua um certificado SSL. Contudo, \xe9 extremamente recomendado pela Gerencianet que os lojistas utilizem. Independente da sua utiliza\xe7\xe3o, todos os dados de pagamento s\xe3o criptografados e transmitidos com seguran\xe7a para valida\xe7\xe3o do pagamento. A presen\xe7a de um certificado SSL instalado em sua loja garante maior seguran\xe7a para o lojista e para os clientes que realizam compras. A aus\xeancia do certificado SSL na tela de pagamento, pode fazer com que o lojista perca vendas, uma vez que o cliente pode se sentir inseguro para digitar dados de pagamento em uma p\xe1gina que n\xe3o possui um certificado."),Object(r.b)("br",null),Object(r.b)("h4",{id:"72-quero-usar-o-checkout-transparente-de-forma-que-o-cliente-n\xe3o-saia-da-minha-loja-para-realizar-o-pagamento-\xe9-poss\xedvel"},"7.2. Quero usar o Checkout Transparente de forma que o cliente n\xe3o saia da minha loja para realizar o pagamento. \xc9 poss\xedvel?"),Object(r.b)("p",null,"Sim. O m\xf3dulo da Gerencianet para OpenCart utiliza o checkout transparente para realizar o pagamento dos clientes, ou seja, em nenhum momento o cliente ir\xe1 sair da sua loja virtual para finalizar o pagamento. Assim, no \xfaltimo passo da compra, ser\xe1 solicitado ao clientes dos dados obrigat\xf3rios para efetivar o pagamento."),Object(r.b)("br",null),Object(r.b)("h4",{id:"73-\xe9-poss\xedvel-utilizar-as-funcionalidades-de-marketplace-ou-assinaturas-com-o-m\xf3dulo"},"7.3. \xc9 poss\xedvel utilizar as funcionalidades de MarketPlace ou Assinaturas com o m\xf3dulo?"),Object(r.b)("p",null,"Ainda n\xe3o. Acompanhe nosso ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../UltimasNovidades/changelog"}),"changelog")," para visualizar todas as novidades."),Object(r.b)("br",null),Object(r.b)("h4",{id:"74-as-parcelas-das-op\xe7\xf5es-de-pagamento-n\xe3o-est\xe3o-sendo-carregadas-como-corrigir"},"7.4. As parcelas das op\xe7\xf5es de pagamento n\xe3o est\xe3o sendo carregadas. Como corrigir?"),Object(r.b)("p",null,'Se ap\xf3s a instala\xe7\xe3o e configura\xe7\xe3o do m\xf3dulo as parcelas do cart\xe3o de cr\xe9dito n\xe3o carregarem ao clicar sobre as bandeiras dos cart\xf5es, o lojista dever\xe1 verificar as credenciais informadas na configura\xe7\xe3o do m\xf3dulo (chaves Client_Id, Client_Secret e tamb\xe9m o "identificador da conta"). Se estiverem corretas, entre em contato com a Gerencianet para que o problema seja analisado.'),Object(r.b)("br",null),Object(r.b)("h4",{id:"75--estou-recebendo-a-mensagem-unauthorized-ao-tentar-finalizar-uma-compra-o-que-fazer"},"7.5.  Estou recebendo a mensagem ",Object(r.b)("em",{parentName:"h4"},"\u201cUnauthorized\u201d")," ao tentar finalizar uma compra. O que fazer?"),Object(r.b)("p",null,"Essa mensagem de erro pode estar relacionada com a as credenciais informadas de forma incorreta. Verifique se as suas credenciais est\xe3o corretamente inseridas nos respectivos campos de PRODU\xc7\xc3O e DESENVOLVIMENTO. Confira em ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://gerencianet.com.br/artigo/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que/"}),"nossa FAQ")," informa\xe7\xf5es detalhadas."),Object(r.b)("br",null),Object(r.b)("h4",{id:"76-est\xe1-aparecendo-a-mensagem-gerencianet-desabilitada-o-modo-sandbox-ambiente-de-testes-est\xe1-ativo-suas-cobran\xe7as-n\xe3o-ser\xe3o-validadas-como-corrigir"},"7.6. Est\xe1 aparecendo a mensagem ",Object(r.b)("em",{parentName:"h4"},"\u201cGerencianet Desabilitada: O modo Sandbox (Ambiente de testes) est\xe1 ativo. Suas cobran\xe7as n\xe3o ser\xe3o validadas\u201d"),". Como corrigir?"),Object(r.b)("p",null,"Esta mensagem ir\xe1 ser exibida quando seu m\xf3dulo estiver configurado em ambiente de testes (sandbox). Para remover esta mensagem e come\xe7ar a receber com a Gerencianet, acesse as configura\xe7\xf5es do m\xf3dulo em ",Object(r.b)("code",null,"Extensions > Payments > Gerencianet > Editar")," (ou em ",Object(r.b)("code",null,"Extens\xf5es > Pagamentos > Gerencianet > Editar"),") e desmarque a op\xe7\xe3o ",Object(r.b)("code",null,"SandBox > Habilitar Sandbox Gerencianet (Ambiente de testes).")),Object(r.b)("br",null),Object(r.b)("h4",{id:"77-onde-posso-acompanhar-as-transa\xe7\xf5es-geradas-pelo-m\xf3dulo"},"7.7. Onde posso acompanhar as transa\xe7\xf5es geradas pelo m\xf3dulo?"),Object(r.b)("p",null,"As transa\xe7\xf5es geradas atrav\xe9s do m\xf3dulo podem ser acompanhadas em sua conta Gerencianet no link ",Object(r.b)("code",null,"API > Minhas Aplica\xe7\xf5es > Sua Aplica\xe7\xe3o"),". Neste ambiente voc\xea poder\xe1 acompanhar todas as transa\xe7\xf5es e suas respectivas situa\xe7\xf5es."),Object(r.b)("br",null),Object(r.b)("h4",{id:"78-quando-tento-realizar-um-pagamento-recebo-a-mensagem-ocorreu-um-erro-ao-tentar-realizar-a-sua-requisi\xe7\xe3o-entre-em-contato-com-o-propriet\xe1rio-da-loja"},"7.8. Quando tento realizar um pagamento recebo a mensagem *\u201cOcorreu um erro ao tentar realizar a sua requisi\xe7\xe3o. Entre em contato com o propriet\xe1rio da loja.\u201d"),Object(r.b)("p",null,'Essa mensagem de erro pode ser exibida no momento da finaliza\xe7\xe3o da compra por diversos fatores. Neste caso, o primeiro passo \xe9 verificar as credenciais da sua aplica\xe7\xe3o e tamb\xe9m conferir em sua API a subaba "hist\xf3rico de requisi\xe7\xf5es" ',Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../../docs/VisaoGeral/InterpretandoErros"}),"veja como usar este recurso"),"."),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"8-suporte-e-sugest\xf5es"},"8. Suporte e Sugest\xf5es"),Object(r.b)("p",null,"Sua sugest\xe3o de novas ideias e implementa\xe7\xf5es para o m\xf3dulo da Gerencianet para OpenCart \xe9 muito importante. Portanto, caso voc\xea tenha alguma ideia, entre em contato com a nossa equipe. Iremos analisar sua sugest\xe3o e avaliar a possibilidade de implanta\xe7\xe3o."),Object(r.b)("p",null,"Caso voc\xea tenha alguma d\xfavida, entre em contato conosco pelo site ",Object(r.b)("a",{href:"https://gerencianet.com.br/",target:"_blank"},"Gerencianet"),".")))}b.isMDXComponent=!0},243:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return u}));var o=t(0),n=t.n(o);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),b=function(e){var a=n.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d=function(e){var a=b(e.components);return n.a.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},p=n.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(t),p=o,u=d["".concat(i,".").concat(p)]||d[p]||m[p]||r;return t?n.a.createElement(u,c(c({ref:a},l),{},{components:t})):n.a.createElement(u,c({ref:a},l))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},244:function(e,a,t){"use strict";var o=t(0),n=t(35);a.a=function(){return Object(o.useContext)(n.a)}},245:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var o=t(244),n=t(246);function r(e,{forcePrependBaseUrl:a=!1,absolute:t=!1}={}){const{siteConfig:{baseUrl:r="/",url:i}={}}=Object(o.a)();if(!e)return e;if(a)return r+e;if(!Object(n.a)(e))return e;const c=r+e.replace(/^\//,"");return t?i+c:c}},246:function(e,a,t){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}t.d(a,"a",(function(){return o}))}}]);