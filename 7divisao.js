function divisaoEntreParametros(n1,n2){
if (n1/n2 && n1 % n2 === 0 ){
    return 'O resultado da divisão é' + ' ' + (n1/n2) + '  ' + ' e o resto desta divisão é' + '  ' + (n1 % n2) + '  ' + 'e o número é par'
} else if (n2/n1 && n2 % n1 === 0) {
    return 'O resultado da divisão é' + ' ' + (n2/n1) + '  ' + ' e o resto desta divisão é' + '  ' + (n2 % n1) + '  ' + 'e o número é par'
} else if (n2/n1 && n2 % n1 > 0 ||  n2 % n1 < 0) {
return 'O resultado desta divisão é' + ' ' + (n2/n1) 
} else if (n1/n2 && n1 % n2 > 0 ||  n1 % n2 < 0) {
    return 'O resultado desta divisão é' + ' ' + (n1/n2) 
}
}

