
let player1;
let newGame = false;
let contador_selecciones = 0;
let score1 = 0;
let score2 = 0;
let cantidadJuegos = 0;
let simbolo;
let count_clicks = 0;
let victorias1 = 0;
let victorias2 = 0;

const modal_ganador = document.getElementById('ganador')
const img_ganador = document.getElementById('img-ganador')
const score_p1 = document.getElementById('score1')
const score_p2 = document.getElementById('score2')
const score1m = document.getElementById('score1m');
const score2m = document.getElementById('score2m');

const iniciar = document.getElementById('ranGame');

const start = document.getElementById('start');

const cerrar = document.getElementById('cerrar')

const reset = document.getElementById('resetGame')
// trayendome los botones del html
const buttonActive1 = document.getElementById('button-active1');
const buttonActive2 = document.getElementById('button-active2');
const buttonActive3 = document.getElementById('button-active3');
const buttonActive4 = document.getElementById('button-active4');
const buttonActive5 = document.getElementById('button-active5');
const buttonActive6 = document.getElementById('button-active6');
const buttonActive7 = document.getElementById('button-active7');
const buttonActive8 = document.getElementById('button-active8');
const buttonActive9 = document.getElementById('button-active9');

const jugador1 = document.getElementById('caja_mobil1');
const jugador2 = document.getElementById('caja_mobil2');
console.log(jugador1)

arrayButtons =[
   buttonActive1, buttonActive2, buttonActive3, buttonActive4,buttonActive5, buttonActive6, buttonActive7, buttonActive8, buttonActive9
]
// celdas de la tabla
const celda_1 = document.getElementById('celda1_1')
const celda_2 = document.getElementById('celda1_2')
const celda_3 = document.getElementById('celda1_3')
const celda_4 = document.getElementById('celda2_1')
const celda_5 = document.getElementById('celda2_2')
const celda_6 = document.getElementById('celda2_3')
const celda_7 = document.getElementById('celda3_1')
const celda_8 = document.getElementById('celda3_2')
const celda_9 = document.getElementById('celda3_3')

const arrayCeldas = [
   celda_1, celda_2, celda_3, celda_4, celda_5,  celda_6, celda_7, celda_8, celda_9
]



const nextGame = document.getElementById('nextGame');

nextGame.onclick = () => {
   arrayCeldas.forEach((celda)=>{
      celda.style.backgroundColor = '#cdcbcb37';
   })
   ganador = 0;
   contador_selecciones = 0;
   newGame = true;

   arrayButtons.forEach((btn)=>{
      btn.textContent = '';
      btn.disabled = false
      btn.style.cursor = 'pointer'
      
   })

   const ranGame = document.getElementById('ranGame');
   ranGame.disabled = false;
   ranGame.style.backgroundColor = 'cyan';
   ranGame.style.cursor = 'pointer';
   
   nextGame.disabled = true;
   nextGame.style.backgroundColor = 'transparent'

}


iniciar.onclick = () => {
   player1 = random(newGame);
   start.onclick = () => {
      iniciar.style.display = 'none'
      let modal = document.querySelector('.modal');
      let modalContainer = document.querySelector('.modal-container');
   
      modal.classList.toggle('modal-close')
   
      setTimeout(
         function (){
            modalContainer.style.opacity = '0';
            modalContainer.style.visibility = 'hidden';
         }, 1000
      )
   
   }
}
// randon

function random(newGame){
   player1;
   const ranMatch = Math.floor(Math.random()*2) + 1;

   if (ranMatch === 1){
      player1 = true;
      simbolo = 'O'
      const img1 = document.getElementById('img-player1');
      img1.style.transform = "scale(1.2)";
      img1.style.opacity = '1';
      const img2 = document.getElementById('img-player2');
      img2.style.opacity = '0.2';
      jugador1.classList.add('jugador1')
   } else {
      
      simbolo = 'X'
      let img = document.getElementById('img-modal');
      img.src = "img/jugador2.png";
      const img2 = document.getElementById('img-player2');
      img2.style.transform = "scale(1.2)";
      img2.style.opacity = '1'
      const img1 = document.getElementById('img-player1');
      img1.style.opacity = '0.2';
      jugador2.classList.add('jugador2')
      player1 = false;
   }
   let modal = document.querySelectorAll('.modal')[0];
   let modal_container = document.getElementById('modal')

   modal_container.style.visibility = 'visible';
   modal.classList.toggle('modal-close');

   //iniciarJuego(newGame, player1);
   const button_ranGame = document.getElementById('ranGame');
   button_ranGame.disable = true;
   button_ranGame.style.opacity = '0.3';
   button_ranGame.style.backgroundColor = 'transparent';
   button_ranGame.style.color = 'white';
   button_ranGame.style.borderWidth = '2px';
   button_ranGame.style.borderColor = 'white';
   button_ranGame.style.borderStyle = 'solid';
   button_ranGame.style.cursor = 'default';

   return player1;
}

arrayButtons.forEach((celda)=>{
   
   celda.style.cursor = 'pointer'
   celda.addEventListener('click', (e)=>{
         if(player1 === true){
            simbolo = 'O'
            count_clicks++;
            celda.textContent = simbolo
            celda.style.color = 'red'
            celda.style.fontSize = '5rem'
            celda.disabled = true;
            celda.style.cursor = 'default'
            const img1 = document.getElementById('img-player1');
            img1.style.opacity = '0.2';
            const img2 = document.getElementById('img-player2');
            img2.style.transform = "scale(1.2)";
            img2.style.opacity = '1'
            player1 = false
            jugador1.classList.remove('jugador1')
            jugador2.classList.add('jugador2')

            validaciones()
            
         } else {
            simbolo = 'X'
            count_clicks++;
            celda.textContent = 'X'
            celda.style.color = 'blue'
            celda.style.fontSize = '5rem'
            celda.disabled = true;
            celda.style.cursor = 'default'
            player1 = true
            const img1 = document.getElementById('img-player1');
            img1.style.transform = "scale(1.2)";
            const img2 = document.getElementById('img-player2');
            img2.style.opacity = '0.2';
            img1.style.opacity = '1'
            jugador2.classList.remove('jugador2')
            jugador1.classList.add('jugador1')
            validaciones()
         }

         
         if (score1  == 3|| score2 == 3){
            reset.disabled = false;
            reset.style.cursor = 'pointer'
            reset.style.backgroundColor = '#8BBCCC'
            reset.style.color = 'black'
         }
          
   })
  

})
window.addEventListener('click', (e)=>{
   let modal = document.querySelector('.modal');
   let modal_container = document.querySelector('.modal-container');

   if (e.target == modal_container){
      modal.classList.toggle('modal-close')
      setTimeout(
         function (){
            modal_container.style.opacity = '0';
            modal_container.style.visibility = 'hidden';
         }, 1000
      )
   }
})

function validaciones(){
   if (count_clicks == 9){
      nextGame.disabled= false
      nextGame.style.background = '#8BBCCC';
      nextGame.style.cursor = 'pointer';
      count_clicks = 0
   } 
   // validacion de fila 1
   if (simbolo == arrayCeldas[0].innerText && simbolo == arrayCeldas[1].innerText && simbolo == arrayCeldas[2].innerText){
      count_clicks = 0;
      arrayCeldas[0].style.backgroundColor = 'yellow'
      arrayCeldas[1].style.backgroundColor = 'yellow'
      arrayCeldas[2].style.backgroundColor = 'yellow'
      if (simbolo === 'X'){
         score2 += 1;
         score2m.innerText = score2;
         score_p2.innerText = score2
         if (score_p2.innerText === '3' || score2m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            modal_ganador.classList.toggle('mostrar_ganador')
            img_ganador.src = 'img/jugador2.png'
            nextGame.disabled = true;
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
         window.addEventListener('click', (e)=>{
            
         
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
            }
         })
         
      } else if (simbolo === 'O') {
         score1 +=1;
         score1m.innerText = score1;
         score_p1.innerText = score1
         if (score_p1.innerText === '3' || score1m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            img_ganador.src = 'img/jugador1.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
   
         // cerrar modal ganador
         window.addEventListener('click', (e)=>{
            
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
            }
         })
      }
   }
   //validacion de fila 2
   else if (simbolo == arrayCeldas[3].innerText && simbolo == arrayCeldas[4].innerText && simbolo == arrayCeldas[5].innerText){
      arrayCeldas[3].style.backgroundColor = 'yellow'
      arrayCeldas[4].style.backgroundColor = 'yellow'
      arrayCeldas[5].style.backgroundColor = 'yellow'
      count_clicks = 0;
      if (simbolo === 'X'){
         score2 += 1;
         score2m.innerText = score2;
         score_p2.innerText = score2
         if (score_p2.innerText === '3' || score2m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            modal_ganador.classList.toggle('mostrar_ganador')
            img_ganador.src = 'img/jugador2.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
         window.addEventListener('click', (e)=>{
            
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
            }
         })
         
      } else if (simbolo === 'O') {
         score1 +=1;
         score1m.innerText = score1;
         score_p1.innerText = score1
         if (score1 === 3 || score2 === 3){
            modal_ganador.style.visibility = 'visible'
            img_ganador.src = 'img/jugador1.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
   
         // cerrar modal ganador
         window.addEventListener('click', (e)=>{
            
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
            }
         })
      }
   }
   //validacion de fila 3
   else if (simbolo == arrayCeldas[6].innerText && simbolo == arrayCeldas[7].innerText && simbolo == arrayCeldas[8].innerText){
      arrayCeldas[6].style.backgroundColor = 'yellow'
      arrayCeldas[7].style.backgroundColor = 'yellow'
      arrayCeldas[8].style.backgroundColor = 'yellow'
      count_clicks = 0;
      if (simbolo === 'X'){
         score2 += 1;
         score2m.innerText = score2;
         score_p2.innerText = score2
         if (score_p2.innerText === '3' || score2m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            modal_ganador.classList.toggle('mostrar_ganador')
            img_ganador.src = 'img/jugador2.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
         window.addEventListener('click', (e)=>{
            
            const main = document.getElementById('main');
            const asides = document.querySelectorAll('.main__aside');
            const footer = document.querySelector('.footer')
         
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
               
            }
         })
         
      } else if (simbolo === 'O') {
         score1 +=1;
         score1m.innerText = score1;
         score_p1.innerText = score1
         if (score_p1.innerText === '3' || score1m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            img_ganador.src = 'img/jugador1.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
   
         // cerrar modal ganador
         window.addEventListener('click', (e)=>{
            
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
            }
         })
      }
   }
   //validacion de columna 1
   else if (simbolo == arrayCeldas[0].innerText && simbolo == arrayCeldas[3].innerText && simbolo == arrayCeldas[6].innerText){
      arrayCeldas[0].style.backgroundColor = 'yellow'
      arrayCeldas[3].style.backgroundColor = 'yellow'
      arrayCeldas[6].style.backgroundColor = 'yellow'
      count_clicks = 0;
      if (simbolo === 'X'){
         score2 += 1;
         score2m.innerText = score2;
         score_p2.innerText = score2
         if (score_p2.innerText === '3' || score2m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            modal_ganador.classList.toggle('mostrar_ganador')
            img_ganador.src = 'img/jugador2.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
         window.addEventListener('click', (e)=>{
            
            const main = document.getElementById('main');
            const asides = document.querySelectorAll('.main__aside');
            const footer = document.querySelector('.footer')
         
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
               
            }
         })
         
      } else if (simbolo === 'O') {
         score1 +=1;
         score1m.innerText = score1;
         score_p1.innerText = score1
         if (score_p1.innerText === '3' || score1m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            img_ganador.src = 'img/jugador1.png'
            reset.disabled = false
            reset.style.cursor = 'pointer'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
   
         // cerrar modal ganador
         window.addEventListener('click', (e)=>{
            
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
            }
         })
      }
   }
   //validacion de columna 2
   else if (simbolo == arrayCeldas[1].innerText && simbolo == arrayCeldas[4].innerText && simbolo == arrayCeldas[7].innerText){
      arrayCeldas[1].style.backgroundColor = 'yellow'
      arrayCeldas[4].style.backgroundColor = 'yellow'
      arrayCeldas[7].style.backgroundColor = 'yellow'
      count_clicks = 0;
      if (simbolo === 'X'){
         score2 += 1;
         score2m.innerText = score2;
         score_p2.innerText = score2
         if (score_p2.innerText === '3' || score2m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            modal_ganador.classList.toggle('mostrar_ganador')
            img_ganador.src = 'img/jugador2.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
         window.addEventListener('click', (e)=>{
            
            const main = document.getElementById('main');
            const asides = document.querySelectorAll('.main__aside');
            const footer = document.querySelector('.footer')
         
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
               
            }
         })
         
      } else if (simbolo === 'O') {
         score1 +=1;
         score1m.innerText = score1;
         score_p1.innerText = score1
         if (score_p1.innerText === '3' || score1m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            img_ganador.src = 'img/jugador1.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
   
         // cerrar modal ganador
         window.addEventListener('click', (e)=>{
            
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
            }
         })
      }
   }
   //validacion de columna 3
   else if (simbolo == arrayCeldas[2].innerText && simbolo == arrayCeldas[5].innerText && simbolo == arrayCeldas[8].innerText){
      arrayCeldas[2].style.backgroundColor = 'yellow'
      arrayCeldas[5].style.backgroundColor = 'yellow'
      arrayCeldas[8].style.backgroundColor = 'yellow'
      count_clicks = 0;
      if (simbolo === 'X'){
         score2 += 1;
         score2m.innerText = score2;
         score_p2.innerText = score2
         if (score_p2.innerText === '3' || score2m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            modal_ganador.classList.toggle('mostrar_ganador')
            img_ganador.src = 'img/jugador2.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
         window.addEventListener('click', (e)=>{
            
            const main = document.getElementById('main');
            const asides = document.querySelectorAll('.main__aside');
            const footer = document.querySelector('.footer')
         
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
               
            }
         })
         
      } else if (simbolo === 'O') {
         score1 +=1;
         score1m.innerText = score1;
         score_p1.innerText = score1
         if (score_p1.innerText === '3' || score1m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            img_ganador.src = 'img/jugador1.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
   
         // cerrar modal ganador
         window.addEventListener('click', (e)=>{
            
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
            }
         })
      }
   }
   //validacion de diagonal 1
   else if (simbolo == arrayCeldas[0].innerText && simbolo == arrayCeldas[4].innerText && simbolo == arrayCeldas[8].innerText){
      arrayCeldas[0].style.backgroundColor = 'yellow'
      arrayCeldas[4].style.backgroundColor = 'yellow'
      arrayCeldas[8].style.backgroundColor = 'yellow'
      count_clicks = 0;
      if (simbolo === 'X'){
         score2 += 1;
         score2m.innerText = score2;
         score_p2.innerText = score2
         if (score_p2.innerText === '3' || score2m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            modal_ganador.classList.toggle('mostrar_ganador')
            img_ganador.src = 'img/jugador2.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
         window.addEventListener('click', (e)=>{
            
            const main = document.getElementById('main');
            const asides = document.querySelectorAll('.main__aside');
            const footer = document.querySelector('.footer')
         
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
               
            }
         })
         
      } else if (simbolo === 'O') {
         score1 +=1;
         score1m.innerText = score1;
         score_p1.innerText = score1
         if (score_p1.innerText === '3' || score1m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            img_ganador.src = 'img/jugador1.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
   
         // cerrar modal ganador
         window.addEventListener('click', (e)=>{
            
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
            }
         })
      }
   }
   //validacion de diagona 2
   else if (simbolo == arrayCeldas[2].innerText && simbolo == arrayCeldas[4].innerText && simbolo == arrayCeldas[6].innerText){
      arrayCeldas[2].style.backgroundColor = 'yellow'
      arrayCeldas[4].style.backgroundColor = 'yellow'
      arrayCeldas[6].style.backgroundColor = 'yellow'
      count_clicks = 0;
      if (simbolo === 'X'){
         score2 += 1;
         score2m.innerText = score2;
         score_p2.innerText = score2
         if (score_p2.innerText === '3' || score2m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            modal_ganador.classList.add('mostrar_ganador')
            img_ganador.src = 'img/jugador2.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
         window.addEventListener('click', (e)=>{
            
            const main = document.getElementById('main');
            const asides = document.querySelectorAll('.main__aside');
            const footer = document.querySelector('.footer')
         
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
               
            }
         })
         
      } else if (simbolo === 'O') {
         score1 +=1;
         score1m.innerText = score1;
         score_p1.innerText = score1
         if (score_p1.innerText === '3' || score1m.innerText === '3'){
            modal_ganador.style.visibility = 'visible'
            img_ganador.src = 'img/jugador1.png'
         }
         arrayButtons.forEach((button)=>{
            button.disabled = true
         })
         nextGame.disabled = false
         nextGame.style.background = '#8BBCCC'
         nextGame.style.cursor = 'pointer'
   
         // cerrar modal ganador
         window.addEventListener('click', (e)=>{
            
            if (e.target == cerrar){
               modal_ganador.classList.toggle('ganador')
            }
         })
      }
   }
}

// inciarjuego

function iniciarJuego(newGame, player1){
   
   if(!newGame){
      for(let i=1; i<10; i++){
         let string = 'button-active' + i;
         document.getElementById(string).style.display = 'block'
      }
   } else {
      for(i=1; i<10; i++){
         let string = 'button-active' + i;
         document.getElementById(string).disable = false;
         document.getElementById(string).style.cursor = 'pointer';
      }
      newGame = false;
   }
}

reset.addEventListener('click', ()=>{
   score1 = 0;
   score2 = 0;
   score_p1.innerText = score1;
   score_p2.innerText = score2;
})
cerrar.addEventListener('click',()=>{
   
      modal_ganador.classList.add('cerarwinn')
   
})





