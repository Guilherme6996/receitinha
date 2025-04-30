🧾 CRUD Simples de Receitas em React
Este é um projeto simples de CRUD (Create, Read, Update, Delete) desenvolvido com React que permite ao usuário cadastrar, visualizar, editar e excluir receitas culinárias. Os dados são armazenados localmente no localStorage do navegador, garantindo que não se percam ao recarregar a página.

✨ Funcionalidades
✅ Cadastrar novas receitas com nome, ingredientes, modo de preparo e tempo de duração.

✅ Listar todas as receitas cadastradas.

✅ Editar uma receita existente preenchendo o formulário com os dados anteriores.

✅ Excluir uma receita com confirmação.

✅ Persistência de dados usando localStorage, sem necessidade de backend.

🧠 Tecnologias usadas
React (com useState e useEffect)

JavaScript (ES6+)

HTML e CSS (simples, direto no App.css)

Armazenamento local com localStorage

📁 Estrutura básica
O app é composto por um único componente (App.js), que gerencia:

O estado das receitas e do formulário.

A persistência dos dados via localStorage.

A renderização dinâmica da lista de receitas e do formulário de edição.

💡 Como usar
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm start
