let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  //console.log('Bem-vinda,', info.personagem)
  //exercicio 2
  info.recorrente = 'Sim'
  //console.log(info)
  //exercicio 3
  //for(let key in info){
  //console.log(key)}
  //exercicio 4
  for(let properties in info) {
    console.log(info[properties])
  }