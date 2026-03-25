const texto = 'arara';

let textoInvertido = '';

for (let i = texto.length - 1; i >= 0; i--){
        textoInvertido += texto[i]
}

const result = texto === textoInvertido
    ? `${texto} é palindromo`
    : `${texto} não é palindromo`;

    console.log(result)