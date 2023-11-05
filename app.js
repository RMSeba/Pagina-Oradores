let mostrador=document.getElementById('resumen')
let cantidad=document.getElementById('cantidad')
let categoria=document.getElementById('opciones')
function resumen(){
    let total
    cantidadBoletos=cantidad.value;
    descuento=categoria.value;
    console.log(descuento)
    console.log(cantidadBoletos)
    
    if(descuento=="estudiante"){
        total=cantidadBoletos*200
        totalEst=total-(total*80/100)
        mostrador.innerHTML='Total a pagar:$ '+totalEst;
        
    }
    else if(descuento=="trainee"){
        total=cantidadBoletos*200
        totalTrainee=total-(total*50/100)
        mostrador.innerHTML='Total a pagar:$ '+totalTrainee;
        
    }
    else {
        total=cantidadBoletos*200
        totalJunior=total-(total*15/100)
        mostrador.innerHTML='Total a pagar:$ '+totalJunior;
        
    }
}
function borrar(){
    mostrador.innerHTML="Total a pagar:$"
 
}