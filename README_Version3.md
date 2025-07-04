# Firebase Auth Express API

Projeto de exemplo de API Node.js usando autenticação via Firebase Auth.

## Pré-requisitos

- Node.js instalado
- Conta e projeto criados no [Firebase](https://firebase.google.com/)
- Usuário registrado no Firebase Auth

## Configuração

1. Baixe o arquivo de chave de serviço do Firebase (JSON) em **Configurações do projeto > Contas de serviço** no Firebase Console.
2. Renomeie o arquivo para `serviceAccountKey.json` (opcional).
3. Crie um arquivo `.env` com o conteúdo:

   ```
   FIREBASE_SERVICE_ACCOUNT=./serviceAccountKey.json
   PORT=3000
   ```

4. Instale as dependências:

   ```
   npm install
   ```

5. Inicie o servidor:

   ```
   npm run dev
   ```

## Testando

- Acesse `GET /` para verificar se a API está online.
- Para acessar `GET /protegido`, envie o header `Authorization: Bearer <SEU_ID_TOKEN_FIREBASE>`.

## Exemplo de obtenção do token

No frontend (web ou mobile), autentique o usuário normalmente usando o Firebase Auth e utilize o ID token retornado para consumir a rota protegida.