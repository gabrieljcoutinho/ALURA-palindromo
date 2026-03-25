# 🔁 Verificador de Palíndromo em JavaScript

Este projeto verifica se uma palavra é um **palíndromo**, ou seja, se pode ser lida da mesma forma de trás para frente.

---

## 💻 Código

```javascript
const texto = 'arara';

let textoInvertido = '';

for (let i = texto.length - 1; i >= 0; i--){
    textoInvertido += texto[i]
}

const result = texto === textoInvertido
    ? `${texto} é palindromo`
    : `${texto} não é palindromo`;

console.log(result)
