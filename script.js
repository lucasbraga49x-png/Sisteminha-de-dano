let vidaPlayer = document.getElementById("vidaPlayer")
const danoPlayer = 40
let vidaSlime = document.getElementById("vidaMonstro")
const danoSlime = 20
const botaoAtaquePlayer = document.getElementById('ataqueAventureiro') 
const botaoAtaqueSlime = document.getElementById('ataqueSlime')

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
   }
})

botaoAtaqueSlime.addEventListener('click', ()=>{
   let vidaAtual = parseInt(vidaPlayer.textContent)
   vidaPlayer.textContent = vidaAtual - danoPlayer
   if (vidaPlayer.textContent < 0){
    vidaPlayer.textContent = 0
   }
})