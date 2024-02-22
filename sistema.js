const data = new Date();
const momento = data.getHours();

class Sistema {
    constructor() {
        this.usuarios = [];
        this.eventos = [];
    }

    criarEvento(evento) {
        this.eventos.push(evento);
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
}

class Evento {
    constructor(nome, categoria, descricao, horario, endereco) {
        this.nome = nome;
        this.categoria = categoria;
        this.descricao = descricao;
        this.horario = horario;
        this.endereco = endereco;
    }
}

class Usuario {
    constructor(nomeUsuario, idade, genero) {
        this.nomeUsuario = nomeUsuario;
        this.idade = idade;
        this.genero = genero;
        this.listaEventosParticipados = [];
    }

    participarEvento(nomeEvento, sistema) {
        const evento = sistema.eventos.find(evento => evento.nome === nomeEvento);
        if (evento) {
            this.listaEventosParticipados.push(evento);
            console.log(`O usuário ${this.nomeUsuario} foi cadastrado no evento ${nomeEvento}`);
        } else {
            console.log(`Evento ${nomeEvento} não encontrado.`);
        }
    }

    consultarEventos() {
        console.log(this.listaEventosParticipados);
    }

    CancelarEventos(nomeEvento){
        this.listaEventosParticipados.forEach((evento, index) =>{
            if(evento.nome === nomeEvento){
                this.listaEventosParticipados.splice(index, 1);
            }
        });
    }
    
    consultarHorarioEventos() {
        this.listaEventosParticipados.forEach(evento => {
            if (evento.horario < momento) {
                console.log(`O evento ${evento.nome} já ocorreu.`);
            } else if (evento.horario === momento) {
                console.log(`O evento ${evento.nome} está ocorrendo neste momento.`);
            } else if (evento.horario > momento) {
                const horarioEvento = evento.horario < 10 ? `0${evento.horario}:00` : `${evento.horario}:00`;
                console.log(`O evento ${evento.nome} ainda vai ocorrer às ${horarioEvento}.`);
            }
        });
    }
    
}

const sistema = new Sistema();
const usuario = new Usuario('Caique', 26, 'Homem');
const evento = new Evento('Faculdade', 'Estudo', 'Faculdade de Computação', 20, 'Ondina');
const evento2 = new Evento('jogo do vitoria', 'esporte','jogo do campeonato bainao',18,'estadio manoeal barradas');

sistema.criarEvento(evento);
sistema.criarEvento(evento2);
usuario.participarEvento('Faculdade', sistema);
usuario.participarEvento('jogo do vitoria', sistema)
usuario.consultarEventos();
usuario.consultarHorarioEventos();

