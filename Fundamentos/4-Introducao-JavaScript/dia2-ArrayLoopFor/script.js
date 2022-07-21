let notaCandidata = 70
let statusCandidata = ("aprovada", "lista", "reprovada");
switch (statusCandidata) {
    case 70 < 60:
        statusCandidata = 'reprovada';
        break;
    case 70 >= 60 && 70 <80:
        statusCandidata = 'lista';
        break;
    case 70 >= 80:
        statusCandidata = 'aprovada';
        break;
}