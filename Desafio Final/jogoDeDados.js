var pontoPlayer1 = document.getElementById('pontoPlayer1');
var pontoPlayer2 = document.getElementById('pontoPlayer2');
var dadoPlayer1 = document.getElementById('dadoPlayer1');
var dadoPlayer2 = document.getElementById('dadoPlayer2');
var resultado = document.getElementById('resultado');
var pontoP1 = 10;
var pontoP2 = 10;

function iniciar() {
    var login = document.getElementById('login');
    var player1 = document.getElementById('player1').value;
    var player2 = document.getElementById('player2').value;
    var jogo = document.getElementById('jogo');
    var nomePlayer1 = document.getElementById('nomePlayer1');
    var nomePlayer2 = document.getElementById('nomePlayer2');
    if (player1 && player2 != " ") {
        login.hidden = true;
        jogo.hidden = false;
        nomePlayer1.innerHTML = player1;
        nomePlayer2.innerHTML = player2;
    }
    else {
        alert('identifique o nome dos jogadores');
    }
}
function reset() {
    dadoPlayer1.src = "dado0.png";
    dadoPlayer2.src = "dado0.png";
    pontoP1 = 10;
    pontoP2 = 10;
    resultado.innerHTML = " ";
    pontoPlayer1.innerHTML = pontoP1 + " pontos";
    pontoPlayer2.innerHTML = pontoP2 + " pontos";
}
function jogar() {
    var sorteioPlayer1 = Math.floor(Math.random() * 6 + 1);
    var sorteioPlayer2 = Math.floor(Math.random() * 6 + 1);
    var ponto1 = null;
    var ponto2 = null;

    switch (sorteioPlayer1) {
        case 1:
            dadoPlayer1.src = "dado1.png";
            ponto1 = 1;
            break;
        case 2:
            dadoPlayer1.src = "dado2.png";
            ponto1 = 2;
            break;
        case 3:
            dadoPlayer1.src = "dado3.png";
            ponto1 = 3;
            break;
        case 4:
            dadoPlayer1.src = "dado4.png";
            ponto1 = 4;
            break;
        case 5:
            dadoPlayer1.src = "dado5.png";
            ponto1 = 5;
            break;
        case 6:
            dadoPlayer1.src = "dado6.png";
            ponto1 = 6;
            break;
    }
    switch (sorteioPlayer2) {
        case 1:
            dadoPlayer2.src = "dado1.png";
            ponto2 = 1;
            break;
        case 2:
            dadoPlayer2.src = "dado2.png";
            ponto2 = 2;
            break;
        case 3:
            dadoPlayer2.src = "dado3.png";
            ponto2 = 3;
            break;
        case 4:
            dadoPlayer2.src = "dado4.png";
            ponto2 = 4;
            break;
        case 5:
            dadoPlayer2.src = "dado5.png";
            ponto2 = 5;
            break;
        case 6:
            dadoPlayer2.src = "dado6.png";
            ponto2 = 6;
            break;
    }
    if (ponto1 < ponto2) {
        pontoP1--;
        resultado.innerHTML = "Player1 perde 1 ponto";
    } else if (ponto1 > ponto2) {
        pontoP2--;
        resultado.innerHTML = "Player2 perde 1 ponto";
    } else {
        pontoP1 = pontoP1;
        pontoP2 = pontoP2;
        resultado.innerHTML = "Empate";
    }
    if (pontoP1 <= 0 && pontoP1<pontoP2) {
        pontoPlayer1.innerHTML = "GAME OVER";
        pontoPlayer2.innerHTML = "CONGRATULAÇÕES";
        resultado.innerHTML = "Reinici o jogo";
        pontoP2++;
    } else if (pontoP2 <= 0 && pontoP1>pontoP2) {
        pontoPlayer1.innerHTML = "CONGRATULAÇÕES";
        pontoPlayer2.innerHTML = "GAME OVER";
        resultado.innerHTML = "Reinici o jogo";
        pontoP1++;
    } else {
        pontoPlayer1.innerHTML = pontoP1 + " pontos";
        pontoPlayer2.innerHTML = pontoP2 + " pontos";
    }
}


