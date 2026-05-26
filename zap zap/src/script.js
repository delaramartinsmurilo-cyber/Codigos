function zap(){
    const nome = document.getElementById('nome').value 
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value

    const mensagem = `Gostaria de entrar em contato!\n\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${phone}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/55dd********?text=${msg}`)
}