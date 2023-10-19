//Função master
function Produto(nome, preco, material ,estoque){
    this.nome = nome;
    this.preco = preco;
    this.material = material;
    
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Produto.prototype.desconto = function(porcentagem){
    this.preco = this.preco - (this.preco * (porcentagem / 100))
    return this.preco
}

Produto.prototype.aumento = function(porcentagem){
    this.preco = this.preco + (this.preco * (porcentagem / 100))
    return this.preco
}
//Função master


//Bermuda
function Bermuda(nome, preco, cor, material, estoque){
    Produto.call(this, nome, preco, material, estoque)
    this.cor = cor
}

Bermuda.prototype = Object.create(Produto.prototype)
Bermuda.prototype.constructor = Bermuda

const bermuda = new Bermuda('Short Nike', 15.40, 'Branca', 'Jeans' ,17)
bermuda.desconto(10)
exiba('Bermuda', bermuda)
//Bermuda


//Camiseta 
function Camiseta(nome, preco, cor, material, estoque){
    Produto.call(this, nome, preco, material, estoque);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const camiseta = new Camiseta('Regata', 39.90, 'Preta', 'Algodão' ,36);
camiseta.aumento(10)
exiba('Camiseta', camiseta)
//Camiseta 


//Caneca
function Caneca(nome, preco, cor, material, estoque){
    Produto.call(this, nome, preco, material, estoque)
    this.cor = cor
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('Caneca', 7.50, 'Azul', 'Porcelana', 12)
caneca.aumento(10)
exiba('Caneca', caneca)
//Caneca


//Apenas exibição
function exiba(nomeDoObjeto, constanteDoObjeto){
    const entries = Object.entries(constanteDoObjeto);

    let larguraMaximaChave = 0;
    let larguraMaximaValor = 0;
    for (let [chave, valor] of entries) {
        if (chave.length > larguraMaximaChave) {
            larguraMaximaChave = chave.length;
        }
        if (String(valor).length > larguraMaximaValor) {
            larguraMaximaValor = String(valor).length;
        }
    }

    process.stdout.write(`${nomeDoObjeto} ->`);

    for(let [chave, valor] of entries){
        let espacosChave = ' '.repeat(larguraMaximaChave - chave.length);
        let espacosValor = ' '.repeat(larguraMaximaValor - String(valor).length);

        if (chave === 'material') {
            espacosChave += '  '; 
        }

        process.stdout.write(` || ${chave}:${espacosChave}${valor}`);
    }

    console.log(' ||');
}
//Apenas exibição