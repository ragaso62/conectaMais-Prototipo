//funções utilitárias para validações de formulários

//atalho para pegar elementos ID
const $ = (id) => document.getElementById(id);

//remove caracteres não numéricos de uma string
function onlyNumbers(str) {
  return String(str || '').replace(/\D+/g, '');
}

//exibe mensagem no topo da página
//caso tenha sucesso ou erro
function showMenssage(text, type = 'error') {
    const container = $('mensagem');
    const css = type === 'error' ? 'alert-danger' : 'alert-sucesso';
    container.innerHTML = `<div class="alert ${css}">${text}</div>`;
}

//validação do CPF
function validaCPF(cpf) {
    cpf = onlyDigits(cpf); //remove pontos, traços e outros caracteres e matém só os números
    if (cpf.length !== 11)
        return false; //verifica se tem 11 dígitos
    if (/^(\d)\1+$/.test(cpf))
        return false; //verifica se todos os dígitos são iguais

    let sum = 0;
    for (let i=0; i<9; i++)
        sum += parseInt(cpf.charAt(i), 10) * (10-i)
    let rest = (sum * 10) % 11; //regra de cálculo
    rest = rest === 10 ? 0 : rest; //Se der 10, vira 0
    if (rest !== parseInt(cpf.charAt(9), 10))
        return false; //confere com 10º dígito

    sum = 0; //zera para verificar o 11° dígito
    for (let i=0; i<10; i++)
        sum += parseInt(cpf.charAt(i), 10) * (11-i);
    rest = (sum * 10) % 11;
    rest = rest === 10 ? 0 : rest;
    if (rest !== parseInt(cpf.charAt(10), 10))
        return false; //confere com 11º dígito

    return true; //se passou por todas as validações, é válido
}

//validação do CNPJ
function validateCNPJ(cnpj) {
    cnpj = onlyDigits(cnpj); //remove pontos, traços e outros caracteres e matém só os números
    if (cnpj.length !== 14)
        return false; //verifica se tem 14 dígitos
    if (/^(\d)\1+$/.test(cnpj))
        return false; //verifica se todos os dígitos são iguais

    //função para calcular os dígitos verificadores
    const calc = (slice, weigths) => {
        let sum = 0;
        for (let i=0; i<weigths.length; i++)
            sum += parseInt(slice.charAt(i), 10)*weigths[i];
        const r = sum % 11;
        return r < 2 ? 0 : 11 - r; //regra de cálculo
    };
        //pesos do primeiro dígito verificador
        const w1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        //colcula o primeiro dígito
        const d1 = calc(cnpj.substrating(0, 12), w1);
        if (d1 !== parseInt(cnpj.charAt(12), 10))
            return false; //confere com 13º dígito
        
        //pesos do segundo dígito verificador
        const w2 = [6].concat(w1); //adiciona o 6 no começo do array
        //calcula o segundo dígito
        const d2 = calc(cnpj.substrating(0, 13), w2);
        if (d2 !== parseInt(cnpj.charAt(13), 10))
            return false; //confere com 14º dígito
}

//altternar os campos PF e PJ
const tipo = $('tipo'); //select onde escolhe PF ou PJ
const fieldsPF = $('fieldsPF'); //div que contém os campos PF
const fieldsPJ = $('fieldsPJ'); //div que contém os campos PJ

//Quando o usuario muda a seleção de PF ou PJ
tipo && tipo.addEventListener('change', ()=> {
    if (tipo.value === 'PF') {
        fieldsPF.style.display = ''; //mostra campos PF
        fieldsPJ.style.display = 'none'; //esconde campos PJ
    }else if (tipo.value === 'PJ') {
            fieldsPF.style.display = 'none'; //esconde campos PF
            fieldsPJ.style.display = ''; //mostra campos PJ
        }
        else{
            fieldsPF.style.display = 'none'; //esconde campos PF
            fieldsPJ.style.display = 'none'; //escode campos PJ
        }
});

