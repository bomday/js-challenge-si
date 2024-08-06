const readline = require('readline');
const Library = require('./utils/library'); // Certifique-se de que o caminho está correto

const library = new Library();

// Criar uma interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para fazer uma pergunta e retornar uma promessa
const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Função assíncrona principal
const main = async () => {
    while (true) {
        const option = await askQuestion("\n\nVocê quer: \n1) adicionar livro \n2) retirar livro \n3) atualizar livro \n4) ver lista de livros \n5) Ver informação de livro por ID\n\n");
        let id, title, description, author, book;

        switch(option) {
            case '1':
                // Código para adicionar livro
                title = await askQuestion("Digite o Título: ");
                description = await askQuestion("Digite a Descrição: ");
                author = await askQuestion("Digite o Autor: ");

                book = library.addBook(title, description, author);
                console.log(book);
                break;
            case '2':
                // Código para retirar livro
                id = await askQuestion("Digite o ID do livro a ser retirado: ");

                library.removeBookById(parseInt(id, 10));
                console.log("Retirado com sucesso!");
                break;
            case '3':
                // Código para atualizar livro
                id = await askQuestion("Digite o ID do livro a ser atualizado: ");
                title = await askQuestion("Digite o novo Título: ");
                description = await askQuestion("Digite a nova Descrição: ");
                author = await askQuestion("Digite o novo Autor: ");

                book = library.updateBookById(parseInt(id, 10), {title, description, author});
                console.log(book);
                break;
            case '4':
                // Código para ver lista de livros
                console.log(library.getBooks());
                break;
            case '5':
                // Código para ver informação de livro por ID
                id = await askQuestion("Digite o ID do livro: ");

                console.log(library.getBookById(parseInt(id, 10)));
                break;
            default:
                console.log("Opção inválida");
        }
    }
};

// Iniciar a função principal
main().catch(err => {
    console.error(err);
    rl.close();
});