// SELECCION CARTAS ENVIDO

const select = document.getElementsByClassName("select"),
opciones = document.getElementsByClassName("opciones"),
mas = document.getElementsByClassName("mas"),
menos = document.getElementsByClassName("menos"),
contenidoSelect = document.getElementsByClassName("contenido_select"),
calcBtn = document.getElementById("calcular"),
resultado = document.getElementById("envido"),
valores = [1,2,3,4,5,6,7,10,11,12],
figuras=["10","11","12"];

var cont = 0, cartas=[{},{},{}],
invalido=false,iguales=0,paloRepetido="",
listaValores = [], envido = 20;

for(let i=0; i<select.length;i++){
    select[i].addEventListener("click",function(){
        select[i].classList.toggle("active");
        opciones[i].classList.toggle("active");
    })

    mas[i].addEventListener("click",function(){
        if(cont==9){
            cont=0;
        }
        else{
            cont+=1;
        }
        document.getElementsByClassName("numero")[i].innerHTML=valores[cont];
    })

    menos[i].addEventListener("click",function(){
        if(cont==0){
            cont=9;
        }
        else{
            cont-=1;
        }
        document.getElementsByClassName("numero")[i].innerHTML=valores[cont];
    })

    document.getElementsByClassName("palos")[i].querySelectorAll(".opcion").forEach((opcion) => {
        opcion.addEventListener("click", (e) => {
            e.preventDefault();
            contenidoSelect[i].innerHTML=document.getElementsByClassName("numero")[i].innerHTML + e.currentTarget.innerHTML;
            carta={valor:document.getElementsByClassName("numero")[i].innerHTML,palo:e.currentTarget.innerHTML};
            cartas[i]=carta;
            select[i].classList.toggle("active");
            opciones[i].classList.toggle("active");
        })
    })
}

calcBtn.addEventListener("click",function(){
    for(let i=0;i<cartas.length;i++){
        if(Object.entries(cartas[i]).length==0){
            alert("Debe insertar las 3 cartas para calcular");
            invalido=true;
            break;
        }

        function compareObj(a, b) {
            var aKeys = Object.keys(a).sort();
            var bKeys = Object.keys(b).sort();
            if (aKeys.length !== bKeys.length) {
                return false;
            }
            if (aKeys.join('') !== bKeys.join('')) {
                return false;
            }
            for (var i = 0; i < aKeys.length; i++) {
                if ( a[aKeys[i]]  !== b[bKeys[i]]) {
                    return false;
                }
            }
            return true;
        }

        if(compareObj(cartas[0],cartas[1]) || compareObj(cartas[0],cartas[2]) || compareObj(cartas[1],cartas[2])){
            alert("No puede repetir cartas");
            invalido=true;
            break;
        }
    }
    if(!invalido){
        if(cartas[0].palo==cartas[1].palo || cartas[0].palo==cartas[2].palo){
            iguales+=1;
            paloRepetido=cartas[0].palo;
        }
        if(cartas[1].palo==cartas[2].palo){
            iguales+=1;
            paloRepetido=cartas[1].palo;
        }
        if(iguales>0){
            let repetidas = cartas.filter(carta=>carta.palo==paloRepetido);
            if(iguales==1){
                for(let i=0;i<repetidas.length;i++){
                    if(figuras.indexOf(repetidas[i].valor)==-1){
                        envido+=parseInt(repetidas[i].valor);
                    }
                }
            }
            else{
                for(let i=0;i<repetidas.length;i++){
                    if(figuras.indexOf(repetidas[i].valor)==-1){
                        listaValores.push(repetidas[i].valor);
                    }
                }
                if(listaValores.length==3){
                    listaValores.sort().shift();
                }
                envido+=parseInt(listaValores[0])+parseInt(listaValores[1]);
            }
        }
        else{
            for(let i=0;i<cartas.length;i++){
                if(figuras.indexOf(cartas[i].valor)==-1){
                    listaValores.push(cartas[i].valor);
                }
            }
            if(listaValores.length>0){
                envido=Math.max.apply(null,listaValores);
            }
            else{
                envido=0;
            }
        }
        resultado.innerHTML=envido;
        cont = 0,iguales=0,paloRepetido="", listaValores = [], envido = 20;
    }
    invalido=false;
})

// ABRIR Y CERRAR MENU

const bars = document.querySelector(".barras"),
closeBtn = document.querySelector("#x"),
menu = document.querySelector(".menu");

bars.addEventListener("click",function(){
    menu.style.display="block";
})
closeBtn.addEventListener("click",function(){
    menu.style.display="none";
})

//BOTON IR ARRIBA

document.querySelector(".up").addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})