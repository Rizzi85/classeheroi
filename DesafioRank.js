

const classe = ["Ferro", "Bronze","Prata","Ouro",
"Platina","Ascendente","Imortal","Radiante","Diamante","Lendário"]
let nome = ""
let xp = 70000000
let nivel = ""
let rank = ""
let vitorias = 81
let derrotas = 0
if (xp <=1000){//Se XP for menor do que 1.000 = Ferro   
  nivel = classe[0]
}else if (xp>1000 && xp <=2000){//Se XP for entre 1.001 e 2.000 = Bronze
  nivel = classe[1]
}else if (xp>2000 && xp <=5000){//Se XP for entre 2.001 e 5.000 = Prata
   nivel = classe[2]
}else if (xp>5000 && xp<=7000){//Se XP for entre 6.001 e 7.000 = Ouro (fiz uma pequena alteração senão ia ficar um espaço vazio)
  nivel = classe[3]
}else if (xp> 7000 && xp <=8000){//Se XP for entre 7.001 e 8.000 = Platina
  nivel = classe[4]
}else if (xp > 8000 && xp <=9000){//Se XP for entre 8.001 e 9.000 = Ascendente
   nivel = classe[5]
}else if (xp >9000 && xp <=10000){//Se XP for entre 9.001 e 10.000= Imortal
    nivel = classe[6]
}else if (xp > 10000){//Se XP for maior ou igual a 10.001 = Radiante
    nivel = classe[7]
}

function saldoVitorias (){
   return vitorias - derrotas;
}

soma = saldoVitorias()

if (soma <=10){//Se vitórias for menor do que 10 = Ferro
    rank = classe[0]
  }else if (soma>10 && soma <=20){//Se vitórias for entre 11 e 20 = Bronze
    rank = classe[1]
  }else if (soma>20 && soma <=50){//Se vitórias for entre 21 e 50 = Prata
    rank = classe[2]
  }else if (soma>50 && soma<=80){//Se vitórias for entre 51 e 80 = Ouro
    rank= classe[3]
  }else if (soma> 80 && soma <=90){//Se vitórias for entre 81 e 90 = Diamante
    rank = classe[8]
  }else if (soma > 90 && soma <=100){//Se vitórias for entre 91 e 100= Lendário
    rank = classe[9]
  }else if (soma > 100){//Se vitórias for maior ou igual a 101 = Imortal
    rank = classe[6]

  }


//let bol = nao
//let como = ao
console.log("O Herói de nome " +nome+" está no nível de " +nivel)
console.log ('O Herói tem de saldo de '+ soma + ' está no nível de ' + rank)