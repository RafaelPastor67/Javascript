# Trabalho Final JS

Este projeto consiste em um feed de postagens interativo, onde os usuários podem criar postagens, curtir postagens existentes e personalizar seu nome de usuário. Além disso, o site possui um modo claro/escuro e armazena as informações no LocalStorage para manter os dados entre sessões.

## Funcionalidades

- **Criação de postagens**: Usuários podem criar postagens com um texto e uma imagem aleatória de um gato.
- **Curtidas**: Usuários podem curtir postagens e visualizar quem curtiu.
- **Modo Claro/Escuro**: Alternância entre temas claro e escuro, persistente no LocalStorage.
- **Pop-up de edição de usuário**: Permite que os usuários definam seu nome de usuário.
- **Arrastar pop-up**: O pop-up de edição pode ser movido pela tela.
- **Expansão automática do textarea**: O campo de texto expande automaticamente conforme o usuário digita.
- **Armazenamento de dados no LocalStorage**: Postagens, curtidas, tema e nome de usuário são salvos localmente.

## Como Usar

1. **Definir Nome de Usuário**:
   - Clique no ícone de usuário e insira um nome no pop-up.
   - Confirme para salvar.

2. **Criar uma Postagem**:
   - Digite um texto no campo de postagem.
   - Clique no botão de postar.
   - Uma imagem de gato aleatória será adicionada automaticamente.

3. **Curtir Postagens**:
   - Clique no ícone de coração para curtir.
   - O número de curtidas será atualizado e o nome do usuário aparecerá na lista de quem curtiu.

4. **Alternar Modo Claro/Escuro**:
   - Clique no botão de alternância de tema.
   - O tema será salvo automaticamente no LocalStorage.

5. **Remover todas as postagens**:
   - Clique no ícone da lixeira para apagar todas as postagens do LocalStorage.

## Estrutura do Código

- **Gerenciamento do LocalStorage**:
  - Armazena nome do usuário, postagens e tema.
  - Resgata informações salvas ao recarregar a página.

- **Manipulação do DOM**:
  - Criação dinâmica de postagens.
  - Adição de curtidas.
  - Alternância entre temas.
  - Expansão automática do campo de texto.
  

## Créditos

Este projeto utiliza a API The Cat API para fornecer imagens de gatos de forma aleatória.
