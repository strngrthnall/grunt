## Comandos Grunt:

### Instalação global:
` npm i -g grunt-cli `

### Instalação no ambiente de desenvolvimento:
` npm i --save-dev grunt `

*Esta instalação deve ser realizada sempre que for criado um novo projeto que irá utilizar o grunt*

### Instalando plugins do Grunt:
` npm i --save-dev "nome-do-plugin" `

### Rodando Grunt:
**Rodando Grunt default**
` npm run grunt `

**Rodando uma função específica do Gruntfile**
` npm run grunt "nome-da-função `

*Obs.:Antes de rodar o Gruntfile.js com os comandos "npm run" devemos adcionar o script `"grunt": "grunt"` no package.json*

### Rodando uma função:
**Para rodar um função diretamente devemos especificar ela no script do package.json**
` "build": "grunt build" `
**Desta forma o comando `npm run build` funcionará da mesma forma que o comando `npm run grunt build`**