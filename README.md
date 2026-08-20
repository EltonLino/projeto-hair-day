# ✂️ Hair Day - Sistema de Agendamento

<p align="center">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=black" alt="Webpack" />
  <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black" alt="Babel" />
</p>

> Aplicação web desenvolvida durante a **Jornada Fullstack da Rocketseat** para gerenciamento e agendamento de horários em salões de beleza e barbearias.

---

## 📌 Sobre o Projeto

O **Hair Day** é uma solução prática para otimizar o fluxo de atendimento de serviços de estética e beleza. Através da aplicação, é possível selecionar uma data, verificar os períodos do dia (manhã, tarde e noite) com horários disponíveis, realizar novos agendamentos e cancelar compromissos existentes.

---

## 🚀 Funcionalidades

- 📅 **Seleção de Data:** Navegação dinâmica por datas para visualização de disponibilidade.
- 🕒 **Separação por Períodos:** Organização visual dos horários entre Manhã (09h - 12h), Tarde (13h - 18h) e Noite (19h - 21h).
- ✂️ **Novo Agendamento:** Formulário com validação de cliente e seleção de horário vago.
- ❌ **Cancelamento de Agendamento:** Opção de remoção direta de agendamentos existentes.
- 🔄 **Consumo de API:** Integração com API REST simulada para persistência dos dados.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3:** Estruturação semântica e estilização moderna.
- **JavaScript (ES6+):** Manipulação de DOM, requisições assíncronas e regras de negócio.
- **Webpack & Babel:** Empacotamento de módulos, otimização de assets e transpilação de código moderno.
- **Day.js:** Manipulação e formatação simplificada de datas e horários.
- **JSON Server:** Simulação de uma API REST para desenvolvimento ágil.

---

## 💻 Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) e o [Git](https://git-scm.com/) instalados em sua máquina.

```bash
# 1. Clone o repositório
git clone [https://github.com/EltonLino/projeto-hair-day.git](https://github.com/EltonLino/projeto-hair-day.git)

# 2. Acesse a pasta do projeto
cd projeto-hair-day

# 3. Instale as dependências
npm install

# 4. Inicie o servidor da API simulada (JSON Server)
npm run server

# 5. Em outro terminal, inicie o servidor de desenvolvimento
npm run dev
