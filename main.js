// var recebeNumero = botão que o usuario vai clicar para que a tabuada seja calculada 
var recebeNumero = document.getElementById('recebeNumero');
// addEventListener "aplica" o listener/watcher de evento de click no botão e atribui uma função a ele
recebeNumero.addEventListener('click', Calcular);

//função para calcular a tabuada
function Calcular() {
    // var numero = input de texto que o usuario vai digitar o numero a ser calculado a tabuada
    var numero = document.getElementById('numero');
    numero = Number(numero.value); // converte o input text para número
    
    // var cabecalhoTabuada = adicionar ao cabeçalho qual a tabuada calculada
    var cabecalhoTabuada = document.getElementById('cabecalhoTabuada');
    cabecalhoTabuada.textContent = "TABUADA DO " + numero;
    
    // looping de repetição para que cada etapa/linha da tabuada seja calculada e mostrada na pagina (linha a linha)
    for(var i = 1; i < 11 ; i++) {   
        //var resultadoColuna = calculo final
        var resultadoColuna = document.getElementById('resultadoColuna' + i);     

        // i recebe os valores de 0 até 10 conforme o looping for executando, então é multiplicado pelo número que o usuario digitou
        resultadoColuna.textContent = i * numero;

        // var numColuna = cabeçalho com a tabuada ( numero x valor = ); por estarmos usando get by class ele cria um array com a lista de todos os itens que utilizam essa classe na pagina
        var numColuna = document.getElementsByClassName('numColuna');
        // numColuna[i - 1] = i subitrai 1 porque o array inicia em 0 e nosso i em 1; depois é colocado na tela o cabeçalho
        numColuna[i - 1].textContent =  numero + " X " + i + " = ";
    }

}
// var limpaTela = botão para limpar tabela e input
var limpaTela = document.getElementById('limpaTela');
// atribui a função Limpar ao evento de click no botão
limpaTela.addEventListener('click', Limpar);

function Limpar() {
    
    numero.value = ''; // limpa o valor do input
    numero.focus(); // foca (deixa o elemento selecionado) o input
    
    cabecalhoTabuada.textContent = "TABUADA"; // limpa o cabeçalho

    // looping para limpar os resultados dentro da tabela (igual é usado para mostrar os dados)
    for(var i = 1; i < 11 ; i++) {   
        var resultadoColuna = document.getElementById('resultadoColuna' + i);     
        resultadoColuna.textContent = "";

        var numColuna = document.getElementsByClassName('numColuna');
        numColuna[i - 1].textContent =  "";
    }
}