
// Exercicio 1

/*

let qtdAlunos = 0;
let somaIdades = 0;
let continuar = true;

do {
    let idadeAlunos = Number(prompt('Informe a idade dos alunos ou digite 999 para encerrar'));
    if (idadeAlunos > 0 && idadeAlunos != 999) {
        qtdAlunos++;
        somaIdades += idadeAlunos;
    } else if (idadeAlunos === 999) {
        continuar = false;
    } else {
        alert('Você digitou algo errado!');
    }



} while (continuar);

alert(`A turma possui ${qtdAlunos} e a média das idades é ${somaIdades / qtdAlunos} anos.`);

*/


// Exercicio 2

/*

let salarioHomens = 0;
let salarioMulheres = 0;

do {
    const informeSalario = Number(prompt(`Informe o salário do funcionário:`))
    const informeSexo = prompt('Informe o sexo do funcionário: H (para homem) e M (para mulher)').toUpperCase();
    if (informeSexo === "M") {
        salarioMulheres += informeSalario;
    } else if (informeSexo === "H") {
        salarioHomens += informeSalario;
    } else {
        alert('Você digitou algo errado!');

    }



} while (confirm('Deseja Continuar?'));

alert(`Total de salário para aos homens: ${salarioHomens}
Total de salário pagos para as mulheres: ${salarioMulheres}`)

*/

// Exercicio 3

/*

const valorInicial = Number(prompt('Informe o valor inicial:'));
const valorFinal = Number(prompt('Informe o valor final:'));
const incremento = Number(prompt('Informe o incremento:'));

document.write('Contagem: ');

for (let index = valorInicial; index <= valorFinal; index += incremento) {
    document.write(index + ' ');

}
document.write('Acabou!');

*/

// Exercicio 4

/*

const informeNome = prompt('Informe o nome do(a) cliente: ');
const informeSexo = prompt('Informe o sexo do(a) cliente: H (para homem) e M (para mulher)').toUpperCase();
let compraHomem = 0;
let compraMulher = 0;

do {

    if (informeSexo === 'H') {
        const valorCompras = Number(prompt('Digite o valor das compras: '));
        if (valorCompras > 0) {
            compraHomem += valorCompras
        } else {
            alert('Algo está errado!');
        }
    } else if (informeSexo === 'M') {
        const valorCompras = Number(prompt('Digite o valor das compras: '));
        if (valorCompras > 0) {
            compraMulher += valorCompras
        } else {
            alert('Algo está errado!');
        }
    }
    else {
        alert('Algo está errado!');
    }

} while (confirm('Deseja Continuar?'));



if (informeSexo === 'H') {
    compraHomem = compraHomem - (compraHomem * 5 / 100);
    alert('O valor total com desconto foi de: R$' + compraHomem);
} else if (informeSexo === 'M') {
    compraMulher = compraMulher - (compraMulher * 13 / 100);
    alert('O valor total com desconto foi de: R$' + compraMulher);
}

*/


// Exercicio 5

/*

const informeDistancia = Number(prompt('Informe a distancia que quer percorrer em KM: '));
let precoPassagem = 0;

if (informeDistancia > 0 && informeDistancia <= 200) {
    precoPassagem = informeDistancia * 0.50;
} else if (informeDistancia > 200 && informeDistancia > 0) {
    precoPassagem = informeDistancia * 0.45;

} else {
    alert('Algo está errado');
}

alert(`O valor da passagem será de ${precoPassagem}`);

*/

// Exercicio 6

let largura = Number(prompt("Digite a largura do terreno em Metros:"));
let altura = Number(prompt("Digite a altura do terreno em Metros:"));
let areaQuadrada = largura * altura;

if (areaQuadrada < 100) {
    console.log(
        `A área quadrada do terreno é de ${areaQuadrada} metros, portanto o terreno é POPULAR!`
    );
} else if (areaQuadrada <= 500) {
    console.log(
        `A área quadrada do terreno é de ${areaQuadrada} metros, portanto o terreno é MASTER!`
    );
} else {
    console.log(
        `A área quadrada do terreno é de ${areaQuadrada} metros, portanto o terreno é VIP!`
    );
}