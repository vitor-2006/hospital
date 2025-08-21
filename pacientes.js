const pacientes = [
    {id: 1, nome: 'Wasd', dataNascimento: '1985-01-15'},
    {id: 2, nome: 'Qwerty', dataNascimento: '1990-05-30'}
]

function getPaciente(perguntaID) {
    // Find the patient object where the id matches perguntaID
    const pacienteEncontrado = pacientes.find(paciente => paciente.id === perguntaID);

    if(!pacienteEncontrado){
        console.log('ID do paciente inválido');
        return; // Return nothing if not found
    }
    return pacienteEncontrado;
}

module.exports = getPaciente