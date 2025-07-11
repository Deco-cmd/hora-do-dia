function carregar() {
    
var msg = window.document.getElementById('msg');
var foto = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
//var hora = 19
msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 0 && hora < 12) {
    // Bom dia!
    msg.innerHTML += '<p>Bom dia!</p>';
    foto.src = 'manha1.png';  
    document .body.style.background = '#e2cd9f';
}  
    else if (hora >= 12 && hora <18){
        // Boa tarde!
        msg.innerHTML += '<p>Boa tarde!</p>';
        foto.src = 'tarde1.png';
        document.body.style.background = '#b9846f';

}
    else {
        // Boa noite!
        msg.innerHTML += '<p>Boa noite!</p>';
        foto.src = 'noite1.png';
        document.body.style.background = '#515154';
    }
}