// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar
    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const mago = new Heroi('Gandalf', 100, 'Mago');
const guerreiro = new Heroi('Aragorn', 87, 'Guerreiro');

// Chamando o método atacar para cada instância
mago.atacar();        // Saída: O Mago atacou usando magia
guerreiro.atacar();   // Saída: O Guerreiro atacou usando espada

