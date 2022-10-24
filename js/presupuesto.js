//---------------------FLAVIA MICAELA SANDOVAL---------------------
document.getElementById('formulario').onclick = function () {
    var suma = 0;

    var level = document.getElementById("level");
    var value = level.options[level.selectedIndex].value;
    var nivel = parseFloat(value);

    var size = document.getElementById("size");
    value = size.options[size.selectedIndex].value;
    var tamaño= parseFloat(value);

    var sabor = document.getElementById("sabor");
    value = sabor.options[sabor.selectedIndex].value;
    var gusto= parseFloat(value);

    var cobertura = document.getElementById("cobertura");
    value = cobertura.options[cobertura.selectedIndex].value;
    var cobert= parseFloat(value);

    var deco = document.getElementById("deco");
    value = deco.options[deco.selectedIndex].value;
    var decoracion= parseFloat(value);
    
    

    //solo voy a permitir que se vea el valor final si todos los campos fueron seleccionados
    if(nivel*tamaño*gusto*cobert*decoracion!=0){
        suma=tamaño+gusto+cobert+decoracion;
        presupuesto = nivel * suma; //considero que el factor del nivel multiplica las proporciones
    }
    
    document.getElementById("resultado").innerHTML = 'El presupuesto calculado es de:'+"<br>"+"$" + presupuesto;
}