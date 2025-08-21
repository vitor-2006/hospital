const {setConsulta, listConsulta, listConMed, listConPa, listConData, ListJunto} = require('./consulta')
const {rl, askQuestion} = require('./readline')

async function exibirMenuAsync() {
    
    // We use a 'while' loop to keep the menu running until the user decides to exit.
    let continuar = true;
    while (continuar) {
        console.log("qual opção você vai usar?: \n1 -> Criar consulta\n2 -> Listar consulta \n3 -> Listar por médico \n4 -> Listar por paciente \n5 -> Listar por data \n6 -> Listar por paciente e médico juntos \n7 -> Fechar programa\n");
        // Here we 'await' the user's input, making the code synchronous-looking.
        const input = await askQuestion("escolha a opção: ");
        const op = parseInt(input);

        switch (op) {
            case 1:
                await setConsulta();
                break;
            case 2:
                listConsulta();
                break;
            case 3:
                await listConMed()
                break
            case 4:
                await listConPa()
                break
            case 5:
                await listConData()
                break
            case 6:
                await ListJunto()
                break
            case 7:
                console.log('até mais!');
                rl.close();
                // Set 'continuar' to false to exit the loop.
                continuar = false;
                break;
            default:
                console.log('Operação inválida! Tente novamente');
                // The loop will automatically display the menu again.
                break;
        }
    }
}

// Call the async function to start the program.
exibirMenuAsync();