const resMedia = (n1, n2, n3, n4) => {
    Media = (n1 + n2 + n3 + n4)/4
}
resMedia(2.00, 3.00, 5.00, 6.00)

if (Media < 6.00) {
    return "Recuperação";
}
else if (Media < 4.00) {
    return "Reprovado";
}
else {
    return "Aprovado";
}
 
