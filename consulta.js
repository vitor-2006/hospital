const getPaciente = require("./pacientes");
const getMedico = require("./medicos");
const {rl, askQuestion} = require('./readline')

let consultas = []; // This array will store the consultations

async function setConsulta() {
    let perguntaIDPaciente = await askQuestion('Digite o id do paciente: ');
    perguntaIDPaciente = parseInt(perguntaIDPaciente);
    const paciente = getPaciente(perguntaIDPaciente);
    
    // Validate if the patient was found before continuing
    if (!paciente) {
        return; // Exit the function if patient ID is invalid
    }

    let perguntaIDMedico = await askQuestion('Digite o id do médico: ');
    perguntaIDMedico = parseInt(perguntaIDMedico);
    const medico = getMedico(perguntaIDMedico);

    // Validate if the doctor was found
    if (!medico) {
        return; // Exit the function if doctor ID is invalid
    }

    let data = await askQuestion('Digite a data da consulta (DD/MM/AAAA): ');
    
    // Create a new consultation object and add it to the array
    const novaConsulta = {
        paciente: paciente,
        medico: medico,
        data,
    };
    

    consultas.push(novaConsulta);
    console.log(`Consulta marcada com sucesso para o paciente ${paciente.nome} com o médico(a) ${medico.nome}.`);
}

function listConsulta() {
    if (consultas.length === 0) {
        console.log('Nenhuma consulta marcada.');
        return;
    }
    console.log('--- Listagem de Consultas ---');
    consultas.forEach((consulta, index) => {
        console.log(`\nConsulta #${index + 1}:`);
        console.log(`Paciente: ${consulta.paciente.nome}`);
        console.log(`Médico: ${consulta.medico.nome}`);
        console.log(`Data: ${consulta.data}`);
    });
    console.log('---------------------------');
}

async function listConMed() {
    if (consultas.length === 0) {
        console.log('Nenhuma consulta marcada.');
        return;
    }

    let perguntaIDMedico = await askQuestion('Digite o id do médico: ');
    perguntaIDMedico = parseInt(perguntaIDMedico);

    // Use .filter() to get all consultations for the specific doctor.
    // We check if the 'id' property of the 'medico' object within each consultation matches.
    const consultasEncontradas = consultas.filter(consulta => consulta.medico.id === perguntaIDMedico);

    if (consultasEncontradas.length > 0) {
        console.log('\nConsultas encontradas:\n');
        consultasEncontradas.forEach(consulta => {
            console.log(`---`);
            console.log(`Paciente: ${consulta.paciente.nome}`);
            console.log(`Médico: ${consulta.medico.nome}`);
            console.log(`Data: ${consulta.data}`);
        });
        console.log('---');
    } else {
        console.log('Nenhuma consulta encontrada para este médico.');
    }
}


async function listConPa(){
    if (consultas.length === 0) {
        console.log('Nenhuma consulta marcada.');
        return;
    }

    let perguntaIDPaciente = await askQuestion('Digite o id do paciente: ');
    perguntaIDPaciente = parseInt(perguntaIDPaciente);

    // Use .filter() to get all consultations for the specific doctor.
    // We check if the 'id' property of the 'medico' object within each consultation matches.
    const consultasEncontradas = consultas.filter(consulta => consulta.paciente.id === perguntaIDPaciente);

    if (consultasEncontradas.length > 0) {
        console.log('\nConsultas encontradas:\n');
        consultasEncontradas.forEach(consulta => {
            console.log(`---`);
            console.log(`Paciente: ${consulta.paciente.nome}`);
            console.log(`Médico: ${consulta.medico.nome}`);
            console.log(`Data: ${consulta.data}`);
        });
        console.log('---');
    } else {
        console.log('Nenhuma consulta encontrada para este paciente.');
    }
}

async function listConData(){
    if (consultas.length === 0) {
        console.log('Nenhuma consulta marcada.');
        return;
    }

    let perguntaAno = await askQuestion('Digite o ano da consulta: ')
    let perguntaMes = await askQuestion('Digite o mês da consulta: ')

    let index = 1

    for(let i=0;i<consultas.length;i++){
        let dataArray = consultas[i].data.split('/')
        if(dataArray.includes(perguntaAno) && dataArray.includes(perguntaMes)){
            console.log(`consulta #${index} 
    Médico: ${consultas[i].medico.nome}
    Paciente: ${consultas[i].paciente.nome}
    Data: ${consultas[i].data}
    `)
            index++
        }
    }
}

async function ListJunto() {
    if (consultas.length === 0) {
        console.log('Nenhuma consulta marcada.');
        return;
    }

    let perguntaMed = parseInt(await askQuestion('Digite o id do médico: '))
    let perguntaPa = parseInt(await askQuestion('Digite o id do paciente: '))

    let index = 1

    for(let i=0;i<consultas.length;i++){
        if(consultas[i].medico.id === perguntaMed && consultas[i].paciente.id === perguntaPa){
            console.log(`consulta #${index} 
    Médico: ${consultas[i].medico.nome}
    Paciente: ${consultas[i].paciente.nome}
    Data: ${consultas[i].data}
    `)
            index++
        }
    }
}
module.exports = {setConsulta, listConsulta, listConMed, listConPa, listConData, ListJunto}