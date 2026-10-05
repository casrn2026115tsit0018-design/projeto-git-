let preco = 120;
let estoque = 10;
const desconto = 20;
let user = true;

function descontoValor(preco, desconto) { 
    
if (estoque <= 0 && user == true) {
    return "Produto esgotado";

}else if (estoque > 0 && user == false) {
let valor = (preco * desconto / 100);
    return preco - valor;

}else{
    return "Usuário não autorizado";
}
}

console.log(descontoValor(preco, desconto));