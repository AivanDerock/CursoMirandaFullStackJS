let nomeUser = prompt("Digite seu nome completo:")

document.body.innerHTML += `Seu nome é ${nomeUser} <br>`;
document.body.innerHTML += `Seu nome tem ${nomeUser.length} letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nomeUser[1]} <br>`;
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nomeUser.indexOf('a')} <br>`;
document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${nomeUser.lastIndexOf("a")} <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nomeUser.slice(-3, nomeUser.length)} <br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nomeUser.split(" ")} <br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeUser.toLocaleUpperCase()} <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeUser.toLocaleLowerCase()} <br>`;
