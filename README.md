🧠 L1 Cache (v1.5)

L1 Cache é uma Single Page Application (SPA) de Repetição Espaçada (Spaced Repetition System - SRS) desenvolvida do zero para otimização extrema de memória e foco.

O nome é uma alusão à arquitetura de computadores: o cache L1 é a memória mais rápida e próxima do processador. O objetivo deste projeto é fazer exatamente isso com o cérebro humano — garantir que o conhecimento técnico (como algoritmos, estruturas de dados e sistemas operacionais) esteja sempre na ponta da língua.

🎯 A Essência do Projeto

Este software não é apenas um clone do Anki. Ele foi projetado cirurgicamente para atender a estudantes de Ciência da Computação que lidam com desafios cognitivos específicos, como TDAH (Transtorno de Déficit de Atenção e Hiperatividade) e lapsos severos de memória recente devido a tratamentos medicamentosos.

Para resolver essas latências de hardware biológico, o sistema implementa algoritmos duplos de aprendizado de máquina e retenção, gamificação em tempo real e um fluxo de interface livre de distrações.

⚙️ Stack Tecnológica

O projeto desafia as convenções modernas de desenvolvimento web ao dispensar ferramentas de build (Node.js, Webpack, Vite). Ele roda inteiramente no navegador, o que garante portabilidade universal e zero atrito de instalação.

Frontend Core: React 18 & ReactDOM (via CDN).

Transpilação On-the-fly: Babel Standalone (JSX compilado em tempo real no client-side).

Estilização: Tailwind CSS (Engine via CDN configurado no próprio documento) + Glassmorphism personalizado.

Backend & Persistência: Firebase Modular v10 (Firestore Database & Authentication).

Ícones: Lucide React.

Áudio Sinetizado: Web Audio API & SpeechSynthesis nativos.

🧮 Motores de Algoritmo (Engines)

O diferencial técnico do L1 Cache é a coexistência de dois motores matemáticos de agendamento de revisão, que o usuário pode alternar a qualquer momento.

1. Custom SM-2 (Modo Clássico)

Implementação baseada no histórico algoritmo SuperMemo-2, utilizando Fator de Facilidade (Ease Factor) dinâmico e multiplicadores de intervalo.

Como atua: Ajusta a curva de esquecimento com base em heurísticas estáticas. Punições (Erros) derrubam a facilidade, enquanto Sucessos (Fácil/Bom) aumentam o espaçamento exponencialmente.

2. FSRS v4 (A.I. Machine Learning Mode)

Implementação nativa do Free Spaced Repetition Scheduler. É um modelo probabilístico avançado baseado em Machine Learning que entende a curva real de esquecimento do usuário.

Modelo DSR: Calcula constantemente três variáveis para cada card:

D (Difficulty): O quão difícil é a informação.

S (Stability): Quantos dias levará para a probabilidade de lembrança cair para 90%.

R (Retrievability): A probabilidade exata de você lembrar a informação no dia de hoje.

Retenção Alvo: O usuário pode definir matematicamente no painel o quanto quer lembrar (ex: 90%), e a I.A. ajusta os dias automaticamente.

⚠️ O Pulo do Gato: "Learning Steps" Travados

Independentemente do algoritmo escolhido para a memória de longo prazo (dias/meses), o L1 Cache força uma consolidação agressiva de curto prazo (Fase de Aprendizado).

Steps: 1 min ➔ 10 min ➔ 60 min

Por quê? Para contornar bloqueios neurológicos e químicos de retenção de memória recente. A passagem obrigatória pela barilha de 60 minutos consolida a memória de trabalho antes do usuário encerrar a sessão de estudos.

✨ Componentes e Funcionalidades

🎮 Gamificação e Feedback Sensorial (Foco TDAH)

Leaderboard em Tempo Real: Conexão com Firestore usando onSnapshot. Mostra um ranking diário focado apenas nas métricas do dia (Cards vistos, Retenção exata hoje, Tempo e Ofensivas/Streaks).

Feedback Visual e Sonoro: Uso da API Web Audio para emitir frequências (Sines/Sawtooths) dependendo da resposta do usuário. Flashs de cor de fundo (Box-Shadow) no card garantem estímulo de dopamina rápido e prendem a atenção.

Text-to-Speech (TTS): Sistema auditivo integrado para ler perguntas e respostas em voz alta, criando múltiplas âncoras cognitivas (visual e auditiva).

📖 Interface de Estudos

Modo Foco / Cramming: Estudo guiado apenas pelo teclado (1, 2, 3, 4, Barra de Espaço, Ctrl+Z para desfazer).

Árvore de Decks Dinâmica: Agrupamento em cascata de Matéria > Aula > Tópico, com contadores atualizados em tempo real separando cards Novos, em Aprendizado e em Revisão.

🛠️ Painel Admin (Engenharia de Dados)

Um painel protegido (exclusivo para contas autorizadas) que permite a gestão do banco de dados em larga escala (NoSQL Batch Operations):

CRUD Completo: Criação e edição com Rich Text Editor incorporado (bold, itálico, blocos de código).

Filtros Avançados: Busca transversal por matéria, aulas e tags.

Edição em Lote (Batch Processing): Capacidade de selecionar centenas de cards (ex: 450) e aplicar modificações atômicas de tags, aulas ou matérias no Firestore com uma única transação, garantindo consistência e baixa latência.

🚀 Como Executar Localmente

Sendo uma aplicação "Zero-Build", não é necessário usar npm install.

Clone o repositório.

Abra o arquivo index.html diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

(Opcional) Para que a autenticação do Firebase funcione perfeitamente sem problemas de CORS ou bloqueios de protocolo file://, recomenda-se rodar via Live Server (extensão do VS Code) ou Python HTTP Server:

python -m http.server 8000


🤝 Colaboração e Histórico

Desenvolvido por estudantes de Ciência da Computação para resolver problemas reais de desempenho acadêmico. Todo o código fonte e as escolhas de arquitetura (estado do React, listeners do Firebase, equações do FSRS) foram pensadas para a maior confiabilidade possível no processamento de estudos intensivos.

"O aprendizado não falha, apenas os algoritmos genéricos que usamos para tentar retê-lo."
