// chamar elemntos do HTML 
//  dinossauro pulando - img dino indo pra cima 
// evento de tecla do teclado pressionada
// dino subindo
// dino descendo
// cactus aparecendo da direita pra esquerda, aleatorio
// quando a img do dino ocupar a img de cacto, fim de jogo
// aparece texto fim 'fim de jogo' 

const dino = document.querySelector(' .dino ');
const background = document.querySelector(' .background' );

//----------- DINO -----------//

    // funcção da tecla espaço//

function pegarEventoTeclado ( event ){
    if(event.keyCode === 32 ){
    pular()
    }
} 
    document.addEventListener('keyup', pegarEventoTeclado);

    
        //-----------------DINO PULANDO--------------// 
let position = 0;

function pular(){ 
    let subidaIntervalo = setInterval( () => {
        
        //topo do pulo
        if( position >= 200){
            clearInterval (subidaIntervalo);
    
        // descida
    let descidaIntervalo = setInterval ( () =>{
        
        //chão
        if ( position <= 0){
            clearInterval (descidaIntervalo)

        //descida
        }else{
            position -= 20
            dino.style.bottom = position + 'px' 
        }
    },20)
}
        //subida
            position += 20
            dino.style.bottom = position + 'px';
    },20)
}



