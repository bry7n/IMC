const button = document.querySelector("#button-imc");

button.addEventListener("click", function () {
  const altura = document.querySelector("#altura-imc").value;
  const peso = document.querySelector("#peso-imc").value;

  if (!altura || !peso) {
    alert("Por favor, insira ambos os valores!");
    return;
  }

  let alturaCalculo = Math.pow(altura, 2);
  const imc = peso / alturaCalculo;

  let classificacaoImc = "";

  if (imc < 18.5) {
    classificacaoImc = "abaixo do peso!";
  } else if (imc >= 18.6 && imc <= 24.9) {
    classificacaoImc = "normal!";
  } else if (imc >= 25.0 && imc <= 29.9) {
    classificacaoImc = "um pouco acima do peso!";
  } else if (imc >= 30.0 && imc <= 34.9) {
    classificacaoImc = "com Obesidade grau I!";
  } else if (imc >= 35.0 && imc <= 39.9) {
    classificacaoImc = "com Obesidade grau II (severa)!";
  } else {
    classificacaoImc = "com Obesidade grau III (mórbida)!";
  }

  const total = document.querySelector("#total-imc");

  total.innerHTML = `Seu IMC é ${imc.toFixed(
    2
  )}, você está ${classificacaoImc}`;
});
