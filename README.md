# 🧠 L1 Cache <span style="font-size:0.8em; color:gray;">v1.5</span>

![Version](https://img.shields.io/badge/version-1.5-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB.svg?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg?logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-v10-FFCA28.svg?logo=firebase&logoColor=black)
![Architecture](https://img.shields.io/badge/Architecture-Zero--build-success.svg)

> A memória L1 é a mais rápida e próxima do processador. Este projeto tem o mesmo objetivo: colocar o conhecimento o mais próximo possível da sua memória de longo prazo, com latência zero e retenção máxima.

O **L1 Cache** é uma Single Page Application (SPA) de Repetição Espaçada (SRS - *Spaced Repetition System*) construída totalmente do zero. Projetada com uma filosofia *zero-build* e focada em performance extrema.

---

## 🎯 Público-Alvo e Motivação

Este sistema foi arquitetado especificamente para estudantes de Ciência da Computação (e áreas correlatas) que lidam com **TDAH e lapsos severos de memória recente** — muitas vezes decorrentes de tratamentos médicos intensivos. 

Interfaces modernas de estudo costumam ser poluídas e cheias de distrações. O L1 Cache adota uma abordagem minimalista focada em dois pilares: **retenção extrema de conteúdo** e **foco imersivo**. Não é apenas um app de flashcards; é uma ferramenta de sobrevivência acadêmica para quem exige excelência e precisa de precisão cirúrgica no aprendizado.

---

## ⚠️ O "Pulo do Gato": Engenharia de Retenção

> [!WARNING]  
> **Arquitetura Anti-Esquecimento (Hardcoded Learning Steps)**
> Para mitigar ativamente a perda de memória recente e os déficits de atenção do TDAH, o sistema de aprendizado possui *Learning Steps* rigorosamente travados em **1 min, 10 min e 60 min**. 
> 
> A passagem pelo intervalo de **60 minutos é obrigatória**. Esta trava algorítmica força a consolidação sináptica da memória de curto para longo prazo, impedindo que o card avance prematuramente para revisões de dias.

---

## ⚙️ Motores de Algoritmo (Core)

O L1 Cache não te prende a uma única metodologia. O motor principal de agendamento possui duas engrenagens intercambiáveis:

1. **Custom SM-2 (Heurístico):** Uma implementação clássica e robusta baseada em multiplicadores estáticos e *Ease Factor*. Ideal para quem prefere a previsibilidade dos sistemas SRS tradicionais.
2. **FSRS v4 (A.I. Machine Learning):** O estado da arte em repetição espaçada. Utiliza um modelo probabilístico baseado na tríade **DSR** (*Difficulty, Stability, Retrievability*) para calcular a curva de esquecimento real do usuário. 
   * *Diferencial:* Permite definir a **Retenção Desejada** (ex: 90%), e o algoritmo ajusta os intervalos dinamicamente para garantir essa métrica estatística.

---

## 🛠 Tech Stack: A Filosofia "Zero-build"

O projeto foi construído para rodar de forma limpa, direta no navegador, eliminando a sobrecarga de ecossistemas como Node.js ou Webpack. 

* **Frontend:** React 18 (via CDN)
* **Transpilação:** Babel Standalone (*on-the-fly* no browser)
* **Estilização:** Tailwind CSS (via CDN) para um visual *tech-style* limpo e responsivo
* **Backend as a Service:** Firebase v10 (Firestore para NoSQL e Firebase Auth para autenticação)
* **Assets & APIs:** Lucide React (ícones vetoriais) e Web Audio API (nativa do browser)

---

## 🚀 Funcionalidades Principais

* 🎮 **Gamificação e Foco:** Leaderboard diário em tempo real ranqueando volume de cards estudados, taxa de retenção do dia e *streaks* (ofensivas).
* ⚡ **Feedback Sensorial para TDAH:** Pulsos de cores estratégicos na tela e áudio sintético gerado via *Web Audio API* para reforço positivo/negativo em acertos e erros, ancorando a atenção do usuário.
* 🗣 **Acessibilidade & Retenção Multissensorial:** Motor de Text-to-Speech (TTS) nativo integrado para leitura dos cards.
* ⌨️ **Modo Foco Absoluto:** Navegação e estudo 100% controláveis via teclado (atalhos dedicados).
* 🗄 **Painel Admin (Engenharia de Dados):** Interface avançada de gestão de deck. Inclui CRUD completo, filtros compostos complexos e **Edição em Lote (Batch Processing)** otimizada no Firestore, permitindo atualizar ou reestruturar centenas de cards simultaneamente em uma única transação atômica.

---

## 💻 Como Executar Localmente

Graças à arquitetura *zero-build*, rodar o L1 Cache é instantâneo. Nenhuma instalação de dependência (`npm install`) é necessária.

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/l1-cache.git](https://github.com/seu-usuario/l1-cache.git)
   cd l1-cache

Suba um servidor local simples:
Você pode simplesmente abrir o index.html no seu navegador, ou, para evitar problemas de CORS com os módulos ES6, use o Python:
```bash
python -m http.server 8000

Acesse:
Abra http://localhost:8000 no seu navegador.

(Nota: Certifique-se de configurar as suas variáveis de ambiente do Firebase no arquivo de configuração correspondente).

<div align="center">
<sub>
<b>Desenvolvido por e para estudantes de Ciência da Computação.</b>



Nascido da necessidade real de contornar desafios acadêmicos, lapsos de memória e a busca pela excelência nos estudos de base tecnológica.
</sub>
</div>
