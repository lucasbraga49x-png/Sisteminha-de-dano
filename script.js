let vidaPlayer = document.getElementById("vidaPlayer")
const danoPlayer = 40
let vidaSlime = document.getElementById("vidaMonstro")
const danoSlime = 20
const botaoAtaquePlayer = document.getElementById('ataqueAventureiro') 
const botaoAtaqueSlime = document.getElementById('ataqueSlime')
const divNotificacao = document.querySelector('.divNotificacao')
const tituloNot = document.getElementById('TituloNot')
const descricao = document.getElementById('DescricaoNot')

vidaPlayer.textContent = 100
vidaSlime.textContent = 100

botaoAtaquePlayer.addEventListener('click', ()=>{
   let vidaAtual = parseInt(vidaSlime.textContent)
   let imagem = document.getElementById("player")
   imagem.src = 'atacou.png'
   setTimeout(()=>{
     imagem.src = 'Aventureiro.png'
   },1000)
   vidaSlime.textContent = vidaAtual - danoPlayer
   if (vidaSlime.textContent < 0){
    vidaSlime.textContent = 0
    divNotificacao.style.display = 'flex'
    tituloNot.textContent = 'Game Win'
    tituloNot.style.color = 'rgb(21, 175, 21)'
    descricao.textContent = 'Parabens por ter conseguido matar o slime!'
    descricao.style.color = '#08ed00'
     setTimeout(()=>{
     divNotificacao.style.display = 'none'
     vidaSlime.textContent = 100
      vidaPlayer.textContent = 100
   },5000)
   }
})

botaoAtaqueSlime.addEventListener('click', ()=>{
   let vidaAtual = parseInt(vidaPlayer.textContent)
   vidaPlayer.textContent = vidaAtual - danoPlayer
   if (vidaPlayer.textContent < 0){
    vidaPlayer.textContent = 0
    divNotificacao.style.display = 'flex'
    tituloNot.textContent = 'Game Over'
    tituloNot.style.color = 'rgb(185, 30, 19)'
    descricao.textContent = 'Como tu perdeu pra um slime???'
    descricao.style.color = '#f60303'
     setTimeout(()=>{
     divNotificacao.style.display = 'none'
     vidaPlayer.textContent = 100
       vidaSlime.textContent = 100
   },2000)
   }
})