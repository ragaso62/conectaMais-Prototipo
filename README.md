# 🧠 Projeto Integrador – Conecta Mais

Este projeto foi desenvolvido durante a etapa final do curso como **primeiro protótipo do Projeto Integrador**, representando também meu **primeiro contato prático com banco de dados conectado ao front-end**.  

O objetivo do projeto é aplicar, de forma integrada, os conhecimentos adquiridos em **HTML**, **CSS**, **JavaScript** e **banco de dados (SQL)**, simulando o desenvolvimento de um sistema web completo.

---

## 📁 Estrutura do Projeto

```
database/
├── dataBase.sql          # Script de criação do banco de dados

public/
├── index.html            # Página inicial do site
├── cadastro.html         # Tela de cadastro de usuários ou clientes
│
├── css/
│   └── estilo.css        # Estilos visuais do site
│
├── js/
│   └── validacoes.js     # Lógica de validação e interação no front-end
│
└── img/                  # Imagens utilizadas no site
    ├── corrida.jpg
    ├── rally.jpg
    ├── equipe.webp
    └── ...
```

---

## 💡 Objetivo do Projeto

- Criar um **protótipo funcional** de sistema web.  
- Implementar **cadastro de dados** com interação entre front-end e banco de dados.  
- Aplicar boas práticas de **organização de pastas e arquivos**.  
- Consolidar o aprendizado sobre **estrutura de banco de dados**, **validação de formulários** e **design responsivo**.

---

## ⚙️ Tecnologias Utilizadas

- **HTML5** – estrutura das páginas  
- **CSS3** – estilização e layout  
- **JavaScript (Vanilla)** – validação e interatividade  
- **MySQL / SQL** – banco de dados relacional  

---

## 🗄️ Banco de Dados

O arquivo `dataBase.sql` contém o script para criar as tabelas necessárias para o funcionamento do projeto.  
Para utilizá-lo:

1. Abra seu gerenciador de banco de dados (ex: **MySQL Workbench**).
2. Crie um novo banco.
3. Execute o script `dataBase.sql`.
4. Ajuste as configurações de conexão no seu back-end, se houver.

---

## 🚀 Como Executar o Projeto

1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/usuario/conecta-mais.git
   ```
2. Abra a pasta `public/` no seu editor.
3. Inicie o projeto abrindo `index.html` no navegador.
4. Certifique-se de que o banco de dados está configurado, caso o sistema dependa dele.

---

## 🔗 Exemplo de Conexão com o Banco de Dados (PHP)

Caso for utilize PHP para conexão com o banco no projeto , um exemplo simples seria:

```php
<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "conecta_mais";

$conn = new mysqli($servidor, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
echo "Conectado com sucesso!";
?>
```

> 💡 Esse exemplo demonstra como o front-end pode enviar dados via formulários HTML n usando o back-end PHP, que por sua vez grava e lê informações do banco de dados MySQL.

---

## 🎯 Aprendizados e Experiências

Durante o desenvolvimento deste protótipo, foram explorados conceitos importantes:
- Criação e estruturação de banco de dados.  
- Conexão entre **front-end** e **banco de dados**.  
- Organização e separação de responsabilidades no código.  
- Desenvolvimento de páginas interativas e dinâmicas.  

---

## 📜 Licença

Este projeto foi desenvolvido apenas para fins **educacionais** e **de aprendizado prático**.

---

✍️ **Autor:** *Lucas – Projeto Integrador (Conecta Mais)*
