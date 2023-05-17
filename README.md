# Gerador de Senhas 
Este é um gerador de senhas simples feito com HTML, CSS e JavaScript. Ele permite que você gere senhas aleatórias com base nas configurações definidas.

# Principai Funcionalidades
- Geração de senhas aleatórias com base nas configurações selecionadas.
- Configuração do tamanho da senha.
- Inclusão de letras maiúsculas, números e símbolos na senha.
- Barra de indicação de segurança da senha.

# Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

# Estrutura do Código
O código do gerador de senhas é dividido em três partes principais: a estrutura HTML, o estilo CSS e a lógica JavaScript.

## Estrutura HTML
A estrutura HTML define a organização e os elementos visuais do gerador de senhas. Ela é composta pelos seguintes elementos principais:

header: Cabeçalho contendo o título do gerador de senhas.
main: Área principal que contém as seções do gerador.
section.container: Contêiner para exibir a senha gerada e a barra de indicação de segurança.
section.config: Seção de configuração para personalizar os critérios de geração da senha.
div.btn: Botão para copiar a senha gerada.
Estilo CSS
O estilo CSS é responsável por definir a aparência e o layout do gerador de senhas. Ele utiliza classes e seletores para estilizar os elementos HTML. Alguns estilos importantes são:

Definição de cores e fontes utilizando variáveis CSS.
Responsividade do layout através de media queries.
Estilização dos elementos de entrada de texto, botão e indicador de segurança.
Lógica JavaScript
A lógica JavaScript é responsável por gerar as senhas, atualizar a barra de indicação de segurança e lidar com as interações do usuário. Algumas funções principais incluem:

generatePassword: Gera uma senha com base nos critérios selecionados pelo usuário.
security: Atualiza a barra de indicação de segurança com base no tamanho da senha e nos critérios selecionados.
copy: Copia a senha gerada para a área de transferência.
Event listeners para capturar as interações do usuário, como alterar o tamanho da senha, selecionar critérios ou clicar no botão de cópia.
