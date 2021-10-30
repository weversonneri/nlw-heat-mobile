<p align="center">
  <img 
   src="https://user-images.githubusercontent.com/53442803/139374817-9c5dc6fc-9690-444c-b16d-ddd83023ce90.png"
    width="30%"
  />
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Aprendizados">Aprendizados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 📃 Sobre o projeto
A setima edição do [NLW](https://nextlevelweek.com) promovido pela **[@RocketSeat](https://www.rocketseat.com.br/)** serviu como aquecimento para o **[DoWhile 2021](https://dowhile.io/inscricao)**, então nada melhor que o tema do projeto fosse nesse sentido. 
O objetivo é o desenvolvimento de uma aplicação fullstack que permita os usuarios compartilharem suas expectativas para o evento, utilizando as tecnologias mais atuais do mercado. Aqui se encontra app mobile da nossa aplicação utilizando React Native.

<p align="center" s>
  <img 
    src="https://user-images.githubusercontent.com/53442803/139518973-72245682-ca27-4b37-a5cb-3eca44b733ab.gif"
    width="180px"
  />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img 
    src="https://user-images.githubusercontent.com/53442803/139519017-34592251-0a86-4652-aca5-08c32a8a2ff5.gif"
    width="180px"
  />
</p>

### Outras etapas do projeto: 
- [Back-end](https://github.com/weversonneri/nlw-heat-node)
- [Web](https://github.com/weversonneri/nlw-heat-web)

## ⚙ Funcionalidades
- [x] Login com a conta do Github
- [x] Compartilhamento dos dados por Context Api
- [x] Cadastro de mensagem
- [x] Listagem de mensagens recebidas do servidor
- [x] Atualização de mensagens em tempo real com socket.io

## ✨ Tecnologias
Projeto desenvolvido utilizando as seguintes tecnologias:

- [Typescript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Socket.IO](https://socket.io/)
- [Moti](https://moti.fyi/)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/usage/)
- [OAuth Github](https://github.com/settings/developers)
- [Axios]()

## 🔖 Layout
O layout do projeto está disponivel através do link abaixo:
  * [Layout Figma](https://www.figma.com/community/file/1031699316177416916)

## 🤔 Como usar
Para usar o projeto é necessario seguir as seguintes etapas:
1. Possuir o [backend](https://github.com/weversonneri/nlw-heat-node) configurado e rodando
2. Alterar o Client ID no arquivo ``` src > configs > env.ts ```
3. Alterar as configurações do OAuth do Github ``` Homepage URL ``` e ```Authorization callback URL``` para: 
 ```bash
https://auth.expo.io/@SEU-USERNAME-NO-EXPO/NOME-DO-APP
 ```
4. Seguir os comandos:
``` bash
  # Clonar o projeto:
  $ git clone https://github.com/weversonneri/nlw-heat-mobile.git

  # Entrar no diretório:
  $ cd nlw-heat-mobile

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ expo start
```

## 📝 Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

## Aprendizados
- Algumas dos principais pontos de aprendizagem
  - Autenticação do app mobile com OAuth do Github e Expo session
  - Integração com Socket.io para atualização de lista de mensagens em tempo real
  - Animações com Moti
  - Pratica de codificação React Native utilizando typescript

