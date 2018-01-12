var contador=0;
var acierto=null;
$(document).ready(function(){
    
    //con draggable indicamos que el objeto que hemos recogido en $() es posible cogerlo y arrastrarlo.
    //la funcion revert hace que cuando arrastremos una figura y la soltemos, vuelva a su posicion original, de este modo si encajan una pieza donde no es, volvera a su posicion original
    //con start inicializamos la figura a false
    //con stop creamos una funcion y llamamos a la funcion acierto o fallo, que comprobara si la ficha ha sido introducida correctamente o no
    $('#estrella').draggable({
        revert:"invalid",
        start: function(event, ui) {
            acierto=false;
        },
        stop: function(event, ui)
        {
            aciertoOfallo(acierto);
                
        }
    });
    $('#triangulo').draggable({
        revert: "invalid",
        start: function(event, ui) {
            acierto=false;
        },
        stop: function(event, ui)
        {
            aciertoOfallo(acierto);
                
        }
    });
    $('#cuadrado').draggable({
        revert:"invalid",
        start: function(event, ui) {
            acierto=false;
        },
        stop: function(event, ui)
        {
            aciertoOfallo(acierto);
                
        }
    });
    $('#circulo').draggable({
        revert:"invalid",
        start: function(event, ui) {
            acierto=false;
        },
        stop: function(event, ui)
        {
            aciertoOfallo(acierto);
                
        }
    });
    
    //con droppable indicamos el conteneddor en el cual se pueden soltar los elementos draggable, con accept indicamos que elementos queremos que encajen dentro, de ese modo no se podran soltar elementos que no deseemos.
    //con drop indicamos que queremos que algo ocurra al soltar la figura en su hueco, en este caso queremos que ponga el booleano acierto a true y que realice el sonido de acierto.
    $('#estrellaOscura').droppable({
       accept: '#estrella',
        //podemos hacer que acepte la figura si esta bien encajada con tolerance:"fit", pero tiene que encajar al 100% y es un poco complicado, asi que he decidido no ponerlo y que la ficha se quede encajada cuando el niño haya colocado al menos la mitad.
       //tolerance: 'fit',
        
       drop: function( event, ui ) {
           $('#colorEstrella').css("background-color", "yellow"),
           document.getElementById('player').play(),
            acierto=true;
       }
        
    });
    $('#trianguloOscuro').droppable({
       accept: '#triangulo',
        drop: function( event, ui ) {
            $('#colorTriangulo').css("background-color", "#6088BB"),
             document.getElementById('player').play(),
             acierto=true;
            
        }
    });
    
    $('#cuadradoOscuro').droppable({
       accept: '#cuadrado',
        drop: function( event, ui ) {
            $('#colorCuadrado').css("background-color", "green")
            document.getElementById('player').play(),
            acierto=true;
        }
    });
    $('#circuloOscuro').droppable({
       accept: '#circulo',
        drop: function( event, ui ) {
            $('#colorCirculo').css("background-color", "red")
            document.getElementById('player').play(),
            acierto=true;
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


//creamos la funcion que compruebe si la ficha ha sido introducida en su casilla correspondiente
function aciertoOfallo(acierto) {
    if(acierto==false){
        //si no ha acertado, se cambiara el texto de las instrucciones por un mensaje de fallo
        $("#p").text("Has fallado...");
        //y tambien el borde y el fondo por un color rojo
        $(".instrucciones").css("background-color", '#FF8B8B');
        $(".instrucciones").css("border-color", "red");   
    }else{
        //si ha acertado, se cambiara el texto de las instrucciones por un mensaje de acierto
        $("#p").text("¡Has acertado!");
        //y tambien el borde y el fondo por un color verde
        $(".instrucciones").css("background-color", '#A6ED8E ');
        $(".instrucciones").css("border-color", "#28CC9E");
        //despues aumentamos el contador de aciertos en 1 por cada acierto
        contador++;
        //llamamos a la funcion ganar para comprobar si el contador tiene 4 aciertos
        ganar();
    }
    
}

