const medicos = [
    {id: 1, nome: 'João', especialidade: 'Diagnóstico'},
    {id: 2, nome: 'Maria', especialidade: 'Cirurgia'}
]

function getMedico(perguntaID) {

    const medicoEncontrado = medicos.find(medico => medico.id === perguntaID);

    if(!medicoEncontrado){
        console.log('ID do médico inválido')
        return
    }
    return medicoEncontrado
}

module.exports = getMedico