function resultadoBoletim(n1,n2,n3){
    const media = (n1+n2+n3)/3
    if (media >= 7){
    return 'Aprovado'
    } else if (media >= 5 && media< 7) {
    return 'Recuperação'
    } else if (media < 5) {
        return 'Reprovado'
    }
}




