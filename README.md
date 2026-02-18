# 🚀 L1 Cache v2.0 | Memory Retention Engine

<p align="left">
  <img src="https://img.shields.io/badge/Build-Stable_Release-00f2ff?style=for-the-badge&logo=render" alt="Status">
  <img src="https://img.shields.io/badge/Stack-React_18_|_Tailwind_|_Firebase-7928CA?style=for-the-badge" alt="Stack">
</p>

> **System Update Log:** Implementação de lógica avançada de retenção de memória baseada em ciência cognitiva para estudantes de alta performance.

---

## 🧠 Core Engine & Algoritmos
Focado em vencer a **Curva do Esquecimento** através de engenharia de software precisa.

* **Algoritmo SRS (Spaced Repetition System):** Implementação personalizada do **SM-2 (SuperMemo 2)**.
* **Cálculo Dinâmico:** Ajuste em tempo real dos intervalos de revisão baseado no *Ease Factor*.
* **Memory States:** Transição de estados entre `learning` (curto prazo) e `graduated` (longo prazo).
* **Cram Mode:** Lógica de recursão para revisão forçada quando a fila está vazia.

---

## 📚 Interface de Estudo (Study Session)
UX desenhada para reduzir o custo cognitivo durante o aprendizado ativo.

### ⚡ Flashcards 3D & TTS
- **Renderização Espacial:** Animação de *Flip* (Y-axis 180º) utilizando `perspective-1000`.
- **Native TTS:** Integração com `window.speechSynthesis` configurada para **pt-BR** (1.1x speed).

### ⌨️ Controles de Input (Kernel Shortcuts)
| Tecla | Ação |
| :--- | :--- |
| `Espaço` | Revelar Resposta (Flip Card) |
| `1, 2, 3, 4` | Avaliar Dificuldade (Again, Hard, Good, Easy) |

---

## 📊 Dashboard & Métricas
Visualização de dados para monitoramento de consistência acadêmica.

- **Heatmap de Consistência:** Gráfico estilo GitHub com gradiente dinâmico.
- **Global Leaderboard:** Ranking em tempo real via Firestore (% Retenção e XP).
- **Estatísticas Rápidas:** Contador de Cards Totais vs. Memorizados no Header.

---

## 🛠️ Painel Administrativo (God Mode)
Gestão de conteúdo com controle de acesso estrito.

- **Gatekeeper:** Verificação de e-mail (domínio `@userpro.com`).
- **CRUD de Cards:** Persistência imediata no Firestore com Editor WYSIWYG.
- **Filtros Avançados:** Sistema de "Deck" e "Tópico" com Autocomplete.

---

## 🎨 UI/UX Design System
Estética **Cyberpunk/Dev** focada em imersão.

- **Tema:** Dark Mode (`Slate-950`) com acentos em `Blue-500` e `Purple-500`.
- **Glassmorphism:** Uso de `backdrop-filter: blur` e transparências.
- **Tipografia:** `Inter` para UI e `Fira Code` para fragmentos de código.

---

## ☁️ Infraestrutura Backend
- **Authentication:** Login via E-mail/Senha e modo Convidado.
- **Firestore Database:** Arquitetura de coleções otimizada para isolamento de dados (`users/{uid}/reviews`).

---

<p align="center">
  <sub>Desenvolvido para excelência em Ciência da Computação.</sub>
</p>
