# Buscador de CEP

## Descrição
O **Buscador de CEP** é uma aplicação web que permite ao usuário buscar informações detalhadas sobre um determinado CEP. Os dados retornados incluem DDD, estado, cidade, bairro, logradouro e complemento. A interface foi desenvolvida com VueJS e o backend em PHP.

---

## Tecnologias Utilizadas

### Frontend
- **VueJS**: Framework JavaScript para criar interfaces de usuário dinâmicas.
  - **VueX**: Gerenciamento de estado para compartilhar informações entre componentes.
  - **Vue Router**: Gerenciamento de rotas para navegação.

### Backend
- **PHP**: Servidor simples usado para consumir a API ViaCEP e retornar os dados processados.

---

## Requisitos
- Node.js (v14 ou superior).
- PHP (v7.2 ou superior).
- Gerenciador de pacotes (npm, yarn ou pnpm).

---

## Como Rodar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/Tiesco789/tradeup-teste.git
```

### 2. Acessar a pasta do projeto
```bash
cd tradeup-teste
```

### 3. Instalar dependências do frontend
Escolha o gerenciador de pacotes de sua preferência:
```bash
npm install # Usando npm
pnpm install # Usando pnpm
yarn install # Usando yarn
```

### 4. Rodar o projeto frontend
Inicie o servidor de desenvolvimento:
```bash
npm run dev # Usando npm
pnpm dev # Usando pnpm
yarn dev # Usando yarn
```

O servidor estará disponível no navegador em: `http://localhost:5173`

### 5. Rodar o servidor backend
Abra um novo terminal na raiz do projeto e inicie o servidor PHP:
```bash
cd src/utils
php -S localhost:8000
```

O servidor backend estará rodando em: `http://localhost:8000`

---

## Estrutura do Projeto

### Diretórios Principais:
- **src/views**: Páginas principais da aplicação.
- **src/assets**: Arquivos de imagens e estilos globais.
- **src/router**: Configurações de rotas.
- **src/store**: Configurações do VueX.
- **src/utils**: Backend em PHP para consumir dados da API.

---

## Funcionalidades
1. **Busca de CEP**:
   - O usuário digita um CEP no formato `00000-000` e visualiza as informações detalhadas em uma tabela.
   - O campo é validado para aceitar apenas valores numéricos e formatado automaticamente.

2. **Mensagens de Erro**:
   - Exibe mensagens claras caso o CEP seja inválido ou não encontrado.

---

## Melhorias Futuras
- Adição de testes unitários para Vue e PHP.
- Opção de salvar histórico de buscas no local storage.
- Internacionalização para suporte a vários idiomas.
