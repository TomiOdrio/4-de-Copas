// SELECCIONAR PARTIDA

const btn15=document.querySelector("#btn15"),
btn30=document.querySelector("#btn30"),
cols1=document.getElementsByClassName("col1"),
cols2=document.getElementsByClassName("col2"),
partida=document.querySelector(".partida");

var limite=0;

btn15.addEventListener("click",function(){
    partida.style.display="none";
    limite=15;
    for(let i=0;i<cols2.length;i++){
        cols2[i].style.display="none";
        cols1[i].gridTemplateColumns="repeat(auto-fit,minmax(1vw,1fr))";
        document.querySelector(".puntaje").style.justifyContent="center"
    }
})
btn30.addEventListener("click",function(){
    partida.style.display="none";
    limite=30;
})

// INSERTAR JUGADORES

const btnSubmit = document.querySelector("#boton"),
jug1 = document.querySelector("#jug1"),
jug2 = document.querySelector("#jug2");

btnSubmit.addEventListener("click",function(){
    if(jug1.value==""){
        alert("No puede introducir nombres vacíos");
        jug1.focus();
    }
    else if(jug2.value==""){
        alert("No puede introducir nombres vacíos");
        jug2.focus();
    }
    else{
        document.querySelector(".nombre").style.display="none";
        document.querySelector("#nombre1").innerHTML=jug1.value; 
        document.querySelector("#nombre2").innerHTML=jug2.value;
    }
})

// CONTAR PUNTOS

var plusBtn1 = document.querySelector("#mas1"),
lessBtn1 = document.querySelector("#menos1"),
plusBtn2 = document.querySelector("#mas2"),
lessBtn2 = document.querySelector("#menos2"),
cont1 = 0,cont2 = 0,
fos1 = document.getElementsByClassName("fos1"),
fos2 = document.getElementsByClassName("fos2"),
win = document.querySelector(".win")

plusBtn1.addEventListener("click",function(){
    cont1+=1;
    for(let i=cont1-1 ; i<cont1 ; i++){
        fos1[i].style.display="block";
    }
    if(cont1==limite){
        document.querySelector("#ganador").innerHTML=document.querySelector("#jug1").value
        win.style.display="block"
    }
})
lessBtn1.addEventListener("click",function(){
    cont1-=1;
    for(let i=cont1 ; i<=cont1 ; i++){
        fos1[i].style.display="none";
    }
})
plusBtn2.addEventListener("click",function(){
    cont2+=1;
    for(let i=cont2-1 ; i<cont2 ; i++){
        fos2[i].style.display="block";
    }
    if(cont2==limite){
        document.querySelector("#ganador").innerHTML=document.querySelector("#jug2").value
        win.style.display="block"
    }
})
lessBtn2.addEventListener("click",function(){
    cont2-=1;
    for(let i=cont2 ; i<=cont2 ; i++){
        fos2[i].style.display="none";
    }
})

// ABRIR Y CERRAR MENU

const bars = document.querySelector(".barras"),
closeBtn = document.querySelector("#close"),
menu = document.querySelector(".menu");

bars.addEventListener("click",function(){
    menu.style.display="block";
})
closeBtn.addEventListener("click",function(){
    menu.style.display="none";
})
