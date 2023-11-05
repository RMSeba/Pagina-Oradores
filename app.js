let mostrador=document.getElementById('resumen')
let cantidad=document.getElementById('cantidad')
let categoria=document.getElementById('opciones')
let nombre=document.getElementById('nombre');

let apellido=document.getElementById('apellido');
let email=document.getElementById('email');


function resumen(){
    
    let total
    cantidadBoletos=cantidad.value;
    descuento=categoria.value;
    console.log(nombre)
    console.log(apellido)
    
    if(descuento=="estudiante"){
        total=cantidadBoletos*200
        totalEst=total-(total*80/100)
        mostrador.innerHTML=`   Nombre:${mayusPrimerLetra(nombre.value)}<br>
                                Apellido:${mayusPrimerLetra(apellido.value)}<br>
                                Email:${mayusPrimerLetra(email.value)}<br> 
                                Total a pagar:$${totalEst}`;
        
    }
    else if(descuento=="trainee"){
        total=cantidadBoletos*200
        totalTrainee=total-(total*50/100)
        mostrador.innerHTML=`   Nombre:${mayusPrimerLetra(nombre.value)}<br>
                                Apellido:${mayusPrimerLetra(apellido.value)}<br>
                                Email:${mayusPrimerLetra(email.value)}<br>
                                Total a pagar:$${totalTrainee}` ;
        
    }
    else {
        total=cantidadBoletos*200
        totalJunior=total-(total*15/100)
        mostrador.innerHTML=`   Nombre:${mayusPrimerLetra(nombre.value)}<br>
                                Apellido:${mayusPrimerLetra(apellido.value)}<br>
                                Email:${mayusPrimerLetra(email.value)}<br>
                                Total a pagar:$${totalJunior}`;;
        
    }
}
function borrar(){
    mostrador.innerHTML="Total a pagar:$"
 
}
function mayusPrimerLetra(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}