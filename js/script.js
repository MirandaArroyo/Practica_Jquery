var contador=0;
$(document).ready(function(){
    
    //con draggable indicamos que el objeto que hemos recogido en $() es posible cogerlo y arrastrarlo.
    //la funcion recert hace que cuando arrastremos una figura y la soltemos, vuelva a su posicion original, de este modo si encajan una pieza donde no es, volvera a su posicion original
    $('#estrella').draggable({revert:"invalid"});
    $('#triangulo').draggable({revert:"invalid"});
    $('#cuadrado').draggable({revert:"invalid"});
    $('#circulo').draggable({revert:"invalid"});
    
    //con droppable indicamos el conteneddor en el cual se pueden soltar los elementos draggable, con accept indicamos que elementos queremos que encajen dentro, de ese modo no se podran soltar elementos que no deseemos.
    //con drop indicamos que queremos que algo ocurra al soltar la figura en su hueco, en este caso queremos que cambie de color asi que llamamos a function e indicamos que el contenedor 'figuraOscura' que esta en color gris, tiene que cambiar de color.
    //aumentamos en 1 el contador cada vez que se coloca bien una ficha y despues llamamos a la funcion ganar, que comprobara si se han colocado las 4 fichas
    $('#estrellaOscura').droppable({
       accept: '#estrella',
        //podemos hacer que acepte la figura si esta bien encajada con tolerance:"fit", pero tiene que encajar al 100% y es un poco complicado, asi que he decidido no ponerlo y que la ficha se quede encajada cuando el niño haya colocado al menos la mitad.
       //tolerance: 'fit',
       drop: function( event, ui ) {
           $('#colorEstrella').css("background-color", "yellow") ,
           document.getElementById('player').play(),
            contador++;
           ganar();
       }
    });
    $('#trianguloOscuro').droppable({
       accept: '#triangulo',
        drop: function( event, ui ) {
            $('#colorTriangulo').css("background-color", "#6088BB"),
             document.getElementById('player').play(),
            contador++;
            ganar();
        }
    });
    
    $('#cuadradoOscuro').droppable({
       accept: '#cuadrado',
        drop: function( event, ui ) {
            $('#colorCuadrado').css("background-color", "green")
            document.getElementById('player').play(),
            contador++;
            ganar();
        }
    });
    $('#circuloOscuro').droppable({
       accept: '#circulo',
        drop: function( event, ui ) {
            $('#colorCirculo').css("background-color", "red")
            document.getElementById('player').play(),
            contador++;
            ganar();
        }
        
    });
    
    

    
});
//creamos la funcion ganar para comprobar que estan las 4 fichas puestas
function ganar(){
    if(contador==4){
        //cambiamos el texto de las instrucciones por el mensaje ganador
        $("#p").text("¡Muy bien, has ganado!");
        //cambiamos el fondo verde de las instrucciones por un fondo amarillo claro
        $(".instrucciones").css("background-color", '#FFDD83');
        //cambiamos el borde verde de las instrucciones por un amarillo oscuro
        $(".instrucciones").css("border-color", "yellow");
    }
}

