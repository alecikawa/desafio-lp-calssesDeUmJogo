

class Jogador {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo; // 'guerreiro, mago, monge, ninja
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro": 
                ataque = "espada";
                break;
            case "monge": 
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
             default:
                ataque = "ataque desconhecido";
        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const hero1 = new Jogador("Alec", 24, "mago");
hero1.atacar(); // O mago atacou usando magia

const hero2 = new Jogador("Lucas", 25, "guerreiro");
hero2.atacar(); // O guerreiro atacou usando espada

