#  SkillMatch IA — Front-End
Aplicação Front-End desenvolvida em **React + Vite + TypeScript + TailwindCSS**, como parte da **Global Solution 2025/2 – FIAP**.  
Este projeto consome a API Java publicada no Render e entrega uma interface intuitiva que permite:

- Realizar o teste do Simulador de Perfil
- Visualizar Trilha de Aprendizagem recomendada
- Navegar pelas Trilhas disponíveis
- Acessar detalhes de cada trilha
- Interagir com uma UI responsiva, moderna e funcional

---

#  Status do Projeto
✔️ **Concluído e funcionando**  
✔️ **Deploy ativo na Vercel**  
✔️ **Integração com API Java (Render)**  
✔️ **Responsivo (mobile-first)**  
✔️ **Tema light/dark (Context API)**  

---

#  Sumário
1. Sobre o Projeto  
2. Tecnologias Utilizadas  
3. Instalação  
4. Como Usar  
5. Estrutura de Pastas  
6. Principais Rotas  
7. Integração com a API  
8. Autores e Créditos  
9. Demonstração  
10. Contato

---

#  Sobre o Projeto
O **SkillMatch IA** é uma solução criada para identificar perfis profissionais, indicar trilhas de aprendizado e apoiar a requalificação profissional em um cenário de futuro do trabalho.

O Front-End:

- Foi desenvolvido com foco em usabilidade e acessibilidade  
- Usa componentes funcionais com Hooks  
- Integra com uma API Java hospedada no Render  
- Implementa o tema **claro/escuro** usando Context API  
- É 100% responsivo para mobile, tablet e desktop  
- Utiliza exclusivamente **TailwindCSS**, conforme regras da disciplina  

---

#  Tecnologias Utilizadas

| Tecnologia | Função |
|-----------|--------|
| **React** | Biblioteca principal da UI |
| **Vite** | Bundler rápido e leve |
| **TypeScript** | Tipagem estática |
| **TailwindCSS** | Estilização |
| **React Router DOM** | Navegação SPA |
| **Context API** | Tema dark/light |
| **Vercel** | Deploy do Front |
| **Render** | API Java REST |

---

#  Instalação

Clone o repositório:

```bash
git clone https://github.com/Tidlle/GS2_Front-end.git
cd GS2_Front-end
```

Instale dependências:

```bash
npm install
```

Configure o arquivo `.env` na raiz:

```env
VITE_API_URL=https://gs2-java-mka3.onrender.com
```

Execute localmente:

```bash
npm run dev
```

---

# Como Usar

Após subir o projeto localmente ou acessar a Vercel:

- Acesse a página inicial  
- Clique em **Simulador** para realizar o teste  
- Responda às perguntas do formulário  
- Veja seu resultado no **Dashboard**  
- Acesse a página de **Trilhas**  
- Clique em qualquer trilha para ver os detalhes

Tudo acontece em tempo real consumindo a API Java.

---

# Estrutura de Pastas

```text
src/
 ├── assets/          
 ├── components/      
 ├── context/         
 ├── data/            
 ├── pages/           
 ├── services/        
 │     └── api.ts     
 ├── App.tsx
 └── main.tsx
```

---

# Principais Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home |
| `/login` | Login |
| `/simulador` | Formulário |
| `/dashboard` | Resultado |
| `/trilhas` | Lista de trilhas |
| `/trilhas/:id` | Detalhes |

---

# Integração com a API

Exemplo:

```ts
const resp = await api.listarTrilhas();
```

---

# Autores e Créditos

| Nome | RM |
|------|----|
| **Eduardo Martins** | RM562259 |
| **Thiago Sposito** | RM561694 |
| **Vitor Madrigrano** | RM564191 |

---

# Demonstração

Link do vídeo explicativo: https://www.youtube.com/watch?v=E2JfWr-Ng_4

---
