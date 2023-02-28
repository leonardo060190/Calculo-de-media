function calcular(){
    // valida os campos se eles tiverem preenchidos e permite executar o somar.
   if(validaPrimeiroValor() && validaSegundoValor() && validaTerceiroValor() && validaQuartoValor()){
     // faz a soma dos valores.
    let resultado = parseFloat(primeiro.value) + parseFloat(segundo.value) + parseFloat(terceiro.value)  + parseFloat(quarto.value);
    // faz a divisão do resultado para obter a média.
    let mediaTotal = resultado / 4;
    // exibe o resultado.
    total.value = mediaTotal;
   };
};
// valida o primeiro campo.
function validaPrimeiroValor(){
    // verifica se o campo está preenchido e remove os espaços.
        if(primeiro.value.trim() === ""){
            // se o campo não estiver preenchido exibe a cor verde no campo.
            primeiro.style.background = "green";
            // envia uma mensagem de alerta pedindo que insira um valo.
            mensagem.innerHTML = "Preencha o primeiro valor"
            // exibe uma janela com a mensagem de alerta.
            $('#alerta').modal('show');
            return false;
        }else{
            // se o estiver preenchido o campo fica branco e vai para o proximo.
            primeiro.style.background = "white";
            return true;
        }
};

function validaSegundoValor(){
     // verifica se o campo está preenchido e remove os espaços.
    if(segundo.value.trim() === ""){
          // se o campo não estiver preenchido exibe a cor verde no campo.
        segundo.style.background = "green";
          // envia uma mensagem de alerta pedindo que insira um valo.
        mensagem.innerHTML = "Preencha o segundo valor"
         // exibe uma janela com a mensagem de alerta.
        $('#alerta').modal('show');
        return false;
    }else{
        // se o estiver preenchido o campo fica branco e vai para o proximo.
        segundo.style.background = "white";
        return true;
    };
};

function validaTerceiroValor(){
     // verifica se o campo está preenchido e remove os espaços.
    if(terceiro.value.trim() === ""){
          // se o campo não estiver preenchido exibe a cor verde no campo.
        terceiro.style.background = "green";
          // envia uma mensagem de alerta pedindo que insira um valo.
        mensagem.innerHTML = "Preencha o terceiro valor"
         // exibe uma janela com a mensagem de alerta.
        $('#alerta').modal('show');
        return false;
    }else{
        // se o estiver preenchido o campo fica branco e vai para o proximo.
        terceiro.style.background = "white";
        return true;
    };
};

function validaQuartoValor(){
     // verifica se o campo está preenchido e remove os espaços.
    if(quarto.value.trim() === ""){
          // se o campo não estiver preenchido exibe a cor verde no campo.
        quarto.style.background = "green";
          // envia uma mensagem de alerta pedindo que insira um valo.
        mensagem.innerHTML = "Preencha o quarto valor"
         // exibe uma janela com a mensagem de alerta.
        $('#alerta').modal('show');
        return false;
    }else{
        // se o estiver preenchido o campo fica branco e vai para o proximo.
        quarto.style.background = "white";
        return true;
    };
};