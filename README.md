📜 Sobre o Desafio
Este projeto foi criado para decifrar o misterioso diário do Mago Eldorath, que deixou seus conhecimentos codificados em sequências numéricas. Como um jovem programador promissor da guilda de magos, sua missão é desenvolver um decodificador que possa revelar todas as combinações possíveis das mensagens secretas.

🔍 Como Funciona
O diário está codificado com uma cifra numérica simples mas engenhosa:

Cada número de 1 a 26 representa uma letra do alfabeto (1 = 'a', 2 = 'b', ..., 26 = 'z')

Os números estão concatenados em uma única string longa

Uma mesma sequência pode ter múltiplas interpretações

Exemplo:

A entrada "123" pode ser decodificada como:

"abc" (1-2-3)

"aw" (1-23)

"lc" (12-3)

🛠️ Tecnologias Utilizadas
HTML5: Estrutura semântica da aplicação

CSS3: Estilos modernos com efeitos de glassmorphism e gradientes animados

JavaScript: Algoritmo recursivo para geração das combinações

✨ Recursos Implementados
Interface Elegante

Design temático de magia e mistério

Efeitos visuais sofisticados (botões com glow, fundo gradiente)

Layout responsivo para todos os dispositivos

Funcionalidades Principais

Validação de entrada (apenas números permitidos)

Algoritmo eficiente para gerar todas combinações válidas

Exibição organizada dos resultados

Experiência do Usuário

Animações suaves

Feedback visual claro

Botão de reset para nova consulta

🚀 Como Usar
Insira a sequência numérica no campo de entrada

Clique em "DECIFRAR" para ver todas as combinações possíveis

Use "RETORNAR" para limpar os resultados e começar novamente

🌟 Desafios Interessantes
Implementação do algoritmo de backtracking recursivo

Tratamento de casos especiais (como o número 0)

Balanceamento entre performance e legibilidade do código

Criação de uma interface temática imersiva

📊 Complexidade do Algoritmo
A solução implementada tem complexidade O(2^n) no pior caso, pois para cada dígito temos potencialmente duas escolhas (processá-lo como dígito único ou como parte de um par). Na prática, muitas ramificações são podadas quando encontramos números inválidos (>26 ou 0).

🎨 Personalização
O projeto foi projetado para ser facilmente personalizável:

Altere as cores no CSS para mudar o tema

Modifique a animação dos botões ajustando os gradientes

Adicione novos recursos como histórico de consultas

📝 Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

Prepare-se para mergulhar no mundo da criptografia mágica e desvendar os segredos do Mago Eldorath! Que seu código seja tão poderoso quanto os feitiços mais antigos! 🔮✨
