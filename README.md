## Descrição

Desafio técnico para a entrevista de emprego da multipedidos

## Tecnologias Utilizada
- Node.js
- NestJS
- Prisma
- Websocket
- Docker

## Instalação de dependências

> [!IMPORTANT]
> Devido as portas COM não serem virtualizadas dentro do container e wsl é necessário rodar o Node.js na sua maquina.

```bash
$ npm install
```

## Inicializando a aplicação

Primeiro você deve criar o arquivo `.env` com o seguinte comando. Já está disponível a variável e não precisa alterar mais nada dentro do arquivo.
```bash
cp .env.example .env
```

Após isso você deve iniciar o banco mysql com o docker.
```bash
$ docker-compose up -d
```

Após isso você deve rodar o seguinte comando para rodar as migrations.
```bash
$ npx prisma migrate dev
```

Agora você pode iniciar a aplicação com o seguinte comando.

```bash
# desenvolvimento
$ npm run start:dev

# produção
$ npm run start:prod
```

Aplicação está rodando na porta 3000.

## Teste

Para fazer o teste da porta serial você irá precisar de dois programas o [Virtual Serial Ports](https://freevirtualserialports.com) e o [COM Port Data Emulator](https://www.aggsoft.com/com-port-emulator/download.htm).

### Virtual Serial Ports

Abra o programa e crie um ponte local com as portas desejadas.

### COM Port Data Emulator

Para configurar o program siga os passos:
- Escolha uma das portas quem foi emulada no Virtual Serial Ports
- Depois vá para a aba `Data source` e escolha a `data source` como `Text strings`, no campo abaixo será os dados que serão enviado para a porta serial.
- Selecione o `Repeat mode` e escolha o tempo de intervalo para o envio dos dados.

Agora você pode enviar dados para a porta serial, clicando no botão `Start no final do programa`.

### Programa completo

Acesse o endereço http://localhost:3000, ira renderizar uma pagina com os dados da porta serial. Se quiser alterar o peso que aparece na pagina vá no COM Port Data Emulator e mude o valor que ira atualizar de acordo com o tempo de intervalo escolhido.

Para salvar os dados você pode clicar no botão `Salvar no banco` e o peso será salvo no banco de dados.

