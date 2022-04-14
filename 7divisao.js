function divisaoEntreParametros(n1,n2){
if (n1/n2 && n1/n2 % 2 === 0 ){
    return 'O resultado da divisão é' + ' ' + (n1/n2) + ' ' + 'e este número é par'
} else if (n2/n1 && n2/n1 % 2 === 0) {
    return 'O resultado da divisão é' + ' ' + (n2/n1) + '  ' + 'e este número é par'
} else if (n2/n1 && n2/n1 % 2 === 1) {
return 'O resultado desta divisão é' + ' ' + (n2/n1) + '  ' + 'e este número é ímpar'
} else if (n1/n2 && n1/n2 % 2 === 1) {
    return 'O resultado desta divisão é' + ' ' + (n1/n2) + '  ' + 'e este número é ímpar'
}
}
