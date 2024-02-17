# WhatsChat
Bem vindo ao WhatsChat, um modelo de chat em tempo real feito com NodeJS, JavaScript, HTML e CSS.

# Dependências
- ws (Web Socket)
- dotenv (.env)

# Instalação
- npm install ws | npm i ws
- npm install dotenv | npm i dotenv

# DotEnv
Nosso arquivo .env, possui alguns configurações que vamos utilizar no projeto, como por exemplo a porta onde nosso servidor irá rodar.

Como esse arquivo contém informações sensíveis do código, ele não será enviado para o GitHub, é necessário instalar a dependência e criar o arquivo passando as configurações necessárias.

Configure "PORT" passando a porta que deseja rodar o servidor.

# Informações adicionais
Para manter nosso código em execução e a cada modificação, vamos utilizar a funcionalidade "--watch". Poderiamos usar o "nodemon" também, mas para simplificar vamos usar a funcionalidade nativa do node.

## Adicione a configuração aos scripts:
- "start": "node --watch src/server.js"